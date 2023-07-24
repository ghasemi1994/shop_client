export function setClassNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}