package core

type LoremPicsumError struct {
	IsLoremPicsumError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewLoremPicsumError(code string, msg string, ctx *Context) *LoremPicsumError {
	return &LoremPicsumError{
		IsLoremPicsumError: true,
		Sdk:              "LoremPicsum",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *LoremPicsumError) Error() string {
	return e.Msg
}
