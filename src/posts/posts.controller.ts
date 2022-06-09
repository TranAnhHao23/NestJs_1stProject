import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { PostsService } from './posts.service';
import { CreatePostDto } from './create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  async getPosts() {
    return await this.postService.getPosts();
  }

  @Get(':idPost')
  async getPost(@Param('idPost') idPost) {
    return await this.postService.getPost(idPost);
  }

  @Post()
  async addPost(@Body() createPostDTO: CreatePostDto) {
    return await this.postService.addPost(createPostDTO);
  }

  @Delete(':postId')
  async deletePost(@Param('postId') idPost) {
    return await this.postService.deletePost(idPost);
  }
}
