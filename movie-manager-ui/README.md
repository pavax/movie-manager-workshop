## Available commands

### Development

_Following tasks are useful for development of a angular-seed-ui project._

#### Default task
 
	grunt

_This is the default task that runs `dev` build, starts `connect` web server which serves `build_dev` folder and runs `watch` task._

#### Server task (dev)
 
	grunt serve

_Same as default task._

#### Server task (prod)

	grunt serveprod

_This task runs a `prod` build and starts and `connect` web server which serves `build_prod` folder._

### Build tasks

_Following tasks build project._

#### Dev 

	grunt dev

_This task runs a development build and puts it into `build_dev` folder._

#### Prod 

	grunt prod

_This task runs a production build and puts it into `build_prod` folder._


## Plugins

_Watch task is used to rebuild changed parts of UI, it is used with enabled
`livereload` flag to automatically refresh browser after its finished. To use livereload in browser
we use [Chrome LiveReload Plugin](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)_



## Enable CORS on tomcat

_Dev veb-ui project runs on node express server on different port than backend.
To enable CORS for development update `web.xml` in your tomcats `conf` directory._

```xml
    <filter>
		<filter-name>CorsFilter</filter-name>
		<filter-class>org.apache.catalina.filters.CorsFilter</filter-class>
		<init-param>
			<param-name>cors.allowed.origins</param-name>
			<param-value>*</param-value>
		</init-param>
		<init-param>
			<param-name>cors.allowed.methods</param-name>
			<param-value>GET,POST,HEAD,OPTIONS,PUT,DELETE</param-value>
		</init-param>
		<init-param>
			<param-name>cors.allowed.headers</param-name>
			<param-value>Content-Type,X-Requested-With,accept,Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization</param-value>
		</init-param>
		<init-param>
			<param-name>cors.support.credentials</param-name>
			<param-value>true</param-value>
		</init-param>		
	</filter>
	<filter-mapping>
		<filter-name>CorsFilter</filter-name>
		<url-pattern>/*</url-pattern>
	</filter-mapping>
```

## Troubleshooting dependencies

Should you encounter problems with installing dependencies or running Grunt commands, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.

### Checking for updates

### `dev` dependencies updates

	npm install -g npm-check-updates

You can now check for updates and bump `package.json` dependencies accordingly:

	npm-check-updates
	
### `frontend` (Bower) dependencies updates

	bower list
	
