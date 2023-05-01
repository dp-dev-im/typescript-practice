import React from "react";

function App() {
  // // 한국의 음식 사전을 만들어보자!
  // interface TranslatedObject {
  //   [key: string]: string | TranslatedObject;
  // }

  // type Words = {
  //   [searchWord: string]: string;
  // };

  // class Word {
  //   constructor(public term: string, public def: string) {}
  // }

  // class Dict {
  //   private words: Words; // interface [key : string] : string 으로 이뤄져 있음
  //   // constructor가 없으면, initialize 관련 타입 에러 발생
  //   constructor() {
  //     this.words = {}; // 객체를 통해 보관 [searchWord] = {} === let words = {}
  //   }
  //   add(word: Word) {
  //     // words 객체에 term이 확인 되지 않으면(없다면),
  //     // words searchWord의 값은 = add매서드의 word의 def와 동일 해
  //     if (this.words[word.term] === undefined) {
  //       this.words[word.term] = word.def;
  //     }
  //   }

  //   // 단어 업데이트
  //   // words 객체에 term 프로퍼티가 존재한다면
  //   // newTerm과 = term을 동일하게 만들어주고, 기존의 term을 삭제
  //   update(term: string, newTerm: string) {
  //     if (this.words.hasOwnProperty(term)) {
  //       this.words[newTerm] = this.words[term];
  //       delete this.words[term];
  //     }
  //   }

  //   // word의 term을 객체로 반환 => add 매서드로 인해 term을 검색하게 될 경우 def의가 나옴
  //   def(term: string) {
  //     return this.words[term];
  //   }

  //   // word로 접근 하기보단, term으로 접근 => def 파악
  //   // term이 존재할 때, 제거
  //   remove(term: string) {
  //     // delete할 단어가 word.term과 일치할 때
  //     if (this.words[term] !== undefined) {
  //       delete this.words[term];
  //     }
  //   }

  //   // transForm(term: string) {
  //   // const translated: TranslatedObject = {};

  //   // if (typeof this.def === 'string') {
  //   // translated[term] = this.words[term];
  //   // }
  //   // }

  //   // 검색하는 단어가 없다면 알림창을, 검색하는 단어가 존재한다면 용어의 정의를 출력
  //   searchWord(term: string) {
  //     if (!this.words.hasOwnProperty(term)) {
  //       console.log(`${term}은 저희 사전에 등록되어 있지 않습니다`);
  //     } else {
  //       console.log(`${term}의 사전적인 의미는 ${this.words[term]}입니다.`);
  //     }
  //   }
  // }

  // const kimchi = new Word("kimchi", "one of best food in Korea");
  // const tteokbokki = new Word(
  //   "tteokbokki",
  //   "representative school food in Korea"
  // );
  // const bulgogi = new Word("bulgogi", "traditional food in Korea");

  // const obj = {
  //   kimchi: "한국의 대표 음식",
  //   tteokbokki: "한국의 대표 간식",
  //   bulgogi: "한국의 전통 음식",
  // };

  // const dictKoreanFood = new Dict();
  // dictKoreanFood.add(kimchi); // Word 인스턴스
  // dictKoreanFood.add(tteokbokki);
  // dictKoreanFood.add(bulgogi);
  // dictKoreanFood.def("kimchi");
  // dictKoreanFood.def("tteokbokki");
  // dictKoreanFood.def("bulgogi");
  // dictKoreanFood.searchWord("kimchi");
  // dictKoreanFood.searchWord("tteokbokki");
  // dictKoreanFood.searchWord("bulgoki");
  // // dictKoreanFood.transForm('kimchi');

  // // abstract interface 비교
  // abstract class User {
  //   constructor(protected firstName: string, protected lastName: string) {}
  //   abstract sayHi(name: string): string;
  //   abstract fullName(): string;
  // }

  // class Player extends User {
  //   fullName(): string {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
  //   sayHi(name: string): string {
  //     return `hi ${name} my name is ${this.fullName()}`;
  //   }
  // }

  // // interface 사용
  // interface IUser {
  //   firstName: string;
  //   lastName: string;
  //   sayHi(name: string): string;
  //   fullName(): string;
  // }

  // class PlayerInterface implements IUser {
  //   constructor(public firstName: string, public lastName: string) {}
  //   fullName(): string {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
  //   sayHi(name: string): string {
  //     return `hi ${name} my name is ${this.fullName()}`;
  //   }
  // }

  // type interface 상속 비교
  type PlayerA = {
    firstName: string;
  };

  type PlayerAA = PlayerA & {
    lastName: string;
  };

  const playerA: PlayerAA = {
    firstName: "FIRSTNAME",
    lastName: "LASTNAME",
  };

  interface IPlayerB {
    firstName: string;
  }

  interface IPlayerBB extends IPlayerB {
    lastName: string;
  }

  // 이름 중복 가능
  interface IPlayerBB {
    nickName: string;
  }

  const playerB: IPlayerBB = {
    firstName: "FIRSTNAME",
    lastName: "LASTNAME",

    nickName: "NICKNAME",
  };

  // 추상화
  type APlayerA = {
    firstName: string;
  };

  interface AIPlayerB {
    firstName: string;
  }

  class AUser implements APlayerA {
    constructor(public firstName: string) {}
  }

  return (
    <>
      <h1>ahaha</h1>
    </>
  );
}

export default App;
