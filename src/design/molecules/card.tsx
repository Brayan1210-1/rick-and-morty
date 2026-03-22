
import { Input } from '../atoms/input';
import { Button } from '../atoms/button';

export function Card() {
    return (
        
        <div className="bg-card p-8 rounded-card shadow-card border border-gray-200 max-w-sm">
            
        
            <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">
                Buscador de Personajes
            </h2>

           
            <div className="flex flex-col gap-4">
                <Input text="Escribe un nombre..." />
                
                <Button text="Buscar en la curva central" />
            </div>

            <p className="text-xs text-center mt-4 text-slate-500">
                Proyecto: Rick & Morty :D
            </p>
        </div>
    );
}