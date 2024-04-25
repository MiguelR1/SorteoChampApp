
export interface Bombos {
  bombo1: Bombo;
  bombo2: Bombo;
  bombo3: Bombo;
  bombo4: Bombo;
}

export interface Bombo {
  numero:  number;
  equipos: Equipo[];
}

export interface Equipo {
  id:    string;
  name:   string;
  img:    string;
  league: string;
}
