'use client'

import React from 'react';
import { Camera, Monitor, MapPin, MoreHorizontal, MessageSquare, Image as ImageIcon, FileText } from 'lucide-react';
import Avatar from '@/shared/components/avatar';
import Button from '@/shared/components/button';
import Tabs, { TabItem } from '@/shared/components/tabs';
import Textarea from '@/shared/components/textarea';
import IconButton from '@/shared/components/icon-button';
import { useSocialPost } from '../hooks/use-social-post';

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
    { id: 'status', label: 'Estado', icon: MessageSquare, color: 'text-orange-500' },
    { id: 'multimedia', label: 'Multimedia', icon: ImageIcon, color: 'text-gray-400' },
    { id: 'blog', label: 'Entrada de blog', icon: FileText, color: 'text-gray-400' }
  ];

  return (
    <div className="max-w-[618px] mx-auto bg-white border border-gray-200 p-6 rounded-sm overflow-hidden">
      {/* Tabs */}
      <div className="-mx-6 -mt-6 mb-6">
        <Tabs 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </div>

      {/* User Info & Text Area */}
      <div className="flex items-start space-x-4 mb-6">
        <Avatar
          alt="Usuario"
          size={48}
          className="flex-shrink-0"
        />
        <div className="flex-1">
          <Textarea
            value={postContent}
            onChange={(e) => handleContentChange(e.target.value)}
            placeholder="Comparte lo que estás pensando aquí..."
            className="h-32"
            rows={4}
          />
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-6">
          <IconButton 
            icon={Camera}
            ariaLabel="Subir imagen"
          />
          <IconButton 
            icon={Monitor}
            ariaLabel="Subir video"
          />
          <IconButton 
            icon={MapPin}
            ariaLabel="Añadir ubicación"
          />
          <IconButton 
            icon={MoreHorizontal}
            ariaLabel="Más opciones"
          />
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={handlePreview}
            className="px-6 py-2.5 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            type="button"
          >
            Previsualizar
          </button>
          <Button
            variant="primary"
            onClick={handleSubmit}
            size="md"
            disabled={!postContent.trim()}
          >
            Publicar Estado
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialPost;
