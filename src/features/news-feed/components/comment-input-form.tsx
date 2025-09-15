import { MessageSquare } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Avatar from '@/shared/components/avatar';
import Button from '@/shared/components/button';

interface CommentInputFormProps {
  postId: number;
  newComment: string;
  setNewComment: (value: string) => void;
  handleAddComment: (postId: number) => void;
}

const CommentInputForm = ({
  postId,
  newComment,
  setNewComment,
  handleAddComment,
}: CommentInputFormProps) => {
  const formRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
    // Focus on the input field after scroll
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 300); // Small delay to ensure scroll is complete
  }, []);

  return (
    <div ref={formRef} className="p-6">
      <div className="bg-white">
        <div className="flex items-start space-x-4">
          <Avatar
            src="https://placehold.co/40x40"
            alt="Tu avatar"
            size={40}
          />
          <div className="flex-1">
            <div className="border rounded-md border-[#eef3f6] p-3 flex items-center">
              <input
                ref={inputRef}
                className="flex-1 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none"
                placeholder="Escribe un comentario..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddComment(postId)}
                aria-label="Escribe un comentario"
              />
              <button
                className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Enviar comentario"
                onClick={() => handleAddComment(postId)}
              >
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 flex justify-end items-center space-x-4">
              <button
                className="px-4 py-2 border border-[#e6eef5] rounded-md text-sm text-gray-500 hover:bg-gray-50 transition-colors"
                onClick={() => setNewComment('')}
              >
                Cancelar
              </button>
              <Button
                variant="primary"
                onClick={() => handleAddComment(postId)}
                size="md"
                disabled={!newComment?.trim()}
              >
                Publicar comentario
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentInputForm;