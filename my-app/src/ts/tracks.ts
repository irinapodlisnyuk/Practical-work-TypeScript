// interface Track {
//   id: string;
//   name: string;
//   duration: number;
// }

// async function getTracks(limit: number = 10): Promise<Track[]> {
//   const response = await fetch(`https://api.example.com/tracks?limit=${limit}`);
//   if (!response.ok) {
//     throw new Error("Ошибка при получении треков");
//   }
//   const data = await response.json();
//   return data.items;
// }


export function tracks() {
  // interface Track {
  //   id: string;
  //   title: string;
  //   artist: string;
  //   duration: number;
  //   size_mb: number;
  // }

  // async function getTracks(limit: number = 1000): Promise<Track[]> {
  //   const response = await fetch(
  //     `http://localhost:8000/api//tracks?limit=${limit}`,
  //   );
  //   if (!response.ok) {
  //     throw new Error("Ошибка при получении треков");
  //   }
  //   const data = await response.json();
  //   return data.items;
  // }


  interface Track {
    id: string;
    title: string;
    artists: { name: string }[];
    artist: string;
    duration: number;
    size_mb: number;
    encoded_audio: string;
}

async function renderTracks(): Promise<void> {
    const container = document.getElementById('tracks-tbody');
    
    try {
        // Выполнение GET запроса
        const response = await fetch('http://localhost:8000/api//tracks?limit=10');
        
        if (!response.ok) throw new Error('Ошибка сети');
        
        const data: { items: Track[] } = await response.json();
        
        if (container) {
            container.innerHTML = ''; // Очистка индикатора загрузки

            data.items.forEach(track => {
                const trackElement = document.createElement('div');
                trackElement.className = 'track-card';
                
                trackElement.innerHTML = `
                    <strong>${track.title}</strong><br>
                    <span>Исполнитель: ${track.artists.map(a => a.name).join(', ')}</span><br>
                    <strong>Исполнитель: ${track.artist}</strong><br>
                    <number>Длинна трека: ${track.duration}</number>
                    <number>Размер трека: ${track.size_mb}</number>
                    <strong>${track.encoded_audio}</strong><br>
                `;
                
                container.appendChild(trackElement);
                console.log(trackElement)
            });
        }
    } catch (error) {
        if (container) {
            container.innerHTML = `<p style="color: red;">Ошибка: ${error}</p>`;
        }
    }
}

// Запуск функции при загрузке страницы
window.addEventListener('DOMContentLoaded', renderTracks);
}
