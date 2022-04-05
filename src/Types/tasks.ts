// Readonly<...> a *mapped type*
// can also create new readonly type like:
// type ReadonlyTask = Readonly<Task>
// where Task is not readonly
export type Task = {
    id: number
    text: string
    done: boolean
}

export type ReadonlyTask = Readonly<Task>

/* 
export type CompletedTask = Readonly<{
    id: number
    text: string
    done: true // literal type
}>
 */

// & creates 'intersection type' of two types
// here: ReadonlyTask and new Type where literal type done: true
// done: true is more speciific than ReadonlyTask's done 
// so it overrides ReadonlyTask's done
export type CompletedTask = ReadonlyTask & {
    readonly done: true
}