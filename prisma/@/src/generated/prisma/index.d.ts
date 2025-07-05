
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model category_tourism
 * 
 */
export type category_tourism = $Result.DefaultSelection<Prisma.$category_tourismPayload>
/**
 * Model facility
 * 
 */
export type facility = $Result.DefaultSelection<Prisma.$facilityPayload>
/**
 * Model facility_tourism
 * 
 */
export type facility_tourism = $Result.DefaultSelection<Prisma.$facility_tourismPayload>
/**
 * Model gallery
 * 
 */
export type gallery = $Result.DefaultSelection<Prisma.$galleryPayload>
/**
 * Model operating_hours
 * 
 */
export type operating_hours = $Result.DefaultSelection<Prisma.$operating_hoursPayload>
/**
 * Model payment
 * 
 */
export type payment = $Result.DefaultSelection<Prisma.$paymentPayload>
/**
 * Model reviews
 * 
 */
export type reviews = $Result.DefaultSelection<Prisma.$reviewsPayload>
/**
 * Model spot_tourism
 * 
 */
export type spot_tourism = $Result.DefaultSelection<Prisma.$spot_tourismPayload>
/**
 * Model ticket
 * 
 */
export type ticket = $Result.DefaultSelection<Prisma.$ticketPayload>
/**
 * Model transaction
 * 
 */
export type transaction = $Result.DefaultSelection<Prisma.$transactionPayload>
/**
 * Model transaction_detail
 * 
 */
export type transaction_detail = $Result.DefaultSelection<Prisma.$transaction_detailPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model village
 * 
 */
export type village = $Result.DefaultSelection<Prisma.$villagePayload>
/**
 * Model temp_order
 * 
 */
export type temp_order = $Result.DefaultSelection<Prisma.$temp_orderPayload>
/**
 * Model temp_order_detail
 * 
 */
export type temp_order_detail = $Result.DefaultSelection<Prisma.$temp_order_detailPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OperatingDay: {
  Senin: 'Senin',
  Selasa: 'Selasa',
  Rabu: 'Rabu',
  Kamis: 'Kamis',
  Jumat: 'Jumat',
  Sabtu: 'Sabtu',
  Minggu: 'Minggu'
};

export type OperatingDay = (typeof OperatingDay)[keyof typeof OperatingDay]


export const PaymentStatus: {
  pending: 'pending',
  success: 'success',
  failed: 'failed'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const TransactionStatus: {
  pending: 'pending',
  paid: 'paid',
  cancelled: 'cancelled'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const Role: {
  admin: 'admin',
  user: 'user',
  tourism_owner: 'tourism_owner'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TicketStatus: {
  unverified: 'unverified',
  verified: 'verified'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]

}

export type OperatingDay = $Enums.OperatingDay

export const OperatingDay: typeof $Enums.OperatingDay

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Category_tourisms
 * const category_tourisms = await prisma.category_tourism.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Category_tourisms
   * const category_tourisms = await prisma.category_tourism.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.category_tourism`: Exposes CRUD operations for the **category_tourism** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Category_tourisms
    * const category_tourisms = await prisma.category_tourism.findMany()
    * ```
    */
  get category_tourism(): Prisma.category_tourismDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facility`: Exposes CRUD operations for the **facility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facilities
    * const facilities = await prisma.facility.findMany()
    * ```
    */
  get facility(): Prisma.facilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facility_tourism`: Exposes CRUD operations for the **facility_tourism** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facility_tourisms
    * const facility_tourisms = await prisma.facility_tourism.findMany()
    * ```
    */
  get facility_tourism(): Prisma.facility_tourismDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gallery`: Exposes CRUD operations for the **gallery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Galleries
    * const galleries = await prisma.gallery.findMany()
    * ```
    */
  get gallery(): Prisma.galleryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operating_hours`: Exposes CRUD operations for the **operating_hours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operating_hours
    * const operating_hours = await prisma.operating_hours.findMany()
    * ```
    */
  get operating_hours(): Prisma.operating_hoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.paymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.reviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spot_tourism`: Exposes CRUD operations for the **spot_tourism** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spot_tourisms
    * const spot_tourisms = await prisma.spot_tourism.findMany()
    * ```
    */
  get spot_tourism(): Prisma.spot_tourismDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.ticketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction_detail`: Exposes CRUD operations for the **transaction_detail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaction_details
    * const transaction_details = await prisma.transaction_detail.findMany()
    * ```
    */
  get transaction_detail(): Prisma.transaction_detailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.village`: Exposes CRUD operations for the **village** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Villages
    * const villages = await prisma.village.findMany()
    * ```
    */
  get village(): Prisma.villageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.temp_order`: Exposes CRUD operations for the **temp_order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Temp_orders
    * const temp_orders = await prisma.temp_order.findMany()
    * ```
    */
  get temp_order(): Prisma.temp_orderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.temp_order_detail`: Exposes CRUD operations for the **temp_order_detail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Temp_order_details
    * const temp_order_details = await prisma.temp_order_detail.findMany()
    * ```
    */
  get temp_order_detail(): Prisma.temp_order_detailDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    category_tourism: 'category_tourism',
    facility: 'facility',
    facility_tourism: 'facility_tourism',
    gallery: 'gallery',
    operating_hours: 'operating_hours',
    payment: 'payment',
    reviews: 'reviews',
    spot_tourism: 'spot_tourism',
    ticket: 'ticket',
    transaction: 'transaction',
    transaction_detail: 'transaction_detail',
    users: 'users',
    village: 'village',
    temp_order: 'temp_order',
    temp_order_detail: 'temp_order_detail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "category_tourism" | "facility" | "facility_tourism" | "gallery" | "operating_hours" | "payment" | "reviews" | "spot_tourism" | "ticket" | "transaction" | "transaction_detail" | "users" | "village" | "temp_order" | "temp_order_detail"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      category_tourism: {
        payload: Prisma.$category_tourismPayload<ExtArgs>
        fields: Prisma.category_tourismFieldRefs
        operations: {
          findUnique: {
            args: Prisma.category_tourismFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_tourismPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.category_tourismFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_tourismPayload>
          }
          findFirst: {
            args: Prisma.category_tourismFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_tourismPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.category_tourismFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_tourismPayload>
          }
          findMany: {
            args: Prisma.category_tourismFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_tourismPayload>[]
          }
          create: {
            args: Prisma.category_tourismCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_tourismPayload>
          }
          createMany: {
            args: Prisma.category_tourismCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.category_tourismDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_tourismPayload>
          }
          update: {
            args: Prisma.category_tourismUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_tourismPayload>
          }
          deleteMany: {
            args: Prisma.category_tourismDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.category_tourismUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.category_tourismUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$category_tourismPayload>
          }
          aggregate: {
            args: Prisma.Category_tourismAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory_tourism>
          }
          groupBy: {
            args: Prisma.category_tourismGroupByArgs<ExtArgs>
            result: $Utils.Optional<Category_tourismGroupByOutputType>[]
          }
          count: {
            args: Prisma.category_tourismCountArgs<ExtArgs>
            result: $Utils.Optional<Category_tourismCountAggregateOutputType> | number
          }
        }
      }
      facility: {
        payload: Prisma.$facilityPayload<ExtArgs>
        fields: Prisma.facilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.facilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.facilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>
          }
          findFirst: {
            args: Prisma.facilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.facilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>
          }
          findMany: {
            args: Prisma.facilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>[]
          }
          create: {
            args: Prisma.facilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>
          }
          createMany: {
            args: Prisma.facilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.facilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>
          }
          update: {
            args: Prisma.facilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>
          }
          deleteMany: {
            args: Prisma.facilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.facilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.facilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facilityPayload>
          }
          aggregate: {
            args: Prisma.FacilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacility>
          }
          groupBy: {
            args: Prisma.facilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.facilityCountArgs<ExtArgs>
            result: $Utils.Optional<FacilityCountAggregateOutputType> | number
          }
        }
      }
      facility_tourism: {
        payload: Prisma.$facility_tourismPayload<ExtArgs>
        fields: Prisma.facility_tourismFieldRefs
        operations: {
          findUnique: {
            args: Prisma.facility_tourismFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_tourismPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.facility_tourismFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_tourismPayload>
          }
          findFirst: {
            args: Prisma.facility_tourismFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_tourismPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.facility_tourismFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_tourismPayload>
          }
          findMany: {
            args: Prisma.facility_tourismFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_tourismPayload>[]
          }
          create: {
            args: Prisma.facility_tourismCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_tourismPayload>
          }
          createMany: {
            args: Prisma.facility_tourismCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.facility_tourismDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_tourismPayload>
          }
          update: {
            args: Prisma.facility_tourismUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_tourismPayload>
          }
          deleteMany: {
            args: Prisma.facility_tourismDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.facility_tourismUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.facility_tourismUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facility_tourismPayload>
          }
          aggregate: {
            args: Prisma.Facility_tourismAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacility_tourism>
          }
          groupBy: {
            args: Prisma.facility_tourismGroupByArgs<ExtArgs>
            result: $Utils.Optional<Facility_tourismGroupByOutputType>[]
          }
          count: {
            args: Prisma.facility_tourismCountArgs<ExtArgs>
            result: $Utils.Optional<Facility_tourismCountAggregateOutputType> | number
          }
        }
      }
      gallery: {
        payload: Prisma.$galleryPayload<ExtArgs>
        fields: Prisma.galleryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.galleryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$galleryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.galleryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$galleryPayload>
          }
          findFirst: {
            args: Prisma.galleryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$galleryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.galleryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$galleryPayload>
          }
          findMany: {
            args: Prisma.galleryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$galleryPayload>[]
          }
          create: {
            args: Prisma.galleryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$galleryPayload>
          }
          createMany: {
            args: Prisma.galleryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.galleryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$galleryPayload>
          }
          update: {
            args: Prisma.galleryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$galleryPayload>
          }
          deleteMany: {
            args: Prisma.galleryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.galleryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.galleryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$galleryPayload>
          }
          aggregate: {
            args: Prisma.GalleryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGallery>
          }
          groupBy: {
            args: Prisma.galleryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryGroupByOutputType>[]
          }
          count: {
            args: Prisma.galleryCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryCountAggregateOutputType> | number
          }
        }
      }
      operating_hours: {
        payload: Prisma.$operating_hoursPayload<ExtArgs>
        fields: Prisma.operating_hoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.operating_hoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operating_hoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.operating_hoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operating_hoursPayload>
          }
          findFirst: {
            args: Prisma.operating_hoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operating_hoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.operating_hoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operating_hoursPayload>
          }
          findMany: {
            args: Prisma.operating_hoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operating_hoursPayload>[]
          }
          create: {
            args: Prisma.operating_hoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operating_hoursPayload>
          }
          createMany: {
            args: Prisma.operating_hoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.operating_hoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operating_hoursPayload>
          }
          update: {
            args: Prisma.operating_hoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operating_hoursPayload>
          }
          deleteMany: {
            args: Prisma.operating_hoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.operating_hoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.operating_hoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operating_hoursPayload>
          }
          aggregate: {
            args: Prisma.Operating_hoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperating_hours>
          }
          groupBy: {
            args: Prisma.operating_hoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<Operating_hoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.operating_hoursCountArgs<ExtArgs>
            result: $Utils.Optional<Operating_hoursCountAggregateOutputType> | number
          }
        }
      }
      payment: {
        payload: Prisma.$paymentPayload<ExtArgs>
        fields: Prisma.paymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findFirst: {
            args: Prisma.paymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findMany: {
            args: Prisma.paymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          create: {
            args: Prisma.paymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          createMany: {
            args: Prisma.paymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.paymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          update: {
            args: Prisma.paymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          deleteMany: {
            args: Prisma.paymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.paymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.paymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      reviews: {
        payload: Prisma.$reviewsPayload<ExtArgs>
        fields: Prisma.reviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findFirst: {
            args: Prisma.reviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findMany: {
            args: Prisma.reviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          create: {
            args: Prisma.reviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          createMany: {
            args: Prisma.reviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          update: {
            args: Prisma.reviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          deleteMany: {
            args: Prisma.reviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.reviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      spot_tourism: {
        payload: Prisma.$spot_tourismPayload<ExtArgs>
        fields: Prisma.spot_tourismFieldRefs
        operations: {
          findUnique: {
            args: Prisma.spot_tourismFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spot_tourismPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.spot_tourismFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spot_tourismPayload>
          }
          findFirst: {
            args: Prisma.spot_tourismFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spot_tourismPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.spot_tourismFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spot_tourismPayload>
          }
          findMany: {
            args: Prisma.spot_tourismFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spot_tourismPayload>[]
          }
          create: {
            args: Prisma.spot_tourismCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spot_tourismPayload>
          }
          createMany: {
            args: Prisma.spot_tourismCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.spot_tourismDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spot_tourismPayload>
          }
          update: {
            args: Prisma.spot_tourismUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spot_tourismPayload>
          }
          deleteMany: {
            args: Prisma.spot_tourismDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.spot_tourismUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.spot_tourismUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spot_tourismPayload>
          }
          aggregate: {
            args: Prisma.Spot_tourismAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpot_tourism>
          }
          groupBy: {
            args: Prisma.spot_tourismGroupByArgs<ExtArgs>
            result: $Utils.Optional<Spot_tourismGroupByOutputType>[]
          }
          count: {
            args: Prisma.spot_tourismCountArgs<ExtArgs>
            result: $Utils.Optional<Spot_tourismCountAggregateOutputType> | number
          }
        }
      }
      ticket: {
        payload: Prisma.$ticketPayload<ExtArgs>
        fields: Prisma.ticketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          findFirst: {
            args: Prisma.ticketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          findMany: {
            args: Prisma.ticketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>[]
          }
          create: {
            args: Prisma.ticketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          createMany: {
            args: Prisma.ticketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ticketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          update: {
            args: Prisma.ticketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          deleteMany: {
            args: Prisma.ticketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ticketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.ticketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      transaction: {
        payload: Prisma.$transactionPayload<ExtArgs>
        fields: Prisma.transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findFirst: {
            args: Prisma.transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findMany: {
            args: Prisma.transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          create: {
            args: Prisma.transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          createMany: {
            args: Prisma.transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          update: {
            args: Prisma.transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          deleteMany: {
            args: Prisma.transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      transaction_detail: {
        payload: Prisma.$transaction_detailPayload<ExtArgs>
        fields: Prisma.transaction_detailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaction_detailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaction_detailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>
          }
          findFirst: {
            args: Prisma.transaction_detailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaction_detailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>
          }
          findMany: {
            args: Prisma.transaction_detailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>[]
          }
          create: {
            args: Prisma.transaction_detailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>
          }
          createMany: {
            args: Prisma.transaction_detailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.transaction_detailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>
          }
          update: {
            args: Prisma.transaction_detailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>
          }
          deleteMany: {
            args: Prisma.transaction_detailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaction_detailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.transaction_detailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>
          }
          aggregate: {
            args: Prisma.Transaction_detailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction_detail>
          }
          groupBy: {
            args: Prisma.transaction_detailGroupByArgs<ExtArgs>
            result: $Utils.Optional<Transaction_detailGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaction_detailCountArgs<ExtArgs>
            result: $Utils.Optional<Transaction_detailCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      village: {
        payload: Prisma.$villagePayload<ExtArgs>
        fields: Prisma.villageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.villageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.villageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagePayload>
          }
          findFirst: {
            args: Prisma.villageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.villageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagePayload>
          }
          findMany: {
            args: Prisma.villageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagePayload>[]
          }
          create: {
            args: Prisma.villageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagePayload>
          }
          createMany: {
            args: Prisma.villageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.villageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagePayload>
          }
          update: {
            args: Prisma.villageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagePayload>
          }
          deleteMany: {
            args: Prisma.villageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.villageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.villageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$villagePayload>
          }
          aggregate: {
            args: Prisma.VillageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVillage>
          }
          groupBy: {
            args: Prisma.villageGroupByArgs<ExtArgs>
            result: $Utils.Optional<VillageGroupByOutputType>[]
          }
          count: {
            args: Prisma.villageCountArgs<ExtArgs>
            result: $Utils.Optional<VillageCountAggregateOutputType> | number
          }
        }
      }
      temp_order: {
        payload: Prisma.$temp_orderPayload<ExtArgs>
        fields: Prisma.temp_orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.temp_orderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.temp_orderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_orderPayload>
          }
          findFirst: {
            args: Prisma.temp_orderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.temp_orderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_orderPayload>
          }
          findMany: {
            args: Prisma.temp_orderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_orderPayload>[]
          }
          create: {
            args: Prisma.temp_orderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_orderPayload>
          }
          createMany: {
            args: Prisma.temp_orderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.temp_orderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_orderPayload>
          }
          update: {
            args: Prisma.temp_orderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_orderPayload>
          }
          deleteMany: {
            args: Prisma.temp_orderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.temp_orderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.temp_orderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_orderPayload>
          }
          aggregate: {
            args: Prisma.Temp_orderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemp_order>
          }
          groupBy: {
            args: Prisma.temp_orderGroupByArgs<ExtArgs>
            result: $Utils.Optional<Temp_orderGroupByOutputType>[]
          }
          count: {
            args: Prisma.temp_orderCountArgs<ExtArgs>
            result: $Utils.Optional<Temp_orderCountAggregateOutputType> | number
          }
        }
      }
      temp_order_detail: {
        payload: Prisma.$temp_order_detailPayload<ExtArgs>
        fields: Prisma.temp_order_detailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.temp_order_detailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_order_detailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.temp_order_detailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_order_detailPayload>
          }
          findFirst: {
            args: Prisma.temp_order_detailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_order_detailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.temp_order_detailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_order_detailPayload>
          }
          findMany: {
            args: Prisma.temp_order_detailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_order_detailPayload>[]
          }
          create: {
            args: Prisma.temp_order_detailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_order_detailPayload>
          }
          createMany: {
            args: Prisma.temp_order_detailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.temp_order_detailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_order_detailPayload>
          }
          update: {
            args: Prisma.temp_order_detailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_order_detailPayload>
          }
          deleteMany: {
            args: Prisma.temp_order_detailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.temp_order_detailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.temp_order_detailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temp_order_detailPayload>
          }
          aggregate: {
            args: Prisma.Temp_order_detailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemp_order_detail>
          }
          groupBy: {
            args: Prisma.temp_order_detailGroupByArgs<ExtArgs>
            result: $Utils.Optional<Temp_order_detailGroupByOutputType>[]
          }
          count: {
            args: Prisma.temp_order_detailCountArgs<ExtArgs>
            result: $Utils.Optional<Temp_order_detailCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    category_tourism?: category_tourismOmit
    facility?: facilityOmit
    facility_tourism?: facility_tourismOmit
    gallery?: galleryOmit
    operating_hours?: operating_hoursOmit
    payment?: paymentOmit
    reviews?: reviewsOmit
    spot_tourism?: spot_tourismOmit
    ticket?: ticketOmit
    transaction?: transactionOmit
    transaction_detail?: transaction_detailOmit
    users?: usersOmit
    village?: villageOmit
    temp_order?: temp_orderOmit
    temp_order_detail?: temp_order_detailOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Category_tourismCountOutputType
   */

  export type Category_tourismCountOutputType = {
    spots: number
  }

  export type Category_tourismCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spots?: boolean | Category_tourismCountOutputTypeCountSpotsArgs
  }

  // Custom InputTypes
  /**
   * Category_tourismCountOutputType without action
   */
  export type Category_tourismCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_tourismCountOutputType
     */
    select?: Category_tourismCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Category_tourismCountOutputType without action
   */
  export type Category_tourismCountOutputTypeCountSpotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spot_tourismWhereInput
  }


  /**
   * Count Type FacilityCountOutputType
   */

  export type FacilityCountOutputType = {
    facility_tourisms: number
  }

  export type FacilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility_tourisms?: boolean | FacilityCountOutputTypeCountFacility_tourismsArgs
  }

  // Custom InputTypes
  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityCountOutputType
     */
    select?: FacilityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountFacility_tourismsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facility_tourismWhereInput
  }


  /**
   * Count Type Spot_tourismCountOutputType
   */

  export type Spot_tourismCountOutputType = {
    facility_tourisms: number
    galleries: number
    operating_hours: number
    reviews: number
    tickets: number
  }

  export type Spot_tourismCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility_tourisms?: boolean | Spot_tourismCountOutputTypeCountFacility_tourismsArgs
    galleries?: boolean | Spot_tourismCountOutputTypeCountGalleriesArgs
    operating_hours?: boolean | Spot_tourismCountOutputTypeCountOperating_hoursArgs
    reviews?: boolean | Spot_tourismCountOutputTypeCountReviewsArgs
    tickets?: boolean | Spot_tourismCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * Spot_tourismCountOutputType without action
   */
  export type Spot_tourismCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spot_tourismCountOutputType
     */
    select?: Spot_tourismCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Spot_tourismCountOutputType without action
   */
  export type Spot_tourismCountOutputTypeCountFacility_tourismsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facility_tourismWhereInput
  }

  /**
   * Spot_tourismCountOutputType without action
   */
  export type Spot_tourismCountOutputTypeCountGalleriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: galleryWhereInput
  }

  /**
   * Spot_tourismCountOutputType without action
   */
  export type Spot_tourismCountOutputTypeCountOperating_hoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operating_hoursWhereInput
  }

  /**
   * Spot_tourismCountOutputType without action
   */
  export type Spot_tourismCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
  }

  /**
   * Spot_tourismCountOutputType without action
   */
  export type Spot_tourismCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    temp_order_details: number
    transaction_details: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    temp_order_details?: boolean | TicketCountOutputTypeCountTemp_order_detailsArgs
    transaction_details?: boolean | TicketCountOutputTypeCountTransaction_detailsArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountTemp_order_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: temp_order_detailWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountTransaction_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_detailWhereInput
  }


  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    payments: number
    transaction_details: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | TransactionCountOutputTypeCountPaymentsArgs
    transaction_details?: boolean | TransactionCountOutputTypeCountTransaction_detailsArgs
  }

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountTransaction_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_detailWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    reviews: number
    transactions: number
    temp_orders: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | UsersCountOutputTypeCountReviewsArgs
    transactions?: boolean | UsersCountOutputTypeCountTransactionsArgs
    temp_orders?: boolean | UsersCountOutputTypeCountTemp_ordersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTemp_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: temp_orderWhereInput
  }


  /**
   * Count Type VillageCountOutputType
   */

  export type VillageCountOutputType = {
    spots: number
  }

  export type VillageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spots?: boolean | VillageCountOutputTypeCountSpotsArgs
  }

  // Custom InputTypes
  /**
   * VillageCountOutputType without action
   */
  export type VillageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VillageCountOutputType
     */
    select?: VillageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VillageCountOutputType without action
   */
  export type VillageCountOutputTypeCountSpotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spot_tourismWhereInput
  }


  /**
   * Count Type Temp_orderCountOutputType
   */

  export type Temp_orderCountOutputType = {
    details: number
  }

  export type Temp_orderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | Temp_orderCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * Temp_orderCountOutputType without action
   */
  export type Temp_orderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Temp_orderCountOutputType
     */
    select?: Temp_orderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Temp_orderCountOutputType without action
   */
  export type Temp_orderCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: temp_order_detailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model category_tourism
   */

  export type AggregateCategory_tourism = {
    _count: Category_tourismCountAggregateOutputType | null
    _min: Category_tourismMinAggregateOutputType | null
    _max: Category_tourismMaxAggregateOutputType | null
  }

  export type Category_tourismMinAggregateOutputType = {
    category_id: string | null
    category_name: string | null
    category_desc: string | null
    category_icon: string | null
  }

  export type Category_tourismMaxAggregateOutputType = {
    category_id: string | null
    category_name: string | null
    category_desc: string | null
    category_icon: string | null
  }

  export type Category_tourismCountAggregateOutputType = {
    category_id: number
    category_name: number
    category_desc: number
    category_icon: number
    _all: number
  }


  export type Category_tourismMinAggregateInputType = {
    category_id?: true
    category_name?: true
    category_desc?: true
    category_icon?: true
  }

  export type Category_tourismMaxAggregateInputType = {
    category_id?: true
    category_name?: true
    category_desc?: true
    category_icon?: true
  }

  export type Category_tourismCountAggregateInputType = {
    category_id?: true
    category_name?: true
    category_desc?: true
    category_icon?: true
    _all?: true
  }

  export type Category_tourismAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category_tourism to aggregate.
     */
    where?: category_tourismWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of category_tourisms to fetch.
     */
    orderBy?: category_tourismOrderByWithRelationInput | category_tourismOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: category_tourismWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` category_tourisms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` category_tourisms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned category_tourisms
    **/
    _count?: true | Category_tourismCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Category_tourismMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Category_tourismMaxAggregateInputType
  }

  export type GetCategory_tourismAggregateType<T extends Category_tourismAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory_tourism]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory_tourism[P]>
      : GetScalarType<T[P], AggregateCategory_tourism[P]>
  }




  export type category_tourismGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: category_tourismWhereInput
    orderBy?: category_tourismOrderByWithAggregationInput | category_tourismOrderByWithAggregationInput[]
    by: Category_tourismScalarFieldEnum[] | Category_tourismScalarFieldEnum
    having?: category_tourismScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Category_tourismCountAggregateInputType | true
    _min?: Category_tourismMinAggregateInputType
    _max?: Category_tourismMaxAggregateInputType
  }

  export type Category_tourismGroupByOutputType = {
    category_id: string
    category_name: string
    category_desc: string | null
    category_icon: string | null
    _count: Category_tourismCountAggregateOutputType | null
    _min: Category_tourismMinAggregateOutputType | null
    _max: Category_tourismMaxAggregateOutputType | null
  }

  type GetCategory_tourismGroupByPayload<T extends category_tourismGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Category_tourismGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Category_tourismGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Category_tourismGroupByOutputType[P]>
            : GetScalarType<T[P], Category_tourismGroupByOutputType[P]>
        }
      >
    >


  export type category_tourismSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    category_desc?: boolean
    category_icon?: boolean
    spots?: boolean | category_tourism$spotsArgs<ExtArgs>
    _count?: boolean | Category_tourismCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category_tourism"]>



  export type category_tourismSelectScalar = {
    category_id?: boolean
    category_name?: boolean
    category_desc?: boolean
    category_icon?: boolean
  }

  export type category_tourismOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "category_name" | "category_desc" | "category_icon", ExtArgs["result"]["category_tourism"]>
  export type category_tourismInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spots?: boolean | category_tourism$spotsArgs<ExtArgs>
    _count?: boolean | Category_tourismCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $category_tourismPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category_tourism"
    objects: {
      spots: Prisma.$spot_tourismPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: string
      category_name: string
      category_desc: string | null
      category_icon: string | null
    }, ExtArgs["result"]["category_tourism"]>
    composites: {}
  }

  type category_tourismGetPayload<S extends boolean | null | undefined | category_tourismDefaultArgs> = $Result.GetResult<Prisma.$category_tourismPayload, S>

  type category_tourismCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<category_tourismFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Category_tourismCountAggregateInputType | true
    }

  export interface category_tourismDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category_tourism'], meta: { name: 'category_tourism' } }
    /**
     * Find zero or one Category_tourism that matches the filter.
     * @param {category_tourismFindUniqueArgs} args - Arguments to find a Category_tourism
     * @example
     * // Get one Category_tourism
     * const category_tourism = await prisma.category_tourism.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends category_tourismFindUniqueArgs>(args: SelectSubset<T, category_tourismFindUniqueArgs<ExtArgs>>): Prisma__category_tourismClient<$Result.GetResult<Prisma.$category_tourismPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category_tourism that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {category_tourismFindUniqueOrThrowArgs} args - Arguments to find a Category_tourism
     * @example
     * // Get one Category_tourism
     * const category_tourism = await prisma.category_tourism.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends category_tourismFindUniqueOrThrowArgs>(args: SelectSubset<T, category_tourismFindUniqueOrThrowArgs<ExtArgs>>): Prisma__category_tourismClient<$Result.GetResult<Prisma.$category_tourismPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category_tourism that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {category_tourismFindFirstArgs} args - Arguments to find a Category_tourism
     * @example
     * // Get one Category_tourism
     * const category_tourism = await prisma.category_tourism.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends category_tourismFindFirstArgs>(args?: SelectSubset<T, category_tourismFindFirstArgs<ExtArgs>>): Prisma__category_tourismClient<$Result.GetResult<Prisma.$category_tourismPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category_tourism that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {category_tourismFindFirstOrThrowArgs} args - Arguments to find a Category_tourism
     * @example
     * // Get one Category_tourism
     * const category_tourism = await prisma.category_tourism.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends category_tourismFindFirstOrThrowArgs>(args?: SelectSubset<T, category_tourismFindFirstOrThrowArgs<ExtArgs>>): Prisma__category_tourismClient<$Result.GetResult<Prisma.$category_tourismPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Category_tourisms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {category_tourismFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Category_tourisms
     * const category_tourisms = await prisma.category_tourism.findMany()
     * 
     * // Get first 10 Category_tourisms
     * const category_tourisms = await prisma.category_tourism.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const category_tourismWithCategory_idOnly = await prisma.category_tourism.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends category_tourismFindManyArgs>(args?: SelectSubset<T, category_tourismFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$category_tourismPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category_tourism.
     * @param {category_tourismCreateArgs} args - Arguments to create a Category_tourism.
     * @example
     * // Create one Category_tourism
     * const Category_tourism = await prisma.category_tourism.create({
     *   data: {
     *     // ... data to create a Category_tourism
     *   }
     * })
     * 
     */
    create<T extends category_tourismCreateArgs>(args: SelectSubset<T, category_tourismCreateArgs<ExtArgs>>): Prisma__category_tourismClient<$Result.GetResult<Prisma.$category_tourismPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Category_tourisms.
     * @param {category_tourismCreateManyArgs} args - Arguments to create many Category_tourisms.
     * @example
     * // Create many Category_tourisms
     * const category_tourism = await prisma.category_tourism.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends category_tourismCreateManyArgs>(args?: SelectSubset<T, category_tourismCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category_tourism.
     * @param {category_tourismDeleteArgs} args - Arguments to delete one Category_tourism.
     * @example
     * // Delete one Category_tourism
     * const Category_tourism = await prisma.category_tourism.delete({
     *   where: {
     *     // ... filter to delete one Category_tourism
     *   }
     * })
     * 
     */
    delete<T extends category_tourismDeleteArgs>(args: SelectSubset<T, category_tourismDeleteArgs<ExtArgs>>): Prisma__category_tourismClient<$Result.GetResult<Prisma.$category_tourismPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category_tourism.
     * @param {category_tourismUpdateArgs} args - Arguments to update one Category_tourism.
     * @example
     * // Update one Category_tourism
     * const category_tourism = await prisma.category_tourism.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends category_tourismUpdateArgs>(args: SelectSubset<T, category_tourismUpdateArgs<ExtArgs>>): Prisma__category_tourismClient<$Result.GetResult<Prisma.$category_tourismPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Category_tourisms.
     * @param {category_tourismDeleteManyArgs} args - Arguments to filter Category_tourisms to delete.
     * @example
     * // Delete a few Category_tourisms
     * const { count } = await prisma.category_tourism.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends category_tourismDeleteManyArgs>(args?: SelectSubset<T, category_tourismDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Category_tourisms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {category_tourismUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Category_tourisms
     * const category_tourism = await prisma.category_tourism.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends category_tourismUpdateManyArgs>(args: SelectSubset<T, category_tourismUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category_tourism.
     * @param {category_tourismUpsertArgs} args - Arguments to update or create a Category_tourism.
     * @example
     * // Update or create a Category_tourism
     * const category_tourism = await prisma.category_tourism.upsert({
     *   create: {
     *     // ... data to create a Category_tourism
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category_tourism we want to update
     *   }
     * })
     */
    upsert<T extends category_tourismUpsertArgs>(args: SelectSubset<T, category_tourismUpsertArgs<ExtArgs>>): Prisma__category_tourismClient<$Result.GetResult<Prisma.$category_tourismPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Category_tourisms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {category_tourismCountArgs} args - Arguments to filter Category_tourisms to count.
     * @example
     * // Count the number of Category_tourisms
     * const count = await prisma.category_tourism.count({
     *   where: {
     *     // ... the filter for the Category_tourisms we want to count
     *   }
     * })
    **/
    count<T extends category_tourismCountArgs>(
      args?: Subset<T, category_tourismCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Category_tourismCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category_tourism.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_tourismAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Category_tourismAggregateArgs>(args: Subset<T, Category_tourismAggregateArgs>): Prisma.PrismaPromise<GetCategory_tourismAggregateType<T>>

    /**
     * Group by Category_tourism.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {category_tourismGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends category_tourismGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: category_tourismGroupByArgs['orderBy'] }
        : { orderBy?: category_tourismGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, category_tourismGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategory_tourismGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category_tourism model
   */
  readonly fields: category_tourismFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category_tourism.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__category_tourismClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spots<T extends category_tourism$spotsArgs<ExtArgs> = {}>(args?: Subset<T, category_tourism$spotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spot_tourismPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category_tourism model
   */
  interface category_tourismFieldRefs {
    readonly category_id: FieldRef<"category_tourism", 'String'>
    readonly category_name: FieldRef<"category_tourism", 'String'>
    readonly category_desc: FieldRef<"category_tourism", 'String'>
    readonly category_icon: FieldRef<"category_tourism", 'String'>
  }
    

  // Custom InputTypes
  /**
   * category_tourism findUnique
   */
  export type category_tourismFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_tourism
     */
    select?: category_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_tourism
     */
    omit?: category_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_tourismInclude<ExtArgs> | null
    /**
     * Filter, which category_tourism to fetch.
     */
    where: category_tourismWhereUniqueInput
  }

  /**
   * category_tourism findUniqueOrThrow
   */
  export type category_tourismFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_tourism
     */
    select?: category_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_tourism
     */
    omit?: category_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_tourismInclude<ExtArgs> | null
    /**
     * Filter, which category_tourism to fetch.
     */
    where: category_tourismWhereUniqueInput
  }

  /**
   * category_tourism findFirst
   */
  export type category_tourismFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_tourism
     */
    select?: category_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_tourism
     */
    omit?: category_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_tourismInclude<ExtArgs> | null
    /**
     * Filter, which category_tourism to fetch.
     */
    where?: category_tourismWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of category_tourisms to fetch.
     */
    orderBy?: category_tourismOrderByWithRelationInput | category_tourismOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for category_tourisms.
     */
    cursor?: category_tourismWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` category_tourisms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` category_tourisms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of category_tourisms.
     */
    distinct?: Category_tourismScalarFieldEnum | Category_tourismScalarFieldEnum[]
  }

  /**
   * category_tourism findFirstOrThrow
   */
  export type category_tourismFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_tourism
     */
    select?: category_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_tourism
     */
    omit?: category_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_tourismInclude<ExtArgs> | null
    /**
     * Filter, which category_tourism to fetch.
     */
    where?: category_tourismWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of category_tourisms to fetch.
     */
    orderBy?: category_tourismOrderByWithRelationInput | category_tourismOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for category_tourisms.
     */
    cursor?: category_tourismWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` category_tourisms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` category_tourisms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of category_tourisms.
     */
    distinct?: Category_tourismScalarFieldEnum | Category_tourismScalarFieldEnum[]
  }

  /**
   * category_tourism findMany
   */
  export type category_tourismFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_tourism
     */
    select?: category_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_tourism
     */
    omit?: category_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_tourismInclude<ExtArgs> | null
    /**
     * Filter, which category_tourisms to fetch.
     */
    where?: category_tourismWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of category_tourisms to fetch.
     */
    orderBy?: category_tourismOrderByWithRelationInput | category_tourismOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing category_tourisms.
     */
    cursor?: category_tourismWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` category_tourisms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` category_tourisms.
     */
    skip?: number
    distinct?: Category_tourismScalarFieldEnum | Category_tourismScalarFieldEnum[]
  }

  /**
   * category_tourism create
   */
  export type category_tourismCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_tourism
     */
    select?: category_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_tourism
     */
    omit?: category_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_tourismInclude<ExtArgs> | null
    /**
     * The data needed to create a category_tourism.
     */
    data: XOR<category_tourismCreateInput, category_tourismUncheckedCreateInput>
  }

  /**
   * category_tourism createMany
   */
  export type category_tourismCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many category_tourisms.
     */
    data: category_tourismCreateManyInput | category_tourismCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category_tourism update
   */
  export type category_tourismUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_tourism
     */
    select?: category_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_tourism
     */
    omit?: category_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_tourismInclude<ExtArgs> | null
    /**
     * The data needed to update a category_tourism.
     */
    data: XOR<category_tourismUpdateInput, category_tourismUncheckedUpdateInput>
    /**
     * Choose, which category_tourism to update.
     */
    where: category_tourismWhereUniqueInput
  }

  /**
   * category_tourism updateMany
   */
  export type category_tourismUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update category_tourisms.
     */
    data: XOR<category_tourismUpdateManyMutationInput, category_tourismUncheckedUpdateManyInput>
    /**
     * Filter which category_tourisms to update
     */
    where?: category_tourismWhereInput
    /**
     * Limit how many category_tourisms to update.
     */
    limit?: number
  }

  /**
   * category_tourism upsert
   */
  export type category_tourismUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_tourism
     */
    select?: category_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_tourism
     */
    omit?: category_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_tourismInclude<ExtArgs> | null
    /**
     * The filter to search for the category_tourism to update in case it exists.
     */
    where: category_tourismWhereUniqueInput
    /**
     * In case the category_tourism found by the `where` argument doesn't exist, create a new category_tourism with this data.
     */
    create: XOR<category_tourismCreateInput, category_tourismUncheckedCreateInput>
    /**
     * In case the category_tourism was found with the provided `where` argument, update it with this data.
     */
    update: XOR<category_tourismUpdateInput, category_tourismUncheckedUpdateInput>
  }

  /**
   * category_tourism delete
   */
  export type category_tourismDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_tourism
     */
    select?: category_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_tourism
     */
    omit?: category_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_tourismInclude<ExtArgs> | null
    /**
     * Filter which category_tourism to delete.
     */
    where: category_tourismWhereUniqueInput
  }

  /**
   * category_tourism deleteMany
   */
  export type category_tourismDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category_tourisms to delete
     */
    where?: category_tourismWhereInput
    /**
     * Limit how many category_tourisms to delete.
     */
    limit?: number
  }

  /**
   * category_tourism.spots
   */
  export type category_tourism$spotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spot_tourism
     */
    select?: spot_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spot_tourism
     */
    omit?: spot_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spot_tourismInclude<ExtArgs> | null
    where?: spot_tourismWhereInput
    orderBy?: spot_tourismOrderByWithRelationInput | spot_tourismOrderByWithRelationInput[]
    cursor?: spot_tourismWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Spot_tourismScalarFieldEnum | Spot_tourismScalarFieldEnum[]
  }

  /**
   * category_tourism without action
   */
  export type category_tourismDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_tourism
     */
    select?: category_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_tourism
     */
    omit?: category_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_tourismInclude<ExtArgs> | null
  }


  /**
   * Model facility
   */

  export type AggregateFacility = {
    _count: FacilityCountAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  export type FacilityMinAggregateOutputType = {
    facility_id: string | null
    facility_name: string | null
    facility_icon: string | null
  }

  export type FacilityMaxAggregateOutputType = {
    facility_id: string | null
    facility_name: string | null
    facility_icon: string | null
  }

  export type FacilityCountAggregateOutputType = {
    facility_id: number
    facility_name: number
    facility_icon: number
    _all: number
  }


  export type FacilityMinAggregateInputType = {
    facility_id?: true
    facility_name?: true
    facility_icon?: true
  }

  export type FacilityMaxAggregateInputType = {
    facility_id?: true
    facility_name?: true
    facility_icon?: true
  }

  export type FacilityCountAggregateInputType = {
    facility_id?: true
    facility_name?: true
    facility_icon?: true
    _all?: true
  }

  export type FacilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facility to aggregate.
     */
    where?: facilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facilities to fetch.
     */
    orderBy?: facilityOrderByWithRelationInput | facilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: facilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned facilities
    **/
    _count?: true | FacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityMaxAggregateInputType
  }

  export type GetFacilityAggregateType<T extends FacilityAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility[P]>
      : GetScalarType<T[P], AggregateFacility[P]>
  }




  export type facilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facilityWhereInput
    orderBy?: facilityOrderByWithAggregationInput | facilityOrderByWithAggregationInput[]
    by: FacilityScalarFieldEnum[] | FacilityScalarFieldEnum
    having?: facilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityCountAggregateInputType | true
    _min?: FacilityMinAggregateInputType
    _max?: FacilityMaxAggregateInputType
  }

  export type FacilityGroupByOutputType = {
    facility_id: string
    facility_name: string
    facility_icon: string | null
    _count: FacilityCountAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  type GetFacilityGroupByPayload<T extends facilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityGroupByOutputType[P]>
        }
      >
    >


  export type facilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facility_id?: boolean
    facility_name?: boolean
    facility_icon?: boolean
    facility_tourisms?: boolean | facility$facility_tourismsArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facility"]>



  export type facilitySelectScalar = {
    facility_id?: boolean
    facility_name?: boolean
    facility_icon?: boolean
  }

  export type facilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"facility_id" | "facility_name" | "facility_icon", ExtArgs["result"]["facility"]>
  export type facilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility_tourisms?: boolean | facility$facility_tourismsArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $facilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "facility"
    objects: {
      facility_tourisms: Prisma.$facility_tourismPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      facility_id: string
      facility_name: string
      facility_icon: string | null
    }, ExtArgs["result"]["facility"]>
    composites: {}
  }

  type facilityGetPayload<S extends boolean | null | undefined | facilityDefaultArgs> = $Result.GetResult<Prisma.$facilityPayload, S>

  type facilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<facilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacilityCountAggregateInputType | true
    }

  export interface facilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['facility'], meta: { name: 'facility' } }
    /**
     * Find zero or one Facility that matches the filter.
     * @param {facilityFindUniqueArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends facilityFindUniqueArgs>(args: SelectSubset<T, facilityFindUniqueArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Facility that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {facilityFindUniqueOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends facilityFindUniqueOrThrowArgs>(args: SelectSubset<T, facilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilityFindFirstArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends facilityFindFirstArgs>(args?: SelectSubset<T, facilityFindFirstArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilityFindFirstOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends facilityFindFirstOrThrowArgs>(args?: SelectSubset<T, facilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facilities
     * const facilities = await prisma.facility.findMany()
     * 
     * // Get first 10 Facilities
     * const facilities = await prisma.facility.findMany({ take: 10 })
     * 
     * // Only select the `facility_id`
     * const facilityWithFacility_idOnly = await prisma.facility.findMany({ select: { facility_id: true } })
     * 
     */
    findMany<T extends facilityFindManyArgs>(args?: SelectSubset<T, facilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Facility.
     * @param {facilityCreateArgs} args - Arguments to create a Facility.
     * @example
     * // Create one Facility
     * const Facility = await prisma.facility.create({
     *   data: {
     *     // ... data to create a Facility
     *   }
     * })
     * 
     */
    create<T extends facilityCreateArgs>(args: SelectSubset<T, facilityCreateArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facilities.
     * @param {facilityCreateManyArgs} args - Arguments to create many Facilities.
     * @example
     * // Create many Facilities
     * const facility = await prisma.facility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends facilityCreateManyArgs>(args?: SelectSubset<T, facilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Facility.
     * @param {facilityDeleteArgs} args - Arguments to delete one Facility.
     * @example
     * // Delete one Facility
     * const Facility = await prisma.facility.delete({
     *   where: {
     *     // ... filter to delete one Facility
     *   }
     * })
     * 
     */
    delete<T extends facilityDeleteArgs>(args: SelectSubset<T, facilityDeleteArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Facility.
     * @param {facilityUpdateArgs} args - Arguments to update one Facility.
     * @example
     * // Update one Facility
     * const facility = await prisma.facility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends facilityUpdateArgs>(args: SelectSubset<T, facilityUpdateArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facilities.
     * @param {facilityDeleteManyArgs} args - Arguments to filter Facilities to delete.
     * @example
     * // Delete a few Facilities
     * const { count } = await prisma.facility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends facilityDeleteManyArgs>(args?: SelectSubset<T, facilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends facilityUpdateManyArgs>(args: SelectSubset<T, facilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Facility.
     * @param {facilityUpsertArgs} args - Arguments to update or create a Facility.
     * @example
     * // Update or create a Facility
     * const facility = await prisma.facility.upsert({
     *   create: {
     *     // ... data to create a Facility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility we want to update
     *   }
     * })
     */
    upsert<T extends facilityUpsertArgs>(args: SelectSubset<T, facilityUpsertArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilityCountArgs} args - Arguments to filter Facilities to count.
     * @example
     * // Count the number of Facilities
     * const count = await prisma.facility.count({
     *   where: {
     *     // ... the filter for the Facilities we want to count
     *   }
     * })
    **/
    count<T extends facilityCountArgs>(
      args?: Subset<T, facilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacilityAggregateArgs>(args: Subset<T, FacilityAggregateArgs>): Prisma.PrismaPromise<GetFacilityAggregateType<T>>

    /**
     * Group by Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends facilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: facilityGroupByArgs['orderBy'] }
        : { orderBy?: facilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, facilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the facility model
   */
  readonly fields: facilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for facility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__facilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facility_tourisms<T extends facility$facility_tourismsArgs<ExtArgs> = {}>(args?: Subset<T, facility$facility_tourismsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facility_tourismPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the facility model
   */
  interface facilityFieldRefs {
    readonly facility_id: FieldRef<"facility", 'String'>
    readonly facility_name: FieldRef<"facility", 'String'>
    readonly facility_icon: FieldRef<"facility", 'String'>
  }
    

  // Custom InputTypes
  /**
   * facility findUnique
   */
  export type facilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility
     */
    omit?: facilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * Filter, which facility to fetch.
     */
    where: facilityWhereUniqueInput
  }

  /**
   * facility findUniqueOrThrow
   */
  export type facilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility
     */
    omit?: facilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * Filter, which facility to fetch.
     */
    where: facilityWhereUniqueInput
  }

  /**
   * facility findFirst
   */
  export type facilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility
     */
    omit?: facilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * Filter, which facility to fetch.
     */
    where?: facilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facilities to fetch.
     */
    orderBy?: facilityOrderByWithRelationInput | facilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facilities.
     */
    cursor?: facilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * facility findFirstOrThrow
   */
  export type facilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility
     */
    omit?: facilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * Filter, which facility to fetch.
     */
    where?: facilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facilities to fetch.
     */
    orderBy?: facilityOrderByWithRelationInput | facilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facilities.
     */
    cursor?: facilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * facility findMany
   */
  export type facilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility
     */
    omit?: facilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * Filter, which facilities to fetch.
     */
    where?: facilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facilities to fetch.
     */
    orderBy?: facilityOrderByWithRelationInput | facilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing facilities.
     */
    cursor?: facilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facilities.
     */
    skip?: number
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * facility create
   */
  export type facilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility
     */
    omit?: facilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * The data needed to create a facility.
     */
    data: XOR<facilityCreateInput, facilityUncheckedCreateInput>
  }

  /**
   * facility createMany
   */
  export type facilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many facilities.
     */
    data: facilityCreateManyInput | facilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * facility update
   */
  export type facilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility
     */
    omit?: facilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * The data needed to update a facility.
     */
    data: XOR<facilityUpdateInput, facilityUncheckedUpdateInput>
    /**
     * Choose, which facility to update.
     */
    where: facilityWhereUniqueInput
  }

  /**
   * facility updateMany
   */
  export type facilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update facilities.
     */
    data: XOR<facilityUpdateManyMutationInput, facilityUncheckedUpdateManyInput>
    /**
     * Filter which facilities to update
     */
    where?: facilityWhereInput
    /**
     * Limit how many facilities to update.
     */
    limit?: number
  }

  /**
   * facility upsert
   */
  export type facilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility
     */
    omit?: facilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * The filter to search for the facility to update in case it exists.
     */
    where: facilityWhereUniqueInput
    /**
     * In case the facility found by the `where` argument doesn't exist, create a new facility with this data.
     */
    create: XOR<facilityCreateInput, facilityUncheckedCreateInput>
    /**
     * In case the facility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<facilityUpdateInput, facilityUncheckedUpdateInput>
  }

  /**
   * facility delete
   */
  export type facilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility
     */
    omit?: facilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    /**
     * Filter which facility to delete.
     */
    where: facilityWhereUniqueInput
  }

  /**
   * facility deleteMany
   */
  export type facilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facilities to delete
     */
    where?: facilityWhereInput
    /**
     * Limit how many facilities to delete.
     */
    limit?: number
  }

  /**
   * facility.facility_tourisms
   */
  export type facility$facility_tourismsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_tourism
     */
    select?: facility_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility_tourism
     */
    omit?: facility_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_tourismInclude<ExtArgs> | null
    where?: facility_tourismWhereInput
    orderBy?: facility_tourismOrderByWithRelationInput | facility_tourismOrderByWithRelationInput[]
    cursor?: facility_tourismWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Facility_tourismScalarFieldEnum | Facility_tourismScalarFieldEnum[]
  }

  /**
   * facility without action
   */
  export type facilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility
     */
    omit?: facilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
  }


  /**
   * Model facility_tourism
   */

  export type AggregateFacility_tourism = {
    _count: Facility_tourismCountAggregateOutputType | null
    _min: Facility_tourismMinAggregateOutputType | null
    _max: Facility_tourismMaxAggregateOutputType | null
  }

  export type Facility_tourismMinAggregateOutputType = {
    facility_tourism_id: string | null
    spot_id: string | null
    facility_id: string | null
  }

  export type Facility_tourismMaxAggregateOutputType = {
    facility_tourism_id: string | null
    spot_id: string | null
    facility_id: string | null
  }

  export type Facility_tourismCountAggregateOutputType = {
    facility_tourism_id: number
    spot_id: number
    facility_id: number
    _all: number
  }


  export type Facility_tourismMinAggregateInputType = {
    facility_tourism_id?: true
    spot_id?: true
    facility_id?: true
  }

  export type Facility_tourismMaxAggregateInputType = {
    facility_tourism_id?: true
    spot_id?: true
    facility_id?: true
  }

  export type Facility_tourismCountAggregateInputType = {
    facility_tourism_id?: true
    spot_id?: true
    facility_id?: true
    _all?: true
  }

  export type Facility_tourismAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facility_tourism to aggregate.
     */
    where?: facility_tourismWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_tourisms to fetch.
     */
    orderBy?: facility_tourismOrderByWithRelationInput | facility_tourismOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: facility_tourismWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_tourisms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_tourisms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned facility_tourisms
    **/
    _count?: true | Facility_tourismCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Facility_tourismMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Facility_tourismMaxAggregateInputType
  }

  export type GetFacility_tourismAggregateType<T extends Facility_tourismAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility_tourism]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility_tourism[P]>
      : GetScalarType<T[P], AggregateFacility_tourism[P]>
  }




  export type facility_tourismGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facility_tourismWhereInput
    orderBy?: facility_tourismOrderByWithAggregationInput | facility_tourismOrderByWithAggregationInput[]
    by: Facility_tourismScalarFieldEnum[] | Facility_tourismScalarFieldEnum
    having?: facility_tourismScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Facility_tourismCountAggregateInputType | true
    _min?: Facility_tourismMinAggregateInputType
    _max?: Facility_tourismMaxAggregateInputType
  }

  export type Facility_tourismGroupByOutputType = {
    facility_tourism_id: string
    spot_id: string | null
    facility_id: string | null
    _count: Facility_tourismCountAggregateOutputType | null
    _min: Facility_tourismMinAggregateOutputType | null
    _max: Facility_tourismMaxAggregateOutputType | null
  }

  type GetFacility_tourismGroupByPayload<T extends facility_tourismGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Facility_tourismGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Facility_tourismGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Facility_tourismGroupByOutputType[P]>
            : GetScalarType<T[P], Facility_tourismGroupByOutputType[P]>
        }
      >
    >


  export type facility_tourismSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facility_tourism_id?: boolean
    spot_id?: boolean
    facility_id?: boolean
    spot?: boolean | facility_tourism$spotArgs<ExtArgs>
    facility?: boolean | facility_tourism$facilityArgs<ExtArgs>
  }, ExtArgs["result"]["facility_tourism"]>



  export type facility_tourismSelectScalar = {
    facility_tourism_id?: boolean
    spot_id?: boolean
    facility_id?: boolean
  }

  export type facility_tourismOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"facility_tourism_id" | "spot_id" | "facility_id", ExtArgs["result"]["facility_tourism"]>
  export type facility_tourismInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spot?: boolean | facility_tourism$spotArgs<ExtArgs>
    facility?: boolean | facility_tourism$facilityArgs<ExtArgs>
  }

  export type $facility_tourismPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "facility_tourism"
    objects: {
      spot: Prisma.$spot_tourismPayload<ExtArgs> | null
      facility: Prisma.$facilityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      facility_tourism_id: string
      spot_id: string | null
      facility_id: string | null
    }, ExtArgs["result"]["facility_tourism"]>
    composites: {}
  }

  type facility_tourismGetPayload<S extends boolean | null | undefined | facility_tourismDefaultArgs> = $Result.GetResult<Prisma.$facility_tourismPayload, S>

  type facility_tourismCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<facility_tourismFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Facility_tourismCountAggregateInputType | true
    }

  export interface facility_tourismDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['facility_tourism'], meta: { name: 'facility_tourism' } }
    /**
     * Find zero or one Facility_tourism that matches the filter.
     * @param {facility_tourismFindUniqueArgs} args - Arguments to find a Facility_tourism
     * @example
     * // Get one Facility_tourism
     * const facility_tourism = await prisma.facility_tourism.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends facility_tourismFindUniqueArgs>(args: SelectSubset<T, facility_tourismFindUniqueArgs<ExtArgs>>): Prisma__facility_tourismClient<$Result.GetResult<Prisma.$facility_tourismPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Facility_tourism that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {facility_tourismFindUniqueOrThrowArgs} args - Arguments to find a Facility_tourism
     * @example
     * // Get one Facility_tourism
     * const facility_tourism = await prisma.facility_tourism.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends facility_tourismFindUniqueOrThrowArgs>(args: SelectSubset<T, facility_tourismFindUniqueOrThrowArgs<ExtArgs>>): Prisma__facility_tourismClient<$Result.GetResult<Prisma.$facility_tourismPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facility_tourism that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_tourismFindFirstArgs} args - Arguments to find a Facility_tourism
     * @example
     * // Get one Facility_tourism
     * const facility_tourism = await prisma.facility_tourism.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends facility_tourismFindFirstArgs>(args?: SelectSubset<T, facility_tourismFindFirstArgs<ExtArgs>>): Prisma__facility_tourismClient<$Result.GetResult<Prisma.$facility_tourismPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facility_tourism that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_tourismFindFirstOrThrowArgs} args - Arguments to find a Facility_tourism
     * @example
     * // Get one Facility_tourism
     * const facility_tourism = await prisma.facility_tourism.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends facility_tourismFindFirstOrThrowArgs>(args?: SelectSubset<T, facility_tourismFindFirstOrThrowArgs<ExtArgs>>): Prisma__facility_tourismClient<$Result.GetResult<Prisma.$facility_tourismPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facility_tourisms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_tourismFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facility_tourisms
     * const facility_tourisms = await prisma.facility_tourism.findMany()
     * 
     * // Get first 10 Facility_tourisms
     * const facility_tourisms = await prisma.facility_tourism.findMany({ take: 10 })
     * 
     * // Only select the `facility_tourism_id`
     * const facility_tourismWithFacility_tourism_idOnly = await prisma.facility_tourism.findMany({ select: { facility_tourism_id: true } })
     * 
     */
    findMany<T extends facility_tourismFindManyArgs>(args?: SelectSubset<T, facility_tourismFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facility_tourismPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Facility_tourism.
     * @param {facility_tourismCreateArgs} args - Arguments to create a Facility_tourism.
     * @example
     * // Create one Facility_tourism
     * const Facility_tourism = await prisma.facility_tourism.create({
     *   data: {
     *     // ... data to create a Facility_tourism
     *   }
     * })
     * 
     */
    create<T extends facility_tourismCreateArgs>(args: SelectSubset<T, facility_tourismCreateArgs<ExtArgs>>): Prisma__facility_tourismClient<$Result.GetResult<Prisma.$facility_tourismPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facility_tourisms.
     * @param {facility_tourismCreateManyArgs} args - Arguments to create many Facility_tourisms.
     * @example
     * // Create many Facility_tourisms
     * const facility_tourism = await prisma.facility_tourism.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends facility_tourismCreateManyArgs>(args?: SelectSubset<T, facility_tourismCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Facility_tourism.
     * @param {facility_tourismDeleteArgs} args - Arguments to delete one Facility_tourism.
     * @example
     * // Delete one Facility_tourism
     * const Facility_tourism = await prisma.facility_tourism.delete({
     *   where: {
     *     // ... filter to delete one Facility_tourism
     *   }
     * })
     * 
     */
    delete<T extends facility_tourismDeleteArgs>(args: SelectSubset<T, facility_tourismDeleteArgs<ExtArgs>>): Prisma__facility_tourismClient<$Result.GetResult<Prisma.$facility_tourismPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Facility_tourism.
     * @param {facility_tourismUpdateArgs} args - Arguments to update one Facility_tourism.
     * @example
     * // Update one Facility_tourism
     * const facility_tourism = await prisma.facility_tourism.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends facility_tourismUpdateArgs>(args: SelectSubset<T, facility_tourismUpdateArgs<ExtArgs>>): Prisma__facility_tourismClient<$Result.GetResult<Prisma.$facility_tourismPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facility_tourisms.
     * @param {facility_tourismDeleteManyArgs} args - Arguments to filter Facility_tourisms to delete.
     * @example
     * // Delete a few Facility_tourisms
     * const { count } = await prisma.facility_tourism.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends facility_tourismDeleteManyArgs>(args?: SelectSubset<T, facility_tourismDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facility_tourisms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_tourismUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facility_tourisms
     * const facility_tourism = await prisma.facility_tourism.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends facility_tourismUpdateManyArgs>(args: SelectSubset<T, facility_tourismUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Facility_tourism.
     * @param {facility_tourismUpsertArgs} args - Arguments to update or create a Facility_tourism.
     * @example
     * // Update or create a Facility_tourism
     * const facility_tourism = await prisma.facility_tourism.upsert({
     *   create: {
     *     // ... data to create a Facility_tourism
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility_tourism we want to update
     *   }
     * })
     */
    upsert<T extends facility_tourismUpsertArgs>(args: SelectSubset<T, facility_tourismUpsertArgs<ExtArgs>>): Prisma__facility_tourismClient<$Result.GetResult<Prisma.$facility_tourismPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facility_tourisms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_tourismCountArgs} args - Arguments to filter Facility_tourisms to count.
     * @example
     * // Count the number of Facility_tourisms
     * const count = await prisma.facility_tourism.count({
     *   where: {
     *     // ... the filter for the Facility_tourisms we want to count
     *   }
     * })
    **/
    count<T extends facility_tourismCountArgs>(
      args?: Subset<T, facility_tourismCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Facility_tourismCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility_tourism.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Facility_tourismAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Facility_tourismAggregateArgs>(args: Subset<T, Facility_tourismAggregateArgs>): Prisma.PrismaPromise<GetFacility_tourismAggregateType<T>>

    /**
     * Group by Facility_tourism.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facility_tourismGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends facility_tourismGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: facility_tourismGroupByArgs['orderBy'] }
        : { orderBy?: facility_tourismGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, facility_tourismGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacility_tourismGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the facility_tourism model
   */
  readonly fields: facility_tourismFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for facility_tourism.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__facility_tourismClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spot<T extends facility_tourism$spotArgs<ExtArgs> = {}>(args?: Subset<T, facility_tourism$spotArgs<ExtArgs>>): Prisma__spot_tourismClient<$Result.GetResult<Prisma.$spot_tourismPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    facility<T extends facility_tourism$facilityArgs<ExtArgs> = {}>(args?: Subset<T, facility_tourism$facilityArgs<ExtArgs>>): Prisma__facilityClient<$Result.GetResult<Prisma.$facilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the facility_tourism model
   */
  interface facility_tourismFieldRefs {
    readonly facility_tourism_id: FieldRef<"facility_tourism", 'String'>
    readonly spot_id: FieldRef<"facility_tourism", 'String'>
    readonly facility_id: FieldRef<"facility_tourism", 'String'>
  }
    

  // Custom InputTypes
  /**
   * facility_tourism findUnique
   */
  export type facility_tourismFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_tourism
     */
    select?: facility_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility_tourism
     */
    omit?: facility_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_tourismInclude<ExtArgs> | null
    /**
     * Filter, which facility_tourism to fetch.
     */
    where: facility_tourismWhereUniqueInput
  }

  /**
   * facility_tourism findUniqueOrThrow
   */
  export type facility_tourismFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_tourism
     */
    select?: facility_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility_tourism
     */
    omit?: facility_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_tourismInclude<ExtArgs> | null
    /**
     * Filter, which facility_tourism to fetch.
     */
    where: facility_tourismWhereUniqueInput
  }

  /**
   * facility_tourism findFirst
   */
  export type facility_tourismFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_tourism
     */
    select?: facility_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility_tourism
     */
    omit?: facility_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_tourismInclude<ExtArgs> | null
    /**
     * Filter, which facility_tourism to fetch.
     */
    where?: facility_tourismWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_tourisms to fetch.
     */
    orderBy?: facility_tourismOrderByWithRelationInput | facility_tourismOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facility_tourisms.
     */
    cursor?: facility_tourismWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_tourisms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_tourisms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facility_tourisms.
     */
    distinct?: Facility_tourismScalarFieldEnum | Facility_tourismScalarFieldEnum[]
  }

  /**
   * facility_tourism findFirstOrThrow
   */
  export type facility_tourismFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_tourism
     */
    select?: facility_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility_tourism
     */
    omit?: facility_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_tourismInclude<ExtArgs> | null
    /**
     * Filter, which facility_tourism to fetch.
     */
    where?: facility_tourismWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_tourisms to fetch.
     */
    orderBy?: facility_tourismOrderByWithRelationInput | facility_tourismOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facility_tourisms.
     */
    cursor?: facility_tourismWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_tourisms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_tourisms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facility_tourisms.
     */
    distinct?: Facility_tourismScalarFieldEnum | Facility_tourismScalarFieldEnum[]
  }

  /**
   * facility_tourism findMany
   */
  export type facility_tourismFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_tourism
     */
    select?: facility_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility_tourism
     */
    omit?: facility_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_tourismInclude<ExtArgs> | null
    /**
     * Filter, which facility_tourisms to fetch.
     */
    where?: facility_tourismWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facility_tourisms to fetch.
     */
    orderBy?: facility_tourismOrderByWithRelationInput | facility_tourismOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing facility_tourisms.
     */
    cursor?: facility_tourismWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facility_tourisms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facility_tourisms.
     */
    skip?: number
    distinct?: Facility_tourismScalarFieldEnum | Facility_tourismScalarFieldEnum[]
  }

  /**
   * facility_tourism create
   */
  export type facility_tourismCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_tourism
     */
    select?: facility_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility_tourism
     */
    omit?: facility_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_tourismInclude<ExtArgs> | null
    /**
     * The data needed to create a facility_tourism.
     */
    data: XOR<facility_tourismCreateInput, facility_tourismUncheckedCreateInput>
  }

  /**
   * facility_tourism createMany
   */
  export type facility_tourismCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many facility_tourisms.
     */
    data: facility_tourismCreateManyInput | facility_tourismCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * facility_tourism update
   */
  export type facility_tourismUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_tourism
     */
    select?: facility_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility_tourism
     */
    omit?: facility_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_tourismInclude<ExtArgs> | null
    /**
     * The data needed to update a facility_tourism.
     */
    data: XOR<facility_tourismUpdateInput, facility_tourismUncheckedUpdateInput>
    /**
     * Choose, which facility_tourism to update.
     */
    where: facility_tourismWhereUniqueInput
  }

  /**
   * facility_tourism updateMany
   */
  export type facility_tourismUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update facility_tourisms.
     */
    data: XOR<facility_tourismUpdateManyMutationInput, facility_tourismUncheckedUpdateManyInput>
    /**
     * Filter which facility_tourisms to update
     */
    where?: facility_tourismWhereInput
    /**
     * Limit how many facility_tourisms to update.
     */
    limit?: number
  }

  /**
   * facility_tourism upsert
   */
  export type facility_tourismUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_tourism
     */
    select?: facility_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility_tourism
     */
    omit?: facility_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_tourismInclude<ExtArgs> | null
    /**
     * The filter to search for the facility_tourism to update in case it exists.
     */
    where: facility_tourismWhereUniqueInput
    /**
     * In case the facility_tourism found by the `where` argument doesn't exist, create a new facility_tourism with this data.
     */
    create: XOR<facility_tourismCreateInput, facility_tourismUncheckedCreateInput>
    /**
     * In case the facility_tourism was found with the provided `where` argument, update it with this data.
     */
    update: XOR<facility_tourismUpdateInput, facility_tourismUncheckedUpdateInput>
  }

  /**
   * facility_tourism delete
   */
  export type facility_tourismDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_tourism
     */
    select?: facility_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility_tourism
     */
    omit?: facility_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_tourismInclude<ExtArgs> | null
    /**
     * Filter which facility_tourism to delete.
     */
    where: facility_tourismWhereUniqueInput
  }

  /**
   * facility_tourism deleteMany
   */
  export type facility_tourismDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facility_tourisms to delete
     */
    where?: facility_tourismWhereInput
    /**
     * Limit how many facility_tourisms to delete.
     */
    limit?: number
  }

  /**
   * facility_tourism.spot
   */
  export type facility_tourism$spotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spot_tourism
     */
    select?: spot_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spot_tourism
     */
    omit?: spot_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spot_tourismInclude<ExtArgs> | null
    where?: spot_tourismWhereInput
  }

  /**
   * facility_tourism.facility
   */
  export type facility_tourism$facilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility
     */
    select?: facilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility
     */
    omit?: facilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facilityInclude<ExtArgs> | null
    where?: facilityWhereInput
  }

  /**
   * facility_tourism without action
   */
  export type facility_tourismDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_tourism
     */
    select?: facility_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility_tourism
     */
    omit?: facility_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_tourismInclude<ExtArgs> | null
  }


  /**
   * Model gallery
   */

  export type AggregateGallery = {
    _count: GalleryCountAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  export type GalleryMinAggregateOutputType = {
    gallery_id: string | null
    spot_id: string | null
    gallery_img: string | null
    gallery_caption: string | null
  }

  export type GalleryMaxAggregateOutputType = {
    gallery_id: string | null
    spot_id: string | null
    gallery_img: string | null
    gallery_caption: string | null
  }

  export type GalleryCountAggregateOutputType = {
    gallery_id: number
    spot_id: number
    gallery_img: number
    gallery_caption: number
    _all: number
  }


  export type GalleryMinAggregateInputType = {
    gallery_id?: true
    spot_id?: true
    gallery_img?: true
    gallery_caption?: true
  }

  export type GalleryMaxAggregateInputType = {
    gallery_id?: true
    spot_id?: true
    gallery_img?: true
    gallery_caption?: true
  }

  export type GalleryCountAggregateInputType = {
    gallery_id?: true
    spot_id?: true
    gallery_img?: true
    gallery_caption?: true
    _all?: true
  }

  export type GalleryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gallery to aggregate.
     */
    where?: galleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of galleries to fetch.
     */
    orderBy?: galleryOrderByWithRelationInput | galleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: galleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned galleries
    **/
    _count?: true | GalleryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryMaxAggregateInputType
  }

  export type GetGalleryAggregateType<T extends GalleryAggregateArgs> = {
        [P in keyof T & keyof AggregateGallery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGallery[P]>
      : GetScalarType<T[P], AggregateGallery[P]>
  }




  export type galleryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: galleryWhereInput
    orderBy?: galleryOrderByWithAggregationInput | galleryOrderByWithAggregationInput[]
    by: GalleryScalarFieldEnum[] | GalleryScalarFieldEnum
    having?: galleryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryCountAggregateInputType | true
    _min?: GalleryMinAggregateInputType
    _max?: GalleryMaxAggregateInputType
  }

  export type GalleryGroupByOutputType = {
    gallery_id: string
    spot_id: string | null
    gallery_img: string | null
    gallery_caption: string | null
    _count: GalleryCountAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  type GetGalleryGroupByPayload<T extends galleryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryGroupByOutputType[P]>
        }
      >
    >


  export type gallerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gallery_id?: boolean
    spot_id?: boolean
    gallery_img?: boolean
    gallery_caption?: boolean
    spot?: boolean | gallery$spotArgs<ExtArgs>
  }, ExtArgs["result"]["gallery"]>



  export type gallerySelectScalar = {
    gallery_id?: boolean
    spot_id?: boolean
    gallery_img?: boolean
    gallery_caption?: boolean
  }

  export type galleryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"gallery_id" | "spot_id" | "gallery_img" | "gallery_caption", ExtArgs["result"]["gallery"]>
  export type galleryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spot?: boolean | gallery$spotArgs<ExtArgs>
  }

  export type $galleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gallery"
    objects: {
      spot: Prisma.$spot_tourismPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      gallery_id: string
      spot_id: string | null
      gallery_img: string | null
      gallery_caption: string | null
    }, ExtArgs["result"]["gallery"]>
    composites: {}
  }

  type galleryGetPayload<S extends boolean | null | undefined | galleryDefaultArgs> = $Result.GetResult<Prisma.$galleryPayload, S>

  type galleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<galleryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryCountAggregateInputType | true
    }

  export interface galleryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gallery'], meta: { name: 'gallery' } }
    /**
     * Find zero or one Gallery that matches the filter.
     * @param {galleryFindUniqueArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends galleryFindUniqueArgs>(args: SelectSubset<T, galleryFindUniqueArgs<ExtArgs>>): Prisma__galleryClient<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gallery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {galleryFindUniqueOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends galleryFindUniqueOrThrowArgs>(args: SelectSubset<T, galleryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__galleryClient<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gallery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {galleryFindFirstArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends galleryFindFirstArgs>(args?: SelectSubset<T, galleryFindFirstArgs<ExtArgs>>): Prisma__galleryClient<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gallery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {galleryFindFirstOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends galleryFindFirstOrThrowArgs>(args?: SelectSubset<T, galleryFindFirstOrThrowArgs<ExtArgs>>): Prisma__galleryClient<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Galleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {galleryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galleries
     * const galleries = await prisma.gallery.findMany()
     * 
     * // Get first 10 Galleries
     * const galleries = await prisma.gallery.findMany({ take: 10 })
     * 
     * // Only select the `gallery_id`
     * const galleryWithGallery_idOnly = await prisma.gallery.findMany({ select: { gallery_id: true } })
     * 
     */
    findMany<T extends galleryFindManyArgs>(args?: SelectSubset<T, galleryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gallery.
     * @param {galleryCreateArgs} args - Arguments to create a Gallery.
     * @example
     * // Create one Gallery
     * const Gallery = await prisma.gallery.create({
     *   data: {
     *     // ... data to create a Gallery
     *   }
     * })
     * 
     */
    create<T extends galleryCreateArgs>(args: SelectSubset<T, galleryCreateArgs<ExtArgs>>): Prisma__galleryClient<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Galleries.
     * @param {galleryCreateManyArgs} args - Arguments to create many Galleries.
     * @example
     * // Create many Galleries
     * const gallery = await prisma.gallery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends galleryCreateManyArgs>(args?: SelectSubset<T, galleryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gallery.
     * @param {galleryDeleteArgs} args - Arguments to delete one Gallery.
     * @example
     * // Delete one Gallery
     * const Gallery = await prisma.gallery.delete({
     *   where: {
     *     // ... filter to delete one Gallery
     *   }
     * })
     * 
     */
    delete<T extends galleryDeleteArgs>(args: SelectSubset<T, galleryDeleteArgs<ExtArgs>>): Prisma__galleryClient<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gallery.
     * @param {galleryUpdateArgs} args - Arguments to update one Gallery.
     * @example
     * // Update one Gallery
     * const gallery = await prisma.gallery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends galleryUpdateArgs>(args: SelectSubset<T, galleryUpdateArgs<ExtArgs>>): Prisma__galleryClient<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Galleries.
     * @param {galleryDeleteManyArgs} args - Arguments to filter Galleries to delete.
     * @example
     * // Delete a few Galleries
     * const { count } = await prisma.gallery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends galleryDeleteManyArgs>(args?: SelectSubset<T, galleryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {galleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galleries
     * const gallery = await prisma.gallery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends galleryUpdateManyArgs>(args: SelectSubset<T, galleryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gallery.
     * @param {galleryUpsertArgs} args - Arguments to update or create a Gallery.
     * @example
     * // Update or create a Gallery
     * const gallery = await prisma.gallery.upsert({
     *   create: {
     *     // ... data to create a Gallery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gallery we want to update
     *   }
     * })
     */
    upsert<T extends galleryUpsertArgs>(args: SelectSubset<T, galleryUpsertArgs<ExtArgs>>): Prisma__galleryClient<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {galleryCountArgs} args - Arguments to filter Galleries to count.
     * @example
     * // Count the number of Galleries
     * const count = await prisma.gallery.count({
     *   where: {
     *     // ... the filter for the Galleries we want to count
     *   }
     * })
    **/
    count<T extends galleryCountArgs>(
      args?: Subset<T, galleryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GalleryAggregateArgs>(args: Subset<T, GalleryAggregateArgs>): Prisma.PrismaPromise<GetGalleryAggregateType<T>>

    /**
     * Group by Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {galleryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends galleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: galleryGroupByArgs['orderBy'] }
        : { orderBy?: galleryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, galleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gallery model
   */
  readonly fields: galleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gallery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__galleryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spot<T extends gallery$spotArgs<ExtArgs> = {}>(args?: Subset<T, gallery$spotArgs<ExtArgs>>): Prisma__spot_tourismClient<$Result.GetResult<Prisma.$spot_tourismPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the gallery model
   */
  interface galleryFieldRefs {
    readonly gallery_id: FieldRef<"gallery", 'String'>
    readonly spot_id: FieldRef<"gallery", 'String'>
    readonly gallery_img: FieldRef<"gallery", 'String'>
    readonly gallery_caption: FieldRef<"gallery", 'String'>
  }
    

  // Custom InputTypes
  /**
   * gallery findUnique
   */
  export type galleryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery
     */
    omit?: galleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: galleryInclude<ExtArgs> | null
    /**
     * Filter, which gallery to fetch.
     */
    where: galleryWhereUniqueInput
  }

  /**
   * gallery findUniqueOrThrow
   */
  export type galleryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery
     */
    omit?: galleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: galleryInclude<ExtArgs> | null
    /**
     * Filter, which gallery to fetch.
     */
    where: galleryWhereUniqueInput
  }

  /**
   * gallery findFirst
   */
  export type galleryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery
     */
    omit?: galleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: galleryInclude<ExtArgs> | null
    /**
     * Filter, which gallery to fetch.
     */
    where?: galleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of galleries to fetch.
     */
    orderBy?: galleryOrderByWithRelationInput | galleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for galleries.
     */
    cursor?: galleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * gallery findFirstOrThrow
   */
  export type galleryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery
     */
    omit?: galleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: galleryInclude<ExtArgs> | null
    /**
     * Filter, which gallery to fetch.
     */
    where?: galleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of galleries to fetch.
     */
    orderBy?: galleryOrderByWithRelationInput | galleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for galleries.
     */
    cursor?: galleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * gallery findMany
   */
  export type galleryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery
     */
    omit?: galleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: galleryInclude<ExtArgs> | null
    /**
     * Filter, which galleries to fetch.
     */
    where?: galleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of galleries to fetch.
     */
    orderBy?: galleryOrderByWithRelationInput | galleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing galleries.
     */
    cursor?: galleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` galleries.
     */
    skip?: number
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * gallery create
   */
  export type galleryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery
     */
    omit?: galleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: galleryInclude<ExtArgs> | null
    /**
     * The data needed to create a gallery.
     */
    data: XOR<galleryCreateInput, galleryUncheckedCreateInput>
  }

  /**
   * gallery createMany
   */
  export type galleryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many galleries.
     */
    data: galleryCreateManyInput | galleryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gallery update
   */
  export type galleryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery
     */
    omit?: galleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: galleryInclude<ExtArgs> | null
    /**
     * The data needed to update a gallery.
     */
    data: XOR<galleryUpdateInput, galleryUncheckedUpdateInput>
    /**
     * Choose, which gallery to update.
     */
    where: galleryWhereUniqueInput
  }

  /**
   * gallery updateMany
   */
  export type galleryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update galleries.
     */
    data: XOR<galleryUpdateManyMutationInput, galleryUncheckedUpdateManyInput>
    /**
     * Filter which galleries to update
     */
    where?: galleryWhereInput
    /**
     * Limit how many galleries to update.
     */
    limit?: number
  }

  /**
   * gallery upsert
   */
  export type galleryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery
     */
    omit?: galleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: galleryInclude<ExtArgs> | null
    /**
     * The filter to search for the gallery to update in case it exists.
     */
    where: galleryWhereUniqueInput
    /**
     * In case the gallery found by the `where` argument doesn't exist, create a new gallery with this data.
     */
    create: XOR<galleryCreateInput, galleryUncheckedCreateInput>
    /**
     * In case the gallery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<galleryUpdateInput, galleryUncheckedUpdateInput>
  }

  /**
   * gallery delete
   */
  export type galleryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery
     */
    omit?: galleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: galleryInclude<ExtArgs> | null
    /**
     * Filter which gallery to delete.
     */
    where: galleryWhereUniqueInput
  }

  /**
   * gallery deleteMany
   */
  export type galleryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which galleries to delete
     */
    where?: galleryWhereInput
    /**
     * Limit how many galleries to delete.
     */
    limit?: number
  }

  /**
   * gallery.spot
   */
  export type gallery$spotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spot_tourism
     */
    select?: spot_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spot_tourism
     */
    omit?: spot_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spot_tourismInclude<ExtArgs> | null
    where?: spot_tourismWhereInput
  }

  /**
   * gallery without action
   */
  export type galleryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery
     */
    omit?: galleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: galleryInclude<ExtArgs> | null
  }


  /**
   * Model operating_hours
   */

  export type AggregateOperating_hours = {
    _count: Operating_hoursCountAggregateOutputType | null
    _min: Operating_hoursMinAggregateOutputType | null
    _max: Operating_hoursMaxAggregateOutputType | null
  }

  export type Operating_hoursMinAggregateOutputType = {
    operating_id: string | null
    spot_id: string | null
    operating_day: $Enums.OperatingDay | null
    hours_open: Date | null
    hours_closed: Date | null
  }

  export type Operating_hoursMaxAggregateOutputType = {
    operating_id: string | null
    spot_id: string | null
    operating_day: $Enums.OperatingDay | null
    hours_open: Date | null
    hours_closed: Date | null
  }

  export type Operating_hoursCountAggregateOutputType = {
    operating_id: number
    spot_id: number
    operating_day: number
    hours_open: number
    hours_closed: number
    _all: number
  }


  export type Operating_hoursMinAggregateInputType = {
    operating_id?: true
    spot_id?: true
    operating_day?: true
    hours_open?: true
    hours_closed?: true
  }

  export type Operating_hoursMaxAggregateInputType = {
    operating_id?: true
    spot_id?: true
    operating_day?: true
    hours_open?: true
    hours_closed?: true
  }

  export type Operating_hoursCountAggregateInputType = {
    operating_id?: true
    spot_id?: true
    operating_day?: true
    hours_open?: true
    hours_closed?: true
    _all?: true
  }

  export type Operating_hoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operating_hours to aggregate.
     */
    where?: operating_hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operating_hours to fetch.
     */
    orderBy?: operating_hoursOrderByWithRelationInput | operating_hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: operating_hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operating_hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operating_hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned operating_hours
    **/
    _count?: true | Operating_hoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Operating_hoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Operating_hoursMaxAggregateInputType
  }

  export type GetOperating_hoursAggregateType<T extends Operating_hoursAggregateArgs> = {
        [P in keyof T & keyof AggregateOperating_hours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperating_hours[P]>
      : GetScalarType<T[P], AggregateOperating_hours[P]>
  }




  export type operating_hoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operating_hoursWhereInput
    orderBy?: operating_hoursOrderByWithAggregationInput | operating_hoursOrderByWithAggregationInput[]
    by: Operating_hoursScalarFieldEnum[] | Operating_hoursScalarFieldEnum
    having?: operating_hoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Operating_hoursCountAggregateInputType | true
    _min?: Operating_hoursMinAggregateInputType
    _max?: Operating_hoursMaxAggregateInputType
  }

  export type Operating_hoursGroupByOutputType = {
    operating_id: string
    spot_id: string | null
    operating_day: $Enums.OperatingDay
    hours_open: Date
    hours_closed: Date
    _count: Operating_hoursCountAggregateOutputType | null
    _min: Operating_hoursMinAggregateOutputType | null
    _max: Operating_hoursMaxAggregateOutputType | null
  }

  type GetOperating_hoursGroupByPayload<T extends operating_hoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Operating_hoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Operating_hoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Operating_hoursGroupByOutputType[P]>
            : GetScalarType<T[P], Operating_hoursGroupByOutputType[P]>
        }
      >
    >


  export type operating_hoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    operating_id?: boolean
    spot_id?: boolean
    operating_day?: boolean
    hours_open?: boolean
    hours_closed?: boolean
    spot?: boolean | operating_hours$spotArgs<ExtArgs>
  }, ExtArgs["result"]["operating_hours"]>



  export type operating_hoursSelectScalar = {
    operating_id?: boolean
    spot_id?: boolean
    operating_day?: boolean
    hours_open?: boolean
    hours_closed?: boolean
  }

  export type operating_hoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"operating_id" | "spot_id" | "operating_day" | "hours_open" | "hours_closed", ExtArgs["result"]["operating_hours"]>
  export type operating_hoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spot?: boolean | operating_hours$spotArgs<ExtArgs>
  }

  export type $operating_hoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "operating_hours"
    objects: {
      spot: Prisma.$spot_tourismPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      operating_id: string
      spot_id: string | null
      operating_day: $Enums.OperatingDay
      hours_open: Date
      hours_closed: Date
    }, ExtArgs["result"]["operating_hours"]>
    composites: {}
  }

  type operating_hoursGetPayload<S extends boolean | null | undefined | operating_hoursDefaultArgs> = $Result.GetResult<Prisma.$operating_hoursPayload, S>

  type operating_hoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<operating_hoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Operating_hoursCountAggregateInputType | true
    }

  export interface operating_hoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['operating_hours'], meta: { name: 'operating_hours' } }
    /**
     * Find zero or one Operating_hours that matches the filter.
     * @param {operating_hoursFindUniqueArgs} args - Arguments to find a Operating_hours
     * @example
     * // Get one Operating_hours
     * const operating_hours = await prisma.operating_hours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends operating_hoursFindUniqueArgs>(args: SelectSubset<T, operating_hoursFindUniqueArgs<ExtArgs>>): Prisma__operating_hoursClient<$Result.GetResult<Prisma.$operating_hoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operating_hours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {operating_hoursFindUniqueOrThrowArgs} args - Arguments to find a Operating_hours
     * @example
     * // Get one Operating_hours
     * const operating_hours = await prisma.operating_hours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends operating_hoursFindUniqueOrThrowArgs>(args: SelectSubset<T, operating_hoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__operating_hoursClient<$Result.GetResult<Prisma.$operating_hoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operating_hours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operating_hoursFindFirstArgs} args - Arguments to find a Operating_hours
     * @example
     * // Get one Operating_hours
     * const operating_hours = await prisma.operating_hours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends operating_hoursFindFirstArgs>(args?: SelectSubset<T, operating_hoursFindFirstArgs<ExtArgs>>): Prisma__operating_hoursClient<$Result.GetResult<Prisma.$operating_hoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operating_hours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operating_hoursFindFirstOrThrowArgs} args - Arguments to find a Operating_hours
     * @example
     * // Get one Operating_hours
     * const operating_hours = await prisma.operating_hours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends operating_hoursFindFirstOrThrowArgs>(args?: SelectSubset<T, operating_hoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__operating_hoursClient<$Result.GetResult<Prisma.$operating_hoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operating_hours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operating_hoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operating_hours
     * const operating_hours = await prisma.operating_hours.findMany()
     * 
     * // Get first 10 Operating_hours
     * const operating_hours = await prisma.operating_hours.findMany({ take: 10 })
     * 
     * // Only select the `operating_id`
     * const operating_hoursWithOperating_idOnly = await prisma.operating_hours.findMany({ select: { operating_id: true } })
     * 
     */
    findMany<T extends operating_hoursFindManyArgs>(args?: SelectSubset<T, operating_hoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operating_hoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operating_hours.
     * @param {operating_hoursCreateArgs} args - Arguments to create a Operating_hours.
     * @example
     * // Create one Operating_hours
     * const Operating_hours = await prisma.operating_hours.create({
     *   data: {
     *     // ... data to create a Operating_hours
     *   }
     * })
     * 
     */
    create<T extends operating_hoursCreateArgs>(args: SelectSubset<T, operating_hoursCreateArgs<ExtArgs>>): Prisma__operating_hoursClient<$Result.GetResult<Prisma.$operating_hoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operating_hours.
     * @param {operating_hoursCreateManyArgs} args - Arguments to create many Operating_hours.
     * @example
     * // Create many Operating_hours
     * const operating_hours = await prisma.operating_hours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends operating_hoursCreateManyArgs>(args?: SelectSubset<T, operating_hoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Operating_hours.
     * @param {operating_hoursDeleteArgs} args - Arguments to delete one Operating_hours.
     * @example
     * // Delete one Operating_hours
     * const Operating_hours = await prisma.operating_hours.delete({
     *   where: {
     *     // ... filter to delete one Operating_hours
     *   }
     * })
     * 
     */
    delete<T extends operating_hoursDeleteArgs>(args: SelectSubset<T, operating_hoursDeleteArgs<ExtArgs>>): Prisma__operating_hoursClient<$Result.GetResult<Prisma.$operating_hoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operating_hours.
     * @param {operating_hoursUpdateArgs} args - Arguments to update one Operating_hours.
     * @example
     * // Update one Operating_hours
     * const operating_hours = await prisma.operating_hours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends operating_hoursUpdateArgs>(args: SelectSubset<T, operating_hoursUpdateArgs<ExtArgs>>): Prisma__operating_hoursClient<$Result.GetResult<Prisma.$operating_hoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operating_hours.
     * @param {operating_hoursDeleteManyArgs} args - Arguments to filter Operating_hours to delete.
     * @example
     * // Delete a few Operating_hours
     * const { count } = await prisma.operating_hours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends operating_hoursDeleteManyArgs>(args?: SelectSubset<T, operating_hoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operating_hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operating_hoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operating_hours
     * const operating_hours = await prisma.operating_hours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends operating_hoursUpdateManyArgs>(args: SelectSubset<T, operating_hoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Operating_hours.
     * @param {operating_hoursUpsertArgs} args - Arguments to update or create a Operating_hours.
     * @example
     * // Update or create a Operating_hours
     * const operating_hours = await prisma.operating_hours.upsert({
     *   create: {
     *     // ... data to create a Operating_hours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operating_hours we want to update
     *   }
     * })
     */
    upsert<T extends operating_hoursUpsertArgs>(args: SelectSubset<T, operating_hoursUpsertArgs<ExtArgs>>): Prisma__operating_hoursClient<$Result.GetResult<Prisma.$operating_hoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operating_hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operating_hoursCountArgs} args - Arguments to filter Operating_hours to count.
     * @example
     * // Count the number of Operating_hours
     * const count = await prisma.operating_hours.count({
     *   where: {
     *     // ... the filter for the Operating_hours we want to count
     *   }
     * })
    **/
    count<T extends operating_hoursCountArgs>(
      args?: Subset<T, operating_hoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Operating_hoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operating_hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operating_hoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Operating_hoursAggregateArgs>(args: Subset<T, Operating_hoursAggregateArgs>): Prisma.PrismaPromise<GetOperating_hoursAggregateType<T>>

    /**
     * Group by Operating_hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operating_hoursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends operating_hoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: operating_hoursGroupByArgs['orderBy'] }
        : { orderBy?: operating_hoursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, operating_hoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperating_hoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the operating_hours model
   */
  readonly fields: operating_hoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for operating_hours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__operating_hoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spot<T extends operating_hours$spotArgs<ExtArgs> = {}>(args?: Subset<T, operating_hours$spotArgs<ExtArgs>>): Prisma__spot_tourismClient<$Result.GetResult<Prisma.$spot_tourismPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the operating_hours model
   */
  interface operating_hoursFieldRefs {
    readonly operating_id: FieldRef<"operating_hours", 'String'>
    readonly spot_id: FieldRef<"operating_hours", 'String'>
    readonly operating_day: FieldRef<"operating_hours", 'OperatingDay'>
    readonly hours_open: FieldRef<"operating_hours", 'DateTime'>
    readonly hours_closed: FieldRef<"operating_hours", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * operating_hours findUnique
   */
  export type operating_hoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operating_hours
     */
    select?: operating_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operating_hours
     */
    omit?: operating_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operating_hoursInclude<ExtArgs> | null
    /**
     * Filter, which operating_hours to fetch.
     */
    where: operating_hoursWhereUniqueInput
  }

  /**
   * operating_hours findUniqueOrThrow
   */
  export type operating_hoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operating_hours
     */
    select?: operating_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operating_hours
     */
    omit?: operating_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operating_hoursInclude<ExtArgs> | null
    /**
     * Filter, which operating_hours to fetch.
     */
    where: operating_hoursWhereUniqueInput
  }

  /**
   * operating_hours findFirst
   */
  export type operating_hoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operating_hours
     */
    select?: operating_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operating_hours
     */
    omit?: operating_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operating_hoursInclude<ExtArgs> | null
    /**
     * Filter, which operating_hours to fetch.
     */
    where?: operating_hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operating_hours to fetch.
     */
    orderBy?: operating_hoursOrderByWithRelationInput | operating_hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operating_hours.
     */
    cursor?: operating_hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operating_hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operating_hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operating_hours.
     */
    distinct?: Operating_hoursScalarFieldEnum | Operating_hoursScalarFieldEnum[]
  }

  /**
   * operating_hours findFirstOrThrow
   */
  export type operating_hoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operating_hours
     */
    select?: operating_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operating_hours
     */
    omit?: operating_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operating_hoursInclude<ExtArgs> | null
    /**
     * Filter, which operating_hours to fetch.
     */
    where?: operating_hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operating_hours to fetch.
     */
    orderBy?: operating_hoursOrderByWithRelationInput | operating_hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operating_hours.
     */
    cursor?: operating_hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operating_hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operating_hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operating_hours.
     */
    distinct?: Operating_hoursScalarFieldEnum | Operating_hoursScalarFieldEnum[]
  }

  /**
   * operating_hours findMany
   */
  export type operating_hoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operating_hours
     */
    select?: operating_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operating_hours
     */
    omit?: operating_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operating_hoursInclude<ExtArgs> | null
    /**
     * Filter, which operating_hours to fetch.
     */
    where?: operating_hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operating_hours to fetch.
     */
    orderBy?: operating_hoursOrderByWithRelationInput | operating_hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing operating_hours.
     */
    cursor?: operating_hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operating_hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operating_hours.
     */
    skip?: number
    distinct?: Operating_hoursScalarFieldEnum | Operating_hoursScalarFieldEnum[]
  }

  /**
   * operating_hours create
   */
  export type operating_hoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operating_hours
     */
    select?: operating_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operating_hours
     */
    omit?: operating_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operating_hoursInclude<ExtArgs> | null
    /**
     * The data needed to create a operating_hours.
     */
    data: XOR<operating_hoursCreateInput, operating_hoursUncheckedCreateInput>
  }

  /**
   * operating_hours createMany
   */
  export type operating_hoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many operating_hours.
     */
    data: operating_hoursCreateManyInput | operating_hoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * operating_hours update
   */
  export type operating_hoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operating_hours
     */
    select?: operating_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operating_hours
     */
    omit?: operating_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operating_hoursInclude<ExtArgs> | null
    /**
     * The data needed to update a operating_hours.
     */
    data: XOR<operating_hoursUpdateInput, operating_hoursUncheckedUpdateInput>
    /**
     * Choose, which operating_hours to update.
     */
    where: operating_hoursWhereUniqueInput
  }

  /**
   * operating_hours updateMany
   */
  export type operating_hoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update operating_hours.
     */
    data: XOR<operating_hoursUpdateManyMutationInput, operating_hoursUncheckedUpdateManyInput>
    /**
     * Filter which operating_hours to update
     */
    where?: operating_hoursWhereInput
    /**
     * Limit how many operating_hours to update.
     */
    limit?: number
  }

  /**
   * operating_hours upsert
   */
  export type operating_hoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operating_hours
     */
    select?: operating_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operating_hours
     */
    omit?: operating_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operating_hoursInclude<ExtArgs> | null
    /**
     * The filter to search for the operating_hours to update in case it exists.
     */
    where: operating_hoursWhereUniqueInput
    /**
     * In case the operating_hours found by the `where` argument doesn't exist, create a new operating_hours with this data.
     */
    create: XOR<operating_hoursCreateInput, operating_hoursUncheckedCreateInput>
    /**
     * In case the operating_hours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<operating_hoursUpdateInput, operating_hoursUncheckedUpdateInput>
  }

  /**
   * operating_hours delete
   */
  export type operating_hoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operating_hours
     */
    select?: operating_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operating_hours
     */
    omit?: operating_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operating_hoursInclude<ExtArgs> | null
    /**
     * Filter which operating_hours to delete.
     */
    where: operating_hoursWhereUniqueInput
  }

  /**
   * operating_hours deleteMany
   */
  export type operating_hoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operating_hours to delete
     */
    where?: operating_hoursWhereInput
    /**
     * Limit how many operating_hours to delete.
     */
    limit?: number
  }

  /**
   * operating_hours.spot
   */
  export type operating_hours$spotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spot_tourism
     */
    select?: spot_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spot_tourism
     */
    omit?: spot_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spot_tourismInclude<ExtArgs> | null
    where?: spot_tourismWhereInput
  }

  /**
   * operating_hours without action
   */
  export type operating_hoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operating_hours
     */
    select?: operating_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operating_hours
     */
    omit?: operating_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operating_hoursInclude<ExtArgs> | null
  }


  /**
   * Model payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    payment_id: number | null
    transaction_id: number | null
    payment_amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    payment_id: number | null
    transaction_id: number | null
    payment_amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    payment_id: number | null
    transaction_id: number | null
    reference_number: string | null
    payment_type: string | null
    payment_amount: Decimal | null
    payment_status: $Enums.PaymentStatus | null
    payment_time: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    payment_id: number | null
    transaction_id: number | null
    reference_number: string | null
    payment_type: string | null
    payment_amount: Decimal | null
    payment_status: $Enums.PaymentStatus | null
    payment_time: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    payment_id: number
    transaction_id: number
    reference_number: number
    payment_type: number
    payment_amount: number
    payment_status: number
    payment_time: number
    response_data: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    payment_id?: true
    transaction_id?: true
    payment_amount?: true
  }

  export type PaymentSumAggregateInputType = {
    payment_id?: true
    transaction_id?: true
    payment_amount?: true
  }

  export type PaymentMinAggregateInputType = {
    payment_id?: true
    transaction_id?: true
    reference_number?: true
    payment_type?: true
    payment_amount?: true
    payment_status?: true
    payment_time?: true
  }

  export type PaymentMaxAggregateInputType = {
    payment_id?: true
    transaction_id?: true
    reference_number?: true
    payment_type?: true
    payment_amount?: true
    payment_status?: true
    payment_time?: true
  }

  export type PaymentCountAggregateInputType = {
    payment_id?: true
    transaction_id?: true
    reference_number?: true
    payment_type?: true
    payment_amount?: true
    payment_status?: true
    payment_time?: true
    response_data?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment to aggregate.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithAggregationInput | paymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: paymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    payment_id: number
    transaction_id: number
    reference_number: string
    payment_type: string
    payment_amount: Decimal
    payment_status: $Enums.PaymentStatus
    payment_time: Date
    response_data: JsonValue
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    transaction_id?: boolean
    reference_number?: boolean
    payment_type?: boolean
    payment_amount?: boolean
    payment_status?: boolean
    payment_time?: boolean
    response_data?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type paymentSelectScalar = {
    payment_id?: boolean
    transaction_id?: boolean
    reference_number?: boolean
    payment_type?: boolean
    payment_amount?: boolean
    payment_status?: boolean
    payment_time?: boolean
    response_data?: boolean
  }

  export type paymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"payment_id" | "transaction_id" | "reference_number" | "payment_type" | "payment_amount" | "payment_status" | "payment_time" | "response_data", ExtArgs["result"]["payment"]>
  export type paymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
  }

  export type $paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment"
    objects: {
      transaction: Prisma.$transactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      payment_id: number
      transaction_id: number
      reference_number: string
      payment_type: string
      payment_amount: Prisma.Decimal
      payment_status: $Enums.PaymentStatus
      payment_time: Date
      response_data: Prisma.JsonValue
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type paymentGetPayload<S extends boolean | null | undefined | paymentDefaultArgs> = $Result.GetResult<Prisma.$paymentPayload, S>

  type paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment'], meta: { name: 'payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {paymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentFindUniqueArgs>(args: SelectSubset<T, paymentFindUniqueArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentFindFirstArgs>(args?: SelectSubset<T, paymentFindFirstArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.findMany({ select: { payment_id: true } })
     * 
     */
    findMany<T extends paymentFindManyArgs>(args?: SelectSubset<T, paymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {paymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends paymentCreateArgs>(args: SelectSubset<T, paymentCreateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentCreateManyArgs>(args?: SelectSubset<T, paymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {paymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends paymentDeleteArgs>(args: SelectSubset<T, paymentDeleteArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {paymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentUpdateArgs>(args: SelectSubset<T, paymentUpdateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentDeleteManyArgs>(args?: SelectSubset<T, paymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentUpdateManyArgs>(args: SelectSubset<T, paymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {paymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends paymentUpsertArgs>(args: SelectSubset<T, paymentUpsertArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentCountArgs>(
      args?: Subset<T, paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentGroupByArgs['orderBy'] }
        : { orderBy?: paymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment model
   */
  readonly fields: paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends transactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transactionDefaultArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payment model
   */
  interface paymentFieldRefs {
    readonly payment_id: FieldRef<"payment", 'Int'>
    readonly transaction_id: FieldRef<"payment", 'Int'>
    readonly reference_number: FieldRef<"payment", 'String'>
    readonly payment_type: FieldRef<"payment", 'String'>
    readonly payment_amount: FieldRef<"payment", 'Decimal'>
    readonly payment_status: FieldRef<"payment", 'PaymentStatus'>
    readonly payment_time: FieldRef<"payment", 'DateTime'>
    readonly response_data: FieldRef<"payment", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * payment findUnique
   */
  export type paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findUniqueOrThrow
   */
  export type paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findFirst
   */
  export type paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findFirstOrThrow
   */
  export type paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findMany
   */
  export type paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment create
   */
  export type paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to create a payment.
     */
    data: XOR<paymentCreateInput, paymentUncheckedCreateInput>
  }

  /**
   * payment createMany
   */
  export type paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment update
   */
  export type paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to update a payment.
     */
    data: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
    /**
     * Choose, which payment to update.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment updateMany
   */
  export type paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payment upsert
   */
  export type paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The filter to search for the payment to update in case it exists.
     */
    where: paymentWhereUniqueInput
    /**
     * In case the payment found by the `where` argument doesn't exist, create a new payment with this data.
     */
    create: XOR<paymentCreateInput, paymentUncheckedCreateInput>
    /**
     * In case the payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
  }

  /**
   * payment delete
   */
  export type paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter which payment to delete.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment deleteMany
   */
  export type paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payment without action
   */
  export type paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
  }


  /**
   * Model reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    reviews_rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    reviews_rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    reviews_id: string | null
    spot_id: string | null
    user_id: string | null
    reviews_rating: number | null
    reviews_desc: string | null
    reviews_created_at: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    reviews_id: string | null
    spot_id: string | null
    user_id: string | null
    reviews_rating: number | null
    reviews_desc: string | null
    reviews_created_at: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    reviews_id: number
    spot_id: number
    user_id: number
    reviews_rating: number
    reviews_desc: number
    reviews_created_at: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    reviews_rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    reviews_rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    reviews_id?: true
    spot_id?: true
    user_id?: true
    reviews_rating?: true
    reviews_desc?: true
    reviews_created_at?: true
  }

  export type ReviewsMaxAggregateInputType = {
    reviews_id?: true
    spot_id?: true
    user_id?: true
    reviews_rating?: true
    reviews_desc?: true
    reviews_created_at?: true
  }

  export type ReviewsCountAggregateInputType = {
    reviews_id?: true
    spot_id?: true
    user_id?: true
    reviews_rating?: true
    reviews_desc?: true
    reviews_created_at?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to aggregate.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type reviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithAggregationInput | reviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: reviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    reviews_id: string
    spot_id: string | null
    user_id: string | null
    reviews_rating: number | null
    reviews_desc: string | null
    reviews_created_at: Date | null
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends reviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type reviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reviews_id?: boolean
    spot_id?: boolean
    user_id?: boolean
    reviews_rating?: boolean
    reviews_desc?: boolean
    reviews_created_at?: boolean
    spot?: boolean | reviews$spotArgs<ExtArgs>
    user?: boolean | reviews$userArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>



  export type reviewsSelectScalar = {
    reviews_id?: boolean
    spot_id?: boolean
    user_id?: boolean
    reviews_rating?: boolean
    reviews_desc?: boolean
    reviews_created_at?: boolean
  }

  export type reviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reviews_id" | "spot_id" | "user_id" | "reviews_rating" | "reviews_desc" | "reviews_created_at", ExtArgs["result"]["reviews"]>
  export type reviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spot?: boolean | reviews$spotArgs<ExtArgs>
    user?: boolean | reviews$userArgs<ExtArgs>
  }

  export type $reviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reviews"
    objects: {
      spot: Prisma.$spot_tourismPayload<ExtArgs> | null
      user: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      reviews_id: string
      spot_id: string | null
      user_id: string | null
      reviews_rating: number | null
      reviews_desc: string | null
      reviews_created_at: Date | null
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type reviewsGetPayload<S extends boolean | null | undefined | reviewsDefaultArgs> = $Result.GetResult<Prisma.$reviewsPayload, S>

  type reviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface reviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reviews'], meta: { name: 'reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {reviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewsFindUniqueArgs>(args: SelectSubset<T, reviewsFindUniqueArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewsFindFirstArgs>(args?: SelectSubset<T, reviewsFindFirstArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `reviews_id`
     * const reviewsWithReviews_idOnly = await prisma.reviews.findMany({ select: { reviews_id: true } })
     * 
     */
    findMany<T extends reviewsFindManyArgs>(args?: SelectSubset<T, reviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {reviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends reviewsCreateArgs>(args: SelectSubset<T, reviewsCreateArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewsCreateManyArgs>(args?: SelectSubset<T, reviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reviews.
     * @param {reviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends reviewsDeleteArgs>(args: SelectSubset<T, reviewsDeleteArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {reviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewsUpdateArgs>(args: SelectSubset<T, reviewsUpdateArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewsDeleteManyArgs>(args?: SelectSubset<T, reviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewsUpdateManyArgs>(args: SelectSubset<T, reviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reviews.
     * @param {reviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends reviewsUpsertArgs>(args: SelectSubset<T, reviewsUpsertArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewsCountArgs>(
      args?: Subset<T, reviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewsGroupByArgs['orderBy'] }
        : { orderBy?: reviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reviews model
   */
  readonly fields: reviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spot<T extends reviews$spotArgs<ExtArgs> = {}>(args?: Subset<T, reviews$spotArgs<ExtArgs>>): Prisma__spot_tourismClient<$Result.GetResult<Prisma.$spot_tourismPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends reviews$userArgs<ExtArgs> = {}>(args?: Subset<T, reviews$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reviews model
   */
  interface reviewsFieldRefs {
    readonly reviews_id: FieldRef<"reviews", 'String'>
    readonly spot_id: FieldRef<"reviews", 'String'>
    readonly user_id: FieldRef<"reviews", 'String'>
    readonly reviews_rating: FieldRef<"reviews", 'Int'>
    readonly reviews_desc: FieldRef<"reviews", 'String'>
    readonly reviews_created_at: FieldRef<"reviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reviews findUnique
   */
  export type reviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews findUniqueOrThrow
   */
  export type reviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews findFirst
   */
  export type reviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews findFirstOrThrow
   */
  export type reviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews findMany
   */
  export type reviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews create
   */
  export type reviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a reviews.
     */
    data: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
  }

  /**
   * reviews createMany
   */
  export type reviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewsCreateManyInput | reviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reviews update
   */
  export type reviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a reviews.
     */
    data: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
    /**
     * Choose, which reviews to update.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews updateMany
   */
  export type reviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * reviews upsert
   */
  export type reviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the reviews to update in case it exists.
     */
    where: reviewsWhereUniqueInput
    /**
     * In case the reviews found by the `where` argument doesn't exist, create a new reviews with this data.
     */
    create: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
    /**
     * In case the reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
  }

  /**
   * reviews delete
   */
  export type reviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter which reviews to delete.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews deleteMany
   */
  export type reviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * reviews.spot
   */
  export type reviews$spotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spot_tourism
     */
    select?: spot_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spot_tourism
     */
    omit?: spot_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spot_tourismInclude<ExtArgs> | null
    where?: spot_tourismWhereInput
  }

  /**
   * reviews.user
   */
  export type reviews$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * reviews without action
   */
  export type reviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
  }


  /**
   * Model spot_tourism
   */

  export type AggregateSpot_tourism = {
    _count: Spot_tourismCountAggregateOutputType | null
    _avg: Spot_tourismAvgAggregateOutputType | null
    _sum: Spot_tourismSumAggregateOutputType | null
    _min: Spot_tourismMinAggregateOutputType | null
    _max: Spot_tourismMaxAggregateOutputType | null
  }

  export type Spot_tourismAvgAggregateOutputType = {
    spot_rating: Decimal | null
  }

  export type Spot_tourismSumAggregateOutputType = {
    spot_rating: Decimal | null
  }

  export type Spot_tourismMinAggregateOutputType = {
    spot_id: string | null
    category_id: string | null
    village_id: string | null
    spot_name: string | null
    spot_desc: string | null
    spot_address: string | null
    spot_maps: string | null
    spot_thumbnail: string | null
    spot_rating: Decimal | null
    spot_contact: string | null
  }

  export type Spot_tourismMaxAggregateOutputType = {
    spot_id: string | null
    category_id: string | null
    village_id: string | null
    spot_name: string | null
    spot_desc: string | null
    spot_address: string | null
    spot_maps: string | null
    spot_thumbnail: string | null
    spot_rating: Decimal | null
    spot_contact: string | null
  }

  export type Spot_tourismCountAggregateOutputType = {
    spot_id: number
    category_id: number
    village_id: number
    spot_name: number
    spot_desc: number
    spot_address: number
    spot_maps: number
    spot_thumbnail: number
    spot_rating: number
    spot_contact: number
    _all: number
  }


  export type Spot_tourismAvgAggregateInputType = {
    spot_rating?: true
  }

  export type Spot_tourismSumAggregateInputType = {
    spot_rating?: true
  }

  export type Spot_tourismMinAggregateInputType = {
    spot_id?: true
    category_id?: true
    village_id?: true
    spot_name?: true
    spot_desc?: true
    spot_address?: true
    spot_maps?: true
    spot_thumbnail?: true
    spot_rating?: true
    spot_contact?: true
  }

  export type Spot_tourismMaxAggregateInputType = {
    spot_id?: true
    category_id?: true
    village_id?: true
    spot_name?: true
    spot_desc?: true
    spot_address?: true
    spot_maps?: true
    spot_thumbnail?: true
    spot_rating?: true
    spot_contact?: true
  }

  export type Spot_tourismCountAggregateInputType = {
    spot_id?: true
    category_id?: true
    village_id?: true
    spot_name?: true
    spot_desc?: true
    spot_address?: true
    spot_maps?: true
    spot_thumbnail?: true
    spot_rating?: true
    spot_contact?: true
    _all?: true
  }

  export type Spot_tourismAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spot_tourism to aggregate.
     */
    where?: spot_tourismWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spot_tourisms to fetch.
     */
    orderBy?: spot_tourismOrderByWithRelationInput | spot_tourismOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: spot_tourismWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spot_tourisms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spot_tourisms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned spot_tourisms
    **/
    _count?: true | Spot_tourismCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Spot_tourismAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Spot_tourismSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Spot_tourismMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Spot_tourismMaxAggregateInputType
  }

  export type GetSpot_tourismAggregateType<T extends Spot_tourismAggregateArgs> = {
        [P in keyof T & keyof AggregateSpot_tourism]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpot_tourism[P]>
      : GetScalarType<T[P], AggregateSpot_tourism[P]>
  }




  export type spot_tourismGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spot_tourismWhereInput
    orderBy?: spot_tourismOrderByWithAggregationInput | spot_tourismOrderByWithAggregationInput[]
    by: Spot_tourismScalarFieldEnum[] | Spot_tourismScalarFieldEnum
    having?: spot_tourismScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Spot_tourismCountAggregateInputType | true
    _avg?: Spot_tourismAvgAggregateInputType
    _sum?: Spot_tourismSumAggregateInputType
    _min?: Spot_tourismMinAggregateInputType
    _max?: Spot_tourismMaxAggregateInputType
  }

  export type Spot_tourismGroupByOutputType = {
    spot_id: string
    category_id: string | null
    village_id: string | null
    spot_name: string
    spot_desc: string | null
    spot_address: string | null
    spot_maps: string | null
    spot_thumbnail: string | null
    spot_rating: Decimal | null
    spot_contact: string | null
    _count: Spot_tourismCountAggregateOutputType | null
    _avg: Spot_tourismAvgAggregateOutputType | null
    _sum: Spot_tourismSumAggregateOutputType | null
    _min: Spot_tourismMinAggregateOutputType | null
    _max: Spot_tourismMaxAggregateOutputType | null
  }

  type GetSpot_tourismGroupByPayload<T extends spot_tourismGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Spot_tourismGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Spot_tourismGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Spot_tourismGroupByOutputType[P]>
            : GetScalarType<T[P], Spot_tourismGroupByOutputType[P]>
        }
      >
    >


  export type spot_tourismSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    spot_id?: boolean
    category_id?: boolean
    village_id?: boolean
    spot_name?: boolean
    spot_desc?: boolean
    spot_address?: boolean
    spot_maps?: boolean
    spot_thumbnail?: boolean
    spot_rating?: boolean
    spot_contact?: boolean
    facility_tourisms?: boolean | spot_tourism$facility_tourismsArgs<ExtArgs>
    galleries?: boolean | spot_tourism$galleriesArgs<ExtArgs>
    operating_hours?: boolean | spot_tourism$operating_hoursArgs<ExtArgs>
    reviews?: boolean | spot_tourism$reviewsArgs<ExtArgs>
    category?: boolean | spot_tourism$categoryArgs<ExtArgs>
    village?: boolean | spot_tourism$villageArgs<ExtArgs>
    tickets?: boolean | spot_tourism$ticketsArgs<ExtArgs>
    _count?: boolean | Spot_tourismCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spot_tourism"]>



  export type spot_tourismSelectScalar = {
    spot_id?: boolean
    category_id?: boolean
    village_id?: boolean
    spot_name?: boolean
    spot_desc?: boolean
    spot_address?: boolean
    spot_maps?: boolean
    spot_thumbnail?: boolean
    spot_rating?: boolean
    spot_contact?: boolean
  }

  export type spot_tourismOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"spot_id" | "category_id" | "village_id" | "spot_name" | "spot_desc" | "spot_address" | "spot_maps" | "spot_thumbnail" | "spot_rating" | "spot_contact", ExtArgs["result"]["spot_tourism"]>
  export type spot_tourismInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility_tourisms?: boolean | spot_tourism$facility_tourismsArgs<ExtArgs>
    galleries?: boolean | spot_tourism$galleriesArgs<ExtArgs>
    operating_hours?: boolean | spot_tourism$operating_hoursArgs<ExtArgs>
    reviews?: boolean | spot_tourism$reviewsArgs<ExtArgs>
    category?: boolean | spot_tourism$categoryArgs<ExtArgs>
    village?: boolean | spot_tourism$villageArgs<ExtArgs>
    tickets?: boolean | spot_tourism$ticketsArgs<ExtArgs>
    _count?: boolean | Spot_tourismCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $spot_tourismPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "spot_tourism"
    objects: {
      facility_tourisms: Prisma.$facility_tourismPayload<ExtArgs>[]
      galleries: Prisma.$galleryPayload<ExtArgs>[]
      operating_hours: Prisma.$operating_hoursPayload<ExtArgs>[]
      reviews: Prisma.$reviewsPayload<ExtArgs>[]
      category: Prisma.$category_tourismPayload<ExtArgs> | null
      village: Prisma.$villagePayload<ExtArgs> | null
      tickets: Prisma.$ticketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      spot_id: string
      category_id: string | null
      village_id: string | null
      spot_name: string
      spot_desc: string | null
      spot_address: string | null
      spot_maps: string | null
      spot_thumbnail: string | null
      spot_rating: Prisma.Decimal | null
      spot_contact: string | null
    }, ExtArgs["result"]["spot_tourism"]>
    composites: {}
  }

  type spot_tourismGetPayload<S extends boolean | null | undefined | spot_tourismDefaultArgs> = $Result.GetResult<Prisma.$spot_tourismPayload, S>

  type spot_tourismCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<spot_tourismFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Spot_tourismCountAggregateInputType | true
    }

  export interface spot_tourismDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['spot_tourism'], meta: { name: 'spot_tourism' } }
    /**
     * Find zero or one Spot_tourism that matches the filter.
     * @param {spot_tourismFindUniqueArgs} args - Arguments to find a Spot_tourism
     * @example
     * // Get one Spot_tourism
     * const spot_tourism = await prisma.spot_tourism.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends spot_tourismFindUniqueArgs>(args: SelectSubset<T, spot_tourismFindUniqueArgs<ExtArgs>>): Prisma__spot_tourismClient<$Result.GetResult<Prisma.$spot_tourismPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Spot_tourism that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {spot_tourismFindUniqueOrThrowArgs} args - Arguments to find a Spot_tourism
     * @example
     * // Get one Spot_tourism
     * const spot_tourism = await prisma.spot_tourism.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends spot_tourismFindUniqueOrThrowArgs>(args: SelectSubset<T, spot_tourismFindUniqueOrThrowArgs<ExtArgs>>): Prisma__spot_tourismClient<$Result.GetResult<Prisma.$spot_tourismPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spot_tourism that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spot_tourismFindFirstArgs} args - Arguments to find a Spot_tourism
     * @example
     * // Get one Spot_tourism
     * const spot_tourism = await prisma.spot_tourism.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends spot_tourismFindFirstArgs>(args?: SelectSubset<T, spot_tourismFindFirstArgs<ExtArgs>>): Prisma__spot_tourismClient<$Result.GetResult<Prisma.$spot_tourismPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spot_tourism that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spot_tourismFindFirstOrThrowArgs} args - Arguments to find a Spot_tourism
     * @example
     * // Get one Spot_tourism
     * const spot_tourism = await prisma.spot_tourism.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends spot_tourismFindFirstOrThrowArgs>(args?: SelectSubset<T, spot_tourismFindFirstOrThrowArgs<ExtArgs>>): Prisma__spot_tourismClient<$Result.GetResult<Prisma.$spot_tourismPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spot_tourisms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spot_tourismFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spot_tourisms
     * const spot_tourisms = await prisma.spot_tourism.findMany()
     * 
     * // Get first 10 Spot_tourisms
     * const spot_tourisms = await prisma.spot_tourism.findMany({ take: 10 })
     * 
     * // Only select the `spot_id`
     * const spot_tourismWithSpot_idOnly = await prisma.spot_tourism.findMany({ select: { spot_id: true } })
     * 
     */
    findMany<T extends spot_tourismFindManyArgs>(args?: SelectSubset<T, spot_tourismFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spot_tourismPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Spot_tourism.
     * @param {spot_tourismCreateArgs} args - Arguments to create a Spot_tourism.
     * @example
     * // Create one Spot_tourism
     * const Spot_tourism = await prisma.spot_tourism.create({
     *   data: {
     *     // ... data to create a Spot_tourism
     *   }
     * })
     * 
     */
    create<T extends spot_tourismCreateArgs>(args: SelectSubset<T, spot_tourismCreateArgs<ExtArgs>>): Prisma__spot_tourismClient<$Result.GetResult<Prisma.$spot_tourismPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spot_tourisms.
     * @param {spot_tourismCreateManyArgs} args - Arguments to create many Spot_tourisms.
     * @example
     * // Create many Spot_tourisms
     * const spot_tourism = await prisma.spot_tourism.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends spot_tourismCreateManyArgs>(args?: SelectSubset<T, spot_tourismCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Spot_tourism.
     * @param {spot_tourismDeleteArgs} args - Arguments to delete one Spot_tourism.
     * @example
     * // Delete one Spot_tourism
     * const Spot_tourism = await prisma.spot_tourism.delete({
     *   where: {
     *     // ... filter to delete one Spot_tourism
     *   }
     * })
     * 
     */
    delete<T extends spot_tourismDeleteArgs>(args: SelectSubset<T, spot_tourismDeleteArgs<ExtArgs>>): Prisma__spot_tourismClient<$Result.GetResult<Prisma.$spot_tourismPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Spot_tourism.
     * @param {spot_tourismUpdateArgs} args - Arguments to update one Spot_tourism.
     * @example
     * // Update one Spot_tourism
     * const spot_tourism = await prisma.spot_tourism.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends spot_tourismUpdateArgs>(args: SelectSubset<T, spot_tourismUpdateArgs<ExtArgs>>): Prisma__spot_tourismClient<$Result.GetResult<Prisma.$spot_tourismPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spot_tourisms.
     * @param {spot_tourismDeleteManyArgs} args - Arguments to filter Spot_tourisms to delete.
     * @example
     * // Delete a few Spot_tourisms
     * const { count } = await prisma.spot_tourism.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends spot_tourismDeleteManyArgs>(args?: SelectSubset<T, spot_tourismDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spot_tourisms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spot_tourismUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spot_tourisms
     * const spot_tourism = await prisma.spot_tourism.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends spot_tourismUpdateManyArgs>(args: SelectSubset<T, spot_tourismUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Spot_tourism.
     * @param {spot_tourismUpsertArgs} args - Arguments to update or create a Spot_tourism.
     * @example
     * // Update or create a Spot_tourism
     * const spot_tourism = await prisma.spot_tourism.upsert({
     *   create: {
     *     // ... data to create a Spot_tourism
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spot_tourism we want to update
     *   }
     * })
     */
    upsert<T extends spot_tourismUpsertArgs>(args: SelectSubset<T, spot_tourismUpsertArgs<ExtArgs>>): Prisma__spot_tourismClient<$Result.GetResult<Prisma.$spot_tourismPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spot_tourisms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spot_tourismCountArgs} args - Arguments to filter Spot_tourisms to count.
     * @example
     * // Count the number of Spot_tourisms
     * const count = await prisma.spot_tourism.count({
     *   where: {
     *     // ... the filter for the Spot_tourisms we want to count
     *   }
     * })
    **/
    count<T extends spot_tourismCountArgs>(
      args?: Subset<T, spot_tourismCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Spot_tourismCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spot_tourism.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Spot_tourismAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Spot_tourismAggregateArgs>(args: Subset<T, Spot_tourismAggregateArgs>): Prisma.PrismaPromise<GetSpot_tourismAggregateType<T>>

    /**
     * Group by Spot_tourism.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spot_tourismGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends spot_tourismGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: spot_tourismGroupByArgs['orderBy'] }
        : { orderBy?: spot_tourismGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, spot_tourismGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpot_tourismGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the spot_tourism model
   */
  readonly fields: spot_tourismFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for spot_tourism.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__spot_tourismClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facility_tourisms<T extends spot_tourism$facility_tourismsArgs<ExtArgs> = {}>(args?: Subset<T, spot_tourism$facility_tourismsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facility_tourismPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    galleries<T extends spot_tourism$galleriesArgs<ExtArgs> = {}>(args?: Subset<T, spot_tourism$galleriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$galleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    operating_hours<T extends spot_tourism$operating_hoursArgs<ExtArgs> = {}>(args?: Subset<T, spot_tourism$operating_hoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operating_hoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends spot_tourism$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, spot_tourism$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends spot_tourism$categoryArgs<ExtArgs> = {}>(args?: Subset<T, spot_tourism$categoryArgs<ExtArgs>>): Prisma__category_tourismClient<$Result.GetResult<Prisma.$category_tourismPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    village<T extends spot_tourism$villageArgs<ExtArgs> = {}>(args?: Subset<T, spot_tourism$villageArgs<ExtArgs>>): Prisma__villageClient<$Result.GetResult<Prisma.$villagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tickets<T extends spot_tourism$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, spot_tourism$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the spot_tourism model
   */
  interface spot_tourismFieldRefs {
    readonly spot_id: FieldRef<"spot_tourism", 'String'>
    readonly category_id: FieldRef<"spot_tourism", 'String'>
    readonly village_id: FieldRef<"spot_tourism", 'String'>
    readonly spot_name: FieldRef<"spot_tourism", 'String'>
    readonly spot_desc: FieldRef<"spot_tourism", 'String'>
    readonly spot_address: FieldRef<"spot_tourism", 'String'>
    readonly spot_maps: FieldRef<"spot_tourism", 'String'>
    readonly spot_thumbnail: FieldRef<"spot_tourism", 'String'>
    readonly spot_rating: FieldRef<"spot_tourism", 'Decimal'>
    readonly spot_contact: FieldRef<"spot_tourism", 'String'>
  }
    

  // Custom InputTypes
  /**
   * spot_tourism findUnique
   */
  export type spot_tourismFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spot_tourism
     */
    select?: spot_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spot_tourism
     */
    omit?: spot_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spot_tourismInclude<ExtArgs> | null
    /**
     * Filter, which spot_tourism to fetch.
     */
    where: spot_tourismWhereUniqueInput
  }

  /**
   * spot_tourism findUniqueOrThrow
   */
  export type spot_tourismFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spot_tourism
     */
    select?: spot_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spot_tourism
     */
    omit?: spot_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spot_tourismInclude<ExtArgs> | null
    /**
     * Filter, which spot_tourism to fetch.
     */
    where: spot_tourismWhereUniqueInput
  }

  /**
   * spot_tourism findFirst
   */
  export type spot_tourismFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spot_tourism
     */
    select?: spot_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spot_tourism
     */
    omit?: spot_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spot_tourismInclude<ExtArgs> | null
    /**
     * Filter, which spot_tourism to fetch.
     */
    where?: spot_tourismWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spot_tourisms to fetch.
     */
    orderBy?: spot_tourismOrderByWithRelationInput | spot_tourismOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spot_tourisms.
     */
    cursor?: spot_tourismWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spot_tourisms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spot_tourisms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spot_tourisms.
     */
    distinct?: Spot_tourismScalarFieldEnum | Spot_tourismScalarFieldEnum[]
  }

  /**
   * spot_tourism findFirstOrThrow
   */
  export type spot_tourismFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spot_tourism
     */
    select?: spot_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spot_tourism
     */
    omit?: spot_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spot_tourismInclude<ExtArgs> | null
    /**
     * Filter, which spot_tourism to fetch.
     */
    where?: spot_tourismWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spot_tourisms to fetch.
     */
    orderBy?: spot_tourismOrderByWithRelationInput | spot_tourismOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spot_tourisms.
     */
    cursor?: spot_tourismWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spot_tourisms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spot_tourisms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spot_tourisms.
     */
    distinct?: Spot_tourismScalarFieldEnum | Spot_tourismScalarFieldEnum[]
  }

  /**
   * spot_tourism findMany
   */
  export type spot_tourismFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spot_tourism
     */
    select?: spot_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spot_tourism
     */
    omit?: spot_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spot_tourismInclude<ExtArgs> | null
    /**
     * Filter, which spot_tourisms to fetch.
     */
    where?: spot_tourismWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spot_tourisms to fetch.
     */
    orderBy?: spot_tourismOrderByWithRelationInput | spot_tourismOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing spot_tourisms.
     */
    cursor?: spot_tourismWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spot_tourisms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spot_tourisms.
     */
    skip?: number
    distinct?: Spot_tourismScalarFieldEnum | Spot_tourismScalarFieldEnum[]
  }

  /**
   * spot_tourism create
   */
  export type spot_tourismCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spot_tourism
     */
    select?: spot_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spot_tourism
     */
    omit?: spot_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spot_tourismInclude<ExtArgs> | null
    /**
     * The data needed to create a spot_tourism.
     */
    data: XOR<spot_tourismCreateInput, spot_tourismUncheckedCreateInput>
  }

  /**
   * spot_tourism createMany
   */
  export type spot_tourismCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many spot_tourisms.
     */
    data: spot_tourismCreateManyInput | spot_tourismCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * spot_tourism update
   */
  export type spot_tourismUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spot_tourism
     */
    select?: spot_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spot_tourism
     */
    omit?: spot_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spot_tourismInclude<ExtArgs> | null
    /**
     * The data needed to update a spot_tourism.
     */
    data: XOR<spot_tourismUpdateInput, spot_tourismUncheckedUpdateInput>
    /**
     * Choose, which spot_tourism to update.
     */
    where: spot_tourismWhereUniqueInput
  }

  /**
   * spot_tourism updateMany
   */
  export type spot_tourismUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update spot_tourisms.
     */
    data: XOR<spot_tourismUpdateManyMutationInput, spot_tourismUncheckedUpdateManyInput>
    /**
     * Filter which spot_tourisms to update
     */
    where?: spot_tourismWhereInput
    /**
     * Limit how many spot_tourisms to update.
     */
    limit?: number
  }

  /**
   * spot_tourism upsert
   */
  export type spot_tourismUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spot_tourism
     */
    select?: spot_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spot_tourism
     */
    omit?: spot_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spot_tourismInclude<ExtArgs> | null
    /**
     * The filter to search for the spot_tourism to update in case it exists.
     */
    where: spot_tourismWhereUniqueInput
    /**
     * In case the spot_tourism found by the `where` argument doesn't exist, create a new spot_tourism with this data.
     */
    create: XOR<spot_tourismCreateInput, spot_tourismUncheckedCreateInput>
    /**
     * In case the spot_tourism was found with the provided `where` argument, update it with this data.
     */
    update: XOR<spot_tourismUpdateInput, spot_tourismUncheckedUpdateInput>
  }

  /**
   * spot_tourism delete
   */
  export type spot_tourismDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spot_tourism
     */
    select?: spot_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spot_tourism
     */
    omit?: spot_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spot_tourismInclude<ExtArgs> | null
    /**
     * Filter which spot_tourism to delete.
     */
    where: spot_tourismWhereUniqueInput
  }

  /**
   * spot_tourism deleteMany
   */
  export type spot_tourismDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spot_tourisms to delete
     */
    where?: spot_tourismWhereInput
    /**
     * Limit how many spot_tourisms to delete.
     */
    limit?: number
  }

  /**
   * spot_tourism.facility_tourisms
   */
  export type spot_tourism$facility_tourismsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facility_tourism
     */
    select?: facility_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facility_tourism
     */
    omit?: facility_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facility_tourismInclude<ExtArgs> | null
    where?: facility_tourismWhereInput
    orderBy?: facility_tourismOrderByWithRelationInput | facility_tourismOrderByWithRelationInput[]
    cursor?: facility_tourismWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Facility_tourismScalarFieldEnum | Facility_tourismScalarFieldEnum[]
  }

  /**
   * spot_tourism.galleries
   */
  export type spot_tourism$galleriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallery
     */
    select?: gallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the gallery
     */
    omit?: galleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: galleryInclude<ExtArgs> | null
    where?: galleryWhereInput
    orderBy?: galleryOrderByWithRelationInput | galleryOrderByWithRelationInput[]
    cursor?: galleryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * spot_tourism.operating_hours
   */
  export type spot_tourism$operating_hoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operating_hours
     */
    select?: operating_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operating_hours
     */
    omit?: operating_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operating_hoursInclude<ExtArgs> | null
    where?: operating_hoursWhereInput
    orderBy?: operating_hoursOrderByWithRelationInput | operating_hoursOrderByWithRelationInput[]
    cursor?: operating_hoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Operating_hoursScalarFieldEnum | Operating_hoursScalarFieldEnum[]
  }

  /**
   * spot_tourism.reviews
   */
  export type spot_tourism$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    cursor?: reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * spot_tourism.category
   */
  export type spot_tourism$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category_tourism
     */
    select?: category_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the category_tourism
     */
    omit?: category_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: category_tourismInclude<ExtArgs> | null
    where?: category_tourismWhereInput
  }

  /**
   * spot_tourism.village
   */
  export type spot_tourism$villageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the village
     */
    select?: villageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the village
     */
    omit?: villageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villageInclude<ExtArgs> | null
    where?: villageWhereInput
  }

  /**
   * spot_tourism.tickets
   */
  export type spot_tourism$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    cursor?: ticketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * spot_tourism without action
   */
  export type spot_tourismDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spot_tourism
     */
    select?: spot_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spot_tourism
     */
    omit?: spot_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spot_tourismInclude<ExtArgs> | null
  }


  /**
   * Model ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    ticket_price: Decimal | null
    ticket_stock: number | null
  }

  export type TicketSumAggregateOutputType = {
    ticket_price: Decimal | null
    ticket_stock: number | null
  }

  export type TicketMinAggregateOutputType = {
    ticket_id: string | null
    spot_id: string | null
    ticket_name: string | null
    ticket_price: Decimal | null
    ticket_desc: string | null
    ticket_stock: number | null
    code: string | null
    url_qr: string | null
  }

  export type TicketMaxAggregateOutputType = {
    ticket_id: string | null
    spot_id: string | null
    ticket_name: string | null
    ticket_price: Decimal | null
    ticket_desc: string | null
    ticket_stock: number | null
    code: string | null
    url_qr: string | null
  }

  export type TicketCountAggregateOutputType = {
    ticket_id: number
    spot_id: number
    ticket_name: number
    ticket_price: number
    ticket_desc: number
    ticket_stock: number
    code: number
    url_qr: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    ticket_price?: true
    ticket_stock?: true
  }

  export type TicketSumAggregateInputType = {
    ticket_price?: true
    ticket_stock?: true
  }

  export type TicketMinAggregateInputType = {
    ticket_id?: true
    spot_id?: true
    ticket_name?: true
    ticket_price?: true
    ticket_desc?: true
    ticket_stock?: true
    code?: true
    url_qr?: true
  }

  export type TicketMaxAggregateInputType = {
    ticket_id?: true
    spot_id?: true
    ticket_name?: true
    ticket_price?: true
    ticket_desc?: true
    ticket_stock?: true
    code?: true
    url_qr?: true
  }

  export type TicketCountAggregateInputType = {
    ticket_id?: true
    spot_id?: true
    ticket_name?: true
    ticket_price?: true
    ticket_desc?: true
    ticket_stock?: true
    code?: true
    url_qr?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket to aggregate.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type ticketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithAggregationInput | ticketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: ticketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    ticket_id: string
    spot_id: string | null
    ticket_name: string | null
    ticket_price: Decimal
    ticket_desc: string | null
    ticket_stock: number | null
    code: string
    url_qr: string
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends ticketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type ticketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_id?: boolean
    spot_id?: boolean
    ticket_name?: boolean
    ticket_price?: boolean
    ticket_desc?: boolean
    ticket_stock?: boolean
    code?: boolean
    url_qr?: boolean
    spot?: boolean | ticket$spotArgs<ExtArgs>
    temp_order_details?: boolean | ticket$temp_order_detailsArgs<ExtArgs>
    transaction_details?: boolean | ticket$transaction_detailsArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>



  export type ticketSelectScalar = {
    ticket_id?: boolean
    spot_id?: boolean
    ticket_name?: boolean
    ticket_price?: boolean
    ticket_desc?: boolean
    ticket_stock?: boolean
    code?: boolean
    url_qr?: boolean
  }

  export type ticketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ticket_id" | "spot_id" | "ticket_name" | "ticket_price" | "ticket_desc" | "ticket_stock" | "code" | "url_qr", ExtArgs["result"]["ticket"]>
  export type ticketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spot?: boolean | ticket$spotArgs<ExtArgs>
    temp_order_details?: boolean | ticket$temp_order_detailsArgs<ExtArgs>
    transaction_details?: boolean | ticket$transaction_detailsArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ticketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ticket"
    objects: {
      spot: Prisma.$spot_tourismPayload<ExtArgs> | null
      temp_order_details: Prisma.$temp_order_detailPayload<ExtArgs>[]
      transaction_details: Prisma.$transaction_detailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ticket_id: string
      spot_id: string | null
      ticket_name: string | null
      ticket_price: Prisma.Decimal
      ticket_desc: string | null
      ticket_stock: number | null
      code: string
      url_qr: string
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type ticketGetPayload<S extends boolean | null | undefined | ticketDefaultArgs> = $Result.GetResult<Prisma.$ticketPayload, S>

  type ticketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ticketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface ticketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticket'], meta: { name: 'ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {ticketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticketFindUniqueArgs>(args: SelectSubset<T, ticketFindUniqueArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ticketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticketFindUniqueOrThrowArgs>(args: SelectSubset<T, ticketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticketFindFirstArgs>(args?: SelectSubset<T, ticketFindFirstArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticketFindFirstOrThrowArgs>(args?: SelectSubset<T, ticketFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `ticket_id`
     * const ticketWithTicket_idOnly = await prisma.ticket.findMany({ select: { ticket_id: true } })
     * 
     */
    findMany<T extends ticketFindManyArgs>(args?: SelectSubset<T, ticketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {ticketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends ticketCreateArgs>(args: SelectSubset<T, ticketCreateArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {ticketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticketCreateManyArgs>(args?: SelectSubset<T, ticketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {ticketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends ticketDeleteArgs>(args: SelectSubset<T, ticketDeleteArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {ticketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticketUpdateArgs>(args: SelectSubset<T, ticketUpdateArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {ticketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticketDeleteManyArgs>(args?: SelectSubset<T, ticketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticketUpdateManyArgs>(args: SelectSubset<T, ticketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {ticketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends ticketUpsertArgs>(args: SelectSubset<T, ticketUpsertArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends ticketCountArgs>(
      args?: Subset<T, ticketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ticketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticketGroupByArgs['orderBy'] }
        : { orderBy?: ticketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ticketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ticket model
   */
  readonly fields: ticketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spot<T extends ticket$spotArgs<ExtArgs> = {}>(args?: Subset<T, ticket$spotArgs<ExtArgs>>): Prisma__spot_tourismClient<$Result.GetResult<Prisma.$spot_tourismPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    temp_order_details<T extends ticket$temp_order_detailsArgs<ExtArgs> = {}>(args?: Subset<T, ticket$temp_order_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$temp_order_detailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transaction_details<T extends ticket$transaction_detailsArgs<ExtArgs> = {}>(args?: Subset<T, ticket$transaction_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ticket model
   */
  interface ticketFieldRefs {
    readonly ticket_id: FieldRef<"ticket", 'String'>
    readonly spot_id: FieldRef<"ticket", 'String'>
    readonly ticket_name: FieldRef<"ticket", 'String'>
    readonly ticket_price: FieldRef<"ticket", 'Decimal'>
    readonly ticket_desc: FieldRef<"ticket", 'String'>
    readonly ticket_stock: FieldRef<"ticket", 'Int'>
    readonly code: FieldRef<"ticket", 'String'>
    readonly url_qr: FieldRef<"ticket", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ticket findUnique
   */
  export type ticketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket findUniqueOrThrow
   */
  export type ticketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket findFirst
   */
  export type ticketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticket findFirstOrThrow
   */
  export type ticketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticket findMany
   */
  export type ticketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tickets.
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticket create
   */
  export type ticketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * The data needed to create a ticket.
     */
    data: XOR<ticketCreateInput, ticketUncheckedCreateInput>
  }

  /**
   * ticket createMany
   */
  export type ticketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tickets.
     */
    data: ticketCreateManyInput | ticketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ticket update
   */
  export type ticketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * The data needed to update a ticket.
     */
    data: XOR<ticketUpdateInput, ticketUncheckedUpdateInput>
    /**
     * Choose, which ticket to update.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket updateMany
   */
  export type ticketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketWhereInput
    /**
     * Limit how many tickets to update.
     */
    limit?: number
  }

  /**
   * ticket upsert
   */
  export type ticketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * The filter to search for the ticket to update in case it exists.
     */
    where: ticketWhereUniqueInput
    /**
     * In case the ticket found by the `where` argument doesn't exist, create a new ticket with this data.
     */
    create: XOR<ticketCreateInput, ticketUncheckedCreateInput>
    /**
     * In case the ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticketUpdateInput, ticketUncheckedUpdateInput>
  }

  /**
   * ticket delete
   */
  export type ticketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter which ticket to delete.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket deleteMany
   */
  export type ticketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to delete
     */
    where?: ticketWhereInput
    /**
     * Limit how many tickets to delete.
     */
    limit?: number
  }

  /**
   * ticket.spot
   */
  export type ticket$spotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spot_tourism
     */
    select?: spot_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spot_tourism
     */
    omit?: spot_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spot_tourismInclude<ExtArgs> | null
    where?: spot_tourismWhereInput
  }

  /**
   * ticket.temp_order_details
   */
  export type ticket$temp_order_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order_detail
     */
    select?: temp_order_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order_detail
     */
    omit?: temp_order_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_order_detailInclude<ExtArgs> | null
    where?: temp_order_detailWhereInput
    orderBy?: temp_order_detailOrderByWithRelationInput | temp_order_detailOrderByWithRelationInput[]
    cursor?: temp_order_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Temp_order_detailScalarFieldEnum | Temp_order_detailScalarFieldEnum[]
  }

  /**
   * ticket.transaction_details
   */
  export type ticket$transaction_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    where?: transaction_detailWhereInput
    orderBy?: transaction_detailOrderByWithRelationInput | transaction_detailOrderByWithRelationInput[]
    cursor?: transaction_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Transaction_detailScalarFieldEnum | Transaction_detailScalarFieldEnum[]
  }

  /**
   * ticket without action
   */
  export type ticketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
  }


  /**
   * Model transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    transaction_id: number | null
    total_price: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    transaction_id: number | null
    total_price: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    transaction_id: number | null
    user_id: string | null
    transaction_code: string | null
    total_price: Decimal | null
    transaction_status: $Enums.TransactionStatus | null
    transaction_date: Date | null
    visit_date: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    transaction_id: number | null
    user_id: string | null
    transaction_code: string | null
    total_price: Decimal | null
    transaction_status: $Enums.TransactionStatus | null
    transaction_date: Date | null
    visit_date: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    transaction_id: number
    user_id: number
    transaction_code: number
    total_price: number
    transaction_status: number
    transaction_date: number
    visit_date: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    transaction_id?: true
    total_price?: true
  }

  export type TransactionSumAggregateInputType = {
    transaction_id?: true
    total_price?: true
  }

  export type TransactionMinAggregateInputType = {
    transaction_id?: true
    user_id?: true
    transaction_code?: true
    total_price?: true
    transaction_status?: true
    transaction_date?: true
    visit_date?: true
  }

  export type TransactionMaxAggregateInputType = {
    transaction_id?: true
    user_id?: true
    transaction_code?: true
    total_price?: true
    transaction_status?: true
    transaction_date?: true
    visit_date?: true
  }

  export type TransactionCountAggregateInputType = {
    transaction_id?: true
    user_id?: true
    transaction_code?: true
    total_price?: true
    transaction_status?: true
    transaction_date?: true
    visit_date?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction to aggregate.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithAggregationInput | transactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    transaction_id: number
    user_id: string | null
    transaction_code: string
    total_price: Decimal
    transaction_status: $Enums.TransactionStatus | null
    transaction_date: Date | null
    visit_date: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
    user_id?: boolean
    transaction_code?: boolean
    total_price?: boolean
    transaction_status?: boolean
    transaction_date?: boolean
    visit_date?: boolean
    payments?: boolean | transaction$paymentsArgs<ExtArgs>
    user?: boolean | transaction$userArgs<ExtArgs>
    transaction_details?: boolean | transaction$transaction_detailsArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>



  export type transactionSelectScalar = {
    transaction_id?: boolean
    user_id?: boolean
    transaction_code?: boolean
    total_price?: boolean
    transaction_status?: boolean
    transaction_date?: boolean
    visit_date?: boolean
  }

  export type transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"transaction_id" | "user_id" | "transaction_code" | "total_price" | "transaction_status" | "transaction_date" | "visit_date", ExtArgs["result"]["transaction"]>
  export type transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | transaction$paymentsArgs<ExtArgs>
    user?: boolean | transaction$userArgs<ExtArgs>
    transaction_details?: boolean | transaction$transaction_detailsArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction"
    objects: {
      payments: Prisma.$paymentPayload<ExtArgs>[]
      user: Prisma.$usersPayload<ExtArgs> | null
      transaction_details: Prisma.$transaction_detailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      transaction_id: number
      user_id: string | null
      transaction_code: string
      total_price: Prisma.Decimal
      transaction_status: $Enums.TransactionStatus | null
      transaction_date: Date | null
      visit_date: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type transactionGetPayload<S extends boolean | null | undefined | transactionDefaultArgs> = $Result.GetResult<Prisma.$transactionPayload, S>

  type transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction'], meta: { name: 'transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {transactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionFindUniqueArgs>(args: SelectSubset<T, transactionFindUniqueArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionFindFirstArgs>(args?: SelectSubset<T, transactionFindFirstArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `transaction_id`
     * const transactionWithTransaction_idOnly = await prisma.transaction.findMany({ select: { transaction_id: true } })
     * 
     */
    findMany<T extends transactionFindManyArgs>(args?: SelectSubset<T, transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {transactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends transactionCreateArgs>(args: SelectSubset<T, transactionCreateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionCreateManyArgs>(args?: SelectSubset<T, transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {transactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends transactionDeleteArgs>(args: SelectSubset<T, transactionDeleteArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {transactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionUpdateArgs>(args: SelectSubset<T, transactionUpdateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionDeleteManyArgs>(args?: SelectSubset<T, transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionUpdateManyArgs>(args: SelectSubset<T, transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {transactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends transactionUpsertArgs>(args: SelectSubset<T, transactionUpsertArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionCountArgs>(
      args?: Subset<T, transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionGroupByArgs['orderBy'] }
        : { orderBy?: transactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction model
   */
  readonly fields: transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends transaction$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, transaction$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends transaction$userArgs<ExtArgs> = {}>(args?: Subset<T, transaction$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transaction_details<T extends transaction$transaction_detailsArgs<ExtArgs> = {}>(args?: Subset<T, transaction$transaction_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaction model
   */
  interface transactionFieldRefs {
    readonly transaction_id: FieldRef<"transaction", 'Int'>
    readonly user_id: FieldRef<"transaction", 'String'>
    readonly transaction_code: FieldRef<"transaction", 'String'>
    readonly total_price: FieldRef<"transaction", 'Decimal'>
    readonly transaction_status: FieldRef<"transaction", 'TransactionStatus'>
    readonly transaction_date: FieldRef<"transaction", 'DateTime'>
    readonly visit_date: FieldRef<"transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transaction findUnique
   */
  export type transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findUniqueOrThrow
   */
  export type transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findFirst
   */
  export type transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findFirstOrThrow
   */
  export type transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findMany
   */
  export type transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction create
   */
  export type transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction.
     */
    data: XOR<transactionCreateInput, transactionUncheckedCreateInput>
  }

  /**
   * transaction createMany
   */
  export type transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction update
   */
  export type transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction.
     */
    data: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
    /**
     * Choose, which transaction to update.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction updateMany
   */
  export type transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transaction upsert
   */
  export type transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction to update in case it exists.
     */
    where: transactionWhereUniqueInput
    /**
     * In case the transaction found by the `where` argument doesn't exist, create a new transaction with this data.
     */
    create: XOR<transactionCreateInput, transactionUncheckedCreateInput>
    /**
     * In case the transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
  }

  /**
   * transaction delete
   */
  export type transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter which transaction to delete.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction deleteMany
   */
  export type transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transaction.payments
   */
  export type transaction$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    cursor?: paymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * transaction.user
   */
  export type transaction$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * transaction.transaction_details
   */
  export type transaction$transaction_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    where?: transaction_detailWhereInput
    orderBy?: transaction_detailOrderByWithRelationInput | transaction_detailOrderByWithRelationInput[]
    cursor?: transaction_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Transaction_detailScalarFieldEnum | Transaction_detailScalarFieldEnum[]
  }

  /**
   * transaction without action
   */
  export type transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
  }


  /**
   * Model transaction_detail
   */

  export type AggregateTransaction_detail = {
    _count: Transaction_detailCountAggregateOutputType | null
    _avg: Transaction_detailAvgAggregateOutputType | null
    _sum: Transaction_detailSumAggregateOutputType | null
    _min: Transaction_detailMinAggregateOutputType | null
    _max: Transaction_detailMaxAggregateOutputType | null
  }

  export type Transaction_detailAvgAggregateOutputType = {
    transaction_detail_id: number | null
    transaction_id: number | null
    detail_quantity: number | null
    detail_price: Decimal | null
    detail_subtotal: Decimal | null
  }

  export type Transaction_detailSumAggregateOutputType = {
    transaction_detail_id: number | null
    transaction_id: number | null
    detail_quantity: number | null
    detail_price: Decimal | null
    detail_subtotal: Decimal | null
  }

  export type Transaction_detailMinAggregateOutputType = {
    transaction_detail_id: number | null
    transaction_id: number | null
    ticket_id: string | null
    detail_quantity: number | null
    detail_price: Decimal | null
    detail_subtotal: Decimal | null
    is_used: $Enums.TicketStatus | null
  }

  export type Transaction_detailMaxAggregateOutputType = {
    transaction_detail_id: number | null
    transaction_id: number | null
    ticket_id: string | null
    detail_quantity: number | null
    detail_price: Decimal | null
    detail_subtotal: Decimal | null
    is_used: $Enums.TicketStatus | null
  }

  export type Transaction_detailCountAggregateOutputType = {
    transaction_detail_id: number
    transaction_id: number
    ticket_id: number
    detail_quantity: number
    detail_price: number
    detail_subtotal: number
    is_used: number
    _all: number
  }


  export type Transaction_detailAvgAggregateInputType = {
    transaction_detail_id?: true
    transaction_id?: true
    detail_quantity?: true
    detail_price?: true
    detail_subtotal?: true
  }

  export type Transaction_detailSumAggregateInputType = {
    transaction_detail_id?: true
    transaction_id?: true
    detail_quantity?: true
    detail_price?: true
    detail_subtotal?: true
  }

  export type Transaction_detailMinAggregateInputType = {
    transaction_detail_id?: true
    transaction_id?: true
    ticket_id?: true
    detail_quantity?: true
    detail_price?: true
    detail_subtotal?: true
    is_used?: true
  }

  export type Transaction_detailMaxAggregateInputType = {
    transaction_detail_id?: true
    transaction_id?: true
    ticket_id?: true
    detail_quantity?: true
    detail_price?: true
    detail_subtotal?: true
    is_used?: true
  }

  export type Transaction_detailCountAggregateInputType = {
    transaction_detail_id?: true
    transaction_id?: true
    ticket_id?: true
    detail_quantity?: true
    detail_price?: true
    detail_subtotal?: true
    is_used?: true
    _all?: true
  }

  export type Transaction_detailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_detail to aggregate.
     */
    where?: transaction_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_details to fetch.
     */
    orderBy?: transaction_detailOrderByWithRelationInput | transaction_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaction_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaction_details
    **/
    _count?: true | Transaction_detailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Transaction_detailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Transaction_detailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Transaction_detailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Transaction_detailMaxAggregateInputType
  }

  export type GetTransaction_detailAggregateType<T extends Transaction_detailAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction_detail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction_detail[P]>
      : GetScalarType<T[P], AggregateTransaction_detail[P]>
  }




  export type transaction_detailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_detailWhereInput
    orderBy?: transaction_detailOrderByWithAggregationInput | transaction_detailOrderByWithAggregationInput[]
    by: Transaction_detailScalarFieldEnum[] | Transaction_detailScalarFieldEnum
    having?: transaction_detailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Transaction_detailCountAggregateInputType | true
    _avg?: Transaction_detailAvgAggregateInputType
    _sum?: Transaction_detailSumAggregateInputType
    _min?: Transaction_detailMinAggregateInputType
    _max?: Transaction_detailMaxAggregateInputType
  }

  export type Transaction_detailGroupByOutputType = {
    transaction_detail_id: number
    transaction_id: number | null
    ticket_id: string | null
    detail_quantity: number
    detail_price: Decimal
    detail_subtotal: Decimal | null
    is_used: $Enums.TicketStatus
    _count: Transaction_detailCountAggregateOutputType | null
    _avg: Transaction_detailAvgAggregateOutputType | null
    _sum: Transaction_detailSumAggregateOutputType | null
    _min: Transaction_detailMinAggregateOutputType | null
    _max: Transaction_detailMaxAggregateOutputType | null
  }

  type GetTransaction_detailGroupByPayload<T extends transaction_detailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Transaction_detailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Transaction_detailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Transaction_detailGroupByOutputType[P]>
            : GetScalarType<T[P], Transaction_detailGroupByOutputType[P]>
        }
      >
    >


  export type transaction_detailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_detail_id?: boolean
    transaction_id?: boolean
    ticket_id?: boolean
    detail_quantity?: boolean
    detail_price?: boolean
    detail_subtotal?: boolean
    is_used?: boolean
    transaction?: boolean | transaction_detail$transactionArgs<ExtArgs>
    ticket?: boolean | transaction_detail$ticketArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_detail"]>



  export type transaction_detailSelectScalar = {
    transaction_detail_id?: boolean
    transaction_id?: boolean
    ticket_id?: boolean
    detail_quantity?: boolean
    detail_price?: boolean
    detail_subtotal?: boolean
    is_used?: boolean
  }

  export type transaction_detailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"transaction_detail_id" | "transaction_id" | "ticket_id" | "detail_quantity" | "detail_price" | "detail_subtotal" | "is_used", ExtArgs["result"]["transaction_detail"]>
  export type transaction_detailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transaction_detail$transactionArgs<ExtArgs>
    ticket?: boolean | transaction_detail$ticketArgs<ExtArgs>
  }

  export type $transaction_detailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction_detail"
    objects: {
      transaction: Prisma.$transactionPayload<ExtArgs> | null
      ticket: Prisma.$ticketPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      transaction_detail_id: number
      transaction_id: number | null
      ticket_id: string | null
      detail_quantity: number
      detail_price: Prisma.Decimal
      detail_subtotal: Prisma.Decimal | null
      is_used: $Enums.TicketStatus
    }, ExtArgs["result"]["transaction_detail"]>
    composites: {}
  }

  type transaction_detailGetPayload<S extends boolean | null | undefined | transaction_detailDefaultArgs> = $Result.GetResult<Prisma.$transaction_detailPayload, S>

  type transaction_detailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaction_detailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Transaction_detailCountAggregateInputType | true
    }

  export interface transaction_detailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction_detail'], meta: { name: 'transaction_detail' } }
    /**
     * Find zero or one Transaction_detail that matches the filter.
     * @param {transaction_detailFindUniqueArgs} args - Arguments to find a Transaction_detail
     * @example
     * // Get one Transaction_detail
     * const transaction_detail = await prisma.transaction_detail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaction_detailFindUniqueArgs>(args: SelectSubset<T, transaction_detailFindUniqueArgs<ExtArgs>>): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction_detail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaction_detailFindUniqueOrThrowArgs} args - Arguments to find a Transaction_detail
     * @example
     * // Get one Transaction_detail
     * const transaction_detail = await prisma.transaction_detail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaction_detailFindUniqueOrThrowArgs>(args: SelectSubset<T, transaction_detailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction_detail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_detailFindFirstArgs} args - Arguments to find a Transaction_detail
     * @example
     * // Get one Transaction_detail
     * const transaction_detail = await prisma.transaction_detail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaction_detailFindFirstArgs>(args?: SelectSubset<T, transaction_detailFindFirstArgs<ExtArgs>>): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction_detail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_detailFindFirstOrThrowArgs} args - Arguments to find a Transaction_detail
     * @example
     * // Get one Transaction_detail
     * const transaction_detail = await prisma.transaction_detail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaction_detailFindFirstOrThrowArgs>(args?: SelectSubset<T, transaction_detailFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaction_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_detailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaction_details
     * const transaction_details = await prisma.transaction_detail.findMany()
     * 
     * // Get first 10 Transaction_details
     * const transaction_details = await prisma.transaction_detail.findMany({ take: 10 })
     * 
     * // Only select the `transaction_detail_id`
     * const transaction_detailWithTransaction_detail_idOnly = await prisma.transaction_detail.findMany({ select: { transaction_detail_id: true } })
     * 
     */
    findMany<T extends transaction_detailFindManyArgs>(args?: SelectSubset<T, transaction_detailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction_detail.
     * @param {transaction_detailCreateArgs} args - Arguments to create a Transaction_detail.
     * @example
     * // Create one Transaction_detail
     * const Transaction_detail = await prisma.transaction_detail.create({
     *   data: {
     *     // ... data to create a Transaction_detail
     *   }
     * })
     * 
     */
    create<T extends transaction_detailCreateArgs>(args: SelectSubset<T, transaction_detailCreateArgs<ExtArgs>>): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaction_details.
     * @param {transaction_detailCreateManyArgs} args - Arguments to create many Transaction_details.
     * @example
     * // Create many Transaction_details
     * const transaction_detail = await prisma.transaction_detail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaction_detailCreateManyArgs>(args?: SelectSubset<T, transaction_detailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction_detail.
     * @param {transaction_detailDeleteArgs} args - Arguments to delete one Transaction_detail.
     * @example
     * // Delete one Transaction_detail
     * const Transaction_detail = await prisma.transaction_detail.delete({
     *   where: {
     *     // ... filter to delete one Transaction_detail
     *   }
     * })
     * 
     */
    delete<T extends transaction_detailDeleteArgs>(args: SelectSubset<T, transaction_detailDeleteArgs<ExtArgs>>): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction_detail.
     * @param {transaction_detailUpdateArgs} args - Arguments to update one Transaction_detail.
     * @example
     * // Update one Transaction_detail
     * const transaction_detail = await prisma.transaction_detail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaction_detailUpdateArgs>(args: SelectSubset<T, transaction_detailUpdateArgs<ExtArgs>>): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaction_details.
     * @param {transaction_detailDeleteManyArgs} args - Arguments to filter Transaction_details to delete.
     * @example
     * // Delete a few Transaction_details
     * const { count } = await prisma.transaction_detail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaction_detailDeleteManyArgs>(args?: SelectSubset<T, transaction_detailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaction_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_detailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaction_details
     * const transaction_detail = await prisma.transaction_detail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaction_detailUpdateManyArgs>(args: SelectSubset<T, transaction_detailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction_detail.
     * @param {transaction_detailUpsertArgs} args - Arguments to update or create a Transaction_detail.
     * @example
     * // Update or create a Transaction_detail
     * const transaction_detail = await prisma.transaction_detail.upsert({
     *   create: {
     *     // ... data to create a Transaction_detail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction_detail we want to update
     *   }
     * })
     */
    upsert<T extends transaction_detailUpsertArgs>(args: SelectSubset<T, transaction_detailUpsertArgs<ExtArgs>>): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaction_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_detailCountArgs} args - Arguments to filter Transaction_details to count.
     * @example
     * // Count the number of Transaction_details
     * const count = await prisma.transaction_detail.count({
     *   where: {
     *     // ... the filter for the Transaction_details we want to count
     *   }
     * })
    **/
    count<T extends transaction_detailCountArgs>(
      args?: Subset<T, transaction_detailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Transaction_detailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_detailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Transaction_detailAggregateArgs>(args: Subset<T, Transaction_detailAggregateArgs>): Prisma.PrismaPromise<GetTransaction_detailAggregateType<T>>

    /**
     * Group by Transaction_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_detailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transaction_detailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaction_detailGroupByArgs['orderBy'] }
        : { orderBy?: transaction_detailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transaction_detailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaction_detailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction_detail model
   */
  readonly fields: transaction_detailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction_detail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaction_detailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends transaction_detail$transactionArgs<ExtArgs> = {}>(args?: Subset<T, transaction_detail$transactionArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ticket<T extends transaction_detail$ticketArgs<ExtArgs> = {}>(args?: Subset<T, transaction_detail$ticketArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaction_detail model
   */
  interface transaction_detailFieldRefs {
    readonly transaction_detail_id: FieldRef<"transaction_detail", 'Int'>
    readonly transaction_id: FieldRef<"transaction_detail", 'Int'>
    readonly ticket_id: FieldRef<"transaction_detail", 'String'>
    readonly detail_quantity: FieldRef<"transaction_detail", 'Int'>
    readonly detail_price: FieldRef<"transaction_detail", 'Decimal'>
    readonly detail_subtotal: FieldRef<"transaction_detail", 'Decimal'>
    readonly is_used: FieldRef<"transaction_detail", 'TicketStatus'>
  }
    

  // Custom InputTypes
  /**
   * transaction_detail findUnique
   */
  export type transaction_detailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * Filter, which transaction_detail to fetch.
     */
    where: transaction_detailWhereUniqueInput
  }

  /**
   * transaction_detail findUniqueOrThrow
   */
  export type transaction_detailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * Filter, which transaction_detail to fetch.
     */
    where: transaction_detailWhereUniqueInput
  }

  /**
   * transaction_detail findFirst
   */
  export type transaction_detailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * Filter, which transaction_detail to fetch.
     */
    where?: transaction_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_details to fetch.
     */
    orderBy?: transaction_detailOrderByWithRelationInput | transaction_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_details.
     */
    cursor?: transaction_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_details.
     */
    distinct?: Transaction_detailScalarFieldEnum | Transaction_detailScalarFieldEnum[]
  }

  /**
   * transaction_detail findFirstOrThrow
   */
  export type transaction_detailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * Filter, which transaction_detail to fetch.
     */
    where?: transaction_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_details to fetch.
     */
    orderBy?: transaction_detailOrderByWithRelationInput | transaction_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_details.
     */
    cursor?: transaction_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_details.
     */
    distinct?: Transaction_detailScalarFieldEnum | Transaction_detailScalarFieldEnum[]
  }

  /**
   * transaction_detail findMany
   */
  export type transaction_detailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * Filter, which transaction_details to fetch.
     */
    where?: transaction_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_details to fetch.
     */
    orderBy?: transaction_detailOrderByWithRelationInput | transaction_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaction_details.
     */
    cursor?: transaction_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_details.
     */
    skip?: number
    distinct?: Transaction_detailScalarFieldEnum | Transaction_detailScalarFieldEnum[]
  }

  /**
   * transaction_detail create
   */
  export type transaction_detailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction_detail.
     */
    data: XOR<transaction_detailCreateInput, transaction_detailUncheckedCreateInput>
  }

  /**
   * transaction_detail createMany
   */
  export type transaction_detailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaction_details.
     */
    data: transaction_detailCreateManyInput | transaction_detailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction_detail update
   */
  export type transaction_detailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction_detail.
     */
    data: XOR<transaction_detailUpdateInput, transaction_detailUncheckedUpdateInput>
    /**
     * Choose, which transaction_detail to update.
     */
    where: transaction_detailWhereUniqueInput
  }

  /**
   * transaction_detail updateMany
   */
  export type transaction_detailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaction_details.
     */
    data: XOR<transaction_detailUpdateManyMutationInput, transaction_detailUncheckedUpdateManyInput>
    /**
     * Filter which transaction_details to update
     */
    where?: transaction_detailWhereInput
    /**
     * Limit how many transaction_details to update.
     */
    limit?: number
  }

  /**
   * transaction_detail upsert
   */
  export type transaction_detailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction_detail to update in case it exists.
     */
    where: transaction_detailWhereUniqueInput
    /**
     * In case the transaction_detail found by the `where` argument doesn't exist, create a new transaction_detail with this data.
     */
    create: XOR<transaction_detailCreateInput, transaction_detailUncheckedCreateInput>
    /**
     * In case the transaction_detail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaction_detailUpdateInput, transaction_detailUncheckedUpdateInput>
  }

  /**
   * transaction_detail delete
   */
  export type transaction_detailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * Filter which transaction_detail to delete.
     */
    where: transaction_detailWhereUniqueInput
  }

  /**
   * transaction_detail deleteMany
   */
  export type transaction_detailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_details to delete
     */
    where?: transaction_detailWhereInput
    /**
     * Limit how many transaction_details to delete.
     */
    limit?: number
  }

  /**
   * transaction_detail.transaction
   */
  export type transaction_detail$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
  }

  /**
   * transaction_detail.ticket
   */
  export type transaction_detail$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    where?: ticketWhereInput
  }

  /**
   * transaction_detail without action
   */
  export type transaction_detailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_detail
     */
    omit?: transaction_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_detailInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone_number: string | null
    address: string | null
    role: $Enums.Role | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone_number: string | null
    address: string | null
    role: $Enums.Role | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    name: number
    email: number
    password: number
    phone_number: number
    address: number
    role: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    phone_number?: true
    address?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    phone_number?: true
    address?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    phone_number?: true
    address?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: string
    name: string
    email: string
    password: string
    phone_number: string | null
    address: string | null
    role: $Enums.Role
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    address?: boolean
    role?: boolean
    reviews?: boolean | users$reviewsArgs<ExtArgs>
    transactions?: boolean | users$transactionsArgs<ExtArgs>
    temp_orders?: boolean | users$temp_ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    user_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    address?: boolean
    role?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "email" | "password" | "phone_number" | "address" | "role", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | users$reviewsArgs<ExtArgs>
    transactions?: boolean | users$transactionsArgs<ExtArgs>
    temp_orders?: boolean | users$temp_ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      reviews: Prisma.$reviewsPayload<ExtArgs>[]
      transactions: Prisma.$transactionPayload<ExtArgs>[]
      temp_orders: Prisma.$temp_orderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      name: string
      email: string
      password: string
      phone_number: string | null
      address: string | null
      role: $Enums.Role
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends users$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, users$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends users$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, users$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    temp_orders<T extends users$temp_ordersArgs<ExtArgs> = {}>(args?: Subset<T, users$temp_ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$temp_orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly phone_number: FieldRef<"users", 'String'>
    readonly address: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.reviews
   */
  export type users$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    cursor?: reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * users.transactions
   */
  export type users$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * users.temp_orders
   */
  export type users$temp_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order
     */
    select?: temp_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order
     */
    omit?: temp_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_orderInclude<ExtArgs> | null
    where?: temp_orderWhereInput
    orderBy?: temp_orderOrderByWithRelationInput | temp_orderOrderByWithRelationInput[]
    cursor?: temp_orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Temp_orderScalarFieldEnum | Temp_orderScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model village
   */

  export type AggregateVillage = {
    _count: VillageCountAggregateOutputType | null
    _min: VillageMinAggregateOutputType | null
    _max: VillageMaxAggregateOutputType | null
  }

  export type VillageMinAggregateOutputType = {
    village_id: string | null
    village_name: string | null
    village_city: string | null
  }

  export type VillageMaxAggregateOutputType = {
    village_id: string | null
    village_name: string | null
    village_city: string | null
  }

  export type VillageCountAggregateOutputType = {
    village_id: number
    village_name: number
    village_city: number
    _all: number
  }


  export type VillageMinAggregateInputType = {
    village_id?: true
    village_name?: true
    village_city?: true
  }

  export type VillageMaxAggregateInputType = {
    village_id?: true
    village_name?: true
    village_city?: true
  }

  export type VillageCountAggregateInputType = {
    village_id?: true
    village_name?: true
    village_city?: true
    _all?: true
  }

  export type VillageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which village to aggregate.
     */
    where?: villageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of villages to fetch.
     */
    orderBy?: villageOrderByWithRelationInput | villageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: villageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` villages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned villages
    **/
    _count?: true | VillageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VillageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VillageMaxAggregateInputType
  }

  export type GetVillageAggregateType<T extends VillageAggregateArgs> = {
        [P in keyof T & keyof AggregateVillage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVillage[P]>
      : GetScalarType<T[P], AggregateVillage[P]>
  }




  export type villageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: villageWhereInput
    orderBy?: villageOrderByWithAggregationInput | villageOrderByWithAggregationInput[]
    by: VillageScalarFieldEnum[] | VillageScalarFieldEnum
    having?: villageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VillageCountAggregateInputType | true
    _min?: VillageMinAggregateInputType
    _max?: VillageMaxAggregateInputType
  }

  export type VillageGroupByOutputType = {
    village_id: string
    village_name: string
    village_city: string
    _count: VillageCountAggregateOutputType | null
    _min: VillageMinAggregateOutputType | null
    _max: VillageMaxAggregateOutputType | null
  }

  type GetVillageGroupByPayload<T extends villageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VillageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VillageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VillageGroupByOutputType[P]>
            : GetScalarType<T[P], VillageGroupByOutputType[P]>
        }
      >
    >


  export type villageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    village_id?: boolean
    village_name?: boolean
    village_city?: boolean
    spots?: boolean | village$spotsArgs<ExtArgs>
    _count?: boolean | VillageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["village"]>



  export type villageSelectScalar = {
    village_id?: boolean
    village_name?: boolean
    village_city?: boolean
  }

  export type villageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"village_id" | "village_name" | "village_city", ExtArgs["result"]["village"]>
  export type villageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spots?: boolean | village$spotsArgs<ExtArgs>
    _count?: boolean | VillageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $villagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "village"
    objects: {
      spots: Prisma.$spot_tourismPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      village_id: string
      village_name: string
      village_city: string
    }, ExtArgs["result"]["village"]>
    composites: {}
  }

  type villageGetPayload<S extends boolean | null | undefined | villageDefaultArgs> = $Result.GetResult<Prisma.$villagePayload, S>

  type villageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<villageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VillageCountAggregateInputType | true
    }

  export interface villageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['village'], meta: { name: 'village' } }
    /**
     * Find zero or one Village that matches the filter.
     * @param {villageFindUniqueArgs} args - Arguments to find a Village
     * @example
     * // Get one Village
     * const village = await prisma.village.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends villageFindUniqueArgs>(args: SelectSubset<T, villageFindUniqueArgs<ExtArgs>>): Prisma__villageClient<$Result.GetResult<Prisma.$villagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Village that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {villageFindUniqueOrThrowArgs} args - Arguments to find a Village
     * @example
     * // Get one Village
     * const village = await prisma.village.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends villageFindUniqueOrThrowArgs>(args: SelectSubset<T, villageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__villageClient<$Result.GetResult<Prisma.$villagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Village that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {villageFindFirstArgs} args - Arguments to find a Village
     * @example
     * // Get one Village
     * const village = await prisma.village.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends villageFindFirstArgs>(args?: SelectSubset<T, villageFindFirstArgs<ExtArgs>>): Prisma__villageClient<$Result.GetResult<Prisma.$villagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Village that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {villageFindFirstOrThrowArgs} args - Arguments to find a Village
     * @example
     * // Get one Village
     * const village = await prisma.village.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends villageFindFirstOrThrowArgs>(args?: SelectSubset<T, villageFindFirstOrThrowArgs<ExtArgs>>): Prisma__villageClient<$Result.GetResult<Prisma.$villagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Villages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {villageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Villages
     * const villages = await prisma.village.findMany()
     * 
     * // Get first 10 Villages
     * const villages = await prisma.village.findMany({ take: 10 })
     * 
     * // Only select the `village_id`
     * const villageWithVillage_idOnly = await prisma.village.findMany({ select: { village_id: true } })
     * 
     */
    findMany<T extends villageFindManyArgs>(args?: SelectSubset<T, villageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$villagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Village.
     * @param {villageCreateArgs} args - Arguments to create a Village.
     * @example
     * // Create one Village
     * const Village = await prisma.village.create({
     *   data: {
     *     // ... data to create a Village
     *   }
     * })
     * 
     */
    create<T extends villageCreateArgs>(args: SelectSubset<T, villageCreateArgs<ExtArgs>>): Prisma__villageClient<$Result.GetResult<Prisma.$villagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Villages.
     * @param {villageCreateManyArgs} args - Arguments to create many Villages.
     * @example
     * // Create many Villages
     * const village = await prisma.village.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends villageCreateManyArgs>(args?: SelectSubset<T, villageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Village.
     * @param {villageDeleteArgs} args - Arguments to delete one Village.
     * @example
     * // Delete one Village
     * const Village = await prisma.village.delete({
     *   where: {
     *     // ... filter to delete one Village
     *   }
     * })
     * 
     */
    delete<T extends villageDeleteArgs>(args: SelectSubset<T, villageDeleteArgs<ExtArgs>>): Prisma__villageClient<$Result.GetResult<Prisma.$villagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Village.
     * @param {villageUpdateArgs} args - Arguments to update one Village.
     * @example
     * // Update one Village
     * const village = await prisma.village.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends villageUpdateArgs>(args: SelectSubset<T, villageUpdateArgs<ExtArgs>>): Prisma__villageClient<$Result.GetResult<Prisma.$villagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Villages.
     * @param {villageDeleteManyArgs} args - Arguments to filter Villages to delete.
     * @example
     * // Delete a few Villages
     * const { count } = await prisma.village.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends villageDeleteManyArgs>(args?: SelectSubset<T, villageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Villages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {villageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Villages
     * const village = await prisma.village.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends villageUpdateManyArgs>(args: SelectSubset<T, villageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Village.
     * @param {villageUpsertArgs} args - Arguments to update or create a Village.
     * @example
     * // Update or create a Village
     * const village = await prisma.village.upsert({
     *   create: {
     *     // ... data to create a Village
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Village we want to update
     *   }
     * })
     */
    upsert<T extends villageUpsertArgs>(args: SelectSubset<T, villageUpsertArgs<ExtArgs>>): Prisma__villageClient<$Result.GetResult<Prisma.$villagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Villages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {villageCountArgs} args - Arguments to filter Villages to count.
     * @example
     * // Count the number of Villages
     * const count = await prisma.village.count({
     *   where: {
     *     // ... the filter for the Villages we want to count
     *   }
     * })
    **/
    count<T extends villageCountArgs>(
      args?: Subset<T, villageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VillageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Village.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VillageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VillageAggregateArgs>(args: Subset<T, VillageAggregateArgs>): Prisma.PrismaPromise<GetVillageAggregateType<T>>

    /**
     * Group by Village.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {villageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends villageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: villageGroupByArgs['orderBy'] }
        : { orderBy?: villageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, villageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVillageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the village model
   */
  readonly fields: villageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for village.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__villageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spots<T extends village$spotsArgs<ExtArgs> = {}>(args?: Subset<T, village$spotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spot_tourismPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the village model
   */
  interface villageFieldRefs {
    readonly village_id: FieldRef<"village", 'String'>
    readonly village_name: FieldRef<"village", 'String'>
    readonly village_city: FieldRef<"village", 'String'>
  }
    

  // Custom InputTypes
  /**
   * village findUnique
   */
  export type villageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the village
     */
    select?: villageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the village
     */
    omit?: villageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villageInclude<ExtArgs> | null
    /**
     * Filter, which village to fetch.
     */
    where: villageWhereUniqueInput
  }

  /**
   * village findUniqueOrThrow
   */
  export type villageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the village
     */
    select?: villageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the village
     */
    omit?: villageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villageInclude<ExtArgs> | null
    /**
     * Filter, which village to fetch.
     */
    where: villageWhereUniqueInput
  }

  /**
   * village findFirst
   */
  export type villageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the village
     */
    select?: villageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the village
     */
    omit?: villageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villageInclude<ExtArgs> | null
    /**
     * Filter, which village to fetch.
     */
    where?: villageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of villages to fetch.
     */
    orderBy?: villageOrderByWithRelationInput | villageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for villages.
     */
    cursor?: villageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` villages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of villages.
     */
    distinct?: VillageScalarFieldEnum | VillageScalarFieldEnum[]
  }

  /**
   * village findFirstOrThrow
   */
  export type villageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the village
     */
    select?: villageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the village
     */
    omit?: villageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villageInclude<ExtArgs> | null
    /**
     * Filter, which village to fetch.
     */
    where?: villageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of villages to fetch.
     */
    orderBy?: villageOrderByWithRelationInput | villageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for villages.
     */
    cursor?: villageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` villages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of villages.
     */
    distinct?: VillageScalarFieldEnum | VillageScalarFieldEnum[]
  }

  /**
   * village findMany
   */
  export type villageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the village
     */
    select?: villageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the village
     */
    omit?: villageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villageInclude<ExtArgs> | null
    /**
     * Filter, which villages to fetch.
     */
    where?: villageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of villages to fetch.
     */
    orderBy?: villageOrderByWithRelationInput | villageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing villages.
     */
    cursor?: villageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` villages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` villages.
     */
    skip?: number
    distinct?: VillageScalarFieldEnum | VillageScalarFieldEnum[]
  }

  /**
   * village create
   */
  export type villageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the village
     */
    select?: villageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the village
     */
    omit?: villageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villageInclude<ExtArgs> | null
    /**
     * The data needed to create a village.
     */
    data: XOR<villageCreateInput, villageUncheckedCreateInput>
  }

  /**
   * village createMany
   */
  export type villageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many villages.
     */
    data: villageCreateManyInput | villageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * village update
   */
  export type villageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the village
     */
    select?: villageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the village
     */
    omit?: villageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villageInclude<ExtArgs> | null
    /**
     * The data needed to update a village.
     */
    data: XOR<villageUpdateInput, villageUncheckedUpdateInput>
    /**
     * Choose, which village to update.
     */
    where: villageWhereUniqueInput
  }

  /**
   * village updateMany
   */
  export type villageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update villages.
     */
    data: XOR<villageUpdateManyMutationInput, villageUncheckedUpdateManyInput>
    /**
     * Filter which villages to update
     */
    where?: villageWhereInput
    /**
     * Limit how many villages to update.
     */
    limit?: number
  }

  /**
   * village upsert
   */
  export type villageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the village
     */
    select?: villageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the village
     */
    omit?: villageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villageInclude<ExtArgs> | null
    /**
     * The filter to search for the village to update in case it exists.
     */
    where: villageWhereUniqueInput
    /**
     * In case the village found by the `where` argument doesn't exist, create a new village with this data.
     */
    create: XOR<villageCreateInput, villageUncheckedCreateInput>
    /**
     * In case the village was found with the provided `where` argument, update it with this data.
     */
    update: XOR<villageUpdateInput, villageUncheckedUpdateInput>
  }

  /**
   * village delete
   */
  export type villageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the village
     */
    select?: villageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the village
     */
    omit?: villageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villageInclude<ExtArgs> | null
    /**
     * Filter which village to delete.
     */
    where: villageWhereUniqueInput
  }

  /**
   * village deleteMany
   */
  export type villageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which villages to delete
     */
    where?: villageWhereInput
    /**
     * Limit how many villages to delete.
     */
    limit?: number
  }

  /**
   * village.spots
   */
  export type village$spotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spot_tourism
     */
    select?: spot_tourismSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spot_tourism
     */
    omit?: spot_tourismOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spot_tourismInclude<ExtArgs> | null
    where?: spot_tourismWhereInput
    orderBy?: spot_tourismOrderByWithRelationInput | spot_tourismOrderByWithRelationInput[]
    cursor?: spot_tourismWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Spot_tourismScalarFieldEnum | Spot_tourismScalarFieldEnum[]
  }

  /**
   * village without action
   */
  export type villageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the village
     */
    select?: villageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the village
     */
    omit?: villageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: villageInclude<ExtArgs> | null
  }


  /**
   * Model temp_order
   */

  export type AggregateTemp_order = {
    _count: Temp_orderCountAggregateOutputType | null
    _avg: Temp_orderAvgAggregateOutputType | null
    _sum: Temp_orderSumAggregateOutputType | null
    _min: Temp_orderMinAggregateOutputType | null
    _max: Temp_orderMaxAggregateOutputType | null
  }

  export type Temp_orderAvgAggregateOutputType = {
    temp_order_id: number | null
  }

  export type Temp_orderSumAggregateOutputType = {
    temp_order_id: number | null
  }

  export type Temp_orderMinAggregateOutputType = {
    temp_order_id: number | null
    order_id: string | null
    user_id: string | null
    visit_date: Date | null
    created_at: Date | null
    status: $Enums.TransactionStatus | null
  }

  export type Temp_orderMaxAggregateOutputType = {
    temp_order_id: number | null
    order_id: string | null
    user_id: string | null
    visit_date: Date | null
    created_at: Date | null
    status: $Enums.TransactionStatus | null
  }

  export type Temp_orderCountAggregateOutputType = {
    temp_order_id: number
    order_id: number
    user_id: number
    visit_date: number
    created_at: number
    status: number
    _all: number
  }


  export type Temp_orderAvgAggregateInputType = {
    temp_order_id?: true
  }

  export type Temp_orderSumAggregateInputType = {
    temp_order_id?: true
  }

  export type Temp_orderMinAggregateInputType = {
    temp_order_id?: true
    order_id?: true
    user_id?: true
    visit_date?: true
    created_at?: true
    status?: true
  }

  export type Temp_orderMaxAggregateInputType = {
    temp_order_id?: true
    order_id?: true
    user_id?: true
    visit_date?: true
    created_at?: true
    status?: true
  }

  export type Temp_orderCountAggregateInputType = {
    temp_order_id?: true
    order_id?: true
    user_id?: true
    visit_date?: true
    created_at?: true
    status?: true
    _all?: true
  }

  export type Temp_orderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which temp_order to aggregate.
     */
    where?: temp_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temp_orders to fetch.
     */
    orderBy?: temp_orderOrderByWithRelationInput | temp_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: temp_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temp_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temp_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned temp_orders
    **/
    _count?: true | Temp_orderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Temp_orderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Temp_orderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Temp_orderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Temp_orderMaxAggregateInputType
  }

  export type GetTemp_orderAggregateType<T extends Temp_orderAggregateArgs> = {
        [P in keyof T & keyof AggregateTemp_order]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemp_order[P]>
      : GetScalarType<T[P], AggregateTemp_order[P]>
  }




  export type temp_orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: temp_orderWhereInput
    orderBy?: temp_orderOrderByWithAggregationInput | temp_orderOrderByWithAggregationInput[]
    by: Temp_orderScalarFieldEnum[] | Temp_orderScalarFieldEnum
    having?: temp_orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Temp_orderCountAggregateInputType | true
    _avg?: Temp_orderAvgAggregateInputType
    _sum?: Temp_orderSumAggregateInputType
    _min?: Temp_orderMinAggregateInputType
    _max?: Temp_orderMaxAggregateInputType
  }

  export type Temp_orderGroupByOutputType = {
    temp_order_id: number
    order_id: string
    user_id: string
    visit_date: Date
    created_at: Date
    status: $Enums.TransactionStatus
    _count: Temp_orderCountAggregateOutputType | null
    _avg: Temp_orderAvgAggregateOutputType | null
    _sum: Temp_orderSumAggregateOutputType | null
    _min: Temp_orderMinAggregateOutputType | null
    _max: Temp_orderMaxAggregateOutputType | null
  }

  type GetTemp_orderGroupByPayload<T extends temp_orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Temp_orderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Temp_orderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Temp_orderGroupByOutputType[P]>
            : GetScalarType<T[P], Temp_orderGroupByOutputType[P]>
        }
      >
    >


  export type temp_orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    temp_order_id?: boolean
    order_id?: boolean
    user_id?: boolean
    visit_date?: boolean
    created_at?: boolean
    status?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    details?: boolean | temp_order$detailsArgs<ExtArgs>
    _count?: boolean | Temp_orderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["temp_order"]>



  export type temp_orderSelectScalar = {
    temp_order_id?: boolean
    order_id?: boolean
    user_id?: boolean
    visit_date?: boolean
    created_at?: boolean
    status?: boolean
  }

  export type temp_orderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"temp_order_id" | "order_id" | "user_id" | "visit_date" | "created_at" | "status", ExtArgs["result"]["temp_order"]>
  export type temp_orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    details?: boolean | temp_order$detailsArgs<ExtArgs>
    _count?: boolean | Temp_orderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $temp_orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "temp_order"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      /**
       * Relasi ke temp_order_detail - 1 temp_order bisa punya banyak detail
       */
      details: Prisma.$temp_order_detailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      temp_order_id: number
      /**
       * Digunakan sebagai kode transaksi yang akan dikaitkan dengan Midtrans
       */
      order_id: string
      /**
       * Relasi ke tabel `users` - 1 user bisa punya banyak temp_order
       */
      user_id: string
      /**
       * Tanggal kunjungan yang dipilih user
       */
      visit_date: Date
      /**
       * Waktu dibuatnya order
       */
      created_at: Date
      /**
       * Status transaksi sementara, default: pending
       */
      status: $Enums.TransactionStatus
    }, ExtArgs["result"]["temp_order"]>
    composites: {}
  }

  type temp_orderGetPayload<S extends boolean | null | undefined | temp_orderDefaultArgs> = $Result.GetResult<Prisma.$temp_orderPayload, S>

  type temp_orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<temp_orderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Temp_orderCountAggregateInputType | true
    }

  export interface temp_orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['temp_order'], meta: { name: 'temp_order' } }
    /**
     * Find zero or one Temp_order that matches the filter.
     * @param {temp_orderFindUniqueArgs} args - Arguments to find a Temp_order
     * @example
     * // Get one Temp_order
     * const temp_order = await prisma.temp_order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends temp_orderFindUniqueArgs>(args: SelectSubset<T, temp_orderFindUniqueArgs<ExtArgs>>): Prisma__temp_orderClient<$Result.GetResult<Prisma.$temp_orderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Temp_order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {temp_orderFindUniqueOrThrowArgs} args - Arguments to find a Temp_order
     * @example
     * // Get one Temp_order
     * const temp_order = await prisma.temp_order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends temp_orderFindUniqueOrThrowArgs>(args: SelectSubset<T, temp_orderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__temp_orderClient<$Result.GetResult<Prisma.$temp_orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Temp_order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_orderFindFirstArgs} args - Arguments to find a Temp_order
     * @example
     * // Get one Temp_order
     * const temp_order = await prisma.temp_order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends temp_orderFindFirstArgs>(args?: SelectSubset<T, temp_orderFindFirstArgs<ExtArgs>>): Prisma__temp_orderClient<$Result.GetResult<Prisma.$temp_orderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Temp_order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_orderFindFirstOrThrowArgs} args - Arguments to find a Temp_order
     * @example
     * // Get one Temp_order
     * const temp_order = await prisma.temp_order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends temp_orderFindFirstOrThrowArgs>(args?: SelectSubset<T, temp_orderFindFirstOrThrowArgs<ExtArgs>>): Prisma__temp_orderClient<$Result.GetResult<Prisma.$temp_orderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Temp_orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_orderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Temp_orders
     * const temp_orders = await prisma.temp_order.findMany()
     * 
     * // Get first 10 Temp_orders
     * const temp_orders = await prisma.temp_order.findMany({ take: 10 })
     * 
     * // Only select the `temp_order_id`
     * const temp_orderWithTemp_order_idOnly = await prisma.temp_order.findMany({ select: { temp_order_id: true } })
     * 
     */
    findMany<T extends temp_orderFindManyArgs>(args?: SelectSubset<T, temp_orderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$temp_orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Temp_order.
     * @param {temp_orderCreateArgs} args - Arguments to create a Temp_order.
     * @example
     * // Create one Temp_order
     * const Temp_order = await prisma.temp_order.create({
     *   data: {
     *     // ... data to create a Temp_order
     *   }
     * })
     * 
     */
    create<T extends temp_orderCreateArgs>(args: SelectSubset<T, temp_orderCreateArgs<ExtArgs>>): Prisma__temp_orderClient<$Result.GetResult<Prisma.$temp_orderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Temp_orders.
     * @param {temp_orderCreateManyArgs} args - Arguments to create many Temp_orders.
     * @example
     * // Create many Temp_orders
     * const temp_order = await prisma.temp_order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends temp_orderCreateManyArgs>(args?: SelectSubset<T, temp_orderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Temp_order.
     * @param {temp_orderDeleteArgs} args - Arguments to delete one Temp_order.
     * @example
     * // Delete one Temp_order
     * const Temp_order = await prisma.temp_order.delete({
     *   where: {
     *     // ... filter to delete one Temp_order
     *   }
     * })
     * 
     */
    delete<T extends temp_orderDeleteArgs>(args: SelectSubset<T, temp_orderDeleteArgs<ExtArgs>>): Prisma__temp_orderClient<$Result.GetResult<Prisma.$temp_orderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Temp_order.
     * @param {temp_orderUpdateArgs} args - Arguments to update one Temp_order.
     * @example
     * // Update one Temp_order
     * const temp_order = await prisma.temp_order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends temp_orderUpdateArgs>(args: SelectSubset<T, temp_orderUpdateArgs<ExtArgs>>): Prisma__temp_orderClient<$Result.GetResult<Prisma.$temp_orderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Temp_orders.
     * @param {temp_orderDeleteManyArgs} args - Arguments to filter Temp_orders to delete.
     * @example
     * // Delete a few Temp_orders
     * const { count } = await prisma.temp_order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends temp_orderDeleteManyArgs>(args?: SelectSubset<T, temp_orderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Temp_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Temp_orders
     * const temp_order = await prisma.temp_order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends temp_orderUpdateManyArgs>(args: SelectSubset<T, temp_orderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Temp_order.
     * @param {temp_orderUpsertArgs} args - Arguments to update or create a Temp_order.
     * @example
     * // Update or create a Temp_order
     * const temp_order = await prisma.temp_order.upsert({
     *   create: {
     *     // ... data to create a Temp_order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Temp_order we want to update
     *   }
     * })
     */
    upsert<T extends temp_orderUpsertArgs>(args: SelectSubset<T, temp_orderUpsertArgs<ExtArgs>>): Prisma__temp_orderClient<$Result.GetResult<Prisma.$temp_orderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Temp_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_orderCountArgs} args - Arguments to filter Temp_orders to count.
     * @example
     * // Count the number of Temp_orders
     * const count = await prisma.temp_order.count({
     *   where: {
     *     // ... the filter for the Temp_orders we want to count
     *   }
     * })
    **/
    count<T extends temp_orderCountArgs>(
      args?: Subset<T, temp_orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Temp_orderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Temp_order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Temp_orderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Temp_orderAggregateArgs>(args: Subset<T, Temp_orderAggregateArgs>): Prisma.PrismaPromise<GetTemp_orderAggregateType<T>>

    /**
     * Group by Temp_order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_orderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends temp_orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: temp_orderGroupByArgs['orderBy'] }
        : { orderBy?: temp_orderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, temp_orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemp_orderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the temp_order model
   */
  readonly fields: temp_orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for temp_order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__temp_orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    details<T extends temp_order$detailsArgs<ExtArgs> = {}>(args?: Subset<T, temp_order$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$temp_order_detailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the temp_order model
   */
  interface temp_orderFieldRefs {
    readonly temp_order_id: FieldRef<"temp_order", 'Int'>
    readonly order_id: FieldRef<"temp_order", 'String'>
    readonly user_id: FieldRef<"temp_order", 'String'>
    readonly visit_date: FieldRef<"temp_order", 'DateTime'>
    readonly created_at: FieldRef<"temp_order", 'DateTime'>
    readonly status: FieldRef<"temp_order", 'TransactionStatus'>
  }
    

  // Custom InputTypes
  /**
   * temp_order findUnique
   */
  export type temp_orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order
     */
    select?: temp_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order
     */
    omit?: temp_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_orderInclude<ExtArgs> | null
    /**
     * Filter, which temp_order to fetch.
     */
    where: temp_orderWhereUniqueInput
  }

  /**
   * temp_order findUniqueOrThrow
   */
  export type temp_orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order
     */
    select?: temp_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order
     */
    omit?: temp_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_orderInclude<ExtArgs> | null
    /**
     * Filter, which temp_order to fetch.
     */
    where: temp_orderWhereUniqueInput
  }

  /**
   * temp_order findFirst
   */
  export type temp_orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order
     */
    select?: temp_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order
     */
    omit?: temp_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_orderInclude<ExtArgs> | null
    /**
     * Filter, which temp_order to fetch.
     */
    where?: temp_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temp_orders to fetch.
     */
    orderBy?: temp_orderOrderByWithRelationInput | temp_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for temp_orders.
     */
    cursor?: temp_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temp_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temp_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of temp_orders.
     */
    distinct?: Temp_orderScalarFieldEnum | Temp_orderScalarFieldEnum[]
  }

  /**
   * temp_order findFirstOrThrow
   */
  export type temp_orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order
     */
    select?: temp_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order
     */
    omit?: temp_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_orderInclude<ExtArgs> | null
    /**
     * Filter, which temp_order to fetch.
     */
    where?: temp_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temp_orders to fetch.
     */
    orderBy?: temp_orderOrderByWithRelationInput | temp_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for temp_orders.
     */
    cursor?: temp_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temp_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temp_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of temp_orders.
     */
    distinct?: Temp_orderScalarFieldEnum | Temp_orderScalarFieldEnum[]
  }

  /**
   * temp_order findMany
   */
  export type temp_orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order
     */
    select?: temp_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order
     */
    omit?: temp_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_orderInclude<ExtArgs> | null
    /**
     * Filter, which temp_orders to fetch.
     */
    where?: temp_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temp_orders to fetch.
     */
    orderBy?: temp_orderOrderByWithRelationInput | temp_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing temp_orders.
     */
    cursor?: temp_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temp_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temp_orders.
     */
    skip?: number
    distinct?: Temp_orderScalarFieldEnum | Temp_orderScalarFieldEnum[]
  }

  /**
   * temp_order create
   */
  export type temp_orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order
     */
    select?: temp_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order
     */
    omit?: temp_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_orderInclude<ExtArgs> | null
    /**
     * The data needed to create a temp_order.
     */
    data: XOR<temp_orderCreateInput, temp_orderUncheckedCreateInput>
  }

  /**
   * temp_order createMany
   */
  export type temp_orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many temp_orders.
     */
    data: temp_orderCreateManyInput | temp_orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * temp_order update
   */
  export type temp_orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order
     */
    select?: temp_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order
     */
    omit?: temp_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_orderInclude<ExtArgs> | null
    /**
     * The data needed to update a temp_order.
     */
    data: XOR<temp_orderUpdateInput, temp_orderUncheckedUpdateInput>
    /**
     * Choose, which temp_order to update.
     */
    where: temp_orderWhereUniqueInput
  }

  /**
   * temp_order updateMany
   */
  export type temp_orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update temp_orders.
     */
    data: XOR<temp_orderUpdateManyMutationInput, temp_orderUncheckedUpdateManyInput>
    /**
     * Filter which temp_orders to update
     */
    where?: temp_orderWhereInput
    /**
     * Limit how many temp_orders to update.
     */
    limit?: number
  }

  /**
   * temp_order upsert
   */
  export type temp_orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order
     */
    select?: temp_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order
     */
    omit?: temp_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_orderInclude<ExtArgs> | null
    /**
     * The filter to search for the temp_order to update in case it exists.
     */
    where: temp_orderWhereUniqueInput
    /**
     * In case the temp_order found by the `where` argument doesn't exist, create a new temp_order with this data.
     */
    create: XOR<temp_orderCreateInput, temp_orderUncheckedCreateInput>
    /**
     * In case the temp_order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<temp_orderUpdateInput, temp_orderUncheckedUpdateInput>
  }

  /**
   * temp_order delete
   */
  export type temp_orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order
     */
    select?: temp_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order
     */
    omit?: temp_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_orderInclude<ExtArgs> | null
    /**
     * Filter which temp_order to delete.
     */
    where: temp_orderWhereUniqueInput
  }

  /**
   * temp_order deleteMany
   */
  export type temp_orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which temp_orders to delete
     */
    where?: temp_orderWhereInput
    /**
     * Limit how many temp_orders to delete.
     */
    limit?: number
  }

  /**
   * temp_order.details
   */
  export type temp_order$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order_detail
     */
    select?: temp_order_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order_detail
     */
    omit?: temp_order_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_order_detailInclude<ExtArgs> | null
    where?: temp_order_detailWhereInput
    orderBy?: temp_order_detailOrderByWithRelationInput | temp_order_detailOrderByWithRelationInput[]
    cursor?: temp_order_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Temp_order_detailScalarFieldEnum | Temp_order_detailScalarFieldEnum[]
  }

  /**
   * temp_order without action
   */
  export type temp_orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order
     */
    select?: temp_orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order
     */
    omit?: temp_orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_orderInclude<ExtArgs> | null
  }


  /**
   * Model temp_order_detail
   */

  export type AggregateTemp_order_detail = {
    _count: Temp_order_detailCountAggregateOutputType | null
    _avg: Temp_order_detailAvgAggregateOutputType | null
    _sum: Temp_order_detailSumAggregateOutputType | null
    _min: Temp_order_detailMinAggregateOutputType | null
    _max: Temp_order_detailMaxAggregateOutputType | null
  }

  export type Temp_order_detailAvgAggregateOutputType = {
    temp_order_detail_id: number | null
    temp_order_id: number | null
    quantity: number | null
    price: Decimal | null
    subtotal: Decimal | null
  }

  export type Temp_order_detailSumAggregateOutputType = {
    temp_order_detail_id: number | null
    temp_order_id: number | null
    quantity: number | null
    price: Decimal | null
    subtotal: Decimal | null
  }

  export type Temp_order_detailMinAggregateOutputType = {
    temp_order_detail_id: number | null
    temp_order_id: number | null
    ticket_id: string | null
    visitor_name: string | null
    quantity: number | null
    price: Decimal | null
    subtotal: Decimal | null
  }

  export type Temp_order_detailMaxAggregateOutputType = {
    temp_order_detail_id: number | null
    temp_order_id: number | null
    ticket_id: string | null
    visitor_name: string | null
    quantity: number | null
    price: Decimal | null
    subtotal: Decimal | null
  }

  export type Temp_order_detailCountAggregateOutputType = {
    temp_order_detail_id: number
    temp_order_id: number
    ticket_id: number
    visitor_name: number
    quantity: number
    price: number
    subtotal: number
    _all: number
  }


  export type Temp_order_detailAvgAggregateInputType = {
    temp_order_detail_id?: true
    temp_order_id?: true
    quantity?: true
    price?: true
    subtotal?: true
  }

  export type Temp_order_detailSumAggregateInputType = {
    temp_order_detail_id?: true
    temp_order_id?: true
    quantity?: true
    price?: true
    subtotal?: true
  }

  export type Temp_order_detailMinAggregateInputType = {
    temp_order_detail_id?: true
    temp_order_id?: true
    ticket_id?: true
    visitor_name?: true
    quantity?: true
    price?: true
    subtotal?: true
  }

  export type Temp_order_detailMaxAggregateInputType = {
    temp_order_detail_id?: true
    temp_order_id?: true
    ticket_id?: true
    visitor_name?: true
    quantity?: true
    price?: true
    subtotal?: true
  }

  export type Temp_order_detailCountAggregateInputType = {
    temp_order_detail_id?: true
    temp_order_id?: true
    ticket_id?: true
    visitor_name?: true
    quantity?: true
    price?: true
    subtotal?: true
    _all?: true
  }

  export type Temp_order_detailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which temp_order_detail to aggregate.
     */
    where?: temp_order_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temp_order_details to fetch.
     */
    orderBy?: temp_order_detailOrderByWithRelationInput | temp_order_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: temp_order_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temp_order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temp_order_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned temp_order_details
    **/
    _count?: true | Temp_order_detailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Temp_order_detailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Temp_order_detailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Temp_order_detailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Temp_order_detailMaxAggregateInputType
  }

  export type GetTemp_order_detailAggregateType<T extends Temp_order_detailAggregateArgs> = {
        [P in keyof T & keyof AggregateTemp_order_detail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemp_order_detail[P]>
      : GetScalarType<T[P], AggregateTemp_order_detail[P]>
  }




  export type temp_order_detailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: temp_order_detailWhereInput
    orderBy?: temp_order_detailOrderByWithAggregationInput | temp_order_detailOrderByWithAggregationInput[]
    by: Temp_order_detailScalarFieldEnum[] | Temp_order_detailScalarFieldEnum
    having?: temp_order_detailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Temp_order_detailCountAggregateInputType | true
    _avg?: Temp_order_detailAvgAggregateInputType
    _sum?: Temp_order_detailSumAggregateInputType
    _min?: Temp_order_detailMinAggregateInputType
    _max?: Temp_order_detailMaxAggregateInputType
  }

  export type Temp_order_detailGroupByOutputType = {
    temp_order_detail_id: number
    temp_order_id: number
    ticket_id: string
    visitor_name: string | null
    quantity: number
    price: Decimal
    subtotal: Decimal
    _count: Temp_order_detailCountAggregateOutputType | null
    _avg: Temp_order_detailAvgAggregateOutputType | null
    _sum: Temp_order_detailSumAggregateOutputType | null
    _min: Temp_order_detailMinAggregateOutputType | null
    _max: Temp_order_detailMaxAggregateOutputType | null
  }

  type GetTemp_order_detailGroupByPayload<T extends temp_order_detailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Temp_order_detailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Temp_order_detailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Temp_order_detailGroupByOutputType[P]>
            : GetScalarType<T[P], Temp_order_detailGroupByOutputType[P]>
        }
      >
    >


  export type temp_order_detailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    temp_order_detail_id?: boolean
    temp_order_id?: boolean
    ticket_id?: boolean
    visitor_name?: boolean
    quantity?: boolean
    price?: boolean
    subtotal?: boolean
    temp_order?: boolean | temp_orderDefaultArgs<ExtArgs>
    ticket?: boolean | ticketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["temp_order_detail"]>



  export type temp_order_detailSelectScalar = {
    temp_order_detail_id?: boolean
    temp_order_id?: boolean
    ticket_id?: boolean
    visitor_name?: boolean
    quantity?: boolean
    price?: boolean
    subtotal?: boolean
  }

  export type temp_order_detailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"temp_order_detail_id" | "temp_order_id" | "ticket_id" | "visitor_name" | "quantity" | "price" | "subtotal", ExtArgs["result"]["temp_order_detail"]>
  export type temp_order_detailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    temp_order?: boolean | temp_orderDefaultArgs<ExtArgs>
    ticket?: boolean | ticketDefaultArgs<ExtArgs>
  }

  export type $temp_order_detailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "temp_order_detail"
    objects: {
      temp_order: Prisma.$temp_orderPayload<ExtArgs>
      ticket: Prisma.$ticketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      temp_order_detail_id: number
      /**
       * Relasi ke temp_order - banyak detail mengacu ke satu order
       */
      temp_order_id: number
      /**
       * Relasi ke ticket - setiap detail berhubungan dengan satu tiket
       */
      ticket_id: string
      /**
       * Nama pengunjung, jika perlu diisi satu per tiket (opsional)
       */
      visitor_name: string | null
      /**
       * Jumlah tiket yang dibeli
       */
      quantity: number
      /**
       * Harga per tiket
       */
      price: Prisma.Decimal
      /**
       * Subtotal (quantity * price)
       */
      subtotal: Prisma.Decimal
    }, ExtArgs["result"]["temp_order_detail"]>
    composites: {}
  }

  type temp_order_detailGetPayload<S extends boolean | null | undefined | temp_order_detailDefaultArgs> = $Result.GetResult<Prisma.$temp_order_detailPayload, S>

  type temp_order_detailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<temp_order_detailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Temp_order_detailCountAggregateInputType | true
    }

  export interface temp_order_detailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['temp_order_detail'], meta: { name: 'temp_order_detail' } }
    /**
     * Find zero or one Temp_order_detail that matches the filter.
     * @param {temp_order_detailFindUniqueArgs} args - Arguments to find a Temp_order_detail
     * @example
     * // Get one Temp_order_detail
     * const temp_order_detail = await prisma.temp_order_detail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends temp_order_detailFindUniqueArgs>(args: SelectSubset<T, temp_order_detailFindUniqueArgs<ExtArgs>>): Prisma__temp_order_detailClient<$Result.GetResult<Prisma.$temp_order_detailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Temp_order_detail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {temp_order_detailFindUniqueOrThrowArgs} args - Arguments to find a Temp_order_detail
     * @example
     * // Get one Temp_order_detail
     * const temp_order_detail = await prisma.temp_order_detail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends temp_order_detailFindUniqueOrThrowArgs>(args: SelectSubset<T, temp_order_detailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__temp_order_detailClient<$Result.GetResult<Prisma.$temp_order_detailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Temp_order_detail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_order_detailFindFirstArgs} args - Arguments to find a Temp_order_detail
     * @example
     * // Get one Temp_order_detail
     * const temp_order_detail = await prisma.temp_order_detail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends temp_order_detailFindFirstArgs>(args?: SelectSubset<T, temp_order_detailFindFirstArgs<ExtArgs>>): Prisma__temp_order_detailClient<$Result.GetResult<Prisma.$temp_order_detailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Temp_order_detail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_order_detailFindFirstOrThrowArgs} args - Arguments to find a Temp_order_detail
     * @example
     * // Get one Temp_order_detail
     * const temp_order_detail = await prisma.temp_order_detail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends temp_order_detailFindFirstOrThrowArgs>(args?: SelectSubset<T, temp_order_detailFindFirstOrThrowArgs<ExtArgs>>): Prisma__temp_order_detailClient<$Result.GetResult<Prisma.$temp_order_detailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Temp_order_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_order_detailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Temp_order_details
     * const temp_order_details = await prisma.temp_order_detail.findMany()
     * 
     * // Get first 10 Temp_order_details
     * const temp_order_details = await prisma.temp_order_detail.findMany({ take: 10 })
     * 
     * // Only select the `temp_order_detail_id`
     * const temp_order_detailWithTemp_order_detail_idOnly = await prisma.temp_order_detail.findMany({ select: { temp_order_detail_id: true } })
     * 
     */
    findMany<T extends temp_order_detailFindManyArgs>(args?: SelectSubset<T, temp_order_detailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$temp_order_detailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Temp_order_detail.
     * @param {temp_order_detailCreateArgs} args - Arguments to create a Temp_order_detail.
     * @example
     * // Create one Temp_order_detail
     * const Temp_order_detail = await prisma.temp_order_detail.create({
     *   data: {
     *     // ... data to create a Temp_order_detail
     *   }
     * })
     * 
     */
    create<T extends temp_order_detailCreateArgs>(args: SelectSubset<T, temp_order_detailCreateArgs<ExtArgs>>): Prisma__temp_order_detailClient<$Result.GetResult<Prisma.$temp_order_detailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Temp_order_details.
     * @param {temp_order_detailCreateManyArgs} args - Arguments to create many Temp_order_details.
     * @example
     * // Create many Temp_order_details
     * const temp_order_detail = await prisma.temp_order_detail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends temp_order_detailCreateManyArgs>(args?: SelectSubset<T, temp_order_detailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Temp_order_detail.
     * @param {temp_order_detailDeleteArgs} args - Arguments to delete one Temp_order_detail.
     * @example
     * // Delete one Temp_order_detail
     * const Temp_order_detail = await prisma.temp_order_detail.delete({
     *   where: {
     *     // ... filter to delete one Temp_order_detail
     *   }
     * })
     * 
     */
    delete<T extends temp_order_detailDeleteArgs>(args: SelectSubset<T, temp_order_detailDeleteArgs<ExtArgs>>): Prisma__temp_order_detailClient<$Result.GetResult<Prisma.$temp_order_detailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Temp_order_detail.
     * @param {temp_order_detailUpdateArgs} args - Arguments to update one Temp_order_detail.
     * @example
     * // Update one Temp_order_detail
     * const temp_order_detail = await prisma.temp_order_detail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends temp_order_detailUpdateArgs>(args: SelectSubset<T, temp_order_detailUpdateArgs<ExtArgs>>): Prisma__temp_order_detailClient<$Result.GetResult<Prisma.$temp_order_detailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Temp_order_details.
     * @param {temp_order_detailDeleteManyArgs} args - Arguments to filter Temp_order_details to delete.
     * @example
     * // Delete a few Temp_order_details
     * const { count } = await prisma.temp_order_detail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends temp_order_detailDeleteManyArgs>(args?: SelectSubset<T, temp_order_detailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Temp_order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_order_detailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Temp_order_details
     * const temp_order_detail = await prisma.temp_order_detail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends temp_order_detailUpdateManyArgs>(args: SelectSubset<T, temp_order_detailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Temp_order_detail.
     * @param {temp_order_detailUpsertArgs} args - Arguments to update or create a Temp_order_detail.
     * @example
     * // Update or create a Temp_order_detail
     * const temp_order_detail = await prisma.temp_order_detail.upsert({
     *   create: {
     *     // ... data to create a Temp_order_detail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Temp_order_detail we want to update
     *   }
     * })
     */
    upsert<T extends temp_order_detailUpsertArgs>(args: SelectSubset<T, temp_order_detailUpsertArgs<ExtArgs>>): Prisma__temp_order_detailClient<$Result.GetResult<Prisma.$temp_order_detailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Temp_order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_order_detailCountArgs} args - Arguments to filter Temp_order_details to count.
     * @example
     * // Count the number of Temp_order_details
     * const count = await prisma.temp_order_detail.count({
     *   where: {
     *     // ... the filter for the Temp_order_details we want to count
     *   }
     * })
    **/
    count<T extends temp_order_detailCountArgs>(
      args?: Subset<T, temp_order_detailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Temp_order_detailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Temp_order_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Temp_order_detailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Temp_order_detailAggregateArgs>(args: Subset<T, Temp_order_detailAggregateArgs>): Prisma.PrismaPromise<GetTemp_order_detailAggregateType<T>>

    /**
     * Group by Temp_order_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temp_order_detailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends temp_order_detailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: temp_order_detailGroupByArgs['orderBy'] }
        : { orderBy?: temp_order_detailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, temp_order_detailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemp_order_detailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the temp_order_detail model
   */
  readonly fields: temp_order_detailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for temp_order_detail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__temp_order_detailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    temp_order<T extends temp_orderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, temp_orderDefaultArgs<ExtArgs>>): Prisma__temp_orderClient<$Result.GetResult<Prisma.$temp_orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticket<T extends ticketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ticketDefaultArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the temp_order_detail model
   */
  interface temp_order_detailFieldRefs {
    readonly temp_order_detail_id: FieldRef<"temp_order_detail", 'Int'>
    readonly temp_order_id: FieldRef<"temp_order_detail", 'Int'>
    readonly ticket_id: FieldRef<"temp_order_detail", 'String'>
    readonly visitor_name: FieldRef<"temp_order_detail", 'String'>
    readonly quantity: FieldRef<"temp_order_detail", 'Int'>
    readonly price: FieldRef<"temp_order_detail", 'Decimal'>
    readonly subtotal: FieldRef<"temp_order_detail", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * temp_order_detail findUnique
   */
  export type temp_order_detailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order_detail
     */
    select?: temp_order_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order_detail
     */
    omit?: temp_order_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_order_detailInclude<ExtArgs> | null
    /**
     * Filter, which temp_order_detail to fetch.
     */
    where: temp_order_detailWhereUniqueInput
  }

  /**
   * temp_order_detail findUniqueOrThrow
   */
  export type temp_order_detailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order_detail
     */
    select?: temp_order_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order_detail
     */
    omit?: temp_order_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_order_detailInclude<ExtArgs> | null
    /**
     * Filter, which temp_order_detail to fetch.
     */
    where: temp_order_detailWhereUniqueInput
  }

  /**
   * temp_order_detail findFirst
   */
  export type temp_order_detailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order_detail
     */
    select?: temp_order_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order_detail
     */
    omit?: temp_order_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_order_detailInclude<ExtArgs> | null
    /**
     * Filter, which temp_order_detail to fetch.
     */
    where?: temp_order_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temp_order_details to fetch.
     */
    orderBy?: temp_order_detailOrderByWithRelationInput | temp_order_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for temp_order_details.
     */
    cursor?: temp_order_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temp_order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temp_order_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of temp_order_details.
     */
    distinct?: Temp_order_detailScalarFieldEnum | Temp_order_detailScalarFieldEnum[]
  }

  /**
   * temp_order_detail findFirstOrThrow
   */
  export type temp_order_detailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order_detail
     */
    select?: temp_order_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order_detail
     */
    omit?: temp_order_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_order_detailInclude<ExtArgs> | null
    /**
     * Filter, which temp_order_detail to fetch.
     */
    where?: temp_order_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temp_order_details to fetch.
     */
    orderBy?: temp_order_detailOrderByWithRelationInput | temp_order_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for temp_order_details.
     */
    cursor?: temp_order_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temp_order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temp_order_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of temp_order_details.
     */
    distinct?: Temp_order_detailScalarFieldEnum | Temp_order_detailScalarFieldEnum[]
  }

  /**
   * temp_order_detail findMany
   */
  export type temp_order_detailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order_detail
     */
    select?: temp_order_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order_detail
     */
    omit?: temp_order_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_order_detailInclude<ExtArgs> | null
    /**
     * Filter, which temp_order_details to fetch.
     */
    where?: temp_order_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temp_order_details to fetch.
     */
    orderBy?: temp_order_detailOrderByWithRelationInput | temp_order_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing temp_order_details.
     */
    cursor?: temp_order_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temp_order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temp_order_details.
     */
    skip?: number
    distinct?: Temp_order_detailScalarFieldEnum | Temp_order_detailScalarFieldEnum[]
  }

  /**
   * temp_order_detail create
   */
  export type temp_order_detailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order_detail
     */
    select?: temp_order_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order_detail
     */
    omit?: temp_order_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_order_detailInclude<ExtArgs> | null
    /**
     * The data needed to create a temp_order_detail.
     */
    data: XOR<temp_order_detailCreateInput, temp_order_detailUncheckedCreateInput>
  }

  /**
   * temp_order_detail createMany
   */
  export type temp_order_detailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many temp_order_details.
     */
    data: temp_order_detailCreateManyInput | temp_order_detailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * temp_order_detail update
   */
  export type temp_order_detailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order_detail
     */
    select?: temp_order_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order_detail
     */
    omit?: temp_order_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_order_detailInclude<ExtArgs> | null
    /**
     * The data needed to update a temp_order_detail.
     */
    data: XOR<temp_order_detailUpdateInput, temp_order_detailUncheckedUpdateInput>
    /**
     * Choose, which temp_order_detail to update.
     */
    where: temp_order_detailWhereUniqueInput
  }

  /**
   * temp_order_detail updateMany
   */
  export type temp_order_detailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update temp_order_details.
     */
    data: XOR<temp_order_detailUpdateManyMutationInput, temp_order_detailUncheckedUpdateManyInput>
    /**
     * Filter which temp_order_details to update
     */
    where?: temp_order_detailWhereInput
    /**
     * Limit how many temp_order_details to update.
     */
    limit?: number
  }

  /**
   * temp_order_detail upsert
   */
  export type temp_order_detailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order_detail
     */
    select?: temp_order_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order_detail
     */
    omit?: temp_order_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_order_detailInclude<ExtArgs> | null
    /**
     * The filter to search for the temp_order_detail to update in case it exists.
     */
    where: temp_order_detailWhereUniqueInput
    /**
     * In case the temp_order_detail found by the `where` argument doesn't exist, create a new temp_order_detail with this data.
     */
    create: XOR<temp_order_detailCreateInput, temp_order_detailUncheckedCreateInput>
    /**
     * In case the temp_order_detail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<temp_order_detailUpdateInput, temp_order_detailUncheckedUpdateInput>
  }

  /**
   * temp_order_detail delete
   */
  export type temp_order_detailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order_detail
     */
    select?: temp_order_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order_detail
     */
    omit?: temp_order_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_order_detailInclude<ExtArgs> | null
    /**
     * Filter which temp_order_detail to delete.
     */
    where: temp_order_detailWhereUniqueInput
  }

  /**
   * temp_order_detail deleteMany
   */
  export type temp_order_detailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which temp_order_details to delete
     */
    where?: temp_order_detailWhereInput
    /**
     * Limit how many temp_order_details to delete.
     */
    limit?: number
  }

  /**
   * temp_order_detail without action
   */
  export type temp_order_detailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temp_order_detail
     */
    select?: temp_order_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the temp_order_detail
     */
    omit?: temp_order_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temp_order_detailInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Category_tourismScalarFieldEnum: {
    category_id: 'category_id',
    category_name: 'category_name',
    category_desc: 'category_desc',
    category_icon: 'category_icon'
  };

  export type Category_tourismScalarFieldEnum = (typeof Category_tourismScalarFieldEnum)[keyof typeof Category_tourismScalarFieldEnum]


  export const FacilityScalarFieldEnum: {
    facility_id: 'facility_id',
    facility_name: 'facility_name',
    facility_icon: 'facility_icon'
  };

  export type FacilityScalarFieldEnum = (typeof FacilityScalarFieldEnum)[keyof typeof FacilityScalarFieldEnum]


  export const Facility_tourismScalarFieldEnum: {
    facility_tourism_id: 'facility_tourism_id',
    spot_id: 'spot_id',
    facility_id: 'facility_id'
  };

  export type Facility_tourismScalarFieldEnum = (typeof Facility_tourismScalarFieldEnum)[keyof typeof Facility_tourismScalarFieldEnum]


  export const GalleryScalarFieldEnum: {
    gallery_id: 'gallery_id',
    spot_id: 'spot_id',
    gallery_img: 'gallery_img',
    gallery_caption: 'gallery_caption'
  };

  export type GalleryScalarFieldEnum = (typeof GalleryScalarFieldEnum)[keyof typeof GalleryScalarFieldEnum]


  export const Operating_hoursScalarFieldEnum: {
    operating_id: 'operating_id',
    spot_id: 'spot_id',
    operating_day: 'operating_day',
    hours_open: 'hours_open',
    hours_closed: 'hours_closed'
  };

  export type Operating_hoursScalarFieldEnum = (typeof Operating_hoursScalarFieldEnum)[keyof typeof Operating_hoursScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    payment_id: 'payment_id',
    transaction_id: 'transaction_id',
    reference_number: 'reference_number',
    payment_type: 'payment_type',
    payment_amount: 'payment_amount',
    payment_status: 'payment_status',
    payment_time: 'payment_time',
    response_data: 'response_data'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    reviews_id: 'reviews_id',
    spot_id: 'spot_id',
    user_id: 'user_id',
    reviews_rating: 'reviews_rating',
    reviews_desc: 'reviews_desc',
    reviews_created_at: 'reviews_created_at'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const Spot_tourismScalarFieldEnum: {
    spot_id: 'spot_id',
    category_id: 'category_id',
    village_id: 'village_id',
    spot_name: 'spot_name',
    spot_desc: 'spot_desc',
    spot_address: 'spot_address',
    spot_maps: 'spot_maps',
    spot_thumbnail: 'spot_thumbnail',
    spot_rating: 'spot_rating',
    spot_contact: 'spot_contact'
  };

  export type Spot_tourismScalarFieldEnum = (typeof Spot_tourismScalarFieldEnum)[keyof typeof Spot_tourismScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    ticket_id: 'ticket_id',
    spot_id: 'spot_id',
    ticket_name: 'ticket_name',
    ticket_price: 'ticket_price',
    ticket_desc: 'ticket_desc',
    ticket_stock: 'ticket_stock',
    code: 'code',
    url_qr: 'url_qr'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    transaction_id: 'transaction_id',
    user_id: 'user_id',
    transaction_code: 'transaction_code',
    total_price: 'total_price',
    transaction_status: 'transaction_status',
    transaction_date: 'transaction_date',
    visit_date: 'visit_date'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const Transaction_detailScalarFieldEnum: {
    transaction_detail_id: 'transaction_detail_id',
    transaction_id: 'transaction_id',
    ticket_id: 'ticket_id',
    detail_quantity: 'detail_quantity',
    detail_price: 'detail_price',
    detail_subtotal: 'detail_subtotal',
    is_used: 'is_used'
  };

  export type Transaction_detailScalarFieldEnum = (typeof Transaction_detailScalarFieldEnum)[keyof typeof Transaction_detailScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone_number: 'phone_number',
    address: 'address',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const VillageScalarFieldEnum: {
    village_id: 'village_id',
    village_name: 'village_name',
    village_city: 'village_city'
  };

  export type VillageScalarFieldEnum = (typeof VillageScalarFieldEnum)[keyof typeof VillageScalarFieldEnum]


  export const Temp_orderScalarFieldEnum: {
    temp_order_id: 'temp_order_id',
    order_id: 'order_id',
    user_id: 'user_id',
    visit_date: 'visit_date',
    created_at: 'created_at',
    status: 'status'
  };

  export type Temp_orderScalarFieldEnum = (typeof Temp_orderScalarFieldEnum)[keyof typeof Temp_orderScalarFieldEnum]


  export const Temp_order_detailScalarFieldEnum: {
    temp_order_detail_id: 'temp_order_detail_id',
    temp_order_id: 'temp_order_id',
    ticket_id: 'ticket_id',
    visitor_name: 'visitor_name',
    quantity: 'quantity',
    price: 'price',
    subtotal: 'subtotal'
  };

  export type Temp_order_detailScalarFieldEnum = (typeof Temp_order_detailScalarFieldEnum)[keyof typeof Temp_order_detailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const category_tourismOrderByRelevanceFieldEnum: {
    category_id: 'category_id',
    category_name: 'category_name',
    category_desc: 'category_desc',
    category_icon: 'category_icon'
  };

  export type category_tourismOrderByRelevanceFieldEnum = (typeof category_tourismOrderByRelevanceFieldEnum)[keyof typeof category_tourismOrderByRelevanceFieldEnum]


  export const facilityOrderByRelevanceFieldEnum: {
    facility_id: 'facility_id',
    facility_name: 'facility_name',
    facility_icon: 'facility_icon'
  };

  export type facilityOrderByRelevanceFieldEnum = (typeof facilityOrderByRelevanceFieldEnum)[keyof typeof facilityOrderByRelevanceFieldEnum]


  export const facility_tourismOrderByRelevanceFieldEnum: {
    facility_tourism_id: 'facility_tourism_id',
    spot_id: 'spot_id',
    facility_id: 'facility_id'
  };

  export type facility_tourismOrderByRelevanceFieldEnum = (typeof facility_tourismOrderByRelevanceFieldEnum)[keyof typeof facility_tourismOrderByRelevanceFieldEnum]


  export const galleryOrderByRelevanceFieldEnum: {
    gallery_id: 'gallery_id',
    spot_id: 'spot_id',
    gallery_img: 'gallery_img',
    gallery_caption: 'gallery_caption'
  };

  export type galleryOrderByRelevanceFieldEnum = (typeof galleryOrderByRelevanceFieldEnum)[keyof typeof galleryOrderByRelevanceFieldEnum]


  export const operating_hoursOrderByRelevanceFieldEnum: {
    operating_id: 'operating_id',
    spot_id: 'spot_id'
  };

  export type operating_hoursOrderByRelevanceFieldEnum = (typeof operating_hoursOrderByRelevanceFieldEnum)[keyof typeof operating_hoursOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const paymentOrderByRelevanceFieldEnum: {
    reference_number: 'reference_number',
    payment_type: 'payment_type'
  };

  export type paymentOrderByRelevanceFieldEnum = (typeof paymentOrderByRelevanceFieldEnum)[keyof typeof paymentOrderByRelevanceFieldEnum]


  export const reviewsOrderByRelevanceFieldEnum: {
    reviews_id: 'reviews_id',
    spot_id: 'spot_id',
    user_id: 'user_id',
    reviews_desc: 'reviews_desc'
  };

  export type reviewsOrderByRelevanceFieldEnum = (typeof reviewsOrderByRelevanceFieldEnum)[keyof typeof reviewsOrderByRelevanceFieldEnum]


  export const spot_tourismOrderByRelevanceFieldEnum: {
    spot_id: 'spot_id',
    category_id: 'category_id',
    village_id: 'village_id',
    spot_name: 'spot_name',
    spot_desc: 'spot_desc',
    spot_address: 'spot_address',
    spot_maps: 'spot_maps',
    spot_thumbnail: 'spot_thumbnail',
    spot_contact: 'spot_contact'
  };

  export type spot_tourismOrderByRelevanceFieldEnum = (typeof spot_tourismOrderByRelevanceFieldEnum)[keyof typeof spot_tourismOrderByRelevanceFieldEnum]


  export const ticketOrderByRelevanceFieldEnum: {
    ticket_id: 'ticket_id',
    spot_id: 'spot_id',
    ticket_name: 'ticket_name',
    ticket_desc: 'ticket_desc',
    code: 'code',
    url_qr: 'url_qr'
  };

  export type ticketOrderByRelevanceFieldEnum = (typeof ticketOrderByRelevanceFieldEnum)[keyof typeof ticketOrderByRelevanceFieldEnum]


  export const transactionOrderByRelevanceFieldEnum: {
    user_id: 'user_id',
    transaction_code: 'transaction_code'
  };

  export type transactionOrderByRelevanceFieldEnum = (typeof transactionOrderByRelevanceFieldEnum)[keyof typeof transactionOrderByRelevanceFieldEnum]


  export const transaction_detailOrderByRelevanceFieldEnum: {
    ticket_id: 'ticket_id'
  };

  export type transaction_detailOrderByRelevanceFieldEnum = (typeof transaction_detailOrderByRelevanceFieldEnum)[keyof typeof transaction_detailOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone_number: 'phone_number',
    address: 'address'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const villageOrderByRelevanceFieldEnum: {
    village_id: 'village_id',
    village_name: 'village_name',
    village_city: 'village_city'
  };

  export type villageOrderByRelevanceFieldEnum = (typeof villageOrderByRelevanceFieldEnum)[keyof typeof villageOrderByRelevanceFieldEnum]


  export const temp_orderOrderByRelevanceFieldEnum: {
    order_id: 'order_id',
    user_id: 'user_id'
  };

  export type temp_orderOrderByRelevanceFieldEnum = (typeof temp_orderOrderByRelevanceFieldEnum)[keyof typeof temp_orderOrderByRelevanceFieldEnum]


  export const temp_order_detailOrderByRelevanceFieldEnum: {
    ticket_id: 'ticket_id',
    visitor_name: 'visitor_name'
  };

  export type temp_order_detailOrderByRelevanceFieldEnum = (typeof temp_order_detailOrderByRelevanceFieldEnum)[keyof typeof temp_order_detailOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'OperatingDay'
   */
  export type EnumOperatingDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OperatingDay'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type category_tourismWhereInput = {
    AND?: category_tourismWhereInput | category_tourismWhereInput[]
    OR?: category_tourismWhereInput[]
    NOT?: category_tourismWhereInput | category_tourismWhereInput[]
    category_id?: StringFilter<"category_tourism"> | string
    category_name?: StringFilter<"category_tourism"> | string
    category_desc?: StringNullableFilter<"category_tourism"> | string | null
    category_icon?: StringNullableFilter<"category_tourism"> | string | null
    spots?: Spot_tourismListRelationFilter
  }

  export type category_tourismOrderByWithRelationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    category_desc?: SortOrderInput | SortOrder
    category_icon?: SortOrderInput | SortOrder
    spots?: spot_tourismOrderByRelationAggregateInput
    _relevance?: category_tourismOrderByRelevanceInput
  }

  export type category_tourismWhereUniqueInput = Prisma.AtLeast<{
    category_id?: string
    AND?: category_tourismWhereInput | category_tourismWhereInput[]
    OR?: category_tourismWhereInput[]
    NOT?: category_tourismWhereInput | category_tourismWhereInput[]
    category_name?: StringFilter<"category_tourism"> | string
    category_desc?: StringNullableFilter<"category_tourism"> | string | null
    category_icon?: StringNullableFilter<"category_tourism"> | string | null
    spots?: Spot_tourismListRelationFilter
  }, "category_id">

  export type category_tourismOrderByWithAggregationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    category_desc?: SortOrderInput | SortOrder
    category_icon?: SortOrderInput | SortOrder
    _count?: category_tourismCountOrderByAggregateInput
    _max?: category_tourismMaxOrderByAggregateInput
    _min?: category_tourismMinOrderByAggregateInput
  }

  export type category_tourismScalarWhereWithAggregatesInput = {
    AND?: category_tourismScalarWhereWithAggregatesInput | category_tourismScalarWhereWithAggregatesInput[]
    OR?: category_tourismScalarWhereWithAggregatesInput[]
    NOT?: category_tourismScalarWhereWithAggregatesInput | category_tourismScalarWhereWithAggregatesInput[]
    category_id?: StringWithAggregatesFilter<"category_tourism"> | string
    category_name?: StringWithAggregatesFilter<"category_tourism"> | string
    category_desc?: StringNullableWithAggregatesFilter<"category_tourism"> | string | null
    category_icon?: StringNullableWithAggregatesFilter<"category_tourism"> | string | null
  }

  export type facilityWhereInput = {
    AND?: facilityWhereInput | facilityWhereInput[]
    OR?: facilityWhereInput[]
    NOT?: facilityWhereInput | facilityWhereInput[]
    facility_id?: StringFilter<"facility"> | string
    facility_name?: StringFilter<"facility"> | string
    facility_icon?: StringNullableFilter<"facility"> | string | null
    facility_tourisms?: Facility_tourismListRelationFilter
  }

  export type facilityOrderByWithRelationInput = {
    facility_id?: SortOrder
    facility_name?: SortOrder
    facility_icon?: SortOrderInput | SortOrder
    facility_tourisms?: facility_tourismOrderByRelationAggregateInput
    _relevance?: facilityOrderByRelevanceInput
  }

  export type facilityWhereUniqueInput = Prisma.AtLeast<{
    facility_id?: string
    AND?: facilityWhereInput | facilityWhereInput[]
    OR?: facilityWhereInput[]
    NOT?: facilityWhereInput | facilityWhereInput[]
    facility_name?: StringFilter<"facility"> | string
    facility_icon?: StringNullableFilter<"facility"> | string | null
    facility_tourisms?: Facility_tourismListRelationFilter
  }, "facility_id">

  export type facilityOrderByWithAggregationInput = {
    facility_id?: SortOrder
    facility_name?: SortOrder
    facility_icon?: SortOrderInput | SortOrder
    _count?: facilityCountOrderByAggregateInput
    _max?: facilityMaxOrderByAggregateInput
    _min?: facilityMinOrderByAggregateInput
  }

  export type facilityScalarWhereWithAggregatesInput = {
    AND?: facilityScalarWhereWithAggregatesInput | facilityScalarWhereWithAggregatesInput[]
    OR?: facilityScalarWhereWithAggregatesInput[]
    NOT?: facilityScalarWhereWithAggregatesInput | facilityScalarWhereWithAggregatesInput[]
    facility_id?: StringWithAggregatesFilter<"facility"> | string
    facility_name?: StringWithAggregatesFilter<"facility"> | string
    facility_icon?: StringNullableWithAggregatesFilter<"facility"> | string | null
  }

  export type facility_tourismWhereInput = {
    AND?: facility_tourismWhereInput | facility_tourismWhereInput[]
    OR?: facility_tourismWhereInput[]
    NOT?: facility_tourismWhereInput | facility_tourismWhereInput[]
    facility_tourism_id?: StringFilter<"facility_tourism"> | string
    spot_id?: StringNullableFilter<"facility_tourism"> | string | null
    facility_id?: StringNullableFilter<"facility_tourism"> | string | null
    spot?: XOR<Spot_tourismNullableScalarRelationFilter, spot_tourismWhereInput> | null
    facility?: XOR<FacilityNullableScalarRelationFilter, facilityWhereInput> | null
  }

  export type facility_tourismOrderByWithRelationInput = {
    facility_tourism_id?: SortOrder
    spot_id?: SortOrderInput | SortOrder
    facility_id?: SortOrderInput | SortOrder
    spot?: spot_tourismOrderByWithRelationInput
    facility?: facilityOrderByWithRelationInput
    _relevance?: facility_tourismOrderByRelevanceInput
  }

  export type facility_tourismWhereUniqueInput = Prisma.AtLeast<{
    facility_tourism_id?: string
    AND?: facility_tourismWhereInput | facility_tourismWhereInput[]
    OR?: facility_tourismWhereInput[]
    NOT?: facility_tourismWhereInput | facility_tourismWhereInput[]
    spot_id?: StringNullableFilter<"facility_tourism"> | string | null
    facility_id?: StringNullableFilter<"facility_tourism"> | string | null
    spot?: XOR<Spot_tourismNullableScalarRelationFilter, spot_tourismWhereInput> | null
    facility?: XOR<FacilityNullableScalarRelationFilter, facilityWhereInput> | null
  }, "facility_tourism_id">

  export type facility_tourismOrderByWithAggregationInput = {
    facility_tourism_id?: SortOrder
    spot_id?: SortOrderInput | SortOrder
    facility_id?: SortOrderInput | SortOrder
    _count?: facility_tourismCountOrderByAggregateInput
    _max?: facility_tourismMaxOrderByAggregateInput
    _min?: facility_tourismMinOrderByAggregateInput
  }

  export type facility_tourismScalarWhereWithAggregatesInput = {
    AND?: facility_tourismScalarWhereWithAggregatesInput | facility_tourismScalarWhereWithAggregatesInput[]
    OR?: facility_tourismScalarWhereWithAggregatesInput[]
    NOT?: facility_tourismScalarWhereWithAggregatesInput | facility_tourismScalarWhereWithAggregatesInput[]
    facility_tourism_id?: StringWithAggregatesFilter<"facility_tourism"> | string
    spot_id?: StringNullableWithAggregatesFilter<"facility_tourism"> | string | null
    facility_id?: StringNullableWithAggregatesFilter<"facility_tourism"> | string | null
  }

  export type galleryWhereInput = {
    AND?: galleryWhereInput | galleryWhereInput[]
    OR?: galleryWhereInput[]
    NOT?: galleryWhereInput | galleryWhereInput[]
    gallery_id?: StringFilter<"gallery"> | string
    spot_id?: StringNullableFilter<"gallery"> | string | null
    gallery_img?: StringNullableFilter<"gallery"> | string | null
    gallery_caption?: StringNullableFilter<"gallery"> | string | null
    spot?: XOR<Spot_tourismNullableScalarRelationFilter, spot_tourismWhereInput> | null
  }

  export type galleryOrderByWithRelationInput = {
    gallery_id?: SortOrder
    spot_id?: SortOrderInput | SortOrder
    gallery_img?: SortOrderInput | SortOrder
    gallery_caption?: SortOrderInput | SortOrder
    spot?: spot_tourismOrderByWithRelationInput
    _relevance?: galleryOrderByRelevanceInput
  }

  export type galleryWhereUniqueInput = Prisma.AtLeast<{
    gallery_id?: string
    AND?: galleryWhereInput | galleryWhereInput[]
    OR?: galleryWhereInput[]
    NOT?: galleryWhereInput | galleryWhereInput[]
    spot_id?: StringNullableFilter<"gallery"> | string | null
    gallery_img?: StringNullableFilter<"gallery"> | string | null
    gallery_caption?: StringNullableFilter<"gallery"> | string | null
    spot?: XOR<Spot_tourismNullableScalarRelationFilter, spot_tourismWhereInput> | null
  }, "gallery_id">

  export type galleryOrderByWithAggregationInput = {
    gallery_id?: SortOrder
    spot_id?: SortOrderInput | SortOrder
    gallery_img?: SortOrderInput | SortOrder
    gallery_caption?: SortOrderInput | SortOrder
    _count?: galleryCountOrderByAggregateInput
    _max?: galleryMaxOrderByAggregateInput
    _min?: galleryMinOrderByAggregateInput
  }

  export type galleryScalarWhereWithAggregatesInput = {
    AND?: galleryScalarWhereWithAggregatesInput | galleryScalarWhereWithAggregatesInput[]
    OR?: galleryScalarWhereWithAggregatesInput[]
    NOT?: galleryScalarWhereWithAggregatesInput | galleryScalarWhereWithAggregatesInput[]
    gallery_id?: StringWithAggregatesFilter<"gallery"> | string
    spot_id?: StringNullableWithAggregatesFilter<"gallery"> | string | null
    gallery_img?: StringNullableWithAggregatesFilter<"gallery"> | string | null
    gallery_caption?: StringNullableWithAggregatesFilter<"gallery"> | string | null
  }

  export type operating_hoursWhereInput = {
    AND?: operating_hoursWhereInput | operating_hoursWhereInput[]
    OR?: operating_hoursWhereInput[]
    NOT?: operating_hoursWhereInput | operating_hoursWhereInput[]
    operating_id?: StringFilter<"operating_hours"> | string
    spot_id?: StringNullableFilter<"operating_hours"> | string | null
    operating_day?: EnumOperatingDayFilter<"operating_hours"> | $Enums.OperatingDay
    hours_open?: DateTimeFilter<"operating_hours"> | Date | string
    hours_closed?: DateTimeFilter<"operating_hours"> | Date | string
    spot?: XOR<Spot_tourismNullableScalarRelationFilter, spot_tourismWhereInput> | null
  }

  export type operating_hoursOrderByWithRelationInput = {
    operating_id?: SortOrder
    spot_id?: SortOrderInput | SortOrder
    operating_day?: SortOrder
    hours_open?: SortOrder
    hours_closed?: SortOrder
    spot?: spot_tourismOrderByWithRelationInput
    _relevance?: operating_hoursOrderByRelevanceInput
  }

  export type operating_hoursWhereUniqueInput = Prisma.AtLeast<{
    operating_id?: string
    AND?: operating_hoursWhereInput | operating_hoursWhereInput[]
    OR?: operating_hoursWhereInput[]
    NOT?: operating_hoursWhereInput | operating_hoursWhereInput[]
    spot_id?: StringNullableFilter<"operating_hours"> | string | null
    operating_day?: EnumOperatingDayFilter<"operating_hours"> | $Enums.OperatingDay
    hours_open?: DateTimeFilter<"operating_hours"> | Date | string
    hours_closed?: DateTimeFilter<"operating_hours"> | Date | string
    spot?: XOR<Spot_tourismNullableScalarRelationFilter, spot_tourismWhereInput> | null
  }, "operating_id">

  export type operating_hoursOrderByWithAggregationInput = {
    operating_id?: SortOrder
    spot_id?: SortOrderInput | SortOrder
    operating_day?: SortOrder
    hours_open?: SortOrder
    hours_closed?: SortOrder
    _count?: operating_hoursCountOrderByAggregateInput
    _max?: operating_hoursMaxOrderByAggregateInput
    _min?: operating_hoursMinOrderByAggregateInput
  }

  export type operating_hoursScalarWhereWithAggregatesInput = {
    AND?: operating_hoursScalarWhereWithAggregatesInput | operating_hoursScalarWhereWithAggregatesInput[]
    OR?: operating_hoursScalarWhereWithAggregatesInput[]
    NOT?: operating_hoursScalarWhereWithAggregatesInput | operating_hoursScalarWhereWithAggregatesInput[]
    operating_id?: StringWithAggregatesFilter<"operating_hours"> | string
    spot_id?: StringNullableWithAggregatesFilter<"operating_hours"> | string | null
    operating_day?: EnumOperatingDayWithAggregatesFilter<"operating_hours"> | $Enums.OperatingDay
    hours_open?: DateTimeWithAggregatesFilter<"operating_hours"> | Date | string
    hours_closed?: DateTimeWithAggregatesFilter<"operating_hours"> | Date | string
  }

  export type paymentWhereInput = {
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    payment_id?: IntFilter<"payment"> | number
    transaction_id?: IntFilter<"payment"> | number
    reference_number?: StringFilter<"payment"> | string
    payment_type?: StringFilter<"payment"> | string
    payment_amount?: DecimalFilter<"payment"> | Decimal | DecimalJsLike | number | string
    payment_status?: EnumPaymentStatusFilter<"payment"> | $Enums.PaymentStatus
    payment_time?: DateTimeFilter<"payment"> | Date | string
    response_data?: JsonFilter<"payment">
    transaction?: XOR<TransactionScalarRelationFilter, transactionWhereInput>
  }

  export type paymentOrderByWithRelationInput = {
    payment_id?: SortOrder
    transaction_id?: SortOrder
    reference_number?: SortOrder
    payment_type?: SortOrder
    payment_amount?: SortOrder
    payment_status?: SortOrder
    payment_time?: SortOrder
    response_data?: SortOrder
    transaction?: transactionOrderByWithRelationInput
    _relevance?: paymentOrderByRelevanceInput
  }

  export type paymentWhereUniqueInput = Prisma.AtLeast<{
    payment_id?: number
    reference_number?: string
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    transaction_id?: IntFilter<"payment"> | number
    payment_type?: StringFilter<"payment"> | string
    payment_amount?: DecimalFilter<"payment"> | Decimal | DecimalJsLike | number | string
    payment_status?: EnumPaymentStatusFilter<"payment"> | $Enums.PaymentStatus
    payment_time?: DateTimeFilter<"payment"> | Date | string
    response_data?: JsonFilter<"payment">
    transaction?: XOR<TransactionScalarRelationFilter, transactionWhereInput>
  }, "payment_id" | "reference_number">

  export type paymentOrderByWithAggregationInput = {
    payment_id?: SortOrder
    transaction_id?: SortOrder
    reference_number?: SortOrder
    payment_type?: SortOrder
    payment_amount?: SortOrder
    payment_status?: SortOrder
    payment_time?: SortOrder
    response_data?: SortOrder
    _count?: paymentCountOrderByAggregateInput
    _avg?: paymentAvgOrderByAggregateInput
    _max?: paymentMaxOrderByAggregateInput
    _min?: paymentMinOrderByAggregateInput
    _sum?: paymentSumOrderByAggregateInput
  }

  export type paymentScalarWhereWithAggregatesInput = {
    AND?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    OR?: paymentScalarWhereWithAggregatesInput[]
    NOT?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    payment_id?: IntWithAggregatesFilter<"payment"> | number
    transaction_id?: IntWithAggregatesFilter<"payment"> | number
    reference_number?: StringWithAggregatesFilter<"payment"> | string
    payment_type?: StringWithAggregatesFilter<"payment"> | string
    payment_amount?: DecimalWithAggregatesFilter<"payment"> | Decimal | DecimalJsLike | number | string
    payment_status?: EnumPaymentStatusWithAggregatesFilter<"payment"> | $Enums.PaymentStatus
    payment_time?: DateTimeWithAggregatesFilter<"payment"> | Date | string
    response_data?: JsonWithAggregatesFilter<"payment">
  }

  export type reviewsWhereInput = {
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    reviews_id?: StringFilter<"reviews"> | string
    spot_id?: StringNullableFilter<"reviews"> | string | null
    user_id?: StringNullableFilter<"reviews"> | string | null
    reviews_rating?: IntNullableFilter<"reviews"> | number | null
    reviews_desc?: StringNullableFilter<"reviews"> | string | null
    reviews_created_at?: DateTimeNullableFilter<"reviews"> | Date | string | null
    spot?: XOR<Spot_tourismNullableScalarRelationFilter, spot_tourismWhereInput> | null
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type reviewsOrderByWithRelationInput = {
    reviews_id?: SortOrder
    spot_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    reviews_rating?: SortOrderInput | SortOrder
    reviews_desc?: SortOrderInput | SortOrder
    reviews_created_at?: SortOrderInput | SortOrder
    spot?: spot_tourismOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
    _relevance?: reviewsOrderByRelevanceInput
  }

  export type reviewsWhereUniqueInput = Prisma.AtLeast<{
    reviews_id?: string
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    spot_id?: StringNullableFilter<"reviews"> | string | null
    user_id?: StringNullableFilter<"reviews"> | string | null
    reviews_rating?: IntNullableFilter<"reviews"> | number | null
    reviews_desc?: StringNullableFilter<"reviews"> | string | null
    reviews_created_at?: DateTimeNullableFilter<"reviews"> | Date | string | null
    spot?: XOR<Spot_tourismNullableScalarRelationFilter, spot_tourismWhereInput> | null
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "reviews_id">

  export type reviewsOrderByWithAggregationInput = {
    reviews_id?: SortOrder
    spot_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    reviews_rating?: SortOrderInput | SortOrder
    reviews_desc?: SortOrderInput | SortOrder
    reviews_created_at?: SortOrderInput | SortOrder
    _count?: reviewsCountOrderByAggregateInput
    _avg?: reviewsAvgOrderByAggregateInput
    _max?: reviewsMaxOrderByAggregateInput
    _min?: reviewsMinOrderByAggregateInput
    _sum?: reviewsSumOrderByAggregateInput
  }

  export type reviewsScalarWhereWithAggregatesInput = {
    AND?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    OR?: reviewsScalarWhereWithAggregatesInput[]
    NOT?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    reviews_id?: StringWithAggregatesFilter<"reviews"> | string
    spot_id?: StringNullableWithAggregatesFilter<"reviews"> | string | null
    user_id?: StringNullableWithAggregatesFilter<"reviews"> | string | null
    reviews_rating?: IntNullableWithAggregatesFilter<"reviews"> | number | null
    reviews_desc?: StringNullableWithAggregatesFilter<"reviews"> | string | null
    reviews_created_at?: DateTimeNullableWithAggregatesFilter<"reviews"> | Date | string | null
  }

  export type spot_tourismWhereInput = {
    AND?: spot_tourismWhereInput | spot_tourismWhereInput[]
    OR?: spot_tourismWhereInput[]
    NOT?: spot_tourismWhereInput | spot_tourismWhereInput[]
    spot_id?: StringFilter<"spot_tourism"> | string
    category_id?: StringNullableFilter<"spot_tourism"> | string | null
    village_id?: StringNullableFilter<"spot_tourism"> | string | null
    spot_name?: StringFilter<"spot_tourism"> | string
    spot_desc?: StringNullableFilter<"spot_tourism"> | string | null
    spot_address?: StringNullableFilter<"spot_tourism"> | string | null
    spot_maps?: StringNullableFilter<"spot_tourism"> | string | null
    spot_thumbnail?: StringNullableFilter<"spot_tourism"> | string | null
    spot_rating?: DecimalNullableFilter<"spot_tourism"> | Decimal | DecimalJsLike | number | string | null
    spot_contact?: StringNullableFilter<"spot_tourism"> | string | null
    facility_tourisms?: Facility_tourismListRelationFilter
    galleries?: GalleryListRelationFilter
    operating_hours?: Operating_hoursListRelationFilter
    reviews?: ReviewsListRelationFilter
    category?: XOR<Category_tourismNullableScalarRelationFilter, category_tourismWhereInput> | null
    village?: XOR<VillageNullableScalarRelationFilter, villageWhereInput> | null
    tickets?: TicketListRelationFilter
  }

  export type spot_tourismOrderByWithRelationInput = {
    spot_id?: SortOrder
    category_id?: SortOrderInput | SortOrder
    village_id?: SortOrderInput | SortOrder
    spot_name?: SortOrder
    spot_desc?: SortOrderInput | SortOrder
    spot_address?: SortOrderInput | SortOrder
    spot_maps?: SortOrderInput | SortOrder
    spot_thumbnail?: SortOrderInput | SortOrder
    spot_rating?: SortOrderInput | SortOrder
    spot_contact?: SortOrderInput | SortOrder
    facility_tourisms?: facility_tourismOrderByRelationAggregateInput
    galleries?: galleryOrderByRelationAggregateInput
    operating_hours?: operating_hoursOrderByRelationAggregateInput
    reviews?: reviewsOrderByRelationAggregateInput
    category?: category_tourismOrderByWithRelationInput
    village?: villageOrderByWithRelationInput
    tickets?: ticketOrderByRelationAggregateInput
    _relevance?: spot_tourismOrderByRelevanceInput
  }

  export type spot_tourismWhereUniqueInput = Prisma.AtLeast<{
    spot_id?: string
    AND?: spot_tourismWhereInput | spot_tourismWhereInput[]
    OR?: spot_tourismWhereInput[]
    NOT?: spot_tourismWhereInput | spot_tourismWhereInput[]
    category_id?: StringNullableFilter<"spot_tourism"> | string | null
    village_id?: StringNullableFilter<"spot_tourism"> | string | null
    spot_name?: StringFilter<"spot_tourism"> | string
    spot_desc?: StringNullableFilter<"spot_tourism"> | string | null
    spot_address?: StringNullableFilter<"spot_tourism"> | string | null
    spot_maps?: StringNullableFilter<"spot_tourism"> | string | null
    spot_thumbnail?: StringNullableFilter<"spot_tourism"> | string | null
    spot_rating?: DecimalNullableFilter<"spot_tourism"> | Decimal | DecimalJsLike | number | string | null
    spot_contact?: StringNullableFilter<"spot_tourism"> | string | null
    facility_tourisms?: Facility_tourismListRelationFilter
    galleries?: GalleryListRelationFilter
    operating_hours?: Operating_hoursListRelationFilter
    reviews?: ReviewsListRelationFilter
    category?: XOR<Category_tourismNullableScalarRelationFilter, category_tourismWhereInput> | null
    village?: XOR<VillageNullableScalarRelationFilter, villageWhereInput> | null
    tickets?: TicketListRelationFilter
  }, "spot_id">

  export type spot_tourismOrderByWithAggregationInput = {
    spot_id?: SortOrder
    category_id?: SortOrderInput | SortOrder
    village_id?: SortOrderInput | SortOrder
    spot_name?: SortOrder
    spot_desc?: SortOrderInput | SortOrder
    spot_address?: SortOrderInput | SortOrder
    spot_maps?: SortOrderInput | SortOrder
    spot_thumbnail?: SortOrderInput | SortOrder
    spot_rating?: SortOrderInput | SortOrder
    spot_contact?: SortOrderInput | SortOrder
    _count?: spot_tourismCountOrderByAggregateInput
    _avg?: spot_tourismAvgOrderByAggregateInput
    _max?: spot_tourismMaxOrderByAggregateInput
    _min?: spot_tourismMinOrderByAggregateInput
    _sum?: spot_tourismSumOrderByAggregateInput
  }

  export type spot_tourismScalarWhereWithAggregatesInput = {
    AND?: spot_tourismScalarWhereWithAggregatesInput | spot_tourismScalarWhereWithAggregatesInput[]
    OR?: spot_tourismScalarWhereWithAggregatesInput[]
    NOT?: spot_tourismScalarWhereWithAggregatesInput | spot_tourismScalarWhereWithAggregatesInput[]
    spot_id?: StringWithAggregatesFilter<"spot_tourism"> | string
    category_id?: StringNullableWithAggregatesFilter<"spot_tourism"> | string | null
    village_id?: StringNullableWithAggregatesFilter<"spot_tourism"> | string | null
    spot_name?: StringWithAggregatesFilter<"spot_tourism"> | string
    spot_desc?: StringNullableWithAggregatesFilter<"spot_tourism"> | string | null
    spot_address?: StringNullableWithAggregatesFilter<"spot_tourism"> | string | null
    spot_maps?: StringNullableWithAggregatesFilter<"spot_tourism"> | string | null
    spot_thumbnail?: StringNullableWithAggregatesFilter<"spot_tourism"> | string | null
    spot_rating?: DecimalNullableWithAggregatesFilter<"spot_tourism"> | Decimal | DecimalJsLike | number | string | null
    spot_contact?: StringNullableWithAggregatesFilter<"spot_tourism"> | string | null
  }

  export type ticketWhereInput = {
    AND?: ticketWhereInput | ticketWhereInput[]
    OR?: ticketWhereInput[]
    NOT?: ticketWhereInput | ticketWhereInput[]
    ticket_id?: StringFilter<"ticket"> | string
    spot_id?: StringNullableFilter<"ticket"> | string | null
    ticket_name?: StringNullableFilter<"ticket"> | string | null
    ticket_price?: DecimalFilter<"ticket"> | Decimal | DecimalJsLike | number | string
    ticket_desc?: StringNullableFilter<"ticket"> | string | null
    ticket_stock?: IntNullableFilter<"ticket"> | number | null
    code?: StringFilter<"ticket"> | string
    url_qr?: StringFilter<"ticket"> | string
    spot?: XOR<Spot_tourismNullableScalarRelationFilter, spot_tourismWhereInput> | null
    temp_order_details?: Temp_order_detailListRelationFilter
    transaction_details?: Transaction_detailListRelationFilter
  }

  export type ticketOrderByWithRelationInput = {
    ticket_id?: SortOrder
    spot_id?: SortOrderInput | SortOrder
    ticket_name?: SortOrderInput | SortOrder
    ticket_price?: SortOrder
    ticket_desc?: SortOrderInput | SortOrder
    ticket_stock?: SortOrderInput | SortOrder
    code?: SortOrder
    url_qr?: SortOrder
    spot?: spot_tourismOrderByWithRelationInput
    temp_order_details?: temp_order_detailOrderByRelationAggregateInput
    transaction_details?: transaction_detailOrderByRelationAggregateInput
    _relevance?: ticketOrderByRelevanceInput
  }

  export type ticketWhereUniqueInput = Prisma.AtLeast<{
    ticket_id?: string
    AND?: ticketWhereInput | ticketWhereInput[]
    OR?: ticketWhereInput[]
    NOT?: ticketWhereInput | ticketWhereInput[]
    spot_id?: StringNullableFilter<"ticket"> | string | null
    ticket_name?: StringNullableFilter<"ticket"> | string | null
    ticket_price?: DecimalFilter<"ticket"> | Decimal | DecimalJsLike | number | string
    ticket_desc?: StringNullableFilter<"ticket"> | string | null
    ticket_stock?: IntNullableFilter<"ticket"> | number | null
    code?: StringFilter<"ticket"> | string
    url_qr?: StringFilter<"ticket"> | string
    spot?: XOR<Spot_tourismNullableScalarRelationFilter, spot_tourismWhereInput> | null
    temp_order_details?: Temp_order_detailListRelationFilter
    transaction_details?: Transaction_detailListRelationFilter
  }, "ticket_id">

  export type ticketOrderByWithAggregationInput = {
    ticket_id?: SortOrder
    spot_id?: SortOrderInput | SortOrder
    ticket_name?: SortOrderInput | SortOrder
    ticket_price?: SortOrder
    ticket_desc?: SortOrderInput | SortOrder
    ticket_stock?: SortOrderInput | SortOrder
    code?: SortOrder
    url_qr?: SortOrder
    _count?: ticketCountOrderByAggregateInput
    _avg?: ticketAvgOrderByAggregateInput
    _max?: ticketMaxOrderByAggregateInput
    _min?: ticketMinOrderByAggregateInput
    _sum?: ticketSumOrderByAggregateInput
  }

  export type ticketScalarWhereWithAggregatesInput = {
    AND?: ticketScalarWhereWithAggregatesInput | ticketScalarWhereWithAggregatesInput[]
    OR?: ticketScalarWhereWithAggregatesInput[]
    NOT?: ticketScalarWhereWithAggregatesInput | ticketScalarWhereWithAggregatesInput[]
    ticket_id?: StringWithAggregatesFilter<"ticket"> | string
    spot_id?: StringNullableWithAggregatesFilter<"ticket"> | string | null
    ticket_name?: StringNullableWithAggregatesFilter<"ticket"> | string | null
    ticket_price?: DecimalWithAggregatesFilter<"ticket"> | Decimal | DecimalJsLike | number | string
    ticket_desc?: StringNullableWithAggregatesFilter<"ticket"> | string | null
    ticket_stock?: IntNullableWithAggregatesFilter<"ticket"> | number | null
    code?: StringWithAggregatesFilter<"ticket"> | string
    url_qr?: StringWithAggregatesFilter<"ticket"> | string
  }

  export type transactionWhereInput = {
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    transaction_id?: IntFilter<"transaction"> | number
    user_id?: StringNullableFilter<"transaction"> | string | null
    transaction_code?: StringFilter<"transaction"> | string
    total_price?: DecimalFilter<"transaction"> | Decimal | DecimalJsLike | number | string
    transaction_status?: EnumTransactionStatusNullableFilter<"transaction"> | $Enums.TransactionStatus | null
    transaction_date?: DateTimeNullableFilter<"transaction"> | Date | string | null
    visit_date?: DateTimeFilter<"transaction"> | Date | string
    payments?: PaymentListRelationFilter
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    transaction_details?: Transaction_detailListRelationFilter
  }

  export type transactionOrderByWithRelationInput = {
    transaction_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    transaction_code?: SortOrder
    total_price?: SortOrder
    transaction_status?: SortOrderInput | SortOrder
    transaction_date?: SortOrderInput | SortOrder
    visit_date?: SortOrder
    payments?: paymentOrderByRelationAggregateInput
    user?: usersOrderByWithRelationInput
    transaction_details?: transaction_detailOrderByRelationAggregateInput
    _relevance?: transactionOrderByRelevanceInput
  }

  export type transactionWhereUniqueInput = Prisma.AtLeast<{
    transaction_id?: number
    transaction_code?: string
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    user_id?: StringNullableFilter<"transaction"> | string | null
    total_price?: DecimalFilter<"transaction"> | Decimal | DecimalJsLike | number | string
    transaction_status?: EnumTransactionStatusNullableFilter<"transaction"> | $Enums.TransactionStatus | null
    transaction_date?: DateTimeNullableFilter<"transaction"> | Date | string | null
    visit_date?: DateTimeFilter<"transaction"> | Date | string
    payments?: PaymentListRelationFilter
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    transaction_details?: Transaction_detailListRelationFilter
  }, "transaction_id" | "transaction_code">

  export type transactionOrderByWithAggregationInput = {
    transaction_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    transaction_code?: SortOrder
    total_price?: SortOrder
    transaction_status?: SortOrderInput | SortOrder
    transaction_date?: SortOrderInput | SortOrder
    visit_date?: SortOrder
    _count?: transactionCountOrderByAggregateInput
    _avg?: transactionAvgOrderByAggregateInput
    _max?: transactionMaxOrderByAggregateInput
    _min?: transactionMinOrderByAggregateInput
    _sum?: transactionSumOrderByAggregateInput
  }

  export type transactionScalarWhereWithAggregatesInput = {
    AND?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    OR?: transactionScalarWhereWithAggregatesInput[]
    NOT?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    transaction_id?: IntWithAggregatesFilter<"transaction"> | number
    user_id?: StringNullableWithAggregatesFilter<"transaction"> | string | null
    transaction_code?: StringWithAggregatesFilter<"transaction"> | string
    total_price?: DecimalWithAggregatesFilter<"transaction"> | Decimal | DecimalJsLike | number | string
    transaction_status?: EnumTransactionStatusNullableWithAggregatesFilter<"transaction"> | $Enums.TransactionStatus | null
    transaction_date?: DateTimeNullableWithAggregatesFilter<"transaction"> | Date | string | null
    visit_date?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
  }

  export type transaction_detailWhereInput = {
    AND?: transaction_detailWhereInput | transaction_detailWhereInput[]
    OR?: transaction_detailWhereInput[]
    NOT?: transaction_detailWhereInput | transaction_detailWhereInput[]
    transaction_detail_id?: IntFilter<"transaction_detail"> | number
    transaction_id?: IntNullableFilter<"transaction_detail"> | number | null
    ticket_id?: StringNullableFilter<"transaction_detail"> | string | null
    detail_quantity?: IntFilter<"transaction_detail"> | number
    detail_price?: DecimalFilter<"transaction_detail"> | Decimal | DecimalJsLike | number | string
    detail_subtotal?: DecimalNullableFilter<"transaction_detail"> | Decimal | DecimalJsLike | number | string | null
    is_used?: EnumTicketStatusFilter<"transaction_detail"> | $Enums.TicketStatus
    transaction?: XOR<TransactionNullableScalarRelationFilter, transactionWhereInput> | null
    ticket?: XOR<TicketNullableScalarRelationFilter, ticketWhereInput> | null
  }

  export type transaction_detailOrderByWithRelationInput = {
    transaction_detail_id?: SortOrder
    transaction_id?: SortOrderInput | SortOrder
    ticket_id?: SortOrderInput | SortOrder
    detail_quantity?: SortOrder
    detail_price?: SortOrder
    detail_subtotal?: SortOrderInput | SortOrder
    is_used?: SortOrder
    transaction?: transactionOrderByWithRelationInput
    ticket?: ticketOrderByWithRelationInput
    _relevance?: transaction_detailOrderByRelevanceInput
  }

  export type transaction_detailWhereUniqueInput = Prisma.AtLeast<{
    transaction_detail_id?: number
    AND?: transaction_detailWhereInput | transaction_detailWhereInput[]
    OR?: transaction_detailWhereInput[]
    NOT?: transaction_detailWhereInput | transaction_detailWhereInput[]
    transaction_id?: IntNullableFilter<"transaction_detail"> | number | null
    ticket_id?: StringNullableFilter<"transaction_detail"> | string | null
    detail_quantity?: IntFilter<"transaction_detail"> | number
    detail_price?: DecimalFilter<"transaction_detail"> | Decimal | DecimalJsLike | number | string
    detail_subtotal?: DecimalNullableFilter<"transaction_detail"> | Decimal | DecimalJsLike | number | string | null
    is_used?: EnumTicketStatusFilter<"transaction_detail"> | $Enums.TicketStatus
    transaction?: XOR<TransactionNullableScalarRelationFilter, transactionWhereInput> | null
    ticket?: XOR<TicketNullableScalarRelationFilter, ticketWhereInput> | null
  }, "transaction_detail_id">

  export type transaction_detailOrderByWithAggregationInput = {
    transaction_detail_id?: SortOrder
    transaction_id?: SortOrderInput | SortOrder
    ticket_id?: SortOrderInput | SortOrder
    detail_quantity?: SortOrder
    detail_price?: SortOrder
    detail_subtotal?: SortOrderInput | SortOrder
    is_used?: SortOrder
    _count?: transaction_detailCountOrderByAggregateInput
    _avg?: transaction_detailAvgOrderByAggregateInput
    _max?: transaction_detailMaxOrderByAggregateInput
    _min?: transaction_detailMinOrderByAggregateInput
    _sum?: transaction_detailSumOrderByAggregateInput
  }

  export type transaction_detailScalarWhereWithAggregatesInput = {
    AND?: transaction_detailScalarWhereWithAggregatesInput | transaction_detailScalarWhereWithAggregatesInput[]
    OR?: transaction_detailScalarWhereWithAggregatesInput[]
    NOT?: transaction_detailScalarWhereWithAggregatesInput | transaction_detailScalarWhereWithAggregatesInput[]
    transaction_detail_id?: IntWithAggregatesFilter<"transaction_detail"> | number
    transaction_id?: IntNullableWithAggregatesFilter<"transaction_detail"> | number | null
    ticket_id?: StringNullableWithAggregatesFilter<"transaction_detail"> | string | null
    detail_quantity?: IntWithAggregatesFilter<"transaction_detail"> | number
    detail_price?: DecimalWithAggregatesFilter<"transaction_detail"> | Decimal | DecimalJsLike | number | string
    detail_subtotal?: DecimalNullableWithAggregatesFilter<"transaction_detail"> | Decimal | DecimalJsLike | number | string | null
    is_used?: EnumTicketStatusWithAggregatesFilter<"transaction_detail"> | $Enums.TicketStatus
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    phone_number?: StringNullableFilter<"users"> | string | null
    address?: StringNullableFilter<"users"> | string | null
    role?: EnumRoleFilter<"users"> | $Enums.Role
    reviews?: ReviewsListRelationFilter
    transactions?: TransactionListRelationFilter
    temp_orders?: Temp_orderListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    role?: SortOrder
    reviews?: reviewsOrderByRelationAggregateInput
    transactions?: transactionOrderByRelationAggregateInput
    temp_orders?: temp_orderOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    phone_number?: StringNullableFilter<"users"> | string | null
    address?: StringNullableFilter<"users"> | string | null
    role?: EnumRoleFilter<"users"> | $Enums.Role
    reviews?: ReviewsListRelationFilter
    transactions?: TransactionListRelationFilter
    temp_orders?: Temp_orderListRelationFilter
  }, "user_id" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    phone_number?: StringNullableWithAggregatesFilter<"users"> | string | null
    address?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: EnumRoleWithAggregatesFilter<"users"> | $Enums.Role
  }

  export type villageWhereInput = {
    AND?: villageWhereInput | villageWhereInput[]
    OR?: villageWhereInput[]
    NOT?: villageWhereInput | villageWhereInput[]
    village_id?: StringFilter<"village"> | string
    village_name?: StringFilter<"village"> | string
    village_city?: StringFilter<"village"> | string
    spots?: Spot_tourismListRelationFilter
  }

  export type villageOrderByWithRelationInput = {
    village_id?: SortOrder
    village_name?: SortOrder
    village_city?: SortOrder
    spots?: spot_tourismOrderByRelationAggregateInput
    _relevance?: villageOrderByRelevanceInput
  }

  export type villageWhereUniqueInput = Prisma.AtLeast<{
    village_id?: string
    AND?: villageWhereInput | villageWhereInput[]
    OR?: villageWhereInput[]
    NOT?: villageWhereInput | villageWhereInput[]
    village_name?: StringFilter<"village"> | string
    village_city?: StringFilter<"village"> | string
    spots?: Spot_tourismListRelationFilter
  }, "village_id">

  export type villageOrderByWithAggregationInput = {
    village_id?: SortOrder
    village_name?: SortOrder
    village_city?: SortOrder
    _count?: villageCountOrderByAggregateInput
    _max?: villageMaxOrderByAggregateInput
    _min?: villageMinOrderByAggregateInput
  }

  export type villageScalarWhereWithAggregatesInput = {
    AND?: villageScalarWhereWithAggregatesInput | villageScalarWhereWithAggregatesInput[]
    OR?: villageScalarWhereWithAggregatesInput[]
    NOT?: villageScalarWhereWithAggregatesInput | villageScalarWhereWithAggregatesInput[]
    village_id?: StringWithAggregatesFilter<"village"> | string
    village_name?: StringWithAggregatesFilter<"village"> | string
    village_city?: StringWithAggregatesFilter<"village"> | string
  }

  export type temp_orderWhereInput = {
    AND?: temp_orderWhereInput | temp_orderWhereInput[]
    OR?: temp_orderWhereInput[]
    NOT?: temp_orderWhereInput | temp_orderWhereInput[]
    temp_order_id?: IntFilter<"temp_order"> | number
    order_id?: StringFilter<"temp_order"> | string
    user_id?: StringFilter<"temp_order"> | string
    visit_date?: DateTimeFilter<"temp_order"> | Date | string
    created_at?: DateTimeFilter<"temp_order"> | Date | string
    status?: EnumTransactionStatusFilter<"temp_order"> | $Enums.TransactionStatus
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    details?: Temp_order_detailListRelationFilter
  }

  export type temp_orderOrderByWithRelationInput = {
    temp_order_id?: SortOrder
    order_id?: SortOrder
    user_id?: SortOrder
    visit_date?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
    user?: usersOrderByWithRelationInput
    details?: temp_order_detailOrderByRelationAggregateInput
    _relevance?: temp_orderOrderByRelevanceInput
  }

  export type temp_orderWhereUniqueInput = Prisma.AtLeast<{
    temp_order_id?: number
    order_id?: string
    AND?: temp_orderWhereInput | temp_orderWhereInput[]
    OR?: temp_orderWhereInput[]
    NOT?: temp_orderWhereInput | temp_orderWhereInput[]
    user_id?: StringFilter<"temp_order"> | string
    visit_date?: DateTimeFilter<"temp_order"> | Date | string
    created_at?: DateTimeFilter<"temp_order"> | Date | string
    status?: EnumTransactionStatusFilter<"temp_order"> | $Enums.TransactionStatus
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    details?: Temp_order_detailListRelationFilter
  }, "temp_order_id" | "order_id">

  export type temp_orderOrderByWithAggregationInput = {
    temp_order_id?: SortOrder
    order_id?: SortOrder
    user_id?: SortOrder
    visit_date?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
    _count?: temp_orderCountOrderByAggregateInput
    _avg?: temp_orderAvgOrderByAggregateInput
    _max?: temp_orderMaxOrderByAggregateInput
    _min?: temp_orderMinOrderByAggregateInput
    _sum?: temp_orderSumOrderByAggregateInput
  }

  export type temp_orderScalarWhereWithAggregatesInput = {
    AND?: temp_orderScalarWhereWithAggregatesInput | temp_orderScalarWhereWithAggregatesInput[]
    OR?: temp_orderScalarWhereWithAggregatesInput[]
    NOT?: temp_orderScalarWhereWithAggregatesInput | temp_orderScalarWhereWithAggregatesInput[]
    temp_order_id?: IntWithAggregatesFilter<"temp_order"> | number
    order_id?: StringWithAggregatesFilter<"temp_order"> | string
    user_id?: StringWithAggregatesFilter<"temp_order"> | string
    visit_date?: DateTimeWithAggregatesFilter<"temp_order"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"temp_order"> | Date | string
    status?: EnumTransactionStatusWithAggregatesFilter<"temp_order"> | $Enums.TransactionStatus
  }

  export type temp_order_detailWhereInput = {
    AND?: temp_order_detailWhereInput | temp_order_detailWhereInput[]
    OR?: temp_order_detailWhereInput[]
    NOT?: temp_order_detailWhereInput | temp_order_detailWhereInput[]
    temp_order_detail_id?: IntFilter<"temp_order_detail"> | number
    temp_order_id?: IntFilter<"temp_order_detail"> | number
    ticket_id?: StringFilter<"temp_order_detail"> | string
    visitor_name?: StringNullableFilter<"temp_order_detail"> | string | null
    quantity?: IntFilter<"temp_order_detail"> | number
    price?: DecimalFilter<"temp_order_detail"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"temp_order_detail"> | Decimal | DecimalJsLike | number | string
    temp_order?: XOR<Temp_orderScalarRelationFilter, temp_orderWhereInput>
    ticket?: XOR<TicketScalarRelationFilter, ticketWhereInput>
  }

  export type temp_order_detailOrderByWithRelationInput = {
    temp_order_detail_id?: SortOrder
    temp_order_id?: SortOrder
    ticket_id?: SortOrder
    visitor_name?: SortOrderInput | SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
    temp_order?: temp_orderOrderByWithRelationInput
    ticket?: ticketOrderByWithRelationInput
    _relevance?: temp_order_detailOrderByRelevanceInput
  }

  export type temp_order_detailWhereUniqueInput = Prisma.AtLeast<{
    temp_order_detail_id?: number
    AND?: temp_order_detailWhereInput | temp_order_detailWhereInput[]
    OR?: temp_order_detailWhereInput[]
    NOT?: temp_order_detailWhereInput | temp_order_detailWhereInput[]
    temp_order_id?: IntFilter<"temp_order_detail"> | number
    ticket_id?: StringFilter<"temp_order_detail"> | string
    visitor_name?: StringNullableFilter<"temp_order_detail"> | string | null
    quantity?: IntFilter<"temp_order_detail"> | number
    price?: DecimalFilter<"temp_order_detail"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"temp_order_detail"> | Decimal | DecimalJsLike | number | string
    temp_order?: XOR<Temp_orderScalarRelationFilter, temp_orderWhereInput>
    ticket?: XOR<TicketScalarRelationFilter, ticketWhereInput>
  }, "temp_order_detail_id">

  export type temp_order_detailOrderByWithAggregationInput = {
    temp_order_detail_id?: SortOrder
    temp_order_id?: SortOrder
    ticket_id?: SortOrder
    visitor_name?: SortOrderInput | SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
    _count?: temp_order_detailCountOrderByAggregateInput
    _avg?: temp_order_detailAvgOrderByAggregateInput
    _max?: temp_order_detailMaxOrderByAggregateInput
    _min?: temp_order_detailMinOrderByAggregateInput
    _sum?: temp_order_detailSumOrderByAggregateInput
  }

  export type temp_order_detailScalarWhereWithAggregatesInput = {
    AND?: temp_order_detailScalarWhereWithAggregatesInput | temp_order_detailScalarWhereWithAggregatesInput[]
    OR?: temp_order_detailScalarWhereWithAggregatesInput[]
    NOT?: temp_order_detailScalarWhereWithAggregatesInput | temp_order_detailScalarWhereWithAggregatesInput[]
    temp_order_detail_id?: IntWithAggregatesFilter<"temp_order_detail"> | number
    temp_order_id?: IntWithAggregatesFilter<"temp_order_detail"> | number
    ticket_id?: StringWithAggregatesFilter<"temp_order_detail"> | string
    visitor_name?: StringNullableWithAggregatesFilter<"temp_order_detail"> | string | null
    quantity?: IntWithAggregatesFilter<"temp_order_detail"> | number
    price?: DecimalWithAggregatesFilter<"temp_order_detail"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"temp_order_detail"> | Decimal | DecimalJsLike | number | string
  }

  export type category_tourismCreateInput = {
    category_id: string
    category_name: string
    category_desc?: string | null
    category_icon?: string | null
    spots?: spot_tourismCreateNestedManyWithoutCategoryInput
  }

  export type category_tourismUncheckedCreateInput = {
    category_id: string
    category_name: string
    category_desc?: string | null
    category_icon?: string | null
    spots?: spot_tourismUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type category_tourismUpdateInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    category_desc?: NullableStringFieldUpdateOperationsInput | string | null
    category_icon?: NullableStringFieldUpdateOperationsInput | string | null
    spots?: spot_tourismUpdateManyWithoutCategoryNestedInput
  }

  export type category_tourismUncheckedUpdateInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    category_desc?: NullableStringFieldUpdateOperationsInput | string | null
    category_icon?: NullableStringFieldUpdateOperationsInput | string | null
    spots?: spot_tourismUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type category_tourismCreateManyInput = {
    category_id: string
    category_name: string
    category_desc?: string | null
    category_icon?: string | null
  }

  export type category_tourismUpdateManyMutationInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    category_desc?: NullableStringFieldUpdateOperationsInput | string | null
    category_icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type category_tourismUncheckedUpdateManyInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    category_desc?: NullableStringFieldUpdateOperationsInput | string | null
    category_icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type facilityCreateInput = {
    facility_id: string
    facility_name: string
    facility_icon?: string | null
    facility_tourisms?: facility_tourismCreateNestedManyWithoutFacilityInput
  }

  export type facilityUncheckedCreateInput = {
    facility_id: string
    facility_name: string
    facility_icon?: string | null
    facility_tourisms?: facility_tourismUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type facilityUpdateInput = {
    facility_id?: StringFieldUpdateOperationsInput | string
    facility_name?: StringFieldUpdateOperationsInput | string
    facility_icon?: NullableStringFieldUpdateOperationsInput | string | null
    facility_tourisms?: facility_tourismUpdateManyWithoutFacilityNestedInput
  }

  export type facilityUncheckedUpdateInput = {
    facility_id?: StringFieldUpdateOperationsInput | string
    facility_name?: StringFieldUpdateOperationsInput | string
    facility_icon?: NullableStringFieldUpdateOperationsInput | string | null
    facility_tourisms?: facility_tourismUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type facilityCreateManyInput = {
    facility_id: string
    facility_name: string
    facility_icon?: string | null
  }

  export type facilityUpdateManyMutationInput = {
    facility_id?: StringFieldUpdateOperationsInput | string
    facility_name?: StringFieldUpdateOperationsInput | string
    facility_icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type facilityUncheckedUpdateManyInput = {
    facility_id?: StringFieldUpdateOperationsInput | string
    facility_name?: StringFieldUpdateOperationsInput | string
    facility_icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type facility_tourismCreateInput = {
    facility_tourism_id: string
    spot?: spot_tourismCreateNestedOneWithoutFacility_tourismsInput
    facility?: facilityCreateNestedOneWithoutFacility_tourismsInput
  }

  export type facility_tourismUncheckedCreateInput = {
    facility_tourism_id: string
    spot_id?: string | null
    facility_id?: string | null
  }

  export type facility_tourismUpdateInput = {
    facility_tourism_id?: StringFieldUpdateOperationsInput | string
    spot?: spot_tourismUpdateOneWithoutFacility_tourismsNestedInput
    facility?: facilityUpdateOneWithoutFacility_tourismsNestedInput
  }

  export type facility_tourismUncheckedUpdateInput = {
    facility_tourism_id?: StringFieldUpdateOperationsInput | string
    spot_id?: NullableStringFieldUpdateOperationsInput | string | null
    facility_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type facility_tourismCreateManyInput = {
    facility_tourism_id: string
    spot_id?: string | null
    facility_id?: string | null
  }

  export type facility_tourismUpdateManyMutationInput = {
    facility_tourism_id?: StringFieldUpdateOperationsInput | string
  }

  export type facility_tourismUncheckedUpdateManyInput = {
    facility_tourism_id?: StringFieldUpdateOperationsInput | string
    spot_id?: NullableStringFieldUpdateOperationsInput | string | null
    facility_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type galleryCreateInput = {
    gallery_id: string
    gallery_img?: string | null
    gallery_caption?: string | null
    spot?: spot_tourismCreateNestedOneWithoutGalleriesInput
  }

  export type galleryUncheckedCreateInput = {
    gallery_id: string
    spot_id?: string | null
    gallery_img?: string | null
    gallery_caption?: string | null
  }

  export type galleryUpdateInput = {
    gallery_id?: StringFieldUpdateOperationsInput | string
    gallery_img?: NullableStringFieldUpdateOperationsInput | string | null
    gallery_caption?: NullableStringFieldUpdateOperationsInput | string | null
    spot?: spot_tourismUpdateOneWithoutGalleriesNestedInput
  }

  export type galleryUncheckedUpdateInput = {
    gallery_id?: StringFieldUpdateOperationsInput | string
    spot_id?: NullableStringFieldUpdateOperationsInput | string | null
    gallery_img?: NullableStringFieldUpdateOperationsInput | string | null
    gallery_caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type galleryCreateManyInput = {
    gallery_id: string
    spot_id?: string | null
    gallery_img?: string | null
    gallery_caption?: string | null
  }

  export type galleryUpdateManyMutationInput = {
    gallery_id?: StringFieldUpdateOperationsInput | string
    gallery_img?: NullableStringFieldUpdateOperationsInput | string | null
    gallery_caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type galleryUncheckedUpdateManyInput = {
    gallery_id?: StringFieldUpdateOperationsInput | string
    spot_id?: NullableStringFieldUpdateOperationsInput | string | null
    gallery_img?: NullableStringFieldUpdateOperationsInput | string | null
    gallery_caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type operating_hoursCreateInput = {
    operating_id: string
    operating_day: $Enums.OperatingDay
    hours_open: Date | string
    hours_closed: Date | string
    spot?: spot_tourismCreateNestedOneWithoutOperating_hoursInput
  }

  export type operating_hoursUncheckedCreateInput = {
    operating_id: string
    spot_id?: string | null
    operating_day: $Enums.OperatingDay
    hours_open: Date | string
    hours_closed: Date | string
  }

  export type operating_hoursUpdateInput = {
    operating_id?: StringFieldUpdateOperationsInput | string
    operating_day?: EnumOperatingDayFieldUpdateOperationsInput | $Enums.OperatingDay
    hours_open?: DateTimeFieldUpdateOperationsInput | Date | string
    hours_closed?: DateTimeFieldUpdateOperationsInput | Date | string
    spot?: spot_tourismUpdateOneWithoutOperating_hoursNestedInput
  }

  export type operating_hoursUncheckedUpdateInput = {
    operating_id?: StringFieldUpdateOperationsInput | string
    spot_id?: NullableStringFieldUpdateOperationsInput | string | null
    operating_day?: EnumOperatingDayFieldUpdateOperationsInput | $Enums.OperatingDay
    hours_open?: DateTimeFieldUpdateOperationsInput | Date | string
    hours_closed?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type operating_hoursCreateManyInput = {
    operating_id: string
    spot_id?: string | null
    operating_day: $Enums.OperatingDay
    hours_open: Date | string
    hours_closed: Date | string
  }

  export type operating_hoursUpdateManyMutationInput = {
    operating_id?: StringFieldUpdateOperationsInput | string
    operating_day?: EnumOperatingDayFieldUpdateOperationsInput | $Enums.OperatingDay
    hours_open?: DateTimeFieldUpdateOperationsInput | Date | string
    hours_closed?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type operating_hoursUncheckedUpdateManyInput = {
    operating_id?: StringFieldUpdateOperationsInput | string
    spot_id?: NullableStringFieldUpdateOperationsInput | string | null
    operating_day?: EnumOperatingDayFieldUpdateOperationsInput | $Enums.OperatingDay
    hours_open?: DateTimeFieldUpdateOperationsInput | Date | string
    hours_closed?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentCreateInput = {
    reference_number: string
    payment_type: string
    payment_amount: Decimal | DecimalJsLike | number | string
    payment_status?: $Enums.PaymentStatus
    payment_time?: Date | string
    response_data: JsonNullValueInput | InputJsonValue
    transaction: transactionCreateNestedOneWithoutPaymentsInput
  }

  export type paymentUncheckedCreateInput = {
    payment_id?: number
    transaction_id: number
    reference_number: string
    payment_type: string
    payment_amount: Decimal | DecimalJsLike | number | string
    payment_status?: $Enums.PaymentStatus
    payment_time?: Date | string
    response_data: JsonNullValueInput | InputJsonValue
  }

  export type paymentUpdateInput = {
    reference_number?: StringFieldUpdateOperationsInput | string
    payment_type?: StringFieldUpdateOperationsInput | string
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    response_data?: JsonNullValueInput | InputJsonValue
    transaction?: transactionUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type paymentUncheckedUpdateInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    reference_number?: StringFieldUpdateOperationsInput | string
    payment_type?: StringFieldUpdateOperationsInput | string
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    response_data?: JsonNullValueInput | InputJsonValue
  }

  export type paymentCreateManyInput = {
    payment_id?: number
    transaction_id: number
    reference_number: string
    payment_type: string
    payment_amount: Decimal | DecimalJsLike | number | string
    payment_status?: $Enums.PaymentStatus
    payment_time?: Date | string
    response_data: JsonNullValueInput | InputJsonValue
  }

  export type paymentUpdateManyMutationInput = {
    reference_number?: StringFieldUpdateOperationsInput | string
    payment_type?: StringFieldUpdateOperationsInput | string
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    response_data?: JsonNullValueInput | InputJsonValue
  }

  export type paymentUncheckedUpdateManyInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    reference_number?: StringFieldUpdateOperationsInput | string
    payment_type?: StringFieldUpdateOperationsInput | string
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    response_data?: JsonNullValueInput | InputJsonValue
  }

  export type reviewsCreateInput = {
    reviews_id: string
    reviews_rating?: number | null
    reviews_desc?: string | null
    reviews_created_at?: Date | string | null
    spot?: spot_tourismCreateNestedOneWithoutReviewsInput
    user?: usersCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateInput = {
    reviews_id: string
    spot_id?: string | null
    user_id?: string | null
    reviews_rating?: number | null
    reviews_desc?: string | null
    reviews_created_at?: Date | string | null
  }

  export type reviewsUpdateInput = {
    reviews_id?: StringFieldUpdateOperationsInput | string
    reviews_rating?: NullableIntFieldUpdateOperationsInput | number | null
    reviews_desc?: NullableStringFieldUpdateOperationsInput | string | null
    reviews_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spot?: spot_tourismUpdateOneWithoutReviewsNestedInput
    user?: usersUpdateOneWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateInput = {
    reviews_id?: StringFieldUpdateOperationsInput | string
    spot_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    reviews_rating?: NullableIntFieldUpdateOperationsInput | number | null
    reviews_desc?: NullableStringFieldUpdateOperationsInput | string | null
    reviews_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsCreateManyInput = {
    reviews_id: string
    spot_id?: string | null
    user_id?: string | null
    reviews_rating?: number | null
    reviews_desc?: string | null
    reviews_created_at?: Date | string | null
  }

  export type reviewsUpdateManyMutationInput = {
    reviews_id?: StringFieldUpdateOperationsInput | string
    reviews_rating?: NullableIntFieldUpdateOperationsInput | number | null
    reviews_desc?: NullableStringFieldUpdateOperationsInput | string | null
    reviews_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsUncheckedUpdateManyInput = {
    reviews_id?: StringFieldUpdateOperationsInput | string
    spot_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    reviews_rating?: NullableIntFieldUpdateOperationsInput | number | null
    reviews_desc?: NullableStringFieldUpdateOperationsInput | string | null
    reviews_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type spot_tourismCreateInput = {
    spot_id: string
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
    facility_tourisms?: facility_tourismCreateNestedManyWithoutSpotInput
    galleries?: galleryCreateNestedManyWithoutSpotInput
    operating_hours?: operating_hoursCreateNestedManyWithoutSpotInput
    reviews?: reviewsCreateNestedManyWithoutSpotInput
    category?: category_tourismCreateNestedOneWithoutSpotsInput
    village?: villageCreateNestedOneWithoutSpotsInput
    tickets?: ticketCreateNestedManyWithoutSpotInput
  }

  export type spot_tourismUncheckedCreateInput = {
    spot_id: string
    category_id?: string | null
    village_id?: string | null
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
    facility_tourisms?: facility_tourismUncheckedCreateNestedManyWithoutSpotInput
    galleries?: galleryUncheckedCreateNestedManyWithoutSpotInput
    operating_hours?: operating_hoursUncheckedCreateNestedManyWithoutSpotInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutSpotInput
    tickets?: ticketUncheckedCreateNestedManyWithoutSpotInput
  }

  export type spot_tourismUpdateInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
    facility_tourisms?: facility_tourismUpdateManyWithoutSpotNestedInput
    galleries?: galleryUpdateManyWithoutSpotNestedInput
    operating_hours?: operating_hoursUpdateManyWithoutSpotNestedInput
    reviews?: reviewsUpdateManyWithoutSpotNestedInput
    category?: category_tourismUpdateOneWithoutSpotsNestedInput
    village?: villageUpdateOneWithoutSpotsNestedInput
    tickets?: ticketUpdateManyWithoutSpotNestedInput
  }

  export type spot_tourismUncheckedUpdateInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    village_id?: NullableStringFieldUpdateOperationsInput | string | null
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
    facility_tourisms?: facility_tourismUncheckedUpdateManyWithoutSpotNestedInput
    galleries?: galleryUncheckedUpdateManyWithoutSpotNestedInput
    operating_hours?: operating_hoursUncheckedUpdateManyWithoutSpotNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutSpotNestedInput
    tickets?: ticketUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type spot_tourismCreateManyInput = {
    spot_id: string
    category_id?: string | null
    village_id?: string | null
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
  }

  export type spot_tourismUpdateManyMutationInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spot_tourismUncheckedUpdateManyInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    village_id?: NullableStringFieldUpdateOperationsInput | string | null
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ticketCreateInput = {
    ticket_id: string
    ticket_name?: string | null
    ticket_price: Decimal | DecimalJsLike | number | string
    ticket_desc?: string | null
    ticket_stock?: number | null
    code: string
    url_qr: string
    spot?: spot_tourismCreateNestedOneWithoutTicketsInput
    temp_order_details?: temp_order_detailCreateNestedManyWithoutTicketInput
    transaction_details?: transaction_detailCreateNestedManyWithoutTicketInput
  }

  export type ticketUncheckedCreateInput = {
    ticket_id: string
    spot_id?: string | null
    ticket_name?: string | null
    ticket_price: Decimal | DecimalJsLike | number | string
    ticket_desc?: string | null
    ticket_stock?: number | null
    code: string
    url_qr: string
    temp_order_details?: temp_order_detailUncheckedCreateNestedManyWithoutTicketInput
    transaction_details?: transaction_detailUncheckedCreateNestedManyWithoutTicketInput
  }

  export type ticketUpdateInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    ticket_name?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_desc?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_stock?: NullableIntFieldUpdateOperationsInput | number | null
    code?: StringFieldUpdateOperationsInput | string
    url_qr?: StringFieldUpdateOperationsInput | string
    spot?: spot_tourismUpdateOneWithoutTicketsNestedInput
    temp_order_details?: temp_order_detailUpdateManyWithoutTicketNestedInput
    transaction_details?: transaction_detailUpdateManyWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    spot_id?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_name?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_desc?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_stock?: NullableIntFieldUpdateOperationsInput | number | null
    code?: StringFieldUpdateOperationsInput | string
    url_qr?: StringFieldUpdateOperationsInput | string
    temp_order_details?: temp_order_detailUncheckedUpdateManyWithoutTicketNestedInput
    transaction_details?: transaction_detailUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type ticketCreateManyInput = {
    ticket_id: string
    spot_id?: string | null
    ticket_name?: string | null
    ticket_price: Decimal | DecimalJsLike | number | string
    ticket_desc?: string | null
    ticket_stock?: number | null
    code: string
    url_qr: string
  }

  export type ticketUpdateManyMutationInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    ticket_name?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_desc?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_stock?: NullableIntFieldUpdateOperationsInput | number | null
    code?: StringFieldUpdateOperationsInput | string
    url_qr?: StringFieldUpdateOperationsInput | string
  }

  export type ticketUncheckedUpdateManyInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    spot_id?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_name?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_desc?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_stock?: NullableIntFieldUpdateOperationsInput | number | null
    code?: StringFieldUpdateOperationsInput | string
    url_qr?: StringFieldUpdateOperationsInput | string
  }

  export type transactionCreateInput = {
    transaction_code: string
    total_price: Decimal | DecimalJsLike | number | string
    transaction_status?: $Enums.TransactionStatus | null
    transaction_date?: Date | string | null
    visit_date: Date | string
    payments?: paymentCreateNestedManyWithoutTransactionInput
    user?: usersCreateNestedOneWithoutTransactionsInput
    transaction_details?: transaction_detailCreateNestedManyWithoutTransactionInput
  }

  export type transactionUncheckedCreateInput = {
    transaction_id?: number
    user_id?: string | null
    transaction_code: string
    total_price: Decimal | DecimalJsLike | number | string
    transaction_status?: $Enums.TransactionStatus | null
    transaction_date?: Date | string | null
    visit_date: Date | string
    payments?: paymentUncheckedCreateNestedManyWithoutTransactionInput
    transaction_details?: transaction_detailUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type transactionUpdateInput = {
    transaction_code?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_status?: NullableEnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentUpdateManyWithoutTransactionNestedInput
    user?: usersUpdateOneWithoutTransactionsNestedInput
    transaction_details?: transaction_detailUpdateManyWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_code?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_status?: NullableEnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentUncheckedUpdateManyWithoutTransactionNestedInput
    transaction_details?: transaction_detailUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type transactionCreateManyInput = {
    transaction_id?: number
    user_id?: string | null
    transaction_code: string
    total_price: Decimal | DecimalJsLike | number | string
    transaction_status?: $Enums.TransactionStatus | null
    transaction_date?: Date | string | null
    visit_date: Date | string
  }

  export type transactionUpdateManyMutationInput = {
    transaction_code?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_status?: NullableEnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionUncheckedUpdateManyInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_code?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_status?: NullableEnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transaction_detailCreateInput = {
    detail_quantity: number
    detail_price: Decimal | DecimalJsLike | number | string
    detail_subtotal?: Decimal | DecimalJsLike | number | string | null
    is_used?: $Enums.TicketStatus
    transaction?: transactionCreateNestedOneWithoutTransaction_detailsInput
    ticket?: ticketCreateNestedOneWithoutTransaction_detailsInput
  }

  export type transaction_detailUncheckedCreateInput = {
    transaction_detail_id?: number
    transaction_id?: number | null
    ticket_id?: string | null
    detail_quantity: number
    detail_price: Decimal | DecimalJsLike | number | string
    detail_subtotal?: Decimal | DecimalJsLike | number | string | null
    is_used?: $Enums.TicketStatus
  }

  export type transaction_detailUpdateInput = {
    detail_quantity?: IntFieldUpdateOperationsInput | number
    detail_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detail_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_used?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    transaction?: transactionUpdateOneWithoutTransaction_detailsNestedInput
    ticket?: ticketUpdateOneWithoutTransaction_detailsNestedInput
  }

  export type transaction_detailUncheckedUpdateInput = {
    transaction_detail_id?: IntFieldUpdateOperationsInput | number
    transaction_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableStringFieldUpdateOperationsInput | string | null
    detail_quantity?: IntFieldUpdateOperationsInput | number
    detail_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detail_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_used?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
  }

  export type transaction_detailCreateManyInput = {
    transaction_detail_id?: number
    transaction_id?: number | null
    ticket_id?: string | null
    detail_quantity: number
    detail_price: Decimal | DecimalJsLike | number | string
    detail_subtotal?: Decimal | DecimalJsLike | number | string | null
    is_used?: $Enums.TicketStatus
  }

  export type transaction_detailUpdateManyMutationInput = {
    detail_quantity?: IntFieldUpdateOperationsInput | number
    detail_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detail_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_used?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
  }

  export type transaction_detailUncheckedUpdateManyInput = {
    transaction_detail_id?: IntFieldUpdateOperationsInput | number
    transaction_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_id?: NullableStringFieldUpdateOperationsInput | string | null
    detail_quantity?: IntFieldUpdateOperationsInput | number
    detail_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detail_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_used?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
  }

  export type usersCreateInput = {
    user_id: string
    name: string
    email: string
    password: string
    phone_number?: string | null
    address?: string | null
    role: $Enums.Role
    reviews?: reviewsCreateNestedManyWithoutUserInput
    transactions?: transactionCreateNestedManyWithoutUserInput
    temp_orders?: temp_orderCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    user_id: string
    name: string
    email: string
    password: string
    phone_number?: string | null
    address?: string | null
    role: $Enums.Role
    reviews?: reviewsUncheckedCreateNestedManyWithoutUserInput
    transactions?: transactionUncheckedCreateNestedManyWithoutUserInput
    temp_orders?: temp_orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    reviews?: reviewsUpdateManyWithoutUserNestedInput
    transactions?: transactionUpdateManyWithoutUserNestedInput
    temp_orders?: temp_orderUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    reviews?: reviewsUncheckedUpdateManyWithoutUserNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutUserNestedInput
    temp_orders?: temp_orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    user_id: string
    name: string
    email: string
    password: string
    phone_number?: string | null
    address?: string | null
    role: $Enums.Role
  }

  export type usersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type villageCreateInput = {
    village_id: string
    village_name: string
    village_city: string
    spots?: spot_tourismCreateNestedManyWithoutVillageInput
  }

  export type villageUncheckedCreateInput = {
    village_id: string
    village_name: string
    village_city: string
    spots?: spot_tourismUncheckedCreateNestedManyWithoutVillageInput
  }

  export type villageUpdateInput = {
    village_id?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    village_city?: StringFieldUpdateOperationsInput | string
    spots?: spot_tourismUpdateManyWithoutVillageNestedInput
  }

  export type villageUncheckedUpdateInput = {
    village_id?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    village_city?: StringFieldUpdateOperationsInput | string
    spots?: spot_tourismUncheckedUpdateManyWithoutVillageNestedInput
  }

  export type villageCreateManyInput = {
    village_id: string
    village_name: string
    village_city: string
  }

  export type villageUpdateManyMutationInput = {
    village_id?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    village_city?: StringFieldUpdateOperationsInput | string
  }

  export type villageUncheckedUpdateManyInput = {
    village_id?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    village_city?: StringFieldUpdateOperationsInput | string
  }

  export type temp_orderCreateInput = {
    order_id: string
    visit_date: Date | string
    created_at?: Date | string
    status?: $Enums.TransactionStatus
    user: usersCreateNestedOneWithoutTemp_ordersInput
    details?: temp_order_detailCreateNestedManyWithoutTemp_orderInput
  }

  export type temp_orderUncheckedCreateInput = {
    temp_order_id?: number
    order_id: string
    user_id: string
    visit_date: Date | string
    created_at?: Date | string
    status?: $Enums.TransactionStatus
    details?: temp_order_detailUncheckedCreateNestedManyWithoutTemp_orderInput
  }

  export type temp_orderUpdateInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    user?: usersUpdateOneRequiredWithoutTemp_ordersNestedInput
    details?: temp_order_detailUpdateManyWithoutTemp_orderNestedInput
  }

  export type temp_orderUncheckedUpdateInput = {
    temp_order_id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    details?: temp_order_detailUncheckedUpdateManyWithoutTemp_orderNestedInput
  }

  export type temp_orderCreateManyInput = {
    temp_order_id?: number
    order_id: string
    user_id: string
    visit_date: Date | string
    created_at?: Date | string
    status?: $Enums.TransactionStatus
  }

  export type temp_orderUpdateManyMutationInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type temp_orderUncheckedUpdateManyInput = {
    temp_order_id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type temp_order_detailCreateInput = {
    visitor_name?: string | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    temp_order: temp_orderCreateNestedOneWithoutDetailsInput
    ticket: ticketCreateNestedOneWithoutTemp_order_detailsInput
  }

  export type temp_order_detailUncheckedCreateInput = {
    temp_order_detail_id?: number
    temp_order_id: number
    ticket_id: string
    visitor_name?: string | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type temp_order_detailUpdateInput = {
    visitor_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    temp_order?: temp_orderUpdateOneRequiredWithoutDetailsNestedInput
    ticket?: ticketUpdateOneRequiredWithoutTemp_order_detailsNestedInput
  }

  export type temp_order_detailUncheckedUpdateInput = {
    temp_order_detail_id?: IntFieldUpdateOperationsInput | number
    temp_order_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: StringFieldUpdateOperationsInput | string
    visitor_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type temp_order_detailCreateManyInput = {
    temp_order_detail_id?: number
    temp_order_id: number
    ticket_id: string
    visitor_name?: string | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type temp_order_detailUpdateManyMutationInput = {
    visitor_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type temp_order_detailUncheckedUpdateManyInput = {
    temp_order_detail_id?: IntFieldUpdateOperationsInput | number
    temp_order_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: StringFieldUpdateOperationsInput | string
    visitor_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Spot_tourismListRelationFilter = {
    every?: spot_tourismWhereInput
    some?: spot_tourismWhereInput
    none?: spot_tourismWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type spot_tourismOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type category_tourismOrderByRelevanceInput = {
    fields: category_tourismOrderByRelevanceFieldEnum | category_tourismOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type category_tourismCountOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    category_desc?: SortOrder
    category_icon?: SortOrder
  }

  export type category_tourismMaxOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    category_desc?: SortOrder
    category_icon?: SortOrder
  }

  export type category_tourismMinOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    category_desc?: SortOrder
    category_icon?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Facility_tourismListRelationFilter = {
    every?: facility_tourismWhereInput
    some?: facility_tourismWhereInput
    none?: facility_tourismWhereInput
  }

  export type facility_tourismOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type facilityOrderByRelevanceInput = {
    fields: facilityOrderByRelevanceFieldEnum | facilityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type facilityCountOrderByAggregateInput = {
    facility_id?: SortOrder
    facility_name?: SortOrder
    facility_icon?: SortOrder
  }

  export type facilityMaxOrderByAggregateInput = {
    facility_id?: SortOrder
    facility_name?: SortOrder
    facility_icon?: SortOrder
  }

  export type facilityMinOrderByAggregateInput = {
    facility_id?: SortOrder
    facility_name?: SortOrder
    facility_icon?: SortOrder
  }

  export type Spot_tourismNullableScalarRelationFilter = {
    is?: spot_tourismWhereInput | null
    isNot?: spot_tourismWhereInput | null
  }

  export type FacilityNullableScalarRelationFilter = {
    is?: facilityWhereInput | null
    isNot?: facilityWhereInput | null
  }

  export type facility_tourismOrderByRelevanceInput = {
    fields: facility_tourismOrderByRelevanceFieldEnum | facility_tourismOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type facility_tourismCountOrderByAggregateInput = {
    facility_tourism_id?: SortOrder
    spot_id?: SortOrder
    facility_id?: SortOrder
  }

  export type facility_tourismMaxOrderByAggregateInput = {
    facility_tourism_id?: SortOrder
    spot_id?: SortOrder
    facility_id?: SortOrder
  }

  export type facility_tourismMinOrderByAggregateInput = {
    facility_tourism_id?: SortOrder
    spot_id?: SortOrder
    facility_id?: SortOrder
  }

  export type galleryOrderByRelevanceInput = {
    fields: galleryOrderByRelevanceFieldEnum | galleryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type galleryCountOrderByAggregateInput = {
    gallery_id?: SortOrder
    spot_id?: SortOrder
    gallery_img?: SortOrder
    gallery_caption?: SortOrder
  }

  export type galleryMaxOrderByAggregateInput = {
    gallery_id?: SortOrder
    spot_id?: SortOrder
    gallery_img?: SortOrder
    gallery_caption?: SortOrder
  }

  export type galleryMinOrderByAggregateInput = {
    gallery_id?: SortOrder
    spot_id?: SortOrder
    gallery_img?: SortOrder
    gallery_caption?: SortOrder
  }

  export type EnumOperatingDayFilter<$PrismaModel = never> = {
    equals?: $Enums.OperatingDay | EnumOperatingDayFieldRefInput<$PrismaModel>
    in?: $Enums.OperatingDay[]
    notIn?: $Enums.OperatingDay[]
    not?: NestedEnumOperatingDayFilter<$PrismaModel> | $Enums.OperatingDay
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type operating_hoursOrderByRelevanceInput = {
    fields: operating_hoursOrderByRelevanceFieldEnum | operating_hoursOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type operating_hoursCountOrderByAggregateInput = {
    operating_id?: SortOrder
    spot_id?: SortOrder
    operating_day?: SortOrder
    hours_open?: SortOrder
    hours_closed?: SortOrder
  }

  export type operating_hoursMaxOrderByAggregateInput = {
    operating_id?: SortOrder
    spot_id?: SortOrder
    operating_day?: SortOrder
    hours_open?: SortOrder
    hours_closed?: SortOrder
  }

  export type operating_hoursMinOrderByAggregateInput = {
    operating_id?: SortOrder
    spot_id?: SortOrder
    operating_day?: SortOrder
    hours_open?: SortOrder
    hours_closed?: SortOrder
  }

  export type EnumOperatingDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OperatingDay | EnumOperatingDayFieldRefInput<$PrismaModel>
    in?: $Enums.OperatingDay[]
    notIn?: $Enums.OperatingDay[]
    not?: NestedEnumOperatingDayWithAggregatesFilter<$PrismaModel> | $Enums.OperatingDay
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOperatingDayFilter<$PrismaModel>
    _max?: NestedEnumOperatingDayFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TransactionScalarRelationFilter = {
    is?: transactionWhereInput
    isNot?: transactionWhereInput
  }

  export type paymentOrderByRelevanceInput = {
    fields: paymentOrderByRelevanceFieldEnum | paymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type paymentCountOrderByAggregateInput = {
    payment_id?: SortOrder
    transaction_id?: SortOrder
    reference_number?: SortOrder
    payment_type?: SortOrder
    payment_amount?: SortOrder
    payment_status?: SortOrder
    payment_time?: SortOrder
    response_data?: SortOrder
  }

  export type paymentAvgOrderByAggregateInput = {
    payment_id?: SortOrder
    transaction_id?: SortOrder
    payment_amount?: SortOrder
  }

  export type paymentMaxOrderByAggregateInput = {
    payment_id?: SortOrder
    transaction_id?: SortOrder
    reference_number?: SortOrder
    payment_type?: SortOrder
    payment_amount?: SortOrder
    payment_status?: SortOrder
    payment_time?: SortOrder
  }

  export type paymentMinOrderByAggregateInput = {
    payment_id?: SortOrder
    transaction_id?: SortOrder
    reference_number?: SortOrder
    payment_type?: SortOrder
    payment_amount?: SortOrder
    payment_status?: SortOrder
    payment_time?: SortOrder
  }

  export type paymentSumOrderByAggregateInput = {
    payment_id?: SortOrder
    transaction_id?: SortOrder
    payment_amount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type reviewsOrderByRelevanceInput = {
    fields: reviewsOrderByRelevanceFieldEnum | reviewsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type reviewsCountOrderByAggregateInput = {
    reviews_id?: SortOrder
    spot_id?: SortOrder
    user_id?: SortOrder
    reviews_rating?: SortOrder
    reviews_desc?: SortOrder
    reviews_created_at?: SortOrder
  }

  export type reviewsAvgOrderByAggregateInput = {
    reviews_rating?: SortOrder
  }

  export type reviewsMaxOrderByAggregateInput = {
    reviews_id?: SortOrder
    spot_id?: SortOrder
    user_id?: SortOrder
    reviews_rating?: SortOrder
    reviews_desc?: SortOrder
    reviews_created_at?: SortOrder
  }

  export type reviewsMinOrderByAggregateInput = {
    reviews_id?: SortOrder
    spot_id?: SortOrder
    user_id?: SortOrder
    reviews_rating?: SortOrder
    reviews_desc?: SortOrder
    reviews_created_at?: SortOrder
  }

  export type reviewsSumOrderByAggregateInput = {
    reviews_rating?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type GalleryListRelationFilter = {
    every?: galleryWhereInput
    some?: galleryWhereInput
    none?: galleryWhereInput
  }

  export type Operating_hoursListRelationFilter = {
    every?: operating_hoursWhereInput
    some?: operating_hoursWhereInput
    none?: operating_hoursWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: reviewsWhereInput
    some?: reviewsWhereInput
    none?: reviewsWhereInput
  }

  export type Category_tourismNullableScalarRelationFilter = {
    is?: category_tourismWhereInput | null
    isNot?: category_tourismWhereInput | null
  }

  export type VillageNullableScalarRelationFilter = {
    is?: villageWhereInput | null
    isNot?: villageWhereInput | null
  }

  export type TicketListRelationFilter = {
    every?: ticketWhereInput
    some?: ticketWhereInput
    none?: ticketWhereInput
  }

  export type galleryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type operating_hoursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ticketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type spot_tourismOrderByRelevanceInput = {
    fields: spot_tourismOrderByRelevanceFieldEnum | spot_tourismOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type spot_tourismCountOrderByAggregateInput = {
    spot_id?: SortOrder
    category_id?: SortOrder
    village_id?: SortOrder
    spot_name?: SortOrder
    spot_desc?: SortOrder
    spot_address?: SortOrder
    spot_maps?: SortOrder
    spot_thumbnail?: SortOrder
    spot_rating?: SortOrder
    spot_contact?: SortOrder
  }

  export type spot_tourismAvgOrderByAggregateInput = {
    spot_rating?: SortOrder
  }

  export type spot_tourismMaxOrderByAggregateInput = {
    spot_id?: SortOrder
    category_id?: SortOrder
    village_id?: SortOrder
    spot_name?: SortOrder
    spot_desc?: SortOrder
    spot_address?: SortOrder
    spot_maps?: SortOrder
    spot_thumbnail?: SortOrder
    spot_rating?: SortOrder
    spot_contact?: SortOrder
  }

  export type spot_tourismMinOrderByAggregateInput = {
    spot_id?: SortOrder
    category_id?: SortOrder
    village_id?: SortOrder
    spot_name?: SortOrder
    spot_desc?: SortOrder
    spot_address?: SortOrder
    spot_maps?: SortOrder
    spot_thumbnail?: SortOrder
    spot_rating?: SortOrder
    spot_contact?: SortOrder
  }

  export type spot_tourismSumOrderByAggregateInput = {
    spot_rating?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Temp_order_detailListRelationFilter = {
    every?: temp_order_detailWhereInput
    some?: temp_order_detailWhereInput
    none?: temp_order_detailWhereInput
  }

  export type Transaction_detailListRelationFilter = {
    every?: transaction_detailWhereInput
    some?: transaction_detailWhereInput
    none?: transaction_detailWhereInput
  }

  export type temp_order_detailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transaction_detailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ticketOrderByRelevanceInput = {
    fields: ticketOrderByRelevanceFieldEnum | ticketOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ticketCountOrderByAggregateInput = {
    ticket_id?: SortOrder
    spot_id?: SortOrder
    ticket_name?: SortOrder
    ticket_price?: SortOrder
    ticket_desc?: SortOrder
    ticket_stock?: SortOrder
    code?: SortOrder
    url_qr?: SortOrder
  }

  export type ticketAvgOrderByAggregateInput = {
    ticket_price?: SortOrder
    ticket_stock?: SortOrder
  }

  export type ticketMaxOrderByAggregateInput = {
    ticket_id?: SortOrder
    spot_id?: SortOrder
    ticket_name?: SortOrder
    ticket_price?: SortOrder
    ticket_desc?: SortOrder
    ticket_stock?: SortOrder
    code?: SortOrder
    url_qr?: SortOrder
  }

  export type ticketMinOrderByAggregateInput = {
    ticket_id?: SortOrder
    spot_id?: SortOrder
    ticket_name?: SortOrder
    ticket_price?: SortOrder
    ticket_desc?: SortOrder
    ticket_stock?: SortOrder
    code?: SortOrder
    url_qr?: SortOrder
  }

  export type ticketSumOrderByAggregateInput = {
    ticket_price?: SortOrder
    ticket_stock?: SortOrder
  }

  export type EnumTransactionStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransactionStatus[] | null
    notIn?: $Enums.TransactionStatus[] | null
    not?: NestedEnumTransactionStatusNullableFilter<$PrismaModel> | $Enums.TransactionStatus | null
  }

  export type PaymentListRelationFilter = {
    every?: paymentWhereInput
    some?: paymentWhereInput
    none?: paymentWhereInput
  }

  export type paymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transactionOrderByRelevanceInput = {
    fields: transactionOrderByRelevanceFieldEnum | transactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type transactionCountOrderByAggregateInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    transaction_code?: SortOrder
    total_price?: SortOrder
    transaction_status?: SortOrder
    transaction_date?: SortOrder
    visit_date?: SortOrder
  }

  export type transactionAvgOrderByAggregateInput = {
    transaction_id?: SortOrder
    total_price?: SortOrder
  }

  export type transactionMaxOrderByAggregateInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    transaction_code?: SortOrder
    total_price?: SortOrder
    transaction_status?: SortOrder
    transaction_date?: SortOrder
    visit_date?: SortOrder
  }

  export type transactionMinOrderByAggregateInput = {
    transaction_id?: SortOrder
    user_id?: SortOrder
    transaction_code?: SortOrder
    total_price?: SortOrder
    transaction_status?: SortOrder
    transaction_date?: SortOrder
    visit_date?: SortOrder
  }

  export type transactionSumOrderByAggregateInput = {
    transaction_id?: SortOrder
    total_price?: SortOrder
  }

  export type EnumTransactionStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransactionStatus[] | null
    notIn?: $Enums.TransactionStatus[] | null
    not?: NestedEnumTransactionStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusNullableFilter<$PrismaModel>
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type TransactionNullableScalarRelationFilter = {
    is?: transactionWhereInput | null
    isNot?: transactionWhereInput | null
  }

  export type TicketNullableScalarRelationFilter = {
    is?: ticketWhereInput | null
    isNot?: ticketWhereInput | null
  }

  export type transaction_detailOrderByRelevanceInput = {
    fields: transaction_detailOrderByRelevanceFieldEnum | transaction_detailOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type transaction_detailCountOrderByAggregateInput = {
    transaction_detail_id?: SortOrder
    transaction_id?: SortOrder
    ticket_id?: SortOrder
    detail_quantity?: SortOrder
    detail_price?: SortOrder
    detail_subtotal?: SortOrder
    is_used?: SortOrder
  }

  export type transaction_detailAvgOrderByAggregateInput = {
    transaction_detail_id?: SortOrder
    transaction_id?: SortOrder
    detail_quantity?: SortOrder
    detail_price?: SortOrder
    detail_subtotal?: SortOrder
  }

  export type transaction_detailMaxOrderByAggregateInput = {
    transaction_detail_id?: SortOrder
    transaction_id?: SortOrder
    ticket_id?: SortOrder
    detail_quantity?: SortOrder
    detail_price?: SortOrder
    detail_subtotal?: SortOrder
    is_used?: SortOrder
  }

  export type transaction_detailMinOrderByAggregateInput = {
    transaction_detail_id?: SortOrder
    transaction_id?: SortOrder
    ticket_id?: SortOrder
    detail_quantity?: SortOrder
    detail_price?: SortOrder
    detail_subtotal?: SortOrder
    is_used?: SortOrder
  }

  export type transaction_detailSumOrderByAggregateInput = {
    transaction_detail_id?: SortOrder
    transaction_id?: SortOrder
    detail_quantity?: SortOrder
    detail_price?: SortOrder
    detail_subtotal?: SortOrder
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type TransactionListRelationFilter = {
    every?: transactionWhereInput
    some?: transactionWhereInput
    none?: transactionWhereInput
  }

  export type Temp_orderListRelationFilter = {
    every?: temp_orderWhereInput
    some?: temp_orderWhereInput
    none?: temp_orderWhereInput
  }

  export type transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type temp_orderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    role?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    role?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type villageOrderByRelevanceInput = {
    fields: villageOrderByRelevanceFieldEnum | villageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type villageCountOrderByAggregateInput = {
    village_id?: SortOrder
    village_name?: SortOrder
    village_city?: SortOrder
  }

  export type villageMaxOrderByAggregateInput = {
    village_id?: SortOrder
    village_name?: SortOrder
    village_city?: SortOrder
  }

  export type villageMinOrderByAggregateInput = {
    village_id?: SortOrder
    village_name?: SortOrder
    village_city?: SortOrder
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type temp_orderOrderByRelevanceInput = {
    fields: temp_orderOrderByRelevanceFieldEnum | temp_orderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type temp_orderCountOrderByAggregateInput = {
    temp_order_id?: SortOrder
    order_id?: SortOrder
    user_id?: SortOrder
    visit_date?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type temp_orderAvgOrderByAggregateInput = {
    temp_order_id?: SortOrder
  }

  export type temp_orderMaxOrderByAggregateInput = {
    temp_order_id?: SortOrder
    order_id?: SortOrder
    user_id?: SortOrder
    visit_date?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type temp_orderMinOrderByAggregateInput = {
    temp_order_id?: SortOrder
    order_id?: SortOrder
    user_id?: SortOrder
    visit_date?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type temp_orderSumOrderByAggregateInput = {
    temp_order_id?: SortOrder
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type Temp_orderScalarRelationFilter = {
    is?: temp_orderWhereInput
    isNot?: temp_orderWhereInput
  }

  export type TicketScalarRelationFilter = {
    is?: ticketWhereInput
    isNot?: ticketWhereInput
  }

  export type temp_order_detailOrderByRelevanceInput = {
    fields: temp_order_detailOrderByRelevanceFieldEnum | temp_order_detailOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type temp_order_detailCountOrderByAggregateInput = {
    temp_order_detail_id?: SortOrder
    temp_order_id?: SortOrder
    ticket_id?: SortOrder
    visitor_name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
  }

  export type temp_order_detailAvgOrderByAggregateInput = {
    temp_order_detail_id?: SortOrder
    temp_order_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
  }

  export type temp_order_detailMaxOrderByAggregateInput = {
    temp_order_detail_id?: SortOrder
    temp_order_id?: SortOrder
    ticket_id?: SortOrder
    visitor_name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
  }

  export type temp_order_detailMinOrderByAggregateInput = {
    temp_order_detail_id?: SortOrder
    temp_order_id?: SortOrder
    ticket_id?: SortOrder
    visitor_name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
  }

  export type temp_order_detailSumOrderByAggregateInput = {
    temp_order_detail_id?: SortOrder
    temp_order_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    subtotal?: SortOrder
  }

  export type spot_tourismCreateNestedManyWithoutCategoryInput = {
    create?: XOR<spot_tourismCreateWithoutCategoryInput, spot_tourismUncheckedCreateWithoutCategoryInput> | spot_tourismCreateWithoutCategoryInput[] | spot_tourismUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: spot_tourismCreateOrConnectWithoutCategoryInput | spot_tourismCreateOrConnectWithoutCategoryInput[]
    createMany?: spot_tourismCreateManyCategoryInputEnvelope
    connect?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
  }

  export type spot_tourismUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<spot_tourismCreateWithoutCategoryInput, spot_tourismUncheckedCreateWithoutCategoryInput> | spot_tourismCreateWithoutCategoryInput[] | spot_tourismUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: spot_tourismCreateOrConnectWithoutCategoryInput | spot_tourismCreateOrConnectWithoutCategoryInput[]
    createMany?: spot_tourismCreateManyCategoryInputEnvelope
    connect?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type spot_tourismUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<spot_tourismCreateWithoutCategoryInput, spot_tourismUncheckedCreateWithoutCategoryInput> | spot_tourismCreateWithoutCategoryInput[] | spot_tourismUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: spot_tourismCreateOrConnectWithoutCategoryInput | spot_tourismCreateOrConnectWithoutCategoryInput[]
    upsert?: spot_tourismUpsertWithWhereUniqueWithoutCategoryInput | spot_tourismUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: spot_tourismCreateManyCategoryInputEnvelope
    set?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
    disconnect?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
    delete?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
    connect?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
    update?: spot_tourismUpdateWithWhereUniqueWithoutCategoryInput | spot_tourismUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: spot_tourismUpdateManyWithWhereWithoutCategoryInput | spot_tourismUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: spot_tourismScalarWhereInput | spot_tourismScalarWhereInput[]
  }

  export type spot_tourismUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<spot_tourismCreateWithoutCategoryInput, spot_tourismUncheckedCreateWithoutCategoryInput> | spot_tourismCreateWithoutCategoryInput[] | spot_tourismUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: spot_tourismCreateOrConnectWithoutCategoryInput | spot_tourismCreateOrConnectWithoutCategoryInput[]
    upsert?: spot_tourismUpsertWithWhereUniqueWithoutCategoryInput | spot_tourismUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: spot_tourismCreateManyCategoryInputEnvelope
    set?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
    disconnect?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
    delete?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
    connect?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
    update?: spot_tourismUpdateWithWhereUniqueWithoutCategoryInput | spot_tourismUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: spot_tourismUpdateManyWithWhereWithoutCategoryInput | spot_tourismUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: spot_tourismScalarWhereInput | spot_tourismScalarWhereInput[]
  }

  export type facility_tourismCreateNestedManyWithoutFacilityInput = {
    create?: XOR<facility_tourismCreateWithoutFacilityInput, facility_tourismUncheckedCreateWithoutFacilityInput> | facility_tourismCreateWithoutFacilityInput[] | facility_tourismUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: facility_tourismCreateOrConnectWithoutFacilityInput | facility_tourismCreateOrConnectWithoutFacilityInput[]
    createMany?: facility_tourismCreateManyFacilityInputEnvelope
    connect?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
  }

  export type facility_tourismUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<facility_tourismCreateWithoutFacilityInput, facility_tourismUncheckedCreateWithoutFacilityInput> | facility_tourismCreateWithoutFacilityInput[] | facility_tourismUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: facility_tourismCreateOrConnectWithoutFacilityInput | facility_tourismCreateOrConnectWithoutFacilityInput[]
    createMany?: facility_tourismCreateManyFacilityInputEnvelope
    connect?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
  }

  export type facility_tourismUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<facility_tourismCreateWithoutFacilityInput, facility_tourismUncheckedCreateWithoutFacilityInput> | facility_tourismCreateWithoutFacilityInput[] | facility_tourismUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: facility_tourismCreateOrConnectWithoutFacilityInput | facility_tourismCreateOrConnectWithoutFacilityInput[]
    upsert?: facility_tourismUpsertWithWhereUniqueWithoutFacilityInput | facility_tourismUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: facility_tourismCreateManyFacilityInputEnvelope
    set?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
    disconnect?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
    delete?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
    connect?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
    update?: facility_tourismUpdateWithWhereUniqueWithoutFacilityInput | facility_tourismUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: facility_tourismUpdateManyWithWhereWithoutFacilityInput | facility_tourismUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: facility_tourismScalarWhereInput | facility_tourismScalarWhereInput[]
  }

  export type facility_tourismUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<facility_tourismCreateWithoutFacilityInput, facility_tourismUncheckedCreateWithoutFacilityInput> | facility_tourismCreateWithoutFacilityInput[] | facility_tourismUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: facility_tourismCreateOrConnectWithoutFacilityInput | facility_tourismCreateOrConnectWithoutFacilityInput[]
    upsert?: facility_tourismUpsertWithWhereUniqueWithoutFacilityInput | facility_tourismUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: facility_tourismCreateManyFacilityInputEnvelope
    set?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
    disconnect?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
    delete?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
    connect?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
    update?: facility_tourismUpdateWithWhereUniqueWithoutFacilityInput | facility_tourismUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: facility_tourismUpdateManyWithWhereWithoutFacilityInput | facility_tourismUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: facility_tourismScalarWhereInput | facility_tourismScalarWhereInput[]
  }

  export type spot_tourismCreateNestedOneWithoutFacility_tourismsInput = {
    create?: XOR<spot_tourismCreateWithoutFacility_tourismsInput, spot_tourismUncheckedCreateWithoutFacility_tourismsInput>
    connectOrCreate?: spot_tourismCreateOrConnectWithoutFacility_tourismsInput
    connect?: spot_tourismWhereUniqueInput
  }

  export type facilityCreateNestedOneWithoutFacility_tourismsInput = {
    create?: XOR<facilityCreateWithoutFacility_tourismsInput, facilityUncheckedCreateWithoutFacility_tourismsInput>
    connectOrCreate?: facilityCreateOrConnectWithoutFacility_tourismsInput
    connect?: facilityWhereUniqueInput
  }

  export type spot_tourismUpdateOneWithoutFacility_tourismsNestedInput = {
    create?: XOR<spot_tourismCreateWithoutFacility_tourismsInput, spot_tourismUncheckedCreateWithoutFacility_tourismsInput>
    connectOrCreate?: spot_tourismCreateOrConnectWithoutFacility_tourismsInput
    upsert?: spot_tourismUpsertWithoutFacility_tourismsInput
    disconnect?: spot_tourismWhereInput | boolean
    delete?: spot_tourismWhereInput | boolean
    connect?: spot_tourismWhereUniqueInput
    update?: XOR<XOR<spot_tourismUpdateToOneWithWhereWithoutFacility_tourismsInput, spot_tourismUpdateWithoutFacility_tourismsInput>, spot_tourismUncheckedUpdateWithoutFacility_tourismsInput>
  }

  export type facilityUpdateOneWithoutFacility_tourismsNestedInput = {
    create?: XOR<facilityCreateWithoutFacility_tourismsInput, facilityUncheckedCreateWithoutFacility_tourismsInput>
    connectOrCreate?: facilityCreateOrConnectWithoutFacility_tourismsInput
    upsert?: facilityUpsertWithoutFacility_tourismsInput
    disconnect?: facilityWhereInput | boolean
    delete?: facilityWhereInput | boolean
    connect?: facilityWhereUniqueInput
    update?: XOR<XOR<facilityUpdateToOneWithWhereWithoutFacility_tourismsInput, facilityUpdateWithoutFacility_tourismsInput>, facilityUncheckedUpdateWithoutFacility_tourismsInput>
  }

  export type spot_tourismCreateNestedOneWithoutGalleriesInput = {
    create?: XOR<spot_tourismCreateWithoutGalleriesInput, spot_tourismUncheckedCreateWithoutGalleriesInput>
    connectOrCreate?: spot_tourismCreateOrConnectWithoutGalleriesInput
    connect?: spot_tourismWhereUniqueInput
  }

  export type spot_tourismUpdateOneWithoutGalleriesNestedInput = {
    create?: XOR<spot_tourismCreateWithoutGalleriesInput, spot_tourismUncheckedCreateWithoutGalleriesInput>
    connectOrCreate?: spot_tourismCreateOrConnectWithoutGalleriesInput
    upsert?: spot_tourismUpsertWithoutGalleriesInput
    disconnect?: spot_tourismWhereInput | boolean
    delete?: spot_tourismWhereInput | boolean
    connect?: spot_tourismWhereUniqueInput
    update?: XOR<XOR<spot_tourismUpdateToOneWithWhereWithoutGalleriesInput, spot_tourismUpdateWithoutGalleriesInput>, spot_tourismUncheckedUpdateWithoutGalleriesInput>
  }

  export type spot_tourismCreateNestedOneWithoutOperating_hoursInput = {
    create?: XOR<spot_tourismCreateWithoutOperating_hoursInput, spot_tourismUncheckedCreateWithoutOperating_hoursInput>
    connectOrCreate?: spot_tourismCreateOrConnectWithoutOperating_hoursInput
    connect?: spot_tourismWhereUniqueInput
  }

  export type EnumOperatingDayFieldUpdateOperationsInput = {
    set?: $Enums.OperatingDay
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type spot_tourismUpdateOneWithoutOperating_hoursNestedInput = {
    create?: XOR<spot_tourismCreateWithoutOperating_hoursInput, spot_tourismUncheckedCreateWithoutOperating_hoursInput>
    connectOrCreate?: spot_tourismCreateOrConnectWithoutOperating_hoursInput
    upsert?: spot_tourismUpsertWithoutOperating_hoursInput
    disconnect?: spot_tourismWhereInput | boolean
    delete?: spot_tourismWhereInput | boolean
    connect?: spot_tourismWhereUniqueInput
    update?: XOR<XOR<spot_tourismUpdateToOneWithWhereWithoutOperating_hoursInput, spot_tourismUpdateWithoutOperating_hoursInput>, spot_tourismUncheckedUpdateWithoutOperating_hoursInput>
  }

  export type transactionCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<transactionCreateWithoutPaymentsInput, transactionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: transactionCreateOrConnectWithoutPaymentsInput
    connect?: transactionWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type transactionUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<transactionCreateWithoutPaymentsInput, transactionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: transactionCreateOrConnectWithoutPaymentsInput
    upsert?: transactionUpsertWithoutPaymentsInput
    connect?: transactionWhereUniqueInput
    update?: XOR<XOR<transactionUpdateToOneWithWhereWithoutPaymentsInput, transactionUpdateWithoutPaymentsInput>, transactionUncheckedUpdateWithoutPaymentsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type spot_tourismCreateNestedOneWithoutReviewsInput = {
    create?: XOR<spot_tourismCreateWithoutReviewsInput, spot_tourismUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: spot_tourismCreateOrConnectWithoutReviewsInput
    connect?: spot_tourismWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type spot_tourismUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<spot_tourismCreateWithoutReviewsInput, spot_tourismUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: spot_tourismCreateOrConnectWithoutReviewsInput
    upsert?: spot_tourismUpsertWithoutReviewsInput
    disconnect?: spot_tourismWhereInput | boolean
    delete?: spot_tourismWhereInput | boolean
    connect?: spot_tourismWhereUniqueInput
    update?: XOR<XOR<spot_tourismUpdateToOneWithWhereWithoutReviewsInput, spot_tourismUpdateWithoutReviewsInput>, spot_tourismUncheckedUpdateWithoutReviewsInput>
  }

  export type usersUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewsInput
    upsert?: usersUpsertWithoutReviewsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReviewsInput, usersUpdateWithoutReviewsInput>, usersUncheckedUpdateWithoutReviewsInput>
  }

  export type facility_tourismCreateNestedManyWithoutSpotInput = {
    create?: XOR<facility_tourismCreateWithoutSpotInput, facility_tourismUncheckedCreateWithoutSpotInput> | facility_tourismCreateWithoutSpotInput[] | facility_tourismUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: facility_tourismCreateOrConnectWithoutSpotInput | facility_tourismCreateOrConnectWithoutSpotInput[]
    createMany?: facility_tourismCreateManySpotInputEnvelope
    connect?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
  }

  export type galleryCreateNestedManyWithoutSpotInput = {
    create?: XOR<galleryCreateWithoutSpotInput, galleryUncheckedCreateWithoutSpotInput> | galleryCreateWithoutSpotInput[] | galleryUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: galleryCreateOrConnectWithoutSpotInput | galleryCreateOrConnectWithoutSpotInput[]
    createMany?: galleryCreateManySpotInputEnvelope
    connect?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
  }

  export type operating_hoursCreateNestedManyWithoutSpotInput = {
    create?: XOR<operating_hoursCreateWithoutSpotInput, operating_hoursUncheckedCreateWithoutSpotInput> | operating_hoursCreateWithoutSpotInput[] | operating_hoursUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: operating_hoursCreateOrConnectWithoutSpotInput | operating_hoursCreateOrConnectWithoutSpotInput[]
    createMany?: operating_hoursCreateManySpotInputEnvelope
    connect?: operating_hoursWhereUniqueInput | operating_hoursWhereUniqueInput[]
  }

  export type reviewsCreateNestedManyWithoutSpotInput = {
    create?: XOR<reviewsCreateWithoutSpotInput, reviewsUncheckedCreateWithoutSpotInput> | reviewsCreateWithoutSpotInput[] | reviewsUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutSpotInput | reviewsCreateOrConnectWithoutSpotInput[]
    createMany?: reviewsCreateManySpotInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type category_tourismCreateNestedOneWithoutSpotsInput = {
    create?: XOR<category_tourismCreateWithoutSpotsInput, category_tourismUncheckedCreateWithoutSpotsInput>
    connectOrCreate?: category_tourismCreateOrConnectWithoutSpotsInput
    connect?: category_tourismWhereUniqueInput
  }

  export type villageCreateNestedOneWithoutSpotsInput = {
    create?: XOR<villageCreateWithoutSpotsInput, villageUncheckedCreateWithoutSpotsInput>
    connectOrCreate?: villageCreateOrConnectWithoutSpotsInput
    connect?: villageWhereUniqueInput
  }

  export type ticketCreateNestedManyWithoutSpotInput = {
    create?: XOR<ticketCreateWithoutSpotInput, ticketUncheckedCreateWithoutSpotInput> | ticketCreateWithoutSpotInput[] | ticketUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutSpotInput | ticketCreateOrConnectWithoutSpotInput[]
    createMany?: ticketCreateManySpotInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type facility_tourismUncheckedCreateNestedManyWithoutSpotInput = {
    create?: XOR<facility_tourismCreateWithoutSpotInput, facility_tourismUncheckedCreateWithoutSpotInput> | facility_tourismCreateWithoutSpotInput[] | facility_tourismUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: facility_tourismCreateOrConnectWithoutSpotInput | facility_tourismCreateOrConnectWithoutSpotInput[]
    createMany?: facility_tourismCreateManySpotInputEnvelope
    connect?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
  }

  export type galleryUncheckedCreateNestedManyWithoutSpotInput = {
    create?: XOR<galleryCreateWithoutSpotInput, galleryUncheckedCreateWithoutSpotInput> | galleryCreateWithoutSpotInput[] | galleryUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: galleryCreateOrConnectWithoutSpotInput | galleryCreateOrConnectWithoutSpotInput[]
    createMany?: galleryCreateManySpotInputEnvelope
    connect?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
  }

  export type operating_hoursUncheckedCreateNestedManyWithoutSpotInput = {
    create?: XOR<operating_hoursCreateWithoutSpotInput, operating_hoursUncheckedCreateWithoutSpotInput> | operating_hoursCreateWithoutSpotInput[] | operating_hoursUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: operating_hoursCreateOrConnectWithoutSpotInput | operating_hoursCreateOrConnectWithoutSpotInput[]
    createMany?: operating_hoursCreateManySpotInputEnvelope
    connect?: operating_hoursWhereUniqueInput | operating_hoursWhereUniqueInput[]
  }

  export type reviewsUncheckedCreateNestedManyWithoutSpotInput = {
    create?: XOR<reviewsCreateWithoutSpotInput, reviewsUncheckedCreateWithoutSpotInput> | reviewsCreateWithoutSpotInput[] | reviewsUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutSpotInput | reviewsCreateOrConnectWithoutSpotInput[]
    createMany?: reviewsCreateManySpotInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type ticketUncheckedCreateNestedManyWithoutSpotInput = {
    create?: XOR<ticketCreateWithoutSpotInput, ticketUncheckedCreateWithoutSpotInput> | ticketCreateWithoutSpotInput[] | ticketUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutSpotInput | ticketCreateOrConnectWithoutSpotInput[]
    createMany?: ticketCreateManySpotInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type facility_tourismUpdateManyWithoutSpotNestedInput = {
    create?: XOR<facility_tourismCreateWithoutSpotInput, facility_tourismUncheckedCreateWithoutSpotInput> | facility_tourismCreateWithoutSpotInput[] | facility_tourismUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: facility_tourismCreateOrConnectWithoutSpotInput | facility_tourismCreateOrConnectWithoutSpotInput[]
    upsert?: facility_tourismUpsertWithWhereUniqueWithoutSpotInput | facility_tourismUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: facility_tourismCreateManySpotInputEnvelope
    set?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
    disconnect?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
    delete?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
    connect?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
    update?: facility_tourismUpdateWithWhereUniqueWithoutSpotInput | facility_tourismUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: facility_tourismUpdateManyWithWhereWithoutSpotInput | facility_tourismUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: facility_tourismScalarWhereInput | facility_tourismScalarWhereInput[]
  }

  export type galleryUpdateManyWithoutSpotNestedInput = {
    create?: XOR<galleryCreateWithoutSpotInput, galleryUncheckedCreateWithoutSpotInput> | galleryCreateWithoutSpotInput[] | galleryUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: galleryCreateOrConnectWithoutSpotInput | galleryCreateOrConnectWithoutSpotInput[]
    upsert?: galleryUpsertWithWhereUniqueWithoutSpotInput | galleryUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: galleryCreateManySpotInputEnvelope
    set?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
    disconnect?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
    delete?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
    connect?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
    update?: galleryUpdateWithWhereUniqueWithoutSpotInput | galleryUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: galleryUpdateManyWithWhereWithoutSpotInput | galleryUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: galleryScalarWhereInput | galleryScalarWhereInput[]
  }

  export type operating_hoursUpdateManyWithoutSpotNestedInput = {
    create?: XOR<operating_hoursCreateWithoutSpotInput, operating_hoursUncheckedCreateWithoutSpotInput> | operating_hoursCreateWithoutSpotInput[] | operating_hoursUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: operating_hoursCreateOrConnectWithoutSpotInput | operating_hoursCreateOrConnectWithoutSpotInput[]
    upsert?: operating_hoursUpsertWithWhereUniqueWithoutSpotInput | operating_hoursUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: operating_hoursCreateManySpotInputEnvelope
    set?: operating_hoursWhereUniqueInput | operating_hoursWhereUniqueInput[]
    disconnect?: operating_hoursWhereUniqueInput | operating_hoursWhereUniqueInput[]
    delete?: operating_hoursWhereUniqueInput | operating_hoursWhereUniqueInput[]
    connect?: operating_hoursWhereUniqueInput | operating_hoursWhereUniqueInput[]
    update?: operating_hoursUpdateWithWhereUniqueWithoutSpotInput | operating_hoursUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: operating_hoursUpdateManyWithWhereWithoutSpotInput | operating_hoursUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: operating_hoursScalarWhereInput | operating_hoursScalarWhereInput[]
  }

  export type reviewsUpdateManyWithoutSpotNestedInput = {
    create?: XOR<reviewsCreateWithoutSpotInput, reviewsUncheckedCreateWithoutSpotInput> | reviewsCreateWithoutSpotInput[] | reviewsUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutSpotInput | reviewsCreateOrConnectWithoutSpotInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutSpotInput | reviewsUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: reviewsCreateManySpotInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutSpotInput | reviewsUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutSpotInput | reviewsUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type category_tourismUpdateOneWithoutSpotsNestedInput = {
    create?: XOR<category_tourismCreateWithoutSpotsInput, category_tourismUncheckedCreateWithoutSpotsInput>
    connectOrCreate?: category_tourismCreateOrConnectWithoutSpotsInput
    upsert?: category_tourismUpsertWithoutSpotsInput
    disconnect?: category_tourismWhereInput | boolean
    delete?: category_tourismWhereInput | boolean
    connect?: category_tourismWhereUniqueInput
    update?: XOR<XOR<category_tourismUpdateToOneWithWhereWithoutSpotsInput, category_tourismUpdateWithoutSpotsInput>, category_tourismUncheckedUpdateWithoutSpotsInput>
  }

  export type villageUpdateOneWithoutSpotsNestedInput = {
    create?: XOR<villageCreateWithoutSpotsInput, villageUncheckedCreateWithoutSpotsInput>
    connectOrCreate?: villageCreateOrConnectWithoutSpotsInput
    upsert?: villageUpsertWithoutSpotsInput
    disconnect?: villageWhereInput | boolean
    delete?: villageWhereInput | boolean
    connect?: villageWhereUniqueInput
    update?: XOR<XOR<villageUpdateToOneWithWhereWithoutSpotsInput, villageUpdateWithoutSpotsInput>, villageUncheckedUpdateWithoutSpotsInput>
  }

  export type ticketUpdateManyWithoutSpotNestedInput = {
    create?: XOR<ticketCreateWithoutSpotInput, ticketUncheckedCreateWithoutSpotInput> | ticketCreateWithoutSpotInput[] | ticketUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutSpotInput | ticketCreateOrConnectWithoutSpotInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutSpotInput | ticketUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: ticketCreateManySpotInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutSpotInput | ticketUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutSpotInput | ticketUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type facility_tourismUncheckedUpdateManyWithoutSpotNestedInput = {
    create?: XOR<facility_tourismCreateWithoutSpotInput, facility_tourismUncheckedCreateWithoutSpotInput> | facility_tourismCreateWithoutSpotInput[] | facility_tourismUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: facility_tourismCreateOrConnectWithoutSpotInput | facility_tourismCreateOrConnectWithoutSpotInput[]
    upsert?: facility_tourismUpsertWithWhereUniqueWithoutSpotInput | facility_tourismUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: facility_tourismCreateManySpotInputEnvelope
    set?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
    disconnect?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
    delete?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
    connect?: facility_tourismWhereUniqueInput | facility_tourismWhereUniqueInput[]
    update?: facility_tourismUpdateWithWhereUniqueWithoutSpotInput | facility_tourismUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: facility_tourismUpdateManyWithWhereWithoutSpotInput | facility_tourismUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: facility_tourismScalarWhereInput | facility_tourismScalarWhereInput[]
  }

  export type galleryUncheckedUpdateManyWithoutSpotNestedInput = {
    create?: XOR<galleryCreateWithoutSpotInput, galleryUncheckedCreateWithoutSpotInput> | galleryCreateWithoutSpotInput[] | galleryUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: galleryCreateOrConnectWithoutSpotInput | galleryCreateOrConnectWithoutSpotInput[]
    upsert?: galleryUpsertWithWhereUniqueWithoutSpotInput | galleryUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: galleryCreateManySpotInputEnvelope
    set?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
    disconnect?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
    delete?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
    connect?: galleryWhereUniqueInput | galleryWhereUniqueInput[]
    update?: galleryUpdateWithWhereUniqueWithoutSpotInput | galleryUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: galleryUpdateManyWithWhereWithoutSpotInput | galleryUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: galleryScalarWhereInput | galleryScalarWhereInput[]
  }

  export type operating_hoursUncheckedUpdateManyWithoutSpotNestedInput = {
    create?: XOR<operating_hoursCreateWithoutSpotInput, operating_hoursUncheckedCreateWithoutSpotInput> | operating_hoursCreateWithoutSpotInput[] | operating_hoursUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: operating_hoursCreateOrConnectWithoutSpotInput | operating_hoursCreateOrConnectWithoutSpotInput[]
    upsert?: operating_hoursUpsertWithWhereUniqueWithoutSpotInput | operating_hoursUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: operating_hoursCreateManySpotInputEnvelope
    set?: operating_hoursWhereUniqueInput | operating_hoursWhereUniqueInput[]
    disconnect?: operating_hoursWhereUniqueInput | operating_hoursWhereUniqueInput[]
    delete?: operating_hoursWhereUniqueInput | operating_hoursWhereUniqueInput[]
    connect?: operating_hoursWhereUniqueInput | operating_hoursWhereUniqueInput[]
    update?: operating_hoursUpdateWithWhereUniqueWithoutSpotInput | operating_hoursUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: operating_hoursUpdateManyWithWhereWithoutSpotInput | operating_hoursUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: operating_hoursScalarWhereInput | operating_hoursScalarWhereInput[]
  }

  export type reviewsUncheckedUpdateManyWithoutSpotNestedInput = {
    create?: XOR<reviewsCreateWithoutSpotInput, reviewsUncheckedCreateWithoutSpotInput> | reviewsCreateWithoutSpotInput[] | reviewsUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutSpotInput | reviewsCreateOrConnectWithoutSpotInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutSpotInput | reviewsUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: reviewsCreateManySpotInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutSpotInput | reviewsUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutSpotInput | reviewsUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type ticketUncheckedUpdateManyWithoutSpotNestedInput = {
    create?: XOR<ticketCreateWithoutSpotInput, ticketUncheckedCreateWithoutSpotInput> | ticketCreateWithoutSpotInput[] | ticketUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutSpotInput | ticketCreateOrConnectWithoutSpotInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutSpotInput | ticketUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: ticketCreateManySpotInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutSpotInput | ticketUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutSpotInput | ticketUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type spot_tourismCreateNestedOneWithoutTicketsInput = {
    create?: XOR<spot_tourismCreateWithoutTicketsInput, spot_tourismUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: spot_tourismCreateOrConnectWithoutTicketsInput
    connect?: spot_tourismWhereUniqueInput
  }

  export type temp_order_detailCreateNestedManyWithoutTicketInput = {
    create?: XOR<temp_order_detailCreateWithoutTicketInput, temp_order_detailUncheckedCreateWithoutTicketInput> | temp_order_detailCreateWithoutTicketInput[] | temp_order_detailUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: temp_order_detailCreateOrConnectWithoutTicketInput | temp_order_detailCreateOrConnectWithoutTicketInput[]
    createMany?: temp_order_detailCreateManyTicketInputEnvelope
    connect?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
  }

  export type transaction_detailCreateNestedManyWithoutTicketInput = {
    create?: XOR<transaction_detailCreateWithoutTicketInput, transaction_detailUncheckedCreateWithoutTicketInput> | transaction_detailCreateWithoutTicketInput[] | transaction_detailUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutTicketInput | transaction_detailCreateOrConnectWithoutTicketInput[]
    createMany?: transaction_detailCreateManyTicketInputEnvelope
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
  }

  export type temp_order_detailUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<temp_order_detailCreateWithoutTicketInput, temp_order_detailUncheckedCreateWithoutTicketInput> | temp_order_detailCreateWithoutTicketInput[] | temp_order_detailUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: temp_order_detailCreateOrConnectWithoutTicketInput | temp_order_detailCreateOrConnectWithoutTicketInput[]
    createMany?: temp_order_detailCreateManyTicketInputEnvelope
    connect?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
  }

  export type transaction_detailUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<transaction_detailCreateWithoutTicketInput, transaction_detailUncheckedCreateWithoutTicketInput> | transaction_detailCreateWithoutTicketInput[] | transaction_detailUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutTicketInput | transaction_detailCreateOrConnectWithoutTicketInput[]
    createMany?: transaction_detailCreateManyTicketInputEnvelope
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
  }

  export type spot_tourismUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<spot_tourismCreateWithoutTicketsInput, spot_tourismUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: spot_tourismCreateOrConnectWithoutTicketsInput
    upsert?: spot_tourismUpsertWithoutTicketsInput
    disconnect?: spot_tourismWhereInput | boolean
    delete?: spot_tourismWhereInput | boolean
    connect?: spot_tourismWhereUniqueInput
    update?: XOR<XOR<spot_tourismUpdateToOneWithWhereWithoutTicketsInput, spot_tourismUpdateWithoutTicketsInput>, spot_tourismUncheckedUpdateWithoutTicketsInput>
  }

  export type temp_order_detailUpdateManyWithoutTicketNestedInput = {
    create?: XOR<temp_order_detailCreateWithoutTicketInput, temp_order_detailUncheckedCreateWithoutTicketInput> | temp_order_detailCreateWithoutTicketInput[] | temp_order_detailUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: temp_order_detailCreateOrConnectWithoutTicketInput | temp_order_detailCreateOrConnectWithoutTicketInput[]
    upsert?: temp_order_detailUpsertWithWhereUniqueWithoutTicketInput | temp_order_detailUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: temp_order_detailCreateManyTicketInputEnvelope
    set?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
    disconnect?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
    delete?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
    connect?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
    update?: temp_order_detailUpdateWithWhereUniqueWithoutTicketInput | temp_order_detailUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: temp_order_detailUpdateManyWithWhereWithoutTicketInput | temp_order_detailUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: temp_order_detailScalarWhereInput | temp_order_detailScalarWhereInput[]
  }

  export type transaction_detailUpdateManyWithoutTicketNestedInput = {
    create?: XOR<transaction_detailCreateWithoutTicketInput, transaction_detailUncheckedCreateWithoutTicketInput> | transaction_detailCreateWithoutTicketInput[] | transaction_detailUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutTicketInput | transaction_detailCreateOrConnectWithoutTicketInput[]
    upsert?: transaction_detailUpsertWithWhereUniqueWithoutTicketInput | transaction_detailUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: transaction_detailCreateManyTicketInputEnvelope
    set?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    disconnect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    delete?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    update?: transaction_detailUpdateWithWhereUniqueWithoutTicketInput | transaction_detailUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: transaction_detailUpdateManyWithWhereWithoutTicketInput | transaction_detailUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: transaction_detailScalarWhereInput | transaction_detailScalarWhereInput[]
  }

  export type temp_order_detailUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<temp_order_detailCreateWithoutTicketInput, temp_order_detailUncheckedCreateWithoutTicketInput> | temp_order_detailCreateWithoutTicketInput[] | temp_order_detailUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: temp_order_detailCreateOrConnectWithoutTicketInput | temp_order_detailCreateOrConnectWithoutTicketInput[]
    upsert?: temp_order_detailUpsertWithWhereUniqueWithoutTicketInput | temp_order_detailUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: temp_order_detailCreateManyTicketInputEnvelope
    set?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
    disconnect?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
    delete?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
    connect?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
    update?: temp_order_detailUpdateWithWhereUniqueWithoutTicketInput | temp_order_detailUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: temp_order_detailUpdateManyWithWhereWithoutTicketInput | temp_order_detailUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: temp_order_detailScalarWhereInput | temp_order_detailScalarWhereInput[]
  }

  export type transaction_detailUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<transaction_detailCreateWithoutTicketInput, transaction_detailUncheckedCreateWithoutTicketInput> | transaction_detailCreateWithoutTicketInput[] | transaction_detailUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutTicketInput | transaction_detailCreateOrConnectWithoutTicketInput[]
    upsert?: transaction_detailUpsertWithWhereUniqueWithoutTicketInput | transaction_detailUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: transaction_detailCreateManyTicketInputEnvelope
    set?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    disconnect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    delete?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    update?: transaction_detailUpdateWithWhereUniqueWithoutTicketInput | transaction_detailUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: transaction_detailUpdateManyWithWhereWithoutTicketInput | transaction_detailUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: transaction_detailScalarWhereInput | transaction_detailScalarWhereInput[]
  }

  export type paymentCreateNestedManyWithoutTransactionInput = {
    create?: XOR<paymentCreateWithoutTransactionInput, paymentUncheckedCreateWithoutTransactionInput> | paymentCreateWithoutTransactionInput[] | paymentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutTransactionInput | paymentCreateOrConnectWithoutTransactionInput[]
    createMany?: paymentCreateManyTransactionInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransactionsInput
    connect?: usersWhereUniqueInput
  }

  export type transaction_detailCreateNestedManyWithoutTransactionInput = {
    create?: XOR<transaction_detailCreateWithoutTransactionInput, transaction_detailUncheckedCreateWithoutTransactionInput> | transaction_detailCreateWithoutTransactionInput[] | transaction_detailUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutTransactionInput | transaction_detailCreateOrConnectWithoutTransactionInput[]
    createMany?: transaction_detailCreateManyTransactionInputEnvelope
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
  }

  export type paymentUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<paymentCreateWithoutTransactionInput, paymentUncheckedCreateWithoutTransactionInput> | paymentCreateWithoutTransactionInput[] | paymentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutTransactionInput | paymentCreateOrConnectWithoutTransactionInput[]
    createMany?: paymentCreateManyTransactionInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type transaction_detailUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<transaction_detailCreateWithoutTransactionInput, transaction_detailUncheckedCreateWithoutTransactionInput> | transaction_detailCreateWithoutTransactionInput[] | transaction_detailUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutTransactionInput | transaction_detailCreateOrConnectWithoutTransactionInput[]
    createMany?: transaction_detailCreateManyTransactionInputEnvelope
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
  }

  export type NullableEnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus | null
  }

  export type paymentUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<paymentCreateWithoutTransactionInput, paymentUncheckedCreateWithoutTransactionInput> | paymentCreateWithoutTransactionInput[] | paymentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutTransactionInput | paymentCreateOrConnectWithoutTransactionInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutTransactionInput | paymentUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: paymentCreateManyTransactionInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutTransactionInput | paymentUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutTransactionInput | paymentUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type usersUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransactionsInput
    upsert?: usersUpsertWithoutTransactionsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTransactionsInput, usersUpdateWithoutTransactionsInput>, usersUncheckedUpdateWithoutTransactionsInput>
  }

  export type transaction_detailUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<transaction_detailCreateWithoutTransactionInput, transaction_detailUncheckedCreateWithoutTransactionInput> | transaction_detailCreateWithoutTransactionInput[] | transaction_detailUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutTransactionInput | transaction_detailCreateOrConnectWithoutTransactionInput[]
    upsert?: transaction_detailUpsertWithWhereUniqueWithoutTransactionInput | transaction_detailUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: transaction_detailCreateManyTransactionInputEnvelope
    set?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    disconnect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    delete?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    update?: transaction_detailUpdateWithWhereUniqueWithoutTransactionInput | transaction_detailUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: transaction_detailUpdateManyWithWhereWithoutTransactionInput | transaction_detailUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: transaction_detailScalarWhereInput | transaction_detailScalarWhereInput[]
  }

  export type paymentUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<paymentCreateWithoutTransactionInput, paymentUncheckedCreateWithoutTransactionInput> | paymentCreateWithoutTransactionInput[] | paymentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutTransactionInput | paymentCreateOrConnectWithoutTransactionInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutTransactionInput | paymentUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: paymentCreateManyTransactionInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutTransactionInput | paymentUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutTransactionInput | paymentUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type transaction_detailUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<transaction_detailCreateWithoutTransactionInput, transaction_detailUncheckedCreateWithoutTransactionInput> | transaction_detailCreateWithoutTransactionInput[] | transaction_detailUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutTransactionInput | transaction_detailCreateOrConnectWithoutTransactionInput[]
    upsert?: transaction_detailUpsertWithWhereUniqueWithoutTransactionInput | transaction_detailUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: transaction_detailCreateManyTransactionInputEnvelope
    set?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    disconnect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    delete?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    update?: transaction_detailUpdateWithWhereUniqueWithoutTransactionInput | transaction_detailUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: transaction_detailUpdateManyWithWhereWithoutTransactionInput | transaction_detailUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: transaction_detailScalarWhereInput | transaction_detailScalarWhereInput[]
  }

  export type transactionCreateNestedOneWithoutTransaction_detailsInput = {
    create?: XOR<transactionCreateWithoutTransaction_detailsInput, transactionUncheckedCreateWithoutTransaction_detailsInput>
    connectOrCreate?: transactionCreateOrConnectWithoutTransaction_detailsInput
    connect?: transactionWhereUniqueInput
  }

  export type ticketCreateNestedOneWithoutTransaction_detailsInput = {
    create?: XOR<ticketCreateWithoutTransaction_detailsInput, ticketUncheckedCreateWithoutTransaction_detailsInput>
    connectOrCreate?: ticketCreateOrConnectWithoutTransaction_detailsInput
    connect?: ticketWhereUniqueInput
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type transactionUpdateOneWithoutTransaction_detailsNestedInput = {
    create?: XOR<transactionCreateWithoutTransaction_detailsInput, transactionUncheckedCreateWithoutTransaction_detailsInput>
    connectOrCreate?: transactionCreateOrConnectWithoutTransaction_detailsInput
    upsert?: transactionUpsertWithoutTransaction_detailsInput
    disconnect?: transactionWhereInput | boolean
    delete?: transactionWhereInput | boolean
    connect?: transactionWhereUniqueInput
    update?: XOR<XOR<transactionUpdateToOneWithWhereWithoutTransaction_detailsInput, transactionUpdateWithoutTransaction_detailsInput>, transactionUncheckedUpdateWithoutTransaction_detailsInput>
  }

  export type ticketUpdateOneWithoutTransaction_detailsNestedInput = {
    create?: XOR<ticketCreateWithoutTransaction_detailsInput, ticketUncheckedCreateWithoutTransaction_detailsInput>
    connectOrCreate?: ticketCreateOrConnectWithoutTransaction_detailsInput
    upsert?: ticketUpsertWithoutTransaction_detailsInput
    disconnect?: ticketWhereInput | boolean
    delete?: ticketWhereInput | boolean
    connect?: ticketWhereUniqueInput
    update?: XOR<XOR<ticketUpdateToOneWithWhereWithoutTransaction_detailsInput, ticketUpdateWithoutTransaction_detailsInput>, ticketUncheckedUpdateWithoutTransaction_detailsInput>
  }

  export type reviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewsCreateWithoutUserInput, reviewsUncheckedCreateWithoutUserInput> | reviewsCreateWithoutUserInput[] | reviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUserInput | reviewsCreateOrConnectWithoutUserInput[]
    createMany?: reviewsCreateManyUserInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type transactionCreateNestedManyWithoutUserInput = {
    create?: XOR<transactionCreateWithoutUserInput, transactionUncheckedCreateWithoutUserInput> | transactionCreateWithoutUserInput[] | transactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutUserInput | transactionCreateOrConnectWithoutUserInput[]
    createMany?: transactionCreateManyUserInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type temp_orderCreateNestedManyWithoutUserInput = {
    create?: XOR<temp_orderCreateWithoutUserInput, temp_orderUncheckedCreateWithoutUserInput> | temp_orderCreateWithoutUserInput[] | temp_orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: temp_orderCreateOrConnectWithoutUserInput | temp_orderCreateOrConnectWithoutUserInput[]
    createMany?: temp_orderCreateManyUserInputEnvelope
    connect?: temp_orderWhereUniqueInput | temp_orderWhereUniqueInput[]
  }

  export type reviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewsCreateWithoutUserInput, reviewsUncheckedCreateWithoutUserInput> | reviewsCreateWithoutUserInput[] | reviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUserInput | reviewsCreateOrConnectWithoutUserInput[]
    createMany?: reviewsCreateManyUserInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<transactionCreateWithoutUserInput, transactionUncheckedCreateWithoutUserInput> | transactionCreateWithoutUserInput[] | transactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutUserInput | transactionCreateOrConnectWithoutUserInput[]
    createMany?: transactionCreateManyUserInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type temp_orderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<temp_orderCreateWithoutUserInput, temp_orderUncheckedCreateWithoutUserInput> | temp_orderCreateWithoutUserInput[] | temp_orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: temp_orderCreateOrConnectWithoutUserInput | temp_orderCreateOrConnectWithoutUserInput[]
    createMany?: temp_orderCreateManyUserInputEnvelope
    connect?: temp_orderWhereUniqueInput | temp_orderWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type reviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewsCreateWithoutUserInput, reviewsUncheckedCreateWithoutUserInput> | reviewsCreateWithoutUserInput[] | reviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUserInput | reviewsCreateOrConnectWithoutUserInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutUserInput | reviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewsCreateManyUserInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutUserInput | reviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutUserInput | reviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type transactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<transactionCreateWithoutUserInput, transactionUncheckedCreateWithoutUserInput> | transactionCreateWithoutUserInput[] | transactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutUserInput | transactionCreateOrConnectWithoutUserInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutUserInput | transactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: transactionCreateManyUserInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutUserInput | transactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutUserInput | transactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type temp_orderUpdateManyWithoutUserNestedInput = {
    create?: XOR<temp_orderCreateWithoutUserInput, temp_orderUncheckedCreateWithoutUserInput> | temp_orderCreateWithoutUserInput[] | temp_orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: temp_orderCreateOrConnectWithoutUserInput | temp_orderCreateOrConnectWithoutUserInput[]
    upsert?: temp_orderUpsertWithWhereUniqueWithoutUserInput | temp_orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: temp_orderCreateManyUserInputEnvelope
    set?: temp_orderWhereUniqueInput | temp_orderWhereUniqueInput[]
    disconnect?: temp_orderWhereUniqueInput | temp_orderWhereUniqueInput[]
    delete?: temp_orderWhereUniqueInput | temp_orderWhereUniqueInput[]
    connect?: temp_orderWhereUniqueInput | temp_orderWhereUniqueInput[]
    update?: temp_orderUpdateWithWhereUniqueWithoutUserInput | temp_orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: temp_orderUpdateManyWithWhereWithoutUserInput | temp_orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: temp_orderScalarWhereInput | temp_orderScalarWhereInput[]
  }

  export type reviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewsCreateWithoutUserInput, reviewsUncheckedCreateWithoutUserInput> | reviewsCreateWithoutUserInput[] | reviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUserInput | reviewsCreateOrConnectWithoutUserInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutUserInput | reviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewsCreateManyUserInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutUserInput | reviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutUserInput | reviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<transactionCreateWithoutUserInput, transactionUncheckedCreateWithoutUserInput> | transactionCreateWithoutUserInput[] | transactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutUserInput | transactionCreateOrConnectWithoutUserInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutUserInput | transactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: transactionCreateManyUserInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutUserInput | transactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutUserInput | transactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type temp_orderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<temp_orderCreateWithoutUserInput, temp_orderUncheckedCreateWithoutUserInput> | temp_orderCreateWithoutUserInput[] | temp_orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: temp_orderCreateOrConnectWithoutUserInput | temp_orderCreateOrConnectWithoutUserInput[]
    upsert?: temp_orderUpsertWithWhereUniqueWithoutUserInput | temp_orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: temp_orderCreateManyUserInputEnvelope
    set?: temp_orderWhereUniqueInput | temp_orderWhereUniqueInput[]
    disconnect?: temp_orderWhereUniqueInput | temp_orderWhereUniqueInput[]
    delete?: temp_orderWhereUniqueInput | temp_orderWhereUniqueInput[]
    connect?: temp_orderWhereUniqueInput | temp_orderWhereUniqueInput[]
    update?: temp_orderUpdateWithWhereUniqueWithoutUserInput | temp_orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: temp_orderUpdateManyWithWhereWithoutUserInput | temp_orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: temp_orderScalarWhereInput | temp_orderScalarWhereInput[]
  }

  export type spot_tourismCreateNestedManyWithoutVillageInput = {
    create?: XOR<spot_tourismCreateWithoutVillageInput, spot_tourismUncheckedCreateWithoutVillageInput> | spot_tourismCreateWithoutVillageInput[] | spot_tourismUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: spot_tourismCreateOrConnectWithoutVillageInput | spot_tourismCreateOrConnectWithoutVillageInput[]
    createMany?: spot_tourismCreateManyVillageInputEnvelope
    connect?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
  }

  export type spot_tourismUncheckedCreateNestedManyWithoutVillageInput = {
    create?: XOR<spot_tourismCreateWithoutVillageInput, spot_tourismUncheckedCreateWithoutVillageInput> | spot_tourismCreateWithoutVillageInput[] | spot_tourismUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: spot_tourismCreateOrConnectWithoutVillageInput | spot_tourismCreateOrConnectWithoutVillageInput[]
    createMany?: spot_tourismCreateManyVillageInputEnvelope
    connect?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
  }

  export type spot_tourismUpdateManyWithoutVillageNestedInput = {
    create?: XOR<spot_tourismCreateWithoutVillageInput, spot_tourismUncheckedCreateWithoutVillageInput> | spot_tourismCreateWithoutVillageInput[] | spot_tourismUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: spot_tourismCreateOrConnectWithoutVillageInput | spot_tourismCreateOrConnectWithoutVillageInput[]
    upsert?: spot_tourismUpsertWithWhereUniqueWithoutVillageInput | spot_tourismUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: spot_tourismCreateManyVillageInputEnvelope
    set?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
    disconnect?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
    delete?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
    connect?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
    update?: spot_tourismUpdateWithWhereUniqueWithoutVillageInput | spot_tourismUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: spot_tourismUpdateManyWithWhereWithoutVillageInput | spot_tourismUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: spot_tourismScalarWhereInput | spot_tourismScalarWhereInput[]
  }

  export type spot_tourismUncheckedUpdateManyWithoutVillageNestedInput = {
    create?: XOR<spot_tourismCreateWithoutVillageInput, spot_tourismUncheckedCreateWithoutVillageInput> | spot_tourismCreateWithoutVillageInput[] | spot_tourismUncheckedCreateWithoutVillageInput[]
    connectOrCreate?: spot_tourismCreateOrConnectWithoutVillageInput | spot_tourismCreateOrConnectWithoutVillageInput[]
    upsert?: spot_tourismUpsertWithWhereUniqueWithoutVillageInput | spot_tourismUpsertWithWhereUniqueWithoutVillageInput[]
    createMany?: spot_tourismCreateManyVillageInputEnvelope
    set?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
    disconnect?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
    delete?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
    connect?: spot_tourismWhereUniqueInput | spot_tourismWhereUniqueInput[]
    update?: spot_tourismUpdateWithWhereUniqueWithoutVillageInput | spot_tourismUpdateWithWhereUniqueWithoutVillageInput[]
    updateMany?: spot_tourismUpdateManyWithWhereWithoutVillageInput | spot_tourismUpdateManyWithWhereWithoutVillageInput[]
    deleteMany?: spot_tourismScalarWhereInput | spot_tourismScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutTemp_ordersInput = {
    create?: XOR<usersCreateWithoutTemp_ordersInput, usersUncheckedCreateWithoutTemp_ordersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTemp_ordersInput
    connect?: usersWhereUniqueInput
  }

  export type temp_order_detailCreateNestedManyWithoutTemp_orderInput = {
    create?: XOR<temp_order_detailCreateWithoutTemp_orderInput, temp_order_detailUncheckedCreateWithoutTemp_orderInput> | temp_order_detailCreateWithoutTemp_orderInput[] | temp_order_detailUncheckedCreateWithoutTemp_orderInput[]
    connectOrCreate?: temp_order_detailCreateOrConnectWithoutTemp_orderInput | temp_order_detailCreateOrConnectWithoutTemp_orderInput[]
    createMany?: temp_order_detailCreateManyTemp_orderInputEnvelope
    connect?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
  }

  export type temp_order_detailUncheckedCreateNestedManyWithoutTemp_orderInput = {
    create?: XOR<temp_order_detailCreateWithoutTemp_orderInput, temp_order_detailUncheckedCreateWithoutTemp_orderInput> | temp_order_detailCreateWithoutTemp_orderInput[] | temp_order_detailUncheckedCreateWithoutTemp_orderInput[]
    connectOrCreate?: temp_order_detailCreateOrConnectWithoutTemp_orderInput | temp_order_detailCreateOrConnectWithoutTemp_orderInput[]
    createMany?: temp_order_detailCreateManyTemp_orderInputEnvelope
    connect?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type usersUpdateOneRequiredWithoutTemp_ordersNestedInput = {
    create?: XOR<usersCreateWithoutTemp_ordersInput, usersUncheckedCreateWithoutTemp_ordersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTemp_ordersInput
    upsert?: usersUpsertWithoutTemp_ordersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTemp_ordersInput, usersUpdateWithoutTemp_ordersInput>, usersUncheckedUpdateWithoutTemp_ordersInput>
  }

  export type temp_order_detailUpdateManyWithoutTemp_orderNestedInput = {
    create?: XOR<temp_order_detailCreateWithoutTemp_orderInput, temp_order_detailUncheckedCreateWithoutTemp_orderInput> | temp_order_detailCreateWithoutTemp_orderInput[] | temp_order_detailUncheckedCreateWithoutTemp_orderInput[]
    connectOrCreate?: temp_order_detailCreateOrConnectWithoutTemp_orderInput | temp_order_detailCreateOrConnectWithoutTemp_orderInput[]
    upsert?: temp_order_detailUpsertWithWhereUniqueWithoutTemp_orderInput | temp_order_detailUpsertWithWhereUniqueWithoutTemp_orderInput[]
    createMany?: temp_order_detailCreateManyTemp_orderInputEnvelope
    set?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
    disconnect?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
    delete?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
    connect?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
    update?: temp_order_detailUpdateWithWhereUniqueWithoutTemp_orderInput | temp_order_detailUpdateWithWhereUniqueWithoutTemp_orderInput[]
    updateMany?: temp_order_detailUpdateManyWithWhereWithoutTemp_orderInput | temp_order_detailUpdateManyWithWhereWithoutTemp_orderInput[]
    deleteMany?: temp_order_detailScalarWhereInput | temp_order_detailScalarWhereInput[]
  }

  export type temp_order_detailUncheckedUpdateManyWithoutTemp_orderNestedInput = {
    create?: XOR<temp_order_detailCreateWithoutTemp_orderInput, temp_order_detailUncheckedCreateWithoutTemp_orderInput> | temp_order_detailCreateWithoutTemp_orderInput[] | temp_order_detailUncheckedCreateWithoutTemp_orderInput[]
    connectOrCreate?: temp_order_detailCreateOrConnectWithoutTemp_orderInput | temp_order_detailCreateOrConnectWithoutTemp_orderInput[]
    upsert?: temp_order_detailUpsertWithWhereUniqueWithoutTemp_orderInput | temp_order_detailUpsertWithWhereUniqueWithoutTemp_orderInput[]
    createMany?: temp_order_detailCreateManyTemp_orderInputEnvelope
    set?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
    disconnect?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
    delete?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
    connect?: temp_order_detailWhereUniqueInput | temp_order_detailWhereUniqueInput[]
    update?: temp_order_detailUpdateWithWhereUniqueWithoutTemp_orderInput | temp_order_detailUpdateWithWhereUniqueWithoutTemp_orderInput[]
    updateMany?: temp_order_detailUpdateManyWithWhereWithoutTemp_orderInput | temp_order_detailUpdateManyWithWhereWithoutTemp_orderInput[]
    deleteMany?: temp_order_detailScalarWhereInput | temp_order_detailScalarWhereInput[]
  }

  export type temp_orderCreateNestedOneWithoutDetailsInput = {
    create?: XOR<temp_orderCreateWithoutDetailsInput, temp_orderUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: temp_orderCreateOrConnectWithoutDetailsInput
    connect?: temp_orderWhereUniqueInput
  }

  export type ticketCreateNestedOneWithoutTemp_order_detailsInput = {
    create?: XOR<ticketCreateWithoutTemp_order_detailsInput, ticketUncheckedCreateWithoutTemp_order_detailsInput>
    connectOrCreate?: ticketCreateOrConnectWithoutTemp_order_detailsInput
    connect?: ticketWhereUniqueInput
  }

  export type temp_orderUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<temp_orderCreateWithoutDetailsInput, temp_orderUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: temp_orderCreateOrConnectWithoutDetailsInput
    upsert?: temp_orderUpsertWithoutDetailsInput
    connect?: temp_orderWhereUniqueInput
    update?: XOR<XOR<temp_orderUpdateToOneWithWhereWithoutDetailsInput, temp_orderUpdateWithoutDetailsInput>, temp_orderUncheckedUpdateWithoutDetailsInput>
  }

  export type ticketUpdateOneRequiredWithoutTemp_order_detailsNestedInput = {
    create?: XOR<ticketCreateWithoutTemp_order_detailsInput, ticketUncheckedCreateWithoutTemp_order_detailsInput>
    connectOrCreate?: ticketCreateOrConnectWithoutTemp_order_detailsInput
    upsert?: ticketUpsertWithoutTemp_order_detailsInput
    connect?: ticketWhereUniqueInput
    update?: XOR<XOR<ticketUpdateToOneWithWhereWithoutTemp_order_detailsInput, ticketUpdateWithoutTemp_order_detailsInput>, ticketUncheckedUpdateWithoutTemp_order_detailsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumOperatingDayFilter<$PrismaModel = never> = {
    equals?: $Enums.OperatingDay | EnumOperatingDayFieldRefInput<$PrismaModel>
    in?: $Enums.OperatingDay[]
    notIn?: $Enums.OperatingDay[]
    not?: NestedEnumOperatingDayFilter<$PrismaModel> | $Enums.OperatingDay
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumOperatingDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OperatingDay | EnumOperatingDayFieldRefInput<$PrismaModel>
    in?: $Enums.OperatingDay[]
    notIn?: $Enums.OperatingDay[]
    not?: NestedEnumOperatingDayWithAggregatesFilter<$PrismaModel> | $Enums.OperatingDay
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOperatingDayFilter<$PrismaModel>
    _max?: NestedEnumOperatingDayFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransactionStatus[] | null
    notIn?: $Enums.TransactionStatus[] | null
    not?: NestedEnumTransactionStatusNullableFilter<$PrismaModel> | $Enums.TransactionStatus | null
  }

  export type NestedEnumTransactionStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TransactionStatus[] | null
    notIn?: $Enums.TransactionStatus[] | null
    not?: NestedEnumTransactionStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type spot_tourismCreateWithoutCategoryInput = {
    spot_id: string
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
    facility_tourisms?: facility_tourismCreateNestedManyWithoutSpotInput
    galleries?: galleryCreateNestedManyWithoutSpotInput
    operating_hours?: operating_hoursCreateNestedManyWithoutSpotInput
    reviews?: reviewsCreateNestedManyWithoutSpotInput
    village?: villageCreateNestedOneWithoutSpotsInput
    tickets?: ticketCreateNestedManyWithoutSpotInput
  }

  export type spot_tourismUncheckedCreateWithoutCategoryInput = {
    spot_id: string
    village_id?: string | null
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
    facility_tourisms?: facility_tourismUncheckedCreateNestedManyWithoutSpotInput
    galleries?: galleryUncheckedCreateNestedManyWithoutSpotInput
    operating_hours?: operating_hoursUncheckedCreateNestedManyWithoutSpotInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutSpotInput
    tickets?: ticketUncheckedCreateNestedManyWithoutSpotInput
  }

  export type spot_tourismCreateOrConnectWithoutCategoryInput = {
    where: spot_tourismWhereUniqueInput
    create: XOR<spot_tourismCreateWithoutCategoryInput, spot_tourismUncheckedCreateWithoutCategoryInput>
  }

  export type spot_tourismCreateManyCategoryInputEnvelope = {
    data: spot_tourismCreateManyCategoryInput | spot_tourismCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type spot_tourismUpsertWithWhereUniqueWithoutCategoryInput = {
    where: spot_tourismWhereUniqueInput
    update: XOR<spot_tourismUpdateWithoutCategoryInput, spot_tourismUncheckedUpdateWithoutCategoryInput>
    create: XOR<spot_tourismCreateWithoutCategoryInput, spot_tourismUncheckedCreateWithoutCategoryInput>
  }

  export type spot_tourismUpdateWithWhereUniqueWithoutCategoryInput = {
    where: spot_tourismWhereUniqueInput
    data: XOR<spot_tourismUpdateWithoutCategoryInput, spot_tourismUncheckedUpdateWithoutCategoryInput>
  }

  export type spot_tourismUpdateManyWithWhereWithoutCategoryInput = {
    where: spot_tourismScalarWhereInput
    data: XOR<spot_tourismUpdateManyMutationInput, spot_tourismUncheckedUpdateManyWithoutCategoryInput>
  }

  export type spot_tourismScalarWhereInput = {
    AND?: spot_tourismScalarWhereInput | spot_tourismScalarWhereInput[]
    OR?: spot_tourismScalarWhereInput[]
    NOT?: spot_tourismScalarWhereInput | spot_tourismScalarWhereInput[]
    spot_id?: StringFilter<"spot_tourism"> | string
    category_id?: StringNullableFilter<"spot_tourism"> | string | null
    village_id?: StringNullableFilter<"spot_tourism"> | string | null
    spot_name?: StringFilter<"spot_tourism"> | string
    spot_desc?: StringNullableFilter<"spot_tourism"> | string | null
    spot_address?: StringNullableFilter<"spot_tourism"> | string | null
    spot_maps?: StringNullableFilter<"spot_tourism"> | string | null
    spot_thumbnail?: StringNullableFilter<"spot_tourism"> | string | null
    spot_rating?: DecimalNullableFilter<"spot_tourism"> | Decimal | DecimalJsLike | number | string | null
    spot_contact?: StringNullableFilter<"spot_tourism"> | string | null
  }

  export type facility_tourismCreateWithoutFacilityInput = {
    facility_tourism_id: string
    spot?: spot_tourismCreateNestedOneWithoutFacility_tourismsInput
  }

  export type facility_tourismUncheckedCreateWithoutFacilityInput = {
    facility_tourism_id: string
    spot_id?: string | null
  }

  export type facility_tourismCreateOrConnectWithoutFacilityInput = {
    where: facility_tourismWhereUniqueInput
    create: XOR<facility_tourismCreateWithoutFacilityInput, facility_tourismUncheckedCreateWithoutFacilityInput>
  }

  export type facility_tourismCreateManyFacilityInputEnvelope = {
    data: facility_tourismCreateManyFacilityInput | facility_tourismCreateManyFacilityInput[]
    skipDuplicates?: boolean
  }

  export type facility_tourismUpsertWithWhereUniqueWithoutFacilityInput = {
    where: facility_tourismWhereUniqueInput
    update: XOR<facility_tourismUpdateWithoutFacilityInput, facility_tourismUncheckedUpdateWithoutFacilityInput>
    create: XOR<facility_tourismCreateWithoutFacilityInput, facility_tourismUncheckedCreateWithoutFacilityInput>
  }

  export type facility_tourismUpdateWithWhereUniqueWithoutFacilityInput = {
    where: facility_tourismWhereUniqueInput
    data: XOR<facility_tourismUpdateWithoutFacilityInput, facility_tourismUncheckedUpdateWithoutFacilityInput>
  }

  export type facility_tourismUpdateManyWithWhereWithoutFacilityInput = {
    where: facility_tourismScalarWhereInput
    data: XOR<facility_tourismUpdateManyMutationInput, facility_tourismUncheckedUpdateManyWithoutFacilityInput>
  }

  export type facility_tourismScalarWhereInput = {
    AND?: facility_tourismScalarWhereInput | facility_tourismScalarWhereInput[]
    OR?: facility_tourismScalarWhereInput[]
    NOT?: facility_tourismScalarWhereInput | facility_tourismScalarWhereInput[]
    facility_tourism_id?: StringFilter<"facility_tourism"> | string
    spot_id?: StringNullableFilter<"facility_tourism"> | string | null
    facility_id?: StringNullableFilter<"facility_tourism"> | string | null
  }

  export type spot_tourismCreateWithoutFacility_tourismsInput = {
    spot_id: string
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
    galleries?: galleryCreateNestedManyWithoutSpotInput
    operating_hours?: operating_hoursCreateNestedManyWithoutSpotInput
    reviews?: reviewsCreateNestedManyWithoutSpotInput
    category?: category_tourismCreateNestedOneWithoutSpotsInput
    village?: villageCreateNestedOneWithoutSpotsInput
    tickets?: ticketCreateNestedManyWithoutSpotInput
  }

  export type spot_tourismUncheckedCreateWithoutFacility_tourismsInput = {
    spot_id: string
    category_id?: string | null
    village_id?: string | null
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
    galleries?: galleryUncheckedCreateNestedManyWithoutSpotInput
    operating_hours?: operating_hoursUncheckedCreateNestedManyWithoutSpotInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutSpotInput
    tickets?: ticketUncheckedCreateNestedManyWithoutSpotInput
  }

  export type spot_tourismCreateOrConnectWithoutFacility_tourismsInput = {
    where: spot_tourismWhereUniqueInput
    create: XOR<spot_tourismCreateWithoutFacility_tourismsInput, spot_tourismUncheckedCreateWithoutFacility_tourismsInput>
  }

  export type facilityCreateWithoutFacility_tourismsInput = {
    facility_id: string
    facility_name: string
    facility_icon?: string | null
  }

  export type facilityUncheckedCreateWithoutFacility_tourismsInput = {
    facility_id: string
    facility_name: string
    facility_icon?: string | null
  }

  export type facilityCreateOrConnectWithoutFacility_tourismsInput = {
    where: facilityWhereUniqueInput
    create: XOR<facilityCreateWithoutFacility_tourismsInput, facilityUncheckedCreateWithoutFacility_tourismsInput>
  }

  export type spot_tourismUpsertWithoutFacility_tourismsInput = {
    update: XOR<spot_tourismUpdateWithoutFacility_tourismsInput, spot_tourismUncheckedUpdateWithoutFacility_tourismsInput>
    create: XOR<spot_tourismCreateWithoutFacility_tourismsInput, spot_tourismUncheckedCreateWithoutFacility_tourismsInput>
    where?: spot_tourismWhereInput
  }

  export type spot_tourismUpdateToOneWithWhereWithoutFacility_tourismsInput = {
    where?: spot_tourismWhereInput
    data: XOR<spot_tourismUpdateWithoutFacility_tourismsInput, spot_tourismUncheckedUpdateWithoutFacility_tourismsInput>
  }

  export type spot_tourismUpdateWithoutFacility_tourismsInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
    galleries?: galleryUpdateManyWithoutSpotNestedInput
    operating_hours?: operating_hoursUpdateManyWithoutSpotNestedInput
    reviews?: reviewsUpdateManyWithoutSpotNestedInput
    category?: category_tourismUpdateOneWithoutSpotsNestedInput
    village?: villageUpdateOneWithoutSpotsNestedInput
    tickets?: ticketUpdateManyWithoutSpotNestedInput
  }

  export type spot_tourismUncheckedUpdateWithoutFacility_tourismsInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    village_id?: NullableStringFieldUpdateOperationsInput | string | null
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
    galleries?: galleryUncheckedUpdateManyWithoutSpotNestedInput
    operating_hours?: operating_hoursUncheckedUpdateManyWithoutSpotNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutSpotNestedInput
    tickets?: ticketUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type facilityUpsertWithoutFacility_tourismsInput = {
    update: XOR<facilityUpdateWithoutFacility_tourismsInput, facilityUncheckedUpdateWithoutFacility_tourismsInput>
    create: XOR<facilityCreateWithoutFacility_tourismsInput, facilityUncheckedCreateWithoutFacility_tourismsInput>
    where?: facilityWhereInput
  }

  export type facilityUpdateToOneWithWhereWithoutFacility_tourismsInput = {
    where?: facilityWhereInput
    data: XOR<facilityUpdateWithoutFacility_tourismsInput, facilityUncheckedUpdateWithoutFacility_tourismsInput>
  }

  export type facilityUpdateWithoutFacility_tourismsInput = {
    facility_id?: StringFieldUpdateOperationsInput | string
    facility_name?: StringFieldUpdateOperationsInput | string
    facility_icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type facilityUncheckedUpdateWithoutFacility_tourismsInput = {
    facility_id?: StringFieldUpdateOperationsInput | string
    facility_name?: StringFieldUpdateOperationsInput | string
    facility_icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spot_tourismCreateWithoutGalleriesInput = {
    spot_id: string
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
    facility_tourisms?: facility_tourismCreateNestedManyWithoutSpotInput
    operating_hours?: operating_hoursCreateNestedManyWithoutSpotInput
    reviews?: reviewsCreateNestedManyWithoutSpotInput
    category?: category_tourismCreateNestedOneWithoutSpotsInput
    village?: villageCreateNestedOneWithoutSpotsInput
    tickets?: ticketCreateNestedManyWithoutSpotInput
  }

  export type spot_tourismUncheckedCreateWithoutGalleriesInput = {
    spot_id: string
    category_id?: string | null
    village_id?: string | null
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
    facility_tourisms?: facility_tourismUncheckedCreateNestedManyWithoutSpotInput
    operating_hours?: operating_hoursUncheckedCreateNestedManyWithoutSpotInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutSpotInput
    tickets?: ticketUncheckedCreateNestedManyWithoutSpotInput
  }

  export type spot_tourismCreateOrConnectWithoutGalleriesInput = {
    where: spot_tourismWhereUniqueInput
    create: XOR<spot_tourismCreateWithoutGalleriesInput, spot_tourismUncheckedCreateWithoutGalleriesInput>
  }

  export type spot_tourismUpsertWithoutGalleriesInput = {
    update: XOR<spot_tourismUpdateWithoutGalleriesInput, spot_tourismUncheckedUpdateWithoutGalleriesInput>
    create: XOR<spot_tourismCreateWithoutGalleriesInput, spot_tourismUncheckedCreateWithoutGalleriesInput>
    where?: spot_tourismWhereInput
  }

  export type spot_tourismUpdateToOneWithWhereWithoutGalleriesInput = {
    where?: spot_tourismWhereInput
    data: XOR<spot_tourismUpdateWithoutGalleriesInput, spot_tourismUncheckedUpdateWithoutGalleriesInput>
  }

  export type spot_tourismUpdateWithoutGalleriesInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
    facility_tourisms?: facility_tourismUpdateManyWithoutSpotNestedInput
    operating_hours?: operating_hoursUpdateManyWithoutSpotNestedInput
    reviews?: reviewsUpdateManyWithoutSpotNestedInput
    category?: category_tourismUpdateOneWithoutSpotsNestedInput
    village?: villageUpdateOneWithoutSpotsNestedInput
    tickets?: ticketUpdateManyWithoutSpotNestedInput
  }

  export type spot_tourismUncheckedUpdateWithoutGalleriesInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    village_id?: NullableStringFieldUpdateOperationsInput | string | null
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
    facility_tourisms?: facility_tourismUncheckedUpdateManyWithoutSpotNestedInput
    operating_hours?: operating_hoursUncheckedUpdateManyWithoutSpotNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutSpotNestedInput
    tickets?: ticketUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type spot_tourismCreateWithoutOperating_hoursInput = {
    spot_id: string
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
    facility_tourisms?: facility_tourismCreateNestedManyWithoutSpotInput
    galleries?: galleryCreateNestedManyWithoutSpotInput
    reviews?: reviewsCreateNestedManyWithoutSpotInput
    category?: category_tourismCreateNestedOneWithoutSpotsInput
    village?: villageCreateNestedOneWithoutSpotsInput
    tickets?: ticketCreateNestedManyWithoutSpotInput
  }

  export type spot_tourismUncheckedCreateWithoutOperating_hoursInput = {
    spot_id: string
    category_id?: string | null
    village_id?: string | null
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
    facility_tourisms?: facility_tourismUncheckedCreateNestedManyWithoutSpotInput
    galleries?: galleryUncheckedCreateNestedManyWithoutSpotInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutSpotInput
    tickets?: ticketUncheckedCreateNestedManyWithoutSpotInput
  }

  export type spot_tourismCreateOrConnectWithoutOperating_hoursInput = {
    where: spot_tourismWhereUniqueInput
    create: XOR<spot_tourismCreateWithoutOperating_hoursInput, spot_tourismUncheckedCreateWithoutOperating_hoursInput>
  }

  export type spot_tourismUpsertWithoutOperating_hoursInput = {
    update: XOR<spot_tourismUpdateWithoutOperating_hoursInput, spot_tourismUncheckedUpdateWithoutOperating_hoursInput>
    create: XOR<spot_tourismCreateWithoutOperating_hoursInput, spot_tourismUncheckedCreateWithoutOperating_hoursInput>
    where?: spot_tourismWhereInput
  }

  export type spot_tourismUpdateToOneWithWhereWithoutOperating_hoursInput = {
    where?: spot_tourismWhereInput
    data: XOR<spot_tourismUpdateWithoutOperating_hoursInput, spot_tourismUncheckedUpdateWithoutOperating_hoursInput>
  }

  export type spot_tourismUpdateWithoutOperating_hoursInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
    facility_tourisms?: facility_tourismUpdateManyWithoutSpotNestedInput
    galleries?: galleryUpdateManyWithoutSpotNestedInput
    reviews?: reviewsUpdateManyWithoutSpotNestedInput
    category?: category_tourismUpdateOneWithoutSpotsNestedInput
    village?: villageUpdateOneWithoutSpotsNestedInput
    tickets?: ticketUpdateManyWithoutSpotNestedInput
  }

  export type spot_tourismUncheckedUpdateWithoutOperating_hoursInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    village_id?: NullableStringFieldUpdateOperationsInput | string | null
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
    facility_tourisms?: facility_tourismUncheckedUpdateManyWithoutSpotNestedInput
    galleries?: galleryUncheckedUpdateManyWithoutSpotNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutSpotNestedInput
    tickets?: ticketUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type transactionCreateWithoutPaymentsInput = {
    transaction_code: string
    total_price: Decimal | DecimalJsLike | number | string
    transaction_status?: $Enums.TransactionStatus | null
    transaction_date?: Date | string | null
    visit_date: Date | string
    user?: usersCreateNestedOneWithoutTransactionsInput
    transaction_details?: transaction_detailCreateNestedManyWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutPaymentsInput = {
    transaction_id?: number
    user_id?: string | null
    transaction_code: string
    total_price: Decimal | DecimalJsLike | number | string
    transaction_status?: $Enums.TransactionStatus | null
    transaction_date?: Date | string | null
    visit_date: Date | string
    transaction_details?: transaction_detailUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type transactionCreateOrConnectWithoutPaymentsInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutPaymentsInput, transactionUncheckedCreateWithoutPaymentsInput>
  }

  export type transactionUpsertWithoutPaymentsInput = {
    update: XOR<transactionUpdateWithoutPaymentsInput, transactionUncheckedUpdateWithoutPaymentsInput>
    create: XOR<transactionCreateWithoutPaymentsInput, transactionUncheckedCreateWithoutPaymentsInput>
    where?: transactionWhereInput
  }

  export type transactionUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: transactionWhereInput
    data: XOR<transactionUpdateWithoutPaymentsInput, transactionUncheckedUpdateWithoutPaymentsInput>
  }

  export type transactionUpdateWithoutPaymentsInput = {
    transaction_code?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_status?: NullableEnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneWithoutTransactionsNestedInput
    transaction_details?: transaction_detailUpdateManyWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutPaymentsInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_code?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_status?: NullableEnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_details?: transaction_detailUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type spot_tourismCreateWithoutReviewsInput = {
    spot_id: string
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
    facility_tourisms?: facility_tourismCreateNestedManyWithoutSpotInput
    galleries?: galleryCreateNestedManyWithoutSpotInput
    operating_hours?: operating_hoursCreateNestedManyWithoutSpotInput
    category?: category_tourismCreateNestedOneWithoutSpotsInput
    village?: villageCreateNestedOneWithoutSpotsInput
    tickets?: ticketCreateNestedManyWithoutSpotInput
  }

  export type spot_tourismUncheckedCreateWithoutReviewsInput = {
    spot_id: string
    category_id?: string | null
    village_id?: string | null
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
    facility_tourisms?: facility_tourismUncheckedCreateNestedManyWithoutSpotInput
    galleries?: galleryUncheckedCreateNestedManyWithoutSpotInput
    operating_hours?: operating_hoursUncheckedCreateNestedManyWithoutSpotInput
    tickets?: ticketUncheckedCreateNestedManyWithoutSpotInput
  }

  export type spot_tourismCreateOrConnectWithoutReviewsInput = {
    where: spot_tourismWhereUniqueInput
    create: XOR<spot_tourismCreateWithoutReviewsInput, spot_tourismUncheckedCreateWithoutReviewsInput>
  }

  export type usersCreateWithoutReviewsInput = {
    user_id: string
    name: string
    email: string
    password: string
    phone_number?: string | null
    address?: string | null
    role: $Enums.Role
    transactions?: transactionCreateNestedManyWithoutUserInput
    temp_orders?: temp_orderCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutReviewsInput = {
    user_id: string
    name: string
    email: string
    password: string
    phone_number?: string | null
    address?: string | null
    role: $Enums.Role
    transactions?: transactionUncheckedCreateNestedManyWithoutUserInput
    temp_orders?: temp_orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutReviewsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
  }

  export type spot_tourismUpsertWithoutReviewsInput = {
    update: XOR<spot_tourismUpdateWithoutReviewsInput, spot_tourismUncheckedUpdateWithoutReviewsInput>
    create: XOR<spot_tourismCreateWithoutReviewsInput, spot_tourismUncheckedCreateWithoutReviewsInput>
    where?: spot_tourismWhereInput
  }

  export type spot_tourismUpdateToOneWithWhereWithoutReviewsInput = {
    where?: spot_tourismWhereInput
    data: XOR<spot_tourismUpdateWithoutReviewsInput, spot_tourismUncheckedUpdateWithoutReviewsInput>
  }

  export type spot_tourismUpdateWithoutReviewsInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
    facility_tourisms?: facility_tourismUpdateManyWithoutSpotNestedInput
    galleries?: galleryUpdateManyWithoutSpotNestedInput
    operating_hours?: operating_hoursUpdateManyWithoutSpotNestedInput
    category?: category_tourismUpdateOneWithoutSpotsNestedInput
    village?: villageUpdateOneWithoutSpotsNestedInput
    tickets?: ticketUpdateManyWithoutSpotNestedInput
  }

  export type spot_tourismUncheckedUpdateWithoutReviewsInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    village_id?: NullableStringFieldUpdateOperationsInput | string | null
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
    facility_tourisms?: facility_tourismUncheckedUpdateManyWithoutSpotNestedInput
    galleries?: galleryUncheckedUpdateManyWithoutSpotNestedInput
    operating_hours?: operating_hoursUncheckedUpdateManyWithoutSpotNestedInput
    tickets?: ticketUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type usersUpsertWithoutReviewsInput = {
    update: XOR<usersUpdateWithoutReviewsInput, usersUncheckedUpdateWithoutReviewsInput>
    create: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReviewsInput, usersUncheckedUpdateWithoutReviewsInput>
  }

  export type usersUpdateWithoutReviewsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    transactions?: transactionUpdateManyWithoutUserNestedInput
    temp_orders?: temp_orderUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutReviewsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    transactions?: transactionUncheckedUpdateManyWithoutUserNestedInput
    temp_orders?: temp_orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type facility_tourismCreateWithoutSpotInput = {
    facility_tourism_id: string
    facility?: facilityCreateNestedOneWithoutFacility_tourismsInput
  }

  export type facility_tourismUncheckedCreateWithoutSpotInput = {
    facility_tourism_id: string
    facility_id?: string | null
  }

  export type facility_tourismCreateOrConnectWithoutSpotInput = {
    where: facility_tourismWhereUniqueInput
    create: XOR<facility_tourismCreateWithoutSpotInput, facility_tourismUncheckedCreateWithoutSpotInput>
  }

  export type facility_tourismCreateManySpotInputEnvelope = {
    data: facility_tourismCreateManySpotInput | facility_tourismCreateManySpotInput[]
    skipDuplicates?: boolean
  }

  export type galleryCreateWithoutSpotInput = {
    gallery_id: string
    gallery_img?: string | null
    gallery_caption?: string | null
  }

  export type galleryUncheckedCreateWithoutSpotInput = {
    gallery_id: string
    gallery_img?: string | null
    gallery_caption?: string | null
  }

  export type galleryCreateOrConnectWithoutSpotInput = {
    where: galleryWhereUniqueInput
    create: XOR<galleryCreateWithoutSpotInput, galleryUncheckedCreateWithoutSpotInput>
  }

  export type galleryCreateManySpotInputEnvelope = {
    data: galleryCreateManySpotInput | galleryCreateManySpotInput[]
    skipDuplicates?: boolean
  }

  export type operating_hoursCreateWithoutSpotInput = {
    operating_id: string
    operating_day: $Enums.OperatingDay
    hours_open: Date | string
    hours_closed: Date | string
  }

  export type operating_hoursUncheckedCreateWithoutSpotInput = {
    operating_id: string
    operating_day: $Enums.OperatingDay
    hours_open: Date | string
    hours_closed: Date | string
  }

  export type operating_hoursCreateOrConnectWithoutSpotInput = {
    where: operating_hoursWhereUniqueInput
    create: XOR<operating_hoursCreateWithoutSpotInput, operating_hoursUncheckedCreateWithoutSpotInput>
  }

  export type operating_hoursCreateManySpotInputEnvelope = {
    data: operating_hoursCreateManySpotInput | operating_hoursCreateManySpotInput[]
    skipDuplicates?: boolean
  }

  export type reviewsCreateWithoutSpotInput = {
    reviews_id: string
    reviews_rating?: number | null
    reviews_desc?: string | null
    reviews_created_at?: Date | string | null
    user?: usersCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutSpotInput = {
    reviews_id: string
    user_id?: string | null
    reviews_rating?: number | null
    reviews_desc?: string | null
    reviews_created_at?: Date | string | null
  }

  export type reviewsCreateOrConnectWithoutSpotInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutSpotInput, reviewsUncheckedCreateWithoutSpotInput>
  }

  export type reviewsCreateManySpotInputEnvelope = {
    data: reviewsCreateManySpotInput | reviewsCreateManySpotInput[]
    skipDuplicates?: boolean
  }

  export type category_tourismCreateWithoutSpotsInput = {
    category_id: string
    category_name: string
    category_desc?: string | null
    category_icon?: string | null
  }

  export type category_tourismUncheckedCreateWithoutSpotsInput = {
    category_id: string
    category_name: string
    category_desc?: string | null
    category_icon?: string | null
  }

  export type category_tourismCreateOrConnectWithoutSpotsInput = {
    where: category_tourismWhereUniqueInput
    create: XOR<category_tourismCreateWithoutSpotsInput, category_tourismUncheckedCreateWithoutSpotsInput>
  }

  export type villageCreateWithoutSpotsInput = {
    village_id: string
    village_name: string
    village_city: string
  }

  export type villageUncheckedCreateWithoutSpotsInput = {
    village_id: string
    village_name: string
    village_city: string
  }

  export type villageCreateOrConnectWithoutSpotsInput = {
    where: villageWhereUniqueInput
    create: XOR<villageCreateWithoutSpotsInput, villageUncheckedCreateWithoutSpotsInput>
  }

  export type ticketCreateWithoutSpotInput = {
    ticket_id: string
    ticket_name?: string | null
    ticket_price: Decimal | DecimalJsLike | number | string
    ticket_desc?: string | null
    ticket_stock?: number | null
    code: string
    url_qr: string
    temp_order_details?: temp_order_detailCreateNestedManyWithoutTicketInput
    transaction_details?: transaction_detailCreateNestedManyWithoutTicketInput
  }

  export type ticketUncheckedCreateWithoutSpotInput = {
    ticket_id: string
    ticket_name?: string | null
    ticket_price: Decimal | DecimalJsLike | number | string
    ticket_desc?: string | null
    ticket_stock?: number | null
    code: string
    url_qr: string
    temp_order_details?: temp_order_detailUncheckedCreateNestedManyWithoutTicketInput
    transaction_details?: transaction_detailUncheckedCreateNestedManyWithoutTicketInput
  }

  export type ticketCreateOrConnectWithoutSpotInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutSpotInput, ticketUncheckedCreateWithoutSpotInput>
  }

  export type ticketCreateManySpotInputEnvelope = {
    data: ticketCreateManySpotInput | ticketCreateManySpotInput[]
    skipDuplicates?: boolean
  }

  export type facility_tourismUpsertWithWhereUniqueWithoutSpotInput = {
    where: facility_tourismWhereUniqueInput
    update: XOR<facility_tourismUpdateWithoutSpotInput, facility_tourismUncheckedUpdateWithoutSpotInput>
    create: XOR<facility_tourismCreateWithoutSpotInput, facility_tourismUncheckedCreateWithoutSpotInput>
  }

  export type facility_tourismUpdateWithWhereUniqueWithoutSpotInput = {
    where: facility_tourismWhereUniqueInput
    data: XOR<facility_tourismUpdateWithoutSpotInput, facility_tourismUncheckedUpdateWithoutSpotInput>
  }

  export type facility_tourismUpdateManyWithWhereWithoutSpotInput = {
    where: facility_tourismScalarWhereInput
    data: XOR<facility_tourismUpdateManyMutationInput, facility_tourismUncheckedUpdateManyWithoutSpotInput>
  }

  export type galleryUpsertWithWhereUniqueWithoutSpotInput = {
    where: galleryWhereUniqueInput
    update: XOR<galleryUpdateWithoutSpotInput, galleryUncheckedUpdateWithoutSpotInput>
    create: XOR<galleryCreateWithoutSpotInput, galleryUncheckedCreateWithoutSpotInput>
  }

  export type galleryUpdateWithWhereUniqueWithoutSpotInput = {
    where: galleryWhereUniqueInput
    data: XOR<galleryUpdateWithoutSpotInput, galleryUncheckedUpdateWithoutSpotInput>
  }

  export type galleryUpdateManyWithWhereWithoutSpotInput = {
    where: galleryScalarWhereInput
    data: XOR<galleryUpdateManyMutationInput, galleryUncheckedUpdateManyWithoutSpotInput>
  }

  export type galleryScalarWhereInput = {
    AND?: galleryScalarWhereInput | galleryScalarWhereInput[]
    OR?: galleryScalarWhereInput[]
    NOT?: galleryScalarWhereInput | galleryScalarWhereInput[]
    gallery_id?: StringFilter<"gallery"> | string
    spot_id?: StringNullableFilter<"gallery"> | string | null
    gallery_img?: StringNullableFilter<"gallery"> | string | null
    gallery_caption?: StringNullableFilter<"gallery"> | string | null
  }

  export type operating_hoursUpsertWithWhereUniqueWithoutSpotInput = {
    where: operating_hoursWhereUniqueInput
    update: XOR<operating_hoursUpdateWithoutSpotInput, operating_hoursUncheckedUpdateWithoutSpotInput>
    create: XOR<operating_hoursCreateWithoutSpotInput, operating_hoursUncheckedCreateWithoutSpotInput>
  }

  export type operating_hoursUpdateWithWhereUniqueWithoutSpotInput = {
    where: operating_hoursWhereUniqueInput
    data: XOR<operating_hoursUpdateWithoutSpotInput, operating_hoursUncheckedUpdateWithoutSpotInput>
  }

  export type operating_hoursUpdateManyWithWhereWithoutSpotInput = {
    where: operating_hoursScalarWhereInput
    data: XOR<operating_hoursUpdateManyMutationInput, operating_hoursUncheckedUpdateManyWithoutSpotInput>
  }

  export type operating_hoursScalarWhereInput = {
    AND?: operating_hoursScalarWhereInput | operating_hoursScalarWhereInput[]
    OR?: operating_hoursScalarWhereInput[]
    NOT?: operating_hoursScalarWhereInput | operating_hoursScalarWhereInput[]
    operating_id?: StringFilter<"operating_hours"> | string
    spot_id?: StringNullableFilter<"operating_hours"> | string | null
    operating_day?: EnumOperatingDayFilter<"operating_hours"> | $Enums.OperatingDay
    hours_open?: DateTimeFilter<"operating_hours"> | Date | string
    hours_closed?: DateTimeFilter<"operating_hours"> | Date | string
  }

  export type reviewsUpsertWithWhereUniqueWithoutSpotInput = {
    where: reviewsWhereUniqueInput
    update: XOR<reviewsUpdateWithoutSpotInput, reviewsUncheckedUpdateWithoutSpotInput>
    create: XOR<reviewsCreateWithoutSpotInput, reviewsUncheckedCreateWithoutSpotInput>
  }

  export type reviewsUpdateWithWhereUniqueWithoutSpotInput = {
    where: reviewsWhereUniqueInput
    data: XOR<reviewsUpdateWithoutSpotInput, reviewsUncheckedUpdateWithoutSpotInput>
  }

  export type reviewsUpdateManyWithWhereWithoutSpotInput = {
    where: reviewsScalarWhereInput
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyWithoutSpotInput>
  }

  export type reviewsScalarWhereInput = {
    AND?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
    OR?: reviewsScalarWhereInput[]
    NOT?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
    reviews_id?: StringFilter<"reviews"> | string
    spot_id?: StringNullableFilter<"reviews"> | string | null
    user_id?: StringNullableFilter<"reviews"> | string | null
    reviews_rating?: IntNullableFilter<"reviews"> | number | null
    reviews_desc?: StringNullableFilter<"reviews"> | string | null
    reviews_created_at?: DateTimeNullableFilter<"reviews"> | Date | string | null
  }

  export type category_tourismUpsertWithoutSpotsInput = {
    update: XOR<category_tourismUpdateWithoutSpotsInput, category_tourismUncheckedUpdateWithoutSpotsInput>
    create: XOR<category_tourismCreateWithoutSpotsInput, category_tourismUncheckedCreateWithoutSpotsInput>
    where?: category_tourismWhereInput
  }

  export type category_tourismUpdateToOneWithWhereWithoutSpotsInput = {
    where?: category_tourismWhereInput
    data: XOR<category_tourismUpdateWithoutSpotsInput, category_tourismUncheckedUpdateWithoutSpotsInput>
  }

  export type category_tourismUpdateWithoutSpotsInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    category_desc?: NullableStringFieldUpdateOperationsInput | string | null
    category_icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type category_tourismUncheckedUpdateWithoutSpotsInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    category_desc?: NullableStringFieldUpdateOperationsInput | string | null
    category_icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type villageUpsertWithoutSpotsInput = {
    update: XOR<villageUpdateWithoutSpotsInput, villageUncheckedUpdateWithoutSpotsInput>
    create: XOR<villageCreateWithoutSpotsInput, villageUncheckedCreateWithoutSpotsInput>
    where?: villageWhereInput
  }

  export type villageUpdateToOneWithWhereWithoutSpotsInput = {
    where?: villageWhereInput
    data: XOR<villageUpdateWithoutSpotsInput, villageUncheckedUpdateWithoutSpotsInput>
  }

  export type villageUpdateWithoutSpotsInput = {
    village_id?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    village_city?: StringFieldUpdateOperationsInput | string
  }

  export type villageUncheckedUpdateWithoutSpotsInput = {
    village_id?: StringFieldUpdateOperationsInput | string
    village_name?: StringFieldUpdateOperationsInput | string
    village_city?: StringFieldUpdateOperationsInput | string
  }

  export type ticketUpsertWithWhereUniqueWithoutSpotInput = {
    where: ticketWhereUniqueInput
    update: XOR<ticketUpdateWithoutSpotInput, ticketUncheckedUpdateWithoutSpotInput>
    create: XOR<ticketCreateWithoutSpotInput, ticketUncheckedCreateWithoutSpotInput>
  }

  export type ticketUpdateWithWhereUniqueWithoutSpotInput = {
    where: ticketWhereUniqueInput
    data: XOR<ticketUpdateWithoutSpotInput, ticketUncheckedUpdateWithoutSpotInput>
  }

  export type ticketUpdateManyWithWhereWithoutSpotInput = {
    where: ticketScalarWhereInput
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutSpotInput>
  }

  export type ticketScalarWhereInput = {
    AND?: ticketScalarWhereInput | ticketScalarWhereInput[]
    OR?: ticketScalarWhereInput[]
    NOT?: ticketScalarWhereInput | ticketScalarWhereInput[]
    ticket_id?: StringFilter<"ticket"> | string
    spot_id?: StringNullableFilter<"ticket"> | string | null
    ticket_name?: StringNullableFilter<"ticket"> | string | null
    ticket_price?: DecimalFilter<"ticket"> | Decimal | DecimalJsLike | number | string
    ticket_desc?: StringNullableFilter<"ticket"> | string | null
    ticket_stock?: IntNullableFilter<"ticket"> | number | null
    code?: StringFilter<"ticket"> | string
    url_qr?: StringFilter<"ticket"> | string
  }

  export type spot_tourismCreateWithoutTicketsInput = {
    spot_id: string
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
    facility_tourisms?: facility_tourismCreateNestedManyWithoutSpotInput
    galleries?: galleryCreateNestedManyWithoutSpotInput
    operating_hours?: operating_hoursCreateNestedManyWithoutSpotInput
    reviews?: reviewsCreateNestedManyWithoutSpotInput
    category?: category_tourismCreateNestedOneWithoutSpotsInput
    village?: villageCreateNestedOneWithoutSpotsInput
  }

  export type spot_tourismUncheckedCreateWithoutTicketsInput = {
    spot_id: string
    category_id?: string | null
    village_id?: string | null
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
    facility_tourisms?: facility_tourismUncheckedCreateNestedManyWithoutSpotInput
    galleries?: galleryUncheckedCreateNestedManyWithoutSpotInput
    operating_hours?: operating_hoursUncheckedCreateNestedManyWithoutSpotInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutSpotInput
  }

  export type spot_tourismCreateOrConnectWithoutTicketsInput = {
    where: spot_tourismWhereUniqueInput
    create: XOR<spot_tourismCreateWithoutTicketsInput, spot_tourismUncheckedCreateWithoutTicketsInput>
  }

  export type temp_order_detailCreateWithoutTicketInput = {
    visitor_name?: string | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    temp_order: temp_orderCreateNestedOneWithoutDetailsInput
  }

  export type temp_order_detailUncheckedCreateWithoutTicketInput = {
    temp_order_detail_id?: number
    temp_order_id: number
    visitor_name?: string | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type temp_order_detailCreateOrConnectWithoutTicketInput = {
    where: temp_order_detailWhereUniqueInput
    create: XOR<temp_order_detailCreateWithoutTicketInput, temp_order_detailUncheckedCreateWithoutTicketInput>
  }

  export type temp_order_detailCreateManyTicketInputEnvelope = {
    data: temp_order_detailCreateManyTicketInput | temp_order_detailCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type transaction_detailCreateWithoutTicketInput = {
    detail_quantity: number
    detail_price: Decimal | DecimalJsLike | number | string
    detail_subtotal?: Decimal | DecimalJsLike | number | string | null
    is_used?: $Enums.TicketStatus
    transaction?: transactionCreateNestedOneWithoutTransaction_detailsInput
  }

  export type transaction_detailUncheckedCreateWithoutTicketInput = {
    transaction_detail_id?: number
    transaction_id?: number | null
    detail_quantity: number
    detail_price: Decimal | DecimalJsLike | number | string
    detail_subtotal?: Decimal | DecimalJsLike | number | string | null
    is_used?: $Enums.TicketStatus
  }

  export type transaction_detailCreateOrConnectWithoutTicketInput = {
    where: transaction_detailWhereUniqueInput
    create: XOR<transaction_detailCreateWithoutTicketInput, transaction_detailUncheckedCreateWithoutTicketInput>
  }

  export type transaction_detailCreateManyTicketInputEnvelope = {
    data: transaction_detailCreateManyTicketInput | transaction_detailCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type spot_tourismUpsertWithoutTicketsInput = {
    update: XOR<spot_tourismUpdateWithoutTicketsInput, spot_tourismUncheckedUpdateWithoutTicketsInput>
    create: XOR<spot_tourismCreateWithoutTicketsInput, spot_tourismUncheckedCreateWithoutTicketsInput>
    where?: spot_tourismWhereInput
  }

  export type spot_tourismUpdateToOneWithWhereWithoutTicketsInput = {
    where?: spot_tourismWhereInput
    data: XOR<spot_tourismUpdateWithoutTicketsInput, spot_tourismUncheckedUpdateWithoutTicketsInput>
  }

  export type spot_tourismUpdateWithoutTicketsInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
    facility_tourisms?: facility_tourismUpdateManyWithoutSpotNestedInput
    galleries?: galleryUpdateManyWithoutSpotNestedInput
    operating_hours?: operating_hoursUpdateManyWithoutSpotNestedInput
    reviews?: reviewsUpdateManyWithoutSpotNestedInput
    category?: category_tourismUpdateOneWithoutSpotsNestedInput
    village?: villageUpdateOneWithoutSpotsNestedInput
  }

  export type spot_tourismUncheckedUpdateWithoutTicketsInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    village_id?: NullableStringFieldUpdateOperationsInput | string | null
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
    facility_tourisms?: facility_tourismUncheckedUpdateManyWithoutSpotNestedInput
    galleries?: galleryUncheckedUpdateManyWithoutSpotNestedInput
    operating_hours?: operating_hoursUncheckedUpdateManyWithoutSpotNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type temp_order_detailUpsertWithWhereUniqueWithoutTicketInput = {
    where: temp_order_detailWhereUniqueInput
    update: XOR<temp_order_detailUpdateWithoutTicketInput, temp_order_detailUncheckedUpdateWithoutTicketInput>
    create: XOR<temp_order_detailCreateWithoutTicketInput, temp_order_detailUncheckedCreateWithoutTicketInput>
  }

  export type temp_order_detailUpdateWithWhereUniqueWithoutTicketInput = {
    where: temp_order_detailWhereUniqueInput
    data: XOR<temp_order_detailUpdateWithoutTicketInput, temp_order_detailUncheckedUpdateWithoutTicketInput>
  }

  export type temp_order_detailUpdateManyWithWhereWithoutTicketInput = {
    where: temp_order_detailScalarWhereInput
    data: XOR<temp_order_detailUpdateManyMutationInput, temp_order_detailUncheckedUpdateManyWithoutTicketInput>
  }

  export type temp_order_detailScalarWhereInput = {
    AND?: temp_order_detailScalarWhereInput | temp_order_detailScalarWhereInput[]
    OR?: temp_order_detailScalarWhereInput[]
    NOT?: temp_order_detailScalarWhereInput | temp_order_detailScalarWhereInput[]
    temp_order_detail_id?: IntFilter<"temp_order_detail"> | number
    temp_order_id?: IntFilter<"temp_order_detail"> | number
    ticket_id?: StringFilter<"temp_order_detail"> | string
    visitor_name?: StringNullableFilter<"temp_order_detail"> | string | null
    quantity?: IntFilter<"temp_order_detail"> | number
    price?: DecimalFilter<"temp_order_detail"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"temp_order_detail"> | Decimal | DecimalJsLike | number | string
  }

  export type transaction_detailUpsertWithWhereUniqueWithoutTicketInput = {
    where: transaction_detailWhereUniqueInput
    update: XOR<transaction_detailUpdateWithoutTicketInput, transaction_detailUncheckedUpdateWithoutTicketInput>
    create: XOR<transaction_detailCreateWithoutTicketInput, transaction_detailUncheckedCreateWithoutTicketInput>
  }

  export type transaction_detailUpdateWithWhereUniqueWithoutTicketInput = {
    where: transaction_detailWhereUniqueInput
    data: XOR<transaction_detailUpdateWithoutTicketInput, transaction_detailUncheckedUpdateWithoutTicketInput>
  }

  export type transaction_detailUpdateManyWithWhereWithoutTicketInput = {
    where: transaction_detailScalarWhereInput
    data: XOR<transaction_detailUpdateManyMutationInput, transaction_detailUncheckedUpdateManyWithoutTicketInput>
  }

  export type transaction_detailScalarWhereInput = {
    AND?: transaction_detailScalarWhereInput | transaction_detailScalarWhereInput[]
    OR?: transaction_detailScalarWhereInput[]
    NOT?: transaction_detailScalarWhereInput | transaction_detailScalarWhereInput[]
    transaction_detail_id?: IntFilter<"transaction_detail"> | number
    transaction_id?: IntNullableFilter<"transaction_detail"> | number | null
    ticket_id?: StringNullableFilter<"transaction_detail"> | string | null
    detail_quantity?: IntFilter<"transaction_detail"> | number
    detail_price?: DecimalFilter<"transaction_detail"> | Decimal | DecimalJsLike | number | string
    detail_subtotal?: DecimalNullableFilter<"transaction_detail"> | Decimal | DecimalJsLike | number | string | null
    is_used?: EnumTicketStatusFilter<"transaction_detail"> | $Enums.TicketStatus
  }

  export type paymentCreateWithoutTransactionInput = {
    reference_number: string
    payment_type: string
    payment_amount: Decimal | DecimalJsLike | number | string
    payment_status?: $Enums.PaymentStatus
    payment_time?: Date | string
    response_data: JsonNullValueInput | InputJsonValue
  }

  export type paymentUncheckedCreateWithoutTransactionInput = {
    payment_id?: number
    reference_number: string
    payment_type: string
    payment_amount: Decimal | DecimalJsLike | number | string
    payment_status?: $Enums.PaymentStatus
    payment_time?: Date | string
    response_data: JsonNullValueInput | InputJsonValue
  }

  export type paymentCreateOrConnectWithoutTransactionInput = {
    where: paymentWhereUniqueInput
    create: XOR<paymentCreateWithoutTransactionInput, paymentUncheckedCreateWithoutTransactionInput>
  }

  export type paymentCreateManyTransactionInputEnvelope = {
    data: paymentCreateManyTransactionInput | paymentCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutTransactionsInput = {
    user_id: string
    name: string
    email: string
    password: string
    phone_number?: string | null
    address?: string | null
    role: $Enums.Role
    reviews?: reviewsCreateNestedManyWithoutUserInput
    temp_orders?: temp_orderCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutTransactionsInput = {
    user_id: string
    name: string
    email: string
    password: string
    phone_number?: string | null
    address?: string | null
    role: $Enums.Role
    reviews?: reviewsUncheckedCreateNestedManyWithoutUserInput
    temp_orders?: temp_orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutTransactionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
  }

  export type transaction_detailCreateWithoutTransactionInput = {
    detail_quantity: number
    detail_price: Decimal | DecimalJsLike | number | string
    detail_subtotal?: Decimal | DecimalJsLike | number | string | null
    is_used?: $Enums.TicketStatus
    ticket?: ticketCreateNestedOneWithoutTransaction_detailsInput
  }

  export type transaction_detailUncheckedCreateWithoutTransactionInput = {
    transaction_detail_id?: number
    ticket_id?: string | null
    detail_quantity: number
    detail_price: Decimal | DecimalJsLike | number | string
    detail_subtotal?: Decimal | DecimalJsLike | number | string | null
    is_used?: $Enums.TicketStatus
  }

  export type transaction_detailCreateOrConnectWithoutTransactionInput = {
    where: transaction_detailWhereUniqueInput
    create: XOR<transaction_detailCreateWithoutTransactionInput, transaction_detailUncheckedCreateWithoutTransactionInput>
  }

  export type transaction_detailCreateManyTransactionInputEnvelope = {
    data: transaction_detailCreateManyTransactionInput | transaction_detailCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type paymentUpsertWithWhereUniqueWithoutTransactionInput = {
    where: paymentWhereUniqueInput
    update: XOR<paymentUpdateWithoutTransactionInput, paymentUncheckedUpdateWithoutTransactionInput>
    create: XOR<paymentCreateWithoutTransactionInput, paymentUncheckedCreateWithoutTransactionInput>
  }

  export type paymentUpdateWithWhereUniqueWithoutTransactionInput = {
    where: paymentWhereUniqueInput
    data: XOR<paymentUpdateWithoutTransactionInput, paymentUncheckedUpdateWithoutTransactionInput>
  }

  export type paymentUpdateManyWithWhereWithoutTransactionInput = {
    where: paymentScalarWhereInput
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutTransactionInput>
  }

  export type paymentScalarWhereInput = {
    AND?: paymentScalarWhereInput | paymentScalarWhereInput[]
    OR?: paymentScalarWhereInput[]
    NOT?: paymentScalarWhereInput | paymentScalarWhereInput[]
    payment_id?: IntFilter<"payment"> | number
    transaction_id?: IntFilter<"payment"> | number
    reference_number?: StringFilter<"payment"> | string
    payment_type?: StringFilter<"payment"> | string
    payment_amount?: DecimalFilter<"payment"> | Decimal | DecimalJsLike | number | string
    payment_status?: EnumPaymentStatusFilter<"payment"> | $Enums.PaymentStatus
    payment_time?: DateTimeFilter<"payment"> | Date | string
    response_data?: JsonFilter<"payment">
  }

  export type usersUpsertWithoutTransactionsInput = {
    update: XOR<usersUpdateWithoutTransactionsInput, usersUncheckedUpdateWithoutTransactionsInput>
    create: XOR<usersCreateWithoutTransactionsInput, usersUncheckedCreateWithoutTransactionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTransactionsInput, usersUncheckedUpdateWithoutTransactionsInput>
  }

  export type usersUpdateWithoutTransactionsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    reviews?: reviewsUpdateManyWithoutUserNestedInput
    temp_orders?: temp_orderUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutTransactionsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    reviews?: reviewsUncheckedUpdateManyWithoutUserNestedInput
    temp_orders?: temp_orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type transaction_detailUpsertWithWhereUniqueWithoutTransactionInput = {
    where: transaction_detailWhereUniqueInput
    update: XOR<transaction_detailUpdateWithoutTransactionInput, transaction_detailUncheckedUpdateWithoutTransactionInput>
    create: XOR<transaction_detailCreateWithoutTransactionInput, transaction_detailUncheckedCreateWithoutTransactionInput>
  }

  export type transaction_detailUpdateWithWhereUniqueWithoutTransactionInput = {
    where: transaction_detailWhereUniqueInput
    data: XOR<transaction_detailUpdateWithoutTransactionInput, transaction_detailUncheckedUpdateWithoutTransactionInput>
  }

  export type transaction_detailUpdateManyWithWhereWithoutTransactionInput = {
    where: transaction_detailScalarWhereInput
    data: XOR<transaction_detailUpdateManyMutationInput, transaction_detailUncheckedUpdateManyWithoutTransactionInput>
  }

  export type transactionCreateWithoutTransaction_detailsInput = {
    transaction_code: string
    total_price: Decimal | DecimalJsLike | number | string
    transaction_status?: $Enums.TransactionStatus | null
    transaction_date?: Date | string | null
    visit_date: Date | string
    payments?: paymentCreateNestedManyWithoutTransactionInput
    user?: usersCreateNestedOneWithoutTransactionsInput
  }

  export type transactionUncheckedCreateWithoutTransaction_detailsInput = {
    transaction_id?: number
    user_id?: string | null
    transaction_code: string
    total_price: Decimal | DecimalJsLike | number | string
    transaction_status?: $Enums.TransactionStatus | null
    transaction_date?: Date | string | null
    visit_date: Date | string
    payments?: paymentUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type transactionCreateOrConnectWithoutTransaction_detailsInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutTransaction_detailsInput, transactionUncheckedCreateWithoutTransaction_detailsInput>
  }

  export type ticketCreateWithoutTransaction_detailsInput = {
    ticket_id: string
    ticket_name?: string | null
    ticket_price: Decimal | DecimalJsLike | number | string
    ticket_desc?: string | null
    ticket_stock?: number | null
    code: string
    url_qr: string
    spot?: spot_tourismCreateNestedOneWithoutTicketsInput
    temp_order_details?: temp_order_detailCreateNestedManyWithoutTicketInput
  }

  export type ticketUncheckedCreateWithoutTransaction_detailsInput = {
    ticket_id: string
    spot_id?: string | null
    ticket_name?: string | null
    ticket_price: Decimal | DecimalJsLike | number | string
    ticket_desc?: string | null
    ticket_stock?: number | null
    code: string
    url_qr: string
    temp_order_details?: temp_order_detailUncheckedCreateNestedManyWithoutTicketInput
  }

  export type ticketCreateOrConnectWithoutTransaction_detailsInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutTransaction_detailsInput, ticketUncheckedCreateWithoutTransaction_detailsInput>
  }

  export type transactionUpsertWithoutTransaction_detailsInput = {
    update: XOR<transactionUpdateWithoutTransaction_detailsInput, transactionUncheckedUpdateWithoutTransaction_detailsInput>
    create: XOR<transactionCreateWithoutTransaction_detailsInput, transactionUncheckedCreateWithoutTransaction_detailsInput>
    where?: transactionWhereInput
  }

  export type transactionUpdateToOneWithWhereWithoutTransaction_detailsInput = {
    where?: transactionWhereInput
    data: XOR<transactionUpdateWithoutTransaction_detailsInput, transactionUncheckedUpdateWithoutTransaction_detailsInput>
  }

  export type transactionUpdateWithoutTransaction_detailsInput = {
    transaction_code?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_status?: NullableEnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentUpdateManyWithoutTransactionNestedInput
    user?: usersUpdateOneWithoutTransactionsNestedInput
  }

  export type transactionUncheckedUpdateWithoutTransaction_detailsInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_code?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_status?: NullableEnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type ticketUpsertWithoutTransaction_detailsInput = {
    update: XOR<ticketUpdateWithoutTransaction_detailsInput, ticketUncheckedUpdateWithoutTransaction_detailsInput>
    create: XOR<ticketCreateWithoutTransaction_detailsInput, ticketUncheckedCreateWithoutTransaction_detailsInput>
    where?: ticketWhereInput
  }

  export type ticketUpdateToOneWithWhereWithoutTransaction_detailsInput = {
    where?: ticketWhereInput
    data: XOR<ticketUpdateWithoutTransaction_detailsInput, ticketUncheckedUpdateWithoutTransaction_detailsInput>
  }

  export type ticketUpdateWithoutTransaction_detailsInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    ticket_name?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_desc?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_stock?: NullableIntFieldUpdateOperationsInput | number | null
    code?: StringFieldUpdateOperationsInput | string
    url_qr?: StringFieldUpdateOperationsInput | string
    spot?: spot_tourismUpdateOneWithoutTicketsNestedInput
    temp_order_details?: temp_order_detailUpdateManyWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateWithoutTransaction_detailsInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    spot_id?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_name?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_desc?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_stock?: NullableIntFieldUpdateOperationsInput | number | null
    code?: StringFieldUpdateOperationsInput | string
    url_qr?: StringFieldUpdateOperationsInput | string
    temp_order_details?: temp_order_detailUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type reviewsCreateWithoutUserInput = {
    reviews_id: string
    reviews_rating?: number | null
    reviews_desc?: string | null
    reviews_created_at?: Date | string | null
    spot?: spot_tourismCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutUserInput = {
    reviews_id: string
    spot_id?: string | null
    reviews_rating?: number | null
    reviews_desc?: string | null
    reviews_created_at?: Date | string | null
  }

  export type reviewsCreateOrConnectWithoutUserInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutUserInput, reviewsUncheckedCreateWithoutUserInput>
  }

  export type reviewsCreateManyUserInputEnvelope = {
    data: reviewsCreateManyUserInput | reviewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type transactionCreateWithoutUserInput = {
    transaction_code: string
    total_price: Decimal | DecimalJsLike | number | string
    transaction_status?: $Enums.TransactionStatus | null
    transaction_date?: Date | string | null
    visit_date: Date | string
    payments?: paymentCreateNestedManyWithoutTransactionInput
    transaction_details?: transaction_detailCreateNestedManyWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutUserInput = {
    transaction_id?: number
    transaction_code: string
    total_price: Decimal | DecimalJsLike | number | string
    transaction_status?: $Enums.TransactionStatus | null
    transaction_date?: Date | string | null
    visit_date: Date | string
    payments?: paymentUncheckedCreateNestedManyWithoutTransactionInput
    transaction_details?: transaction_detailUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type transactionCreateOrConnectWithoutUserInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutUserInput, transactionUncheckedCreateWithoutUserInput>
  }

  export type transactionCreateManyUserInputEnvelope = {
    data: transactionCreateManyUserInput | transactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type temp_orderCreateWithoutUserInput = {
    order_id: string
    visit_date: Date | string
    created_at?: Date | string
    status?: $Enums.TransactionStatus
    details?: temp_order_detailCreateNestedManyWithoutTemp_orderInput
  }

  export type temp_orderUncheckedCreateWithoutUserInput = {
    temp_order_id?: number
    order_id: string
    visit_date: Date | string
    created_at?: Date | string
    status?: $Enums.TransactionStatus
    details?: temp_order_detailUncheckedCreateNestedManyWithoutTemp_orderInput
  }

  export type temp_orderCreateOrConnectWithoutUserInput = {
    where: temp_orderWhereUniqueInput
    create: XOR<temp_orderCreateWithoutUserInput, temp_orderUncheckedCreateWithoutUserInput>
  }

  export type temp_orderCreateManyUserInputEnvelope = {
    data: temp_orderCreateManyUserInput | temp_orderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type reviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: reviewsWhereUniqueInput
    update: XOR<reviewsUpdateWithoutUserInput, reviewsUncheckedUpdateWithoutUserInput>
    create: XOR<reviewsCreateWithoutUserInput, reviewsUncheckedCreateWithoutUserInput>
  }

  export type reviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: reviewsWhereUniqueInput
    data: XOR<reviewsUpdateWithoutUserInput, reviewsUncheckedUpdateWithoutUserInput>
  }

  export type reviewsUpdateManyWithWhereWithoutUserInput = {
    where: reviewsScalarWhereInput
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type transactionUpsertWithWhereUniqueWithoutUserInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutUserInput, transactionUncheckedUpdateWithoutUserInput>
    create: XOR<transactionCreateWithoutUserInput, transactionUncheckedCreateWithoutUserInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutUserInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutUserInput, transactionUncheckedUpdateWithoutUserInput>
  }

  export type transactionUpdateManyWithWhereWithoutUserInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutUserInput>
  }

  export type transactionScalarWhereInput = {
    AND?: transactionScalarWhereInput | transactionScalarWhereInput[]
    OR?: transactionScalarWhereInput[]
    NOT?: transactionScalarWhereInput | transactionScalarWhereInput[]
    transaction_id?: IntFilter<"transaction"> | number
    user_id?: StringNullableFilter<"transaction"> | string | null
    transaction_code?: StringFilter<"transaction"> | string
    total_price?: DecimalFilter<"transaction"> | Decimal | DecimalJsLike | number | string
    transaction_status?: EnumTransactionStatusNullableFilter<"transaction"> | $Enums.TransactionStatus | null
    transaction_date?: DateTimeNullableFilter<"transaction"> | Date | string | null
    visit_date?: DateTimeFilter<"transaction"> | Date | string
  }

  export type temp_orderUpsertWithWhereUniqueWithoutUserInput = {
    where: temp_orderWhereUniqueInput
    update: XOR<temp_orderUpdateWithoutUserInput, temp_orderUncheckedUpdateWithoutUserInput>
    create: XOR<temp_orderCreateWithoutUserInput, temp_orderUncheckedCreateWithoutUserInput>
  }

  export type temp_orderUpdateWithWhereUniqueWithoutUserInput = {
    where: temp_orderWhereUniqueInput
    data: XOR<temp_orderUpdateWithoutUserInput, temp_orderUncheckedUpdateWithoutUserInput>
  }

  export type temp_orderUpdateManyWithWhereWithoutUserInput = {
    where: temp_orderScalarWhereInput
    data: XOR<temp_orderUpdateManyMutationInput, temp_orderUncheckedUpdateManyWithoutUserInput>
  }

  export type temp_orderScalarWhereInput = {
    AND?: temp_orderScalarWhereInput | temp_orderScalarWhereInput[]
    OR?: temp_orderScalarWhereInput[]
    NOT?: temp_orderScalarWhereInput | temp_orderScalarWhereInput[]
    temp_order_id?: IntFilter<"temp_order"> | number
    order_id?: StringFilter<"temp_order"> | string
    user_id?: StringFilter<"temp_order"> | string
    visit_date?: DateTimeFilter<"temp_order"> | Date | string
    created_at?: DateTimeFilter<"temp_order"> | Date | string
    status?: EnumTransactionStatusFilter<"temp_order"> | $Enums.TransactionStatus
  }

  export type spot_tourismCreateWithoutVillageInput = {
    spot_id: string
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
    facility_tourisms?: facility_tourismCreateNestedManyWithoutSpotInput
    galleries?: galleryCreateNestedManyWithoutSpotInput
    operating_hours?: operating_hoursCreateNestedManyWithoutSpotInput
    reviews?: reviewsCreateNestedManyWithoutSpotInput
    category?: category_tourismCreateNestedOneWithoutSpotsInput
    tickets?: ticketCreateNestedManyWithoutSpotInput
  }

  export type spot_tourismUncheckedCreateWithoutVillageInput = {
    spot_id: string
    category_id?: string | null
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
    facility_tourisms?: facility_tourismUncheckedCreateNestedManyWithoutSpotInput
    galleries?: galleryUncheckedCreateNestedManyWithoutSpotInput
    operating_hours?: operating_hoursUncheckedCreateNestedManyWithoutSpotInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutSpotInput
    tickets?: ticketUncheckedCreateNestedManyWithoutSpotInput
  }

  export type spot_tourismCreateOrConnectWithoutVillageInput = {
    where: spot_tourismWhereUniqueInput
    create: XOR<spot_tourismCreateWithoutVillageInput, spot_tourismUncheckedCreateWithoutVillageInput>
  }

  export type spot_tourismCreateManyVillageInputEnvelope = {
    data: spot_tourismCreateManyVillageInput | spot_tourismCreateManyVillageInput[]
    skipDuplicates?: boolean
  }

  export type spot_tourismUpsertWithWhereUniqueWithoutVillageInput = {
    where: spot_tourismWhereUniqueInput
    update: XOR<spot_tourismUpdateWithoutVillageInput, spot_tourismUncheckedUpdateWithoutVillageInput>
    create: XOR<spot_tourismCreateWithoutVillageInput, spot_tourismUncheckedCreateWithoutVillageInput>
  }

  export type spot_tourismUpdateWithWhereUniqueWithoutVillageInput = {
    where: spot_tourismWhereUniqueInput
    data: XOR<spot_tourismUpdateWithoutVillageInput, spot_tourismUncheckedUpdateWithoutVillageInput>
  }

  export type spot_tourismUpdateManyWithWhereWithoutVillageInput = {
    where: spot_tourismScalarWhereInput
    data: XOR<spot_tourismUpdateManyMutationInput, spot_tourismUncheckedUpdateManyWithoutVillageInput>
  }

  export type usersCreateWithoutTemp_ordersInput = {
    user_id: string
    name: string
    email: string
    password: string
    phone_number?: string | null
    address?: string | null
    role: $Enums.Role
    reviews?: reviewsCreateNestedManyWithoutUserInput
    transactions?: transactionCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutTemp_ordersInput = {
    user_id: string
    name: string
    email: string
    password: string
    phone_number?: string | null
    address?: string | null
    role: $Enums.Role
    reviews?: reviewsUncheckedCreateNestedManyWithoutUserInput
    transactions?: transactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutTemp_ordersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTemp_ordersInput, usersUncheckedCreateWithoutTemp_ordersInput>
  }

  export type temp_order_detailCreateWithoutTemp_orderInput = {
    visitor_name?: string | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    ticket: ticketCreateNestedOneWithoutTemp_order_detailsInput
  }

  export type temp_order_detailUncheckedCreateWithoutTemp_orderInput = {
    temp_order_detail_id?: number
    ticket_id: string
    visitor_name?: string | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type temp_order_detailCreateOrConnectWithoutTemp_orderInput = {
    where: temp_order_detailWhereUniqueInput
    create: XOR<temp_order_detailCreateWithoutTemp_orderInput, temp_order_detailUncheckedCreateWithoutTemp_orderInput>
  }

  export type temp_order_detailCreateManyTemp_orderInputEnvelope = {
    data: temp_order_detailCreateManyTemp_orderInput | temp_order_detailCreateManyTemp_orderInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutTemp_ordersInput = {
    update: XOR<usersUpdateWithoutTemp_ordersInput, usersUncheckedUpdateWithoutTemp_ordersInput>
    create: XOR<usersCreateWithoutTemp_ordersInput, usersUncheckedCreateWithoutTemp_ordersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTemp_ordersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTemp_ordersInput, usersUncheckedUpdateWithoutTemp_ordersInput>
  }

  export type usersUpdateWithoutTemp_ordersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    reviews?: reviewsUpdateManyWithoutUserNestedInput
    transactions?: transactionUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutTemp_ordersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    reviews?: reviewsUncheckedUpdateManyWithoutUserNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type temp_order_detailUpsertWithWhereUniqueWithoutTemp_orderInput = {
    where: temp_order_detailWhereUniqueInput
    update: XOR<temp_order_detailUpdateWithoutTemp_orderInput, temp_order_detailUncheckedUpdateWithoutTemp_orderInput>
    create: XOR<temp_order_detailCreateWithoutTemp_orderInput, temp_order_detailUncheckedCreateWithoutTemp_orderInput>
  }

  export type temp_order_detailUpdateWithWhereUniqueWithoutTemp_orderInput = {
    where: temp_order_detailWhereUniqueInput
    data: XOR<temp_order_detailUpdateWithoutTemp_orderInput, temp_order_detailUncheckedUpdateWithoutTemp_orderInput>
  }

  export type temp_order_detailUpdateManyWithWhereWithoutTemp_orderInput = {
    where: temp_order_detailScalarWhereInput
    data: XOR<temp_order_detailUpdateManyMutationInput, temp_order_detailUncheckedUpdateManyWithoutTemp_orderInput>
  }

  export type temp_orderCreateWithoutDetailsInput = {
    order_id: string
    visit_date: Date | string
    created_at?: Date | string
    status?: $Enums.TransactionStatus
    user: usersCreateNestedOneWithoutTemp_ordersInput
  }

  export type temp_orderUncheckedCreateWithoutDetailsInput = {
    temp_order_id?: number
    order_id: string
    user_id: string
    visit_date: Date | string
    created_at?: Date | string
    status?: $Enums.TransactionStatus
  }

  export type temp_orderCreateOrConnectWithoutDetailsInput = {
    where: temp_orderWhereUniqueInput
    create: XOR<temp_orderCreateWithoutDetailsInput, temp_orderUncheckedCreateWithoutDetailsInput>
  }

  export type ticketCreateWithoutTemp_order_detailsInput = {
    ticket_id: string
    ticket_name?: string | null
    ticket_price: Decimal | DecimalJsLike | number | string
    ticket_desc?: string | null
    ticket_stock?: number | null
    code: string
    url_qr: string
    spot?: spot_tourismCreateNestedOneWithoutTicketsInput
    transaction_details?: transaction_detailCreateNestedManyWithoutTicketInput
  }

  export type ticketUncheckedCreateWithoutTemp_order_detailsInput = {
    ticket_id: string
    spot_id?: string | null
    ticket_name?: string | null
    ticket_price: Decimal | DecimalJsLike | number | string
    ticket_desc?: string | null
    ticket_stock?: number | null
    code: string
    url_qr: string
    transaction_details?: transaction_detailUncheckedCreateNestedManyWithoutTicketInput
  }

  export type ticketCreateOrConnectWithoutTemp_order_detailsInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutTemp_order_detailsInput, ticketUncheckedCreateWithoutTemp_order_detailsInput>
  }

  export type temp_orderUpsertWithoutDetailsInput = {
    update: XOR<temp_orderUpdateWithoutDetailsInput, temp_orderUncheckedUpdateWithoutDetailsInput>
    create: XOR<temp_orderCreateWithoutDetailsInput, temp_orderUncheckedCreateWithoutDetailsInput>
    where?: temp_orderWhereInput
  }

  export type temp_orderUpdateToOneWithWhereWithoutDetailsInput = {
    where?: temp_orderWhereInput
    data: XOR<temp_orderUpdateWithoutDetailsInput, temp_orderUncheckedUpdateWithoutDetailsInput>
  }

  export type temp_orderUpdateWithoutDetailsInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    user?: usersUpdateOneRequiredWithoutTemp_ordersNestedInput
  }

  export type temp_orderUncheckedUpdateWithoutDetailsInput = {
    temp_order_id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type ticketUpsertWithoutTemp_order_detailsInput = {
    update: XOR<ticketUpdateWithoutTemp_order_detailsInput, ticketUncheckedUpdateWithoutTemp_order_detailsInput>
    create: XOR<ticketCreateWithoutTemp_order_detailsInput, ticketUncheckedCreateWithoutTemp_order_detailsInput>
    where?: ticketWhereInput
  }

  export type ticketUpdateToOneWithWhereWithoutTemp_order_detailsInput = {
    where?: ticketWhereInput
    data: XOR<ticketUpdateWithoutTemp_order_detailsInput, ticketUncheckedUpdateWithoutTemp_order_detailsInput>
  }

  export type ticketUpdateWithoutTemp_order_detailsInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    ticket_name?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_desc?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_stock?: NullableIntFieldUpdateOperationsInput | number | null
    code?: StringFieldUpdateOperationsInput | string
    url_qr?: StringFieldUpdateOperationsInput | string
    spot?: spot_tourismUpdateOneWithoutTicketsNestedInput
    transaction_details?: transaction_detailUpdateManyWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateWithoutTemp_order_detailsInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    spot_id?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_name?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_desc?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_stock?: NullableIntFieldUpdateOperationsInput | number | null
    code?: StringFieldUpdateOperationsInput | string
    url_qr?: StringFieldUpdateOperationsInput | string
    transaction_details?: transaction_detailUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type spot_tourismCreateManyCategoryInput = {
    spot_id: string
    village_id?: string | null
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
  }

  export type spot_tourismUpdateWithoutCategoryInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
    facility_tourisms?: facility_tourismUpdateManyWithoutSpotNestedInput
    galleries?: galleryUpdateManyWithoutSpotNestedInput
    operating_hours?: operating_hoursUpdateManyWithoutSpotNestedInput
    reviews?: reviewsUpdateManyWithoutSpotNestedInput
    village?: villageUpdateOneWithoutSpotsNestedInput
    tickets?: ticketUpdateManyWithoutSpotNestedInput
  }

  export type spot_tourismUncheckedUpdateWithoutCategoryInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    village_id?: NullableStringFieldUpdateOperationsInput | string | null
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
    facility_tourisms?: facility_tourismUncheckedUpdateManyWithoutSpotNestedInput
    galleries?: galleryUncheckedUpdateManyWithoutSpotNestedInput
    operating_hours?: operating_hoursUncheckedUpdateManyWithoutSpotNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutSpotNestedInput
    tickets?: ticketUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type spot_tourismUncheckedUpdateManyWithoutCategoryInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    village_id?: NullableStringFieldUpdateOperationsInput | string | null
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type facility_tourismCreateManyFacilityInput = {
    facility_tourism_id: string
    spot_id?: string | null
  }

  export type facility_tourismUpdateWithoutFacilityInput = {
    facility_tourism_id?: StringFieldUpdateOperationsInput | string
    spot?: spot_tourismUpdateOneWithoutFacility_tourismsNestedInput
  }

  export type facility_tourismUncheckedUpdateWithoutFacilityInput = {
    facility_tourism_id?: StringFieldUpdateOperationsInput | string
    spot_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type facility_tourismUncheckedUpdateManyWithoutFacilityInput = {
    facility_tourism_id?: StringFieldUpdateOperationsInput | string
    spot_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type facility_tourismCreateManySpotInput = {
    facility_tourism_id: string
    facility_id?: string | null
  }

  export type galleryCreateManySpotInput = {
    gallery_id: string
    gallery_img?: string | null
    gallery_caption?: string | null
  }

  export type operating_hoursCreateManySpotInput = {
    operating_id: string
    operating_day: $Enums.OperatingDay
    hours_open: Date | string
    hours_closed: Date | string
  }

  export type reviewsCreateManySpotInput = {
    reviews_id: string
    user_id?: string | null
    reviews_rating?: number | null
    reviews_desc?: string | null
    reviews_created_at?: Date | string | null
  }

  export type ticketCreateManySpotInput = {
    ticket_id: string
    ticket_name?: string | null
    ticket_price: Decimal | DecimalJsLike | number | string
    ticket_desc?: string | null
    ticket_stock?: number | null
    code: string
    url_qr: string
  }

  export type facility_tourismUpdateWithoutSpotInput = {
    facility_tourism_id?: StringFieldUpdateOperationsInput | string
    facility?: facilityUpdateOneWithoutFacility_tourismsNestedInput
  }

  export type facility_tourismUncheckedUpdateWithoutSpotInput = {
    facility_tourism_id?: StringFieldUpdateOperationsInput | string
    facility_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type facility_tourismUncheckedUpdateManyWithoutSpotInput = {
    facility_tourism_id?: StringFieldUpdateOperationsInput | string
    facility_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type galleryUpdateWithoutSpotInput = {
    gallery_id?: StringFieldUpdateOperationsInput | string
    gallery_img?: NullableStringFieldUpdateOperationsInput | string | null
    gallery_caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type galleryUncheckedUpdateWithoutSpotInput = {
    gallery_id?: StringFieldUpdateOperationsInput | string
    gallery_img?: NullableStringFieldUpdateOperationsInput | string | null
    gallery_caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type galleryUncheckedUpdateManyWithoutSpotInput = {
    gallery_id?: StringFieldUpdateOperationsInput | string
    gallery_img?: NullableStringFieldUpdateOperationsInput | string | null
    gallery_caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type operating_hoursUpdateWithoutSpotInput = {
    operating_id?: StringFieldUpdateOperationsInput | string
    operating_day?: EnumOperatingDayFieldUpdateOperationsInput | $Enums.OperatingDay
    hours_open?: DateTimeFieldUpdateOperationsInput | Date | string
    hours_closed?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type operating_hoursUncheckedUpdateWithoutSpotInput = {
    operating_id?: StringFieldUpdateOperationsInput | string
    operating_day?: EnumOperatingDayFieldUpdateOperationsInput | $Enums.OperatingDay
    hours_open?: DateTimeFieldUpdateOperationsInput | Date | string
    hours_closed?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type operating_hoursUncheckedUpdateManyWithoutSpotInput = {
    operating_id?: StringFieldUpdateOperationsInput | string
    operating_day?: EnumOperatingDayFieldUpdateOperationsInput | $Enums.OperatingDay
    hours_open?: DateTimeFieldUpdateOperationsInput | Date | string
    hours_closed?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewsUpdateWithoutSpotInput = {
    reviews_id?: StringFieldUpdateOperationsInput | string
    reviews_rating?: NullableIntFieldUpdateOperationsInput | number | null
    reviews_desc?: NullableStringFieldUpdateOperationsInput | string | null
    reviews_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutSpotInput = {
    reviews_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    reviews_rating?: NullableIntFieldUpdateOperationsInput | number | null
    reviews_desc?: NullableStringFieldUpdateOperationsInput | string | null
    reviews_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsUncheckedUpdateManyWithoutSpotInput = {
    reviews_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    reviews_rating?: NullableIntFieldUpdateOperationsInput | number | null
    reviews_desc?: NullableStringFieldUpdateOperationsInput | string | null
    reviews_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketUpdateWithoutSpotInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    ticket_name?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_desc?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_stock?: NullableIntFieldUpdateOperationsInput | number | null
    code?: StringFieldUpdateOperationsInput | string
    url_qr?: StringFieldUpdateOperationsInput | string
    temp_order_details?: temp_order_detailUpdateManyWithoutTicketNestedInput
    transaction_details?: transaction_detailUpdateManyWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateWithoutSpotInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    ticket_name?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_desc?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_stock?: NullableIntFieldUpdateOperationsInput | number | null
    code?: StringFieldUpdateOperationsInput | string
    url_qr?: StringFieldUpdateOperationsInput | string
    temp_order_details?: temp_order_detailUncheckedUpdateManyWithoutTicketNestedInput
    transaction_details?: transaction_detailUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateManyWithoutSpotInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    ticket_name?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_desc?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_stock?: NullableIntFieldUpdateOperationsInput | number | null
    code?: StringFieldUpdateOperationsInput | string
    url_qr?: StringFieldUpdateOperationsInput | string
  }

  export type temp_order_detailCreateManyTicketInput = {
    temp_order_detail_id?: number
    temp_order_id: number
    visitor_name?: string | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type transaction_detailCreateManyTicketInput = {
    transaction_detail_id?: number
    transaction_id?: number | null
    detail_quantity: number
    detail_price: Decimal | DecimalJsLike | number | string
    detail_subtotal?: Decimal | DecimalJsLike | number | string | null
    is_used?: $Enums.TicketStatus
  }

  export type temp_order_detailUpdateWithoutTicketInput = {
    visitor_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    temp_order?: temp_orderUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type temp_order_detailUncheckedUpdateWithoutTicketInput = {
    temp_order_detail_id?: IntFieldUpdateOperationsInput | number
    temp_order_id?: IntFieldUpdateOperationsInput | number
    visitor_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type temp_order_detailUncheckedUpdateManyWithoutTicketInput = {
    temp_order_detail_id?: IntFieldUpdateOperationsInput | number
    temp_order_id?: IntFieldUpdateOperationsInput | number
    visitor_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type transaction_detailUpdateWithoutTicketInput = {
    detail_quantity?: IntFieldUpdateOperationsInput | number
    detail_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detail_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_used?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    transaction?: transactionUpdateOneWithoutTransaction_detailsNestedInput
  }

  export type transaction_detailUncheckedUpdateWithoutTicketInput = {
    transaction_detail_id?: IntFieldUpdateOperationsInput | number
    transaction_id?: NullableIntFieldUpdateOperationsInput | number | null
    detail_quantity?: IntFieldUpdateOperationsInput | number
    detail_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detail_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_used?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
  }

  export type transaction_detailUncheckedUpdateManyWithoutTicketInput = {
    transaction_detail_id?: IntFieldUpdateOperationsInput | number
    transaction_id?: NullableIntFieldUpdateOperationsInput | number | null
    detail_quantity?: IntFieldUpdateOperationsInput | number
    detail_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detail_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_used?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
  }

  export type paymentCreateManyTransactionInput = {
    payment_id?: number
    reference_number: string
    payment_type: string
    payment_amount: Decimal | DecimalJsLike | number | string
    payment_status?: $Enums.PaymentStatus
    payment_time?: Date | string
    response_data: JsonNullValueInput | InputJsonValue
  }

  export type transaction_detailCreateManyTransactionInput = {
    transaction_detail_id?: number
    ticket_id?: string | null
    detail_quantity: number
    detail_price: Decimal | DecimalJsLike | number | string
    detail_subtotal?: Decimal | DecimalJsLike | number | string | null
    is_used?: $Enums.TicketStatus
  }

  export type paymentUpdateWithoutTransactionInput = {
    reference_number?: StringFieldUpdateOperationsInput | string
    payment_type?: StringFieldUpdateOperationsInput | string
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    response_data?: JsonNullValueInput | InputJsonValue
  }

  export type paymentUncheckedUpdateWithoutTransactionInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    reference_number?: StringFieldUpdateOperationsInput | string
    payment_type?: StringFieldUpdateOperationsInput | string
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    response_data?: JsonNullValueInput | InputJsonValue
  }

  export type paymentUncheckedUpdateManyWithoutTransactionInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    reference_number?: StringFieldUpdateOperationsInput | string
    payment_type?: StringFieldUpdateOperationsInput | string
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_time?: DateTimeFieldUpdateOperationsInput | Date | string
    response_data?: JsonNullValueInput | InputJsonValue
  }

  export type transaction_detailUpdateWithoutTransactionInput = {
    detail_quantity?: IntFieldUpdateOperationsInput | number
    detail_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detail_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_used?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    ticket?: ticketUpdateOneWithoutTransaction_detailsNestedInput
  }

  export type transaction_detailUncheckedUpdateWithoutTransactionInput = {
    transaction_detail_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: NullableStringFieldUpdateOperationsInput | string | null
    detail_quantity?: IntFieldUpdateOperationsInput | number
    detail_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detail_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_used?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
  }

  export type transaction_detailUncheckedUpdateManyWithoutTransactionInput = {
    transaction_detail_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: NullableStringFieldUpdateOperationsInput | string | null
    detail_quantity?: IntFieldUpdateOperationsInput | number
    detail_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detail_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_used?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
  }

  export type reviewsCreateManyUserInput = {
    reviews_id: string
    spot_id?: string | null
    reviews_rating?: number | null
    reviews_desc?: string | null
    reviews_created_at?: Date | string | null
  }

  export type transactionCreateManyUserInput = {
    transaction_id?: number
    transaction_code: string
    total_price: Decimal | DecimalJsLike | number | string
    transaction_status?: $Enums.TransactionStatus | null
    transaction_date?: Date | string | null
    visit_date: Date | string
  }

  export type temp_orderCreateManyUserInput = {
    temp_order_id?: number
    order_id: string
    visit_date: Date | string
    created_at?: Date | string
    status?: $Enums.TransactionStatus
  }

  export type reviewsUpdateWithoutUserInput = {
    reviews_id?: StringFieldUpdateOperationsInput | string
    reviews_rating?: NullableIntFieldUpdateOperationsInput | number | null
    reviews_desc?: NullableStringFieldUpdateOperationsInput | string | null
    reviews_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spot?: spot_tourismUpdateOneWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutUserInput = {
    reviews_id?: StringFieldUpdateOperationsInput | string
    spot_id?: NullableStringFieldUpdateOperationsInput | string | null
    reviews_rating?: NullableIntFieldUpdateOperationsInput | number | null
    reviews_desc?: NullableStringFieldUpdateOperationsInput | string | null
    reviews_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsUncheckedUpdateManyWithoutUserInput = {
    reviews_id?: StringFieldUpdateOperationsInput | string
    spot_id?: NullableStringFieldUpdateOperationsInput | string | null
    reviews_rating?: NullableIntFieldUpdateOperationsInput | number | null
    reviews_desc?: NullableStringFieldUpdateOperationsInput | string | null
    reviews_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionUpdateWithoutUserInput = {
    transaction_code?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_status?: NullableEnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentUpdateManyWithoutTransactionNestedInput
    transaction_details?: transaction_detailUpdateManyWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutUserInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    transaction_code?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_status?: NullableEnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentUncheckedUpdateManyWithoutTransactionNestedInput
    transaction_details?: transaction_detailUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateManyWithoutUserInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    transaction_code?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_status?: NullableEnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus | null
    transaction_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type temp_orderUpdateWithoutUserInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    details?: temp_order_detailUpdateManyWithoutTemp_orderNestedInput
  }

  export type temp_orderUncheckedUpdateWithoutUserInput = {
    temp_order_id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    details?: temp_order_detailUncheckedUpdateManyWithoutTemp_orderNestedInput
  }

  export type temp_orderUncheckedUpdateManyWithoutUserInput = {
    temp_order_id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
  }

  export type spot_tourismCreateManyVillageInput = {
    spot_id: string
    category_id?: string | null
    spot_name: string
    spot_desc?: string | null
    spot_address?: string | null
    spot_maps?: string | null
    spot_thumbnail?: string | null
    spot_rating?: Decimal | DecimalJsLike | number | string | null
    spot_contact?: string | null
  }

  export type spot_tourismUpdateWithoutVillageInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
    facility_tourisms?: facility_tourismUpdateManyWithoutSpotNestedInput
    galleries?: galleryUpdateManyWithoutSpotNestedInput
    operating_hours?: operating_hoursUpdateManyWithoutSpotNestedInput
    reviews?: reviewsUpdateManyWithoutSpotNestedInput
    category?: category_tourismUpdateOneWithoutSpotsNestedInput
    tickets?: ticketUpdateManyWithoutSpotNestedInput
  }

  export type spot_tourismUncheckedUpdateWithoutVillageInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
    facility_tourisms?: facility_tourismUncheckedUpdateManyWithoutSpotNestedInput
    galleries?: galleryUncheckedUpdateManyWithoutSpotNestedInput
    operating_hours?: operating_hoursUncheckedUpdateManyWithoutSpotNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutSpotNestedInput
    tickets?: ticketUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type spot_tourismUncheckedUpdateManyWithoutVillageInput = {
    spot_id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    spot_name?: StringFieldUpdateOperationsInput | string
    spot_desc?: NullableStringFieldUpdateOperationsInput | string | null
    spot_address?: NullableStringFieldUpdateOperationsInput | string | null
    spot_maps?: NullableStringFieldUpdateOperationsInput | string | null
    spot_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    spot_rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    spot_contact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type temp_order_detailCreateManyTemp_orderInput = {
    temp_order_detail_id?: number
    ticket_id: string
    visitor_name?: string | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type temp_order_detailUpdateWithoutTemp_orderInput = {
    visitor_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket?: ticketUpdateOneRequiredWithoutTemp_order_detailsNestedInput
  }

  export type temp_order_detailUncheckedUpdateWithoutTemp_orderInput = {
    temp_order_detail_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: StringFieldUpdateOperationsInput | string
    visitor_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type temp_order_detailUncheckedUpdateManyWithoutTemp_orderInput = {
    temp_order_detail_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: StringFieldUpdateOperationsInput | string
    visitor_name?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}