'use client'

import React from 'react';
import Avatar from '@/shared/components/avatar';
import Button from '@/shared/components/button';
import Tabs, { TabItem } from '@/shared/components/tabs';
import Textarea from '@/shared/components/textarea';
import IconButton from '@/shared/components/icon-button';
import { useSocialPost } from '../hooks/use-social-post';
import Card from '@/shared/components/card';
import Icon from '@/shared/components/icon';

const SocialPost: React.FC = () => {
  const {
    activeTab,
    postContent,
    handleSubmit,
    handlePreview,
    handleTabChange,
    handleContentChange,
  } = useSocialPost();

  const tabs: TabItem[] = [
    { id: 'status', label: 'Estado', icon: "olymp-status-icon", color: 'text-orange-500' },
    { id: 'multimedia', label: 'Multimedia', icon: "olymp-multimedia-icon", color: 'text-gray-400' },
    { id: 'blog', label: 'Entrada de blog', icon: "olymp-blog-icon", color: 'text-gray-400' }
  ];

  return (
    <Card>
      {/* Tabs */}
      <div className="-mx-6 -mt-6 mb-6 p-6 pb-0 border-b border-[#e6ecf5]">
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </div>

      {/* User Info & Text Area */}
      <div className="flex items-start space-x-4 mb-6 px-6">
        <Avatar
          src="/assets/images/avatar-placeholder.png"
          alt="Usuario"
          size={48}
          className="flex-shrink-0"
        />
        <div className="flex-1">
          <Textarea
            value={postContent}
            onChange={(e) => handleContentChange(e.target.value)}
            placeholder="Comparte lo que estás pensando aquí..."
            className="h-32 text-[14px]"
            rows={4}
          />
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 p-6">
        <div className="flex items-center space-x-4">
          <IconButton
            icon={<Icon name="olymp-camera-icon" className='w-5 h-5 text-gray-400' />}
            ariaLabel="Subir imagen"
          />
          <IconButton
            icon={<Icon name="olymp-computer-icon" className='w-5 h-5 text-gray-400' />}
            ariaLabel="Subir video"
          />
          <IconButton
            icon={<Icon name="olymp-small-pin-icon" className='w-5 h-5 text-gray-400' />}
            ariaLabel="Añadir ubicación"
          />
        </div>
        <div className="flex items-center space-x-3">
          <Button
            onClick={handlePreview}
            variant='secondary'
          >
            Previsualizar
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={!postContent.trim()}
          >
            Publicar Estado
          </Button>
        </div>
      </div>


    </Card>
  );
};

export default SocialPost;
