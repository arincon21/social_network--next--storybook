'use client';

import { useState } from 'react';
import { FriendSuggestion, friendSuggestionsData } from '../constants/friend-suggestions-data';

export const useFriendSuggestions = () => {
  const [suggestions, setSuggestions] = useState<FriendSuggestion[]>(friendSuggestionsData);
  const [sentRequests, setSentRequests] = useState<Set<string>>(new Set());

  // Send friend request
  const sendFriendRequest = (friendId: string) => {
    setSentRequests(prev => new Set([...prev, friendId]));
  };

  // Remove suggestion (when user dismisses it)
  const removeSuggestion = (friendId: string) => {
    setSuggestions(prev => prev.filter(suggestion => suggestion.id !== friendId));
  };

  // Get online friends only
  const getOnlineSuggestions = (): FriendSuggestion[] => {
    return suggestions.filter(suggestion => suggestion.isOnline);
  };

  // Get suggestions with mutual friends
  const getSuggestionsWithMutualFriends = (minMutualFriends: number = 1): FriendSuggestion[] => {
    return suggestions.filter(suggestion => suggestion.mutualFriends >= minMutualFriends);
  };

  // Check if request was sent
  const isRequestSent = (friendId: string): boolean => {
    return sentRequests.has(friendId);
  };

  return {
    suggestions,
    sendFriendRequest,
    removeSuggestion,
    getOnlineSuggestions,
    getSuggestionsWithMutualFriends,
    isRequestSent,
  };
};