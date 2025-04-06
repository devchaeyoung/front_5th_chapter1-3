export function shallowEquals<T>(objA: T, objB: T): boolean {
  if (Array.isArray(objA) && Array.isArray(objB)) {
    for ( let i = 0; i < objA.length; i++ ){
      if (objA[i] !== objB[i]) return false;
    }
    return true;
  }

  if ( typeof objA === "object" && typeof objB === "object" ) {

    if ( objA === null || objB === null ) {
      return true; 
    }
    const keyA  = Object.keys(objA) as (keyof typeof objA)[];
    const keyB  = Object.keys(objB) as (keyof typeof objB)[];

    if (keyA.length !== keyB.length) return false;

    for ( let key of keyA ) {
      if (objA[key] !== objB[key] ) return false;
    }
    return true;
  }

  return objA === objB;
}
