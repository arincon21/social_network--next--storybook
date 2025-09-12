import React from 'react';
import { MoreHorizontal, Cake } from "lucide-react";
import BackgroundCard from '@/shared/components/background-card';
import ProfileAvatar from '@/shared/components/profile-avatar';
import IconButton from '@/shared/components/icon-button';

interface BirthdayCardProps {
  name?: string;
  profileImage?: string;
}

const BirthdayCard: React.FC<BirthdayCardProps> = ({
  name = "Marina Valentine",
  profileImage = "https://placehold.co/60x60"
}) => {
  return (
    <BackgroundCard 
      backgroundImage="/assets/bg/bg-birthdays.jpg"
      alt="Fondo de cumpleaños"
    >
      {/* Encabezado con ícono de corona y menú */}
      <div className="flex justify-between items-start mb-8">
        <Cake className="w-8 h-8 text-white" />
        <IconButton 
          icon={MoreHorizontal}
          ariaLabel="Más opciones"
          className="hover:bg-white/10"
        />
      </div>

      {/* Foto de perfil */}
      <div className="mb-6">
        <ProfileAvatar
          src={profileImage}
          alt={`foto de perfil de ${name}`}
          size={64}
          borderColor="border-white/30"
          borderWidth={2}
          unoptimized
        />
      </div>

      {/* Contenido principal */}
      <div>
        <p className="text-white/90 font-medium text-2xl">
          Hoy es
        </p>
        
        <h1 className="font-bold leading-tight">
          ¡El cumpleaños de {name}!
        </h1>
        
        <p className="text-white/90 leading-relaxed pt-4">
          ¡Déjale un mensaje con tus mejores deseos en su página de perfil!
        </p>
      </div>
    </BackgroundCard>
  );
};

export default BirthdayCard;
