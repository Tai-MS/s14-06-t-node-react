import { CardNewOffers } from "../../componentes/perfil-proveedor/CardNewOffers";
import {FooterContact} from "../../componentes/share/FooterContact";
import { HeaderProvider } from "../../componentes/share/HeaderProvider";
import {Calendar, dayjsLocalizer} from 'react-big-calendar';
import dayjs from 'dayjs';

export const ProfileProvider =()=>{
    dayjs.locale('es')
    const toolbar=<div 
    className="bg-[#86B28233] w-[80%] mx-auto my-2 text-center rounded-lg">Tus servicios agendados para este mes </div>;
    const events = [
        {
          title: 'Contrato para trabajar arreglando ...',
          start: new Date(2024, 3, 1, 12, 30,0),
          end: new Date(2024, 3, 1, 15,0,0),
        }, 
        {
            title: 'Contrato para trabajar arreglando ...',
            start: new Date(2024, 3, 5, 20,0,0),
            end: new Date(2024, 3, 5, 21,0,0),
          },
        
      ];
    const title='Nuevas ofertas';
    const textMessage ='Cuando tengas nuevas ofertas de trabajo aparecerán en esta sección';
    const localizer = dayjsLocalizer(dayjs);
    const messages = {
        allDay: "Todo el día",
        previous: "Anterior",
        next: "Siguiente",
        today: "Hoy",
        month: "Mes",
        week: "Semana",
        day: "Día",
        agenda: "Agenda",
        date: "Fecha",
        time: "Hora",
        event: "Evento",
        noEventsInRange: "Sin eventos"
    };
    return (
        <>
            <HeaderProvider showMenu={true} />
            <div className="flex justify-center items-center">
            <CardNewOffers textMessage={textMessage} title={title}/>

            </div>
            
            {toolbar}
                <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                events={events}
                style={{width: 500 }}
                 />
            

            <FooterContact />
        </>
    )
}