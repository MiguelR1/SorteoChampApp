
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

export interface fasesGrupos {
  grupof1: Equipo[];
  grupof2: Equipo[];
  grupof3: Equipo[];
  grupof4: Equipo[];
  grupof5: Equipo[];
  grupof6: Equipo[];
  grupof7: Equipo[];
  grupof8: Equipo[];
}

