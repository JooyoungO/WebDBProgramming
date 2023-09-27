// 노드에서 멀티 스레드 방식으로 작업할 수 있음

const {
    Worker, isMainThread, parentPort,
} = require('worker_threads');

// isMainThread : 현재 코드가 메인 스레드에서 실행되는지, 워커 스레드에서 실행되는지 구분
if(isMainThread) {  // 부모일 때
    // 메인 스레드에서 new Worker를 통해 현재 파일(__filename)을 워커 스레드에서 실행
    const worker = new Worker(__filename);
    // 워커로부터 메시지를 수신할 때
    worker.on('message', message => console.log('from worker', message));
    worker.on('exit', () => console.log('worker exit'));
    // 부모에서 워커로 데이터를 보냄
    worker.postMessage('ping');
} else {    // 워커일 때
    // 부모로부터 데이터를 받고, postMessage로 데이터를 보냄
    parentPort.on('message', (value) => {
        console.log('from parent', value);
        parentPort.postMessage('pong');
        parentPort.close();
    });
}