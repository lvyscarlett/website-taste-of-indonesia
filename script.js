// Data Resep untuk Anak Kost
const recipesData = [
    {
        title: "Seblak",
        details: "Seblak adalah hidangan khas Bandung yang terbuat dari kerupuk basah yang dimasak dengan bumbu pedas. Biasanya ditambahkan bahan seperti telur, mie,udang atau sayuran.",
        ingredients: [
            "Kerupuk kanji (rendam dalam air)",
            "Udang kupas",
            "Bawang putih",
            "Bawang merah",
            "Cabai merah",
            "Kecap manis",
            "Telur (opsional)",
            "Minyak sayur",
            "Air"
        ],
        tools: [
            "Wajan",
            "Spatula"
        ],
        steps: [
            "Panaskan minyak di wajan, tumis bawang merah dan bawang putih hingga harum.",
            "Masukkan cabai merah, tumis sebentar hingga cabai layu.",
            "Tambahkan udang, masak hingga udang berubah warna dan matang.",
            "Masukkan kerupuk yang sudah direndam air, aduk rata.",
            "Tambahkan air secukupnya dan kecap manis, aduk rata.",
            "Masukkan telur (opsional), aduk hingga telur matang.",
            "Angkat dan sajikan"
        ],
        img: "imgs/seblak.jpg"
    },
    {
        title: "Salad Buah",
        details: "Salad buah segar dengan saus yogurt yang creamy. Cocok sebagai camilan sehat atau dessert.",
        ingredients: [
            "Buah-buahan segar (pisang, apel, jeruk, anggur, nanas)",
            "Yogurt plain",
            "Madu (opsional)",
            "Keju parut (opsional)",
        ],
        tools: [
            "Mangkok",
            "Sendok"
        ],
        steps: [
            "Potong semua buah menjadi ukuran kecil-kecil.",
            "Campurkan buah-buahan dalam mangkok besar.",
            "Tambahkan yogurt plain dan madu, aduk hingga rata.",
            "Taburi keju parut jika suka.",
            "Sajikan dingin atau langsung."
        ],
        img: "imgs/salad buah.jpg"
    },
    {
        title: "Pisang Epe(Ngepe)",
        details: "Pisang epe khas Makassar yang dipanggang dan disajikan dengan gula merah cair.",
        ingredients: [
            "Pisang raja (atau pisang kepok)",
            "Gula merah",
            "Air",
            "Daun pisang (untuk membungkus, opsional)",
        ],
        tools: [
            "Panggangan/teflon",
            "Panci",
        ],
        steps: [
            "Panggang pisang raja hingga matang dan kulitnya sedikit gosong.",
            "Sementara itu, rebus gula merah dengan sedikit air hingga mencair.",
            "Setelah pisang matang, pipihkan pisang dengan menggunakan tangan atau alat.",
            "Siram dengan gula merah cair.",
            "Sajikan pisang epe dengan atau tanpa daun pisang sebagai alas.",
        ],
        img: "imgs/pisang epe.jpg"
    },
    {
        title: "Bakso",
        details: " Bakso adalah bola daging yang kenyal, terbuat dari campuran daging sapi dan tepung kanji. Biasanya disajikan dalam kuah kaldu.",
        ingredients:[
            "Daging sapi giling",
            "Tepung kanji",
            "Bawang putih",
            "Telur",
            "Lada",
            "Garam",
            "Kaldu ayam"
        ],
        tools: [
            "Wajan",
            "Panci",
            "Sendok"
        ],
        steps:[
            "Campurkan daging sapi giling, tepung kanji, bawang putih halus, telur, garam, dan lada. Aduk hingga adonan bisa dipulung.",
            "Bentuk adonan menjadi bola-bola kecil.",
            "Rebus air dalam panci hingga mendidih, kemudian masukkan bola bakso. Masak hingga bakso mengapung.",
            "Angkat dan tiriskan bakso.",
            "Sajikan bakso dalam kuah kaldu, bisa juga ditambahkan mie atau sayuran."
        ],
        img: "imgs/bakso.jpg"
    },
    {
        title: "Martabak Mini",
        details: "Martabak mini dengan isian hati ampela yang gurih dan berbumbu.",
        ingredients:[
            "Daging hati ampela ayam",
            "Tepung terigu",
            "Telur",
            "Bawang merah",
            "Bawang putih",
            "Daun bawang",
            "Kecap manis",
            "Minyak goreng",
        ],
        tools: [
            "Wajan",
            "Panci",
            "Loyang kecil (untuk martabak)"
        ],
        steps:[
            "Tumis bawang merah dan bawang putih hingga harum, masukkan hati ampela yang sudah dipotong kecil-kecil. Masak hingga matang.",
            "Tambahkan kecap manis dan daun bawang, aduk rata. Angkat dan sisihkan.",
            "Campurkan tepung terigu dengan air, aduk hingga menjadi adonan cair.",
            "Panaskan minyak di wajan, tuang sedikit adonan tepung, lalu beri isian hati ampela di tengahnya.",
            "Tambahkan telur di atasnya, masak hingga bagian bawah berwarna kecoklatan, lalu lipat menjadi martabak mini.",
            "Sajikan selagi hangat."
        ],
        img: "imgs/martabak mini.jpg"
    },
    {
        title: "Mie Ayam",
        details: "Mie ayam yang kenyal dengan kuah kaldu ayam yang gurih, disajikan dengan potongan ayam, saos, dan taburan daun bawang.",
        ingredients:[
            "Mie telur",
            "Daging ayam (potong kecil)",
            "Saus tiram",
            "Bawang merah",
            "Bawang putih",
            "Daun bawang",
            "Kecap manis",
            "Minyak goreng",
            "Kaldu ayam",
            "Kecap asin"

        ],
        tools: [
            "Wajan",
            "Panci",
            "Saringan(untuk maerebus mie)"
        ],
        steps:[
            "Tumis bawang putih dan bawang merah hingga harum.",
            "Masukkan potongan ayam dan masak hingga ayam berubah warna.",
            "Tambahkan kecap manis, kecap asin, dan saus tiram. Aduk rata, kemudian tuangkan kaldu ayam, masak hingga mendidih.",
            "Rebus mie telur hingga matang, kemudian tiriskan.",
            "Sajikan mie dalam mangkuk, tuang kuah ayam di atasnya, dan beri taburan daun bawang."
        ],
        img: "imgs/mie ayam.jpg"
    },
    {
        title: "Pakcoi Bawang Putih",
        details: "Pakcoi yang dimasak dengan bawang putih dan sedikit minyak wijen, menciptakan rasa segar dan gurih.",
        ingredients:[
            "Pakcoi (sawi hijau)",
            "Bawang putih (cincang halus)",
            "Minyak wijen",
            "Kecap asin",
            "Garam",
            "Air"
        ],
        tools: [
            "Wajan",
            "Panci"
        ],
        steps:[
            "Cuci pakcoi hingga bersih, potong-potong sesuai selera.",
            "Rebus pakcoi dalam air mendidih selama 1-2 menit hingga sedikit layu, tiriskan.",
            "Panaskan minyak wijen di wajan, tumis bawang putih hingga harum.",
            "Masukkan pakcoi yang sudah direbus, aduk rata, tambahkan kecap asin dan garam secukupnya.",
            "Masak selama 2-3 menit, lalu angkat dan sajikan."
        ],
        img: "imgs/pakcoi.jpg"
    },
    {
        title: "Sate Ayam",
        details: "Sate ayam dengan bumbu kacang yang lezat, disajikan dengan lontong atau nasi",
        ingredients:[
            "Daging ayam (potong dadu)",
            "Bawang merah",
            "Bawang putih",
            "Kecap manis",
            "Kacang tanah (digoreng dan dihaluskan)",
            "Santan kental",
            "Air asam jawa",
            "Garam",
            "Lontong (opsional)"

        ],
        tools: [
            "Wajan",
            "Tusuk Sate",
            "Kompor Panggangan"
        ],
        steps:[
            "Campurkan bawang merah, bawang putih, kecap manis, garam, dan sedikit air asam jawa untuk marinasi. Masukkan potongan daging ayam, diamkan selama 30 menit.",
            "Tusuk ayam yang telah dimarinasi pada tusuk sate.",
            "Panggang sate di atas panggangan atau grill pan hingga matang merata, sesekali oleskan bumbu marinasi agar sate lebih gurih.",
            "Untuk bumbu kacang, haluskan kacang tanah goreng, tambahkan santan kental, kecap manis, dan sedikit garam. Aduk rata hingga bumbu kacang kental dan lembut.",
            "Sajikan sate ayam dengan bumbu kacang dan lontong atau nasi."
        ],
        img: "imgs/sate.jpg"
    },
    

];
// Menyimpan ulasan dalam array
const reviews = [];

