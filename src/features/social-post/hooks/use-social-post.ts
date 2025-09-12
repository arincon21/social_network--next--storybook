import { useState } from 'react';

export const useSocialPost = () => {
  const [activeTab, setActiveTab] = useState('status');
  const [postContent, setPostContent] = useState('');

  const handleSubmit = () => {
    // Lógica para enviar el post
    console.log('Publicando:', postContent);
  };

  const handlePreview = () => {
    // Lógica para previsualizar
    console.log('Previsualizando:', postContent);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleContentChange = (content: string) => {
    setPostContent(content);
  };

  return {
    activeTab,
    postContent,
    handleSubmit,
    handlePreview,
    handleTabChange,
    handleContentChange,
  };
};
