import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            Title: post?.Title || "",
            slug: post?.$id || "",
            Content: post?.Content || "",
            Status: post?.Status || "active",
        },
    });
    // watch() – monitor form fields for changes
    // setValue() – programmatically set form field values

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            // editing an existing post
            /*
            Load default values
            Update the content and optionally update the image
            */ 

            // updating image
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
            // data.image-list of files
            /*
            data.image = FileList {
                0: File { name: "my-image.jpg", type: "image/jpeg", ... },
                length: 1
            }
            */

            // delete old image
            if (file) {
                await appwriteService.deleteFile(post.FeaturedImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                FeaturedImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file= await appwriteService.uploadFile(data.image[0]);
            console.log(file)
            if(file){
                const fileId=file.$id;
                const dbPost = await appwriteService.createPost({
                ...data,
                FeaturedImage:fileId,
                UserId:userData.$id
            });


             if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
          }
        }
    };

    //  slug is a URL-friendly version of your blog post title.
    // Title-My First Blog Post!	Slug-my-first-blog-post	 URL-/post/my-first-blog-post

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    // Automatically updates the slug field as the user types in the title field.
    React.useEffect(() => {
        // value = all current form values
  // name = name of the field that changed

        const subscription = watch((value, { name }) => {
            if (name === "Title") {
                setValue("slug", slugTransform(value.Title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            {/* left side */}
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("Title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="Content" control={control} defaultValue={getValues("Content")} />
            </div>

            {/* right side */}
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {/* POST ALREADY EXISTS, DIPLAY ITS OLD IMAGE IN ORDER TO EDIT */}
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.FeaturedImage)}
                            alt={post.Title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("Status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}