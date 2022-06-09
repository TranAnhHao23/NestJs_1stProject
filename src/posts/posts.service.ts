import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  posts = [
    {
      id: 1,
      title: 'Chúng tôi là ai?',
      description:
        'Sun Asterisk chứa đựng ước mơ và mục tiêu kiến tạo nên thật nhiều những điều tốt đẹp cho xã hội của tập thể những chiến binh mặt trời.',
      author: 'Sun*',
      url: 'https://sun-asterisk.vn/ve-chung-toi/',
    },
    {
      id: 2,
      title: 'Chúng tôi làm gì?',
      description:
        'Là một Digital Creative Studio, Sun* luôn đề cao tinh thần làm chủ sản phẩm, tư duy sáng tạo trong mỗi dự án để mang đến những trải nghiệm "Awesome" nhất cho end-user',
      author: 'Sun*',
      url: 'https://sun-asterisk.vn/creative-engineering/',
    },
  ];

  getPosts(): any {
    return this.posts;
  }

  getPost(idPost): any {
    const id = Number(idPost);
    const post = this.posts.find((post) => post.id === id);
    if (post !== null) {
      return post;
    } else {
      throw new HttpException('Post not found', 404);
    }
  }

  addPost(post): any {
    this.posts.push(post);
    return this.posts;
  }

  deletePost(idPost): any {
    const id = Number(idPost);
    const index = this.posts.findIndex((post) => post.id === id);
    if (index !== -1) {
      this.posts.splice(index, 1);
      return this.posts;
    } else {
      throw new HttpException('Post not found', 404);
    }
  }
}
