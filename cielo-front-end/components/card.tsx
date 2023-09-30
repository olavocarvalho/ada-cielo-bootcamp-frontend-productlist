interface CardProps {
    title: string;
    description: string;
    titleColor: string
  }
  
 export default function Card({ title, description, titleColor } : CardProps) {
    return (
      <div className="p-4 w-[250px] border-gray-300 rounded-lg shadow-md">
        <h2 className={`font-semibold ${titleColor ? titleColor : ''}`}>{title}</h2>
        <p className="mt-2 text-gray-600 font-bold">R$ {description}</p>
      </div>
    );
  };
  
  