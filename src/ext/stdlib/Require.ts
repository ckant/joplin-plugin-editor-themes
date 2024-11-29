/**
 * Extensions for function requirements / prerequisites.
 */
export namespace Require {
  /**
   * Asserts that {@link number} is a non-negative integer.
   */
  export function nonNegativeInteger(number: number): void {
    if (!Number.isInteger(number)) throw new Error(`${number} is not an integer`)
    if (number < 0) throw new Error(`${number} is negative`)
  }
}
