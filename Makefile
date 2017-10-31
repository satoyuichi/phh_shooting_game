bundle: src/main.js src/stage.js src/airframe.js src/sprite.js src/weapon.js src/controller.js src/asset.js src/debug.js src/display_object.js
	browserify -r ./src/main.js:Main src/main.js src/stage.js src/airframe.js src/sprite.js src/weapon.js src/controller.js src/asset.js src/debug.js src/display_object.js -t [ babelify --presets es2015 ] -o ./docs/bundle.js

clean:
	rm -f bundle.js
