# bundle: src/main.js src/bullet.js src/airframe.js src/sprite.js src/stage.js
# 	browserify src/main.js src/bullet.js src/airframe.js src/sprite.js src/stage.js node_modules/p5/lib/p5.min.js -t [ babelify --presets es2015 ] -o bundle.js

bundle: src/main.js src/stage.js
	browserify -r ./src/main.js:Main src/main.js src/stage.js -t [ babelify --presets es2015 ] -o bundle.js
#	browserify src/main.js src/stage.js -t [ babelify --presets es2015 ] -o bundle.js

clean:
	rm -f bundle.js
