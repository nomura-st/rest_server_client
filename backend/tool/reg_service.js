// eslint-disable-next-line @typescript-eslint/no-var-requires
var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
    name: '★REST_SERVER',
    description: 'Restサーバ.',
    script: __dirname + '\\..\\dist\\server.js',
    nodeOptions: [
        '--harmony',
        '--max_old_space_size=4096'
    ]
    //, workingDirectory: '...'
    //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
    svc.start();
});

svc.install();

// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall', function () {
    console.log('Uninstall complete.');
    console.log('The service exists: ', svc.exists);
});

// ******* 削除用(消す時はinstallをコメントアウトして、以下のコメントアウト外す) *******
// // Uninstall the service.
// svc.uninstall();