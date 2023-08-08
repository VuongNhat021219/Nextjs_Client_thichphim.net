export async function getSlugMovie(slug,page) {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/${slug}?page=${page}`);
        if (response.ok) {
          const data = await response.json();
          return data
        } else {
          console.error('Error fetching Data:', response.statusText);
        }
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}
export async function getFeaturedMovie(page) {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/featuredMovie?page=${page}`);
        if (response.ok) {
          const data = await response.json();
          return data
        } else {
          console.error('Error fetching Data:', response.statusText);
        }
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}
export async function Search(key) {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/search?key=${key}`);
        if (response.ok) {
          const data = await response.json();
          return data
        } else {
          console.error('Error fetching Data:', response.statusText);
        }
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}

export async function getOneMovieSlug(slug) {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/movie/${slug}`);
        if (response.ok) {
          const data = await response.json();
          return data
        } else {
          console.error('Error fetching Data:', response.statusText);
        }
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}