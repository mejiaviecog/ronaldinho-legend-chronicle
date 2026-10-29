import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import App from '../App';

describe('Ronaldinho Gaúcho — The Immortal Legend & The Asunción Chronicle (Suite QA)', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('1. Renderiza el Hero de Ronaldinho Gaúcho ("O Bruxo"), su carta Prime 99 OVR y permite invocar magia e inspeccionar atributos', () => {
    // Titular épico e identidad de O Bruxo
    expect(
      screen.getByRole('heading', { name: /LA SONRISA QUE INMORTALIZÓ EL FÚTBOL/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Ronaldo de Assis Moreira/i)).toBeInTheDocument();
    expect(screen.getByText(/ICON PRIME IMMORTAL • 99 OVR/i)).toBeInTheDocument();

    // Imagen y cabecera de la carta Prime 99 OVR
    const heroImage = screen.getByAltText(/Ronaldinho Gaúcho - O Bruxo Prime 99 OVR/i);
    expect(heroImage).toBeInTheDocument();
    expect(screen.getByText('5★ SKILLS / 5★ MAGIA')).toBeInTheDocument();

    // Interacción con el botón "Invocar Magia de O Bruxo" (incrementa el contador de magia R10 -> R11 y rota la cita)
    const magicButton = screen.getByRole('button', { name: /Invocar Magia de O Bruxo/i });
    expect(within(magicButton).getByText('R10')).toBeInTheDocument();
    expect(screen.getByText(/Cita 1 de 3/i)).toBeInTheDocument();

    fireEvent.click(magicButton);
    expect(within(magicButton).getByText('R11')).toBeInTheDocument();
    expect(screen.getByText(/Cita 2 de 3/i)).toBeInTheDocument();

    // Interacción con las barras de atributos de la carta Prime
    const freeKickStatBtn = screen.getByRole('button', { name: /Tiro Libre & Efecto/i });
    fireEvent.click(freeKickStatBtn);
    expect(
      screen.getByText(/66 goles de tiro libre oficial: por encima de la escuadra/i)
    ).toBeInTheDocument();
  });

  it('2. Permite interactuar con la Línea de Tiempo de su trayectoria (CareerTimeline) cambiando entre FC Barcelona, Brasil y Atlético Mineiro y filtrando por región', () => {
    // Por defecto inicia en FC Barcelona (índice 2)
    expect(
      screen.getByRole('heading', { name: 'FC Barcelona', level: 3 })
    ).toBeInTheDocument();
    expect(screen.getByText(/La Ovación del Santiago Bernabéu \(0-3\)/i)).toBeInTheDocument();

    const tablist = screen.getByRole('tablist', { name: /Etapas de la carrera de Ronaldinho/i });

    // Cambiar a la Selección de Brasil
    const brasilTab = within(tablist).getByRole('tab', { name: /Brasil/i });
    fireEvent.click(brasilTab);
    expect(
      screen.getByRole('heading', { name: /Selección de Brasil \(Canarinha\)/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/El Tiro Libre de 35 Metros a David Seaman/i)
    ).toBeInTheDocument();

    // Cambiar a Clube Atlético Mineiro
    const mineiroTab = within(tablist).getByRole('tab', { name: /Atlético Mineiro/i });
    fireEvent.click(mineiroTab);
    expect(
      screen.getByRole('heading', { name: /Clube Atlético Mineiro/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Campeón de la Copa Libertadores 2013/i)
    ).toBeInTheDocument();

    // Probar filtro de continente "Europa (3)"
    const europaFilterBtn = screen.getByRole('button', { name: /Europa \(3\)/i });
    fireEvent.click(europaFilterBtn);
    expect(
      screen.getByRole('heading', { name: /Paris Saint-Germain/i, level: 3 })
    ).toBeInTheDocument();
  });

  it('3. Filtra la Sala de Trofeos (TrophyVault) y desbloquea el Trofeo Secreto de la Agrupación Especializada 2020 (Lechón de 16 KG)', () => {
    expect(
      screen.getByRole('heading', { name: /LA BÓVEDA DEL SEXTETE INMORTAL/i })
    ).toBeInTheDocument();

    // Filtrar por "Los 6 Únicos en la Historia"
    const historicSixBtn = screen.getByRole('button', { name: /Los 6 Únicos en la Historia/i });
    fireEvent.click(historicSixBtn);
    expect(screen.getByText('Copa Mundial de la FIFA')).toBeInTheDocument();
    expect(screen.getByText('UEFA Champions League')).toBeInTheDocument();
    expect(screen.getByText('CONMEBOL Copa Libertadores')).toBeInTheDocument();

    // Filtrar por "Insólito (Asunción 2020)"
    const insolitoFilterBtn = screen.getByRole('button', { name: /Insólito \(Asunción 2020\)/i });
    fireEvent.click(insolitoFilterBtn);
    expect(
      screen.getByText('Torneo Penitenciario Agrupación Especializada')
    ).toBeInTheDocument();

    // Desbloquear el Trofeo Secreto del Lechón de 16 KG
    const unlockButton = screen.getByRole('button', {
      name: /Desbloquear Trofeo Secreto Asunción 2020 \(16 KG\)/i,
    });
    fireEvent.click(unlockButton);

    // Verifica que el botón cambia a estado desbloqueado y se abre el modal con los detalles del trofeo
    expect(
      screen.getByRole('button', { name: /¡Trofeo Lechón 16 KG Desbloqueado! \(Celebrar\)/i })
    ).toBeInTheDocument();

    const dialog = screen.getByRole('dialog', {
      name: /Torneo Penitenciario Agrupación Especializada/i,
    });
    expect(dialog).toBeInTheDocument();
    expect(
      within(dialog).getByText(/Premio Oficial: Lechón de 16 KG al Spiedo/i)
    ).toBeInTheDocument();
    expect(
      within(dialog).getByText(/Resultado Final: 11 - 2 • 5 Goles • 6 Asistencias/i)
    ).toBeInTheDocument();

    // Cerrar el modal
    const closeBtn = within(dialog).getByRole('button', { name: /Cerrar detalle de trofeo/i });
    fireEvent.click(closeBtn);
    expect(
      screen.queryByRole('dialog', { name: /Torneo Penitenciario Agrupación Especializada/i })
    ).not.toBeInTheDocument();
  });

  it('4. Renderiza e interactúa con la sección del paso por la cárcel en Paraguay (PrisonChronicleSection): marcador 11-2, 5 goles y 6 asistencias, y navegación por las fases del expediente 2020', () => {
    // Cabecera y métricas clave del Expediente Asunción 2020
    expect(
      screen.getByRole('heading', { name: /EL EXPEDIENTE ASUNCIÓN 2020: 171 DÍAS EN PARAGUAY/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/EXP-2020-ASU-0306-R10/i)).toBeInTheDocument();
    expect(screen.getByText('32 Días')).toBeInTheDocument();
    expect(screen.getByText('139 Días')).toBeInTheDocument();
    expect(screen.getByText('171 Días')).toBeInTheDocument();

    // Marcador 11 - 2, 5 goles y 6 asistencias
    expect(screen.getAllByText('11 - 2').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('5 Goles')).toBeInTheDocument();
    expect(screen.getByText('6 Pases')).toBeInTheDocument();
    expect(screen.getByText(/100% PARTICIPACIÓN DE DINHO \(5G \+ 6A\)/i)).toBeInTheDocument();

    // Navegación entre las fases cronológicas del expediente (Día 1, Día 16, Día 32, Día 171)
    const day1Button = screen.getByRole('button', {
      name: /Día 1.*Aterrizaje en Asunción, Allanamiento en el Yacht/i,
    });
    fireEvent.click(day1Button);
    expect(
      screen.getByText(/INGRESO A RECLUSIÓN PREVENTIVA • CUADRA DE OFICIALES/i)
    ).toBeInTheDocument();

    const day171Button = screen.getByRole('button', {
      name: /Día 171.*Libertad Definitiva y Retorno en Jet Privado a Brasil/i,
    });
    fireEvent.click(day171Button);
    expect(
      screen.getByText(/EXPEDIENTE CERRADO • LIBERTAD AMBULATORIA PLENA/i)
    ).toBeInTheDocument();

    // Cambio de pestañas tácticas del acta del partido 11-2
    const breakdownTab = screen.getByRole('button', {
      name: /Desglose Táctico: 5 Goles \+ 6 Asistencias/i,
    });
    fireEvent.click(breakdownTab);
    expect(screen.getByText(/5 Goles de Futsal Puro/i)).toBeInTheDocument();
    expect(screen.getByText(/6 Asistencias \(No-Look\)/i)).toBeInTheDocument();

    const rulesTab = screen.getByRole('button', {
      name: /La Regla Prohibida & El Premio de 16 KG/i,
    });
    fireEvent.click(rulesTab);
    expect(
      screen.getByText(/Ronaldinho no puede patear al arco para no desnivelar/i)
    ).toBeInTheDocument();

    // Botón de celebrar el lechón de 16 KG incrementa el contador
    const celebratePigBtn = screen.getByRole('button', {
      name: /Celebrar el Lechón de 16 KG/i,
    });
    expect(within(celebratePigBtn).getByText('x1')).toBeInTheDocument();
    fireEvent.click(celebratePigBtn);
    expect(within(celebratePigBtn).getByText('x2')).toBeInTheDocument();
  });

  it('5. Permite interactuar con el laboratorio de regates (SkillMovesInteractive) cambiando entre jugadas y simulando su trayectoria SVG', () => {
    expect(
      screen.getByRole('heading', { name: /ANATOMÍA DE SUS 6 REGATES SAGRADOS/i })
    ).toBeInTheDocument();

    // Por defecto muestra "La Elástica (Flip-Flap)"
    expect(
      screen.getByRole('heading', { name: /La Elástica \(Flip-Flap\)/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /Diagrama táctico de La Elástica \(Flip-Flap\)/i })
    ).toBeInTheDocument();

    // Cambiar al regate "La Espaldinha"
    const espaldinhaBtn = screen.getByRole('button', { name: /La Espaldinha/i });
    fireEvent.click(espaldinhaBtn);
    expect(
      screen.getByRole('heading', { name: /La Espaldinha/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Parábola Aérea → Rebote de Omóplato al Espacio/i)
    ).toBeInTheDocument();

    // Cambiar a "El Punterazo Estático de Futsal (Gol a Chelsea)"
    const chelseaSkillBtn = screen.getByRole('button', {
      name: /El Punterazo Estático de Futsal \(Gol a Chelsea\)/i,
    });
    fireEvent.click(chelseaSkillBtn);
    expect(
      screen.getByText(/Triple Cadereo Estático → Punterazo Seco al Ángulo/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Petr Čech, John Terry y Ricardo Carvalho/i)
    ).toBeInTheDocument();

    // Botón de simular trayectoria SVG
    const replayButton = screen.getByRole('button', { name: /Simular Trayectoria SVG/i });
    fireEvent.click(replayButton);
    expect(
      screen.getByRole('img', {
        name: /Diagrama táctico de El Punterazo Estático de Futsal \(Gol a Chelsea\)/i,
      })
    ).toBeInTheDocument();
  });

  it('6. Permite conmutar entre el modo "Joga Bonito" y "Expediente 2020" desde la barra de navegación', () => {
    const modeToggleBtn = screen.getByRole('button', {
      name: /Activar Modo Expediente Asunción 2020/i,
    });
    fireEvent.click(modeToggleBtn);

    expect(
      screen.getByRole('button', { name: /Activar Modo Joga Bonito/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/CASO #2020-ASU • NOIR/i)).toBeInTheDocument();
  });
});