// Menangani pengiriman ulasan
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman reload saat form disubmit

    const reviewText = document.getElementById('reviewText').value.trim();
    if (reviewText) {
        // Menambahkan ulasan ke array
        reviews.push(reviewText);

        // Menampilkan ulasan terbaru
        displayReviews();
        
        // Reset textarea setelah pengiriman
        document.getElementById('reviewText').value = '';
    }
});

// Fungsi untuk menampilkan ulasan
function displayReviews() {
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = ''; // Mengosongkan list ulasan sebelumnya

    // Loop untuk menampilkan setiap ulasan
    reviews.forEach((review, index) => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <p>${review}</p>
        `;
        reviewsList.appendChild(reviewElement);
    });
}


// Fungsi untuk menampilkan semua resep di beranda
function displayAllRecipes() {
    const recipeDiv = document.getElementById('recipes');
    
    // Mengosongkan hasil sebelumnya
    recipeDiv.innerHTML = '';

    recipesData.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <img src="${recipe.img}" alt="${recipe.title}" class="recipe-image">
            <h3>${recipe.title}</h3>
            <p>Kuliner</p>
            <button onclick="viewRecipe('${recipe.title}')">Lihat Resep</button>
        `;
        recipeDiv.appendChild(card);
    });
}

// Panggil fungsi untuk menampilkan semua resep ketika halaman dimuat
displayAllRecipes();



