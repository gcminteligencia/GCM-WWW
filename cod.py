import qrcode

links = ["https://www.cursoemvideo.com/", "https://color.adobe.com/pt/"]

for i, link in enumerate(links):
    qr = qrcode.QRCode(
        version=1,
        box_size=10,
        border=5
    )

    qr.add_data(link)
    qr.make(fit=True) 

    img = qr.make_image(fill_color="black", back_color="white")
    img.save(f"qr_{i}.jpeg")
