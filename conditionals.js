var image = new SimpleImage("chapel.png");

for (var px of image.values()) {
	px.setRed(255);
}

print(image);

