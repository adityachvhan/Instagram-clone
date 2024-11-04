package com.corejavahub.services;

import com.corejavahub.dto.UserDto;
import com.corejavahub.exception.CommentException;
import com.corejavahub.exception.PostException;
import com.corejavahub.exception.UserException;
import com.corejavahub.model.Comments;
import com.corejavahub.model.Post;
import com.corejavahub.model.User;
import com.corejavahub.repository.CommentRepository;
import com.corejavahub.repository.PostRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentsServiceImplement implements CommentService {
	
	@Autowired
	private CommentRepository repo;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private PostService postService;
	
	@Autowired
	private PostRepository postRepo;

	
	
	@Override
	public Comments createComment(Comments comment, Integer postId, Integer userId) throws PostException, UserException {
		
		User user=userService.findUserById(userId);
		
		Post post=postService.findePostById(postId);
		
		// TODO Auto-generated method stub
		
		UserDto userDto=new UserDto();
		userDto.setEmail(user.getEmail());
		userDto.setId(user.getId());
		userDto.setUsername(user.getUsername());
		userDto.setName(user.getName());
		userDto.setUserImage(user.getImage());
		
		comment.setUserDto(userDto);
		comment.setCreatedAt(LocalDateTime.now());
		comment.setPost(post);
		
		Comments newComment= repo.save(comment);
		
		post.getComments().add(newComment);
		
		postRepo.save(post);
		
		return newComment;
	}


	@Override
	public Comments findCommentById(Integer commentId) throws CommentException {
		Optional<Comments> opt=repo.findById(commentId);
		
		if(opt.isPresent()) {
			return opt.get();
		}
		throw new CommentException("comment not exist with id : "+commentId);
	}

	@Override
	public Comments likeComment(Integer commentId, Integer userId) throws UserException, CommentException {
		// TODO Auto-generated method stub
		
		User user=userService.findUserById(userId);
		Comments comment=findCommentById(commentId);
		
		
		UserDto userDto=new UserDto();
		userDto.setEmail(user.getEmail());
		userDto.setId(user.getId());
		userDto.setUsername(user.getUsername());
		userDto.setName(user.getName());
		userDto.setUserImage(user.getImage());
		
		comment.getLikedByUsers().add(userDto);
		System.out.println(("like ------- "+" ------ "+comment));
		return repo.save(comment);
		
	}


	@Override
	public Comments unlikeComment(Integer commentId, Integer userId) throws UserException, CommentException {
		User user=userService.findUserById(userId);
		Comments comment=findCommentById(commentId);
		
		comment.getLikedByUsers().remove(user);
		
		return repo.save(comment);
		
	}


	@Override
	public String deleteCommentById(Integer commentId) throws CommentException {
		Comments comment=findCommentById(commentId);
		
		System.out.println("find by id delete-------- "+comment.getContent());
		
		repo.deleteById(comment.getId());
		
		return "Comment Deleted Successfully";
	}


	@Override
	public String editComment(Comments comment,Integer commentId) throws CommentException {
		Comments isComment=findCommentById(commentId);
		
		if(comment.getContent()!=null) {
			isComment.setContent(comment.getContent());
		}
		repo.save(isComment);
		return "Comment Updated Successfully";
	}


	@Override
	public List<Comments> findCommentByPostId(Integer postId) throws PostException {
		List<Comments> comments =repo.findCommentsByPostId(postId);
		return comments;
	}




	
	
	
	
	

}
