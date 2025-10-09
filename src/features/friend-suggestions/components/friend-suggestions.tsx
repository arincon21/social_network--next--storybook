'use client';

import React from 'react';
import { UserPlus, X, Users } from 'lucide-react';
import Avatar from '@/shared/components/avatar';
import { useFriendSuggestions } from '../hooks/use-friend-suggestions';
import Card from '@/shared/components/card';
import Icon from '@/shared/components/icon';
import Scrollbar from '@/shared/components/scrollbar';

const FriendSuggestions = () => {
  const {
    suggestions,
    sendFriendRequest,
    removeSuggestion,
    isRequestSent,
  } = useFriendSuggestions();

  if (suggestions.length === 0) {
    return null;
  }

  const handleAddFriend = (friendId: string, friendName: string) => {
    sendFriendRequest(friendId);
    // Here you could add a toast notification or other feedback
    console.log(`Solicitud de amistad enviada a ${friendName}`);
  };

  const handleDismiss = (friendId: string) => {
    removeSuggestion(friendId);
  };

  return (
    <Card
      title="Sugerencias de amigos"
      titleSlot={<Icon name="olymp-three-dots-icon" className='w-[16px] h-[4px]'/>}
      className='py-[15px]'
    >
      {/* Header 
      <div className="mb-4 flex items-center justify-between text-sm text-[#6b6f8a]">
        <div className="flex items-center space-x-2">
          <Users className="w-5 h-5" />
          <span className="font-semibold text-gray-800">Sugerencias de amigos</span>
        </div>
        <span className="font-semibold bg-[#ff5e3a] text-white text-xs px-2 py-1 rounded-full">
          {suggestions.length}
        </span> 
      </div> */}

      {/* Suggestions List */}



      <Scrollbar
        maxHeight={'max-h-[300px]'}
        className={`animate-fade-in will-change-transform mx-[15px]`}
        showIndicator={true}
      >
       
          {suggestions.slice(0, 3).map((suggestion) => (
            <Card
              key={suggestion.id}
              className='p-[15px]'
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="relative">
                    <Avatar
                      src={suggestion.avatar}
                      alt={suggestion.name}
                      size={40}
                    />
                    {suggestion.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-gray-800 truncate">
                        {suggestion.name}
                      </h4>
                      <button
                        onClick={() => handleDismiss(suggestion.id)}
                        className="text-gray-400 hover:text-gray-600 p-1"
                        aria-label="Descartar sugerencia"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-xs text-gray-500 mt-1">
                      {suggestion.mutualFriends} amigo{suggestion.mutualFriends !== 1 ? 's' : ''} en común
                    </div>

                    {!suggestion.isOnline && suggestion.lastSeen && (
                      <div className="text-xs text-gray-400 mt-1">
                        Visto {suggestion.lastSeen}
                      </div>
                    )}

                    {suggestion.commonInterests && suggestion.commonInterests.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {suggestion.commonInterests.slice(0, 2).map((interest, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                          >
                            {interest}
                          </span>
                        ))}
                        {suggestion.commonInterests.length > 2 && (
                          <span className="text-xs text-gray-500">
                            +{suggestion.commonInterests.length - 2}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-3">
                <button
                  onClick={() => handleAddFriend(suggestion.id, suggestion.name)}
                  disabled={isRequestSent(suggestion.id)}
                  className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-md text-sm font-medium transition-colors ${isRequestSent(suggestion.id)
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    : 'bg-[#ff5e3a] text-white hover:bg-[#ff763a]'
                    }`}
                >
                  <UserPlus className="w-4 h-4" />
                  <span>
                    {isRequestSent(suggestion.id) ? 'Solicitud enviada' : 'Agregar amigo'}
                  </span>
                </button>
              </div>
            </Card>
          ))}
  
      </Scrollbar>


      {suggestions.length > 3 && (
        <div className="mt-3 text-center">
          <button className="text-sm text-[#ff5e3a] hover:text-[#ff763a] font-medium">
            Ver todas las sugerencias
          </button>
        </div>
      )}
    </Card>
  );
};

export default FriendSuggestions;