// 명령어는 역할에 따라 인자를 가지므로 명령어와 인자를 묶어 구조체로 정의
struct Code {
  Instruction instruction;
  any operand;
}