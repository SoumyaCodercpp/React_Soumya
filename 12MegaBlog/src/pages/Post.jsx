import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.UserId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                     if (post.FeaturedImage) {
                        setImageUrl(appwriteService.getFilePreview(post.FeaturedImage));
                    }
                }
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((success) => {
            // deleting image from bucket
            if (success) {
                appwriteService.deleteFile(post.FeaturedImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                     {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={post.Title}
                            className="rounded-xl"
                            onError={() => setImageUrl("/fallback-image.jpg")}
                        />
                    ) : (
                        <div className="bg-gray-200 w-full h-64 flex items-center justify-center rounded-xl">
                            Loading image...
                        </div>
                    )}

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.Title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.Content)}
                </div>
            </Container>
        </div>
    ) : null;
}