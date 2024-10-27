function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function handlePayment(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    const formData = new FormData(document.getElementById('paymentForm'));
    
    // Get photo
    const photo = formData.get('photo');
    
    // Get other form fields
    const name = formData.get('name');
    const telegram = formData.get('telegram');
    const description = formData.get('description');
    const produk = formData.get('produk');

    // Prepare message
    let message = "❖ MEMBER MENGIRIM BUKTI ❖\n\n";
    message += "Nama: " + name + "\n";
    message += "No wa: " + telegram + "\n";
    message += "Memilih Produk: " + produk + "\n";
    message += "Deskripsi: " + description;
    
    // Send message to Telegram bot
    const botToken = '7140369741:AAGFr7-jE3yWPN6LeRmgIFHtMaJbmRDxetI'; // Replace with your bot token
    const chatId = '5246223530'; // Replace with your chat ID
    const url = `https://api.telegram.org/bot${botToken}/sendPhoto`;
    const request = new XMLHttpRequest();
    request.open('POST', url);
    const requestData = new FormData();
    requestData.append('chat_id', chatId);
    requestData.append('photo', photo);
    requestData.append('caption', message);
    
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                alert('Bukti sudah terkirim, semoga beruntung, Terima kasih sudah mau berpartisipasi !');
            } else {
                alert('Bukti Gagal Terkirim, Silahkan Coba Lagi !');
            }
        }
    };
    
    request.send(requestData);
}