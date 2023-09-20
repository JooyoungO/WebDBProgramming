// FormData 객체
// html form tag 에 담긴 데이터를 AJAX 요청으로 보내고 싶은 경우

const formData = new FormData();

// 데이터 추가
formData.append('name', 'joo');
formData.append('item', 'orange');
formData.append('item', 'apple');
formData.append('test', ['hi', 'joooo']);

// 데이터 존재 여부 확인 -> boolean
formData.has('item');
formData.has('money');

// 데이터 조회
formData.get('item');
formData.get('test');
formData.getAll('item');

// 데이터 삭제
formData.delete('test');

// 데이터 수정
formData.set('item', 'apple');

