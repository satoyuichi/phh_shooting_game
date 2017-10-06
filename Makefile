bundle: src/main.js src/stage.js src/airframe.js src/sprite.js src/cannon.js
	browserify -r ./src/main.js:Main src/main.js src/stage.js src/airframe.js src/sprite.js src/cannon.js -t [ babelify --presets es2015 ] -o bundle.js

clean:
	rm -f bundle.js