document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Mencegah aksi default (misalnya form submission)
        searchRecipes(); // Memanggil fungsi pencarian
    }
});
// Fungsi untuk mencari resep
function searchRecipes() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const recipeDiv = document.getElementById('recipes');
    const notFoundDiv = document.getElementById('notFound');

    // Mengosongkan hasil sebelumnya
    recipeDiv.innerHTML = '';
    notFoundDiv.style.display = 'none';

    // Sembunyikan Ulasan dan Kontak Kami hanya setelah pencarian dimulai
    document.getElementById('reviews-section').classList.add('hidden');
    document.getElementById('contact-section').classList.add('hidden');

    if (searchInput.trim() === '') {
        notFoundDiv.innerHTML = 'Silahkan masukkan nama resep untuk mencari!';
        notFoundDiv.style.display = 'block';
        return;
    }

    const filteredRecipes = recipesData.filter(recipe =>
        recipe.title.toLowerCase().includes(searchInput)
    );

    if (filteredRecipes.length === 0) {
        notFoundDiv.innerHTML = 'Resep tidak ditemukan, silahkan coba lagi!';
        notFoundDiv.style.display = 'block';
    } else {
        filteredRecipes.forEach(recipe => {
            const card = document.createElement('div');
            card.classList.add('recipe-card');
            
            card.innerHTML = `
                <img src="${recipe.img}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <p>Masakan Sederhana</p>
                <button onclick="viewRecipe('${recipe.title}')">Lihat Resep</button>
            `;
            recipeDiv.appendChild(card);
        });
    }
}

// Fungsi untuk menampilkan semua resep pada halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", function() {
    // Menampilkan semua resep jika tidak ada pencarian
    displayAllRecipes();
    // Menampilkan kontak dan ulasan saat halaman pertama dimuat
    document.getElementById('reviews-section').classList.remove('hidden');
    document.getElementById('contact-section').classList.remove('hidden');
});

// Fungsi untuk menampilkan semua resep
function displayAllRecipes() {
    const recipeDiv = document.getElementById('recipes');
    
    // Mengosongkan hasil sebelumnya
    recipeDiv.innerHTML = '';

    recipesData.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <img src="${recipe.img}" alt="${recipe.title}" class="recipe-image">
            <h3>${recipe.title}</h3>
            <p>Kuliner</p>
            <button onclick="viewRecipe('${recipe.title}')">Lihat Resep</button>
        `;
        recipeDiv.appendChild(card);
    });
}
// Fungsi untuk menampilkan detail resep
function viewRecipe(recipeTitle) {
    const popupCard = document.getElementById('popupCard');
    const recipeTitleElement = document.getElementById('recipeTitle');
    const recipeDetails = document.getElementById('recipeDetails');
    const recipeImage = document.getElementById('recipeImage');

    const recipe = recipesData.find(r => r.title === recipeTitle);
    if (recipe) {
        recipeTitleElement.innerText = recipe.title;
        
        // Gabungkan detail resep, bahan-bahan, alat, dan langkah-langkah dengan backticks
        recipeDetails.innerHTML = `
            <strong>Deskripsi:</strong> ${recipe.details}<br><br>
            <strong>Bahan-bahan:</strong><br>- ${recipe.ingredients.join('<br>- ')}<br><br>
            <strong>Alat yang digunakan:</strong><br>- ${recipe.tools.join('<br>- ')}<br><br>
            <strong>Cara Membuat:</strong><br>- ${recipe.steps.join('<br>- ')}<br>
        `;
        recipeImage.src = recipe.img;  // Update gambar resep
        popupCard.style.display = 'block'; // Menampilkan popup
    } else {
        recipeDetails.innerText = 'Resep tidak ditemukan.';
        popupCard.style.display = 'block'; // Menampilkan popup
    }
}

// Fungsi untuk menutup popup resep
function closeRecipe() {
    document.getElementById('popupCard').style.display = 'none';
}