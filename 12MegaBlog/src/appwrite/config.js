import conf from "../conf/conf";

import { Client, ID, Databases,Storage ,Query  } from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;
   
   
    constructor(){

    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)

    this.databases=new Databases(this.client)
    this.bucket=new Storage(this.client)

   }

   async createPost({Title,slug,Content,FeaturedImage,Status,UserId}){
    try {

      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
            Title,
            Content,
            FeaturedImage,
            Status,
            UserId
        }
      )
        
    } catch (error) {

         console.log("Appwrite serive :: createPost :: error", error);
    }
   }

   async updatePost(slug,{Title,Content,FeaturedImage,Status}){
    try {

      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
            Title,
            Content,
            FeaturedImage,
            Status,
           
        }
      )
        
    } catch (error) {

         console.log("Appwrite serive :: createPost :: error", error);
    }
   }
   async deletePost(slug){
    try {

      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
        
      )
      return true
        
    } catch (error) {

         console.log("Appwrite serive :: createPost :: error", error);
         return false
    }
   }

   async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }
    async getPosts(queries=[Query.equal("Status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            
            )
            /*
            {
  "total": 5,
  "documents": [
    {
      "$id": "abc123",
      "title": "My Post",
      "slug": "my-post",
      ...
    },
    ...
  ]
}
            */ 
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }
    
    async uploadFile(file){
    try {

      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      )
        
    } catch (error) {

         console.log("Appwrite serive :: createPost :: error", error);
         return false
    }
   }

   async deleteFile(fileId){
    try {

      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      )
      return true
        
    } catch (error) {

         console.log("Appwrite serive :: createPost :: error", error);
         return false
    }
   }

   // returns an url-"https://cloud.appwrite.io/v1/storage/buckets/<bucketId>/files/<fileId>/preview?...params"

   getFilePreview(fileId){

        try {
          const session= this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
        console.log("this is session",session);

        return session
          
        } catch (error) {
          console.error("Error getting file preview:", error);
        return "";
        }
        
    }

   

}

const appwriteService = new Service();

export default appwriteService



