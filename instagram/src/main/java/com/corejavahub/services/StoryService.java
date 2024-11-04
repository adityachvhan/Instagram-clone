package com.corejavahub.services;

import java.util.List;

import com.corejavahub.exception.StoryException;
import com.corejavahub.exception.UserException;
import com.corejavahub.model.Story;

public interface StoryService {

	public Story createStory(Story story,Integer userId) throws UserException;
	
	public List<Story> findStoryByUserId(Integer userId) throws UserException, StoryException;
	
	
}
