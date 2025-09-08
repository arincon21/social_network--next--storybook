interface ProfileCompletionProps {
  collapsed: boolean;
  showLabels: boolean;
}

export const ProfileCompletion = ({ collapsed, showLabels } : ProfileCompletionProps) => {
 
  if (!showLabels) {
    return null;
  }

  return (
    <div className={`absolute bottom-6 left-0 right-0 px-4 ${ collapsed ? "text-center" : "text-left" }`} >
      <div className="mb-3 flex items-center justify-between text-sm text-[#6b6f8a]" >
        <span>Perfil completado</span>
        <span className="font-semibold">76%</span>
      </div>
      <div className={`w-full bg-[#f1f2f6] rounded-full h-2 overflow-hidden ${ collapsed ? "mx-auto w-8" : "" }`} >
        <div className="bg-[#ff5e3a] h-2 rounded-full" style={{ width: "76%" }} />
      </div>
      <p className="mt-3 text-sm text-[#9aa0b3]" >
        Completa <span className="text-[#ff5e3a] font-medium">tu perfil</span> para que la gente pueda saber más de ti!
      </p>
    </div>
  );
};
