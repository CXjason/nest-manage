var vS = Object.defineProperty;
var HS = (dl, j, el) =>
  j in dl
    ? vS(dl, j, { enumerable: !0, configurable: !0, writable: !0, value: el })
    : (dl[j] = el);
var f = (dl, j, el) => (HS(dl, typeof j != 'symbol' ? j + '' : j, el), el),
  _N = (dl, j, el) => {
    if (!j.has(dl)) throw TypeError('Cannot ' + el);
  };
var s = (dl, j, el) => (
    _N(dl, j, 'read from private field'), el ? el.call(dl) : j.get(dl)
  ),
  R = (dl, j, el) => {
    if (j.has(dl))
      throw TypeError('Cannot add the same private member more than once');
    j instanceof WeakSet ? j.add(dl) : j.set(dl, el);
  },
  e = (dl, j, el, Mt) => (
    _N(dl, j, 'write to private field'),
    Mt ? Mt.call(dl, el) : j.set(dl, el),
    el
  );
var hU = (dl, j, el, Mt) => ({
    set _(q) {
      e(dl, j, q, el);
    },
    get _() {
      return s(dl, j, Mt);
    },
  }),
  b = (dl, j, el) => (_N(dl, j, 'access private method'), el);
(function (dl, j) {
  typeof exports == 'object' && typeof module < 'u'
    ? j(exports, require('vue'))
    : typeof define == 'function' && define.amd
      ? define(['exports', 'vue'], j)
      : ((dl = typeof globalThis < 'u' ? globalThis : dl || self),
        j((dl.VuePdfEmbed = {}), dl.Vue));
})(this, function (dl, j) {
  var i0,
    KW,
    iR,
    ys,
    qN,
    Ls,
    Ed,
    ot,
    cd,
    Cd,
    iU,
    vW,
    Bt,
    El,
    UU,
    pZ,
    ds,
    oZ,
    Zs,
    R0,
    RR,
    HW,
    am,
    zs,
    $N,
    BZ,
    ts,
    yt,
    jV,
    Lt,
    OV,
    ks,
    lh,
    zt,
    gV,
    kt,
    Dt,
    eU,
    It,
    PW,
    im,
    fW,
    Rm,
    AW,
    Nm,
    N0,
    NR,
    _W,
    hm,
    Ds,
    Uh,
    Is,
    Et,
    Ct,
    $W,
    bm,
    la,
    em,
    Ua,
    mm,
    da,
    Es,
    Za,
    BU,
    Cs,
    dh,
    Cl,
    yZ,
    rs,
    rl,
    ta,
    Mm,
    h0,
    mU,
    yl,
    jl,
    b0,
    rd,
    e0,
    xU,
    m0,
    rt,
    sd,
    jU,
    wt,
    ws,
    xs,
    Qd,
    M0,
    LZ,
    nd,
    ca,
    zZ,
    js,
    xt,
    Os,
    J0,
    Ol,
    cl,
    wd,
    jt,
    gs,
    Ks,
    vs,
    Hs,
    Ps,
    fs,
    As,
    _s,
    qs,
    $s,
    lQ,
    UQ,
    dQ,
    kZ,
    Vd,
    xd,
    ZQ,
    DZ,
    G0,
    hR,
    sa,
    Jm,
    Qa,
    Gm,
    T0,
    bR,
    na,
    Tm,
    Va,
    Sm,
    Wa,
    Xm,
    tQ,
    Zh,
    aa,
    Ym,
    FQ,
    th,
    cQ,
    Fh,
    ia,
    um,
    gl,
    QU,
    Wd,
    bt,
    Ra,
    pm,
    Na,
    om,
    sQ,
    ch,
    ha,
    Bm,
    Ot,
    KV,
    QQ,
    sh,
    jd,
    Od,
    OU,
    gd,
    MU,
    S0,
    gU,
    nQ,
    Qh,
    gt,
    KU,
    ql,
    X0,
    Kt,
    Kl,
    vt,
    Y0,
    u0,
    $l,
    VQ,
    Ht,
    IZ,
    WQ,
    Pt,
    vd,
    ad,
    p0,
    o0,
    yU,
    aQ,
    ba,
    iQ,
    nh,
    RQ,
    Vh,
    NQ,
    Wh,
    ea,
    ym,
    ma,
    Lm,
    hQ,
    ah,
    bQ,
    ih,
    eQ,
    Rh,
    Ma,
    zm,
    Ja,
    km,
    Ga,
    Dm,
    Ta,
    Im,
    mQ,
    Nh,
    ft,
    vV,
    At,
    vl,
    Sa,
    Em,
    MQ,
    B0,
    JQ,
    hh,
    GQ,
    bh,
    Ya,
    TQ,
    SQ,
    ua,
    Cm,
    pa,
    rm,
    y0,
    eR,
    _t,
    XQ,
    YQ,
    uQ,
    pQ,
    L0,
    EZ,
    Ql,
    z0,
    k0,
    oQ,
    eh,
    nm,
    CZ,
    RU,
    BQ,
    yQ,
    qt,
    Hd,
    LQ,
    zQ,
    $t,
    D0,
    I0,
    rZ,
    E0,
    kQ,
    C0,
    lF,
    DQ,
    IQ,
    pl,
    UF,
    dF,
    wZ,
    r0,
    oa,
    wm,
    Ba,
    xm,
    EQ,
    mh,
    w0,
    mR,
    ya,
    jm,
    La,
    Om,
    za,
    xZ,
    Pd,
    jZ,
    Fs,
    x0,
    MR,
    ZF,
    Da,
    ZU,
    tF,
    j0,
    JR,
    O0,
    GR,
    fd,
    id,
    g0,
    K0,
    Rd,
    FF,
    HV,
    vU,
    CQ,
    Mh,
    OZ,
    gZ,
    cF,
    QF,
    v0,
    H0,
    rQ,
    Jh,
    Ad,
    F0,
    Ia,
    gm,
    Ea,
    Km,
    P0,
    Ca,
    ra,
    f0,
    nF,
    Ml,
    _d,
    VF,
    wQ,
    xQ,
    A0,
    qd,
    HU,
    $d,
    jQ,
    lZ,
    OQ,
    WF,
    aF,
    _0,
    TR,
    gQ,
    Gh,
    wa,
    vm,
    xa,
    Hm,
    ja,
    Pm,
    Oa,
    fm,
    q0,
    SR,
    $0,
    XR,
    KQ,
    Th,
    vQ,
    HQ,
    PQ,
    fQ,
    AQ,
    _Q,
    qQ,
    Sh,
    $Q,
    iF,
    lc,
    ga,
    Am,
    ln,
    Xh,
    Vm,
    Un,
    dn,
    Zn,
    tn,
    Fn,
    PU,
    JU,
    cn,
    GU,
    Uc,
    Ka,
    _m,
    va,
    qm,
    Ha,
    $m,
    dc,
    YR,
    Zc,
    uR,
    tc,
    pR,
    Pa,
    l2,
    sn,
    Yh,
    fa,
    U2,
    Qn,
    KZ,
    fU,
    Aa,
    d2,
    Fc,
    oR,
    _a,
    Z2,
    qa,
    t2,
    nn,
    uh,
    Wm,
    Vn,
    cc,
    Nd,
    UZ,
    sc,
    Qc,
    hd,
    $,
    RF,
    NF,
    Wn,
    an,
    nc,
    Vc,
    vZ,
    Rn,
    $a,
    li,
    Nn,
    ph,
    Wc,
    hF,
    ZZ,
    hn,
    TU,
    bn,
    Xl,
    bF,
    PV,
    eF,
    fV,
    Ui,
    F2,
    en,
    mn,
    AU,
    mF,
    ac,
    Ll,
    Mn,
    ic,
    Jn,
    Gn,
    _U,
    Rc,
    Tn,
    oh,
    Sn,
    Bh,
    di,
    c2,
    tZ,
    c0,
    Zi,
    s2,
    bd,
    et,
    qU,
    Nc,
    Xn,
    HZ,
    MF,
    hc,
    LU,
    Yn,
    un,
    JF,
    $U,
    tU,
    SU,
    ti,
    bc,
    GF,
    zl,
    ec,
    ed,
    pn,
    on,
    yh,
    Bn,
    Lh,
    Fi,
    Q2,
    ci,
    n2,
    si,
    V2,
    yn,
    zh,
    TF,
    AV,
    PZ,
    cs,
    Qi,
    W2,
    mc,
    BR,
    SF,
    _V,
    ni,
    a2,
    Vi,
    i2,
    Wi,
    R2,
    ai,
    N2,
    XF,
    YF,
    Ln,
    zn,
    kn,
    uF,
    md,
    FZ,
    zU,
    pF,
    oF,
    cZ,
    BF,
    yF,
    fZ,
    ii,
    h2,
    Ri,
    b2,
    Ni,
    e2,
    hi,
    m2,
    Dn,
    kh,
    bi,
    M2,
    In,
    Dh,
    ei,
    J2,
    mi,
    G2,
    Mi,
    T2,
    Ji,
    S2,
    Gi,
    X2,
    sZ,
    s0,
    En,
    Ih,
    Mc,
    yR,
    Jc,
    LR,
    AZ,
    ss,
    Cn,
    Eh,
    Gc,
    zR,
    Ti,
    Y2,
    rn,
    Ch,
    Si,
    u2,
    Xi,
    p2,
    wn,
    rh,
    Tc,
    kR,
    LF,
    qV,
    Hl,
    Pl,
    _Z,
    QZ,
    qZ,
    Sc,
    Md,
    nZ,
    Jd,
    ld,
    xn,
    zF,
    $V,
    kF,
    lW,
    Xc,
    DR,
    jn,
    wh,
    Yi,
    o2,
    ui,
    B2,
    On,
    xh,
    Yc,
    IR,
    pi,
    y2,
    DF,
    uc,
    Gd,
    IF,
    VZ,
    WZ,
    aZ,
    XU,
    $Z,
    pc,
    oc,
    FU,
    K,
    YU,
    lt,
    oi,
    L2,
    Kn,
    jh,
    vn,
    Oh,
    Hn,
    gh,
    Bc,
    ER,
    Td,
    Pn,
    kl,
    Ut,
    fn,
    Dl,
    Kh,
    An,
    vh,
    Bi,
    z2,
    dt,
    EF,
    CF,
    yc,
    rF,
    wl,
    Lc,
    wF,
    yi,
    k2,
    _n,
    Hh,
    qn,
    Ph,
    Li,
    D2,
    zi,
    I2,
    ki,
    E2,
    $n,
    fh,
    Di,
    C2,
    Ii,
    r2,
    zc,
    CR,
    xF,
    UW,
    Zt,
    Qs,
    Ei,
    w2,
    lV,
    Ah,
    UV,
    _h,
    kc,
    rR,
    Ci,
    x2,
    dV,
    qh,
    ZV,
    $h,
    jF,
    dW,
    ri,
    j2,
    tV,
    tt,
    FV,
    lb,
    fN,
    Dc,
    cV,
    Ic,
    Ec,
    uU,
    xi,
    O2,
    ji,
    g2,
    Oi,
    K2,
    gi,
    v2,
    Ki,
    H2,
    vi,
    P2,
    sV,
    Ub,
    Ft,
    dd,
    MZ,
    rc,
    wR,
    wc,
    xR,
    OF,
    ZW,
    xc,
    jR,
    QV,
    db,
    Hi,
    f2,
    Pi,
    A2,
    nV,
    Zb,
    fi,
    _2,
    Ai,
    q2,
    VV,
    WV,
    aV,
    iV,
    jc,
    Sd,
    kU,
    RV,
    tb,
    NV,
    Fb,
    iZ,
    DU,
    RZ,
    ct,
    Oc,
    OR,
    hV,
    cb,
    st,
    bV,
    eV,
    gF,
    Xd,
    IU,
    Qt,
    _i,
    $2,
    qi,
    lM,
    $i,
    UM,
    KF,
    mV,
    vF,
    nt,
    Vt,
    MV,
    HF,
    Kc,
    vc,
    hZ,
    PF,
    Wt,
    at,
    ns,
    Hc,
    gR,
    fF,
    tW,
    JV,
    sb,
    GV,
    Qb,
    TV,
    nb,
    SV,
    Vb,
    XV,
    Wb,
    lR,
    dM,
    UR,
    ZM,
    YV,
    ab,
    Yd,
    AF,
    uV,
    _F,
    qF,
    pV,
    cU,
    bZ,
    Pc,
    Il,
    EU,
    dR,
    tM,
    fc,
    KR,
    oV,
    ib,
    ZR,
    FM,
    $F,
    FW,
    eZ,
    l0,
    BV,
    Rb,
    it,
    yV,
    LV,
    mZ,
    lU,
    U0,
    zV,
    kV,
    DV,
    IV,
    d0,
    EV,
    Ac,
    Rt,
    _c,
    CV,
    qc,
    Z0,
    Nt,
    $c,
    tR,
    cM,
    FR,
    sM,
    cR,
    QM,
    t0,
    cW,
    ls,
    vR,
    sR,
    nM,
    rV,
    Nb,
    QR,
    VM,
    ud,
    mt,
    wV,
    hb,
    nR,
    WM,
    VR,
    aM,
    xV,
    bb,
    WR,
    iM;
  ('use strict');
  var el = {
      9306: (Q, U, l) => {
        var d = l(4901),
          Z = l(6823),
          t = TypeError;
        Q.exports = function (F) {
          if (d(F)) return F;
          throw new t(Z(F) + ' is not a function');
        };
      },
      3506: (Q, U, l) => {
        var d = l(3925),
          Z = String,
          t = TypeError;
        Q.exports = function (F) {
          if (d(F)) return F;
          throw new t("Can't set " + Z(F) + ' as a prototype');
        };
      },
      7080: (Q, U, l) => {
        var d = l(4402).has;
        Q.exports = function (Z) {
          return d(Z), Z;
        };
      },
      679: (Q, U, l) => {
        var d = l(1625),
          Z = TypeError;
        Q.exports = function (t, F) {
          if (d(F, t)) return t;
          throw new Z('Incorrect invocation');
        };
      },
      8551: (Q, U, l) => {
        var d = l(34),
          Z = String,
          t = TypeError;
        Q.exports = function (F) {
          if (d(F)) return F;
          throw new t(Z(F) + ' is not an object');
        };
      },
      7811: (Q) => {
        Q.exports = typeof ArrayBuffer < 'u' && typeof DataView < 'u';
      },
      7394: (Q, U, l) => {
        var d = l(6706),
          Z = l(4576),
          t = TypeError;
        Q.exports =
          d(ArrayBuffer.prototype, 'byteLength', 'get') ||
          function (F) {
            if (Z(F) !== 'ArrayBuffer') throw new t('ArrayBuffer expected');
            return F.byteLength;
          };
      },
      3238: (Q, U, l) => {
        var d = l(9504),
          Z = l(7394),
          t = d(ArrayBuffer.prototype.slice);
        Q.exports = function (F) {
          if (Z(F) !== 0) return !1;
          try {
            return t(F, 0, 0), !1;
          } catch {
            return !0;
          }
        };
      },
      5636: (Q, U, l) => {
        var d = l(4475),
          Z = l(9504),
          t = l(6706),
          F = l(7696),
          c = l(3238),
          n = l(7394),
          V = l(4483),
          W = l(1548),
          a = d.structuredClone,
          i = d.ArrayBuffer,
          h = d.DataView,
          N = d.TypeError,
          M = Math.min,
          J = i.prototype,
          m = h.prototype,
          G = Z(J.slice),
          T = t(J, 'resizable', 'get'),
          u = t(J, 'maxByteLength', 'get'),
          X = Z(m.getInt8),
          S = Z(m.setInt8);
        Q.exports =
          (W || V) &&
          function (p, L, Y) {
            var o = n(p),
              y = L === void 0 ? o : F(L),
              D = !T || !T(p),
              I;
            if (c(p)) throw new N('ArrayBuffer is detached');
            if (W && ((p = a(p, { transfer: [p] })), o === y && (Y || D)))
              return p;
            if (o >= y && (!Y || D)) I = G(p, 0, y);
            else {
              var O = Y && !D && u ? { maxByteLength: u(p) } : void 0;
              I = new i(y, O);
              for (
                var x = new h(p), B = new h(I), C = M(y, o), r = 0;
                r < C;
                r++
              )
                S(B, r, X(x, r));
            }
            return W || V(p), I;
          };
      },
      4644: (Q, U, l) => {
        var d = l(7811),
          Z = l(3724),
          t = l(4475),
          F = l(4901),
          c = l(34),
          n = l(9297),
          V = l(6955),
          W = l(6823),
          a = l(6699),
          i = l(6840),
          h = l(2106),
          N = l(1625),
          M = l(2787),
          J = l(2967),
          m = l(8227),
          G = l(3392),
          T = l(1181),
          u = T.enforce,
          X = T.get,
          S = t.Int8Array,
          p = S && S.prototype,
          L = t.Uint8ClampedArray,
          Y = L && L.prototype,
          o = S && M(S),
          y = p && M(p),
          D = Object.prototype,
          I = t.TypeError,
          O = m('toStringTag'),
          x = G('TYPED_ARRAY_TAG'),
          B = 'TypedArrayConstructor',
          C = d && !!J && V(t.opera) !== 'Opera',
          r = !1,
          Wl,
          Jl,
          NU,
          al = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8,
          },
          Rl = { BigInt64Array: 8, BigUint64Array: 8 },
          ht = function (Gl) {
            if (!c(Gl)) return !1;
            var Tl = V(Gl);
            return Tl === 'DataView' || n(al, Tl) || n(Rl, Tl);
          },
          CU = function (H) {
            var Gl = M(H);
            if (c(Gl)) {
              var Tl = X(Gl);
              return Tl && n(Tl, B) ? Tl[B] : CU(Gl);
            }
          },
          w = function (H) {
            if (!c(H)) return !1;
            var Gl = V(H);
            return n(al, Gl) || n(Rl, Gl);
          },
          z = function (H) {
            if (w(H)) return H;
            throw new I('Target is not a typed array');
          },
          E = function (H) {
            if (F(H) && (!J || N(o, H))) return H;
            throw new I(W(H) + ' is not a typed array constructor');
          },
          A = function (H, Gl, Tl, pd) {
            if (Z) {
              if (Tl)
                for (var sU in al) {
                  var xl = t[sU];
                  if (xl && n(xl.prototype, H))
                    try {
                      delete xl.prototype[H];
                    } catch {
                      try {
                        xl.prototype[H] = Gl;
                      } catch {}
                    }
                }
              (!y[H] || Tl) && i(y, H, Tl ? Gl : (C && p[H]) || Gl, pd);
            }
          },
          Nl = function (H, Gl, Tl) {
            var pd, sU;
            if (Z) {
              if (J) {
                if (Tl) {
                  for (pd in al)
                    if (((sU = t[pd]), sU && n(sU, H)))
                      try {
                        delete sU[H];
                      } catch {}
                }
                if (!o[H] || Tl)
                  try {
                    return i(o, H, Tl ? Gl : (C && o[H]) || Gl);
                  } catch {}
                else return;
              }
              for (pd in al) (sU = t[pd]), sU && (!sU[H] || Tl) && i(sU, H, Gl);
            }
          };
        for (Wl in al)
          (Jl = t[Wl]),
            (NU = Jl && Jl.prototype),
            NU ? (u(NU)[B] = Jl) : (C = !1);
        for (Wl in Rl)
          (Jl = t[Wl]), (NU = Jl && Jl.prototype), NU && (u(NU)[B] = Jl);
        if (
          (!C || !F(o) || o === Function.prototype) &&
          ((o = function () {
            throw new I('Incorrect invocation');
          }),
          C)
        )
          for (Wl in al) t[Wl] && J(t[Wl], o);
        if ((!C || !y || y === D) && ((y = o.prototype), C))
          for (Wl in al) t[Wl] && J(t[Wl].prototype, y);
        if ((C && M(Y) !== y && J(Y, y), Z && !n(y, O))) {
          (r = !0),
            h(y, O, {
              configurable: !0,
              get: function () {
                return c(this) ? this[x] : void 0;
              },
            });
          for (Wl in al) t[Wl] && a(t[Wl], x, Wl);
        }
        Q.exports = {
          NATIVE_ARRAY_BUFFER_VIEWS: C,
          TYPED_ARRAY_TAG: r && x,
          aTypedArray: z,
          aTypedArrayConstructor: E,
          exportTypedArrayMethod: A,
          exportTypedArrayStaticMethod: Nl,
          getTypedArrayConstructor: CU,
          isView: ht,
          isTypedArray: w,
          TypedArray: o,
          TypedArrayPrototype: y,
        };
      },
      5370: (Q, U, l) => {
        var d = l(6198);
        Q.exports = function (Z, t, F) {
          for (
            var c = 0, n = arguments.length > 2 ? F : d(t), V = new Z(n);
            n > c;

          )
            V[c] = t[c++];
          return V;
        };
      },
      9617: (Q, U, l) => {
        var d = l(5397),
          Z = l(5610),
          t = l(6198),
          F = function (c) {
            return function (n, V, W) {
              var a = d(n),
                i = t(a);
              if (i === 0) return !c && -1;
              var h = Z(W, i),
                N;
              if (c && V !== V) {
                for (; i > h; ) if (((N = a[h++]), N !== N)) return !0;
              } else
                for (; i > h; h++)
                  if ((c || h in a) && a[h] === V) return c || h || 0;
              return !c && -1;
            };
          };
        Q.exports = { includes: F(!0), indexOf: F(!1) };
      },
      4527: (Q, U, l) => {
        var d = l(3724),
          Z = l(4376),
          t = TypeError,
          F = Object.getOwnPropertyDescriptor,
          c =
            d &&
            !(function () {
              if (this !== void 0) return !0;
              try {
                Object.defineProperty([], 'length', { writable: !1 }).length =
                  1;
              } catch (n) {
                return n instanceof TypeError;
              }
            })();
        Q.exports = c
          ? function (n, V) {
              if (Z(n) && !F(n, 'length').writable)
                throw new t('Cannot set read only .length');
              return (n.length = V);
            }
          : function (n, V) {
              return (n.length = V);
            };
      },
      7628: (Q, U, l) => {
        var d = l(6198);
        Q.exports = function (Z, t) {
          for (var F = d(Z), c = new t(F), n = 0; n < F; n++)
            c[n] = Z[F - n - 1];
          return c;
        };
      },
      9928: (Q, U, l) => {
        var d = l(6198),
          Z = l(1291),
          t = RangeError;
        Q.exports = function (F, c, n, V) {
          var W = d(F),
            a = Z(n),
            i = a < 0 ? W + a : a;
          if (i >= W || i < 0) throw new t('Incorrect index');
          for (var h = new c(W), N = 0; N < W; N++) h[N] = N === i ? V : F[N];
          return h;
        };
      },
      6319: (Q, U, l) => {
        var d = l(8551),
          Z = l(9539);
        Q.exports = function (t, F, c, n) {
          try {
            return n ? F(d(c)[0], c[1]) : F(c);
          } catch (V) {
            Z(t, 'throw', V);
          }
        };
      },
      4576: (Q, U, l) => {
        var d = l(9504),
          Z = d({}.toString),
          t = d(''.slice);
        Q.exports = function (F) {
          return t(Z(F), 8, -1);
        };
      },
      6955: (Q, U, l) => {
        var d = l(2140),
          Z = l(4901),
          t = l(4576),
          F = l(8227),
          c = F('toStringTag'),
          n = Object,
          V =
            t(
              (function () {
                return arguments;
              })(),
            ) === 'Arguments',
          W = function (a, i) {
            try {
              return a[i];
            } catch {}
          };
        Q.exports = d
          ? t
          : function (a) {
              var i, h, N;
              return a === void 0
                ? 'Undefined'
                : a === null
                  ? 'Null'
                  : typeof (h = W((i = n(a)), c)) == 'string'
                    ? h
                    : V
                      ? t(i)
                      : (N = t(i)) === 'Object' && Z(i.callee)
                        ? 'Arguments'
                        : N;
            };
      },
      7740: (Q, U, l) => {
        var d = l(9297),
          Z = l(5031),
          t = l(7347),
          F = l(4913);
        Q.exports = function (c, n, V) {
          for (var W = Z(n), a = F.f, i = t.f, h = 0; h < W.length; h++) {
            var N = W[h];
            !d(c, N) && !(V && d(V, N)) && a(c, N, i(n, N));
          }
        };
      },
      2211: (Q, U, l) => {
        var d = l(9039);
        Q.exports = !d(function () {
          function Z() {}
          return (
            (Z.prototype.constructor = null),
            Object.getPrototypeOf(new Z()) !== Z.prototype
          );
        });
      },
      2529: (Q) => {
        Q.exports = function (U, l) {
          return { value: U, done: l };
        };
      },
      6699: (Q, U, l) => {
        var d = l(3724),
          Z = l(4913),
          t = l(6980);
        Q.exports = d
          ? function (F, c, n) {
              return Z.f(F, c, t(1, n));
            }
          : function (F, c, n) {
              return (F[c] = n), F;
            };
      },
      6980: (Q) => {
        Q.exports = function (U, l) {
          return {
            enumerable: !(U & 1),
            configurable: !(U & 2),
            writable: !(U & 4),
            value: l,
          };
        };
      },
      4659: (Q, U, l) => {
        var d = l(3724),
          Z = l(4913),
          t = l(6980);
        Q.exports = function (F, c, n) {
          d ? Z.f(F, c, t(0, n)) : (F[c] = n);
        };
      },
      2106: (Q, U, l) => {
        var d = l(283),
          Z = l(4913);
        Q.exports = function (t, F, c) {
          return (
            c.get && d(c.get, F, { getter: !0 }),
            c.set && d(c.set, F, { setter: !0 }),
            Z.f(t, F, c)
          );
        };
      },
      6840: (Q, U, l) => {
        var d = l(4901),
          Z = l(4913),
          t = l(283),
          F = l(9433);
        Q.exports = function (c, n, V, W) {
          W || (W = {});
          var a = W.enumerable,
            i = W.name !== void 0 ? W.name : n;
          if ((d(V) && t(V, i, W), W.global)) a ? (c[n] = V) : F(n, V);
          else {
            try {
              W.unsafe ? c[n] && (a = !0) : delete c[n];
            } catch {}
            a
              ? (c[n] = V)
              : Z.f(c, n, {
                  value: V,
                  enumerable: !1,
                  configurable: !W.nonConfigurable,
                  writable: !W.nonWritable,
                });
          }
          return c;
        };
      },
      6279: (Q, U, l) => {
        var d = l(6840);
        Q.exports = function (Z, t, F) {
          for (var c in t) d(Z, c, t[c], F);
          return Z;
        };
      },
      9433: (Q, U, l) => {
        var d = l(4475),
          Z = Object.defineProperty;
        Q.exports = function (t, F) {
          try {
            Z(d, t, { value: F, configurable: !0, writable: !0 });
          } catch {
            d[t] = F;
          }
          return F;
        };
      },
      3724: (Q, U, l) => {
        var d = l(9039);
        Q.exports = !d(function () {
          return (
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1] !== 7
          );
        });
      },
      4483: (Q, U, l) => {
        var d = l(4475),
          Z = l(9714),
          t = l(1548),
          F = d.structuredClone,
          c = d.ArrayBuffer,
          n = d.MessageChannel,
          V = !1,
          W,
          a,
          i,
          h;
        if (t)
          V = function (N) {
            F(N, { transfer: [N] });
          };
        else if (c)
          try {
            n || ((W = Z('worker_threads')), W && (n = W.MessageChannel)),
              n &&
                ((a = new n()),
                (i = new c(2)),
                (h = function (N) {
                  a.port1.postMessage(null, [N]);
                }),
                i.byteLength === 2 && (h(i), i.byteLength === 0 && (V = h)));
          } catch {}
        Q.exports = V;
      },
      4055: (Q, U, l) => {
        var d = l(4475),
          Z = l(34),
          t = d.document,
          F = Z(t) && Z(t.createElement);
        Q.exports = function (c) {
          return F ? t.createElement(c) : {};
        };
      },
      6837: (Q) => {
        var U = TypeError,
          l = 9007199254740991;
        Q.exports = function (d) {
          if (d > l) throw U('Maximum allowed index exceeded');
          return d;
        };
      },
      5002: (Q) => {
        Q.exports = {
          IndexSizeError: { s: 'INDEX_SIZE_ERR', c: 1, m: 1 },
          DOMStringSizeError: { s: 'DOMSTRING_SIZE_ERR', c: 2, m: 0 },
          HierarchyRequestError: { s: 'HIERARCHY_REQUEST_ERR', c: 3, m: 1 },
          WrongDocumentError: { s: 'WRONG_DOCUMENT_ERR', c: 4, m: 1 },
          InvalidCharacterError: { s: 'INVALID_CHARACTER_ERR', c: 5, m: 1 },
          NoDataAllowedError: { s: 'NO_DATA_ALLOWED_ERR', c: 6, m: 0 },
          NoModificationAllowedError: {
            s: 'NO_MODIFICATION_ALLOWED_ERR',
            c: 7,
            m: 1,
          },
          NotFoundError: { s: 'NOT_FOUND_ERR', c: 8, m: 1 },
          NotSupportedError: { s: 'NOT_SUPPORTED_ERR', c: 9, m: 1 },
          InUseAttributeError: { s: 'INUSE_ATTRIBUTE_ERR', c: 10, m: 1 },
          InvalidStateError: { s: 'INVALID_STATE_ERR', c: 11, m: 1 },
          SyntaxError: { s: 'SYNTAX_ERR', c: 12, m: 1 },
          InvalidModificationError: {
            s: 'INVALID_MODIFICATION_ERR',
            c: 13,
            m: 1,
          },
          NamespaceError: { s: 'NAMESPACE_ERR', c: 14, m: 1 },
          InvalidAccessError: { s: 'INVALID_ACCESS_ERR', c: 15, m: 1 },
          ValidationError: { s: 'VALIDATION_ERR', c: 16, m: 0 },
          TypeMismatchError: { s: 'TYPE_MISMATCH_ERR', c: 17, m: 1 },
          SecurityError: { s: 'SECURITY_ERR', c: 18, m: 1 },
          NetworkError: { s: 'NETWORK_ERR', c: 19, m: 1 },
          AbortError: { s: 'ABORT_ERR', c: 20, m: 1 },
          URLMismatchError: { s: 'URL_MISMATCH_ERR', c: 21, m: 1 },
          QuotaExceededError: { s: 'QUOTA_EXCEEDED_ERR', c: 22, m: 1 },
          TimeoutError: { s: 'TIMEOUT_ERR', c: 23, m: 1 },
          InvalidNodeTypeError: { s: 'INVALID_NODE_TYPE_ERR', c: 24, m: 1 },
          DataCloneError: { s: 'DATA_CLONE_ERR', c: 25, m: 1 },
        };
      },
      7290: (Q, U, l) => {
        var d = l(516),
          Z = l(9088);
        Q.exports =
          !d && !Z && typeof window == 'object' && typeof document == 'object';
      },
      516: (Q) => {
        Q.exports =
          typeof Deno == 'object' && Deno && typeof Deno.version == 'object';
      },
      9088: (Q, U, l) => {
        var d = l(4475),
          Z = l(4576);
        Q.exports = Z(d.process) === 'process';
      },
      9392: (Q) => {
        Q.exports =
          (typeof navigator < 'u' && String(navigator.userAgent)) || '';
      },
      7388: (Q, U, l) => {
        var d = l(4475),
          Z = l(9392),
          t = d.process,
          F = d.Deno,
          c = (t && t.versions) || (F && F.version),
          n = c && c.v8,
          V,
          W;
        n &&
          ((V = n.split('.')), (W = V[0] > 0 && V[0] < 4 ? 1 : +(V[0] + V[1]))),
          !W &&
            Z &&
            ((V = Z.match(/Edge\/(\d+)/)),
            (!V || V[1] >= 74) &&
              ((V = Z.match(/Chrome\/(\d+)/)), V && (W = +V[1]))),
          (Q.exports = W);
      },
      8727: (Q) => {
        Q.exports = [
          'constructor',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'toLocaleString',
          'toString',
          'valueOf',
        ];
      },
      6193: (Q, U, l) => {
        var d = l(9504),
          Z = Error,
          t = d(''.replace),
          F = (function (V) {
            return String(new Z(V).stack);
          })('zxcasd'),
          c = /\n\s*at [^:]*:[^\n]*/,
          n = c.test(F);
        Q.exports = function (V, W) {
          if (n && typeof V == 'string' && !Z.prepareStackTrace)
            for (; W--; ) V = t(V, c, '');
          return V;
        };
      },
      6518: (Q, U, l) => {
        var d = l(4475),
          Z = l(7347).f,
          t = l(6699),
          F = l(6840),
          c = l(9433),
          n = l(7740),
          V = l(2796);
        Q.exports = function (W, a) {
          var i = W.target,
            h = W.global,
            N = W.stat,
            M,
            J,
            m,
            G,
            T,
            u;
          if (
            (h
              ? (J = d)
              : N
                ? (J = d[i] || c(i, {}))
                : (J = d[i] && d[i].prototype),
            J)
          )
            for (m in a) {
              if (
                ((T = a[m]),
                W.dontCallGetSet
                  ? ((u = Z(J, m)), (G = u && u.value))
                  : (G = J[m]),
                (M = V(h ? m : i + (N ? '.' : '#') + m, W.forced)),
                !M && G !== void 0)
              ) {
                if (typeof T == typeof G) continue;
                n(T, G);
              }
              (W.sham || (G && G.sham)) && t(T, 'sham', !0), F(J, m, T, W);
            }
        };
      },
      9039: (Q) => {
        Q.exports = function (U) {
          try {
            return !!U();
          } catch {
            return !0;
          }
        };
      },
      6080: (Q, U, l) => {
        var d = l(7476),
          Z = l(9306),
          t = l(616),
          F = d(d.bind);
        Q.exports = function (c, n) {
          return (
            Z(c),
            n === void 0
              ? c
              : t
                ? F(c, n)
                : function () {
                    return c.apply(n, arguments);
                  }
          );
        };
      },
      616: (Q, U, l) => {
        var d = l(9039);
        Q.exports = !d(function () {
          var Z = function () {}.bind();
          return typeof Z != 'function' || Z.hasOwnProperty('prototype');
        });
      },
      9565: (Q, U, l) => {
        var d = l(616),
          Z = Function.prototype.call;
        Q.exports = d
          ? Z.bind(Z)
          : function () {
              return Z.apply(Z, arguments);
            };
      },
      350: (Q, U, l) => {
        var d = l(3724),
          Z = l(9297),
          t = Function.prototype,
          F = d && Object.getOwnPropertyDescriptor,
          c = Z(t, 'name'),
          n = c && function () {}.name === 'something',
          V = c && (!d || (d && F(t, 'name').configurable));
        Q.exports = { EXISTS: c, PROPER: n, CONFIGURABLE: V };
      },
      6706: (Q, U, l) => {
        var d = l(9504),
          Z = l(9306);
        Q.exports = function (t, F, c) {
          try {
            return d(Z(Object.getOwnPropertyDescriptor(t, F)[c]));
          } catch {}
        };
      },
      7476: (Q, U, l) => {
        var d = l(4576),
          Z = l(9504);
        Q.exports = function (t) {
          if (d(t) === 'Function') return Z(t);
        };
      },
      9504: (Q, U, l) => {
        var d = l(616),
          Z = Function.prototype,
          t = Z.call,
          F = d && Z.bind.bind(t, t);
        Q.exports = d
          ? F
          : function (c) {
              return function () {
                return t.apply(c, arguments);
              };
            };
      },
      7751: (Q, U, l) => {
        var d = l(4475),
          Z = l(4901),
          t = function (F) {
            return Z(F) ? F : void 0;
          };
        Q.exports = function (F, c) {
          return arguments.length < 2 ? t(d[F]) : d[F] && d[F][c];
        };
      },
      1767: (Q) => {
        Q.exports = function (U) {
          return { iterator: U, next: U.next, done: !1 };
        };
      },
      8646: (Q, U, l) => {
        var d = l(9565),
          Z = l(8551),
          t = l(1767),
          F = l(851);
        Q.exports = function (c, n) {
          (!n || typeof c != 'string') && Z(c);
          var V = F(c);
          return t(Z(V !== void 0 ? d(V, c) : c));
        };
      },
      851: (Q, U, l) => {
        var d = l(6955),
          Z = l(5966),
          t = l(4117),
          F = l(6269),
          c = l(8227),
          n = c('iterator');
        Q.exports = function (V) {
          if (!t(V)) return Z(V, n) || Z(V, '@@iterator') || F[d(V)];
        };
      },
      81: (Q, U, l) => {
        var d = l(9565),
          Z = l(9306),
          t = l(8551),
          F = l(6823),
          c = l(851),
          n = TypeError;
        Q.exports = function (V, W) {
          var a = arguments.length < 2 ? c(V) : W;
          if (Z(a)) return t(d(a, V));
          throw new n(F(V) + ' is not iterable');
        };
      },
      5966: (Q, U, l) => {
        var d = l(9306),
          Z = l(4117);
        Q.exports = function (t, F) {
          var c = t[F];
          return Z(c) ? void 0 : d(c);
        };
      },
      3789: (Q, U, l) => {
        var d = l(9306),
          Z = l(8551),
          t = l(9565),
          F = l(1291),
          c = l(1767),
          n = 'Invalid size',
          V = RangeError,
          W = TypeError,
          a = Math.max,
          i = function (h, N) {
            (this.set = h),
              (this.size = a(N, 0)),
              (this.has = d(h.has)),
              (this.keys = d(h.keys));
          };
        (i.prototype = {
          getIterator: function () {
            return c(Z(t(this.keys, this.set)));
          },
          includes: function (h) {
            return t(this.has, this.set, h);
          },
        }),
          (Q.exports = function (h) {
            Z(h);
            var N = +h.size;
            if (N !== N) throw new W(n);
            var M = F(N);
            if (M < 0) throw new V(n);
            return new i(h, M);
          });
      },
      4475: function (Q) {
        var U = function (l) {
          return l && l.Math === Math && l;
        };
        Q.exports =
          U(typeof globalThis == 'object' && globalThis) ||
          U(typeof window == 'object' && window) ||
          U(typeof self == 'object' && self) ||
          U(typeof global == 'object' && global) ||
          U(typeof this == 'object' && this) ||
          (function () {
            return this;
          })() ||
          Function('return this')();
      },
      9297: (Q, U, l) => {
        var d = l(9504),
          Z = l(8981),
          t = d({}.hasOwnProperty);
        Q.exports =
          Object.hasOwn ||
          function (c, n) {
            return t(Z(c), n);
          };
      },
      421: (Q) => {
        Q.exports = {};
      },
      397: (Q, U, l) => {
        var d = l(7751);
        Q.exports = d('document', 'documentElement');
      },
      5917: (Q, U, l) => {
        var d = l(3724),
          Z = l(9039),
          t = l(4055);
        Q.exports =
          !d &&
          !Z(function () {
            return (
              Object.defineProperty(t('div'), 'a', {
                get: function () {
                  return 7;
                },
              }).a !== 7
            );
          });
      },
      7055: (Q, U, l) => {
        var d = l(9504),
          Z = l(9039),
          t = l(4576),
          F = Object,
          c = d(''.split);
        Q.exports = Z(function () {
          return !F('z').propertyIsEnumerable(0);
        })
          ? function (n) {
              return t(n) === 'String' ? c(n, '') : F(n);
            }
          : F;
      },
      3167: (Q, U, l) => {
        var d = l(4901),
          Z = l(34),
          t = l(2967);
        Q.exports = function (F, c, n) {
          var V, W;
          return (
            t &&
              d((V = c.constructor)) &&
              V !== n &&
              Z((W = V.prototype)) &&
              W !== n.prototype &&
              t(F, W),
            F
          );
        };
      },
      3706: (Q, U, l) => {
        var d = l(9504),
          Z = l(4901),
          t = l(7629),
          F = d(Function.toString);
        Z(t.inspectSource) ||
          (t.inspectSource = function (c) {
            return F(c);
          }),
          (Q.exports = t.inspectSource);
      },
      1181: (Q, U, l) => {
        var d = l(8622),
          Z = l(4475),
          t = l(34),
          F = l(6699),
          c = l(9297),
          n = l(7629),
          V = l(6119),
          W = l(421),
          a = 'Object already initialized',
          i = Z.TypeError,
          h = Z.WeakMap,
          N,
          M,
          J,
          m = function (X) {
            return J(X) ? M(X) : N(X, {});
          },
          G = function (X) {
            return function (S) {
              var p;
              if (!t(S) || (p = M(S)).type !== X)
                throw new i('Incompatible receiver, ' + X + ' required');
              return p;
            };
          };
        if (d || n.state) {
          var T = n.state || (n.state = new h());
          (T.get = T.get),
            (T.has = T.has),
            (T.set = T.set),
            (N = function (X, S) {
              if (T.has(X)) throw new i(a);
              return (S.facade = X), T.set(X, S), S;
            }),
            (M = function (X) {
              return T.get(X) || {};
            }),
            (J = function (X) {
              return T.has(X);
            });
        } else {
          var u = V('state');
          (W[u] = !0),
            (N = function (X, S) {
              if (c(X, u)) throw new i(a);
              return (S.facade = X), F(X, u, S), S;
            }),
            (M = function (X) {
              return c(X, u) ? X[u] : {};
            }),
            (J = function (X) {
              return c(X, u);
            });
        }
        Q.exports = { set: N, get: M, has: J, enforce: m, getterFor: G };
      },
      4209: (Q, U, l) => {
        var d = l(8227),
          Z = l(6269),
          t = d('iterator'),
          F = Array.prototype;
        Q.exports = function (c) {
          return c !== void 0 && (Z.Array === c || F[t] === c);
        };
      },
      4376: (Q, U, l) => {
        var d = l(4576);
        Q.exports =
          Array.isArray ||
          function (t) {
            return d(t) === 'Array';
          };
      },
      1108: (Q, U, l) => {
        var d = l(6955);
        Q.exports = function (Z) {
          var t = d(Z);
          return t === 'BigInt64Array' || t === 'BigUint64Array';
        };
      },
      4901: (Q) => {
        var U = typeof document == 'object' && document.all;
        Q.exports =
          typeof U > 'u' && U !== void 0
            ? function (l) {
                return typeof l == 'function' || l === U;
              }
            : function (l) {
                return typeof l == 'function';
              };
      },
      2796: (Q, U, l) => {
        var d = l(9039),
          Z = l(4901),
          t = /#|\.prototype\./,
          F = function (a, i) {
            var h = n[c(a)];
            return h === W ? !0 : h === V ? !1 : Z(i) ? d(i) : !!i;
          },
          c = (F.normalize = function (a) {
            return String(a).replace(t, '.').toLowerCase();
          }),
          n = (F.data = {}),
          V = (F.NATIVE = 'N'),
          W = (F.POLYFILL = 'P');
        Q.exports = F;
      },
      4117: (Q) => {
        Q.exports = function (U) {
          return U == null;
        };
      },
      34: (Q, U, l) => {
        var d = l(4901);
        Q.exports = function (Z) {
          return typeof Z == 'object' ? Z !== null : d(Z);
        };
      },
      3925: (Q, U, l) => {
        var d = l(34);
        Q.exports = function (Z) {
          return d(Z) || Z === null;
        };
      },
      6395: (Q) => {
        Q.exports = !1;
      },
      757: (Q, U, l) => {
        var d = l(7751),
          Z = l(4901),
          t = l(1625),
          F = l(7040),
          c = Object;
        Q.exports = F
          ? function (n) {
              return typeof n == 'symbol';
            }
          : function (n) {
              var V = d('Symbol');
              return Z(V) && t(V.prototype, c(n));
            };
      },
      507: (Q, U, l) => {
        var d = l(9565);
        Q.exports = function (Z, t, F) {
          for (
            var c = F ? Z : Z.iterator, n = Z.next, V, W;
            !(V = d(n, c)).done;

          )
            if (((W = t(V.value)), W !== void 0)) return W;
        };
      },
      2652: (Q, U, l) => {
        var d = l(6080),
          Z = l(9565),
          t = l(8551),
          F = l(6823),
          c = l(4209),
          n = l(6198),
          V = l(1625),
          W = l(81),
          a = l(851),
          i = l(9539),
          h = TypeError,
          N = function (J, m) {
            (this.stopped = J), (this.result = m);
          },
          M = N.prototype;
        Q.exports = function (J, m, G) {
          var T = G && G.that,
            u = !!(G && G.AS_ENTRIES),
            X = !!(G && G.IS_RECORD),
            S = !!(G && G.IS_ITERATOR),
            p = !!(G && G.INTERRUPTED),
            L = d(m, T),
            Y,
            o,
            y,
            D,
            I,
            O,
            x,
            B = function (r) {
              return Y && i(Y, 'normal', r), new N(!0, r);
            },
            C = function (r) {
              return u
                ? (t(r), p ? L(r[0], r[1], B) : L(r[0], r[1]))
                : p
                  ? L(r, B)
                  : L(r);
            };
          if (X) Y = J.iterator;
          else if (S) Y = J;
          else {
            if (((o = a(J)), !o)) throw new h(F(J) + ' is not iterable');
            if (c(o)) {
              for (y = 0, D = n(J); D > y; y++)
                if (((I = C(J[y])), I && V(M, I))) return I;
              return new N(!1);
            }
            Y = W(J, o);
          }
          for (O = X ? J.next : Y.next; !(x = Z(O, Y)).done; ) {
            try {
              I = C(x.value);
            } catch (r) {
              i(Y, 'throw', r);
            }
            if (typeof I == 'object' && I && V(M, I)) return I;
          }
          return new N(!1);
        };
      },
      9539: (Q, U, l) => {
        var d = l(9565),
          Z = l(8551),
          t = l(5966);
        Q.exports = function (F, c, n) {
          var V, W;
          Z(F);
          try {
            if (((V = t(F, 'return')), !V)) {
              if (c === 'throw') throw n;
              return n;
            }
            V = d(V, F);
          } catch (a) {
            (W = !0), (V = a);
          }
          if (c === 'throw') throw n;
          if (W) throw V;
          return Z(V), n;
        };
      },
      9462: (Q, U, l) => {
        var d = l(9565),
          Z = l(2360),
          t = l(6699),
          F = l(6279),
          c = l(8227),
          n = l(1181),
          V = l(5966),
          W = l(7657).IteratorPrototype,
          a = l(2529),
          i = l(9539),
          h = c('toStringTag'),
          N = 'IteratorHelper',
          M = 'WrapForValidIterator',
          J = n.set,
          m = function (u) {
            var X = n.getterFor(u ? M : N);
            return F(Z(W), {
              next: function () {
                var p = X(this);
                if (u) return p.nextHandler();
                try {
                  var L = p.done ? void 0 : p.nextHandler();
                  return a(L, p.done);
                } catch (Y) {
                  throw ((p.done = !0), Y);
                }
              },
              return: function () {
                var S = X(this),
                  p = S.iterator;
                if (((S.done = !0), u)) {
                  var L = V(p, 'return');
                  return L ? d(L, p) : a(void 0, !0);
                }
                if (S.inner)
                  try {
                    i(S.inner.iterator, 'normal');
                  } catch (Y) {
                    return i(p, 'throw', Y);
                  }
                return i(p, 'normal'), a(void 0, !0);
              },
            });
          },
          G = m(!0),
          T = m(!1);
        t(T, h, 'Iterator Helper'),
          (Q.exports = function (u, X) {
            var S = function (L, Y) {
              Y ? ((Y.iterator = L.iterator), (Y.next = L.next)) : (Y = L),
                (Y.type = X ? M : N),
                (Y.nextHandler = u),
                (Y.counter = 0),
                (Y.done = !1),
                J(this, Y);
            };
            return (S.prototype = X ? G : T), S;
          });
      },
      713: (Q, U, l) => {
        var d = l(9565),
          Z = l(9306),
          t = l(8551),
          F = l(1767),
          c = l(9462),
          n = l(6319),
          V = c(function () {
            var W = this.iterator,
              a = t(d(this.next, W)),
              i = (this.done = !!a.done);
            if (!i) return n(W, this.mapper, [a.value, this.counter++], !0);
          });
        Q.exports = function (a) {
          return t(this), Z(a), new V(F(this), { mapper: a });
        };
      },
      7657: (Q, U, l) => {
        var d = l(9039),
          Z = l(4901),
          t = l(34),
          F = l(2360),
          c = l(2787),
          n = l(6840),
          V = l(8227),
          W = l(6395),
          a = V('iterator'),
          i = !1,
          h,
          N,
          M;
        [].keys &&
          ((M = [].keys()),
          'next' in M
            ? ((N = c(c(M))), N !== Object.prototype && (h = N))
            : (i = !0));
        var J =
          !t(h) ||
          d(function () {
            var m = {};
            return h[a].call(m) !== m;
          });
        J ? (h = {}) : W && (h = F(h)),
          Z(h[a]) ||
            n(h, a, function () {
              return this;
            }),
          (Q.exports = { IteratorPrototype: h, BUGGY_SAFARI_ITERATORS: i });
      },
      6269: (Q) => {
        Q.exports = {};
      },
      6198: (Q, U, l) => {
        var d = l(8014);
        Q.exports = function (Z) {
          return d(Z.length);
        };
      },
      283: (Q, U, l) => {
        var d = l(9504),
          Z = l(9039),
          t = l(4901),
          F = l(9297),
          c = l(3724),
          n = l(350).CONFIGURABLE,
          V = l(3706),
          W = l(1181),
          a = W.enforce,
          i = W.get,
          h = String,
          N = Object.defineProperty,
          M = d(''.slice),
          J = d(''.replace),
          m = d([].join),
          G =
            c &&
            !Z(function () {
              return N(function () {}, 'length', { value: 8 }).length !== 8;
            }),
          T = String(String).split('String'),
          u = (Q.exports = function (X, S, p) {
            M(h(S), 0, 7) === 'Symbol(' &&
              (S = '[' + J(h(S), /^Symbol\(([^)]*)\).*$/, '$1') + ']'),
              p && p.getter && (S = 'get ' + S),
              p && p.setter && (S = 'set ' + S),
              (!F(X, 'name') || (n && X.name !== S)) &&
                (c
                  ? N(X, 'name', { value: S, configurable: !0 })
                  : (X.name = S)),
              G &&
                p &&
                F(p, 'arity') &&
                X.length !== p.arity &&
                N(X, 'length', { value: p.arity });
            try {
              p && F(p, 'constructor') && p.constructor
                ? c && N(X, 'prototype', { writable: !1 })
                : X.prototype && (X.prototype = void 0);
            } catch {}
            var L = a(X);
            return (
              F(L, 'source') ||
                (L.source = m(T, typeof S == 'string' ? S : '')),
              X
            );
          });
        Function.prototype.toString = u(function () {
          return (t(this) && i(this).source) || V(this);
        }, 'toString');
      },
      741: (Q) => {
        var U = Math.ceil,
          l = Math.floor;
        Q.exports =
          Math.trunc ||
          function (Z) {
            var t = +Z;
            return (t > 0 ? l : U)(t);
          };
      },
      6043: (Q, U, l) => {
        var d = l(9306),
          Z = TypeError,
          t = function (F) {
            var c, n;
            (this.promise = new F(function (V, W) {
              if (c !== void 0 || n !== void 0)
                throw new Z('Bad Promise constructor');
              (c = V), (n = W);
            })),
              (this.resolve = d(c)),
              (this.reject = d(n));
          };
        Q.exports.f = function (F) {
          return new t(F);
        };
      },
      2603: (Q, U, l) => {
        var d = l(655);
        Q.exports = function (Z, t) {
          return Z === void 0 ? (arguments.length < 2 ? '' : t) : d(Z);
        };
      },
      4149: (Q) => {
        var U = RangeError;
        Q.exports = function (l) {
          if (l === l) return l;
          throw new U('NaN is not allowed');
        };
      },
      2360: (Q, U, l) => {
        var d = l(8551),
          Z = l(6801),
          t = l(8727),
          F = l(421),
          c = l(397),
          n = l(4055),
          V = l(6119),
          W = '>',
          a = '<',
          i = 'prototype',
          h = 'script',
          N = V('IE_PROTO'),
          M = function () {},
          J = function (X) {
            return a + h + W + X + a + '/' + h + W;
          },
          m = function (X) {
            X.write(J('')), X.close();
            var S = X.parentWindow.Object;
            return (X = null), S;
          },
          G = function () {
            var X = n('iframe'),
              S = 'java' + h + ':',
              p;
            return (
              (X.style.display = 'none'),
              c.appendChild(X),
              (X.src = String(S)),
              (p = X.contentWindow.document),
              p.open(),
              p.write(J('document.F=Object')),
              p.close(),
              p.F
            );
          },
          T,
          u = function () {
            try {
              T = new ActiveXObject('htmlfile');
            } catch {}
            u =
              typeof document < 'u'
                ? document.domain && T
                  ? m(T)
                  : G()
                : m(T);
            for (var X = t.length; X--; ) delete u[i][t[X]];
            return u();
          };
        (F[N] = !0),
          (Q.exports =
            Object.create ||
            function (S, p) {
              var L;
              return (
                S !== null
                  ? ((M[i] = d(S)), (L = new M()), (M[i] = null), (L[N] = S))
                  : (L = u()),
                p === void 0 ? L : Z.f(L, p)
              );
            });
      },
      6801: (Q, U, l) => {
        var d = l(3724),
          Z = l(8686),
          t = l(4913),
          F = l(8551),
          c = l(5397),
          n = l(1072);
        U.f =
          d && !Z
            ? Object.defineProperties
            : function (W, a) {
                F(W);
                for (var i = c(a), h = n(a), N = h.length, M = 0, J; N > M; )
                  t.f(W, (J = h[M++]), i[J]);
                return W;
              };
      },
      4913: (Q, U, l) => {
        var d = l(3724),
          Z = l(5917),
          t = l(8686),
          F = l(8551),
          c = l(6969),
          n = TypeError,
          V = Object.defineProperty,
          W = Object.getOwnPropertyDescriptor,
          a = 'enumerable',
          i = 'configurable',
          h = 'writable';
        U.f = d
          ? t
            ? function (M, J, m) {
                if (
                  (F(M),
                  (J = c(J)),
                  F(m),
                  typeof M == 'function' &&
                    J === 'prototype' &&
                    'value' in m &&
                    h in m &&
                    !m[h])
                ) {
                  var G = W(M, J);
                  G &&
                    G[h] &&
                    ((M[J] = m.value),
                    (m = {
                      configurable: i in m ? m[i] : G[i],
                      enumerable: a in m ? m[a] : G[a],
                      writable: !1,
                    }));
                }
                return V(M, J, m);
              }
            : V
          : function (M, J, m) {
              if ((F(M), (J = c(J)), F(m), Z))
                try {
                  return V(M, J, m);
                } catch {}
              if ('get' in m || 'set' in m)
                throw new n('Accessors not supported');
              return 'value' in m && (M[J] = m.value), M;
            };
      },
      7347: (Q, U, l) => {
        var d = l(3724),
          Z = l(9565),
          t = l(8773),
          F = l(6980),
          c = l(5397),
          n = l(6969),
          V = l(9297),
          W = l(5917),
          a = Object.getOwnPropertyDescriptor;
        U.f = d
          ? a
          : function (h, N) {
              if (((h = c(h)), (N = n(N)), W))
                try {
                  return a(h, N);
                } catch {}
              if (V(h, N)) return F(!Z(t.f, h, N), h[N]);
            };
      },
      8480: (Q, U, l) => {
        var d = l(1828),
          Z = l(8727),
          t = Z.concat('length', 'prototype');
        U.f =
          Object.getOwnPropertyNames ||
          function (c) {
            return d(c, t);
          };
      },
      3717: (Q, U) => {
        U.f = Object.getOwnPropertySymbols;
      },
      2787: (Q, U, l) => {
        var d = l(9297),
          Z = l(4901),
          t = l(8981),
          F = l(6119),
          c = l(2211),
          n = F('IE_PROTO'),
          V = Object,
          W = V.prototype;
        Q.exports = c
          ? V.getPrototypeOf
          : function (a) {
              var i = t(a);
              if (d(i, n)) return i[n];
              var h = i.constructor;
              return Z(h) && i instanceof h
                ? h.prototype
                : i instanceof V
                  ? W
                  : null;
            };
      },
      1625: (Q, U, l) => {
        var d = l(9504);
        Q.exports = d({}.isPrototypeOf);
      },
      1828: (Q, U, l) => {
        var d = l(9504),
          Z = l(9297),
          t = l(5397),
          F = l(9617).indexOf,
          c = l(421),
          n = d([].push);
        Q.exports = function (V, W) {
          var a = t(V),
            i = 0,
            h = [],
            N;
          for (N in a) !Z(c, N) && Z(a, N) && n(h, N);
          for (; W.length > i; ) Z(a, (N = W[i++])) && (~F(h, N) || n(h, N));
          return h;
        };
      },
      1072: (Q, U, l) => {
        var d = l(1828),
          Z = l(8727);
        Q.exports =
          Object.keys ||
          function (F) {
            return d(F, Z);
          };
      },
      8773: (Q, U) => {
        var l = {}.propertyIsEnumerable,
          d = Object.getOwnPropertyDescriptor,
          Z = d && !l.call({ 1: 2 }, 1);
        U.f = Z
          ? function (F) {
              var c = d(this, F);
              return !!c && c.enumerable;
            }
          : l;
      },
      2967: (Q, U, l) => {
        var d = l(6706),
          Z = l(34),
          t = l(7750),
          F = l(3506);
        Q.exports =
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function () {
                var c = !1,
                  n = {},
                  V;
                try {
                  (V = d(Object.prototype, '__proto__', 'set')),
                    V(n, []),
                    (c = n instanceof Array);
                } catch {}
                return function (a, i) {
                  return (
                    t(a), F(i), Z(a) && (c ? V(a, i) : (a.__proto__ = i)), a
                  );
                };
              })()
            : void 0);
      },
      4270: (Q, U, l) => {
        var d = l(9565),
          Z = l(4901),
          t = l(34),
          F = TypeError;
        Q.exports = function (c, n) {
          var V, W;
          if (
            (n === 'string' && Z((V = c.toString)) && !t((W = d(V, c)))) ||
            (Z((V = c.valueOf)) && !t((W = d(V, c)))) ||
            (n !== 'string' && Z((V = c.toString)) && !t((W = d(V, c))))
          )
            return W;
          throw new F("Can't convert object to primitive value");
        };
      },
      5031: (Q, U, l) => {
        var d = l(7751),
          Z = l(9504),
          t = l(8480),
          F = l(3717),
          c = l(8551),
          n = Z([].concat);
        Q.exports =
          d('Reflect', 'ownKeys') ||
          function (W) {
            var a = t.f(c(W)),
              i = F.f;
            return i ? n(a, i(W)) : a;
          };
      },
      8235: (Q, U, l) => {
        var d = l(9504),
          Z = l(9297),
          t = SyntaxError,
          F = parseInt,
          c = String.fromCharCode,
          n = d(''.charAt),
          V = d(''.slice),
          W = d(/./.exec),
          a = {
            '\\"': '"',
            '\\\\': '\\',
            '\\/': '/',
            '\\b': '\b',
            '\\f': '\f',
            '\\n': `
`,
            '\\r': '\r',
            '\\t': '	',
          },
          i = /^[\da-f]{4}$/i,
          h = /^[\u0000-\u001F]$/;
        Q.exports = function (N, M) {
          for (var J = !0, m = ''; M < N.length; ) {
            var G = n(N, M);
            if (G === '\\') {
              var T = V(N, M, M + 2);
              if (Z(a, T)) (m += a[T]), (M += 2);
              else if (T === '\\u') {
                M += 2;
                var u = V(N, M, M + 4);
                if (!W(i, u)) throw new t('Bad Unicode escape at: ' + M);
                (m += c(F(u, 16))), (M += 4);
              } else throw new t('Unknown escape sequence: "' + T + '"');
            } else if (G === '"') {
              (J = !1), M++;
              break;
            } else {
              if (W(h, G))
                throw new t('Bad control character in string literal at: ' + M);
              (m += G), M++;
            }
          }
          if (J) throw new t('Unterminated string at: ' + M);
          return { value: m, end: M };
        };
      },
      7750: (Q, U, l) => {
        var d = l(4117),
          Z = TypeError;
        Q.exports = function (t) {
          if (d(t)) throw new Z("Can't call method on " + t);
          return t;
        };
      },
      9286: (Q, U, l) => {
        var d = l(4402),
          Z = l(8469),
          t = d.Set,
          F = d.add;
        Q.exports = function (c) {
          var n = new t();
          return (
            Z(c, function (V) {
              F(n, V);
            }),
            n
          );
        };
      },
      3440: (Q, U, l) => {
        var d = l(7080),
          Z = l(4402),
          t = l(9286),
          F = l(5170),
          c = l(3789),
          n = l(8469),
          V = l(507),
          W = Z.has,
          a = Z.remove;
        Q.exports = function (h) {
          var N = d(this),
            M = c(h),
            J = t(N);
          return (
            F(N) <= M.size
              ? n(N, function (m) {
                  M.includes(m) && a(J, m);
                })
              : V(M.getIterator(), function (m) {
                  W(N, m) && a(J, m);
                }),
            J
          );
        };
      },
      4402: (Q, U, l) => {
        var d = l(9504),
          Z = Set.prototype;
        Q.exports = {
          Set,
          add: d(Z.add),
          has: d(Z.has),
          remove: d(Z.delete),
          proto: Z,
        };
      },
      8750: (Q, U, l) => {
        var d = l(7080),
          Z = l(4402),
          t = l(5170),
          F = l(3789),
          c = l(8469),
          n = l(507),
          V = Z.Set,
          W = Z.add,
          a = Z.has;
        Q.exports = function (h) {
          var N = d(this),
            M = F(h),
            J = new V();
          return (
            t(N) > M.size
              ? n(M.getIterator(), function (m) {
                  a(N, m) && W(J, m);
                })
              : c(N, function (m) {
                  M.includes(m) && W(J, m);
                }),
            J
          );
        };
      },
      4449: (Q, U, l) => {
        var d = l(7080),
          Z = l(4402).has,
          t = l(5170),
          F = l(3789),
          c = l(8469),
          n = l(507),
          V = l(9539);
        Q.exports = function (a) {
          var i = d(this),
            h = F(a);
          if (t(i) <= h.size)
            return (
              c(
                i,
                function (M) {
                  if (h.includes(M)) return !1;
                },
                !0,
              ) !== !1
            );
          var N = h.getIterator();
          return (
            n(N, function (M) {
              if (Z(i, M)) return V(N, 'normal', !1);
            }) !== !1
          );
        };
      },
      3838: (Q, U, l) => {
        var d = l(7080),
          Z = l(5170),
          t = l(8469),
          F = l(3789);
        Q.exports = function (n) {
          var V = d(this),
            W = F(n);
          return Z(V) > W.size
            ? !1
            : t(
                V,
                function (a) {
                  if (!W.includes(a)) return !1;
                },
                !0,
              ) !== !1;
        };
      },
      8527: (Q, U, l) => {
        var d = l(7080),
          Z = l(4402).has,
          t = l(5170),
          F = l(3789),
          c = l(507),
          n = l(9539);
        Q.exports = function (W) {
          var a = d(this),
            i = F(W);
          if (t(a) < i.size) return !1;
          var h = i.getIterator();
          return (
            c(h, function (N) {
              if (!Z(a, N)) return n(h, 'normal', !1);
            }) !== !1
          );
        };
      },
      8469: (Q, U, l) => {
        var d = l(9504),
          Z = l(507),
          t = l(4402),
          F = t.Set,
          c = t.proto,
          n = d(c.forEach),
          V = d(c.keys),
          W = V(new F()).next;
        Q.exports = function (a, i, h) {
          return h ? Z({ iterator: V(a), next: W }, i) : n(a, i);
        };
      },
      4916: (Q, U, l) => {
        var d = l(7751),
          Z = function (t) {
            return {
              size: t,
              has: function () {
                return !1;
              },
              keys: function () {
                return {
                  next: function () {
                    return { done: !0 };
                  },
                };
              },
            };
          };
        Q.exports = function (t) {
          var F = d('Set');
          try {
            new F()[t](Z(0));
            try {
              return new F()[t](Z(-1)), !1;
            } catch {
              return !0;
            }
          } catch {
            return !1;
          }
        };
      },
      5170: (Q, U, l) => {
        var d = l(6706),
          Z = l(4402);
        Q.exports =
          d(Z.proto, 'size', 'get') ||
          function (t) {
            return t.size;
          };
      },
      3650: (Q, U, l) => {
        var d = l(7080),
          Z = l(4402),
          t = l(9286),
          F = l(3789),
          c = l(507),
          n = Z.add,
          V = Z.has,
          W = Z.remove;
        Q.exports = function (i) {
          var h = d(this),
            N = F(i).getIterator(),
            M = t(h);
          return (
            c(N, function (J) {
              V(h, J) ? W(M, J) : n(M, J);
            }),
            M
          );
        };
      },
      4204: (Q, U, l) => {
        var d = l(7080),
          Z = l(4402).add,
          t = l(9286),
          F = l(3789),
          c = l(507);
        Q.exports = function (V) {
          var W = d(this),
            a = F(V).getIterator(),
            i = t(W);
          return (
            c(a, function (h) {
              Z(i, h);
            }),
            i
          );
        };
      },
      6119: (Q, U, l) => {
        var d = l(5745),
          Z = l(3392),
          t = d('keys');
        Q.exports = function (F) {
          return t[F] || (t[F] = Z(F));
        };
      },
      7629: (Q, U, l) => {
        var d = l(6395),
          Z = l(4475),
          t = l(9433),
          F = '__core-js_shared__',
          c = (Q.exports = Z[F] || t(F, {}));
        (c.versions || (c.versions = [])).push({
          version: '3.37.1',
          mode: d ? 'pure' : 'global',
          copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
          license: 'https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE',
          source: 'https://github.com/zloirock/core-js',
        });
      },
      5745: (Q, U, l) => {
        var d = l(7629);
        Q.exports = function (Z, t) {
          return d[Z] || (d[Z] = t || {});
        };
      },
      1548: (Q, U, l) => {
        var d = l(4475),
          Z = l(9039),
          t = l(7388),
          F = l(7290),
          c = l(516),
          n = l(9088),
          V = d.structuredClone;
        Q.exports =
          !!V &&
          !Z(function () {
            if ((c && t > 92) || (n && t > 94) || (F && t > 97)) return !1;
            var W = new ArrayBuffer(8),
              a = V(W, { transfer: [W] });
            return W.byteLength !== 0 || a.byteLength !== 8;
          });
      },
      4495: (Q, U, l) => {
        var d = l(7388),
          Z = l(9039),
          t = l(4475),
          F = t.String;
        Q.exports =
          !!Object.getOwnPropertySymbols &&
          !Z(function () {
            var c = Symbol('symbol detection');
            return (
              !F(c) ||
              !(Object(c) instanceof Symbol) ||
              (!Symbol.sham && d && d < 41)
            );
          });
      },
      5610: (Q, U, l) => {
        var d = l(1291),
          Z = Math.max,
          t = Math.min;
        Q.exports = function (F, c) {
          var n = d(F);
          return n < 0 ? Z(n + c, 0) : t(n, c);
        };
      },
      5854: (Q, U, l) => {
        var d = l(2777),
          Z = TypeError;
        Q.exports = function (t) {
          var F = d(t, 'number');
          if (typeof F == 'number')
            throw new Z("Can't convert number to bigint");
          return BigInt(F);
        };
      },
      7696: (Q, U, l) => {
        var d = l(1291),
          Z = l(8014),
          t = RangeError;
        Q.exports = function (F) {
          if (F === void 0) return 0;
          var c = d(F),
            n = Z(c);
          if (c !== n) throw new t('Wrong length or index');
          return n;
        };
      },
      5397: (Q, U, l) => {
        var d = l(7055),
          Z = l(7750);
        Q.exports = function (t) {
          return d(Z(t));
        };
      },
      1291: (Q, U, l) => {
        var d = l(741);
        Q.exports = function (Z) {
          var t = +Z;
          return t !== t || t === 0 ? 0 : d(t);
        };
      },
      8014: (Q, U, l) => {
        var d = l(1291),
          Z = Math.min;
        Q.exports = function (t) {
          var F = d(t);
          return F > 0 ? Z(F, 9007199254740991) : 0;
        };
      },
      8981: (Q, U, l) => {
        var d = l(7750),
          Z = Object;
        Q.exports = function (t) {
          return Z(d(t));
        };
      },
      9590: (Q, U, l) => {
        var d = l(1291),
          Z = RangeError;
        Q.exports = function (t) {
          var F = d(t);
          if (F < 0) throw new Z("The argument can't be less than 0");
          return F;
        };
      },
      2777: (Q, U, l) => {
        var d = l(9565),
          Z = l(34),
          t = l(757),
          F = l(5966),
          c = l(4270),
          n = l(8227),
          V = TypeError,
          W = n('toPrimitive');
        Q.exports = function (a, i) {
          if (!Z(a) || t(a)) return a;
          var h = F(a, W),
            N;
          if (h) {
            if (
              (i === void 0 && (i = 'default'), (N = d(h, a, i)), !Z(N) || t(N))
            )
              return N;
            throw new V("Can't convert object to primitive value");
          }
          return i === void 0 && (i = 'number'), c(a, i);
        };
      },
      6969: (Q, U, l) => {
        var d = l(2777),
          Z = l(757);
        Q.exports = function (t) {
          var F = d(t, 'string');
          return Z(F) ? F : F + '';
        };
      },
      2140: (Q, U, l) => {
        var d = l(8227),
          Z = d('toStringTag'),
          t = {};
        (t[Z] = 'z'), (Q.exports = String(t) === '[object z]');
      },
      655: (Q, U, l) => {
        var d = l(6955),
          Z = String;
        Q.exports = function (t) {
          if (d(t) === 'Symbol')
            throw new TypeError('Cannot convert a Symbol value to a string');
          return Z(t);
        };
      },
      9714: (Q, U, l) => {
        var d = l(9088);
        Q.exports = function (Z) {
          try {
            if (d) return Function('return require("' + Z + '")')();
          } catch {}
        };
      },
      6823: (Q) => {
        var U = String;
        Q.exports = function (l) {
          try {
            return U(l);
          } catch {
            return 'Object';
          }
        };
      },
      3392: (Q, U, l) => {
        var d = l(9504),
          Z = 0,
          t = Math.random(),
          F = d((1).toString);
        Q.exports = function (c) {
          return 'Symbol(' + (c === void 0 ? '' : c) + ')_' + F(++Z + t, 36);
        };
      },
      7040: (Q, U, l) => {
        var d = l(4495);
        Q.exports = d && !Symbol.sham && typeof Symbol.iterator == 'symbol';
      },
      8686: (Q, U, l) => {
        var d = l(3724),
          Z = l(9039);
        Q.exports =
          d &&
          Z(function () {
            return (
              Object.defineProperty(function () {}, 'prototype', {
                value: 42,
                writable: !1,
              }).prototype !== 42
            );
          });
      },
      2812: (Q) => {
        var U = TypeError;
        Q.exports = function (l, d) {
          if (l < d) throw new U('Not enough arguments');
          return l;
        };
      },
      8622: (Q, U, l) => {
        var d = l(4475),
          Z = l(4901),
          t = d.WeakMap;
        Q.exports = Z(t) && /native code/.test(String(t));
      },
      8227: (Q, U, l) => {
        var d = l(4475),
          Z = l(5745),
          t = l(9297),
          F = l(3392),
          c = l(4495),
          n = l(7040),
          V = d.Symbol,
          W = Z('wks'),
          a = n ? V.for || V : (V && V.withoutSetter) || F;
        Q.exports = function (i) {
          return (
            t(W, i) || (W[i] = c && t(V, i) ? V[i] : a('Symbol.' + i)), W[i]
          );
        };
      },
      6573: (Q, U, l) => {
        var d = l(3724),
          Z = l(2106),
          t = l(3238),
          F = ArrayBuffer.prototype;
        d &&
          !('detached' in F) &&
          Z(F, 'detached', {
            configurable: !0,
            get: function () {
              return t(this);
            },
          });
      },
      7936: (Q, U, l) => {
        var d = l(6518),
          Z = l(5636);
        Z &&
          d(
            { target: 'ArrayBuffer', proto: !0 },
            {
              transferToFixedLength: function () {
                return Z(this, arguments.length ? arguments[0] : void 0, !1);
              },
            },
          );
      },
      8100: (Q, U, l) => {
        var d = l(6518),
          Z = l(5636);
        Z &&
          d(
            { target: 'ArrayBuffer', proto: !0 },
            {
              transfer: function () {
                return Z(this, arguments.length ? arguments[0] : void 0, !0);
              },
            },
          );
      },
      4114: (Q, U, l) => {
        var d = l(6518),
          Z = l(8981),
          t = l(6198),
          F = l(4527),
          c = l(6837),
          n = l(9039),
          V = n(function () {
            return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
          }),
          W = function () {
            try {
              Object.defineProperty([], 'length', { writable: !1 }).push();
            } catch (i) {
              return i instanceof TypeError;
            }
          },
          a = V || !W();
        d(
          { target: 'Array', proto: !0, arity: 1, forced: a },
          {
            push: function (h) {
              var N = Z(this),
                M = t(N),
                J = arguments.length;
              c(M + J);
              for (var m = 0; m < J; m++) (N[M] = arguments[m]), M++;
              return F(N, M), M;
            },
          },
        );
      },
      4628: (Q, U, l) => {
        var d = l(6518),
          Z = l(6043);
        d(
          { target: 'Promise', stat: !0 },
          {
            withResolvers: function () {
              var F = Z.f(this);
              return {
                promise: F.promise,
                resolve: F.resolve,
                reject: F.reject,
              };
            },
          },
        );
      },
      7642: (Q, U, l) => {
        var d = l(6518),
          Z = l(3440),
          t = l(4916);
        d(
          { target: 'Set', proto: !0, real: !0, forced: !t('difference') },
          { difference: Z },
        );
      },
      8004: (Q, U, l) => {
        var d = l(6518),
          Z = l(9039),
          t = l(8750),
          F = l(4916),
          c =
            !F('intersection') ||
            Z(function () {
              return (
                String(
                  Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2]))),
                ) !== '3,2'
              );
            });
        d(
          { target: 'Set', proto: !0, real: !0, forced: c },
          { intersection: t },
        );
      },
      3853: (Q, U, l) => {
        var d = l(6518),
          Z = l(4449),
          t = l(4916);
        d(
          { target: 'Set', proto: !0, real: !0, forced: !t('isDisjointFrom') },
          { isDisjointFrom: Z },
        );
      },
      5876: (Q, U, l) => {
        var d = l(6518),
          Z = l(3838),
          t = l(4916);
        d(
          { target: 'Set', proto: !0, real: !0, forced: !t('isSubsetOf') },
          { isSubsetOf: Z },
        );
      },
      2475: (Q, U, l) => {
        var d = l(6518),
          Z = l(8527),
          t = l(4916);
        d(
          { target: 'Set', proto: !0, real: !0, forced: !t('isSupersetOf') },
          { isSupersetOf: Z },
        );
      },
      5024: (Q, U, l) => {
        var d = l(6518),
          Z = l(3650),
          t = l(4916);
        d(
          {
            target: 'Set',
            proto: !0,
            real: !0,
            forced: !t('symmetricDifference'),
          },
          { symmetricDifference: Z },
        );
      },
      1698: (Q, U, l) => {
        var d = l(6518),
          Z = l(4204),
          t = l(4916);
        d(
          { target: 'Set', proto: !0, real: !0, forced: !t('union') },
          { union: Z },
        );
      },
      7467: (Q, U, l) => {
        var d = l(7628),
          Z = l(4644),
          t = Z.aTypedArray,
          F = Z.exportTypedArrayMethod,
          c = Z.getTypedArrayConstructor;
        F('toReversed', function () {
          return d(t(this), c(this));
        });
      },
      4732: (Q, U, l) => {
        var d = l(4644),
          Z = l(9504),
          t = l(9306),
          F = l(5370),
          c = d.aTypedArray,
          n = d.getTypedArrayConstructor,
          V = d.exportTypedArrayMethod,
          W = Z(d.TypedArrayPrototype.sort);
        V('toSorted', function (i) {
          i !== void 0 && t(i);
          var h = c(this),
            N = F(n(h), h);
          return W(N, i);
        });
      },
      9577: (Q, U, l) => {
        var d = l(9928),
          Z = l(4644),
          t = l(1108),
          F = l(1291),
          c = l(5854),
          n = Z.aTypedArray,
          V = Z.getTypedArrayConstructor,
          W = Z.exportTypedArrayMethod,
          a = !!(function () {
            try {
              new Int8Array(1).with(2, {
                valueOf: function () {
                  throw 8;
                },
              });
            } catch (i) {
              return i === 8;
            }
          })();
        W(
          'with',
          function (i, h) {
            var N = n(this),
              M = F(i),
              J = t(N) ? c(h) : +h;
            return d(N, V(N), M, J);
          },
          !a,
        );
      },
      8992: (Q, U, l) => {
        var d = l(6518),
          Z = l(4475),
          t = l(679),
          F = l(8551),
          c = l(4901),
          n = l(2787),
          V = l(2106),
          W = l(4659),
          a = l(9039),
          i = l(9297),
          h = l(8227),
          N = l(7657).IteratorPrototype,
          M = l(3724),
          J = l(6395),
          m = 'constructor',
          G = 'Iterator',
          T = h('toStringTag'),
          u = TypeError,
          X = Z[G],
          S =
            J ||
            !c(X) ||
            X.prototype !== N ||
            !a(function () {
              X({});
            }),
          p = function () {
            if ((t(this, N), n(this) === N))
              throw new u('Abstract class Iterator not directly constructable');
          },
          L = function (Y, o) {
            M
              ? V(N, Y, {
                  configurable: !0,
                  get: function () {
                    return o;
                  },
                  set: function (y) {
                    if ((F(this), this === N))
                      throw new u("You can't redefine this property");
                    i(this, Y) ? (this[Y] = y) : W(this, Y, y);
                  },
                })
              : (N[Y] = o);
          };
        i(N, T) || L(T, G),
          (S || !i(N, m) || N[m] === Object) && L(m, p),
          (p.prototype = N),
          d({ global: !0, constructor: !0, forced: S }, { Iterator: p });
      },
      4743: (Q, U, l) => {
        var d = l(6518),
          Z = l(9565),
          t = l(8551),
          F = l(1767),
          c = l(4149),
          n = l(9590),
          V = l(9462),
          W = l(6395),
          a = V(function () {
            for (var i = this.iterator, h = this.next, N, M; this.remaining; )
              if (
                (this.remaining--,
                (N = t(Z(h, i))),
                (M = this.done = !!N.done),
                M)
              )
                return;
            if (((N = t(Z(h, i))), (M = this.done = !!N.done), !M))
              return N.value;
          });
        d(
          { target: 'Iterator', proto: !0, real: !0, forced: W },
          {
            drop: function (h) {
              t(this);
              var N = n(c(+h));
              return new a(F(this), { remaining: N });
            },
          },
        );
      },
      3215: (Q, U, l) => {
        var d = l(6518),
          Z = l(2652),
          t = l(9306),
          F = l(8551),
          c = l(1767);
        d(
          { target: 'Iterator', proto: !0, real: !0 },
          {
            every: function (V) {
              F(this), t(V);
              var W = c(this),
                a = 0;
              return !Z(
                W,
                function (i, h) {
                  if (!V(i, a++)) return h();
                },
                { IS_RECORD: !0, INTERRUPTED: !0 },
              ).stopped;
            },
          },
        );
      },
      4520: (Q, U, l) => {
        var d = l(6518),
          Z = l(9565),
          t = l(9306),
          F = l(8551),
          c = l(1767),
          n = l(9462),
          V = l(6319),
          W = l(6395),
          a = n(function () {
            for (
              var i = this.iterator, h = this.predicate, N = this.next, M, J, m;
              ;

            ) {
              if (((M = F(Z(N, i))), (J = this.done = !!M.done), J)) return;
              if (((m = M.value), V(i, h, [m, this.counter++], !0))) return m;
            }
          });
        d(
          { target: 'Iterator', proto: !0, real: !0, forced: W },
          {
            filter: function (h) {
              return F(this), t(h), new a(c(this), { predicate: h });
            },
          },
        );
      },
      670: (Q, U, l) => {
        var d = l(6518),
          Z = l(9565),
          t = l(9306),
          F = l(8551),
          c = l(1767),
          n = l(8646),
          V = l(9462),
          W = l(9539),
          a = l(6395),
          i = V(function () {
            for (var h = this.iterator, N = this.mapper, M, J; ; ) {
              if ((J = this.inner))
                try {
                  if (((M = F(Z(J.next, J.iterator))), !M.done)) return M.value;
                  this.inner = null;
                } catch (m) {
                  W(h, 'throw', m);
                }
              if (((M = F(Z(this.next, h))), (this.done = !!M.done))) return;
              try {
                this.inner = n(N(M.value, this.counter++), !1);
              } catch (m) {
                W(h, 'throw', m);
              }
            }
          });
        d(
          { target: 'Iterator', proto: !0, real: !0, forced: a },
          {
            flatMap: function (N) {
              return F(this), t(N), new i(c(this), { mapper: N, inner: null });
            },
          },
        );
      },
      1454: (Q, U, l) => {
        var d = l(6518),
          Z = l(713),
          t = l(6395);
        d({ target: 'Iterator', proto: !0, real: !0, forced: t }, { map: Z });
      },
      7550: (Q, U, l) => {
        var d = l(6518),
          Z = l(2652),
          t = l(9306),
          F = l(8551),
          c = l(1767);
        d(
          { target: 'Iterator', proto: !0, real: !0 },
          {
            some: function (V) {
              F(this), t(V);
              var W = c(this),
                a = 0;
              return Z(
                W,
                function (i, h) {
                  if (V(i, a++)) return h();
                },
                { IS_RECORD: !0, INTERRUPTED: !0 },
              ).stopped;
            },
          },
        );
      },
      8335: (Q, U, l) => {
        var d = l(6518),
          Z = l(3724),
          t = l(4475),
          F = l(7751),
          c = l(9504),
          n = l(9565),
          V = l(4901),
          W = l(34),
          a = l(4376),
          i = l(9297),
          h = l(655),
          N = l(6198),
          M = l(4659),
          J = l(9039),
          m = l(8235),
          G = l(4495),
          T = t.JSON,
          u = t.Number,
          X = t.SyntaxError,
          S = T && T.parse,
          p = F('Object', 'keys'),
          L = Object.getOwnPropertyDescriptor,
          Y = c(''.charAt),
          o = c(''.slice),
          y = c(/./.exec),
          D = c([].push),
          I = /^\d$/,
          O = /^[1-9]$/,
          x = /^(?:-|\d)$/,
          B = /^[\t\n\r ]$/,
          C = 0,
          r = 1,
          Wl = function (w, z) {
            w = h(w);
            var E = new Rl(w, 0),
              A = E.parse(),
              Nl = A.value,
              H = E.skip(B, A.end);
            if (H < w.length)
              throw new X(
                'Unexpected extra character: "' +
                  Y(w, H) +
                  '" after the parsed data at: ' +
                  H,
              );
            return V(z) ? Jl({ '': Nl }, '', z, A) : Nl;
          },
          Jl = function (w, z, E, A) {
            var Nl = w[z],
              H = A && Nl === A.value,
              Gl = H && typeof A.source == 'string' ? { source: A.source } : {},
              Tl,
              pd,
              sU,
              xl,
              Us;
            if (W(Nl)) {
              var AN = a(Nl),
                aR = H ? A.nodes : AN ? [] : {};
              if (AN)
                for (Tl = aR.length, sU = N(Nl), xl = 0; xl < sU; xl++)
                  NU(Nl, xl, Jl(Nl, '' + xl, E, xl < Tl ? aR[xl] : void 0));
              else
                for (pd = p(Nl), sU = N(pd), xl = 0; xl < sU; xl++)
                  (Us = pd[xl]),
                    NU(Nl, Us, Jl(Nl, Us, E, i(aR, Us) ? aR[Us] : void 0));
            }
            return n(E, w, z, Nl, Gl);
          },
          NU = function (w, z, E) {
            if (Z) {
              var A = L(w, z);
              if (A && !A.configurable) return;
            }
            E === void 0 ? delete w[z] : M(w, z, E);
          },
          al = function (w, z, E, A) {
            (this.value = w),
              (this.end = z),
              (this.source = E),
              (this.nodes = A);
          },
          Rl = function (w, z) {
            (this.source = w), (this.index = z);
          };
        Rl.prototype = {
          fork: function (w) {
            return new Rl(this.source, w);
          },
          parse: function () {
            var w = this.source,
              z = this.skip(B, this.index),
              E = this.fork(z),
              A = Y(w, z);
            if (y(x, A)) return E.number();
            switch (A) {
              case '{':
                return E.object();
              case '[':
                return E.array();
              case '"':
                return E.string();
              case 't':
                return E.keyword(!0);
              case 'f':
                return E.keyword(!1);
              case 'n':
                return E.keyword(null);
            }
            throw new X('Unexpected character: "' + A + '" at: ' + z);
          },
          node: function (w, z, E, A, Nl) {
            return new al(z, A, w ? null : o(this.source, E, A), Nl);
          },
          object: function () {
            for (
              var w = this.source, z = this.index + 1, E = !1, A = {}, Nl = {};
              z < w.length;

            ) {
              if (((z = this.until(['"', '}'], z)), Y(w, z) === '}' && !E)) {
                z++;
                break;
              }
              var H = this.fork(z).string(),
                Gl = H.value;
              (z = H.end),
                (z = this.until([':'], z) + 1),
                (z = this.skip(B, z)),
                (H = this.fork(z).parse()),
                M(Nl, Gl, H),
                M(A, Gl, H.value),
                (z = this.until([',', '}'], H.end));
              var Tl = Y(w, z);
              if (Tl === ',') (E = !0), z++;
              else if (Tl === '}') {
                z++;
                break;
              }
            }
            return this.node(r, A, this.index, z, Nl);
          },
          array: function () {
            for (
              var w = this.source, z = this.index + 1, E = !1, A = [], Nl = [];
              z < w.length;

            ) {
              if (((z = this.skip(B, z)), Y(w, z) === ']' && !E)) {
                z++;
                break;
              }
              var H = this.fork(z).parse();
              if (
                (D(Nl, H),
                D(A, H.value),
                (z = this.until([',', ']'], H.end)),
                Y(w, z) === ',')
              )
                (E = !0), z++;
              else if (Y(w, z) === ']') {
                z++;
                break;
              }
            }
            return this.node(r, A, this.index, z, Nl);
          },
          string: function () {
            var w = this.index,
              z = m(this.source, this.index + 1);
            return this.node(C, z.value, w, z.end);
          },
          number: function () {
            var w = this.source,
              z = this.index,
              E = z;
            if ((Y(w, E) === '-' && E++, Y(w, E) === '0')) E++;
            else if (y(O, Y(w, E))) E = this.skip(I, ++E);
            else throw new X('Failed to parse number at: ' + E);
            if (
              (Y(w, E) === '.' && (E = this.skip(I, ++E)),
              Y(w, E) === 'e' || Y(w, E) === 'E')
            ) {
              E++, (Y(w, E) === '+' || Y(w, E) === '-') && E++;
              var A = E;
              if (((E = this.skip(I, E)), A === E))
                throw new X("Failed to parse number's exponent value at: " + E);
            }
            return this.node(C, u(o(w, z, E)), z, E);
          },
          keyword: function (w) {
            var z = '' + w,
              E = this.index,
              A = E + z.length;
            if (o(this.source, E, A) !== z)
              throw new X('Failed to parse value at: ' + E);
            return this.node(C, w, E, A);
          },
          skip: function (w, z) {
            for (var E = this.source; z < E.length && y(w, Y(E, z)); z++);
            return z;
          },
          until: function (w, z) {
            z = this.skip(B, z);
            for (var E = Y(this.source, z), A = 0; A < w.length; A++)
              if (w[A] === E) return z;
            throw new X('Unexpected character: "' + E + '" at: ' + z);
          },
        };
        var ht = J(function () {
            var w = '9007199254740993',
              z;
            return (
              S(w, function (E, A, Nl) {
                z = Nl.source;
              }),
              z !== w
            );
          }),
          CU =
            G &&
            !J(function () {
              return 1 / S('-0 	') !== -1 / 0;
            });
        d(
          { target: 'JSON', stat: !0, forced: ht },
          {
            parse: function (z, E) {
              return CU && !V(E) ? S(z) : Wl(z, E);
            },
          },
        );
      },
      3375: (Q, U, l) => {
        l(7642);
      },
      9225: (Q, U, l) => {
        l(8004);
      },
      3972: (Q, U, l) => {
        l(3853);
      },
      9209: (Q, U, l) => {
        l(5876);
      },
      5714: (Q, U, l) => {
        l(2475);
      },
      7561: (Q, U, l) => {
        l(5024);
      },
      6197: (Q, U, l) => {
        l(1698);
      },
      4979: (Q, U, l) => {
        var d = l(6518),
          Z = l(4475),
          t = l(7751),
          F = l(6980),
          c = l(4913).f,
          n = l(9297),
          V = l(679),
          W = l(3167),
          a = l(2603),
          i = l(5002),
          h = l(6193),
          N = l(3724),
          M = l(6395),
          J = 'DOMException',
          m = t('Error'),
          G = t(J),
          T = function () {
            V(this, u);
            var B = arguments.length,
              C = a(B < 1 ? void 0 : arguments[0]),
              r = a(B < 2 ? void 0 : arguments[1], 'Error'),
              Wl = new G(C, r),
              Jl = new m(C);
            return (
              (Jl.name = J),
              c(Wl, 'stack', F(1, h(Jl.stack, 1))),
              W(Wl, this, T),
              Wl
            );
          },
          u = (T.prototype = G.prototype),
          X = 'stack' in new m(J),
          S = 'stack' in new G(1, 2),
          p = G && N && Object.getOwnPropertyDescriptor(Z, J),
          L = !!p && !(p.writable && p.configurable),
          Y = X && !L && !S;
        d(
          { global: !0, constructor: !0, forced: M || Y },
          { DOMException: Y ? T : G },
        );
        var o = t(J),
          y = o.prototype;
        if (y.constructor !== o) {
          M || c(y, 'constructor', F(1, o));
          for (var D in i)
            if (n(i, D)) {
              var I = i[D],
                O = I.s;
              n(o, O) || c(o, O, F(6, I.c));
            }
        }
      },
      4603: (Q, U, l) => {
        var d = l(6840),
          Z = l(9504),
          t = l(655),
          F = l(2812),
          c = URLSearchParams,
          n = c.prototype,
          V = Z(n.append),
          W = Z(n.delete),
          a = Z(n.forEach),
          i = Z([].push),
          h = new c('a=1&a=2&b=3');
        h.delete('a', 1),
          h.delete('b', void 0),
          h + '' != 'a=2' &&
            d(
              n,
              'delete',
              function (N) {
                var M = arguments.length,
                  J = M < 2 ? void 0 : arguments[1];
                if (M && J === void 0) return W(this, N);
                var m = [];
                a(this, function (Y, o) {
                  i(m, { key: o, value: Y });
                }),
                  F(M, 1);
                for (
                  var G = t(N), T = t(J), u = 0, X = 0, S = !1, p = m.length, L;
                  u < p;

                )
                  (L = m[u++]),
                    S || L.key === G ? ((S = !0), W(this, L.key)) : X++;
                for (; X < p; )
                  (L = m[X++]),
                    (L.key === G && L.value === T) || V(this, L.key, L.value);
              },
              { enumerable: !0, unsafe: !0 },
            );
      },
      7566: (Q, U, l) => {
        var d = l(6840),
          Z = l(9504),
          t = l(655),
          F = l(2812),
          c = URLSearchParams,
          n = c.prototype,
          V = Z(n.getAll),
          W = Z(n.has),
          a = new c('a=1');
        (a.has('a', 2) || !a.has('a', void 0)) &&
          d(
            n,
            'has',
            function (h) {
              var N = arguments.length,
                M = N < 2 ? void 0 : arguments[1];
              if (N && M === void 0) return W(this, h);
              var J = V(this, h);
              F(N, 1);
              for (var m = t(M), G = 0; G < J.length; )
                if (J[G++] === m) return !0;
              return !1;
            },
            { enumerable: !0, unsafe: !0 },
          );
      },
      8721: (Q, U, l) => {
        var d = l(3724),
          Z = l(9504),
          t = l(2106),
          F = URLSearchParams.prototype,
          c = Z(F.forEach);
        d &&
          !('size' in F) &&
          t(F, 'size', {
            get: function () {
              var V = 0;
              return (
                c(this, function () {
                  V++;
                }),
                V
              );
            },
            configurable: !0,
            enumerable: !0,
          });
      },
    },
    Mt = {};
  function q(Q) {
    var U = Mt[Q];
    if (U !== void 0) return U.exports;
    var l = (Mt[Q] = { exports: {} });
    return el[Q].call(l.exports, l, l.exports, q), l.exports;
  }
  (q.d = (Q, U) => {
    for (var l in U)
      q.o(U, l) &&
        !q.o(Q, l) &&
        Object.defineProperty(Q, l, { enumerable: !0, get: U[l] });
  }),
    (q.o = (Q, U) => Object.prototype.hasOwnProperty.call(Q, U));
  var v = (globalThis.pdfjsLib = {});
  q.d(v, {
    AbortException: () => Gt,
    AnnotationEditorLayer: () => iG,
    AnnotationEditorParamsType: () => P,
    AnnotationEditorType: () => ll,
    AnnotationEditorUIManager: () => Rs,
    AnnotationLayer: () => WG,
    AnnotationMode: () => JZ,
    CMapCompressionType: () => fR,
    ColorPicker: () => We,
    DOMSVGFactory: () => dN,
    DrawLayer: () => RG,
    FeatureTest: () => nU,
    GlobalWorkerOptions: () => St,
    ImageKind: () => sW,
    InvalidPDFException: () => Mb,
    MissingPDFException: () => Jt,
    OPS: () => rU,
    Outliner: () => SN,
    PDFDataRangeTransport: () => $b,
    PDFDateString: () => ob,
    PDFWorker: () => YW,
    PasswordResponses: () => bM,
    PermissionFlag: () => hM,
    PixelsPerInch: () => Q0,
    RenderingCancelledException: () => ZN,
    TextLayer: () => XW,
    UnexpectedResponseException: () => WW,
    Util: () => g,
    VerbosityLevel: () => QW,
    XfaLayer: () => Ze,
    build: () => KJ,
    createValidAbsoluteUrl: () => JM,
    fetchData: () => bW,
    getDocument: () => IJ,
    getFilenameFromUrl: () => yM,
    getPdfFilenameFromUrl: () => LM,
    getXfaPageViewport: () => zM,
    isDataScheme: () => tN,
    isPdfFile: () => FN,
    noContextMenu: () => VU,
    normalizeUnicode: () => uM,
    renderTextLayer: () => uJ,
    setLayerDimensions: () => Tt,
    shadow: () => Zl,
    updateTextLayer: () => pJ,
    version: () => gJ,
  }),
    q(4114),
    q(6573),
    q(8100),
    q(7936),
    q(7467),
    q(4732),
    q(9577),
    q(4603),
    q(7566),
    q(8721);
  const fl =
      typeof process == 'object' &&
      process + '' == '[object process]' &&
      !process.versions.nw &&
      !(
        process.versions.electron &&
        process.type &&
        process.type !== 'browser'
      ),
    mb = [1, 0, 0, 1, 0, 0],
    HR = [0.001, 0, 0, 0.001, 0, 0],
    RM = 1e7,
    PR = 1.35,
    pU = {
      ANY: 1,
      DISPLAY: 2,
      PRINT: 4,
      SAVE: 8,
      ANNOTATIONS_FORMS: 16,
      ANNOTATIONS_STORAGE: 32,
      ANNOTATIONS_DISABLE: 64,
      OPLIST: 256,
    },
    JZ = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 },
    NM = 'pdfjs_internal_editor_',
    ll = {
      DISABLE: -1,
      NONE: 0,
      FREETEXT: 3,
      HIGHLIGHT: 9,
      STAMP: 13,
      INK: 15,
    },
    P = {
      RESIZE: 1,
      CREATE: 2,
      FREETEXT_SIZE: 11,
      FREETEXT_COLOR: 12,
      FREETEXT_OPACITY: 13,
      INK_COLOR: 21,
      INK_THICKNESS: 22,
      INK_OPACITY: 23,
      HIGHLIGHT_COLOR: 31,
      HIGHLIGHT_DEFAULT_COLOR: 32,
      HIGHLIGHT_THICKNESS: 33,
      HIGHLIGHT_FREE: 34,
      HIGHLIGHT_SHOW_ALL: 35,
    },
    hM = {
      PRINT: 4,
      MODIFY_CONTENTS: 8,
      COPY: 16,
      MODIFY_ANNOTATIONS: 32,
      FILL_INTERACTIVE_FORMS: 256,
      COPY_FOR_ACCESSIBILITY: 512,
      ASSEMBLE: 1024,
      PRINT_HIGH_QUALITY: 2048,
    },
    Al = {
      FILL: 0,
      STROKE: 1,
      FILL_STROKE: 2,
      INVISIBLE: 3,
      FILL_ADD_TO_PATH: 4,
      STROKE_ADD_TO_PATH: 5,
      FILL_STROKE_ADD_TO_PATH: 6,
      ADD_TO_PATH: 7,
      FILL_STROKE_MASK: 3,
      ADD_TO_PATH_FLAG: 4,
    },
    sW = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 },
    ol = {
      TEXT: 1,
      LINK: 2,
      FREETEXT: 3,
      LINE: 4,
      SQUARE: 5,
      CIRCLE: 6,
      POLYGON: 7,
      POLYLINE: 8,
      HIGHLIGHT: 9,
      UNDERLINE: 10,
      SQUIGGLY: 11,
      STRIKEOUT: 12,
      STAMP: 13,
      CARET: 14,
      INK: 15,
      POPUP: 16,
      FILEATTACHMENT: 17,
      SOUND: 18,
      MOVIE: 19,
      WIDGET: 20,
      SCREEN: 21,
      PRINTERMARK: 22,
      TRAPNET: 23,
      WATERMARK: 24,
      THREED: 25,
      REDACT: 26,
    },
    Vs = { SOLID: 1, DASHED: 2, BEVELED: 3, INSET: 4, UNDERLINE: 5 },
    QW = { ERRORS: 0, WARNINGS: 1, INFOS: 5 },
    fR = { NONE: 0, BINARY: 1 },
    rU = {
      dependency: 1,
      setLineWidth: 2,
      setLineCap: 3,
      setLineJoin: 4,
      setMiterLimit: 5,
      setDash: 6,
      setRenderingIntent: 7,
      setFlatness: 8,
      setGState: 9,
      save: 10,
      restore: 11,
      transform: 12,
      moveTo: 13,
      lineTo: 14,
      curveTo: 15,
      curveTo2: 16,
      curveTo3: 17,
      closePath: 18,
      rectangle: 19,
      stroke: 20,
      closeStroke: 21,
      fill: 22,
      eoFill: 23,
      fillStroke: 24,
      eoFillStroke: 25,
      closeFillStroke: 26,
      closeEOFillStroke: 27,
      endPath: 28,
      clip: 29,
      eoClip: 30,
      beginText: 31,
      endText: 32,
      setCharSpacing: 33,
      setWordSpacing: 34,
      setHScale: 35,
      setLeading: 36,
      setFont: 37,
      setTextRenderingMode: 38,
      setTextRise: 39,
      moveText: 40,
      setLeadingMoveText: 41,
      setTextMatrix: 42,
      nextLine: 43,
      showText: 44,
      showSpacedText: 45,
      nextLineShowText: 46,
      nextLineSetSpacingShowText: 47,
      setCharWidth: 48,
      setCharWidthAndBounds: 49,
      setStrokeColorSpace: 50,
      setFillColorSpace: 51,
      setStrokeColor: 52,
      setStrokeColorN: 53,
      setFillColor: 54,
      setFillColorN: 55,
      setStrokeGray: 56,
      setFillGray: 57,
      setStrokeRGBColor: 58,
      setFillRGBColor: 59,
      setStrokeCMYKColor: 60,
      setFillCMYKColor: 61,
      shadingFill: 62,
      beginInlineImage: 63,
      beginImageData: 64,
      endInlineImage: 65,
      paintXObject: 66,
      markPoint: 67,
      markPointProps: 68,
      beginMarkedContent: 69,
      beginMarkedContentProps: 70,
      endMarkedContent: 71,
      beginCompat: 72,
      endCompat: 73,
      paintFormXObjectBegin: 74,
      paintFormXObjectEnd: 75,
      beginGroup: 76,
      endGroup: 77,
      beginAnnotation: 80,
      endAnnotation: 81,
      paintImageMaskXObject: 83,
      paintImageMaskXObjectGroup: 84,
      paintImageXObject: 85,
      paintInlineImageXObject: 86,
      paintInlineImageXObjectGroup: 87,
      paintImageXObjectRepeat: 88,
      paintImageMaskXObjectRepeat: 89,
      paintSolidColorImageMask: 90,
      constructPath: 91,
    },
    bM = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
  let nW = QW.WARNINGS;
  function eM(Q) {
    Number.isInteger(Q) && (nW = Q);
  }
  function mM() {
    return nW;
  }
  function VW(Q) {
    nW >= QW.INFOS && console.log(`Info: ${Q}`);
  }
  function _(Q) {
    nW >= QW.WARNINGS && console.log(`Warning: ${Q}`);
  }
  function sl(Q) {
    throw new Error(Q);
  }
  function Bl(Q, U) {
    Q || sl(U);
  }
  function MM(Q) {
    switch (Q == null ? void 0 : Q.protocol) {
      case 'http:':
      case 'https:':
      case 'ftp:':
      case 'mailto:':
      case 'tel:':
        return !0;
      default:
        return !1;
    }
  }
  function JM(Q, U = null, l = null) {
    if (!Q) return null;
    try {
      if (l && typeof Q == 'string') {
        if (l.addDefaultProtocol && Q.startsWith('www.')) {
          const Z = Q.match(/\./g);
          (Z == null ? void 0 : Z.length) >= 2 && (Q = `http://${Q}`);
        }
        if (l.tryConvertEncoding)
          try {
            Q = YM(Q);
          } catch {}
      }
      const d = U ? new URL(Q, U) : new URL(Q);
      if (MM(d)) return d;
    } catch {}
    return null;
  }
  function Zl(Q, U, l, d = !1) {
    return (
      Object.defineProperty(Q, U, {
        value: l,
        enumerable: !d,
        configurable: !0,
        writable: !1,
      }),
      l
    );
  }
  const GZ = (function () {
    function U(l, d) {
      this.constructor === U && sl('Cannot initialize BaseException.'),
        (this.message = l),
        (this.name = d);
    }
    return (U.prototype = new Error()), (U.constructor = U), U;
  })();
  class AR extends GZ {
    constructor(U, l) {
      super(U, 'PasswordException'), (this.code = l);
    }
  }
  class _R extends GZ {
    constructor(U, l) {
      super(U, 'UnknownErrorException'), (this.details = l);
    }
  }
  let Mb = class extends GZ {
      constructor(U) {
        super(U, 'InvalidPDFException');
      }
    },
    Jt = class extends GZ {
      constructor(U) {
        super(U, 'MissingPDFException');
      }
    },
    WW = class extends GZ {
      constructor(U, l) {
        super(U, 'UnexpectedResponseException'), (this.status = l);
      }
    };
  class GM extends GZ {
    constructor(U) {
      super(U, 'FormatError');
    }
  }
  let Gt = class extends GZ {
    constructor(U) {
      super(U, 'AbortException');
    }
  };
  function Jb(Q) {
    (typeof Q != 'object' || (Q == null ? void 0 : Q.length) === void 0) &&
      sl('Invalid argument for bytesToString');
    const U = Q.length,
      l = 8192;
    if (U < l) return String.fromCharCode.apply(null, Q);
    const d = [];
    for (let Z = 0; Z < U; Z += l) {
      const t = Math.min(Z + l, U),
        F = Q.subarray(Z, t);
      d.push(String.fromCharCode.apply(null, F));
    }
    return d.join('');
  }
  function aW(Q) {
    typeof Q != 'string' && sl('Invalid argument for stringToBytes');
    const U = Q.length,
      l = new Uint8Array(U);
    for (let d = 0; d < U; ++d) l[d] = Q.charCodeAt(d) & 255;
    return l;
  }
  function TM(Q) {
    return String.fromCharCode(
      (Q >> 24) & 255,
      (Q >> 16) & 255,
      (Q >> 8) & 255,
      Q & 255,
    );
  }
  function qR(Q) {
    const U = Object.create(null);
    for (const [l, d] of Q) U[l] = d;
    return U;
  }
  function SM() {
    const Q = new Uint8Array(4);
    return (Q[0] = 1), new Uint32Array(Q.buffer, 0, 1)[0] === 1;
  }
  function XM() {
    try {
      return new Function(''), !0;
    } catch {
      return !1;
    }
  }
  class nU {
    static get isLittleEndian() {
      return Zl(this, 'isLittleEndian', SM());
    }
    static get isEvalSupported() {
      return Zl(this, 'isEvalSupported', XM());
    }
    static get isOffscreenCanvasSupported() {
      return Zl(
        this,
        'isOffscreenCanvasSupported',
        typeof OffscreenCanvas < 'u',
      );
    }
    static get platform() {
      return typeof navigator < 'u' &&
        typeof (navigator == null ? void 0 : navigator.platform) == 'string'
        ? Zl(this, 'platform', { isMac: navigator.platform.includes('Mac') })
        : Zl(this, 'platform', { isMac: !1 });
    }
    static get isCSSRoundSupported() {
      var U, l;
      return Zl(
        this,
        'isCSSRoundSupported',
        (l = (U = globalThis.CSS) == null ? void 0 : U.supports) == null
          ? void 0
          : l.call(U, 'width: round(1.5px, 1px)'),
      );
    }
  }
  const $R = Array.from(Array(256).keys(), (Q) =>
    Q.toString(16).padStart(2, '0'),
  );
  let g =
    ((KW = class {
      static makeHexColor(U, l, d) {
        return `#${$R[U]}${$R[l]}${$R[d]}`;
      }
      static scaleMinMax(U, l) {
        let d;
        U[0]
          ? (U[0] < 0 && ((d = l[0]), (l[0] = l[2]), (l[2] = d)),
            (l[0] *= U[0]),
            (l[2] *= U[0]),
            U[3] < 0 && ((d = l[1]), (l[1] = l[3]), (l[3] = d)),
            (l[1] *= U[3]),
            (l[3] *= U[3]))
          : ((d = l[0]),
            (l[0] = l[1]),
            (l[1] = d),
            (d = l[2]),
            (l[2] = l[3]),
            (l[3] = d),
            U[1] < 0 && ((d = l[1]), (l[1] = l[3]), (l[3] = d)),
            (l[1] *= U[1]),
            (l[3] *= U[1]),
            U[2] < 0 && ((d = l[0]), (l[0] = l[2]), (l[2] = d)),
            (l[0] *= U[2]),
            (l[2] *= U[2])),
          (l[0] += U[4]),
          (l[1] += U[5]),
          (l[2] += U[4]),
          (l[3] += U[5]);
      }
      static transform(U, l) {
        return [
          U[0] * l[0] + U[2] * l[1],
          U[1] * l[0] + U[3] * l[1],
          U[0] * l[2] + U[2] * l[3],
          U[1] * l[2] + U[3] * l[3],
          U[0] * l[4] + U[2] * l[5] + U[4],
          U[1] * l[4] + U[3] * l[5] + U[5],
        ];
      }
      static applyTransform(U, l) {
        const d = U[0] * l[0] + U[1] * l[2] + l[4],
          Z = U[0] * l[1] + U[1] * l[3] + l[5];
        return [d, Z];
      }
      static applyInverseTransform(U, l) {
        const d = l[0] * l[3] - l[1] * l[2],
          Z = (U[0] * l[3] - U[1] * l[2] + l[2] * l[5] - l[4] * l[3]) / d,
          t = (-U[0] * l[1] + U[1] * l[0] + l[4] * l[1] - l[5] * l[0]) / d;
        return [Z, t];
      }
      static getAxialAlignedBoundingBox(U, l) {
        const d = this.applyTransform(U, l),
          Z = this.applyTransform(U.slice(2, 4), l),
          t = this.applyTransform([U[0], U[3]], l),
          F = this.applyTransform([U[2], U[1]], l);
        return [
          Math.min(d[0], Z[0], t[0], F[0]),
          Math.min(d[1], Z[1], t[1], F[1]),
          Math.max(d[0], Z[0], t[0], F[0]),
          Math.max(d[1], Z[1], t[1], F[1]),
        ];
      }
      static inverseTransform(U) {
        const l = U[0] * U[3] - U[1] * U[2];
        return [
          U[3] / l,
          -U[1] / l,
          -U[2] / l,
          U[0] / l,
          (U[2] * U[5] - U[4] * U[3]) / l,
          (U[4] * U[1] - U[5] * U[0]) / l,
        ];
      }
      static singularValueDecompose2dScale(U) {
        const l = [U[0], U[2], U[1], U[3]],
          d = U[0] * l[0] + U[1] * l[2],
          Z = U[0] * l[1] + U[1] * l[3],
          t = U[2] * l[0] + U[3] * l[2],
          F = U[2] * l[1] + U[3] * l[3],
          c = (d + F) / 2,
          n = Math.sqrt((d + F) ** 2 - 4 * (d * F - t * Z)) / 2,
          V = c + n || 1,
          W = c - n || 1;
        return [Math.sqrt(V), Math.sqrt(W)];
      }
      static normalizeRect(U) {
        const l = U.slice(0);
        return (
          U[0] > U[2] && ((l[0] = U[2]), (l[2] = U[0])),
          U[1] > U[3] && ((l[1] = U[3]), (l[3] = U[1])),
          l
        );
      }
      static intersect(U, l) {
        const d = Math.max(Math.min(U[0], U[2]), Math.min(l[0], l[2])),
          Z = Math.min(Math.max(U[0], U[2]), Math.max(l[0], l[2]));
        if (d > Z) return null;
        const t = Math.max(Math.min(U[1], U[3]), Math.min(l[1], l[3])),
          F = Math.min(Math.max(U[1], U[3]), Math.max(l[1], l[3]));
        return t > F ? null : [d, t, Z, F];
      }
      static bezierBoundingBox(U, l, d, Z, t, F, c, n, V) {
        return (
          V
            ? ((V[0] = Math.min(V[0], U, c)),
              (V[1] = Math.min(V[1], l, n)),
              (V[2] = Math.max(V[2], U, c)),
              (V[3] = Math.max(V[3], l, n)))
            : (V = [
                Math.min(U, c),
                Math.min(l, n),
                Math.max(U, c),
                Math.max(l, n),
              ]),
          b(this, ys, qN).call(
            this,
            U,
            d,
            t,
            c,
            l,
            Z,
            F,
            n,
            3 * (-U + 3 * (d - t) + c),
            6 * (U - 2 * d + t),
            3 * (d - U),
            V,
          ),
          b(this, ys, qN).call(
            this,
            U,
            d,
            t,
            c,
            l,
            Z,
            F,
            n,
            3 * (-l + 3 * (Z - F) + n),
            6 * (l - 2 * Z + F),
            3 * (Z - l),
            V,
          ),
          V
        );
      }
    }),
    (i0 = new WeakSet()),
    (iR = function (U, l, d, Z, t, F, c, n, V, W) {
      if (V <= 0 || V >= 1) return;
      const a = 1 - V,
        i = V * V,
        h = i * V,
        N = a * (a * (a * U + 3 * V * l) + 3 * i * d) + h * Z,
        M = a * (a * (a * t + 3 * V * F) + 3 * i * c) + h * n;
      (W[0] = Math.min(W[0], N)),
        (W[1] = Math.min(W[1], M)),
        (W[2] = Math.max(W[2], N)),
        (W[3] = Math.max(W[3], M));
    }),
    (ys = new WeakSet()),
    (qN = function (U, l, d, Z, t, F, c, n, V, W, a, i) {
      if (Math.abs(V) < 1e-12) {
        Math.abs(W) >= 1e-12 &&
          b(this, i0, iR).call(this, U, l, d, Z, t, F, c, n, -a / W, i);
        return;
      }
      const h = W ** 2 - 4 * a * V;
      if (h < 0) return;
      const N = Math.sqrt(h),
        M = 2 * V;
      b(this, i0, iR).call(this, U, l, d, Z, t, F, c, n, (-W + N) / M, i),
        b(this, i0, iR).call(this, U, l, d, Z, t, F, c, n, (-W - N) / M, i);
    }),
    R(KW, i0),
    R(KW, ys),
    KW);
  function YM(Q) {
    return decodeURIComponent(escape(Q));
  }
  let lN = null,
    Gb = null;
  function uM(Q) {
    return (
      lN ||
        ((lN =
          /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu),
        (Gb = new Map([['ﬅ', 'ſt']]))),
      Q.replaceAll(lN, (U, l, d) => (l ? l.normalize('NFKC') : Gb.get(d)))
    );
  }
  function pM() {
    if (
      typeof crypto < 'u' &&
      typeof (crypto == null ? void 0 : crypto.randomUUID) == 'function'
    )
      return crypto.randomUUID();
    const Q = new Uint8Array(32);
    if (
      typeof crypto < 'u' &&
      typeof (crypto == null ? void 0 : crypto.getRandomValues) == 'function'
    )
      crypto.getRandomValues(Q);
    else for (let U = 0; U < 32; U++) Q[U] = Math.floor(Math.random() * 255);
    return Jb(Q);
  }
  const Tb = 'pdfjs_internal_id_',
    od = {
      BEZIER_CURVE_TO: 0,
      MOVE_TO: 1,
      LINE_TO: 2,
      QUADRATIC_CURVE_TO: 3,
      RESTORE: 4,
      SAVE: 5,
      SCALE: 6,
      TRANSFORM: 7,
      TRANSLATE: 8,
    };
  q(4628),
    q(1454),
    q(3375),
    q(9225),
    q(3972),
    q(9209),
    q(5714),
    q(7561),
    q(6197),
    q(4979),
    q(8992),
    q(4743),
    q(3215),
    q(7550),
    q(8335),
    q(4520);
  class iW {
    constructor() {
      this.constructor === iW && sl('Cannot initialize BaseFilterFactory.');
    }
    addFilter(U) {
      return 'none';
    }
    addHCMFilter(U, l) {
      return 'none';
    }
    addAlphaFilter(U) {
      return 'none';
    }
    addLuminosityFilter(U) {
      return 'none';
    }
    addHighlightHCMFilter(U, l, d, Z, t) {
      return 'none';
    }
    destroy(U = !1) {}
  }
  const KN = class KN {
    constructor({ enableHWA: U = !1 } = {}) {
      R(this, Ls, !1);
      this.constructor === KN && sl('Cannot initialize BaseCanvasFactory.'),
        e(this, Ls, U);
    }
    create(U, l) {
      if (U <= 0 || l <= 0) throw new Error('Invalid canvas size');
      const d = this._createCanvas(U, l);
      return {
        canvas: d,
        context: d.getContext('2d', { willReadFrequently: !s(this, Ls) }),
      };
    }
    reset(U, l, d) {
      if (!U.canvas) throw new Error('Canvas is not specified');
      if (l <= 0 || d <= 0) throw new Error('Invalid canvas size');
      (U.canvas.width = l), (U.canvas.height = d);
    }
    destroy(U) {
      if (!U.canvas) throw new Error('Canvas is not specified');
      (U.canvas.width = 0),
        (U.canvas.height = 0),
        (U.canvas = null),
        (U.context = null);
    }
    _createCanvas(U, l) {
      sl('Abstract method `_createCanvas` called.');
    }
  };
  Ls = new WeakMap();
  let RW = KN;
  class NW {
    constructor({ baseUrl: U = null, isCompressed: l = !0 }) {
      this.constructor === NW && sl('Cannot initialize BaseCMapReaderFactory.'),
        (this.baseUrl = U),
        (this.isCompressed = l);
    }
    async fetch({ name: U }) {
      if (!this.baseUrl)
        throw new Error(
          'The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.',
        );
      if (!U) throw new Error('CMap name must be specified.');
      const l = this.baseUrl + U + (this.isCompressed ? '.bcmap' : ''),
        d = this.isCompressed ? fR.BINARY : fR.NONE;
      return this._fetchData(l, d).catch((Z) => {
        throw new Error(
          `Unable to load ${this.isCompressed ? 'binary ' : ''}CMap at: ${l}`,
        );
      });
    }
    _fetchData(U, l) {
      sl('Abstract method `_fetchData` called.');
    }
  }
  class hW {
    constructor({ baseUrl: U = null }) {
      this.constructor === hW &&
        sl('Cannot initialize BaseStandardFontDataFactory.'),
        (this.baseUrl = U);
    }
    async fetch({ filename: U }) {
      if (!this.baseUrl)
        throw new Error(
          'The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.',
        );
      if (!U) throw new Error('Font filename must be specified.');
      const l = `${this.baseUrl}${U}`;
      return this._fetchData(l).catch((d) => {
        throw new Error(`Unable to load font data at: ${l}`);
      });
    }
    _fetchData(U) {
      sl('Abstract method `_fetchData` called.');
    }
  }
  class UN {
    constructor() {
      this.constructor === UN && sl('Cannot initialize BaseSVGFactory.');
    }
    create(U, l, d = !1) {
      if (U <= 0 || l <= 0) throw new Error('Invalid SVG dimensions');
      const Z = this._createSVG('svg:svg');
      return (
        Z.setAttribute('version', '1.1'),
        d ||
          (Z.setAttribute('width', `${U}px`),
          Z.setAttribute('height', `${l}px`)),
        Z.setAttribute('preserveAspectRatio', 'none'),
        Z.setAttribute('viewBox', `0 0 ${U} ${l}`),
        Z
      );
    }
    createElement(U) {
      if (typeof U != 'string') throw new Error('Invalid SVG element type');
      return this._createSVG(U);
    }
    _createSVG(U) {
      sl('Abstract method `_createSVG` called.');
    }
  }
  const Bd = 'http://www.w3.org/2000/svg';
  let Q0 =
    ((Ed = class {}),
    f(Ed, 'CSS', 96),
    f(Ed, 'PDF', 72),
    f(Ed, 'PDF_TO_CSS_UNITS', Ed.CSS / Ed.PDF),
    Ed);
  class oM extends iW {
    constructor({ docId: l, ownerDocument: d = globalThis.document } = {}) {
      super();
      R(this, El);
      R(this, pZ);
      R(this, oZ);
      R(this, R0);
      R(this, HW);
      R(this, zs);
      R(this, BZ);
      R(this, yt);
      R(this, Lt);
      R(this, ks);
      R(this, zt);
      R(this, ot, void 0);
      R(this, cd, void 0);
      R(this, Cd, void 0);
      R(this, iU, void 0);
      R(this, vW, void 0);
      R(this, Bt, 0);
      e(this, Cd, l), e(this, iU, d);
    }
    addFilter(l) {
      if (!l) return 'none';
      let d = s(this, El, UU).get(l);
      if (d) return d;
      const [Z, t, F] = b(this, R0, RR).call(this, l),
        c = l.length === 1 ? Z : `${Z}${t}${F}`;
      if (((d = s(this, El, UU).get(c)), d))
        return s(this, El, UU).set(l, d), d;
      const n = `g_${s(this, Cd)}_transfer_map_${hU(this, Bt)._++}`,
        V = `url(#${n})`;
      s(this, El, UU).set(l, V), s(this, El, UU).set(c, V);
      const W = b(this, BZ, ts).call(this, n);
      return b(this, Lt, OV).call(this, Z, t, F, W), V;
    }
    addHCMFilter(l, d) {
      var N;
      const Z = `${l}-${d}`,
        t = 'base';
      let F = s(this, pZ, ds).get(t);
      if (
        (F == null ? void 0 : F.key) === Z ||
        (F
          ? ((N = F.filter) == null || N.remove(),
            (F.key = Z),
            (F.url = 'none'),
            (F.filter = null))
          : ((F = { key: Z, url: 'none', filter: null }),
            s(this, pZ, ds).set(t, F)),
        !l || !d)
      )
        return F.url;
      const c = b(this, zt, gV).call(this, l);
      l = g.makeHexColor(...c);
      const n = b(this, zt, gV).call(this, d);
      if (
        ((d = g.makeHexColor(...n)),
        (s(this, oZ, Zs).style.color = ''),
        (l === '#000000' && d === '#ffffff') || l === d)
      )
        return F.url;
      const V = new Array(256);
      for (let M = 0; M <= 255; M++) {
        const J = M / 255;
        V[M] = J <= 0.03928 ? J / 12.92 : ((J + 0.055) / 1.055) ** 2.4;
      }
      const W = V.join(','),
        a = `g_${s(this, Cd)}_hcm_filter`,
        i = (F.filter = b(this, BZ, ts).call(this, a));
      b(this, Lt, OV).call(this, W, W, W, i), b(this, zs, $N).call(this, i);
      const h = (M, J) => {
        const m = c[M] / 255,
          G = n[M] / 255,
          T = new Array(J + 1);
        for (let u = 0; u <= J; u++) T[u] = m + (u / J) * (G - m);
        return T.join(',');
      };
      return (
        b(this, Lt, OV).call(this, h(0, 5), h(1, 5), h(2, 5), i),
        (F.url = `url(#${a})`),
        F.url
      );
    }
    addAlphaFilter(l) {
      let d = s(this, El, UU).get(l);
      if (d) return d;
      const [Z] = b(this, R0, RR).call(this, [l]),
        t = `alpha_${Z}`;
      if (((d = s(this, El, UU).get(t)), d))
        return s(this, El, UU).set(l, d), d;
      const F = `g_${s(this, Cd)}_alpha_map_${hU(this, Bt)._++}`,
        c = `url(#${F})`;
      s(this, El, UU).set(l, c), s(this, El, UU).set(t, c);
      const n = b(this, BZ, ts).call(this, F);
      return b(this, ks, lh).call(this, Z, n), c;
    }
    addLuminosityFilter(l) {
      let d = s(this, El, UU).get(l || 'luminosity');
      if (d) return d;
      let Z, t;
      if (
        (l
          ? (([Z] = b(this, R0, RR).call(this, [l])), (t = `luminosity_${Z}`))
          : (t = 'luminosity'),
        (d = s(this, El, UU).get(t)),
        d)
      )
        return s(this, El, UU).set(l, d), d;
      const F = `g_${s(this, Cd)}_luminosity_map_${hU(this, Bt)._++}`,
        c = `url(#${F})`;
      s(this, El, UU).set(l, c), s(this, El, UU).set(t, c);
      const n = b(this, BZ, ts).call(this, F);
      return (
        b(this, HW, am).call(this, n), l && b(this, ks, lh).call(this, Z, n), c
      );
    }
    addHighlightHCMFilter(l, d, Z, t, F) {
      var G;
      const c = `${d}-${Z}-${t}-${F}`;
      let n = s(this, pZ, ds).get(l);
      if (
        (n == null ? void 0 : n.key) === c ||
        (n
          ? ((G = n.filter) == null || G.remove(),
            (n.key = c),
            (n.url = 'none'),
            (n.filter = null))
          : ((n = { key: c, url: 'none', filter: null }),
            s(this, pZ, ds).set(l, n)),
        !d || !Z)
      )
        return n.url;
      const [V, W] = [d, Z].map(b(this, zt, gV).bind(this));
      let a = Math.round(0.2126 * V[0] + 0.7152 * V[1] + 0.0722 * V[2]),
        i = Math.round(0.2126 * W[0] + 0.7152 * W[1] + 0.0722 * W[2]),
        [h, N] = [t, F].map(b(this, zt, gV).bind(this));
      i < a && ([a, i, h, N] = [i, a, N, h]),
        (s(this, oZ, Zs).style.color = '');
      const M = (T, u, X) => {
          const S = new Array(256),
            p = (i - a) / X,
            L = T / 255,
            Y = (u - T) / (255 * X);
          let o = 0;
          for (let y = 0; y <= X; y++) {
            const D = Math.round(a + y * p),
              I = L + y * Y;
            for (let O = o; O <= D; O++) S[O] = I;
            o = D + 1;
          }
          for (let y = o; y < 256; y++) S[y] = S[o - 1];
          return S.join(',');
        },
        J = `g_${s(this, Cd)}_hcm_${l}_filter`,
        m = (n.filter = b(this, BZ, ts).call(this, J));
      return (
        b(this, zs, $N).call(this, m),
        b(this, Lt, OV).call(
          this,
          M(h[0], N[0], 5),
          M(h[1], N[1], 5),
          M(h[2], N[2], 5),
          m,
        ),
        (n.url = `url(#${J})`),
        n.url
      );
    }
    destroy(l = !1) {
      (l && s(this, pZ, ds).size !== 0) ||
        (s(this, cd) &&
          (s(this, cd).parentNode.parentNode.remove(), e(this, cd, null)),
        s(this, ot) && (s(this, ot).clear(), e(this, ot, null)),
        e(this, Bt, 0));
    }
  }
  (ot = new WeakMap()),
    (cd = new WeakMap()),
    (Cd = new WeakMap()),
    (iU = new WeakMap()),
    (vW = new WeakMap()),
    (Bt = new WeakMap()),
    (El = new WeakSet()),
    (UU = function () {
      return s(this, ot) || e(this, ot, new Map());
    }),
    (pZ = new WeakSet()),
    (ds = function () {
      return s(this, vW) || e(this, vW, new Map());
    }),
    (oZ = new WeakSet()),
    (Zs = function () {
      if (!s(this, cd)) {
        const l = s(this, iU).createElement('div'),
          { style: d } = l;
        (d.visibility = 'hidden'),
          (d.contain = 'strict'),
          (d.width = d.height = 0),
          (d.position = 'absolute'),
          (d.top = d.left = 0),
          (d.zIndex = -1);
        const Z = s(this, iU).createElementNS(Bd, 'svg');
        Z.setAttribute('width', 0),
          Z.setAttribute('height', 0),
          e(this, cd, s(this, iU).createElementNS(Bd, 'defs')),
          l.append(Z),
          Z.append(s(this, cd)),
          s(this, iU).body.append(l);
      }
      return s(this, cd);
    }),
    (R0 = new WeakSet()),
    (RR = function (l) {
      if (l.length === 1) {
        const V = l[0],
          W = new Array(256);
        for (let i = 0; i < 256; i++) W[i] = V[i] / 255;
        const a = W.join(',');
        return [a, a, a];
      }
      const [d, Z, t] = l,
        F = new Array(256),
        c = new Array(256),
        n = new Array(256);
      for (let V = 0; V < 256; V++)
        (F[V] = d[V] / 255), (c[V] = Z[V] / 255), (n[V] = t[V] / 255);
      return [F.join(','), c.join(','), n.join(',')];
    }),
    (HW = new WeakSet()),
    (am = function (l) {
      const d = s(this, iU).createElementNS(Bd, 'feColorMatrix');
      d.setAttribute('type', 'matrix'),
        d.setAttribute(
          'values',
          '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0',
        ),
        l.append(d);
    }),
    (zs = new WeakSet()),
    ($N = function (l) {
      const d = s(this, iU).createElementNS(Bd, 'feColorMatrix');
      d.setAttribute('type', 'matrix'),
        d.setAttribute(
          'values',
          '0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0',
        ),
        l.append(d);
    }),
    (BZ = new WeakSet()),
    (ts = function (l) {
      const d = s(this, iU).createElementNS(Bd, 'filter');
      return (
        d.setAttribute('color-interpolation-filters', 'sRGB'),
        d.setAttribute('id', l),
        s(this, oZ, Zs).append(d),
        d
      );
    }),
    (yt = new WeakSet()),
    (jV = function (l, d, Z) {
      const t = s(this, iU).createElementNS(Bd, d);
      t.setAttribute('type', 'discrete'),
        t.setAttribute('tableValues', Z),
        l.append(t);
    }),
    (Lt = new WeakSet()),
    (OV = function (l, d, Z, t) {
      const F = s(this, iU).createElementNS(Bd, 'feComponentTransfer');
      t.append(F),
        b(this, yt, jV).call(this, F, 'feFuncR', l),
        b(this, yt, jV).call(this, F, 'feFuncG', d),
        b(this, yt, jV).call(this, F, 'feFuncB', Z);
    }),
    (ks = new WeakSet()),
    (lh = function (l, d) {
      const Z = s(this, iU).createElementNS(Bd, 'feComponentTransfer');
      d.append(Z), b(this, yt, jV).call(this, Z, 'feFuncA', l);
    }),
    (zt = new WeakSet()),
    (gV = function (l) {
      return (
        (s(this, oZ, Zs).style.color = l),
        cN(getComputedStyle(s(this, oZ, Zs)).getPropertyValue('color'))
      );
    });
  class BM extends RW {
    constructor({
      ownerDocument: U = globalThis.document,
      enableHWA: l = !1,
    } = {}) {
      super({ enableHWA: l }), (this._document = U);
    }
    _createCanvas(U, l) {
      const d = this._document.createElement('canvas');
      return (d.width = U), (d.height = l), d;
    }
  }
  async function bW(Q, U = 'text') {
    if (as(Q, document.baseURI)) {
      const l = await fetch(Q);
      if (!l.ok) throw new Error(l.statusText);
      switch (U) {
        case 'arraybuffer':
          return l.arrayBuffer();
        case 'blob':
          return l.blob();
        case 'json':
          return l.json();
      }
      return l.text();
    }
    return new Promise((l, d) => {
      const Z = new XMLHttpRequest();
      Z.open('GET', Q, !0),
        (Z.responseType = U),
        (Z.onreadystatechange = () => {
          if (Z.readyState === XMLHttpRequest.DONE) {
            if (Z.status === 200 || Z.status === 0) {
              switch (U) {
                case 'arraybuffer':
                case 'blob':
                case 'json':
                  l(Z.response);
                  return;
              }
              l(Z.responseText);
              return;
            }
            d(new Error(Z.statusText));
          }
        }),
        Z.send(null);
    });
  }
  class Sb extends NW {
    _fetchData(U, l) {
      return bW(U, this.isCompressed ? 'arraybuffer' : 'text').then((d) => ({
        cMapData: d instanceof ArrayBuffer ? new Uint8Array(d) : aW(d),
        compressionType: l,
      }));
    }
  }
  class Xb extends hW {
    _fetchData(U) {
      return bW(U, 'arraybuffer').then((l) => new Uint8Array(l));
    }
  }
  let dN = class extends UN {
    _createSVG(U) {
      return document.createElementNS(Bd, U);
    }
  };
  class Ws {
    constructor({
      viewBox: U,
      scale: l,
      rotation: d,
      offsetX: Z = 0,
      offsetY: t = 0,
      dontFlip: F = !1,
    }) {
      (this.viewBox = U),
        (this.scale = l),
        (this.rotation = d),
        (this.offsetX = Z),
        (this.offsetY = t);
      const c = (U[2] + U[0]) / 2,
        n = (U[3] + U[1]) / 2;
      let V, W, a, i;
      switch (((d %= 360), d < 0 && (d += 360), d)) {
        case 180:
          (V = -1), (W = 0), (a = 0), (i = 1);
          break;
        case 90:
          (V = 0), (W = 1), (a = 1), (i = 0);
          break;
        case 270:
          (V = 0), (W = -1), (a = -1), (i = 0);
          break;
        case 0:
          (V = 1), (W = 0), (a = 0), (i = -1);
          break;
        default:
          throw new Error(
            'PageViewport: Invalid rotation, must be a multiple of 90 degrees.',
          );
      }
      F && ((a = -a), (i = -i));
      let h, N, M, J;
      V === 0
        ? ((h = Math.abs(n - U[1]) * l + Z),
          (N = Math.abs(c - U[0]) * l + t),
          (M = (U[3] - U[1]) * l),
          (J = (U[2] - U[0]) * l))
        : ((h = Math.abs(c - U[0]) * l + Z),
          (N = Math.abs(n - U[1]) * l + t),
          (M = (U[2] - U[0]) * l),
          (J = (U[3] - U[1]) * l)),
        (this.transform = [
          V * l,
          W * l,
          a * l,
          i * l,
          h - V * l * c - a * l * n,
          N - W * l * c - i * l * n,
        ]),
        (this.width = M),
        (this.height = J);
    }
    get rawDims() {
      const { viewBox: U } = this;
      return Zl(this, 'rawDims', {
        pageWidth: U[2] - U[0],
        pageHeight: U[3] - U[1],
        pageX: U[0],
        pageY: U[1],
      });
    }
    clone({
      scale: U = this.scale,
      rotation: l = this.rotation,
      offsetX: d = this.offsetX,
      offsetY: Z = this.offsetY,
      dontFlip: t = !1,
    } = {}) {
      return new Ws({
        viewBox: this.viewBox.slice(),
        scale: U,
        rotation: l,
        offsetX: d,
        offsetY: Z,
        dontFlip: t,
      });
    }
    convertToViewportPoint(U, l) {
      return g.applyTransform([U, l], this.transform);
    }
    convertToViewportRectangle(U) {
      const l = g.applyTransform([U[0], U[1]], this.transform),
        d = g.applyTransform([U[2], U[3]], this.transform);
      return [l[0], l[1], d[0], d[1]];
    }
    convertToPdfPoint(U, l) {
      return g.applyInverseTransform([U, l], this.transform);
    }
  }
  let ZN = class extends GZ {
    constructor(U, l = 0) {
      super(U, 'RenderingCancelledException'), (this.extraDelay = l);
    }
  };
  function tN(Q) {
    const U = Q.length;
    let l = 0;
    for (; l < U && Q[l].trim() === ''; ) l++;
    return Q.substring(l, l + 5).toLowerCase() === 'data:';
  }
  function FN(Q) {
    return typeof Q == 'string' && /\.pdf$/i.test(Q);
  }
  function yM(Q) {
    return ([Q] = Q.split(/[#?]/, 1)), Q.substring(Q.lastIndexOf('/') + 1);
  }
  function LM(Q, U = 'document.pdf') {
    if (typeof Q != 'string') return U;
    if (tN(Q))
      return (
        _('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'),
        U
      );
    const l = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/,
      d = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i,
      Z = l.exec(Q);
    let t = d.exec(Z[1]) || d.exec(Z[2]) || d.exec(Z[3]);
    if (t && ((t = t[0]), t.includes('%')))
      try {
        t = d.exec(decodeURIComponent(t))[0];
      } catch {}
    return t || U;
  }
  class Yb {
    constructor() {
      f(this, 'started', Object.create(null));
      f(this, 'times', []);
    }
    time(U) {
      U in this.started && _(`Timer is already running for ${U}`),
        (this.started[U] = Date.now());
    }
    timeEnd(U) {
      U in this.started || _(`Timer has not been started for ${U}`),
        this.times.push({ name: U, start: this.started[U], end: Date.now() }),
        delete this.started[U];
    }
    toString() {
      const U = [];
      let l = 0;
      for (const { name: d } of this.times) l = Math.max(d.length, l);
      for (const { name: d, start: Z, end: t } of this.times)
        U.push(`${d.padEnd(l)} ${t - Z}ms
`);
      return U.join('');
    }
  }
  function as(Q, U) {
    try {
      const { protocol: l } = U ? new URL(Q, U) : new URL(Q);
      return l === 'http:' || l === 'https:';
    } catch {
      return !1;
    }
  }
  function VU(Q) {
    Q.preventDefault();
  }
  function ub(Q) {
    console.log('Deprecated API usage: ' + Q);
  }
  let pb,
    ob = class {
      static toDateObject(U) {
        if (!U || typeof U != 'string') return null;
        pb ||
          (pb = new RegExp(
            "^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?",
          ));
        const l = pb.exec(U);
        if (!l) return null;
        const d = parseInt(l[1], 10);
        let Z = parseInt(l[2], 10);
        Z = Z >= 1 && Z <= 12 ? Z - 1 : 0;
        let t = parseInt(l[3], 10);
        t = t >= 1 && t <= 31 ? t : 1;
        let F = parseInt(l[4], 10);
        F = F >= 0 && F <= 23 ? F : 0;
        let c = parseInt(l[5], 10);
        c = c >= 0 && c <= 59 ? c : 0;
        let n = parseInt(l[6], 10);
        n = n >= 0 && n <= 59 ? n : 0;
        const V = l[7] || 'Z';
        let W = parseInt(l[8], 10);
        W = W >= 0 && W <= 23 ? W : 0;
        let a = parseInt(l[9], 10) || 0;
        return (
          (a = a >= 0 && a <= 59 ? a : 0),
          V === '-' ? ((F += W), (c += a)) : V === '+' && ((F -= W), (c -= a)),
          new Date(Date.UTC(d, Z, t, F, c, n))
        );
      }
    };
  function zM(Q, { scale: U = 1, rotation: l = 0 }) {
    const { width: d, height: Z } = Q.attributes.style,
      t = [0, 0, parseInt(d), parseInt(Z)];
    return new Ws({ viewBox: t, scale: U, rotation: l });
  }
  function cN(Q) {
    if (Q.startsWith('#')) {
      const U = parseInt(Q.slice(1), 16);
      return [(U & 16711680) >> 16, (U & 65280) >> 8, U & 255];
    }
    return Q.startsWith('rgb(')
      ? Q.slice(4, -1)
          .split(',')
          .map((U) => parseInt(U))
      : Q.startsWith('rgba(')
        ? Q.slice(5, -1)
            .split(',')
            .map((U) => parseInt(U))
            .slice(0, 3)
        : (_(`Not a valid color format: "${Q}"`), [0, 0, 0]);
  }
  function kM(Q) {
    const U = document.createElement('span');
    (U.style.visibility = 'hidden'), document.body.append(U);
    for (const l of Q.keys()) {
      U.style.color = l;
      const d = window.getComputedStyle(U).color;
      Q.set(l, cN(d));
    }
    U.remove();
  }
  function hl(Q) {
    const { a: U, b: l, c: d, d: Z, e: t, f: F } = Q.getTransform();
    return [U, l, d, Z, t, F];
  }
  function yd(Q) {
    const {
      a: U,
      b: l,
      c: d,
      d: Z,
      e: t,
      f: F,
    } = Q.getTransform().invertSelf();
    return [U, l, d, Z, t, F];
  }
  function Tt(Q, U, l = !1, d = !0) {
    if (U instanceof Ws) {
      const { pageWidth: Z, pageHeight: t } = U.rawDims,
        { style: F } = Q,
        c = nU.isCSSRoundSupported,
        n = `var(--scale-factor) * ${Z}px`,
        V = `var(--scale-factor) * ${t}px`,
        W = c ? `round(${n}, 1px)` : `calc(${n})`,
        a = c ? `round(${V}, 1px)` : `calc(${V})`;
      !l || U.rotation % 180 === 0
        ? ((F.width = W), (F.height = a))
        : ((F.width = a), (F.height = W));
    }
    d && Q.setAttribute('data-main-rotation', U.rotation);
  }
  const qW = class qW {
    constructor(U) {
      R(this, fW);
      R(this, AW);
      R(this, N0);
      R(this, _W);
      R(this, Ds);
      R(this, kt, null);
      R(this, Dt, null);
      R(this, eU, void 0);
      R(this, It, null);
      e(this, eU, U);
    }
    render() {
      const U = e(this, kt, document.createElement('div'));
      (U.className = 'editToolbar'), U.setAttribute('role', 'toolbar');
      const l = s(this, eU)._uiManager._signal;
      U.addEventListener('contextmenu', VU, { signal: l }),
        U.addEventListener('pointerdown', b(qW, PW, im), { signal: l });
      const d = e(this, It, document.createElement('div'));
      (d.className = 'buttons'), U.append(d);
      const Z = s(this, eU).toolbarPosition;
      if (Z) {
        const { style: t } = U,
          F = s(this, eU)._uiManager.direction === 'ltr' ? 1 - Z[0] : Z[0];
        (t.insetInlineEnd = `${100 * F}%`),
          (t.top = `calc(${100 * Z[1]}% + var(--editor-toolbar-vert-offset))`);
      }
      return b(this, _W, hm).call(this), U;
    }
    hide() {
      var U;
      s(this, kt).classList.add('hidden'),
        (U = s(this, Dt)) == null || U.hideDropdown();
    }
    show() {
      s(this, kt).classList.remove('hidden');
    }
    addAltTextButton(U) {
      b(this, N0, NR).call(this, U), s(this, It).prepend(U, s(this, Ds, Uh));
    }
    addColorPicker(U) {
      e(this, Dt, U);
      const l = U.renderButton();
      b(this, N0, NR).call(this, l), s(this, It).prepend(l, s(this, Ds, Uh));
    }
    remove() {
      var U;
      s(this, kt).remove(),
        (U = s(this, Dt)) == null || U.destroy(),
        e(this, Dt, null);
    }
  };
  (kt = new WeakMap()),
    (Dt = new WeakMap()),
    (eU = new WeakMap()),
    (It = new WeakMap()),
    (PW = new WeakSet()),
    (im = function (U) {
      U.stopPropagation();
    }),
    (fW = new WeakSet()),
    (Rm = function (U) {
      (s(this, eU)._focusEventsAllowed = !1),
        U.preventDefault(),
        U.stopPropagation();
    }),
    (AW = new WeakSet()),
    (Nm = function (U) {
      (s(this, eU)._focusEventsAllowed = !0),
        U.preventDefault(),
        U.stopPropagation();
    }),
    (N0 = new WeakSet()),
    (NR = function (U) {
      const l = s(this, eU)._uiManager._signal;
      U.addEventListener('focusin', b(this, fW, Rm).bind(this), {
        capture: !0,
        signal: l,
      }),
        U.addEventListener('focusout', b(this, AW, Nm).bind(this), {
          capture: !0,
          signal: l,
        }),
        U.addEventListener('contextmenu', VU, { signal: l });
    }),
    (_W = new WeakSet()),
    (hm = function () {
      const U = document.createElement('button');
      (U.className = 'delete'),
        (U.tabIndex = 0),
        U.setAttribute(
          'data-l10n-id',
          `pdfjs-editor-remove-${s(this, eU).editorType}-button`,
        ),
        b(this, N0, NR).call(this, U),
        U.addEventListener(
          'click',
          (l) => {
            s(this, eU)._uiManager.delete();
          },
          { signal: s(this, eU)._uiManager._signal },
        ),
        s(this, It).append(U);
    }),
    (Ds = new WeakSet()),
    (Uh = function () {
      const U = document.createElement('div');
      return (U.className = 'divider'), U;
    }),
    R(qW, PW);
  let sN = qW;
  class DM {
    constructor(U) {
      R(this, $W);
      R(this, la);
      R(this, Ua);
      R(this, Is, null);
      R(this, Et, null);
      R(this, Ct, void 0);
      e(this, Ct, U);
    }
    show(U, l, d) {
      const [Z, t] = b(this, la, em).call(this, l, d),
        { style: F } = s(this, Et) || e(this, Et, b(this, $W, bm).call(this));
      U.append(s(this, Et)),
        (F.insetInlineEnd = `${100 * Z}%`),
        (F.top = `calc(${100 * t}% + var(--editor-toolbar-vert-offset))`);
    }
    hide() {
      s(this, Et).remove();
    }
  }
  (Is = new WeakMap()),
    (Et = new WeakMap()),
    (Ct = new WeakMap()),
    ($W = new WeakSet()),
    (bm = function () {
      const U = e(this, Et, document.createElement('div'));
      (U.className = 'editToolbar'),
        U.setAttribute('role', 'toolbar'),
        U.addEventListener('contextmenu', VU, { signal: s(this, Ct)._signal });
      const l = e(this, Is, document.createElement('div'));
      return (
        (l.className = 'buttons'), U.append(l), b(this, Ua, mm).call(this), U
      );
    }),
    (la = new WeakSet()),
    (em = function (U, l) {
      let d = 0,
        Z = 0;
      for (const t of U) {
        const F = t.y + t.height;
        if (F < d) continue;
        const c = t.x + (l ? t.width : 0);
        if (F > d) {
          (Z = c), (d = F);
          continue;
        }
        l ? c > Z && (Z = c) : c < Z && (Z = c);
      }
      return [l ? 1 - Z : Z, d];
    }),
    (Ua = new WeakSet()),
    (mm = function () {
      const U = document.createElement('button');
      (U.className = 'highlightButton'),
        (U.tabIndex = 0),
        U.setAttribute('data-l10n-id', 'pdfjs-highlight-floating-button1');
      const l = document.createElement('span');
      U.append(l),
        (l.className = 'visuallyHidden'),
        l.setAttribute('data-l10n-id', 'pdfjs-highlight-floating-button-label');
      const d = s(this, Ct)._signal;
      U.addEventListener('contextmenu', VU, { signal: d }),
        U.addEventListener(
          'click',
          () => {
            s(this, Ct).highlightSelection('floating_button');
          },
          { signal: d },
        ),
        s(this, Is).append(U);
    });
  function eW(Q, U, l) {
    for (const d of l) U.addEventListener(d, Q[d].bind(Q));
  }
  function IM(Q) {
    return Math.round(Math.min(255, Math.max(1, 255 * Q)))
      .toString(16)
      .padStart(2, '0');
  }
  class EM {
    constructor() {
      R(this, da, 0);
    }
    get id() {
      return `${NM}${hU(this, da)._++}`;
    }
  }
  da = new WeakMap();
  const vN = class vN {
    constructor() {
      R(this, Cs);
      R(this, Es, pM());
      R(this, Za, 0);
      R(this, BU, null);
    }
    static get _isSVGFittingCanvas() {
      const U =
          'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>',
        d = new OffscreenCanvas(1, 3).getContext('2d', {
          willReadFrequently: !0,
        }),
        Z = new Image();
      Z.src = U;
      const t = Z.decode().then(
        () => (
          d.drawImage(Z, 0, 0, 1, 1, 0, 0, 1, 3),
          new Uint32Array(d.getImageData(0, 0, 1, 1).data.buffer)[0] === 0
        ),
      );
      return Zl(this, '_isSVGFittingCanvas', t);
    }
    async getFromFile(U) {
      const { lastModified: l, name: d, size: Z, type: t } = U;
      return b(this, Cs, dh).call(this, `${l}_${d}_${Z}_${t}`, U);
    }
    async getFromUrl(U) {
      return b(this, Cs, dh).call(this, U, U);
    }
    async getFromId(U) {
      s(this, BU) || e(this, BU, new Map());
      const l = s(this, BU).get(U);
      return l
        ? l.bitmap
          ? ((l.refCounter += 1), l)
          : l.file
            ? this.getFromFile(l.file)
            : this.getFromUrl(l.url)
        : null;
    }
    getSvgUrl(U) {
      const l = s(this, BU).get(U);
      return l != null && l.isSvg ? l.svgUrl : null;
    }
    deleteId(U) {
      s(this, BU) || e(this, BU, new Map());
      const l = s(this, BU).get(U);
      l && ((l.refCounter -= 1), l.refCounter === 0 && (l.bitmap = null));
    }
    isValidId(U) {
      return U.startsWith(`image_${s(this, Es)}_`);
    }
  };
  (Es = new WeakMap()),
    (Za = new WeakMap()),
    (BU = new WeakMap()),
    (Cs = new WeakSet()),
    (dh = async function (U, l) {
      s(this, BU) || e(this, BU, new Map());
      let d = s(this, BU).get(U);
      if (d === null) return null;
      if (d != null && d.bitmap) return (d.refCounter += 1), d;
      try {
        d ||
          (d = {
            bitmap: null,
            id: `image_${s(this, Es)}_${hU(this, Za)._++}`,
            refCounter: 0,
            isSvg: !1,
          });
        let Z;
        if (
          (typeof l == 'string'
            ? ((d.url = l), (Z = await bW(l, 'blob')))
            : (Z = d.file = l),
          Z.type === 'image/svg+xml')
        ) {
          const t = vN._isSVGFittingCanvas,
            F = new FileReader(),
            c = new Image(),
            n = new Promise((V, W) => {
              (c.onload = () => {
                (d.bitmap = c), (d.isSvg = !0), V();
              }),
                (F.onload = async () => {
                  const a = (d.svgUrl = F.result);
                  c.src = (await t)
                    ? `${a}#svgView(preserveAspectRatio(none))`
                    : a;
                }),
                (c.onerror = F.onerror = W);
            });
          F.readAsDataURL(Z), await n;
        } else d.bitmap = await createImageBitmap(Z);
        d.refCounter = 1;
      } catch (Z) {
        console.error(Z), (d = null);
      }
      return s(this, BU).set(U, d), d && s(this, BU).set(d.id, d), d;
    });
  let QN = vN;
  class CM {
    constructor(U = 128) {
      R(this, Cl, []);
      R(this, yZ, !1);
      R(this, rs, void 0);
      R(this, rl, -1);
      e(this, rs, U);
    }
    add({
      cmd: U,
      undo: l,
      post: d,
      mustExec: Z,
      type: t = NaN,
      overwriteIfSameType: F = !1,
      keepUndo: c = !1,
    }) {
      if ((Z && U(), s(this, yZ))) return;
      const n = { cmd: U, undo: l, post: d, type: t };
      if (s(this, rl) === -1) {
        s(this, Cl).length > 0 && (s(this, Cl).length = 0),
          e(this, rl, 0),
          s(this, Cl).push(n);
        return;
      }
      if (F && s(this, Cl)[s(this, rl)].type === t) {
        c && (n.undo = s(this, Cl)[s(this, rl)].undo),
          (s(this, Cl)[s(this, rl)] = n);
        return;
      }
      const V = s(this, rl) + 1;
      V === s(this, rs)
        ? s(this, Cl).splice(0, 1)
        : (e(this, rl, V), V < s(this, Cl).length && s(this, Cl).splice(V)),
        s(this, Cl).push(n);
    }
    undo() {
      if (s(this, rl) === -1) return;
      e(this, yZ, !0);
      const { undo: U, post: l } = s(this, Cl)[s(this, rl)];
      U(), l == null || l(), e(this, yZ, !1), e(this, rl, s(this, rl) - 1);
    }
    redo() {
      if (s(this, rl) < s(this, Cl).length - 1) {
        e(this, rl, s(this, rl) + 1), e(this, yZ, !0);
        const { cmd: U, post: l } = s(this, Cl)[s(this, rl)];
        U(), l == null || l(), e(this, yZ, !1);
      }
    }
    hasSomethingToUndo() {
      return s(this, rl) !== -1;
    }
    hasSomethingToRedo() {
      return s(this, rl) < s(this, Cl).length - 1;
    }
    destroy() {
      e(this, Cl, null);
    }
  }
  (Cl = new WeakMap()),
    (yZ = new WeakMap()),
    (rs = new WeakMap()),
    (rl = new WeakMap());
  class is {
    constructor(U) {
      R(this, ta);
      (this.buffer = []),
        (this.callbacks = new Map()),
        (this.allKeys = new Set());
      const { isMac: l } = nU.platform;
      for (const [d, Z, t = {}] of U)
        for (const F of d) {
          const c = F.startsWith('mac+');
          l && c
            ? (this.callbacks.set(F.slice(4), { callback: Z, options: t }),
              this.allKeys.add(F.split('+').at(-1)))
            : !l &&
              !c &&
              (this.callbacks.set(F, { callback: Z, options: t }),
              this.allKeys.add(F.split('+').at(-1)));
        }
    }
    exec(U, l) {
      if (!this.allKeys.has(l.key)) return;
      const d = this.callbacks.get(b(this, ta, Mm).call(this, l));
      if (!d) return;
      const {
        callback: Z,
        options: { bubbles: t = !1, args: F = [], checker: c = null },
      } = d;
      (c && !c(U, l)) ||
        (Z.bind(U, ...F, l)(), t || (l.stopPropagation(), l.preventDefault()));
    }
  }
  (ta = new WeakSet()),
    (Mm = function (U) {
      U.altKey && this.buffer.push('alt'),
        U.ctrlKey && this.buffer.push('ctrl'),
        U.metaKey && this.buffer.push('meta'),
        U.shiftKey && this.buffer.push('shift'),
        this.buffer.push(U.key);
      const l = this.buffer.join('+');
      return (this.buffer.length = 0), l;
    });
  const Fa = class Fa {
    get _colors() {
      const U = new Map([
        ['CanvasText', null],
        ['Canvas', null],
      ]);
      return kM(U), Zl(this, '_colors', U);
    }
    convert(U) {
      const l = cN(U);
      if (!window.matchMedia('(forced-colors: active)').matches) return l;
      for (const [d, Z] of this._colors)
        if (Z.every((t, F) => t === l[F])) return Fa._colorsMapping.get(d);
      return l;
    }
    getHexCode(U) {
      const l = this._colors.get(U);
      return l ? g.makeHexColor(...l) : U;
    }
  };
  f(
    Fa,
    '_colorsMapping',
    new Map([
      ['CanvasText', [0, 0, 0]],
      ['Canvas', [255, 255, 255]],
    ]),
  );
  let nN = Fa,
    Rs =
      ((DZ = class {
        constructor(U, l, d, Z, t, F, c, n, V) {
          R(this, G0);
          R(this, sa);
          R(this, Qa);
          R(this, T0);
          R(this, na);
          R(this, Va);
          R(this, Wa);
          R(this, tQ);
          R(this, aa);
          R(this, FQ);
          R(this, cQ);
          R(this, ia);
          R(this, gl);
          R(this, Wd);
          R(this, Ra);
          R(this, Na);
          R(this, sQ);
          R(this, ha);
          R(this, Ot);
          R(this, QQ);
          R(this, h0, new AbortController());
          R(this, mU, null);
          R(this, yl, new Map());
          R(this, jl, new Map());
          R(this, b0, null);
          R(this, rd, null);
          R(this, e0, null);
          R(this, xU, new CM());
          R(this, m0, 0);
          R(this, rt, new Set());
          R(this, sd, null);
          R(this, jU, null);
          R(this, wt, new Set());
          R(this, ws, !1);
          R(this, xs, null);
          R(this, Qd, null);
          R(this, M0, null);
          R(this, LZ, !1);
          R(this, nd, null);
          R(this, ca, new EM());
          R(this, zZ, !1);
          R(this, js, !1);
          R(this, xt, null);
          R(this, Os, null);
          R(this, J0, null);
          R(this, Ol, ll.NONE);
          R(this, cl, new Set());
          R(this, wd, null);
          R(this, jt, null);
          R(this, gs, null);
          R(this, Ks, this.blur.bind(this));
          R(this, vs, this.focus.bind(this));
          R(this, Hs, this.copy.bind(this));
          R(this, Ps, this.cut.bind(this));
          R(this, fs, this.paste.bind(this));
          R(this, As, this.keydown.bind(this));
          R(this, _s, this.keyup.bind(this));
          R(this, qs, this.onEditingAction.bind(this));
          R(this, $s, this.onPageChanging.bind(this));
          R(this, lQ, this.onScaleChanging.bind(this));
          R(this, UQ, this.onRotationChanging.bind(this));
          R(this, dQ, {
            isEditing: !1,
            isEmpty: !0,
            hasSomethingToUndo: !1,
            hasSomethingToRedo: !1,
            hasSelectedEditor: !1,
            hasSelectedText: !1,
          });
          R(this, kZ, [0, 0]);
          R(this, Vd, null);
          R(this, xd, null);
          R(this, ZQ, null);
          (this._signal = s(this, h0).signal),
            e(this, xd, U),
            e(this, ZQ, l),
            e(this, b0, d),
            (this._eventBus = Z),
            this._eventBus._on('editingaction', s(this, qs)),
            this._eventBus._on('pagechanging', s(this, $s)),
            this._eventBus._on('scalechanging', s(this, lQ)),
            this._eventBus._on('rotationchanging', s(this, UQ)),
            b(this, na, Tm).call(this),
            b(this, ia, um).call(this),
            b(this, tQ, Zh).call(this),
            e(this, rd, t.annotationStorage),
            e(this, xs, t.filterFactory),
            e(this, jt, F),
            e(this, M0, c || null),
            e(this, ws, n),
            e(this, J0, V || null),
            (this.viewParameters = {
              realScale: Q0.PDF_TO_CSS_UNITS,
              rotation: 0,
            }),
            (this.isShiftKeyDown = !1);
        }
        static get _keyboardManager() {
          const U = DZ.prototype,
            l = (F) =>
              s(F, xd).contains(document.activeElement) &&
              document.activeElement.tagName !== 'BUTTON' &&
              F.hasSomethingToControl(),
            d = (F, { target: c }) => {
              if (c instanceof HTMLInputElement) {
                const { type: n } = c;
                return n !== 'text' && n !== 'number';
              }
              return !0;
            },
            Z = this.TRANSLATE_SMALL,
            t = this.TRANSLATE_BIG;
          return Zl(
            this,
            '_keyboardManager',
            new is([
              [['ctrl+a', 'mac+meta+a'], U.selectAll, { checker: d }],
              [['ctrl+z', 'mac+meta+z'], U.undo, { checker: d }],
              [
                [
                  'ctrl+y',
                  'ctrl+shift+z',
                  'mac+meta+shift+z',
                  'ctrl+shift+Z',
                  'mac+meta+shift+Z',
                ],
                U.redo,
                { checker: d },
              ],
              [
                [
                  'Backspace',
                  'alt+Backspace',
                  'ctrl+Backspace',
                  'shift+Backspace',
                  'mac+Backspace',
                  'mac+alt+Backspace',
                  'mac+ctrl+Backspace',
                  'Delete',
                  'ctrl+Delete',
                  'shift+Delete',
                  'mac+Delete',
                ],
                U.delete,
                { checker: d },
              ],
              [
                ['Enter', 'mac+Enter'],
                U.addNewEditorFromKeyboard,
                {
                  checker: (F, { target: c }) =>
                    !(c instanceof HTMLButtonElement) &&
                    s(F, xd).contains(c) &&
                    !F.isEnterHandled,
                },
              ],
              [
                [' ', 'mac+ '],
                U.addNewEditorFromKeyboard,
                {
                  checker: (F, { target: c }) =>
                    !(c instanceof HTMLButtonElement) &&
                    s(F, xd).contains(document.activeElement),
                },
              ],
              [['Escape', 'mac+Escape'], U.unselectAll],
              [
                ['ArrowLeft', 'mac+ArrowLeft'],
                U.translateSelectedEditors,
                { args: [-Z, 0], checker: l },
              ],
              [
                ['ctrl+ArrowLeft', 'mac+shift+ArrowLeft'],
                U.translateSelectedEditors,
                { args: [-t, 0], checker: l },
              ],
              [
                ['ArrowRight', 'mac+ArrowRight'],
                U.translateSelectedEditors,
                { args: [Z, 0], checker: l },
              ],
              [
                ['ctrl+ArrowRight', 'mac+shift+ArrowRight'],
                U.translateSelectedEditors,
                { args: [t, 0], checker: l },
              ],
              [
                ['ArrowUp', 'mac+ArrowUp'],
                U.translateSelectedEditors,
                { args: [0, -Z], checker: l },
              ],
              [
                ['ctrl+ArrowUp', 'mac+shift+ArrowUp'],
                U.translateSelectedEditors,
                { args: [0, -t], checker: l },
              ],
              [
                ['ArrowDown', 'mac+ArrowDown'],
                U.translateSelectedEditors,
                { args: [0, Z], checker: l },
              ],
              [
                ['ctrl+ArrowDown', 'mac+shift+ArrowDown'],
                U.translateSelectedEditors,
                { args: [0, t], checker: l },
              ],
            ]),
          );
        }
        destroy() {
          var U, l, d;
          (U = s(this, h0)) == null || U.abort(),
            e(this, h0, null),
            (this._signal = null),
            this._eventBus._off('editingaction', s(this, qs)),
            this._eventBus._off('pagechanging', s(this, $s)),
            this._eventBus._off('scalechanging', s(this, lQ)),
            this._eventBus._off('rotationchanging', s(this, UQ));
          for (const Z of s(this, jl).values()) Z.destroy();
          s(this, jl).clear(),
            s(this, yl).clear(),
            s(this, wt).clear(),
            e(this, mU, null),
            s(this, cl).clear(),
            s(this, xU).destroy(),
            (l = s(this, b0)) == null || l.destroy(),
            (d = s(this, nd)) == null || d.hide(),
            e(this, nd, null),
            s(this, Qd) && (clearTimeout(s(this, Qd)), e(this, Qd, null)),
            s(this, Vd) && (clearTimeout(s(this, Vd)), e(this, Vd, null));
        }
        async mlGuess(U) {
          var l;
          return ((l = s(this, J0)) == null ? void 0 : l.guess(U)) || null;
        }
        get hasMLManager() {
          return !!s(this, J0);
        }
        get hcmFilter() {
          return Zl(
            this,
            'hcmFilter',
            s(this, jt)
              ? s(this, xs).addHCMFilter(
                  s(this, jt).foreground,
                  s(this, jt).background,
                )
              : 'none',
          );
        }
        get direction() {
          return Zl(this, 'direction', getComputedStyle(s(this, xd)).direction);
        }
        get highlightColors() {
          return Zl(
            this,
            'highlightColors',
            s(this, M0)
              ? new Map(
                  s(this, M0)
                    .split(',')
                    .map((U) => U.split('=').map((l) => l.trim())),
                )
              : null,
          );
        }
        get highlightColorNames() {
          return Zl(
            this,
            'highlightColorNames',
            this.highlightColors
              ? new Map(Array.from(this.highlightColors, (U) => U.reverse()))
              : null,
          );
        }
        setMainHighlightColorPicker(U) {
          e(this, Os, U);
        }
        editAltText(U) {
          var l;
          (l = s(this, b0)) == null || l.editAltText(this, U);
        }
        onPageChanging({ pageNumber: U }) {
          e(this, m0, U - 1);
        }
        focusMainContainer() {
          s(this, xd).focus();
        }
        findParent(U, l) {
          for (const d of s(this, jl).values()) {
            const {
              x: Z,
              y: t,
              width: F,
              height: c,
            } = d.div.getBoundingClientRect();
            if (U >= Z && U <= Z + F && l >= t && l <= t + c) return d;
          }
          return null;
        }
        disableUserSelect(U = !1) {
          s(this, ZQ).classList.toggle('noUserSelect', U);
        }
        addShouldRescale(U) {
          s(this, wt).add(U);
        }
        removeShouldRescale(U) {
          s(this, wt).delete(U);
        }
        onScaleChanging({ scale: U }) {
          this.commitOrRemove(),
            (this.viewParameters.realScale = U * Q0.PDF_TO_CSS_UNITS);
          for (const l of s(this, wt)) l.onScaleChanging();
        }
        onRotationChanging({ pagesRotation: U }) {
          this.commitOrRemove(), (this.viewParameters.rotation = U);
        }
        highlightSelection(U = '') {
          const l = document.getSelection();
          if (!l || l.isCollapsed) return;
          const {
              anchorNode: d,
              anchorOffset: Z,
              focusNode: t,
              focusOffset: F,
            } = l,
            c = l.toString(),
            V = b(this, G0, hR).call(this, l).closest('.textLayer'),
            W = this.getSelectionBoxes(V);
          if (W) {
            l.empty(),
              s(this, Ol) === ll.NONE &&
                (this._eventBus.dispatch('showannotationeditorui', {
                  source: this,
                  mode: ll.HIGHLIGHT,
                }),
                this.showAllEditors('highlight', !0, !0));
            for (const a of s(this, jl).values())
              if (a.hasTextLayer(V)) {
                a.createAndAddNewEditor({ x: 0, y: 0 }, !1, {
                  methodOfCreation: U,
                  boxes: W,
                  anchorNode: d,
                  anchorOffset: Z,
                  focusNode: t,
                  focusOffset: F,
                  text: c,
                });
                break;
              }
          }
        }
        addToAnnotationStorage(U) {
          !U.isEmpty() &&
            s(this, rd) &&
            !s(this, rd).has(U.id) &&
            s(this, rd).setValue(U.id, U);
        }
        blur() {
          if (
            ((this.isShiftKeyDown = !1),
            s(this, LZ) &&
              (e(this, LZ, !1), b(this, T0, bR).call(this, 'main_toolbar')),
            !this.hasSelection)
          )
            return;
          const { activeElement: U } = document;
          for (const l of s(this, cl))
            if (l.div.contains(U)) {
              e(this, xt, [l, U]), (l._focusEventsAllowed = !1);
              break;
            }
        }
        focus() {
          if (!s(this, xt)) return;
          const [U, l] = s(this, xt);
          e(this, xt, null),
            l.addEventListener(
              'focusin',
              () => {
                U._focusEventsAllowed = !0;
              },
              { once: !0, signal: this._signal },
            ),
            l.focus();
        }
        addEditListeners() {
          b(this, tQ, Zh).call(this), b(this, FQ, th).call(this);
        }
        removeEditListeners() {
          b(this, aa, Ym).call(this), b(this, cQ, Fh).call(this);
        }
        dragOver(U) {
          for (const { type: l } of U.dataTransfer.items)
            for (const d of s(this, jU))
              if (d.isHandlingMimeForPasting(l)) {
                (U.dataTransfer.dropEffect = 'copy'), U.preventDefault();
                return;
              }
        }
        drop(U) {
          for (const l of U.dataTransfer.items)
            for (const d of s(this, jU))
              if (d.isHandlingMimeForPasting(l.type)) {
                d.paste(l, this.currentLayer), U.preventDefault();
                return;
              }
        }
        copy(U) {
          var d;
          if (
            (U.preventDefault(),
            (d = s(this, mU)) == null || d.commitOrRemove(),
            !this.hasSelection)
          )
            return;
          const l = [];
          for (const Z of s(this, cl)) {
            const t = Z.serialize(!0);
            t && l.push(t);
          }
          l.length !== 0 &&
            U.clipboardData.setData('application/pdfjs', JSON.stringify(l));
        }
        cut(U) {
          this.copy(U), this.delete();
        }
        paste(U) {
          U.preventDefault();
          const { clipboardData: l } = U;
          for (const t of l.items)
            for (const F of s(this, jU))
              if (F.isHandlingMimeForPasting(t.type)) {
                F.paste(t, this.currentLayer);
                return;
              }
          let d = l.getData('application/pdfjs');
          if (!d) return;
          try {
            d = JSON.parse(d);
          } catch (t) {
            _(`paste: "${t.message}".`);
            return;
          }
          if (!Array.isArray(d)) return;
          this.unselectAll();
          const Z = this.currentLayer;
          try {
            const t = [];
            for (const n of d) {
              const V = Z.deserialize(n);
              if (!V) return;
              t.push(V);
            }
            const F = () => {
                for (const n of t) b(this, sQ, ch).call(this, n);
                b(this, QQ, sh).call(this, t);
              },
              c = () => {
                for (const n of t) n.remove();
              };
            this.addCommands({ cmd: F, undo: c, mustExec: !0 });
          } catch (t) {
            _(`paste: "${t.message}".`);
          }
        }
        keydown(U) {
          !this.isShiftKeyDown &&
            U.key === 'Shift' &&
            (this.isShiftKeyDown = !0),
            s(this, Ol) !== ll.NONE &&
              !this.isEditorHandlingKeyboard &&
              DZ._keyboardManager.exec(this, U);
        }
        keyup(U) {
          this.isShiftKeyDown &&
            U.key === 'Shift' &&
            ((this.isShiftKeyDown = !1),
            s(this, LZ) &&
              (e(this, LZ, !1), b(this, T0, bR).call(this, 'main_toolbar')));
        }
        onEditingAction({ name: U }) {
          switch (U) {
            case 'undo':
            case 'redo':
            case 'delete':
            case 'selectAll':
              this[U]();
              break;
            case 'highlightSelection':
              this.highlightSelection('context_menu');
              break;
          }
        }
        setEditingState(U) {
          U
            ? (b(this, Va, Sm).call(this),
              b(this, FQ, th).call(this),
              b(this, gl, QU).call(this, {
                isEditing: s(this, Ol) !== ll.NONE,
                isEmpty: b(this, Ot, KV).call(this),
                hasSomethingToUndo: s(this, xU).hasSomethingToUndo(),
                hasSomethingToRedo: s(this, xU).hasSomethingToRedo(),
                hasSelectedEditor: !1,
              }))
            : (b(this, Wa, Xm).call(this),
              b(this, cQ, Fh).call(this),
              b(this, gl, QU).call(this, { isEditing: !1 }),
              this.disableUserSelect(!1));
        }
        registerEditorTypes(U) {
          if (!s(this, jU)) {
            e(this, jU, U);
            for (const l of s(this, jU))
              b(this, Wd, bt).call(this, l.defaultPropertiesToUpdate);
          }
        }
        getId() {
          return s(this, ca).id;
        }
        get currentLayer() {
          return s(this, jl).get(s(this, m0));
        }
        getLayer(U) {
          return s(this, jl).get(U);
        }
        get currentPageIndex() {
          return s(this, m0);
        }
        addLayer(U) {
          s(this, jl).set(U.pageIndex, U),
            s(this, zZ) ? U.enable() : U.disable();
        }
        removeLayer(U) {
          s(this, jl).delete(U.pageIndex);
        }
        updateMode(U, l = null, d = !1) {
          if (s(this, Ol) !== U) {
            if ((e(this, Ol, U), U === ll.NONE)) {
              this.setEditingState(!1), b(this, Na, om).call(this);
              return;
            }
            this.setEditingState(!0),
              b(this, Ra, pm).call(this),
              this.unselectAll();
            for (const Z of s(this, jl).values()) Z.updateMode(U);
            if (!l && d) {
              this.addNewEditorFromKeyboard();
              return;
            }
            if (l) {
              for (const Z of s(this, yl).values())
                if (Z.annotationElementId === l) {
                  this.setSelected(Z), Z.enterInEditMode();
                  break;
                }
            }
          }
        }
        addNewEditorFromKeyboard() {
          this.currentLayer.canCreateNewEmptyEditor() &&
            this.currentLayer.addNewEditor();
        }
        updateToolbar(U) {
          U !== s(this, Ol) &&
            this._eventBus.dispatch('switchannotationeditormode', {
              source: this,
              mode: U,
            });
        }
        updateParams(U, l) {
          var d;
          if (s(this, jU)) {
            switch (U) {
              case P.CREATE:
                this.currentLayer.addNewEditor();
                return;
              case P.HIGHLIGHT_DEFAULT_COLOR:
                (d = s(this, Os)) == null || d.updateColor(l);
                break;
              case P.HIGHLIGHT_SHOW_ALL:
                this._eventBus.dispatch('reporttelemetry', {
                  source: this,
                  details: {
                    type: 'editing',
                    data: { type: 'highlight', action: 'toggle_visibility' },
                  },
                }),
                  (s(this, gs) || e(this, gs, new Map())).set(U, l),
                  this.showAllEditors('highlight', l);
                break;
            }
            for (const Z of s(this, cl)) Z.updateParams(U, l);
            for (const Z of s(this, jU)) Z.updateDefaultParams(U, l);
          }
        }
        showAllEditors(U, l, d = !1) {
          var t;
          for (const F of s(this, yl).values()) F.editorType === U && F.show(l);
          (((t = s(this, gs)) == null ? void 0 : t.get(P.HIGHLIGHT_SHOW_ALL)) ??
            !0) !== l &&
            b(this, Wd, bt).call(this, [[P.HIGHLIGHT_SHOW_ALL, l]]);
        }
        enableWaiting(U = !1) {
          if (s(this, js) !== U) {
            e(this, js, U);
            for (const l of s(this, jl).values())
              U ? l.disableClick() : l.enableClick(),
                l.div.classList.toggle('waiting', U);
          }
        }
        getEditors(U) {
          const l = [];
          for (const d of s(this, yl).values()) d.pageIndex === U && l.push(d);
          return l;
        }
        getEditor(U) {
          return s(this, yl).get(U);
        }
        addEditor(U) {
          s(this, yl).set(U.id, U);
        }
        removeEditor(U) {
          var l;
          U.div.contains(document.activeElement) &&
            (s(this, Qd) && clearTimeout(s(this, Qd)),
            e(
              this,
              Qd,
              setTimeout(() => {
                this.focusMainContainer(), e(this, Qd, null);
              }, 0),
            )),
            s(this, yl).delete(U.id),
            this.unselect(U),
            (!U.annotationElementId ||
              !s(this, rt).has(U.annotationElementId)) &&
              ((l = s(this, rd)) == null || l.remove(U.id));
        }
        addDeletedAnnotationElement(U) {
          s(this, rt).add(U.annotationElementId),
            this.addChangedExistingAnnotation(U),
            (U.deleted = !0);
        }
        isDeletedAnnotationElement(U) {
          return s(this, rt).has(U);
        }
        removeDeletedAnnotationElement(U) {
          s(this, rt).delete(U.annotationElementId),
            this.removeChangedExistingAnnotation(U),
            (U.deleted = !1);
        }
        setActiveEditor(U) {
          s(this, mU) !== U &&
            (e(this, mU, U),
            U && b(this, Wd, bt).call(this, U.propertiesToUpdate));
        }
        updateUI(U) {
          s(this, ha, Bm) === U &&
            b(this, Wd, bt).call(this, U.propertiesToUpdate);
        }
        toggleSelected(U) {
          if (s(this, cl).has(U)) {
            s(this, cl).delete(U),
              U.unselect(),
              b(this, gl, QU).call(this, {
                hasSelectedEditor: this.hasSelection,
              });
            return;
          }
          s(this, cl).add(U),
            U.select(),
            b(this, Wd, bt).call(this, U.propertiesToUpdate),
            b(this, gl, QU).call(this, { hasSelectedEditor: !0 });
        }
        setSelected(U) {
          for (const l of s(this, cl)) l !== U && l.unselect();
          s(this, cl).clear(),
            s(this, cl).add(U),
            U.select(),
            b(this, Wd, bt).call(this, U.propertiesToUpdate),
            b(this, gl, QU).call(this, { hasSelectedEditor: !0 });
        }
        isSelected(U) {
          return s(this, cl).has(U);
        }
        get firstSelectedEditor() {
          return s(this, cl).values().next().value;
        }
        unselect(U) {
          U.unselect(),
            s(this, cl).delete(U),
            b(this, gl, QU).call(this, {
              hasSelectedEditor: this.hasSelection,
            });
        }
        get hasSelection() {
          return s(this, cl).size !== 0;
        }
        get isEnterHandled() {
          return (
            s(this, cl).size === 1 && this.firstSelectedEditor.isEnterHandled
          );
        }
        undo() {
          s(this, xU).undo(),
            b(this, gl, QU).call(this, {
              hasSomethingToUndo: s(this, xU).hasSomethingToUndo(),
              hasSomethingToRedo: !0,
              isEmpty: b(this, Ot, KV).call(this),
            });
        }
        redo() {
          s(this, xU).redo(),
            b(this, gl, QU).call(this, {
              hasSomethingToUndo: !0,
              hasSomethingToRedo: s(this, xU).hasSomethingToRedo(),
              isEmpty: b(this, Ot, KV).call(this),
            });
        }
        addCommands(U) {
          s(this, xU).add(U),
            b(this, gl, QU).call(this, {
              hasSomethingToUndo: !0,
              hasSomethingToRedo: !1,
              isEmpty: b(this, Ot, KV).call(this),
            });
        }
        delete() {
          if ((this.commitOrRemove(), !this.hasSelection)) return;
          const U = [...s(this, cl)],
            l = () => {
              for (const Z of U) Z.remove();
            },
            d = () => {
              for (const Z of U) b(this, sQ, ch).call(this, Z);
            };
          this.addCommands({ cmd: l, undo: d, mustExec: !0 });
        }
        commitOrRemove() {
          var U;
          (U = s(this, mU)) == null || U.commitOrRemove();
        }
        hasSomethingToControl() {
          return s(this, mU) || this.hasSelection;
        }
        selectAll() {
          for (const U of s(this, cl)) U.commit();
          b(this, QQ, sh).call(this, s(this, yl).values());
        }
        unselectAll() {
          if (
            !(
              s(this, mU) &&
              (s(this, mU).commitOrRemove(), s(this, Ol) !== ll.NONE)
            ) &&
            this.hasSelection
          ) {
            for (const U of s(this, cl)) U.unselect();
            s(this, cl).clear(),
              b(this, gl, QU).call(this, { hasSelectedEditor: !1 });
          }
        }
        translateSelectedEditors(U, l, d = !1) {
          if ((d || this.commitOrRemove(), !this.hasSelection)) return;
          (s(this, kZ)[0] += U), (s(this, kZ)[1] += l);
          const [Z, t] = s(this, kZ),
            F = [...s(this, cl)],
            c = 1e3;
          s(this, Vd) && clearTimeout(s(this, Vd)),
            e(
              this,
              Vd,
              setTimeout(() => {
                e(this, Vd, null),
                  (s(this, kZ)[0] = s(this, kZ)[1] = 0),
                  this.addCommands({
                    cmd: () => {
                      for (const n of F)
                        s(this, yl).has(n.id) && n.translateInPage(Z, t);
                    },
                    undo: () => {
                      for (const n of F)
                        s(this, yl).has(n.id) && n.translateInPage(-Z, -t);
                    },
                    mustExec: !1,
                  });
              }, c),
            );
          for (const n of F) n.translateInPage(U, l);
        }
        setUpDragSession() {
          if (this.hasSelection) {
            this.disableUserSelect(!0), e(this, sd, new Map());
            for (const U of s(this, cl))
              s(this, sd).set(U, {
                savedX: U.x,
                savedY: U.y,
                savedPageIndex: U.pageIndex,
                newX: 0,
                newY: 0,
                newPageIndex: -1,
              });
          }
        }
        endDragSession() {
          if (!s(this, sd)) return !1;
          this.disableUserSelect(!1);
          const U = s(this, sd);
          e(this, sd, null);
          let l = !1;
          for (const [{ x: Z, y: t, pageIndex: F }, c] of U)
            (c.newX = Z),
              (c.newY = t),
              (c.newPageIndex = F),
              l ||
                (l =
                  Z !== c.savedX || t !== c.savedY || F !== c.savedPageIndex);
          if (!l) return !1;
          const d = (Z, t, F, c) => {
            if (s(this, yl).has(Z.id)) {
              const n = s(this, jl).get(c);
              n
                ? Z._setParentAndPosition(n, t, F)
                : ((Z.pageIndex = c), (Z.x = t), (Z.y = F));
            }
          };
          return (
            this.addCommands({
              cmd: () => {
                for (const [Z, { newX: t, newY: F, newPageIndex: c }] of U)
                  d(Z, t, F, c);
              },
              undo: () => {
                for (const [
                  Z,
                  { savedX: t, savedY: F, savedPageIndex: c },
                ] of U)
                  d(Z, t, F, c);
              },
              mustExec: !0,
            }),
            !0
          );
        }
        dragSelectedEditors(U, l) {
          if (s(this, sd)) for (const d of s(this, sd).keys()) d.drag(U, l);
        }
        rebuild(U) {
          if (U.parent === null) {
            const l = this.getLayer(U.pageIndex);
            l
              ? (l.changeParent(U), l.addOrRebuild(U))
              : (this.addEditor(U),
                this.addToAnnotationStorage(U),
                U.rebuild());
          } else U.parent.addOrRebuild(U);
        }
        get isEditorHandlingKeyboard() {
          var U;
          return (
            ((U = this.getActive()) == null
              ? void 0
              : U.shouldGetKeyboardEvents()) ||
            (s(this, cl).size === 1 &&
              this.firstSelectedEditor.shouldGetKeyboardEvents())
          );
        }
        isActive(U) {
          return s(this, mU) === U;
        }
        getActive() {
          return s(this, mU);
        }
        getMode() {
          return s(this, Ol);
        }
        get imageManager() {
          return Zl(this, 'imageManager', new QN());
        }
        getSelectionBoxes(U) {
          if (!U) return null;
          const l = document.getSelection();
          for (let V = 0, W = l.rangeCount; V < W; V++)
            if (!U.contains(l.getRangeAt(V).commonAncestorContainer))
              return null;
          const { x: d, y: Z, width: t, height: F } = U.getBoundingClientRect();
          let c;
          switch (U.getAttribute('data-main-rotation')) {
            case '90':
              c = (V, W, a, i) => ({
                x: (W - Z) / F,
                y: 1 - (V + a - d) / t,
                width: i / F,
                height: a / t,
              });
              break;
            case '180':
              c = (V, W, a, i) => ({
                x: 1 - (V + a - d) / t,
                y: 1 - (W + i - Z) / F,
                width: a / t,
                height: i / F,
              });
              break;
            case '270':
              c = (V, W, a, i) => ({
                x: 1 - (W + i - Z) / F,
                y: (V - d) / t,
                width: i / F,
                height: a / t,
              });
              break;
            default:
              c = (V, W, a, i) => ({
                x: (V - d) / t,
                y: (W - Z) / F,
                width: a / t,
                height: i / F,
              });
              break;
          }
          const n = [];
          for (let V = 0, W = l.rangeCount; V < W; V++) {
            const a = l.getRangeAt(V);
            if (!a.collapsed)
              for (const {
                x: i,
                y: h,
                width: N,
                height: M,
              } of a.getClientRects())
                N === 0 || M === 0 || n.push(c(i, h, N, M));
          }
          return n.length === 0 ? null : n;
        }
        addChangedExistingAnnotation({ annotationElementId: U, id: l }) {
          (s(this, e0) || e(this, e0, new Map())).set(U, l);
        }
        removeChangedExistingAnnotation({ annotationElementId: U }) {
          var l;
          (l = s(this, e0)) == null || l.delete(U);
        }
        renderAnnotationElement(U) {
          var Z;
          const l = (Z = s(this, e0)) == null ? void 0 : Z.get(U.data.id);
          if (!l) return;
          const d = s(this, rd).getRawValue(l);
          d &&
            ((s(this, Ol) === ll.NONE && !d.hasBeenModified) ||
              d.renderAnnotationElement(U));
        }
      }),
      (h0 = new WeakMap()),
      (mU = new WeakMap()),
      (yl = new WeakMap()),
      (jl = new WeakMap()),
      (b0 = new WeakMap()),
      (rd = new WeakMap()),
      (e0 = new WeakMap()),
      (xU = new WeakMap()),
      (m0 = new WeakMap()),
      (rt = new WeakMap()),
      (sd = new WeakMap()),
      (jU = new WeakMap()),
      (wt = new WeakMap()),
      (ws = new WeakMap()),
      (xs = new WeakMap()),
      (Qd = new WeakMap()),
      (M0 = new WeakMap()),
      (LZ = new WeakMap()),
      (nd = new WeakMap()),
      (ca = new WeakMap()),
      (zZ = new WeakMap()),
      (js = new WeakMap()),
      (xt = new WeakMap()),
      (Os = new WeakMap()),
      (J0 = new WeakMap()),
      (Ol = new WeakMap()),
      (cl = new WeakMap()),
      (wd = new WeakMap()),
      (jt = new WeakMap()),
      (gs = new WeakMap()),
      (Ks = new WeakMap()),
      (vs = new WeakMap()),
      (Hs = new WeakMap()),
      (Ps = new WeakMap()),
      (fs = new WeakMap()),
      (As = new WeakMap()),
      (_s = new WeakMap()),
      (qs = new WeakMap()),
      ($s = new WeakMap()),
      (lQ = new WeakMap()),
      (UQ = new WeakMap()),
      (dQ = new WeakMap()),
      (kZ = new WeakMap()),
      (Vd = new WeakMap()),
      (xd = new WeakMap()),
      (ZQ = new WeakMap()),
      (G0 = new WeakSet()),
      (hR = function ({ anchorNode: U }) {
        return U.nodeType === Node.TEXT_NODE ? U.parentElement : U;
      }),
      (sa = new WeakSet()),
      (Jm = function () {
        const U = document.getSelection();
        if (!U || U.isCollapsed) return;
        const d = b(this, G0, hR).call(this, U).closest('.textLayer'),
          Z = this.getSelectionBoxes(d);
        Z &&
          (s(this, nd) || e(this, nd, new DM(this)),
          s(this, nd).show(d, Z, this.direction === 'ltr'));
      }),
      (Qa = new WeakSet()),
      (Gm = function () {
        var t, F, c;
        const U = document.getSelection();
        if (!U || U.isCollapsed) {
          s(this, wd) &&
            ((t = s(this, nd)) == null || t.hide(),
            e(this, wd, null),
            b(this, gl, QU).call(this, { hasSelectedText: !1 }));
          return;
        }
        const { anchorNode: l } = U;
        if (l === s(this, wd)) return;
        if (!b(this, G0, hR).call(this, U).closest('.textLayer')) {
          s(this, wd) &&
            ((F = s(this, nd)) == null || F.hide(),
            e(this, wd, null),
            b(this, gl, QU).call(this, { hasSelectedText: !1 }));
          return;
        }
        if (
          ((c = s(this, nd)) == null || c.hide(),
          e(this, wd, l),
          b(this, gl, QU).call(this, { hasSelectedText: !0 }),
          !(s(this, Ol) !== ll.HIGHLIGHT && s(this, Ol) !== ll.NONE) &&
            (s(this, Ol) === ll.HIGHLIGHT &&
              this.showAllEditors('highlight', !0, !0),
            e(this, LZ, this.isShiftKeyDown),
            !this.isShiftKeyDown))
        ) {
          const n = this._signal,
            V = (W) => {
              (W.type === 'pointerup' && W.button !== 0) ||
                (window.removeEventListener('pointerup', V),
                window.removeEventListener('blur', V),
                W.type === 'pointerup' &&
                  b(this, T0, bR).call(this, 'main_toolbar'));
            };
          window.addEventListener('pointerup', V, { signal: n }),
            window.addEventListener('blur', V, { signal: n });
        }
      }),
      (T0 = new WeakSet()),
      (bR = function (U = '') {
        s(this, Ol) === ll.HIGHLIGHT
          ? this.highlightSelection(U)
          : s(this, ws) && b(this, sa, Jm).call(this);
      }),
      (na = new WeakSet()),
      (Tm = function () {
        document.addEventListener(
          'selectionchange',
          b(this, Qa, Gm).bind(this),
          { signal: this._signal },
        );
      }),
      (Va = new WeakSet()),
      (Sm = function () {
        const U = this._signal;
        window.addEventListener('focus', s(this, vs), { signal: U }),
          window.addEventListener('blur', s(this, Ks), { signal: U });
      }),
      (Wa = new WeakSet()),
      (Xm = function () {
        window.removeEventListener('focus', s(this, vs)),
          window.removeEventListener('blur', s(this, Ks));
      }),
      (tQ = new WeakSet()),
      (Zh = function () {
        const U = this._signal;
        window.addEventListener('keydown', s(this, As), { signal: U }),
          window.addEventListener('keyup', s(this, _s), { signal: U });
      }),
      (aa = new WeakSet()),
      (Ym = function () {
        window.removeEventListener('keydown', s(this, As)),
          window.removeEventListener('keyup', s(this, _s));
      }),
      (FQ = new WeakSet()),
      (th = function () {
        const U = this._signal;
        document.addEventListener('copy', s(this, Hs), { signal: U }),
          document.addEventListener('cut', s(this, Ps), { signal: U }),
          document.addEventListener('paste', s(this, fs), { signal: U });
      }),
      (cQ = new WeakSet()),
      (Fh = function () {
        document.removeEventListener('copy', s(this, Hs)),
          document.removeEventListener('cut', s(this, Ps)),
          document.removeEventListener('paste', s(this, fs));
      }),
      (ia = new WeakSet()),
      (um = function () {
        const U = this._signal;
        document.addEventListener('dragover', this.dragOver.bind(this), {
          signal: U,
        }),
          document.addEventListener('drop', this.drop.bind(this), {
            signal: U,
          });
      }),
      (gl = new WeakSet()),
      (QU = function (U) {
        Object.entries(U).some(([d, Z]) => s(this, dQ)[d] !== Z) &&
          (this._eventBus.dispatch('annotationeditorstateschanged', {
            source: this,
            details: Object.assign(s(this, dQ), U),
          }),
          s(this, Ol) === ll.HIGHLIGHT &&
            U.hasSelectedEditor === !1 &&
            b(this, Wd, bt).call(this, [[P.HIGHLIGHT_FREE, !0]]));
      }),
      (Wd = new WeakSet()),
      (bt = function (U) {
        this._eventBus.dispatch('annotationeditorparamschanged', {
          source: this,
          details: U,
        });
      }),
      (Ra = new WeakSet()),
      (pm = function () {
        if (!s(this, zZ)) {
          e(this, zZ, !0);
          for (const U of s(this, jl).values()) U.enable();
          for (const U of s(this, yl).values()) U.enable();
        }
      }),
      (Na = new WeakSet()),
      (om = function () {
        if ((this.unselectAll(), s(this, zZ))) {
          e(this, zZ, !1);
          for (const U of s(this, jl).values()) U.disable();
          for (const U of s(this, yl).values()) U.disable();
        }
      }),
      (sQ = new WeakSet()),
      (ch = function (U) {
        const l = s(this, jl).get(U.pageIndex);
        l
          ? l.addOrRebuild(U)
          : (this.addEditor(U), this.addToAnnotationStorage(U));
      }),
      (ha = new WeakSet()),
      (Bm = function () {
        let U = null;
        for (U of s(this, cl));
        return U;
      }),
      (Ot = new WeakSet()),
      (KV = function () {
        if (s(this, yl).size === 0) return !0;
        if (s(this, yl).size === 1)
          for (const U of s(this, yl).values()) return U.isEmpty();
        return !1;
      }),
      (QQ = new WeakSet()),
      (sh = function (U) {
        for (const l of s(this, cl)) l.unselect();
        s(this, cl).clear();
        for (const l of U) l.isEmpty() || (s(this, cl).add(l), l.select());
        b(this, gl, QU).call(this, { hasSelectedEditor: this.hasSelection });
      }),
      f(DZ, 'TRANSLATE_SMALL', 1),
      f(DZ, 'TRANSLATE_BIG', 10),
      DZ);
  const Kd = class Kd {
    constructor(U) {
      R(this, nQ);
      R(this, jd, '');
      R(this, Od, !1);
      R(this, OU, null);
      R(this, gd, null);
      R(this, MU, null);
      R(this, S0, !1);
      R(this, gU, null);
      e(this, gU, U);
    }
    static initialize(U) {
      Kd._l10nPromise || (Kd._l10nPromise = U);
    }
    async render() {
      const U = e(this, OU, document.createElement('button'));
      U.className = 'altText';
      const l = await Kd._l10nPromise.get('pdfjs-editor-alt-text-button-label');
      (U.textContent = l), U.setAttribute('aria-label', l), (U.tabIndex = '0');
      const d = s(this, gU)._uiManager._signal;
      U.addEventListener('contextmenu', VU, { signal: d }),
        U.addEventListener('pointerdown', (t) => t.stopPropagation(), {
          signal: d,
        });
      const Z = (t) => {
        t.preventDefault(), s(this, gU)._uiManager.editAltText(s(this, gU));
      };
      return (
        U.addEventListener('click', Z, { capture: !0, signal: d }),
        U.addEventListener(
          'keydown',
          (t) => {
            t.target === U && t.key === 'Enter' && (e(this, S0, !0), Z(t));
          },
          { signal: d },
        ),
        await b(this, nQ, Qh).call(this),
        U
      );
    }
    finish() {
      s(this, OU) &&
        (s(this, OU).focus({ focusVisible: s(this, S0) }), e(this, S0, !1));
    }
    isEmpty() {
      return !s(this, jd) && !s(this, Od);
    }
    get data() {
      return { altText: s(this, jd), decorative: s(this, Od) };
    }
    set data({ altText: U, decorative: l }) {
      (s(this, jd) === U && s(this, Od) === l) ||
        (e(this, jd, U), e(this, Od, l), b(this, nQ, Qh).call(this));
    }
    toggle(U = !1) {
      s(this, OU) &&
        (!U && s(this, MU) && (clearTimeout(s(this, MU)), e(this, MU, null)),
        (s(this, OU).disabled = !U));
    }
    destroy() {
      var U;
      (U = s(this, OU)) == null || U.remove(),
        e(this, OU, null),
        e(this, gd, null);
    }
  };
  (jd = new WeakMap()),
    (Od = new WeakMap()),
    (OU = new WeakMap()),
    (gd = new WeakMap()),
    (MU = new WeakMap()),
    (S0 = new WeakMap()),
    (gU = new WeakMap()),
    (nQ = new WeakSet()),
    (Qh = async function () {
      var Z;
      const U = s(this, OU);
      if (!U) return;
      if (!s(this, jd) && !s(this, Od)) {
        U.classList.remove('done'), (Z = s(this, gd)) == null || Z.remove();
        return;
      }
      U.classList.add('done'),
        Kd._l10nPromise
          .get('pdfjs-editor-alt-text-edit-button-label')
          .then((t) => {
            U.setAttribute('aria-label', t);
          });
      let l = s(this, gd);
      if (!l) {
        e(this, gd, (l = document.createElement('span'))),
          (l.className = 'tooltip'),
          l.setAttribute('role', 'tooltip');
        const t = (l.id = `alt-text-tooltip-${s(this, gU).id}`);
        U.setAttribute('aria-describedby', t);
        const F = 100,
          c = s(this, gU)._uiManager._signal;
        c.addEventListener(
          'abort',
          () => {
            clearTimeout(s(this, MU)), e(this, MU, null);
          },
          { once: !0 },
        ),
          U.addEventListener(
            'mouseenter',
            () => {
              e(
                this,
                MU,
                setTimeout(() => {
                  e(this, MU, null),
                    s(this, gd).classList.add('show'),
                    s(this, gU)._reportTelemetry({
                      action: 'alt_text_tooltip',
                    });
                }, F),
              );
            },
            { signal: c },
          ),
          U.addEventListener(
            'mouseleave',
            () => {
              var n;
              s(this, MU) && (clearTimeout(s(this, MU)), e(this, MU, null)),
                (n = s(this, gd)) == null || n.classList.remove('show');
            },
            { signal: c },
          );
      }
      (l.innerText = s(this, Od)
        ? await Kd._l10nPromise.get('pdfjs-editor-alt-text-decorative-tooltip')
        : s(this, jd)),
        l.parentNode || U.append(l);
      const d = s(this, gU).getImageForAltText();
      d == null || d.setAttribute('aria-describedby', l.id);
    }),
    f(Kd, '_l10nPromise', null);
  let mW = Kd;
  const nl = class nl {
    constructor(U) {
      R(this, iQ);
      R(this, NQ);
      R(this, ea);
      R(this, ma);
      R(this, hQ);
      R(this, bQ);
      R(this, eQ);
      R(this, Ma);
      R(this, Ja);
      R(this, Ga);
      R(this, Ta);
      R(this, mQ);
      R(this, ft);
      R(this, gt, null);
      R(this, KU, null);
      R(this, ql, null);
      R(this, X0, !1);
      R(this, Kt, !1);
      R(this, Kl, null);
      R(this, vt, null);
      R(this, Y0, this.focusin.bind(this));
      R(this, u0, this.focusout.bind(this));
      R(this, $l, null);
      R(this, VQ, '');
      R(this, Ht, !1);
      R(this, IZ, null);
      R(this, WQ, !1);
      R(this, Pt, !1);
      R(this, vd, !1);
      R(this, ad, null);
      R(this, p0, 0);
      R(this, o0, 0);
      R(this, yU, null);
      f(this, '_initialOptions', Object.create(null));
      f(this, '_isVisible', !0);
      f(this, '_uiManager', null);
      f(this, '_focusEventsAllowed', !0);
      f(this, '_l10nPromise', null);
      R(this, aQ, !1);
      R(this, ba, nl._zIndex++);
      this.constructor === nl && sl('Cannot initialize AnnotationEditor.'),
        (this.parent = U.parent),
        (this.id = U.id),
        (this.width = this.height = null),
        (this.pageIndex = U.parent.pageIndex),
        (this.name = U.name),
        (this.div = null),
        (this._uiManager = U.uiManager),
        (this.annotationElementId = null),
        (this._willKeepAspectRatio = !1),
        (this._initialOptions.isCentered = U.isCentered),
        (this._structTreeParentId = null);
      const {
        rotation: l,
        rawDims: { pageWidth: d, pageHeight: Z, pageX: t, pageY: F },
      } = this.parent.viewport;
      (this.rotation = l),
        (this.pageRotation =
          (360 + l - this._uiManager.viewParameters.rotation) % 360),
        (this.pageDimensions = [d, Z]),
        (this.pageTranslation = [t, F]);
      const [c, n] = this.parentDimensions;
      (this.x = U.x / c),
        (this.y = U.y / n),
        (this.isAttachedToDOM = !1),
        (this.deleted = !1);
    }
    static get _resizerKeyboardManager() {
      const U = nl.prototype._resizeWithKeyboard,
        l = Rs.TRANSLATE_SMALL,
        d = Rs.TRANSLATE_BIG;
      return Zl(
        this,
        '_resizerKeyboardManager',
        new is([
          [['ArrowLeft', 'mac+ArrowLeft'], U, { args: [-l, 0] }],
          [['ctrl+ArrowLeft', 'mac+shift+ArrowLeft'], U, { args: [-d, 0] }],
          [['ArrowRight', 'mac+ArrowRight'], U, { args: [l, 0] }],
          [['ctrl+ArrowRight', 'mac+shift+ArrowRight'], U, { args: [d, 0] }],
          [['ArrowUp', 'mac+ArrowUp'], U, { args: [0, -l] }],
          [['ctrl+ArrowUp', 'mac+shift+ArrowUp'], U, { args: [0, -d] }],
          [['ArrowDown', 'mac+ArrowDown'], U, { args: [0, l] }],
          [['ctrl+ArrowDown', 'mac+shift+ArrowDown'], U, { args: [0, d] }],
          [['Escape', 'mac+Escape'], nl.prototype._stopResizingWithKeyboard],
        ]),
      );
    }
    get editorType() {
      return Object.getPrototypeOf(this).constructor._type;
    }
    static get _defaultLineColor() {
      return Zl(
        this,
        '_defaultLineColor',
        this._colorManager.getHexCode('CanvasText'),
      );
    }
    static deleteAnnotationElement(U) {
      const l = new rM({
        id: U.parent.getNextId(),
        parent: U.parent,
        uiManager: U._uiManager,
      });
      (l.annotationElementId = U.annotationElementId),
        (l.deleted = !0),
        l._uiManager.addToAnnotationStorage(l);
    }
    static initialize(U, l, d) {
      if (
        (nl._l10nPromise ||
          (nl._l10nPromise = new Map(
            [
              'pdfjs-editor-alt-text-button-label',
              'pdfjs-editor-alt-text-edit-button-label',
              'pdfjs-editor-alt-text-decorative-tooltip',
              'pdfjs-editor-resizer-label-topLeft',
              'pdfjs-editor-resizer-label-topMiddle',
              'pdfjs-editor-resizer-label-topRight',
              'pdfjs-editor-resizer-label-middleRight',
              'pdfjs-editor-resizer-label-bottomRight',
              'pdfjs-editor-resizer-label-bottomMiddle',
              'pdfjs-editor-resizer-label-bottomLeft',
              'pdfjs-editor-resizer-label-middleLeft',
            ].map((t) => [
              t,
              U.get(t.replaceAll(/([A-Z])/g, (F) => `-${F.toLowerCase()}`)),
            ]),
          )),
        d != null && d.strings)
      )
        for (const t of d.strings) nl._l10nPromise.set(t, U.get(t));
      if (nl._borderLineWidth !== -1) return;
      const Z = getComputedStyle(document.documentElement);
      nl._borderLineWidth =
        parseFloat(Z.getPropertyValue('--outline-width')) || 0;
    }
    static updateDefaultParams(U, l) {}
    static get defaultPropertiesToUpdate() {
      return [];
    }
    static isHandlingMimeForPasting(U) {
      return !1;
    }
    static paste(U, l) {
      sl('Not implemented');
    }
    get propertiesToUpdate() {
      return [];
    }
    get _isDraggable() {
      return s(this, aQ);
    }
    set _isDraggable(U) {
      var l;
      e(this, aQ, U),
        (l = this.div) == null || l.classList.toggle('draggable', U);
    }
    get isEnterHandled() {
      return !0;
    }
    center() {
      const [U, l] = this.pageDimensions;
      switch (this.parentRotation) {
        case 90:
          (this.x -= (this.height * l) / (U * 2)),
            (this.y += (this.width * U) / (l * 2));
          break;
        case 180:
          (this.x += this.width / 2), (this.y += this.height / 2);
          break;
        case 270:
          (this.x += (this.height * l) / (U * 2)),
            (this.y -= (this.width * U) / (l * 2));
          break;
        default:
          (this.x -= this.width / 2), (this.y -= this.height / 2);
          break;
      }
      this.fixAndSetPosition();
    }
    addCommands(U) {
      this._uiManager.addCommands(U);
    }
    get currentLayer() {
      return this._uiManager.currentLayer;
    }
    setInBackground() {
      this.div.style.zIndex = 0;
    }
    setInForeground() {
      this.div.style.zIndex = s(this, ba);
    }
    setParent(U) {
      U !== null
        ? ((this.pageIndex = U.pageIndex),
          (this.pageDimensions = U.pageDimensions))
        : b(this, ft, vV).call(this),
        (this.parent = U);
    }
    focusin(U) {
      this._focusEventsAllowed &&
        (s(this, Ht) ? e(this, Ht, !1) : this.parent.setSelected(this));
    }
    focusout(U) {
      var d;
      if (!this._focusEventsAllowed || !this.isAttachedToDOM) return;
      const l = U.relatedTarget;
      (l != null && l.closest(`#${this.id}`)) ||
        (U.preventDefault(),
        ((d = this.parent) != null && d.isMultipleSelection) ||
          this.commitOrRemove());
    }
    commitOrRemove() {
      this.isEmpty() ? this.remove() : this.commit();
    }
    commit() {
      this.addToAnnotationStorage();
    }
    addToAnnotationStorage() {
      this._uiManager.addToAnnotationStorage(this);
    }
    setAt(U, l, d, Z) {
      const [t, F] = this.parentDimensions;
      ([d, Z] = this.screenToPageTranslation(d, Z)),
        (this.x = (U + d) / t),
        (this.y = (l + Z) / F),
        this.fixAndSetPosition();
    }
    translate(U, l) {
      b(this, iQ, nh).call(this, this.parentDimensions, U, l);
    }
    translateInPage(U, l) {
      s(this, IZ) || e(this, IZ, [this.x, this.y]),
        b(this, iQ, nh).call(this, this.pageDimensions, U, l),
        this.div.scrollIntoView({ block: 'nearest' });
    }
    drag(U, l) {
      s(this, IZ) || e(this, IZ, [this.x, this.y]);
      const [d, Z] = this.parentDimensions;
      if (
        ((this.x += U / d),
        (this.y += l / Z),
        this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1))
      ) {
        const { x: V, y: W } = this.div.getBoundingClientRect();
        this.parent.findNewParent(this, V, W) &&
          ((this.x -= Math.floor(this.x)), (this.y -= Math.floor(this.y)));
      }
      let { x: t, y: F } = this;
      const [c, n] = this.getBaseTranslation();
      (t += c),
        (F += n),
        (this.div.style.left = `${(100 * t).toFixed(2)}%`),
        (this.div.style.top = `${(100 * F).toFixed(2)}%`),
        this.div.scrollIntoView({ block: 'nearest' });
    }
    get _hasBeenMoved() {
      return (
        !!s(this, IZ) &&
        (s(this, IZ)[0] !== this.x || s(this, IZ)[1] !== this.y)
      );
    }
    getBaseTranslation() {
      const [U, l] = this.parentDimensions,
        { _borderLineWidth: d } = nl,
        Z = d / U,
        t = d / l;
      switch (this.rotation) {
        case 90:
          return [-Z, t];
        case 180:
          return [Z, t];
        case 270:
          return [Z, -t];
        default:
          return [-Z, -t];
      }
    }
    get _mustFixPosition() {
      return !0;
    }
    fixAndSetPosition(U = this.rotation) {
      const [l, d] = this.pageDimensions;
      let { x: Z, y: t, width: F, height: c } = this;
      if (((F *= l), (c *= d), (Z *= l), (t *= d), this._mustFixPosition))
        switch (U) {
          case 0:
            (Z = Math.max(0, Math.min(l - F, Z))),
              (t = Math.max(0, Math.min(d - c, t)));
            break;
          case 90:
            (Z = Math.max(0, Math.min(l - c, Z))),
              (t = Math.min(d, Math.max(F, t)));
            break;
          case 180:
            (Z = Math.min(l, Math.max(F, Z))),
              (t = Math.min(d, Math.max(c, t)));
            break;
          case 270:
            (Z = Math.min(l, Math.max(c, Z))),
              (t = Math.max(0, Math.min(d - F, t)));
            break;
        }
      (this.x = Z /= l), (this.y = t /= d);
      const [n, V] = this.getBaseTranslation();
      (Z += n), (t += V);
      const { style: W } = this.div;
      (W.left = `${(100 * Z).toFixed(2)}%`),
        (W.top = `${(100 * t).toFixed(2)}%`),
        this.moveInDOM();
    }
    screenToPageTranslation(U, l) {
      var d;
      return b((d = nl), RQ, Vh).call(d, U, l, this.parentRotation);
    }
    pageTranslationToScreen(U, l) {
      var d;
      return b((d = nl), RQ, Vh).call(d, U, l, 360 - this.parentRotation);
    }
    get parentScale() {
      return this._uiManager.viewParameters.realScale;
    }
    get parentRotation() {
      return (
        (this._uiManager.viewParameters.rotation + this.pageRotation) % 360
      );
    }
    get parentDimensions() {
      const {
          parentScale: U,
          pageDimensions: [l, d],
        } = this,
        Z = l * U,
        t = d * U;
      return nU.isCSSRoundSupported ? [Math.round(Z), Math.round(t)] : [Z, t];
    }
    setDims(U, l) {
      const [d, Z] = this.parentDimensions;
      (this.div.style.width = `${((100 * U) / d).toFixed(2)}%`),
        s(this, Kt) ||
          (this.div.style.height = `${((100 * l) / Z).toFixed(2)}%`);
    }
    fixDims() {
      const { style: U } = this.div,
        { height: l, width: d } = U,
        Z = d.endsWith('%'),
        t = !s(this, Kt) && l.endsWith('%');
      if (Z && t) return;
      const [F, c] = this.parentDimensions;
      Z || (U.width = `${((100 * parseFloat(d)) / F).toFixed(2)}%`),
        !s(this, Kt) &&
          !t &&
          (U.height = `${((100 * parseFloat(l)) / c).toFixed(2)}%`);
    }
    getInitialTranslation() {
      return [0, 0];
    }
    altTextFinish() {
      var U;
      (U = s(this, ql)) == null || U.finish();
    }
    async addEditToolbar() {
      return s(this, $l) || s(this, Pt)
        ? s(this, $l)
        : (e(this, $l, new sN(this)),
          this.div.append(s(this, $l).render()),
          s(this, ql) &&
            s(this, $l).addAltTextButton(await s(this, ql).render()),
          s(this, $l));
    }
    removeEditToolbar() {
      var U;
      s(this, $l) &&
        (s(this, $l).remove(),
        e(this, $l, null),
        (U = s(this, ql)) == null || U.destroy());
    }
    getClientDimensions() {
      return this.div.getBoundingClientRect();
    }
    async addAltTextButton() {
      s(this, ql) ||
        (mW.initialize(nl._l10nPromise),
        e(this, ql, new mW(this)),
        s(this, gt) && ((s(this, ql).data = s(this, gt)), e(this, gt, null)),
        await this.addEditToolbar());
    }
    get altTextData() {
      var U;
      return (U = s(this, ql)) == null ? void 0 : U.data;
    }
    set altTextData(U) {
      s(this, ql) && (s(this, ql).data = U);
    }
    hasAltText() {
      var U;
      return !((U = s(this, ql)) != null && U.isEmpty());
    }
    render() {
      (this.div = document.createElement('div')),
        this.div.setAttribute(
          'data-editor-rotation',
          (360 - this.rotation) % 360,
        ),
        (this.div.className = this.name),
        this.div.setAttribute('id', this.id),
        (this.div.tabIndex = s(this, X0) ? -1 : 0),
        this._isVisible || this.div.classList.add('hidden'),
        this.setInForeground();
      const U = this._uiManager._signal;
      this.div.addEventListener('focusin', s(this, Y0), { signal: U }),
        this.div.addEventListener('focusout', s(this, u0), { signal: U });
      const [l, d] = this.parentDimensions;
      this.parentRotation % 180 !== 0 &&
        ((this.div.style.maxWidth = `${((100 * d) / l).toFixed(2)}%`),
        (this.div.style.maxHeight = `${((100 * l) / d).toFixed(2)}%`));
      const [Z, t] = this.getInitialTranslation();
      return (
        this.translate(Z, t), eW(this, this.div, ['pointerdown']), this.div
      );
    }
    pointerdown(U) {
      const { isMac: l } = nU.platform;
      if (U.button !== 0 || (U.ctrlKey && l)) {
        U.preventDefault();
        return;
      }
      if ((e(this, Ht, !0), this._isDraggable)) {
        b(this, Ma, zm).call(this, U);
        return;
      }
      b(this, eQ, Rh).call(this, U);
    }
    moveInDOM() {
      s(this, ad) && clearTimeout(s(this, ad)),
        e(
          this,
          ad,
          setTimeout(() => {
            var U;
            e(this, ad, null),
              (U = this.parent) == null || U.moveEditorInDOM(this);
          }, 0),
        );
    }
    _setParentAndPosition(U, l, d) {
      U.changeParent(this),
        (this.x = l),
        (this.y = d),
        this.fixAndSetPosition();
    }
    getRect(U, l, d = this.rotation) {
      const Z = this.parentScale,
        [t, F] = this.pageDimensions,
        [c, n] = this.pageTranslation,
        V = U / Z,
        W = l / Z,
        a = this.x * t,
        i = this.y * F,
        h = this.width * t,
        N = this.height * F;
      switch (d) {
        case 0:
          return [a + V + c, F - i - W - N + n, a + V + h + c, F - i - W + n];
        case 90:
          return [a + W + c, F - i + V + n, a + W + N + c, F - i + V + h + n];
        case 180:
          return [a - V - h + c, F - i + W + n, a - V + c, F - i + W + N + n];
        case 270:
          return [a - W - N + c, F - i - V - h + n, a - W + c, F - i - V + n];
        default:
          throw new Error('Invalid rotation');
      }
    }
    getRectInCurrentCoords(U, l) {
      const [d, Z, t, F] = U,
        c = t - d,
        n = F - Z;
      switch (this.rotation) {
        case 0:
          return [d, l - F, c, n];
        case 90:
          return [d, l - Z, n, c];
        case 180:
          return [t, l - Z, c, n];
        case 270:
          return [t, l - F, n, c];
        default:
          throw new Error('Invalid rotation');
      }
    }
    onceAdded() {}
    isEmpty() {
      return !1;
    }
    enableEditMode() {
      e(this, Pt, !0);
    }
    disableEditMode() {
      e(this, Pt, !1);
    }
    isInEditMode() {
      return s(this, Pt);
    }
    shouldGetKeyboardEvents() {
      return s(this, vd);
    }
    needsToBeRebuilt() {
      return this.div && !this.isAttachedToDOM;
    }
    rebuild() {
      var l, d;
      const U = this._uiManager._signal;
      (l = this.div) == null ||
        l.addEventListener('focusin', s(this, Y0), { signal: U }),
        (d = this.div) == null ||
          d.addEventListener('focusout', s(this, u0), { signal: U });
    }
    rotate(U) {}
    serialize(U = !1, l = null) {
      sl('An editor must be serializable');
    }
    static deserialize(U, l, d) {
      const Z = new this.prototype.constructor({
        parent: l,
        id: l.getNextId(),
        uiManager: d,
      });
      (Z.rotation = U.rotation), e(Z, gt, U.accessibilityData);
      const [t, F] = Z.pageDimensions,
        [c, n, V, W] = Z.getRectInCurrentCoords(U.rect, F);
      return (
        (Z.x = c / t), (Z.y = n / F), (Z.width = V / t), (Z.height = W / F), Z
      );
    }
    get hasBeenModified() {
      return (
        !!this.annotationElementId &&
        (this.deleted || this.serialize() !== null)
      );
    }
    remove() {
      if (
        (this.div.removeEventListener('focusin', s(this, Y0)),
        this.div.removeEventListener('focusout', s(this, u0)),
        this.isEmpty() || this.commit(),
        this.parent
          ? this.parent.remove(this)
          : this._uiManager.removeEditor(this),
        s(this, ad) && (clearTimeout(s(this, ad)), e(this, ad, null)),
        b(this, ft, vV).call(this),
        this.removeEditToolbar(),
        s(this, yU))
      ) {
        for (const U of s(this, yU).values()) clearTimeout(U);
        e(this, yU, null);
      }
      this.parent = null;
    }
    get isResizable() {
      return !1;
    }
    makeResizable() {
      this.isResizable &&
        (b(this, ea, ym).call(this),
        s(this, Kl).classList.remove('hidden'),
        eW(this, this.div, ['keydown']));
    }
    get toolbarPosition() {
      return null;
    }
    keydown(U) {
      if (!this.isResizable || U.target !== this.div || U.key !== 'Enter')
        return;
      this._uiManager.setSelected(this),
        e(this, vt, {
          savedX: this.x,
          savedY: this.y,
          savedWidth: this.width,
          savedHeight: this.height,
        });
      const l = s(this, Kl).children;
      if (!s(this, KU)) {
        e(this, KU, Array.from(l));
        const F = b(this, Ja, km).bind(this),
          c = b(this, Ga, Dm).bind(this),
          n = this._uiManager._signal;
        for (const V of s(this, KU)) {
          const W = V.getAttribute('data-resizer-name');
          V.setAttribute('role', 'spinbutton'),
            V.addEventListener('keydown', F, { signal: n }),
            V.addEventListener('blur', c, { signal: n }),
            V.addEventListener('focus', b(this, Ta, Im).bind(this, W), {
              signal: n,
            }),
            nl._l10nPromise
              .get(`pdfjs-editor-resizer-label-${W}`)
              .then((a) => V.setAttribute('aria-label', a));
        }
      }
      const d = s(this, KU)[0];
      let Z = 0;
      for (const F of l) {
        if (F === d) break;
        Z++;
      }
      const t =
        (((360 - this.rotation + this.parentRotation) % 360) / 90) *
        (s(this, KU).length / 4);
      if (t !== Z) {
        if (t < Z)
          for (let c = 0; c < Z - t; c++)
            s(this, Kl).append(s(this, Kl).firstChild);
        else if (t > Z)
          for (let c = 0; c < t - Z; c++)
            s(this, Kl).firstChild.before(s(this, Kl).lastChild);
        let F = 0;
        for (const c of l) {
          const V = s(this, KU)[F++].getAttribute('data-resizer-name');
          nl._l10nPromise
            .get(`pdfjs-editor-resizer-label-${V}`)
            .then((W) => c.setAttribute('aria-label', W));
        }
      }
      b(this, mQ, Nh).call(this, 0),
        e(this, vd, !0),
        s(this, Kl).firstChild.focus({ focusVisible: !0 }),
        U.preventDefault(),
        U.stopImmediatePropagation();
    }
    _resizeWithKeyboard(U, l) {
      s(this, vd) &&
        b(this, bQ, ih).call(this, s(this, VQ), { movementX: U, movementY: l });
    }
    _stopResizingWithKeyboard() {
      b(this, ft, vV).call(this), this.div.focus();
    }
    select() {
      var U, l;
      if (
        (this.makeResizable(),
        (U = this.div) == null || U.classList.add('selectedEditor'),
        !s(this, $l))
      ) {
        this.addEditToolbar().then(() => {
          var d, Z;
          (d = this.div) != null &&
            d.classList.contains('selectedEditor') &&
            ((Z = s(this, $l)) == null || Z.show());
        });
        return;
      }
      (l = s(this, $l)) == null || l.show();
    }
    unselect() {
      var U, l, d, Z;
      (U = s(this, Kl)) == null || U.classList.add('hidden'),
        (l = this.div) == null || l.classList.remove('selectedEditor'),
        (d = this.div) != null &&
          d.contains(document.activeElement) &&
          this._uiManager.currentLayer.div.focus({ preventScroll: !0 }),
        (Z = s(this, $l)) == null || Z.hide();
    }
    updateParams(U, l) {}
    disableEditing() {}
    enableEditing() {}
    enterInEditMode() {}
    getImageForAltText() {
      return null;
    }
    get contentDiv() {
      return this.div;
    }
    get isEditing() {
      return s(this, WQ);
    }
    set isEditing(U) {
      e(this, WQ, U),
        this.parent &&
          (U
            ? (this.parent.setSelected(this), this.parent.setActiveEditor(this))
            : this.parent.setActiveEditor(null));
    }
    setAspectRatio(U, l) {
      e(this, Kt, !0);
      const d = U / l,
        { style: Z } = this.div;
      (Z.aspectRatio = d), (Z.height = 'auto');
    }
    static get MIN_SIZE() {
      return 16;
    }
    static canCreateNewEmptyEditor() {
      return !0;
    }
    get telemetryInitialData() {
      return { action: 'added' };
    }
    get telemetryFinalData() {
      return null;
    }
    _reportTelemetry(U, l = !1) {
      if (l) {
        s(this, yU) || e(this, yU, new Map());
        const { action: d } = U;
        let Z = s(this, yU).get(d);
        Z && clearTimeout(Z),
          (Z = setTimeout(() => {
            this._reportTelemetry(U),
              s(this, yU).delete(d),
              s(this, yU).size === 0 && e(this, yU, null);
          }, nl._telemetryTimeout)),
          s(this, yU).set(d, Z);
        return;
      }
      U.type || (U.type = this.editorType),
        this._uiManager._eventBus.dispatch('reporttelemetry', {
          source: this,
          details: { type: 'editing', data: U },
        });
    }
    show(U = this._isVisible) {
      this.div.classList.toggle('hidden', !U), (this._isVisible = U);
    }
    enable() {
      this.div && (this.div.tabIndex = 0), e(this, X0, !1);
    }
    disable() {
      this.div && (this.div.tabIndex = -1), e(this, X0, !0);
    }
    renderAnnotationElement(U) {
      let l = U.container.querySelector('.annotationContent');
      if (!l)
        (l = document.createElement('div')),
          l.classList.add('annotationContent', this.editorType),
          U.container.prepend(l);
      else if (l.nodeName === 'CANVAS') {
        const d = l;
        (l = document.createElement('div')),
          l.classList.add('annotationContent', this.editorType),
          d.before(l);
      }
      return l;
    }
    resetAnnotationElement(U) {
      const { firstChild: l } = U.container;
      l.nodeName === 'DIV' &&
        l.classList.contains('annotationContent') &&
        l.remove();
    }
  };
  (gt = new WeakMap()),
    (KU = new WeakMap()),
    (ql = new WeakMap()),
    (X0 = new WeakMap()),
    (Kt = new WeakMap()),
    (Kl = new WeakMap()),
    (vt = new WeakMap()),
    (Y0 = new WeakMap()),
    (u0 = new WeakMap()),
    ($l = new WeakMap()),
    (VQ = new WeakMap()),
    (Ht = new WeakMap()),
    (IZ = new WeakMap()),
    (WQ = new WeakMap()),
    (Pt = new WeakMap()),
    (vd = new WeakMap()),
    (ad = new WeakMap()),
    (p0 = new WeakMap()),
    (o0 = new WeakMap()),
    (yU = new WeakMap()),
    (aQ = new WeakMap()),
    (ba = new WeakMap()),
    (iQ = new WeakSet()),
    (nh = function ([U, l], d, Z) {
      ([d, Z] = this.screenToPageTranslation(d, Z)),
        (this.x += d / U),
        (this.y += Z / l),
        this.fixAndSetPosition();
    }),
    (RQ = new WeakSet()),
    (Vh = function (U, l, d) {
      switch (d) {
        case 90:
          return [l, -U];
        case 180:
          return [-U, -l];
        case 270:
          return [-l, U];
        default:
          return [U, l];
      }
    }),
    (NQ = new WeakSet()),
    (Wh = function (U) {
      switch (U) {
        case 90: {
          const [l, d] = this.pageDimensions;
          return [0, -l / d, d / l, 0];
        }
        case 180:
          return [-1, 0, 0, -1];
        case 270: {
          const [l, d] = this.pageDimensions;
          return [0, l / d, -d / l, 0];
        }
        default:
          return [1, 0, 0, 1];
      }
    }),
    (ea = new WeakSet()),
    (ym = function () {
      if (s(this, Kl)) return;
      e(this, Kl, document.createElement('div')),
        s(this, Kl).classList.add('resizers');
      const U = this._willKeepAspectRatio
          ? ['topLeft', 'topRight', 'bottomRight', 'bottomLeft']
          : [
              'topLeft',
              'topMiddle',
              'topRight',
              'middleRight',
              'bottomRight',
              'bottomMiddle',
              'bottomLeft',
              'middleLeft',
            ],
        l = this._uiManager._signal;
      for (const d of U) {
        const Z = document.createElement('div');
        s(this, Kl).append(Z),
          Z.classList.add('resizer', d),
          Z.setAttribute('data-resizer-name', d),
          Z.addEventListener('pointerdown', b(this, ma, Lm).bind(this, d), {
            signal: l,
          }),
          Z.addEventListener('contextmenu', VU, { signal: l }),
          (Z.tabIndex = -1);
      }
      this.div.prepend(s(this, Kl));
    }),
    (ma = new WeakSet()),
    (Lm = function (U, l) {
      var M;
      l.preventDefault();
      const { isMac: d } = nU.platform;
      if (l.button !== 0 || (l.ctrlKey && d)) return;
      (M = s(this, ql)) == null || M.toggle(!1);
      const Z = b(this, bQ, ih).bind(this, U),
        t = this._isDraggable;
      this._isDraggable = !1;
      const F = this._uiManager._signal,
        c = { passive: !0, capture: !0, signal: F };
      this.parent.togglePointerEvents(!1),
        window.addEventListener('pointermove', Z, c),
        window.addEventListener('contextmenu', VU, { signal: F });
      const n = this.x,
        V = this.y,
        W = this.width,
        a = this.height,
        i = this.parent.div.style.cursor,
        h = this.div.style.cursor;
      this.div.style.cursor = this.parent.div.style.cursor =
        window.getComputedStyle(l.target).cursor;
      const N = () => {
        var J;
        this.parent.togglePointerEvents(!0),
          (J = s(this, ql)) == null || J.toggle(!0),
          (this._isDraggable = t),
          window.removeEventListener('pointerup', N),
          window.removeEventListener('blur', N),
          window.removeEventListener('pointermove', Z, c),
          window.removeEventListener('contextmenu', VU),
          (this.parent.div.style.cursor = i),
          (this.div.style.cursor = h),
          b(this, hQ, ah).call(this, n, V, W, a);
      };
      window.addEventListener('pointerup', N, { signal: F }),
        window.addEventListener('blur', N, { signal: F });
    }),
    (hQ = new WeakSet()),
    (ah = function (U, l, d, Z) {
      const t = this.x,
        F = this.y,
        c = this.width,
        n = this.height;
      (t === U && F === l && c === d && n === Z) ||
        this.addCommands({
          cmd: () => {
            (this.width = c), (this.height = n), (this.x = t), (this.y = F);
            const [V, W] = this.parentDimensions;
            this.setDims(V * c, W * n), this.fixAndSetPosition();
          },
          undo: () => {
            (this.width = d), (this.height = Z), (this.x = U), (this.y = l);
            const [V, W] = this.parentDimensions;
            this.setDims(V * d, W * Z), this.fixAndSetPosition();
          },
          mustExec: !0,
        });
    }),
    (bQ = new WeakSet()),
    (ih = function (U, l) {
      const [d, Z] = this.parentDimensions,
        t = this.x,
        F = this.y,
        c = this.width,
        n = this.height,
        V = nl.MIN_SIZE / d,
        W = nl.MIN_SIZE / Z,
        a = (C) => Math.round(C * 1e4) / 1e4,
        i = b(this, NQ, Wh).call(this, this.rotation),
        h = (C, r) => [i[0] * C + i[2] * r, i[1] * C + i[3] * r],
        N = b(this, NQ, Wh).call(this, 360 - this.rotation),
        M = (C, r) => [N[0] * C + N[2] * r, N[1] * C + N[3] * r];
      let J,
        m,
        G = !1,
        T = !1;
      switch (U) {
        case 'topLeft':
          (G = !0), (J = (C, r) => [0, 0]), (m = (C, r) => [C, r]);
          break;
        case 'topMiddle':
          (J = (C, r) => [C / 2, 0]), (m = (C, r) => [C / 2, r]);
          break;
        case 'topRight':
          (G = !0), (J = (C, r) => [C, 0]), (m = (C, r) => [0, r]);
          break;
        case 'middleRight':
          (T = !0), (J = (C, r) => [C, r / 2]), (m = (C, r) => [0, r / 2]);
          break;
        case 'bottomRight':
          (G = !0), (J = (C, r) => [C, r]), (m = (C, r) => [0, 0]);
          break;
        case 'bottomMiddle':
          (J = (C, r) => [C / 2, r]), (m = (C, r) => [C / 2, 0]);
          break;
        case 'bottomLeft':
          (G = !0), (J = (C, r) => [0, r]), (m = (C, r) => [C, 0]);
          break;
        case 'middleLeft':
          (T = !0), (J = (C, r) => [0, r / 2]), (m = (C, r) => [C, r / 2]);
          break;
      }
      const u = J(c, n),
        X = m(c, n);
      let S = h(...X);
      const p = a(t + S[0]),
        L = a(F + S[1]);
      let Y = 1,
        o = 1,
        [y, D] = this.screenToPageTranslation(l.movementX, l.movementY);
      if ((([y, D] = M(y / d, D / Z)), G)) {
        const C = Math.hypot(c, n);
        Y = o = Math.max(
          Math.min(
            Math.hypot(X[0] - u[0] - y, X[1] - u[1] - D) / C,
            1 / c,
            1 / n,
          ),
          V / c,
          W / n,
        );
      } else
        T
          ? (Y = Math.max(V, Math.min(1, Math.abs(X[0] - u[0] - y))) / c)
          : (o = Math.max(W, Math.min(1, Math.abs(X[1] - u[1] - D))) / n);
      const I = a(c * Y),
        O = a(n * o);
      S = h(...m(I, O));
      const x = p - S[0],
        B = L - S[1];
      (this.width = I),
        (this.height = O),
        (this.x = x),
        (this.y = B),
        this.setDims(d * I, Z * O),
        this.fixAndSetPosition();
    }),
    (eQ = new WeakSet()),
    (Rh = function (U) {
      const { isMac: l } = nU.platform;
      (U.ctrlKey && !l) || U.shiftKey || (U.metaKey && l)
        ? this.parent.toggleSelected(this)
        : this.parent.setSelected(this);
    }),
    (Ma = new WeakSet()),
    (zm = function (U) {
      const l = this._uiManager.isSelected(this);
      this._uiManager.setUpDragSession();
      let d, Z;
      const t = this._uiManager._signal;
      l &&
        (this.div.classList.add('moving'),
        (d = { passive: !0, capture: !0, signal: t }),
        e(this, p0, U.clientX),
        e(this, o0, U.clientY),
        (Z = (c) => {
          const { clientX: n, clientY: V } = c,
            [W, a] = this.screenToPageTranslation(
              n - s(this, p0),
              V - s(this, o0),
            );
          e(this, p0, n),
            e(this, o0, V),
            this._uiManager.dragSelectedEditors(W, a);
        }),
        window.addEventListener('pointermove', Z, d));
      const F = () => {
        window.removeEventListener('pointerup', F),
          window.removeEventListener('blur', F),
          l &&
            (this.div.classList.remove('moving'),
            window.removeEventListener('pointermove', Z, d)),
          e(this, Ht, !1),
          this._uiManager.endDragSession() || b(this, eQ, Rh).call(this, U);
      };
      window.addEventListener('pointerup', F, { signal: t }),
        window.addEventListener('blur', F, { signal: t });
    }),
    (Ja = new WeakSet()),
    (km = function (U) {
      nl._resizerKeyboardManager.exec(this, U);
    }),
    (Ga = new WeakSet()),
    (Dm = function (U) {
      var l;
      s(this, vd) &&
        ((l = U.relatedTarget) == null ? void 0 : l.parentNode) !==
          s(this, Kl) &&
        b(this, ft, vV).call(this);
    }),
    (Ta = new WeakSet()),
    (Im = function (U) {
      e(this, VQ, s(this, vd) ? U : '');
    }),
    (mQ = new WeakSet()),
    (Nh = function (U) {
      if (s(this, KU)) for (const l of s(this, KU)) l.tabIndex = U;
    }),
    (ft = new WeakSet()),
    (vV = function () {
      if ((e(this, vd, !1), b(this, mQ, Nh).call(this, -1), s(this, vt))) {
        const {
          savedX: U,
          savedY: l,
          savedWidth: d,
          savedHeight: Z,
        } = s(this, vt);
        b(this, hQ, ah).call(this, U, l, d, Z), e(this, vt, null);
      }
    }),
    R(nl, RQ),
    f(nl, '_borderLineWidth', -1),
    f(nl, '_colorManager', new nN()),
    f(nl, '_zIndex', 1),
    f(nl, '_telemetryTimeout', 1e3);
  let Fl = nl;
  class rM extends Fl {
    constructor(U) {
      super(U),
        (this.annotationElementId = U.annotationElementId),
        (this.deleted = !0);
    }
    serialize() {
      return {
        id: this.annotationElementId,
        deleted: !0,
        pageIndex: this.pageIndex,
      };
    }
  }
  const Bb = 3285377520,
    oU = 4294901760,
    Zd = 65535;
  class yb {
    constructor(U) {
      (this.h1 = U ? U & 4294967295 : Bb), (this.h2 = U ? U & 4294967295 : Bb);
    }
    update(U) {
      let l, d;
      if (typeof U == 'string') {
        (l = new Uint8Array(U.length * 2)), (d = 0);
        for (let M = 0, J = U.length; M < J; M++) {
          const m = U.charCodeAt(M);
          m <= 255 ? (l[d++] = m) : ((l[d++] = m >>> 8), (l[d++] = m & 255));
        }
      } else if (ArrayBuffer.isView(U)) (l = U.slice()), (d = l.byteLength);
      else
        throw new Error('Invalid data format, must be a string or TypedArray.');
      const Z = d >> 2,
        t = d - Z * 4,
        F = new Uint32Array(l.buffer, 0, Z);
      let c = 0,
        n = 0,
        V = this.h1,
        W = this.h2;
      const a = 3432918353,
        i = 461845907,
        h = a & Zd,
        N = i & Zd;
      for (let M = 0; M < Z; M++)
        M & 1
          ? ((c = F[M]),
            (c = ((c * a) & oU) | ((c * h) & Zd)),
            (c = (c << 15) | (c >>> 17)),
            (c = ((c * i) & oU) | ((c * N) & Zd)),
            (V ^= c),
            (V = (V << 13) | (V >>> 19)),
            (V = V * 5 + 3864292196))
          : ((n = F[M]),
            (n = ((n * a) & oU) | ((n * h) & Zd)),
            (n = (n << 15) | (n >>> 17)),
            (n = ((n * i) & oU) | ((n * N) & Zd)),
            (W ^= n),
            (W = (W << 13) | (W >>> 19)),
            (W = W * 5 + 3864292196));
      switch (((c = 0), t)) {
        case 3:
          c ^= l[Z * 4 + 2] << 16;
        case 2:
          c ^= l[Z * 4 + 1] << 8;
        case 1:
          (c ^= l[Z * 4]),
            (c = ((c * a) & oU) | ((c * h) & Zd)),
            (c = (c << 15) | (c >>> 17)),
            (c = ((c * i) & oU) | ((c * N) & Zd)),
            Z & 1 ? (V ^= c) : (W ^= c);
      }
      (this.h1 = V), (this.h2 = W);
    }
    hexdigest() {
      let U = this.h1,
        l = this.h2;
      return (
        (U ^= l >>> 1),
        (U = ((U * 3981806797) & oU) | ((U * 36045) & Zd)),
        (l =
          ((l * 4283543511) & oU) |
          (((((l << 16) | (U >>> 16)) * 2950163797) & oU) >>> 16)),
        (U ^= l >>> 1),
        (U = ((U * 444984403) & oU) | ((U * 60499) & Zd)),
        (l =
          ((l * 3301882366) & oU) |
          (((((l << 16) | (U >>> 16)) * 3120437893) & oU) >>> 16)),
        (U ^= l >>> 1),
        (U >>> 0).toString(16).padStart(8, '0') +
          (l >>> 0).toString(16).padStart(8, '0')
      );
    }
  }
  const VN = Object.freeze({ map: null, hash: '', transfer: void 0 });
  class WN {
    constructor() {
      R(this, Sa);
      R(this, At, !1);
      R(this, vl, new Map());
      (this.onSetModified = null),
        (this.onResetModified = null),
        (this.onAnnotationEditor = null);
    }
    getValue(U, l) {
      const d = s(this, vl).get(U);
      return d === void 0 ? l : Object.assign(l, d);
    }
    getRawValue(U) {
      return s(this, vl).get(U);
    }
    remove(U) {
      if (
        (s(this, vl).delete(U),
        s(this, vl).size === 0 && this.resetModified(),
        typeof this.onAnnotationEditor == 'function')
      ) {
        for (const l of s(this, vl).values()) if (l instanceof Fl) return;
        this.onAnnotationEditor(null);
      }
    }
    setValue(U, l) {
      const d = s(this, vl).get(U);
      let Z = !1;
      if (d !== void 0)
        for (const [t, F] of Object.entries(l))
          d[t] !== F && ((Z = !0), (d[t] = F));
      else (Z = !0), s(this, vl).set(U, l);
      Z && b(this, Sa, Em).call(this),
        l instanceof Fl &&
          typeof this.onAnnotationEditor == 'function' &&
          this.onAnnotationEditor(l.constructor._type);
    }
    has(U) {
      return s(this, vl).has(U);
    }
    getAll() {
      return s(this, vl).size > 0 ? qR(s(this, vl)) : null;
    }
    setAll(U) {
      for (const [l, d] of Object.entries(U)) this.setValue(l, d);
    }
    get size() {
      return s(this, vl).size;
    }
    resetModified() {
      s(this, At) &&
        (e(this, At, !1),
        typeof this.onResetModified == 'function' && this.onResetModified());
    }
    get print() {
      return new Lb(this);
    }
    get serializable() {
      if (s(this, vl).size === 0) return VN;
      const U = new Map(),
        l = new yb(),
        d = [],
        Z = Object.create(null);
      let t = !1;
      for (const [F, c] of s(this, vl)) {
        const n = c instanceof Fl ? c.serialize(!1, Z) : c;
        n &&
          (U.set(F, n),
          l.update(`${F}:${JSON.stringify(n)}`),
          t || (t = !!n.bitmap));
      }
      if (t) for (const F of U.values()) F.bitmap && d.push(F.bitmap);
      return U.size > 0 ? { map: U, hash: l.hexdigest(), transfer: d } : VN;
    }
    get editorStats() {
      let U = null;
      const l = new Map();
      for (const d of s(this, vl).values()) {
        if (!(d instanceof Fl)) continue;
        const Z = d.telemetryFinalData;
        if (!Z) continue;
        const { type: t } = Z;
        l.has(t) || l.set(t, Object.getPrototypeOf(d).constructor),
          U || (U = Object.create(null));
        const F = U[t] || (U[t] = new Map());
        for (const [c, n] of Object.entries(Z)) {
          if (c === 'type') continue;
          let V = F.get(c);
          V || ((V = new Map()), F.set(c, V));
          const W = V.get(n) ?? 0;
          V.set(n, W + 1);
        }
      }
      for (const [d, Z] of l) U[d] = Z.computeTelemetryFinalData(U[d]);
      return U;
    }
  }
  (At = new WeakMap()),
    (vl = new WeakMap()),
    (Sa = new WeakSet()),
    (Em = function () {
      s(this, At) ||
        (e(this, At, !0),
        typeof this.onSetModified == 'function' && this.onSetModified());
    });
  class Lb extends WN {
    constructor(l) {
      super();
      R(this, MQ, void 0);
      const { map: d, hash: Z, transfer: t } = l.serializable,
        F = structuredClone(d, t ? { transfer: t } : null);
      e(this, MQ, { map: F, hash: Z, transfer: t });
    }
    get print() {
      sl('Should not call PrintAnnotationStorage.print');
    }
    get serializable() {
      return s(this, MQ);
    }
  }
  MQ = new WeakMap();
  class wM {
    constructor({
      ownerDocument: U = globalThis.document,
      styleElement: l = null,
    }) {
      R(this, B0, new Set());
      (this._document = U),
        (this.nativeFontFaces = new Set()),
        (this.styleElement = null),
        (this.loadingRequests = []),
        (this.loadTestFontId = 0);
    }
    addNativeFontFace(U) {
      this.nativeFontFaces.add(U), this._document.fonts.add(U);
    }
    removeNativeFontFace(U) {
      this.nativeFontFaces.delete(U), this._document.fonts.delete(U);
    }
    insertRule(U) {
      this.styleElement ||
        ((this.styleElement = this._document.createElement('style')),
        this._document.documentElement
          .getElementsByTagName('head')[0]
          .append(this.styleElement));
      const l = this.styleElement.sheet;
      l.insertRule(U, l.cssRules.length);
    }
    clear() {
      for (const U of this.nativeFontFaces) this._document.fonts.delete(U);
      this.nativeFontFaces.clear(),
        s(this, B0).clear(),
        this.styleElement &&
          (this.styleElement.remove(), (this.styleElement = null));
    }
    async loadSystemFont({ systemFontInfo: U, _inspectFont: l }) {
      if (!(!U || s(this, B0).has(U.loadedName))) {
        if (
          (Bl(
            !this.disableFontFace,
            "loadSystemFont shouldn't be called when `disableFontFace` is set.",
          ),
          this.isFontLoadingAPISupported)
        ) {
          const { loadedName: d, src: Z, style: t } = U,
            F = new FontFace(d, Z, t);
          this.addNativeFontFace(F);
          try {
            await F.load(), s(this, B0).add(d), l == null || l(U);
          } catch {
            _(
              `Cannot load system font: ${U.baseFontName}, installing it could help to improve PDF rendering.`,
            ),
              this.removeNativeFontFace(F);
          }
          return;
        }
        sl('Not implemented: loadSystemFont without the Font Loading API.');
      }
    }
    async bind(U) {
      if (U.attached || (U.missingFile && !U.systemFontInfo)) return;
      if (((U.attached = !0), U.systemFontInfo)) {
        await this.loadSystemFont(U);
        return;
      }
      if (this.isFontLoadingAPISupported) {
        const d = U.createNativeFontFace();
        if (d) {
          this.addNativeFontFace(d);
          try {
            await d.loaded;
          } catch (Z) {
            throw (
              (_(`Failed to load font '${d.family}': '${Z}'.`),
              (U.disableFontFace = !0),
              Z)
            );
          }
        }
        return;
      }
      const l = U.createFontFaceRule();
      if (l) {
        if ((this.insertRule(l), this.isSyncFontLoadingSupported)) return;
        await new Promise((d) => {
          const Z = this._queueLoadingCallback(d);
          this._prepareFontLoadEvent(U, Z);
        });
      }
    }
    get isFontLoadingAPISupported() {
      var l;
      const U = !!((l = this._document) != null && l.fonts);
      return Zl(this, 'isFontLoadingAPISupported', U);
    }
    get isSyncFontLoadingSupported() {
      let U = !1;
      return (
        (fl ||
          (typeof navigator < 'u' &&
            typeof (navigator == null ? void 0 : navigator.userAgent) ==
              'string' &&
            /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent))) &&
          (U = !0),
        Zl(this, 'isSyncFontLoadingSupported', U)
      );
    }
    _queueLoadingCallback(U) {
      function l() {
        for (
          Bl(!Z.done, 'completeRequest() cannot be called twice.'), Z.done = !0;
          d.length > 0 && d[0].done;

        ) {
          const t = d.shift();
          setTimeout(t.callback, 0);
        }
      }
      const { loadingRequests: d } = this,
        Z = { done: !1, complete: l, callback: U };
      return d.push(Z), Z;
    }
    get _loadTestFont() {
      const U = atob(
        'T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==',
      );
      return Zl(this, '_loadTestFont', U);
    }
    _prepareFontLoadEvent(U, l) {
      function d(u, X) {
        return (
          (u.charCodeAt(X) << 24) |
          (u.charCodeAt(X + 1) << 16) |
          (u.charCodeAt(X + 2) << 8) |
          (u.charCodeAt(X + 3) & 255)
        );
      }
      function Z(u, X, S, p) {
        const L = u.substring(0, X),
          Y = u.substring(X + S);
        return L + p + Y;
      }
      let t, F;
      const c = this._document.createElement('canvas');
      (c.width = 1), (c.height = 1);
      const n = c.getContext('2d');
      let V = 0;
      function W(u, X) {
        if (++V > 30) {
          _('Load test font never loaded.'), X();
          return;
        }
        if (
          ((n.font = '30px ' + u),
          n.fillText('.', 0, 20),
          n.getImageData(0, 0, 1, 1).data[3] > 0)
        ) {
          X();
          return;
        }
        setTimeout(W.bind(null, u, X));
      }
      const a = `lt${Date.now()}${this.loadTestFontId++}`;
      let i = this._loadTestFont;
      i = Z(i, 976, a.length, a);
      const N = 16,
        M = 1482184792;
      let J = d(i, N);
      for (t = 0, F = a.length - 3; t < F; t += 4) J = (J - M + d(a, t)) | 0;
      t < a.length && (J = (J - M + d(a + 'XXX', t)) | 0),
        (i = Z(i, N, 4, TM(J)));
      const m = `url(data:font/opentype;base64,${btoa(i)});`,
        G = `@font-face {font-family:"${a}";src:${m}}`;
      this.insertRule(G);
      const T = this._document.createElement('div');
      (T.style.visibility = 'hidden'),
        (T.style.width = T.style.height = '10px'),
        (T.style.position = 'absolute'),
        (T.style.top = T.style.left = '0px');
      for (const u of [U.loadedName, a]) {
        const X = this._document.createElement('span');
        (X.textContent = 'Hi'), (X.style.fontFamily = u), T.append(X);
      }
      this._document.body.append(T),
        W(a, () => {
          T.remove(), l.complete();
        });
    }
  }
  B0 = new WeakMap();
  class xM {
    constructor(U, { disableFontFace: l = !1, inspectFont: d = null }) {
      this.compiledGlyphs = Object.create(null);
      for (const Z in U) this[Z] = U[Z];
      (this.disableFontFace = l === !0), (this._inspectFont = d);
    }
    createNativeFontFace() {
      var l;
      if (!this.data || this.disableFontFace) return null;
      let U;
      if (!this.cssFontInfo) U = new FontFace(this.loadedName, this.data, {});
      else {
        const d = { weight: this.cssFontInfo.fontWeight };
        this.cssFontInfo.italicAngle &&
          (d.style = `oblique ${this.cssFontInfo.italicAngle}deg`),
          (U = new FontFace(this.cssFontInfo.fontFamily, this.data, d));
      }
      return (l = this._inspectFont) == null || l.call(this, this), U;
    }
    createFontFaceRule() {
      var Z;
      if (!this.data || this.disableFontFace) return null;
      const U = Jb(this.data),
        l = `url(data:${this.mimetype};base64,${btoa(U)});`;
      let d;
      if (!this.cssFontInfo)
        d = `@font-face {font-family:"${this.loadedName}";src:${l}}`;
      else {
        let t = `font-weight: ${this.cssFontInfo.fontWeight};`;
        this.cssFontInfo.italicAngle &&
          (t += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`),
          (d = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${t}src:${l}}`);
      }
      return (Z = this._inspectFont) == null || Z.call(this, this, l), d;
    }
    getPathGenerator(U, l) {
      if (this.compiledGlyphs[l] !== void 0) return this.compiledGlyphs[l];
      let d;
      try {
        d = U.get(this.loadedName + '_path_' + l);
      } catch (t) {
        _(`getPathGenerator - ignoring character: "${t}".`);
      }
      if (!Array.isArray(d) || d.length === 0)
        return (this.compiledGlyphs[l] = function (t, F) {});
      const Z = [];
      for (let t = 0, F = d.length; t < F; )
        switch (d[t++]) {
          case od.BEZIER_CURVE_TO:
            {
              const [c, n, V, W, a, i] = d.slice(t, t + 6);
              Z.push((h) => h.bezierCurveTo(c, n, V, W, a, i)), (t += 6);
            }
            break;
          case od.MOVE_TO:
            {
              const [c, n] = d.slice(t, t + 2);
              Z.push((V) => V.moveTo(c, n)), (t += 2);
            }
            break;
          case od.LINE_TO:
            {
              const [c, n] = d.slice(t, t + 2);
              Z.push((V) => V.lineTo(c, n)), (t += 2);
            }
            break;
          case od.QUADRATIC_CURVE_TO:
            {
              const [c, n, V, W] = d.slice(t, t + 4);
              Z.push((a) => a.quadraticCurveTo(c, n, V, W)), (t += 4);
            }
            break;
          case od.RESTORE:
            Z.push((c) => c.restore());
            break;
          case od.SAVE:
            Z.push((c) => c.save());
            break;
          case od.SCALE:
            Bl(
              Z.length === 2,
              'Scale command is only valid at the third position.',
            );
            break;
          case od.TRANSFORM:
            {
              const [c, n, V, W, a, i] = d.slice(t, t + 6);
              Z.push((h) => h.transform(c, n, V, W, a, i)), (t += 6);
            }
            break;
          case od.TRANSLATE:
            {
              const [c, n] = d.slice(t, t + 2);
              Z.push((V) => V.translate(c, n)), (t += 2);
            }
            break;
        }
      return (this.compiledGlyphs[l] = function (F, c) {
        Z[0](F), Z[1](F), F.scale(c, -c);
        for (let n = 2, V = Z.length; n < V; n++) Z[n](F);
      });
    }
  }
  if (fl) {
    var aN = Promise.withResolvers(),
      Ns = null;
    (async () => {
      const U = await Promise.resolve().then(() => ps),
        l = await Promise.resolve().then(() => ps),
        d = await Promise.resolve().then(() => ps),
        Z = await Promise.resolve().then(() => ps);
      let t, F;
      try {
        t = await Promise.resolve().then(() => ps);
      } catch {}
      try {
        F = await Promise.resolve().then(() => KS);
      } catch {}
      return new Map(
        Object.entries({
          fs: U,
          http: l,
          https: d,
          url: Z,
          canvas: t,
          path2d: F,
        }),
      );
    })().then(
      (U) => {
        var l, d, Z, t;
        if (((Ns = U), aN.resolve(), !globalThis.DOMMatrix)) {
          const F = (l = U.get('canvas')) == null ? void 0 : l.DOMMatrix;
          F
            ? (globalThis.DOMMatrix = F)
            : _('Cannot polyfill `DOMMatrix`, rendering may be broken.');
        }
        if (!globalThis.Path2D) {
          const F =
              (d = U.get('canvas')) == null
                ? void 0
                : d.CanvasRenderingContext2D,
            c =
              (Z = U.get('path2d')) == null
                ? void 0
                : Z.applyPath2DToCanvasRenderingContext,
            n = (t = U.get('path2d')) == null ? void 0 : t.Path2D;
          F && c && n
            ? (c(F), (globalThis.Path2D = n))
            : _('Cannot polyfill `Path2D`, rendering may be broken.');
        }
      },
      (U) => {
        _(`loadPackages: ${U}`), (Ns = new Map()), aN.resolve();
      },
    );
  }
  class td {
    static get promise() {
      return aN.promise;
    }
    static get(U) {
      return Ns == null ? void 0 : Ns.get(U);
    }
  }
  const zb = function (Q) {
    return td
      .get('fs')
      .promises.readFile(Q)
      .then((l) => new Uint8Array(l));
  };
  class jM extends iW {}
  class OM extends RW {
    _createCanvas(U, l) {
      return td.get('canvas').createCanvas(U, l);
    }
  }
  class gM extends NW {
    _fetchData(U, l) {
      return zb(U).then((d) => ({ cMapData: d, compressionType: l }));
    }
  }
  class KM extends hW {
    _fetchData(U) {
      return zb(U);
    }
  }
  const dU = { FILL: 'Fill', STROKE: 'Stroke', SHADING: 'Shading' };
  function iN(Q, U) {
    if (!U) return;
    const l = U[2] - U[0],
      d = U[3] - U[1],
      Z = new Path2D();
    Z.rect(U[0], U[1], l, d), Q.clip(Z);
  }
  class hs {
    constructor() {
      this.constructor === hs && sl('Cannot initialize BaseShadingPattern.');
    }
    getPattern() {
      sl('Abstract method `getPattern` called.');
    }
  }
  class vM extends hs {
    constructor(U) {
      super(),
        (this._type = U[1]),
        (this._bbox = U[2]),
        (this._colorStops = U[3]),
        (this._p0 = U[4]),
        (this._p1 = U[5]),
        (this._r0 = U[6]),
        (this._r1 = U[7]),
        (this.matrix = null);
    }
    _createGradient(U) {
      let l;
      this._type === 'axial'
        ? (l = U.createLinearGradient(
            this._p0[0],
            this._p0[1],
            this._p1[0],
            this._p1[1],
          ))
        : this._type === 'radial' &&
          (l = U.createRadialGradient(
            this._p0[0],
            this._p0[1],
            this._r0,
            this._p1[0],
            this._p1[1],
            this._r1,
          ));
      for (const d of this._colorStops) l.addColorStop(d[0], d[1]);
      return l;
    }
    getPattern(U, l, d, Z) {
      let t;
      if (Z === dU.STROKE || Z === dU.FILL) {
        const F = l.current.getClippedPathBoundingBox(Z, hl(U)) || [0, 0, 0, 0],
          c = Math.ceil(F[2] - F[0]) || 1,
          n = Math.ceil(F[3] - F[1]) || 1,
          V = l.cachedCanvases.getCanvas('pattern', c, n, !0),
          W = V.context;
        W.clearRect(0, 0, W.canvas.width, W.canvas.height),
          W.beginPath(),
          W.rect(0, 0, W.canvas.width, W.canvas.height),
          W.translate(-F[0], -F[1]),
          (d = g.transform(d, [1, 0, 0, 1, F[0], F[1]])),
          W.transform(...l.baseTransform),
          this.matrix && W.transform(...this.matrix),
          iN(W, this._bbox),
          (W.fillStyle = this._createGradient(W)),
          W.fill(),
          (t = U.createPattern(V.canvas, 'no-repeat'));
        const a = new DOMMatrix(d);
        t.setTransform(a);
      } else iN(U, this._bbox), (t = this._createGradient(U));
      return t;
    }
  }
  function RN(Q, U, l, d, Z, t, F, c) {
    const n = U.coords,
      V = U.colors,
      W = Q.data,
      a = Q.width * 4;
    let i;
    n[l + 1] > n[d + 1] &&
      ((i = l), (l = d), (d = i), (i = t), (t = F), (F = i)),
      n[d + 1] > n[Z + 1] &&
        ((i = d), (d = Z), (Z = i), (i = F), (F = c), (c = i)),
      n[l + 1] > n[d + 1] &&
        ((i = l), (l = d), (d = i), (i = t), (t = F), (F = i));
    const h = (n[l] + U.offsetX) * U.scaleX,
      N = (n[l + 1] + U.offsetY) * U.scaleY,
      M = (n[d] + U.offsetX) * U.scaleX,
      J = (n[d + 1] + U.offsetY) * U.scaleY,
      m = (n[Z] + U.offsetX) * U.scaleX,
      G = (n[Z + 1] + U.offsetY) * U.scaleY;
    if (N >= G) return;
    const T = V[t],
      u = V[t + 1],
      X = V[t + 2],
      S = V[F],
      p = V[F + 1],
      L = V[F + 2],
      Y = V[c],
      o = V[c + 1],
      y = V[c + 2],
      D = Math.round(N),
      I = Math.round(G);
    let O, x, B, C, r, Wl, Jl, NU;
    for (let al = D; al <= I; al++) {
      if (al < J) {
        const z = al < N ? 0 : (N - al) / (N - J);
        (O = h - (h - M) * z),
          (x = T - (T - S) * z),
          (B = u - (u - p) * z),
          (C = X - (X - L) * z);
      } else {
        let z;
        al > G ? (z = 1) : J === G ? (z = 0) : (z = (J - al) / (J - G)),
          (O = M - (M - m) * z),
          (x = S - (S - Y) * z),
          (B = p - (p - o) * z),
          (C = L - (L - y) * z);
      }
      let Rl;
      al < N ? (Rl = 0) : al > G ? (Rl = 1) : (Rl = (N - al) / (N - G)),
        (r = h - (h - m) * Rl),
        (Wl = T - (T - Y) * Rl),
        (Jl = u - (u - o) * Rl),
        (NU = X - (X - y) * Rl);
      const ht = Math.round(Math.min(O, r)),
        CU = Math.round(Math.max(O, r));
      let w = a * al + ht * 4;
      for (let z = ht; z <= CU; z++)
        (Rl = (O - z) / (O - r)),
          Rl < 0 ? (Rl = 0) : Rl > 1 && (Rl = 1),
          (W[w++] = (x - (x - Wl) * Rl) | 0),
          (W[w++] = (B - (B - Jl) * Rl) | 0),
          (W[w++] = (C - (C - NU) * Rl) | 0),
          (W[w++] = 255);
    }
  }
  function HM(Q, U, l) {
    const d = U.coords,
      Z = U.colors;
    let t, F;
    switch (U.type) {
      case 'lattice':
        const c = U.verticesPerRow,
          n = Math.floor(d.length / c) - 1,
          V = c - 1;
        for (t = 0; t < n; t++) {
          let W = t * c;
          for (let a = 0; a < V; a++, W++)
            RN(Q, l, d[W], d[W + 1], d[W + c], Z[W], Z[W + 1], Z[W + c]),
              RN(
                Q,
                l,
                d[W + c + 1],
                d[W + 1],
                d[W + c],
                Z[W + c + 1],
                Z[W + 1],
                Z[W + c],
              );
        }
        break;
      case 'triangles':
        for (t = 0, F = d.length; t < F; t += 3)
          RN(Q, l, d[t], d[t + 1], d[t + 2], Z[t], Z[t + 1], Z[t + 2]);
        break;
      default:
        throw new Error('illegal figure');
    }
  }
  class PM extends hs {
    constructor(U) {
      super(),
        (this._coords = U[2]),
        (this._colors = U[3]),
        (this._figures = U[4]),
        (this._bounds = U[5]),
        (this._bbox = U[7]),
        (this._background = U[8]),
        (this.matrix = null);
    }
    _createMeshCanvas(U, l, d) {
      const c = Math.floor(this._bounds[0]),
        n = Math.floor(this._bounds[1]),
        V = Math.ceil(this._bounds[2]) - c,
        W = Math.ceil(this._bounds[3]) - n,
        a = Math.min(Math.ceil(Math.abs(V * U[0] * 1.1)), 3e3),
        i = Math.min(Math.ceil(Math.abs(W * U[1] * 1.1)), 3e3),
        h = V / a,
        N = W / i,
        M = {
          coords: this._coords,
          colors: this._colors,
          offsetX: -c,
          offsetY: -n,
          scaleX: 1 / h,
          scaleY: 1 / N,
        },
        J = a + 2 * 2,
        m = i + 2 * 2,
        G = d.getCanvas('mesh', J, m, !1),
        T = G.context,
        u = T.createImageData(a, i);
      if (l) {
        const S = u.data;
        for (let p = 0, L = S.length; p < L; p += 4)
          (S[p] = l[0]), (S[p + 1] = l[1]), (S[p + 2] = l[2]), (S[p + 3] = 255);
      }
      for (const S of this._figures) HM(u, S, M);
      return (
        T.putImageData(u, 2, 2),
        {
          canvas: G.canvas,
          offsetX: c - 2 * h,
          offsetY: n - 2 * N,
          scaleX: h,
          scaleY: N,
        }
      );
    }
    getPattern(U, l, d, Z) {
      iN(U, this._bbox);
      let t;
      if (Z === dU.SHADING) t = g.singularValueDecompose2dScale(hl(U));
      else if (
        ((t = g.singularValueDecompose2dScale(l.baseTransform)), this.matrix)
      ) {
        const c = g.singularValueDecompose2dScale(this.matrix);
        t = [t[0] * c[0], t[1] * c[1]];
      }
      const F = this._createMeshCanvas(
        t,
        Z === dU.SHADING ? null : this._background,
        l.cachedCanvases,
      );
      return (
        Z !== dU.SHADING &&
          (U.setTransform(...l.baseTransform),
          this.matrix && U.transform(...this.matrix)),
        U.translate(F.offsetX, F.offsetY),
        U.scale(F.scaleX, F.scaleY),
        U.createPattern(F.canvas, 'no-repeat')
      );
    }
  }
  class fM extends hs {
    getPattern() {
      return 'hotpink';
    }
  }
  function AM(Q) {
    switch (Q[0]) {
      case 'RadialAxial':
        return new vM(Q);
      case 'Mesh':
        return new PM(Q);
      case 'Dummy':
        return new fM();
    }
    throw new Error(`Unknown IR type: ${Q[0]}`);
  }
  const kb = { COLORED: 1, UNCOLORED: 2 },
    Xa = class Xa {
      constructor(U, l, d, Z, t) {
        (this.operatorList = U[2]),
          (this.matrix = U[3]),
          (this.bbox = U[4]),
          (this.xstep = U[5]),
          (this.ystep = U[6]),
          (this.paintType = U[7]),
          (this.tilingType = U[8]),
          (this.color = l),
          (this.ctx = d),
          (this.canvasGraphicsFactory = Z),
          (this.baseTransform = t);
      }
      createPatternCanvas(U) {
        const l = this.operatorList,
          d = this.bbox,
          Z = this.xstep,
          t = this.ystep,
          F = this.paintType,
          c = this.tilingType,
          n = this.color,
          V = this.canvasGraphicsFactory;
        VW('TilingType: ' + c);
        const W = d[0],
          a = d[1],
          i = d[2],
          h = d[3],
          N = g.singularValueDecompose2dScale(this.matrix),
          M = g.singularValueDecompose2dScale(this.baseTransform),
          J = [N[0] * M[0], N[1] * M[1]],
          m = this.getSizeAndScale(Z, this.ctx.canvas.width, J[0]),
          G = this.getSizeAndScale(t, this.ctx.canvas.height, J[1]),
          T = U.cachedCanvases.getCanvas('pattern', m.size, G.size, !0),
          u = T.context,
          X = V.createCanvasGraphics(u);
        (X.groupLevel = U.groupLevel),
          this.setFillAndStrokeStyleToContext(X, F, n);
        let S = W,
          p = a,
          L = i,
          Y = h;
        return (
          W < 0 && ((S = 0), (L += Math.abs(W))),
          a < 0 && ((p = 0), (Y += Math.abs(a))),
          u.translate(-(m.scale * S), -(G.scale * p)),
          X.transform(m.scale, 0, 0, G.scale, 0, 0),
          u.save(),
          this.clipBbox(X, S, p, L, Y),
          (X.baseTransform = hl(X.ctx)),
          X.executeOperatorList(l),
          X.endDrawing(),
          {
            canvas: T.canvas,
            scaleX: m.scale,
            scaleY: G.scale,
            offsetX: S,
            offsetY: p,
          }
        );
      }
      getSizeAndScale(U, l, d) {
        U = Math.abs(U);
        const Z = Math.max(Xa.MAX_PATTERN_SIZE, l);
        let t = Math.ceil(U * d);
        return t >= Z ? (t = Z) : (d = t / U), { scale: d, size: t };
      }
      clipBbox(U, l, d, Z, t) {
        const F = Z - l,
          c = t - d;
        U.ctx.rect(l, d, F, c),
          U.current.updateRectMinMax(hl(U.ctx), [l, d, Z, t]),
          U.clip(),
          U.endPath();
      }
      setFillAndStrokeStyleToContext(U, l, d) {
        const Z = U.ctx,
          t = U.current;
        switch (l) {
          case kb.COLORED:
            const F = this.ctx;
            (Z.fillStyle = F.fillStyle),
              (Z.strokeStyle = F.strokeStyle),
              (t.fillColor = F.fillStyle),
              (t.strokeColor = F.strokeStyle);
            break;
          case kb.UNCOLORED:
            const c = g.makeHexColor(d[0], d[1], d[2]);
            (Z.fillStyle = c),
              (Z.strokeStyle = c),
              (t.fillColor = c),
              (t.strokeColor = c);
            break;
          default:
            throw new GM(`Unsupported paint type: ${l}`);
        }
      }
      getPattern(U, l, d, Z) {
        let t = d;
        Z !== dU.SHADING &&
          ((t = g.transform(t, l.baseTransform)),
          this.matrix && (t = g.transform(t, this.matrix)));
        const F = this.createPatternCanvas(l);
        let c = new DOMMatrix(t);
        (c = c.translate(F.offsetX, F.offsetY)),
          (c = c.scale(1 / F.scaleX, 1 / F.scaleY));
        const n = U.createPattern(F.canvas, 'repeat');
        return n.setTransform(c), n;
      }
    };
  f(Xa, 'MAX_PATTERN_SIZE', 3e3);
  let NN = Xa;
  function _M({
    src: Q,
    srcPos: U = 0,
    dest: l,
    width: d,
    height: Z,
    nonBlackColor: t = 4294967295,
    inverseDecode: F = !1,
  }) {
    const c = nU.isLittleEndian ? 4278190080 : 255,
      [n, V] = F ? [t, c] : [c, t],
      W = d >> 3,
      a = d & 7,
      i = Q.length;
    l = new Uint32Array(l.buffer);
    let h = 0;
    for (let N = 0; N < Z; N++) {
      for (const J = U + W; U < J; U++) {
        const m = U < i ? Q[U] : 255;
        (l[h++] = m & 128 ? V : n),
          (l[h++] = m & 64 ? V : n),
          (l[h++] = m & 32 ? V : n),
          (l[h++] = m & 16 ? V : n),
          (l[h++] = m & 8 ? V : n),
          (l[h++] = m & 4 ? V : n),
          (l[h++] = m & 2 ? V : n),
          (l[h++] = m & 1 ? V : n);
      }
      if (a === 0) continue;
      const M = U < i ? Q[U++] : 255;
      for (let J = 0; J < a; J++) l[h++] = M & (1 << (7 - J)) ? V : n;
    }
    return { srcPos: U, destPos: h };
  }
  const Db = 16,
    Ib = 100,
    qM = 15,
    Eb = 10,
    Cb = 1e3,
    WU = 16;
  function $M(Q, U) {
    if (Q._removeMirroring)
      throw new Error('Context is already forwarding operations.');
    (Q.__originalSave = Q.save),
      (Q.__originalRestore = Q.restore),
      (Q.__originalRotate = Q.rotate),
      (Q.__originalScale = Q.scale),
      (Q.__originalTranslate = Q.translate),
      (Q.__originalTransform = Q.transform),
      (Q.__originalSetTransform = Q.setTransform),
      (Q.__originalResetTransform = Q.resetTransform),
      (Q.__originalClip = Q.clip),
      (Q.__originalMoveTo = Q.moveTo),
      (Q.__originalLineTo = Q.lineTo),
      (Q.__originalBezierCurveTo = Q.bezierCurveTo),
      (Q.__originalRect = Q.rect),
      (Q.__originalClosePath = Q.closePath),
      (Q.__originalBeginPath = Q.beginPath),
      (Q._removeMirroring = () => {
        (Q.save = Q.__originalSave),
          (Q.restore = Q.__originalRestore),
          (Q.rotate = Q.__originalRotate),
          (Q.scale = Q.__originalScale),
          (Q.translate = Q.__originalTranslate),
          (Q.transform = Q.__originalTransform),
          (Q.setTransform = Q.__originalSetTransform),
          (Q.resetTransform = Q.__originalResetTransform),
          (Q.clip = Q.__originalClip),
          (Q.moveTo = Q.__originalMoveTo),
          (Q.lineTo = Q.__originalLineTo),
          (Q.bezierCurveTo = Q.__originalBezierCurveTo),
          (Q.rect = Q.__originalRect),
          (Q.closePath = Q.__originalClosePath),
          (Q.beginPath = Q.__originalBeginPath),
          delete Q._removeMirroring;
      }),
      (Q.save = function () {
        U.save(), this.__originalSave();
      }),
      (Q.restore = function () {
        U.restore(), this.__originalRestore();
      }),
      (Q.translate = function (d, Z) {
        U.translate(d, Z), this.__originalTranslate(d, Z);
      }),
      (Q.scale = function (d, Z) {
        U.scale(d, Z), this.__originalScale(d, Z);
      }),
      (Q.transform = function (d, Z, t, F, c, n) {
        U.transform(d, Z, t, F, c, n),
          this.__originalTransform(d, Z, t, F, c, n);
      }),
      (Q.setTransform = function (d, Z, t, F, c, n) {
        U.setTransform(d, Z, t, F, c, n),
          this.__originalSetTransform(d, Z, t, F, c, n);
      }),
      (Q.resetTransform = function () {
        U.resetTransform(), this.__originalResetTransform();
      }),
      (Q.rotate = function (d) {
        U.rotate(d), this.__originalRotate(d);
      }),
      (Q.clip = function (d) {
        U.clip(d), this.__originalClip(d);
      }),
      (Q.moveTo = function (l, d) {
        U.moveTo(l, d), this.__originalMoveTo(l, d);
      }),
      (Q.lineTo = function (l, d) {
        U.lineTo(l, d), this.__originalLineTo(l, d);
      }),
      (Q.bezierCurveTo = function (l, d, Z, t, F, c) {
        U.bezierCurveTo(l, d, Z, t, F, c),
          this.__originalBezierCurveTo(l, d, Z, t, F, c);
      }),
      (Q.rect = function (l, d, Z, t) {
        U.rect(l, d, Z, t), this.__originalRect(l, d, Z, t);
      }),
      (Q.closePath = function () {
        U.closePath(), this.__originalClosePath();
      }),
      (Q.beginPath = function () {
        U.beginPath(), this.__originalBeginPath();
      });
  }
  class lJ {
    constructor(U) {
      (this.canvasFactory = U), (this.cache = Object.create(null));
    }
    getCanvas(U, l, d) {
      let Z;
      return (
        this.cache[U] !== void 0
          ? ((Z = this.cache[U]), this.canvasFactory.reset(Z, l, d))
          : ((Z = this.canvasFactory.create(l, d)), (this.cache[U] = Z)),
        Z
      );
    }
    delete(U) {
      delete this.cache[U];
    }
    clear() {
      for (const U in this.cache) {
        const l = this.cache[U];
        this.canvasFactory.destroy(l), delete this.cache[U];
      }
    }
  }
  function MW(Q, U, l, d, Z, t, F, c, n, V) {
    const [W, a, i, h, N, M] = hl(Q);
    if (a === 0 && i === 0) {
      const G = F * W + N,
        T = Math.round(G),
        u = c * h + M,
        X = Math.round(u),
        S = (F + n) * W + N,
        p = Math.abs(Math.round(S) - T) || 1,
        L = (c + V) * h + M,
        Y = Math.abs(Math.round(L) - X) || 1;
      return (
        Q.setTransform(Math.sign(W), 0, 0, Math.sign(h), T, X),
        Q.drawImage(U, l, d, Z, t, 0, 0, p, Y),
        Q.setTransform(W, a, i, h, N, M),
        [p, Y]
      );
    }
    if (W === 0 && h === 0) {
      const G = c * i + N,
        T = Math.round(G),
        u = F * a + M,
        X = Math.round(u),
        S = (c + V) * i + N,
        p = Math.abs(Math.round(S) - T) || 1,
        L = (F + n) * a + M,
        Y = Math.abs(Math.round(L) - X) || 1;
      return (
        Q.setTransform(0, Math.sign(a), Math.sign(i), 0, T, X),
        Q.drawImage(U, l, d, Z, t, 0, 0, Y, p),
        Q.setTransform(W, a, i, h, N, M),
        [Y, p]
      );
    }
    Q.drawImage(U, l, d, Z, t, F, c, n, V);
    const J = Math.hypot(W, a),
      m = Math.hypot(i, h);
    return [J * n, m * V];
  }
  function UJ(Q) {
    const { width: U, height: l } = Q;
    if (U > Cb || l > Cb) return null;
    const d = 1e3,
      Z = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]),
      t = U + 1;
    let F = new Uint8Array(t * (l + 1)),
      c,
      n,
      V;
    const W = (U + 7) & -8;
    let a = new Uint8Array(W * l),
      i = 0;
    for (const m of Q.data) {
      let G = 128;
      for (; G > 0; ) (a[i++] = m & G ? 0 : 255), (G >>= 1);
    }
    let h = 0;
    for (i = 0, a[i] !== 0 && ((F[0] = 1), ++h), n = 1; n < U; n++)
      a[i] !== a[i + 1] && ((F[n] = a[i] ? 2 : 1), ++h), i++;
    for (a[i] !== 0 && ((F[n] = 2), ++h), c = 1; c < l; c++) {
      (i = c * W),
        (V = c * t),
        a[i - W] !== a[i] && ((F[V] = a[i] ? 1 : 8), ++h);
      let m = (a[i] ? 4 : 0) + (a[i - W] ? 8 : 0);
      for (n = 1; n < U; n++)
        (m = (m >> 2) + (a[i + 1] ? 4 : 0) + (a[i - W + 1] ? 8 : 0)),
          Z[m] && ((F[V + n] = Z[m]), ++h),
          i++;
      if ((a[i - W] !== a[i] && ((F[V + n] = a[i] ? 2 : 4), ++h), h > d))
        return null;
    }
    for (
      i = W * (l - 1), V = c * t, a[i] !== 0 && ((F[V] = 8), ++h), n = 1;
      n < U;
      n++
    )
      a[i] !== a[i + 1] && ((F[V + n] = a[i] ? 4 : 8), ++h), i++;
    if ((a[i] !== 0 && ((F[V + n] = 4), ++h), h > d)) return null;
    const N = new Int32Array([0, t, -1, 0, -t, 0, 0, 0, 1]),
      M = new Path2D();
    for (c = 0; h && c <= l; c++) {
      let m = c * t;
      const G = m + U;
      for (; m < G && !F[m]; ) m++;
      if (m === G) continue;
      M.moveTo(m % t, c);
      const T = m;
      let u = F[m];
      do {
        const X = N[u];
        do m += X;
        while (!F[m]);
        const S = F[m];
        S !== 5 && S !== 10
          ? ((u = S), (F[m] = 0))
          : ((u = S & ((51 * u) >> 4)), (F[m] &= (u >> 2) | (u << 2))),
          M.lineTo(m % t, (m / t) | 0),
          F[m] || --h;
      } while (T !== m);
      --c;
    }
    return (
      (a = null),
      (F = null),
      function (m) {
        m.save(),
          m.scale(1 / U, -1 / l),
          m.translate(0, -l),
          m.fill(M),
          m.beginPath(),
          m.restore();
      }
    );
  }
  class rb {
    constructor(U, l) {
      (this.alphaIsShape = !1),
        (this.fontSize = 0),
        (this.fontSizeScale = 1),
        (this.textMatrix = mb),
        (this.textMatrixScale = 1),
        (this.fontMatrix = HR),
        (this.leading = 0),
        (this.x = 0),
        (this.y = 0),
        (this.lineX = 0),
        (this.lineY = 0),
        (this.charSpacing = 0),
        (this.wordSpacing = 0),
        (this.textHScale = 1),
        (this.textRenderingMode = Al.FILL),
        (this.textRise = 0),
        (this.fillColor = '#000000'),
        (this.strokeColor = '#000000'),
        (this.patternFill = !1),
        (this.fillAlpha = 1),
        (this.strokeAlpha = 1),
        (this.lineWidth = 1),
        (this.activeSMask = null),
        (this.transferMaps = 'none'),
        this.startNewPathAndClipBox([0, 0, U, l]);
    }
    clone() {
      const U = Object.create(this);
      return (U.clipBox = this.clipBox.slice()), U;
    }
    setCurrentPoint(U, l) {
      (this.x = U), (this.y = l);
    }
    updatePathMinMax(U, l, d) {
      ([l, d] = g.applyTransform([l, d], U)),
        (this.minX = Math.min(this.minX, l)),
        (this.minY = Math.min(this.minY, d)),
        (this.maxX = Math.max(this.maxX, l)),
        (this.maxY = Math.max(this.maxY, d));
    }
    updateRectMinMax(U, l) {
      const d = g.applyTransform(l, U),
        Z = g.applyTransform(l.slice(2), U),
        t = g.applyTransform([l[0], l[3]], U),
        F = g.applyTransform([l[2], l[1]], U);
      (this.minX = Math.min(this.minX, d[0], Z[0], t[0], F[0])),
        (this.minY = Math.min(this.minY, d[1], Z[1], t[1], F[1])),
        (this.maxX = Math.max(this.maxX, d[0], Z[0], t[0], F[0])),
        (this.maxY = Math.max(this.maxY, d[1], Z[1], t[1], F[1]));
    }
    updateScalingPathMinMax(U, l) {
      g.scaleMinMax(U, l),
        (this.minX = Math.min(this.minX, l[0])),
        (this.minY = Math.min(this.minY, l[1])),
        (this.maxX = Math.max(this.maxX, l[2])),
        (this.maxY = Math.max(this.maxY, l[3]));
    }
    updateCurvePathMinMax(U, l, d, Z, t, F, c, n, V, W) {
      const a = g.bezierBoundingBox(l, d, Z, t, F, c, n, V, W);
      W || this.updateRectMinMax(U, a);
    }
    getPathBoundingBox(U = dU.FILL, l = null) {
      const d = [this.minX, this.minY, this.maxX, this.maxY];
      if (U === dU.STROKE) {
        l || sl('Stroke bounding box must include transform.');
        const Z = g.singularValueDecompose2dScale(l),
          t = (Z[0] * this.lineWidth) / 2,
          F = (Z[1] * this.lineWidth) / 2;
        (d[0] -= t), (d[1] -= F), (d[2] += t), (d[3] += F);
      }
      return d;
    }
    updateClipFromPath() {
      const U = g.intersect(this.clipBox, this.getPathBoundingBox());
      this.startNewPathAndClipBox(U || [0, 0, 0, 0]);
    }
    isEmptyClip() {
      return this.minX === 1 / 0;
    }
    startNewPathAndClipBox(U) {
      (this.clipBox = U),
        (this.minX = 1 / 0),
        (this.minY = 1 / 0),
        (this.maxX = 0),
        (this.maxY = 0);
    }
    getClippedPathBoundingBox(U = dU.FILL, l = null) {
      return g.intersect(this.clipBox, this.getPathBoundingBox(U, l));
    }
  }
  function wb(Q, U) {
    if (typeof ImageData < 'u' && U instanceof ImageData) {
      Q.putImageData(U, 0, 0);
      return;
    }
    const l = U.height,
      d = U.width,
      Z = l % WU,
      t = (l - Z) / WU,
      F = Z === 0 ? t : t + 1,
      c = Q.createImageData(d, WU);
    let n = 0,
      V;
    const W = U.data,
      a = c.data;
    let i, h, N, M;
    if (U.kind === sW.GRAYSCALE_1BPP) {
      const J = W.byteLength,
        m = new Uint32Array(a.buffer, 0, a.byteLength >> 2),
        G = m.length,
        T = (d + 7) >> 3,
        u = 4294967295,
        X = nU.isLittleEndian ? 4278190080 : 255;
      for (i = 0; i < F; i++) {
        for (N = i < t ? WU : Z, V = 0, h = 0; h < N; h++) {
          const S = J - n;
          let p = 0;
          const L = S > T ? d : S * 8 - 7,
            Y = L & -8;
          let o = 0,
            y = 0;
          for (; p < Y; p += 8)
            (y = W[n++]),
              (m[V++] = y & 128 ? u : X),
              (m[V++] = y & 64 ? u : X),
              (m[V++] = y & 32 ? u : X),
              (m[V++] = y & 16 ? u : X),
              (m[V++] = y & 8 ? u : X),
              (m[V++] = y & 4 ? u : X),
              (m[V++] = y & 2 ? u : X),
              (m[V++] = y & 1 ? u : X);
          for (; p < L; p++)
            o === 0 && ((y = W[n++]), (o = 128)),
              (m[V++] = y & o ? u : X),
              (o >>= 1);
        }
        for (; V < G; ) m[V++] = 0;
        Q.putImageData(c, 0, i * WU);
      }
    } else if (U.kind === sW.RGBA_32BPP) {
      for (h = 0, M = d * WU * 4, i = 0; i < t; i++)
        a.set(W.subarray(n, n + M)),
          (n += M),
          Q.putImageData(c, 0, h),
          (h += WU);
      i < F &&
        ((M = d * Z * 4), a.set(W.subarray(n, n + M)), Q.putImageData(c, 0, h));
    } else if (U.kind === sW.RGB_24BPP)
      for (N = WU, M = d * N, i = 0; i < F; i++) {
        for (i >= t && ((N = Z), (M = d * N)), V = 0, h = M; h--; )
          (a[V++] = W[n++]),
            (a[V++] = W[n++]),
            (a[V++] = W[n++]),
            (a[V++] = 255);
        Q.putImageData(c, 0, i * WU);
      }
    else throw new Error(`bad image kind: ${U.kind}`);
  }
  function xb(Q, U) {
    if (U.bitmap) {
      Q.drawImage(U.bitmap, 0, 0);
      return;
    }
    const l = U.height,
      d = U.width,
      Z = l % WU,
      t = (l - Z) / WU,
      F = Z === 0 ? t : t + 1,
      c = Q.createImageData(d, WU);
    let n = 0;
    const V = U.data,
      W = c.data;
    for (let a = 0; a < F; a++) {
      const i = a < t ? WU : Z;
      ({ srcPos: n } = _M({
        src: V,
        srcPos: n,
        dest: W,
        width: d,
        height: i,
        nonBlackColor: 0,
      })),
        Q.putImageData(c, 0, a * WU);
    }
  }
  function bs(Q, U) {
    const l = [
      'strokeStyle',
      'fillStyle',
      'fillRule',
      'globalAlpha',
      'lineWidth',
      'lineCap',
      'lineJoin',
      'miterLimit',
      'globalCompositeOperation',
      'font',
      'filter',
    ];
    for (const d of l) Q[d] !== void 0 && (U[d] = Q[d]);
    Q.setLineDash !== void 0 &&
      (U.setLineDash(Q.getLineDash()), (U.lineDashOffset = Q.lineDashOffset));
  }
  function JW(Q) {
    if (
      ((Q.strokeStyle = Q.fillStyle = '#000000'),
      (Q.fillRule = 'nonzero'),
      (Q.globalAlpha = 1),
      (Q.lineWidth = 1),
      (Q.lineCap = 'butt'),
      (Q.lineJoin = 'miter'),
      (Q.miterLimit = 10),
      (Q.globalCompositeOperation = 'source-over'),
      (Q.font = '10px sans-serif'),
      Q.setLineDash !== void 0 && (Q.setLineDash([]), (Q.lineDashOffset = 0)),
      !fl)
    ) {
      const { filter: U } = Q;
      U !== 'none' && U !== '' && (Q.filter = 'none');
    }
  }
  function jb(Q, U) {
    if (U) return !0;
    const l = g.singularValueDecompose2dScale(Q);
    (l[0] = Math.fround(l[0])), (l[1] = Math.fround(l[1]));
    const d = Math.fround(
      (globalThis.devicePixelRatio || 1) * Q0.PDF_TO_CSS_UNITS,
    );
    return l[0] <= d && l[1] <= d;
  }
  const dJ = ['butt', 'round', 'square'],
    ZJ = ['miter', 'round', 'bevel'],
    tJ = {},
    Ob = {},
    HN = class HN {
      constructor(
        U,
        l,
        d,
        Z,
        t,
        { optionalContentConfig: F, markedContentStack: c = null },
        n,
        V,
      ) {
        R(this, JQ);
        R(this, GQ);
        (this.ctx = U),
          (this.current = new rb(
            this.ctx.canvas.width,
            this.ctx.canvas.height,
          )),
          (this.stateStack = []),
          (this.pendingClip = null),
          (this.pendingEOFill = !1),
          (this.res = null),
          (this.xobjs = null),
          (this.commonObjs = l),
          (this.objs = d),
          (this.canvasFactory = Z),
          (this.filterFactory = t),
          (this.groupStack = []),
          (this.processingType3 = null),
          (this.baseTransform = null),
          (this.baseTransformStack = []),
          (this.groupLevel = 0),
          (this.smaskStack = []),
          (this.smaskCounter = 0),
          (this.tempSMask = null),
          (this.suspendedCtx = null),
          (this.contentVisible = !0),
          (this.markedContentStack = c || []),
          (this.optionalContentConfig = F),
          (this.cachedCanvases = new lJ(this.canvasFactory)),
          (this.cachedPatterns = new Map()),
          (this.annotationCanvasMap = n),
          (this.viewportScale = 1),
          (this.outputScaleX = 1),
          (this.outputScaleY = 1),
          (this.pageColors = V),
          (this._cachedScaleForStroking = [-1, 0]),
          (this._cachedGetSinglePixelWidth = null),
          (this._cachedBitmapsMap = new Map());
      }
      getObject(U, l = null) {
        return typeof U == 'string'
          ? U.startsWith('g_')
            ? this.commonObjs.get(U)
            : this.objs.get(U)
          : l;
      }
      beginDrawing({
        transform: U,
        viewport: l,
        transparency: d = !1,
        background: Z = null,
      }) {
        const t = this.ctx.canvas.width,
          F = this.ctx.canvas.height,
          c = this.ctx.fillStyle;
        if (
          ((this.ctx.fillStyle = Z || '#ffffff'),
          this.ctx.fillRect(0, 0, t, F),
          (this.ctx.fillStyle = c),
          d)
        ) {
          const n = this.cachedCanvases.getCanvas('transparent', t, F);
          (this.compositeCtx = this.ctx),
            (this.transparentCanvas = n.canvas),
            (this.ctx = n.context),
            this.ctx.save(),
            this.ctx.transform(...hl(this.compositeCtx));
        }
        this.ctx.save(),
          JW(this.ctx),
          U &&
            (this.ctx.transform(...U),
            (this.outputScaleX = U[0]),
            (this.outputScaleY = U[0])),
          this.ctx.transform(...l.transform),
          (this.viewportScale = l.scale),
          (this.baseTransform = hl(this.ctx));
      }
      executeOperatorList(U, l, d, Z) {
        const t = U.argsArray,
          F = U.fnArray;
        let c = l || 0;
        const n = t.length;
        if (n === c) return c;
        const V = n - c > Eb && typeof d == 'function',
          W = V ? Date.now() + qM : 0;
        let a = 0;
        const i = this.commonObjs,
          h = this.objs;
        let N;
        for (;;) {
          if (Z !== void 0 && c === Z.nextBreakPoint) return Z.breakIt(c, d), c;
          if (((N = F[c]), N !== rU.dependency)) this[N].apply(this, t[c]);
          else
            for (const M of t[c]) {
              const J = M.startsWith('g_') ? i : h;
              if (!J.has(M)) return J.get(M, d), c;
            }
          if ((c++, c === n)) return c;
          if (V && ++a > Eb) {
            if (Date.now() > W) return d(), c;
            a = 0;
          }
        }
      }
      endDrawing() {
        b(this, JQ, hh).call(this),
          this.cachedCanvases.clear(),
          this.cachedPatterns.clear();
        for (const U of this._cachedBitmapsMap.values()) {
          for (const l of U.values())
            typeof HTMLCanvasElement < 'u' &&
              l instanceof HTMLCanvasElement &&
              (l.width = l.height = 0);
          U.clear();
        }
        this._cachedBitmapsMap.clear(), b(this, GQ, bh).call(this);
      }
      _scaleImage(U, l) {
        const d = U.width,
          Z = U.height;
        let t = Math.max(Math.hypot(l[0], l[1]), 1),
          F = Math.max(Math.hypot(l[2], l[3]), 1),
          c = d,
          n = Z,
          V = 'prescale1',
          W,
          a;
        for (; (t > 2 && c > 1) || (F > 2 && n > 1); ) {
          let i = c,
            h = n;
          t > 2 &&
            c > 1 &&
            ((i = c >= 16384 ? Math.floor(c / 2) - 1 || 1 : Math.ceil(c / 2)),
            (t /= c / i)),
            F > 2 &&
              n > 1 &&
              ((h = n >= 16384 ? Math.floor(n / 2) - 1 || 1 : Math.ceil(n) / 2),
              (F /= n / h)),
            (W = this.cachedCanvases.getCanvas(V, i, h)),
            (a = W.context),
            a.clearRect(0, 0, i, h),
            a.drawImage(U, 0, 0, c, n, 0, 0, i, h),
            (U = W.canvas),
            (c = i),
            (n = h),
            (V = V === 'prescale1' ? 'prescale2' : 'prescale1');
        }
        return { img: U, paintWidth: c, paintHeight: n };
      }
      _createMaskCanvas(U) {
        const l = this.ctx,
          { width: d, height: Z } = U,
          t = this.current.fillColor,
          F = this.current.patternFill,
          c = hl(l);
        let n, V, W, a;
        if ((U.bitmap || U.data) && U.count > 1) {
          const L = U.bitmap || U.data.buffer;
          (V = JSON.stringify(F ? c : [c.slice(0, 4), t])),
            (n = this._cachedBitmapsMap.get(L)),
            n || ((n = new Map()), this._cachedBitmapsMap.set(L, n));
          const Y = n.get(V);
          if (Y && !F) {
            const o = Math.round(Math.min(c[0], c[2]) + c[4]),
              y = Math.round(Math.min(c[1], c[3]) + c[5]);
            return { canvas: Y, offsetX: o, offsetY: y };
          }
          W = Y;
        }
        W ||
          ((a = this.cachedCanvases.getCanvas('maskCanvas', d, Z)),
          xb(a.context, U));
        let i = g.transform(c, [1 / d, 0, 0, -1 / Z, 0, 0]);
        i = g.transform(i, [1, 0, 0, 1, 0, -Z]);
        const [h, N, M, J] = g.getAxialAlignedBoundingBox([0, 0, d, Z], i),
          m = Math.round(M - h) || 1,
          G = Math.round(J - N) || 1,
          T = this.cachedCanvases.getCanvas('fillCanvas', m, G),
          u = T.context,
          X = h,
          S = N;
        u.translate(-X, -S),
          u.transform(...i),
          W ||
            ((W = this._scaleImage(a.canvas, yd(u))),
            (W = W.img),
            n && F && n.set(V, W)),
          (u.imageSmoothingEnabled = jb(hl(u), U.interpolate)),
          MW(u, W, 0, 0, W.width, W.height, 0, 0, d, Z),
          (u.globalCompositeOperation = 'source-in');
        const p = g.transform(yd(u), [1, 0, 0, 1, -X, -S]);
        return (
          (u.fillStyle = F ? t.getPattern(l, this, p, dU.FILL) : t),
          u.fillRect(0, 0, d, Z),
          n &&
            !F &&
            (this.cachedCanvases.delete('fillCanvas'), n.set(V, T.canvas)),
          { canvas: T.canvas, offsetX: Math.round(X), offsetY: Math.round(S) }
        );
      }
      setLineWidth(U) {
        U !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1),
          (this.current.lineWidth = U),
          (this.ctx.lineWidth = U);
      }
      setLineCap(U) {
        this.ctx.lineCap = dJ[U];
      }
      setLineJoin(U) {
        this.ctx.lineJoin = ZJ[U];
      }
      setMiterLimit(U) {
        this.ctx.miterLimit = U;
      }
      setDash(U, l) {
        const d = this.ctx;
        d.setLineDash !== void 0 && (d.setLineDash(U), (d.lineDashOffset = l));
      }
      setRenderingIntent(U) {}
      setFlatness(U) {}
      setGState(U) {
        for (const [l, d] of U)
          switch (l) {
            case 'LW':
              this.setLineWidth(d);
              break;
            case 'LC':
              this.setLineCap(d);
              break;
            case 'LJ':
              this.setLineJoin(d);
              break;
            case 'ML':
              this.setMiterLimit(d);
              break;
            case 'D':
              this.setDash(d[0], d[1]);
              break;
            case 'RI':
              this.setRenderingIntent(d);
              break;
            case 'FL':
              this.setFlatness(d);
              break;
            case 'Font':
              this.setFont(d[0], d[1]);
              break;
            case 'CA':
              this.current.strokeAlpha = d;
              break;
            case 'ca':
              (this.current.fillAlpha = d), (this.ctx.globalAlpha = d);
              break;
            case 'BM':
              this.ctx.globalCompositeOperation = d;
              break;
            case 'SMask':
              (this.current.activeSMask = d ? this.tempSMask : null),
                (this.tempSMask = null),
                this.checkSMaskState();
              break;
            case 'TR':
              this.ctx.filter = this.current.transferMaps =
                this.filterFactory.addFilter(d);
              break;
          }
      }
      get inSMaskMode() {
        return !!this.suspendedCtx;
      }
      checkSMaskState() {
        const U = this.inSMaskMode;
        this.current.activeSMask && !U
          ? this.beginSMaskMode()
          : !this.current.activeSMask && U && this.endSMaskMode();
      }
      beginSMaskMode() {
        if (this.inSMaskMode)
          throw new Error('beginSMaskMode called while already in smask mode');
        const U = this.ctx.canvas.width,
          l = this.ctx.canvas.height,
          d = 'smaskGroupAt' + this.groupLevel,
          Z = this.cachedCanvases.getCanvas(d, U, l);
        (this.suspendedCtx = this.ctx), (this.ctx = Z.context);
        const t = this.ctx;
        t.setTransform(...hl(this.suspendedCtx)),
          bs(this.suspendedCtx, t),
          $M(t, this.suspendedCtx),
          this.setGState([
            ['BM', 'source-over'],
            ['ca', 1],
            ['CA', 1],
          ]);
      }
      endSMaskMode() {
        if (!this.inSMaskMode)
          throw new Error('endSMaskMode called while not in smask mode');
        this.ctx._removeMirroring(),
          bs(this.ctx, this.suspendedCtx),
          (this.ctx = this.suspendedCtx),
          (this.suspendedCtx = null);
      }
      compose(U) {
        if (!this.current.activeSMask) return;
        U
          ? ((U[0] = Math.floor(U[0])),
            (U[1] = Math.floor(U[1])),
            (U[2] = Math.ceil(U[2])),
            (U[3] = Math.ceil(U[3])))
          : (U = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height]);
        const l = this.current.activeSMask,
          d = this.suspendedCtx;
        this.composeSMask(d, l, this.ctx, U),
          this.ctx.save(),
          this.ctx.setTransform(1, 0, 0, 1, 0, 0),
          this.ctx.clearRect(
            0,
            0,
            this.ctx.canvas.width,
            this.ctx.canvas.height,
          ),
          this.ctx.restore();
      }
      composeSMask(U, l, d, Z) {
        const t = Z[0],
          F = Z[1],
          c = Z[2] - t,
          n = Z[3] - F;
        c === 0 ||
          n === 0 ||
          (this.genericComposeSMask(
            l.context,
            d,
            c,
            n,
            l.subtype,
            l.backdrop,
            l.transferMap,
            t,
            F,
            l.offsetX,
            l.offsetY,
          ),
          U.save(),
          (U.globalAlpha = 1),
          (U.globalCompositeOperation = 'source-over'),
          U.setTransform(1, 0, 0, 1, 0, 0),
          U.drawImage(d.canvas, 0, 0),
          U.restore());
      }
      genericComposeSMask(U, l, d, Z, t, F, c, n, V, W, a) {
        let i = U.canvas,
          h = n - W,
          N = V - a;
        if (F) {
          if (h < 0 || N < 0 || h + d > i.width || N + Z > i.height) {
            const J = this.cachedCanvases.getCanvas('maskExtension', d, Z),
              m = J.context;
            m.drawImage(i, -h, -N),
              F.some((G) => G !== 0) &&
                ((m.globalCompositeOperation = 'destination-atop'),
                (m.fillStyle = g.makeHexColor(...F)),
                m.fillRect(0, 0, d, Z),
                (m.globalCompositeOperation = 'source-over')),
              (i = J.canvas),
              (h = N = 0);
          } else if (F.some((J) => J !== 0)) {
            U.save(), (U.globalAlpha = 1), U.setTransform(1, 0, 0, 1, 0, 0);
            const J = new Path2D();
            J.rect(h, N, d, Z),
              U.clip(J),
              (U.globalCompositeOperation = 'destination-atop'),
              (U.fillStyle = g.makeHexColor(...F)),
              U.fillRect(h, N, d, Z),
              U.restore();
          }
        }
        l.save(),
          (l.globalAlpha = 1),
          l.setTransform(1, 0, 0, 1, 0, 0),
          t === 'Alpha' && c
            ? (l.filter = this.filterFactory.addAlphaFilter(c))
            : t === 'Luminosity' &&
              (l.filter = this.filterFactory.addLuminosityFilter(c));
        const M = new Path2D();
        M.rect(n, V, d, Z),
          l.clip(M),
          (l.globalCompositeOperation = 'destination-in'),
          l.drawImage(i, h, N, d, Z, n, V, d, Z),
          l.restore();
      }
      save() {
        this.inSMaskMode
          ? (bs(this.ctx, this.suspendedCtx), this.suspendedCtx.save())
          : this.ctx.save();
        const U = this.current;
        this.stateStack.push(U), (this.current = U.clone());
      }
      restore() {
        this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(),
          this.stateStack.length !== 0 &&
            ((this.current = this.stateStack.pop()),
            this.inSMaskMode
              ? (this.suspendedCtx.restore(), bs(this.suspendedCtx, this.ctx))
              : this.ctx.restore(),
            this.checkSMaskState(),
            (this.pendingClip = null),
            (this._cachedScaleForStroking[0] = -1),
            (this._cachedGetSinglePixelWidth = null));
      }
      transform(U, l, d, Z, t, F) {
        this.ctx.transform(U, l, d, Z, t, F),
          (this._cachedScaleForStroking[0] = -1),
          (this._cachedGetSinglePixelWidth = null);
      }
      constructPath(U, l, d) {
        const Z = this.ctx,
          t = this.current;
        let F = t.x,
          c = t.y,
          n,
          V;
        const W = hl(Z),
          a = (W[0] === 0 && W[3] === 0) || (W[1] === 0 && W[2] === 0),
          i = a ? d.slice(0) : null;
        for (let h = 0, N = 0, M = U.length; h < M; h++)
          switch (U[h] | 0) {
            case rU.rectangle:
              (F = l[N++]), (c = l[N++]);
              const J = l[N++],
                m = l[N++],
                G = F + J,
                T = c + m;
              Z.moveTo(F, c),
                J === 0 || m === 0
                  ? Z.lineTo(G, T)
                  : (Z.lineTo(G, c), Z.lineTo(G, T), Z.lineTo(F, T)),
                a || t.updateRectMinMax(W, [F, c, G, T]),
                Z.closePath();
              break;
            case rU.moveTo:
              (F = l[N++]),
                (c = l[N++]),
                Z.moveTo(F, c),
                a || t.updatePathMinMax(W, F, c);
              break;
            case rU.lineTo:
              (F = l[N++]),
                (c = l[N++]),
                Z.lineTo(F, c),
                a || t.updatePathMinMax(W, F, c);
              break;
            case rU.curveTo:
              (n = F),
                (V = c),
                (F = l[N + 4]),
                (c = l[N + 5]),
                Z.bezierCurveTo(l[N], l[N + 1], l[N + 2], l[N + 3], F, c),
                t.updateCurvePathMinMax(
                  W,
                  n,
                  V,
                  l[N],
                  l[N + 1],
                  l[N + 2],
                  l[N + 3],
                  F,
                  c,
                  i,
                ),
                (N += 6);
              break;
            case rU.curveTo2:
              (n = F),
                (V = c),
                Z.bezierCurveTo(F, c, l[N], l[N + 1], l[N + 2], l[N + 3]),
                t.updateCurvePathMinMax(
                  W,
                  n,
                  V,
                  F,
                  c,
                  l[N],
                  l[N + 1],
                  l[N + 2],
                  l[N + 3],
                  i,
                ),
                (F = l[N + 2]),
                (c = l[N + 3]),
                (N += 4);
              break;
            case rU.curveTo3:
              (n = F),
                (V = c),
                (F = l[N + 2]),
                (c = l[N + 3]),
                Z.bezierCurveTo(l[N], l[N + 1], F, c, F, c),
                t.updateCurvePathMinMax(W, n, V, l[N], l[N + 1], F, c, F, c, i),
                (N += 4);
              break;
            case rU.closePath:
              Z.closePath();
              break;
          }
        a && t.updateScalingPathMinMax(W, i), t.setCurrentPoint(F, c);
      }
      closePath() {
        this.ctx.closePath();
      }
      stroke(U = !0) {
        const l = this.ctx,
          d = this.current.strokeColor;
        (l.globalAlpha = this.current.strokeAlpha),
          this.contentVisible &&
            (typeof d == 'object' && d != null && d.getPattern
              ? (l.save(),
                (l.strokeStyle = d.getPattern(l, this, yd(l), dU.STROKE)),
                this.rescaleAndStroke(!1),
                l.restore())
              : this.rescaleAndStroke(!0)),
          U && this.consumePath(this.current.getClippedPathBoundingBox()),
          (l.globalAlpha = this.current.fillAlpha);
      }
      closeStroke() {
        this.closePath(), this.stroke();
      }
      fill(U = !0) {
        const l = this.ctx,
          d = this.current.fillColor,
          Z = this.current.patternFill;
        let t = !1;
        Z &&
          (l.save(),
          (l.fillStyle = d.getPattern(l, this, yd(l), dU.FILL)),
          (t = !0));
        const F = this.current.getClippedPathBoundingBox();
        this.contentVisible &&
          F !== null &&
          (this.pendingEOFill
            ? (l.fill('evenodd'), (this.pendingEOFill = !1))
            : l.fill()),
          t && l.restore(),
          U && this.consumePath(F);
      }
      eoFill() {
        (this.pendingEOFill = !0), this.fill();
      }
      fillStroke() {
        this.fill(!1), this.stroke(!1), this.consumePath();
      }
      eoFillStroke() {
        (this.pendingEOFill = !0), this.fillStroke();
      }
      closeFillStroke() {
        this.closePath(), this.fillStroke();
      }
      closeEOFillStroke() {
        (this.pendingEOFill = !0), this.closePath(), this.fillStroke();
      }
      endPath() {
        this.consumePath();
      }
      clip() {
        this.pendingClip = tJ;
      }
      eoClip() {
        this.pendingClip = Ob;
      }
      beginText() {
        (this.current.textMatrix = mb),
          (this.current.textMatrixScale = 1),
          (this.current.x = this.current.lineX = 0),
          (this.current.y = this.current.lineY = 0);
      }
      endText() {
        const U = this.pendingTextPaths,
          l = this.ctx;
        if (U === void 0) {
          l.beginPath();
          return;
        }
        l.save(), l.beginPath();
        for (const d of U)
          l.setTransform(...d.transform),
            l.translate(d.x, d.y),
            d.addToPath(l, d.fontSize);
        l.restore(), l.clip(), l.beginPath(), delete this.pendingTextPaths;
      }
      setCharSpacing(U) {
        this.current.charSpacing = U;
      }
      setWordSpacing(U) {
        this.current.wordSpacing = U;
      }
      setHScale(U) {
        this.current.textHScale = U / 100;
      }
      setLeading(U) {
        this.current.leading = -U;
      }
      setFont(U, l) {
        var W;
        const d = this.commonObjs.get(U),
          Z = this.current;
        if (!d) throw new Error(`Can't find font for ${U}`);
        if (
          ((Z.fontMatrix = d.fontMatrix || HR),
          (Z.fontMatrix[0] === 0 || Z.fontMatrix[3] === 0) &&
            _('Invalid font matrix for font ' + U),
          l < 0 ? ((l = -l), (Z.fontDirection = -1)) : (Z.fontDirection = 1),
          (this.current.font = d),
          (this.current.fontSize = l),
          d.isType3Font)
        )
          return;
        const t = d.loadedName || 'sans-serif',
          F =
            ((W = d.systemFontInfo) == null ? void 0 : W.css) ||
            `"${t}", ${d.fallbackName}`;
        let c = 'normal';
        d.black ? (c = '900') : d.bold && (c = 'bold');
        const n = d.italic ? 'italic' : 'normal';
        let V = l;
        l < Db ? (V = Db) : l > Ib && (V = Ib),
          (this.current.fontSizeScale = l / V),
          (this.ctx.font = `${n} ${c} ${V}px ${F}`);
      }
      setTextRenderingMode(U) {
        this.current.textRenderingMode = U;
      }
      setTextRise(U) {
        this.current.textRise = U;
      }
      moveText(U, l) {
        (this.current.x = this.current.lineX += U),
          (this.current.y = this.current.lineY += l);
      }
      setLeadingMoveText(U, l) {
        this.setLeading(-l), this.moveText(U, l);
      }
      setTextMatrix(U, l, d, Z, t, F) {
        (this.current.textMatrix = [U, l, d, Z, t, F]),
          (this.current.textMatrixScale = Math.hypot(U, l)),
          (this.current.x = this.current.lineX = 0),
          (this.current.y = this.current.lineY = 0);
      }
      nextLine() {
        this.moveText(0, this.current.leading);
      }
      paintChar(U, l, d, Z) {
        const t = this.ctx,
          F = this.current,
          c = F.font,
          n = F.textRenderingMode,
          V = F.fontSize / F.fontSizeScale,
          W = n & Al.FILL_STROKE_MASK,
          a = !!(n & Al.ADD_TO_PATH_FLAG),
          i = F.patternFill && !c.missingFile;
        let h;
        (c.disableFontFace || a || i) &&
          (h = c.getPathGenerator(this.commonObjs, U)),
          c.disableFontFace || i
            ? (t.save(),
              t.translate(l, d),
              t.beginPath(),
              h(t, V),
              Z && t.setTransform(...Z),
              (W === Al.FILL || W === Al.FILL_STROKE) && t.fill(),
              (W === Al.STROKE || W === Al.FILL_STROKE) && t.stroke(),
              t.restore())
            : ((W === Al.FILL || W === Al.FILL_STROKE) && t.fillText(U, l, d),
              (W === Al.STROKE || W === Al.FILL_STROKE) &&
                t.strokeText(U, l, d)),
          a &&
            (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
              transform: hl(t),
              x: l,
              y: d,
              fontSize: V,
              addToPath: h,
            });
      }
      get isFontSubpixelAAEnabled() {
        const { context: U } = this.cachedCanvases.getCanvas(
          'isFontSubpixelAAEnabled',
          10,
          10,
        );
        U.scale(1.5, 1), U.fillText('I', 0, 10);
        const l = U.getImageData(0, 0, 10, 10).data;
        let d = !1;
        for (let Z = 3; Z < l.length; Z += 4)
          if (l[Z] > 0 && l[Z] < 255) {
            d = !0;
            break;
          }
        return Zl(this, 'isFontSubpixelAAEnabled', d);
      }
      showText(U) {
        const l = this.current,
          d = l.font;
        if (d.isType3Font) return this.showType3Text(U);
        const Z = l.fontSize;
        if (Z === 0) return;
        const t = this.ctx,
          F = l.fontSizeScale,
          c = l.charSpacing,
          n = l.wordSpacing,
          V = l.fontDirection,
          W = l.textHScale * V,
          a = U.length,
          i = d.vertical,
          h = i ? 1 : -1,
          N = d.defaultVMetrics,
          M = Z * l.fontMatrix[0],
          J =
            l.textRenderingMode === Al.FILL &&
            !d.disableFontFace &&
            !l.patternFill;
        t.save(),
          t.transform(...l.textMatrix),
          t.translate(l.x, l.y + l.textRise),
          V > 0 ? t.scale(W, -1) : t.scale(W, 1);
        let m;
        if (l.patternFill) {
          t.save();
          const S = l.fillColor.getPattern(t, this, yd(t), dU.FILL);
          (m = hl(t)), t.restore(), (t.fillStyle = S);
        }
        let G = l.lineWidth;
        const T = l.textMatrixScale;
        if (T === 0 || G === 0) {
          const S = l.textRenderingMode & Al.FILL_STROKE_MASK;
          (S === Al.STROKE || S === Al.FILL_STROKE) &&
            (G = this.getSinglePixelWidth());
        } else G /= T;
        if (
          (F !== 1 && (t.scale(F, F), (G /= F)),
          (t.lineWidth = G),
          d.isInvalidPDFjsFont)
        ) {
          const S = [];
          let p = 0;
          for (const L of U) S.push(L.unicode), (p += L.width);
          t.fillText(S.join(''), 0, 0),
            (l.x += p * M * W),
            t.restore(),
            this.compose();
          return;
        }
        let u = 0,
          X;
        for (X = 0; X < a; ++X) {
          const S = U[X];
          if (typeof S == 'number') {
            u += (h * S * Z) / 1e3;
            continue;
          }
          let p = !1;
          const L = (S.isSpace ? n : 0) + c,
            Y = S.fontChar,
            o = S.accent;
          let y,
            D,
            I = S.width;
          if (i) {
            const x = S.vmetric || N,
              B = -(S.vmetric ? x[1] : I * 0.5) * M,
              C = x[2] * M;
            (I = x ? -x[0] : I), (y = B / F), (D = (u + C) / F);
          } else (y = u / F), (D = 0);
          if (d.remeasure && I > 0) {
            const x = ((t.measureText(Y).width * 1e3) / Z) * F;
            if (I < x && this.isFontSubpixelAAEnabled) {
              const B = I / x;
              (p = !0), t.save(), t.scale(B, 1), (y /= B);
            } else I !== x && (y += (((I - x) / 2e3) * Z) / F);
          }
          if (this.contentVisible && (S.isInFont || d.missingFile)) {
            if (J && !o) t.fillText(Y, y, D);
            else if ((this.paintChar(Y, y, D, m), o)) {
              const x = y + (Z * o.offset.x) / F,
                B = D - (Z * o.offset.y) / F;
              this.paintChar(o.fontChar, x, B, m);
            }
          }
          const O = i ? I * M - L * V : I * M + L * V;
          (u += O), p && t.restore();
        }
        i ? (l.y -= u) : (l.x += u * W), t.restore(), this.compose();
      }
      showType3Text(U) {
        const l = this.ctx,
          d = this.current,
          Z = d.font,
          t = d.fontSize,
          F = d.fontDirection,
          c = Z.vertical ? 1 : -1,
          n = d.charSpacing,
          V = d.wordSpacing,
          W = d.textHScale * F,
          a = d.fontMatrix || HR,
          i = U.length,
          h = d.textRenderingMode === Al.INVISIBLE;
        let N, M, J, m;
        if (!(h || t === 0)) {
          for (
            this._cachedScaleForStroking[0] = -1,
              this._cachedGetSinglePixelWidth = null,
              l.save(),
              l.transform(...d.textMatrix),
              l.translate(d.x, d.y),
              l.scale(W, F),
              N = 0;
            N < i;
            ++N
          ) {
            if (((M = U[N]), typeof M == 'number')) {
              (m = (c * M * t) / 1e3), this.ctx.translate(m, 0), (d.x += m * W);
              continue;
            }
            const G = (M.isSpace ? V : 0) + n,
              T = Z.charProcOperatorList[M.operatorListId];
            if (!T) {
              _(`Type3 character "${M.operatorListId}" is not available.`);
              continue;
            }
            this.contentVisible &&
              ((this.processingType3 = M),
              this.save(),
              l.scale(t, t),
              l.transform(...a),
              this.executeOperatorList(T),
              this.restore()),
              (J = g.applyTransform([M.width, 0], a)[0] * t + G),
              l.translate(J, 0),
              (d.x += J * W);
          }
          l.restore(), (this.processingType3 = null);
        }
      }
      setCharWidth(U, l) {}
      setCharWidthAndBounds(U, l, d, Z, t, F) {
        this.ctx.rect(d, Z, t - d, F - Z), this.ctx.clip(), this.endPath();
      }
      getColorN_Pattern(U) {
        let l;
        if (U[0] === 'TilingPattern') {
          const d = U[1],
            Z = this.baseTransform || hl(this.ctx),
            t = {
              createCanvasGraphics: (F) =>
                new HN(
                  F,
                  this.commonObjs,
                  this.objs,
                  this.canvasFactory,
                  this.filterFactory,
                  {
                    optionalContentConfig: this.optionalContentConfig,
                    markedContentStack: this.markedContentStack,
                  },
                ),
            };
          l = new NN(U, d, this.ctx, t, Z);
        } else l = this._getPattern(U[1], U[2]);
        return l;
      }
      setStrokeColorN() {
        this.current.strokeColor = this.getColorN_Pattern(arguments);
      }
      setFillColorN() {
        (this.current.fillColor = this.getColorN_Pattern(arguments)),
          (this.current.patternFill = !0);
      }
      setStrokeRGBColor(U, l, d) {
        const Z = g.makeHexColor(U, l, d);
        (this.ctx.strokeStyle = Z), (this.current.strokeColor = Z);
      }
      setFillRGBColor(U, l, d) {
        const Z = g.makeHexColor(U, l, d);
        (this.ctx.fillStyle = Z),
          (this.current.fillColor = Z),
          (this.current.patternFill = !1);
      }
      _getPattern(U, l = null) {
        let d;
        return (
          this.cachedPatterns.has(U)
            ? (d = this.cachedPatterns.get(U))
            : ((d = AM(this.getObject(U))), this.cachedPatterns.set(U, d)),
          l && (d.matrix = l),
          d
        );
      }
      shadingFill(U) {
        if (!this.contentVisible) return;
        const l = this.ctx;
        this.save();
        const d = this._getPattern(U);
        l.fillStyle = d.getPattern(l, this, yd(l), dU.SHADING);
        const Z = yd(l);
        if (Z) {
          const { width: t, height: F } = l.canvas,
            [c, n, V, W] = g.getAxialAlignedBoundingBox([0, 0, t, F], Z);
          this.ctx.fillRect(c, n, V - c, W - n);
        } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
        this.compose(this.current.getClippedPathBoundingBox()), this.restore();
      }
      beginInlineImage() {
        sl('Should not call beginInlineImage');
      }
      beginImageData() {
        sl('Should not call beginImageData');
      }
      paintFormXObjectBegin(U, l) {
        if (
          this.contentVisible &&
          (this.save(),
          this.baseTransformStack.push(this.baseTransform),
          U && this.transform(...U),
          (this.baseTransform = hl(this.ctx)),
          l)
        ) {
          const d = l[2] - l[0],
            Z = l[3] - l[1];
          this.ctx.rect(l[0], l[1], d, Z),
            this.current.updateRectMinMax(hl(this.ctx), l),
            this.clip(),
            this.endPath();
        }
      }
      paintFormXObjectEnd() {
        this.contentVisible &&
          (this.restore(),
          (this.baseTransform = this.baseTransformStack.pop()));
      }
      beginGroup(U) {
        if (!this.contentVisible) return;
        this.save(),
          this.inSMaskMode &&
            (this.endSMaskMode(), (this.current.activeSMask = null));
        const l = this.ctx;
        U.isolated || VW('TODO: Support non-isolated groups.'),
          U.knockout && _('Knockout groups not supported.');
        const d = hl(l);
        if ((U.matrix && l.transform(...U.matrix), !U.bbox))
          throw new Error('Bounding box is required.');
        let Z = g.getAxialAlignedBoundingBox(U.bbox, hl(l));
        const t = [0, 0, l.canvas.width, l.canvas.height];
        Z = g.intersect(Z, t) || [0, 0, 0, 0];
        const F = Math.floor(Z[0]),
          c = Math.floor(Z[1]),
          n = Math.max(Math.ceil(Z[2]) - F, 1),
          V = Math.max(Math.ceil(Z[3]) - c, 1);
        this.current.startNewPathAndClipBox([0, 0, n, V]);
        let W = 'groupAt' + this.groupLevel;
        U.smask && (W += '_smask_' + (this.smaskCounter++ % 2));
        const a = this.cachedCanvases.getCanvas(W, n, V),
          i = a.context;
        i.translate(-F, -c),
          i.transform(...d),
          U.smask
            ? this.smaskStack.push({
                canvas: a.canvas,
                context: i,
                offsetX: F,
                offsetY: c,
                subtype: U.smask.subtype,
                backdrop: U.smask.backdrop,
                transferMap: U.smask.transferMap || null,
                startTransformInverse: null,
              })
            : (l.setTransform(1, 0, 0, 1, 0, 0), l.translate(F, c), l.save()),
          bs(l, i),
          (this.ctx = i),
          this.setGState([
            ['BM', 'source-over'],
            ['ca', 1],
            ['CA', 1],
          ]),
          this.groupStack.push(l),
          this.groupLevel++;
      }
      endGroup(U) {
        if (!this.contentVisible) return;
        this.groupLevel--;
        const l = this.ctx,
          d = this.groupStack.pop();
        if (((this.ctx = d), (this.ctx.imageSmoothingEnabled = !1), U.smask))
          (this.tempSMask = this.smaskStack.pop()), this.restore();
        else {
          this.ctx.restore();
          const Z = hl(this.ctx);
          this.restore(), this.ctx.save(), this.ctx.setTransform(...Z);
          const t = g.getAxialAlignedBoundingBox(
            [0, 0, l.canvas.width, l.canvas.height],
            Z,
          );
          this.ctx.drawImage(l.canvas, 0, 0),
            this.ctx.restore(),
            this.compose(t);
        }
      }
      beginAnnotation(U, l, d, Z, t) {
        if (
          (b(this, JQ, hh).call(this),
          JW(this.ctx),
          this.ctx.save(),
          this.save(),
          this.baseTransform && this.ctx.setTransform(...this.baseTransform),
          l)
        ) {
          const F = l[2] - l[0],
            c = l[3] - l[1];
          if (t && this.annotationCanvasMap) {
            (d = d.slice()),
              (d[4] -= l[0]),
              (d[5] -= l[1]),
              (l = l.slice()),
              (l[0] = l[1] = 0),
              (l[2] = F),
              (l[3] = c);
            const [n, V] = g.singularValueDecompose2dScale(hl(this.ctx)),
              { viewportScale: W } = this,
              a = Math.ceil(F * this.outputScaleX * W),
              i = Math.ceil(c * this.outputScaleY * W);
            this.annotationCanvas = this.canvasFactory.create(a, i);
            const { canvas: h, context: N } = this.annotationCanvas;
            this.annotationCanvasMap.set(U, h),
              (this.annotationCanvas.savedCtx = this.ctx),
              (this.ctx = N),
              this.ctx.save(),
              this.ctx.setTransform(n, 0, 0, -V, 0, c * V),
              JW(this.ctx);
          } else
            JW(this.ctx),
              this.ctx.rect(l[0], l[1], F, c),
              this.ctx.clip(),
              this.endPath();
        }
        (this.current = new rb(this.ctx.canvas.width, this.ctx.canvas.height)),
          this.transform(...d),
          this.transform(...Z);
      }
      endAnnotation() {
        this.annotationCanvas &&
          (this.ctx.restore(),
          b(this, GQ, bh).call(this),
          (this.ctx = this.annotationCanvas.savedCtx),
          delete this.annotationCanvas.savedCtx,
          delete this.annotationCanvas);
      }
      paintImageMaskXObject(U) {
        if (!this.contentVisible) return;
        const l = U.count;
        (U = this.getObject(U.data, U)), (U.count = l);
        const d = this.ctx,
          Z = this.processingType3;
        if (Z && (Z.compiled === void 0 && (Z.compiled = UJ(U)), Z.compiled)) {
          Z.compiled(d);
          return;
        }
        const t = this._createMaskCanvas(U),
          F = t.canvas;
        d.save(),
          d.setTransform(1, 0, 0, 1, 0, 0),
          d.drawImage(F, t.offsetX, t.offsetY),
          d.restore(),
          this.compose();
      }
      paintImageMaskXObjectRepeat(U, l, d = 0, Z = 0, t, F) {
        if (!this.contentVisible) return;
        U = this.getObject(U.data, U);
        const c = this.ctx;
        c.save();
        const n = hl(c);
        c.transform(l, d, Z, t, 0, 0);
        const V = this._createMaskCanvas(U);
        c.setTransform(1, 0, 0, 1, V.offsetX - n[4], V.offsetY - n[5]);
        for (let W = 0, a = F.length; W < a; W += 2) {
          const i = g.transform(n, [l, d, Z, t, F[W], F[W + 1]]),
            [h, N] = g.applyTransform([0, 0], i);
          c.drawImage(V.canvas, h, N);
        }
        c.restore(), this.compose();
      }
      paintImageMaskXObjectGroup(U) {
        if (!this.contentVisible) return;
        const l = this.ctx,
          d = this.current.fillColor,
          Z = this.current.patternFill;
        for (const t of U) {
          const { data: F, width: c, height: n, transform: V } = t,
            W = this.cachedCanvases.getCanvas('maskCanvas', c, n),
            a = W.context;
          a.save();
          const i = this.getObject(F, t);
          xb(a, i),
            (a.globalCompositeOperation = 'source-in'),
            (a.fillStyle = Z ? d.getPattern(a, this, yd(l), dU.FILL) : d),
            a.fillRect(0, 0, c, n),
            a.restore(),
            l.save(),
            l.transform(...V),
            l.scale(1, -1),
            MW(l, W.canvas, 0, 0, c, n, 0, -1, 1, 1),
            l.restore();
        }
        this.compose();
      }
      paintImageXObject(U) {
        if (!this.contentVisible) return;
        const l = this.getObject(U);
        if (!l) {
          _("Dependent image isn't ready yet");
          return;
        }
        this.paintInlineImageXObject(l);
      }
      paintImageXObjectRepeat(U, l, d, Z) {
        if (!this.contentVisible) return;
        const t = this.getObject(U);
        if (!t) {
          _("Dependent image isn't ready yet");
          return;
        }
        const F = t.width,
          c = t.height,
          n = [];
        for (let V = 0, W = Z.length; V < W; V += 2)
          n.push({
            transform: [l, 0, 0, d, Z[V], Z[V + 1]],
            x: 0,
            y: 0,
            w: F,
            h: c,
          });
        this.paintInlineImageXObjectGroup(t, n);
      }
      applyTransferMapsToCanvas(U) {
        return (
          this.current.transferMaps !== 'none' &&
            ((U.filter = this.current.transferMaps),
            U.drawImage(U.canvas, 0, 0),
            (U.filter = 'none')),
          U.canvas
        );
      }
      applyTransferMapsToBitmap(U) {
        if (this.current.transferMaps === 'none') return U.bitmap;
        const { bitmap: l, width: d, height: Z } = U,
          t = this.cachedCanvases.getCanvas('inlineImage', d, Z),
          F = t.context;
        return (
          (F.filter = this.current.transferMaps),
          F.drawImage(l, 0, 0),
          (F.filter = 'none'),
          t.canvas
        );
      }
      paintInlineImageXObject(U) {
        if (!this.contentVisible) return;
        const l = U.width,
          d = U.height,
          Z = this.ctx;
        if ((this.save(), !fl)) {
          const { filter: c } = Z;
          c !== 'none' && c !== '' && (Z.filter = 'none');
        }
        Z.scale(1 / l, -1 / d);
        let t;
        if (U.bitmap) t = this.applyTransferMapsToBitmap(U);
        else if (
          (typeof HTMLElement == 'function' && U instanceof HTMLElement) ||
          !U.data
        )
          t = U;
        else {
          const n = this.cachedCanvases.getCanvas('inlineImage', l, d).context;
          wb(n, U), (t = this.applyTransferMapsToCanvas(n));
        }
        const F = this._scaleImage(t, yd(Z));
        (Z.imageSmoothingEnabled = jb(hl(Z), U.interpolate)),
          MW(Z, F.img, 0, 0, F.paintWidth, F.paintHeight, 0, -d, l, d),
          this.compose(),
          this.restore();
      }
      paintInlineImageXObjectGroup(U, l) {
        if (!this.contentVisible) return;
        const d = this.ctx;
        let Z;
        if (U.bitmap) Z = U.bitmap;
        else {
          const t = U.width,
            F = U.height,
            n = this.cachedCanvases.getCanvas('inlineImage', t, F).context;
          wb(n, U), (Z = this.applyTransferMapsToCanvas(n));
        }
        for (const t of l)
          d.save(),
            d.transform(...t.transform),
            d.scale(1, -1),
            MW(d, Z, t.x, t.y, t.w, t.h, 0, -1, 1, 1),
            d.restore();
        this.compose();
      }
      paintSolidColorImageMask() {
        this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
      }
      markPoint(U) {}
      markPointProps(U, l) {}
      beginMarkedContent(U) {
        this.markedContentStack.push({ visible: !0 });
      }
      beginMarkedContentProps(U, l) {
        U === 'OC'
          ? this.markedContentStack.push({
              visible: this.optionalContentConfig.isVisible(l),
            })
          : this.markedContentStack.push({ visible: !0 }),
          (this.contentVisible = this.isContentVisible());
      }
      endMarkedContent() {
        this.markedContentStack.pop(),
          (this.contentVisible = this.isContentVisible());
      }
      beginCompat() {}
      endCompat() {}
      consumePath(U) {
        const l = this.current.isEmptyClip();
        this.pendingClip && this.current.updateClipFromPath(),
          this.pendingClip || this.compose(U);
        const d = this.ctx;
        this.pendingClip &&
          (l || (this.pendingClip === Ob ? d.clip('evenodd') : d.clip()),
          (this.pendingClip = null)),
          this.current.startNewPathAndClipBox(this.current.clipBox),
          d.beginPath();
      }
      getSinglePixelWidth() {
        if (!this._cachedGetSinglePixelWidth) {
          const U = hl(this.ctx);
          if (U[1] === 0 && U[2] === 0)
            this._cachedGetSinglePixelWidth =
              1 / Math.min(Math.abs(U[0]), Math.abs(U[3]));
          else {
            const l = Math.abs(U[0] * U[3] - U[2] * U[1]),
              d = Math.hypot(U[0], U[2]),
              Z = Math.hypot(U[1], U[3]);
            this._cachedGetSinglePixelWidth = Math.max(d, Z) / l;
          }
        }
        return this._cachedGetSinglePixelWidth;
      }
      getScaleForStroking() {
        if (this._cachedScaleForStroking[0] === -1) {
          const { lineWidth: U } = this.current,
            { a: l, b: d, c: Z, d: t } = this.ctx.getTransform();
          let F, c;
          if (d === 0 && Z === 0) {
            const n = Math.abs(l),
              V = Math.abs(t);
            if (n === V)
              if (U === 0) F = c = 1 / n;
              else {
                const W = n * U;
                F = c = W < 1 ? 1 / W : 1;
              }
            else if (U === 0) (F = 1 / n), (c = 1 / V);
            else {
              const W = n * U,
                a = V * U;
              (F = W < 1 ? 1 / W : 1), (c = a < 1 ? 1 / a : 1);
            }
          } else {
            const n = Math.abs(l * t - d * Z),
              V = Math.hypot(l, d),
              W = Math.hypot(Z, t);
            if (U === 0) (F = W / n), (c = V / n);
            else {
              const a = U * n;
              (F = W > a ? W / a : 1), (c = V > a ? V / a : 1);
            }
          }
          (this._cachedScaleForStroking[0] = F),
            (this._cachedScaleForStroking[1] = c);
        }
        return this._cachedScaleForStroking;
      }
      rescaleAndStroke(U) {
        const { ctx: l } = this,
          { lineWidth: d } = this.current,
          [Z, t] = this.getScaleForStroking();
        if (((l.lineWidth = d || 1), Z === 1 && t === 1)) {
          l.stroke();
          return;
        }
        const F = l.getLineDash();
        if ((U && l.save(), l.scale(Z, t), F.length > 0)) {
          const c = Math.max(Z, t);
          l.setLineDash(F.map((n) => n / c)), (l.lineDashOffset /= c);
        }
        l.stroke(), U && l.restore();
      }
      isContentVisible() {
        for (let U = this.markedContentStack.length - 1; U >= 0; U--)
          if (!this.markedContentStack[U].visible) return !1;
        return !0;
      }
    };
  (JQ = new WeakSet()),
    (hh = function () {
      for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
      this.ctx.restore(),
        this.transparentCanvas &&
          ((this.ctx = this.compositeCtx),
          this.ctx.save(),
          this.ctx.setTransform(1, 0, 0, 1, 0, 0),
          this.ctx.drawImage(this.transparentCanvas, 0, 0),
          this.ctx.restore(),
          (this.transparentCanvas = null));
    }),
    (GQ = new WeakSet()),
    (bh = function () {
      if (this.pageColors) {
        const U = this.filterFactory.addHCMFilter(
          this.pageColors.foreground,
          this.pageColors.background,
        );
        if (U !== 'none') {
          const l = this.ctx.filter;
          (this.ctx.filter = U),
            this.ctx.drawImage(this.ctx.canvas, 0, 0),
            (this.ctx.filter = l);
        }
      }
    });
  let n0 = HN;
  for (const Q in rU)
    n0.prototype[Q] !== void 0 && (n0.prototype[rU[Q]] = n0.prototype[Q]);
  let St =
    ((Ya = class {
      static get workerPort() {
        return s(this, TQ);
      }
      static set workerPort(U) {
        if (!(typeof Worker < 'u' && U instanceof Worker) && U !== null)
          throw new Error('Invalid `workerPort` type.');
        e(this, TQ, U);
      }
      static get workerSrc() {
        return s(this, SQ);
      }
      static set workerSrc(U) {
        if (typeof U != 'string') throw new Error('Invalid `workerSrc` type.');
        e(this, SQ, U);
      }
    }),
    (TQ = new WeakMap()),
    (SQ = new WeakMap()),
    R(Ya, TQ, null),
    R(Ya, SQ, ''),
    Ya);
  const GW = { UNKNOWN: 0, DATA: 1, ERROR: 2 },
    Yl = {
      UNKNOWN: 0,
      CANCEL: 1,
      CANCEL_COMPLETE: 2,
      CLOSE: 3,
      ENQUEUE: 4,
      ERROR: 5,
      PULL: 6,
      PULL_COMPLETE: 7,
      START_COMPLETE: 8,
    };
  function bU(Q) {
    switch (
      (Q instanceof Error ||
        (typeof Q == 'object' && Q !== null) ||
        sl('wrapReason: Expected "reason" to be a (possibly cloned) Error.'),
      Q.name)
    ) {
      case 'AbortException':
        return new Gt(Q.message);
      case 'MissingPDFException':
        return new Jt(Q.message);
      case 'PasswordException':
        return new AR(Q.message, Q.code);
      case 'UnexpectedResponseException':
        return new WW(Q.message, Q.status);
      case 'UnknownErrorException':
        return new _R(Q.message, Q.details);
      default:
        return new _R(Q.message, Q.toString());
    }
  }
  class es {
    constructor(U, l, d) {
      R(this, ua);
      R(this, pa);
      R(this, y0);
      (this.sourceName = U),
        (this.targetName = l),
        (this.comObj = d),
        (this.callbackId = 1),
        (this.streamId = 1),
        (this.streamSinks = Object.create(null)),
        (this.streamControllers = Object.create(null)),
        (this.callbackCapabilities = Object.create(null)),
        (this.actionHandler = Object.create(null)),
        (this._onComObjOnMessage = (Z) => {
          const t = Z.data;
          if (t.targetName !== this.sourceName) return;
          if (t.stream) {
            b(this, pa, rm).call(this, t);
            return;
          }
          if (t.callback) {
            const c = t.callbackId,
              n = this.callbackCapabilities[c];
            if (!n) throw new Error(`Cannot resolve callback ${c}`);
            if ((delete this.callbackCapabilities[c], t.callback === GW.DATA))
              n.resolve(t.data);
            else if (t.callback === GW.ERROR) n.reject(bU(t.reason));
            else throw new Error('Unexpected callback case');
            return;
          }
          const F = this.actionHandler[t.action];
          if (!F) throw new Error(`Unknown action from worker: ${t.action}`);
          if (t.callbackId) {
            const c = this.sourceName,
              n = t.sourceName;
            new Promise(function (V) {
              V(F(t.data));
            }).then(
              function (V) {
                d.postMessage({
                  sourceName: c,
                  targetName: n,
                  callback: GW.DATA,
                  callbackId: t.callbackId,
                  data: V,
                });
              },
              function (V) {
                d.postMessage({
                  sourceName: c,
                  targetName: n,
                  callback: GW.ERROR,
                  callbackId: t.callbackId,
                  reason: bU(V),
                });
              },
            );
            return;
          }
          if (t.streamId) {
            b(this, ua, Cm).call(this, t);
            return;
          }
          F(t.data);
        }),
        d.addEventListener('message', this._onComObjOnMessage);
    }
    on(U, l) {
      const d = this.actionHandler;
      if (d[U]) throw new Error(`There is already an actionName called "${U}"`);
      d[U] = l;
    }
    send(U, l, d) {
      this.comObj.postMessage(
        {
          sourceName: this.sourceName,
          targetName: this.targetName,
          action: U,
          data: l,
        },
        d,
      );
    }
    sendWithPromise(U, l, d) {
      const Z = this.callbackId++,
        t = Promise.withResolvers();
      this.callbackCapabilities[Z] = t;
      try {
        this.comObj.postMessage(
          {
            sourceName: this.sourceName,
            targetName: this.targetName,
            action: U,
            callbackId: Z,
            data: l,
          },
          d,
        );
      } catch (F) {
        t.reject(F);
      }
      return t.promise;
    }
    sendWithStream(U, l, d, Z) {
      const t = this.streamId++,
        F = this.sourceName,
        c = this.targetName,
        n = this.comObj;
      return new ReadableStream(
        {
          start: (V) => {
            const W = Promise.withResolvers();
            return (
              (this.streamControllers[t] = {
                controller: V,
                startCall: W,
                pullCall: null,
                cancelCall: null,
                isClosed: !1,
              }),
              n.postMessage(
                {
                  sourceName: F,
                  targetName: c,
                  action: U,
                  streamId: t,
                  data: l,
                  desiredSize: V.desiredSize,
                },
                Z,
              ),
              W.promise
            );
          },
          pull: (V) => {
            const W = Promise.withResolvers();
            return (
              (this.streamControllers[t].pullCall = W),
              n.postMessage({
                sourceName: F,
                targetName: c,
                stream: Yl.PULL,
                streamId: t,
                desiredSize: V.desiredSize,
              }),
              W.promise
            );
          },
          cancel: (V) => {
            Bl(V instanceof Error, 'cancel must have a valid reason');
            const W = Promise.withResolvers();
            return (
              (this.streamControllers[t].cancelCall = W),
              (this.streamControllers[t].isClosed = !0),
              n.postMessage({
                sourceName: F,
                targetName: c,
                stream: Yl.CANCEL,
                streamId: t,
                reason: bU(V),
              }),
              W.promise
            );
          },
        },
        d,
      );
    }
    destroy() {
      this.comObj.removeEventListener('message', this._onComObjOnMessage);
    }
  }
  (ua = new WeakSet()),
    (Cm = function (U) {
      const l = U.streamId,
        d = this.sourceName,
        Z = U.sourceName,
        t = this.comObj,
        F = this,
        c = this.actionHandler[U.action],
        n = {
          enqueue(V, W = 1, a) {
            if (this.isCancelled) return;
            const i = this.desiredSize;
            (this.desiredSize -= W),
              i > 0 &&
                this.desiredSize <= 0 &&
                ((this.sinkCapability = Promise.withResolvers()),
                (this.ready = this.sinkCapability.promise)),
              t.postMessage(
                {
                  sourceName: d,
                  targetName: Z,
                  stream: Yl.ENQUEUE,
                  streamId: l,
                  chunk: V,
                },
                a,
              );
          },
          close() {
            this.isCancelled ||
              ((this.isCancelled = !0),
              t.postMessage({
                sourceName: d,
                targetName: Z,
                stream: Yl.CLOSE,
                streamId: l,
              }),
              delete F.streamSinks[l]);
          },
          error(V) {
            Bl(V instanceof Error, 'error must have a valid reason'),
              !this.isCancelled &&
                ((this.isCancelled = !0),
                t.postMessage({
                  sourceName: d,
                  targetName: Z,
                  stream: Yl.ERROR,
                  streamId: l,
                  reason: bU(V),
                }));
          },
          sinkCapability: Promise.withResolvers(),
          onPull: null,
          onCancel: null,
          isCancelled: !1,
          desiredSize: U.desiredSize,
          ready: null,
        };
      n.sinkCapability.resolve(),
        (n.ready = n.sinkCapability.promise),
        (this.streamSinks[l] = n),
        new Promise(function (V) {
          V(c(U.data, n));
        }).then(
          function () {
            t.postMessage({
              sourceName: d,
              targetName: Z,
              stream: Yl.START_COMPLETE,
              streamId: l,
              success: !0,
            });
          },
          function (V) {
            t.postMessage({
              sourceName: d,
              targetName: Z,
              stream: Yl.START_COMPLETE,
              streamId: l,
              reason: bU(V),
            });
          },
        );
    }),
    (pa = new WeakSet()),
    (rm = function (U) {
      const l = U.streamId,
        d = this.sourceName,
        Z = U.sourceName,
        t = this.comObj,
        F = this.streamControllers[l],
        c = this.streamSinks[l];
      switch (U.stream) {
        case Yl.START_COMPLETE:
          U.success ? F.startCall.resolve() : F.startCall.reject(bU(U.reason));
          break;
        case Yl.PULL_COMPLETE:
          U.success ? F.pullCall.resolve() : F.pullCall.reject(bU(U.reason));
          break;
        case Yl.PULL:
          if (!c) {
            t.postMessage({
              sourceName: d,
              targetName: Z,
              stream: Yl.PULL_COMPLETE,
              streamId: l,
              success: !0,
            });
            break;
          }
          c.desiredSize <= 0 && U.desiredSize > 0 && c.sinkCapability.resolve(),
            (c.desiredSize = U.desiredSize),
            new Promise(function (n) {
              var V;
              n((V = c.onPull) == null ? void 0 : V.call(c));
            }).then(
              function () {
                t.postMessage({
                  sourceName: d,
                  targetName: Z,
                  stream: Yl.PULL_COMPLETE,
                  streamId: l,
                  success: !0,
                });
              },
              function (n) {
                t.postMessage({
                  sourceName: d,
                  targetName: Z,
                  stream: Yl.PULL_COMPLETE,
                  streamId: l,
                  reason: bU(n),
                });
              },
            );
          break;
        case Yl.ENQUEUE:
          if ((Bl(F, 'enqueue should have stream controller'), F.isClosed))
            break;
          F.controller.enqueue(U.chunk);
          break;
        case Yl.CLOSE:
          if ((Bl(F, 'close should have stream controller'), F.isClosed)) break;
          (F.isClosed = !0),
            F.controller.close(),
            b(this, y0, eR).call(this, F, l);
          break;
        case Yl.ERROR:
          Bl(F, 'error should have stream controller'),
            F.controller.error(bU(U.reason)),
            b(this, y0, eR).call(this, F, l);
          break;
        case Yl.CANCEL_COMPLETE:
          U.success
            ? F.cancelCall.resolve()
            : F.cancelCall.reject(bU(U.reason)),
            b(this, y0, eR).call(this, F, l);
          break;
        case Yl.CANCEL:
          if (!c) break;
          new Promise(function (n) {
            var V;
            n((V = c.onCancel) == null ? void 0 : V.call(c, bU(U.reason)));
          }).then(
            function () {
              t.postMessage({
                sourceName: d,
                targetName: Z,
                stream: Yl.CANCEL_COMPLETE,
                streamId: l,
                success: !0,
              });
            },
            function (n) {
              t.postMessage({
                sourceName: d,
                targetName: Z,
                stream: Yl.CANCEL_COMPLETE,
                streamId: l,
                reason: bU(n),
              });
            },
          ),
            c.sinkCapability.reject(bU(U.reason)),
            (c.isCancelled = !0),
            delete this.streamSinks[l];
          break;
        default:
          throw new Error('Unexpected stream case');
      }
    }),
    (y0 = new WeakSet()),
    (eR = async function (U, l) {
      var d, Z, t;
      await Promise.allSettled([
        (d = U.startCall) == null ? void 0 : d.promise,
        (Z = U.pullCall) == null ? void 0 : Z.promise,
        (t = U.cancelCall) == null ? void 0 : t.promise,
      ]),
        delete this.streamControllers[l];
    });
  class FJ {
    constructor({ parsedData: U, rawData: l }) {
      R(this, _t, void 0);
      R(this, XQ, void 0);
      e(this, _t, U), e(this, XQ, l);
    }
    getRaw() {
      return s(this, XQ);
    }
    get(U) {
      return s(this, _t).get(U) ?? null;
    }
    getAll() {
      return qR(s(this, _t));
    }
    has(U) {
      return s(this, _t).has(U);
    }
  }
  (_t = new WeakMap()), (XQ = new WeakMap());
  const TZ = Symbol('INTERNAL');
  class cJ {
    constructor(U, { name: l, intent: d, usage: Z }) {
      R(this, YQ, !1);
      R(this, uQ, !1);
      R(this, pQ, !1);
      R(this, L0, !0);
      e(this, YQ, !!(U & pU.DISPLAY)),
        e(this, uQ, !!(U & pU.PRINT)),
        (this.name = l),
        (this.intent = d),
        (this.usage = Z);
    }
    get visible() {
      if (s(this, pQ)) return s(this, L0);
      if (!s(this, L0)) return !1;
      const { print: U, view: l } = this.usage;
      return s(this, YQ)
        ? (l == null ? void 0 : l.viewState) !== 'OFF'
        : s(this, uQ)
          ? (U == null ? void 0 : U.printState) !== 'OFF'
          : !0;
    }
    _setVisible(U, l, d = !1) {
      U !== TZ && sl('Internal method `_setVisible` called.'),
        e(this, pQ, d),
        e(this, L0, l);
    }
  }
  (YQ = new WeakMap()),
    (uQ = new WeakMap()),
    (pQ = new WeakMap()),
    (L0 = new WeakMap());
  class sJ {
    constructor(U, l = pU.DISPLAY) {
      R(this, oQ);
      R(this, EZ, null);
      R(this, Ql, new Map());
      R(this, z0, null);
      R(this, k0, null);
      if (
        ((this.renderingIntent = l),
        (this.name = null),
        (this.creator = null),
        U !== null)
      ) {
        (this.name = U.name), (this.creator = U.creator), e(this, k0, U.order);
        for (const d of U.groups) s(this, Ql).set(d.id, new cJ(l, d));
        if (U.baseState === 'OFF')
          for (const d of s(this, Ql).values()) d._setVisible(TZ, !1);
        for (const d of U.on) s(this, Ql).get(d)._setVisible(TZ, !0);
        for (const d of U.off) s(this, Ql).get(d)._setVisible(TZ, !1);
        e(this, z0, this.getHash());
      }
    }
    isVisible(U) {
      if (s(this, Ql).size === 0) return !0;
      if (!U) return VW('Optional content group not defined.'), !0;
      if (U.type === 'OCG')
        return s(this, Ql).has(U.id)
          ? s(this, Ql).get(U.id).visible
          : (_(`Optional content group not found: ${U.id}`), !0);
      if (U.type === 'OCMD') {
        if (U.expression) return b(this, oQ, eh).call(this, U.expression);
        if (!U.policy || U.policy === 'AnyOn') {
          for (const l of U.ids) {
            if (!s(this, Ql).has(l))
              return _(`Optional content group not found: ${l}`), !0;
            if (s(this, Ql).get(l).visible) return !0;
          }
          return !1;
        } else if (U.policy === 'AllOn') {
          for (const l of U.ids) {
            if (!s(this, Ql).has(l))
              return _(`Optional content group not found: ${l}`), !0;
            if (!s(this, Ql).get(l).visible) return !1;
          }
          return !0;
        } else if (U.policy === 'AnyOff') {
          for (const l of U.ids) {
            if (!s(this, Ql).has(l))
              return _(`Optional content group not found: ${l}`), !0;
            if (!s(this, Ql).get(l).visible) return !0;
          }
          return !1;
        } else if (U.policy === 'AllOff') {
          for (const l of U.ids) {
            if (!s(this, Ql).has(l))
              return _(`Optional content group not found: ${l}`), !0;
            if (s(this, Ql).get(l).visible) return !1;
          }
          return !0;
        }
        return _(`Unknown optional content policy ${U.policy}.`), !0;
      }
      return _(`Unknown group type ${U.type}.`), !0;
    }
    setVisibility(U, l = !0) {
      const d = s(this, Ql).get(U);
      if (!d) {
        _(`Optional content group not found: ${U}`);
        return;
      }
      d._setVisible(TZ, !!l, !0), e(this, EZ, null);
    }
    setOCGState({ state: U, preserveRB: l }) {
      let d;
      for (const Z of U) {
        switch (Z) {
          case 'ON':
          case 'OFF':
          case 'Toggle':
            d = Z;
            continue;
        }
        const t = s(this, Ql).get(Z);
        if (t)
          switch (d) {
            case 'ON':
              t._setVisible(TZ, !0);
              break;
            case 'OFF':
              t._setVisible(TZ, !1);
              break;
            case 'Toggle':
              t._setVisible(TZ, !t.visible);
              break;
          }
      }
      e(this, EZ, null);
    }
    get hasInitialVisibility() {
      return s(this, z0) === null || this.getHash() === s(this, z0);
    }
    getOrder() {
      return s(this, Ql).size
        ? s(this, k0)
          ? s(this, k0).slice()
          : [...s(this, Ql).keys()]
        : null;
    }
    getGroups() {
      return s(this, Ql).size > 0 ? qR(s(this, Ql)) : null;
    }
    getGroup(U) {
      return s(this, Ql).get(U) || null;
    }
    getHash() {
      if (s(this, EZ) !== null) return s(this, EZ);
      const U = new yb();
      for (const [l, d] of s(this, Ql)) U.update(`${l}:${d.visible}`);
      return e(this, EZ, U.hexdigest());
    }
  }
  (EZ = new WeakMap()),
    (Ql = new WeakMap()),
    (z0 = new WeakMap()),
    (k0 = new WeakMap()),
    (oQ = new WeakSet()),
    (eh = function (U) {
      const l = U.length;
      if (l < 2) return !0;
      const d = U[0];
      for (let Z = 1; Z < l; Z++) {
        const t = U[Z];
        let F;
        if (Array.isArray(t)) F = b(this, oQ, eh).call(this, t);
        else if (s(this, Ql).has(t)) F = s(this, Ql).get(t).visible;
        else return _(`Optional content group not found: ${t}`), !0;
        switch (d) {
          case 'And':
            if (!F) return !1;
            break;
          case 'Or':
            if (F) return !0;
            break;
          case 'Not':
            return !F;
          default:
            return !0;
        }
      }
      return d === 'And';
    });
  class QJ {
    constructor(U, { disableRange: l = !1, disableStream: d = !1 }) {
      Bl(
        U,
        'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.',
      );
      const {
        length: Z,
        initialData: t,
        progressiveDone: F,
        contentDispositionFilename: c,
      } = U;
      if (
        ((this._queuedChunks = []),
        (this._progressiveDone = F),
        (this._contentDispositionFilename = c),
        (t == null ? void 0 : t.length) > 0)
      ) {
        const n =
          t instanceof Uint8Array && t.byteLength === t.buffer.byteLength
            ? t.buffer
            : new Uint8Array(t).buffer;
        this._queuedChunks.push(n);
      }
      (this._pdfDataRangeTransport = U),
        (this._isStreamingSupported = !d),
        (this._isRangeSupported = !l),
        (this._contentLength = Z),
        (this._fullRequestReader = null),
        (this._rangeReaders = []),
        U.addRangeListener((n, V) => {
          this._onReceiveData({ begin: n, chunk: V });
        }),
        U.addProgressListener((n, V) => {
          this._onProgress({ loaded: n, total: V });
        }),
        U.addProgressiveReadListener((n) => {
          this._onReceiveData({ chunk: n });
        }),
        U.addProgressiveDoneListener(() => {
          this._onProgressiveDone();
        }),
        U.transportReady();
    }
    _onReceiveData({ begin: U, chunk: l }) {
      const d =
        l instanceof Uint8Array && l.byteLength === l.buffer.byteLength
          ? l.buffer
          : new Uint8Array(l).buffer;
      if (U === void 0)
        this._fullRequestReader
          ? this._fullRequestReader._enqueue(d)
          : this._queuedChunks.push(d);
      else {
        const Z = this._rangeReaders.some(function (t) {
          return t._begin !== U ? !1 : (t._enqueue(d), !0);
        });
        Bl(
          Z,
          '_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.',
        );
      }
    }
    get _progressiveDataLength() {
      var U;
      return ((U = this._fullRequestReader) == null ? void 0 : U._loaded) ?? 0;
    }
    _onProgress(U) {
      var l, d, Z, t;
      U.total === void 0
        ? (d = (l = this._rangeReaders[0]) == null ? void 0 : l.onProgress) ==
            null || d.call(l, { loaded: U.loaded })
        : (t = (Z = this._fullRequestReader) == null ? void 0 : Z.onProgress) ==
            null || t.call(Z, { loaded: U.loaded, total: U.total });
    }
    _onProgressiveDone() {
      var U;
      (U = this._fullRequestReader) == null || U.progressiveDone(),
        (this._progressiveDone = !0);
    }
    _removeRangeReader(U) {
      const l = this._rangeReaders.indexOf(U);
      l >= 0 && this._rangeReaders.splice(l, 1);
    }
    getFullReader() {
      Bl(
        !this._fullRequestReader,
        'PDFDataTransportStream.getFullReader can only be called once.',
      );
      const U = this._queuedChunks;
      return (
        (this._queuedChunks = null),
        new nJ(this, U, this._progressiveDone, this._contentDispositionFilename)
      );
    }
    getRangeReader(U, l) {
      if (l <= this._progressiveDataLength) return null;
      const d = new VJ(this, U, l);
      return (
        this._pdfDataRangeTransport.requestDataRange(U, l),
        this._rangeReaders.push(d),
        d
      );
    }
    cancelAllRequests(U) {
      var l;
      (l = this._fullRequestReader) == null || l.cancel(U);
      for (const d of this._rangeReaders.slice(0)) d.cancel(U);
      this._pdfDataRangeTransport.abort();
    }
  }
  class nJ {
    constructor(U, l, d = !1, Z = null) {
      (this._stream = U),
        (this._done = d || !1),
        (this._filename = FN(Z) ? Z : null),
        (this._queuedChunks = l || []),
        (this._loaded = 0);
      for (const t of this._queuedChunks) this._loaded += t.byteLength;
      (this._requests = []),
        (this._headersReady = Promise.resolve()),
        (U._fullRequestReader = this),
        (this.onProgress = null);
    }
    _enqueue(U) {
      this._done ||
        (this._requests.length > 0
          ? this._requests.shift().resolve({ value: U, done: !1 })
          : this._queuedChunks.push(U),
        (this._loaded += U.byteLength));
    }
    get headersReady() {
      return this._headersReady;
    }
    get filename() {
      return this._filename;
    }
    get isRangeSupported() {
      return this._stream._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._stream._isStreamingSupported;
    }
    get contentLength() {
      return this._stream._contentLength;
    }
    async read() {
      if (this._queuedChunks.length > 0)
        return { value: this._queuedChunks.shift(), done: !1 };
      if (this._done) return { value: void 0, done: !0 };
      const U = Promise.withResolvers();
      return this._requests.push(U), U.promise;
    }
    cancel(U) {
      this._done = !0;
      for (const l of this._requests) l.resolve({ value: void 0, done: !0 });
      this._requests.length = 0;
    }
    progressiveDone() {
      this._done || (this._done = !0);
    }
  }
  class VJ {
    constructor(U, l, d) {
      (this._stream = U),
        (this._begin = l),
        (this._end = d),
        (this._queuedChunk = null),
        (this._requests = []),
        (this._done = !1),
        (this.onProgress = null);
    }
    _enqueue(U) {
      if (!this._done) {
        if (this._requests.length === 0) this._queuedChunk = U;
        else {
          this._requests.shift().resolve({ value: U, done: !1 });
          for (const d of this._requests)
            d.resolve({ value: void 0, done: !0 });
          this._requests.length = 0;
        }
        (this._done = !0), this._stream._removeRangeReader(this);
      }
    }
    get isStreamingSupported() {
      return !1;
    }
    async read() {
      if (this._queuedChunk) {
        const l = this._queuedChunk;
        return (this._queuedChunk = null), { value: l, done: !1 };
      }
      if (this._done) return { value: void 0, done: !0 };
      const U = Promise.withResolvers();
      return this._requests.push(U), U.promise;
    }
    cancel(U) {
      this._done = !0;
      for (const l of this._requests) l.resolve({ value: void 0, done: !0 });
      (this._requests.length = 0), this._stream._removeRangeReader(this);
    }
  }
  function WJ(Q) {
    let U = !0,
      l = d('filename\\*', 'i').exec(Q);
    if (l) {
      l = l[1];
      let W = c(l);
      return (W = unescape(W)), (W = n(W)), (W = V(W)), t(W);
    }
    if (((l = F(Q)), l)) {
      const W = V(l);
      return t(W);
    }
    if (((l = d('filename', 'i').exec(Q)), l)) {
      l = l[1];
      let W = c(l);
      return (W = V(W)), t(W);
    }
    function d(W, a) {
      return new RegExp(
        '(?:^|;)\\s*' +
          W +
          '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',
        a,
      );
    }
    function Z(W, a) {
      if (W) {
        if (!/^[\x00-\xFF]+$/.test(a)) return a;
        try {
          const i = new TextDecoder(W, { fatal: !0 }),
            h = aW(a);
          (a = i.decode(h)), (U = !1);
        } catch {}
      }
      return a;
    }
    function t(W) {
      return (
        U &&
          /[\x80-\xff]/.test(W) &&
          ((W = Z('utf-8', W)), U && (W = Z('iso-8859-1', W))),
        W
      );
    }
    function F(W) {
      const a = [];
      let i;
      const h = d('filename\\*((?!0\\d)\\d+)(\\*?)', 'ig');
      for (; (i = h.exec(W)) !== null; ) {
        let [, M, J, m] = i;
        if (((M = parseInt(M, 10)), M in a)) {
          if (M === 0) break;
          continue;
        }
        a[M] = [J, m];
      }
      const N = [];
      for (let M = 0; M < a.length && M in a; ++M) {
        let [J, m] = a[M];
        (m = c(m)), J && ((m = unescape(m)), M === 0 && (m = n(m))), N.push(m);
      }
      return N.join('');
    }
    function c(W) {
      if (W.startsWith('"')) {
        const a = W.slice(1).split('\\"');
        for (let i = 0; i < a.length; ++i) {
          const h = a[i].indexOf('"');
          h !== -1 && ((a[i] = a[i].slice(0, h)), (a.length = i + 1)),
            (a[i] = a[i].replaceAll(/\\(.)/g, '$1'));
        }
        W = a.join('"');
      }
      return W;
    }
    function n(W) {
      const a = W.indexOf("'");
      if (a === -1) return W;
      const i = W.slice(0, a),
        N = W.slice(a + 1).replace(/^[^']*'/, '');
      return Z(i, N);
    }
    function V(W) {
      return !W.startsWith('=?') || /[\x00-\x19\x80-\xff]/.test(W)
        ? W
        : W.replaceAll(
            /=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,
            function (a, i, h, N) {
              if (h === 'q' || h === 'Q')
                return (
                  (N = N.replaceAll('_', ' ')),
                  (N = N.replaceAll(/=([0-9a-fA-F]{2})/g, function (M, J) {
                    return String.fromCharCode(parseInt(J, 16));
                  })),
                  Z(i, N)
                );
              try {
                N = atob(N);
              } catch {}
              return Z(i, N);
            },
          );
    }
    return '';
  }
  function hN({
    getResponseHeader: Q,
    isHttp: U,
    rangeChunkSize: l,
    disableRange: d,
  }) {
    const Z = { allowRangeRequests: !1, suggestedLength: void 0 },
      t = parseInt(Q('Content-Length'), 10);
    return (
      !Number.isInteger(t) ||
        ((Z.suggestedLength = t), t <= 2 * l) ||
        d ||
        !U ||
        Q('Accept-Ranges') !== 'bytes' ||
        (Q('Content-Encoding') || 'identity') !== 'identity' ||
        (Z.allowRangeRequests = !0),
      Z
    );
  }
  function bN(Q) {
    const U = Q('Content-Disposition');
    if (U) {
      let l = WJ(U);
      if (l.includes('%'))
        try {
          l = decodeURIComponent(l);
        } catch {}
      if (FN(l)) return l;
    }
    return null;
  }
  function TW(Q, U) {
    return Q === 404 || (Q === 0 && U.startsWith('file:'))
      ? new Jt('Missing PDF "' + U + '".')
      : new WW(
          `Unexpected server response (${Q}) while retrieving PDF "${U}".`,
          Q,
        );
  }
  function gb(Q) {
    return Q === 200 || Q === 206;
  }
  function Kb(Q, U, l) {
    return {
      method: 'GET',
      headers: Q,
      signal: l.signal,
      mode: 'cors',
      credentials: U ? 'include' : 'same-origin',
      redirect: 'follow',
    };
  }
  function vb(Q) {
    const U = new Headers();
    for (const l in Q) {
      const d = Q[l];
      d !== void 0 && U.append(l, d);
    }
    return U;
  }
  function Hb(Q) {
    return Q instanceof Uint8Array
      ? Q.buffer
      : Q instanceof ArrayBuffer
        ? Q
        : (_(`getArrayBuffer - unexpected data format: ${Q}`),
          new Uint8Array(Q).buffer);
  }
  class Pb {
    constructor(U) {
      (this.source = U),
        (this.isHttp = /^https?:/i.test(U.url)),
        (this.httpHeaders = (this.isHttp && U.httpHeaders) || {}),
        (this._fullRequestReader = null),
        (this._rangeRequestReaders = []);
    }
    get _progressiveDataLength() {
      var U;
      return ((U = this._fullRequestReader) == null ? void 0 : U._loaded) ?? 0;
    }
    getFullReader() {
      return (
        Bl(
          !this._fullRequestReader,
          'PDFFetchStream.getFullReader can only be called once.',
        ),
        (this._fullRequestReader = new aJ(this)),
        this._fullRequestReader
      );
    }
    getRangeReader(U, l) {
      if (l <= this._progressiveDataLength) return null;
      const d = new iJ(this, U, l);
      return this._rangeRequestReaders.push(d), d;
    }
    cancelAllRequests(U) {
      var l;
      (l = this._fullRequestReader) == null || l.cancel(U);
      for (const d of this._rangeRequestReaders.slice(0)) d.cancel(U);
    }
  }
  class aJ {
    constructor(U) {
      (this._stream = U),
        (this._reader = null),
        (this._loaded = 0),
        (this._filename = null);
      const l = U.source;
      (this._withCredentials = l.withCredentials || !1),
        (this._contentLength = l.length),
        (this._headersCapability = Promise.withResolvers()),
        (this._disableRange = l.disableRange || !1),
        (this._rangeChunkSize = l.rangeChunkSize),
        !this._rangeChunkSize &&
          !this._disableRange &&
          (this._disableRange = !0),
        (this._abortController = new AbortController()),
        (this._isStreamingSupported = !l.disableStream),
        (this._isRangeSupported = !l.disableRange),
        (this._headers = vb(this._stream.httpHeaders));
      const d = l.url;
      fetch(d, Kb(this._headers, this._withCredentials, this._abortController))
        .then((Z) => {
          if (!gb(Z.status)) throw TW(Z.status, d);
          (this._reader = Z.body.getReader()),
            this._headersCapability.resolve();
          const t = (n) => Z.headers.get(n),
            { allowRangeRequests: F, suggestedLength: c } = hN({
              getResponseHeader: t,
              isHttp: this._stream.isHttp,
              rangeChunkSize: this._rangeChunkSize,
              disableRange: this._disableRange,
            });
          (this._isRangeSupported = F),
            (this._contentLength = c || this._contentLength),
            (this._filename = bN(t)),
            !this._isStreamingSupported &&
              this._isRangeSupported &&
              this.cancel(new Gt('Streaming is disabled.'));
        })
        .catch(this._headersCapability.reject),
        (this.onProgress = null);
    }
    get headersReady() {
      return this._headersCapability.promise;
    }
    get filename() {
      return this._filename;
    }
    get contentLength() {
      return this._contentLength;
    }
    get isRangeSupported() {
      return this._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      var d;
      await this._headersCapability.promise;
      const { value: U, done: l } = await this._reader.read();
      return l
        ? { value: U, done: l }
        : ((this._loaded += U.byteLength),
          (d = this.onProgress) == null ||
            d.call(this, { loaded: this._loaded, total: this._contentLength }),
          { value: Hb(U), done: !1 });
    }
    cancel(U) {
      var l;
      (l = this._reader) == null || l.cancel(U), this._abortController.abort();
    }
  }
  class iJ {
    constructor(U, l, d) {
      (this._stream = U), (this._reader = null), (this._loaded = 0);
      const Z = U.source;
      (this._withCredentials = Z.withCredentials || !1),
        (this._readCapability = Promise.withResolvers()),
        (this._isStreamingSupported = !Z.disableStream),
        (this._abortController = new AbortController()),
        (this._headers = vb(this._stream.httpHeaders)),
        this._headers.append('Range', `bytes=${l}-${d - 1}`);
      const t = Z.url;
      fetch(t, Kb(this._headers, this._withCredentials, this._abortController))
        .then((F) => {
          if (!gb(F.status)) throw TW(F.status, t);
          this._readCapability.resolve(), (this._reader = F.body.getReader());
        })
        .catch(this._readCapability.reject),
        (this.onProgress = null);
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      var d;
      await this._readCapability.promise;
      const { value: U, done: l } = await this._reader.read();
      return l
        ? { value: U, done: l }
        : ((this._loaded += U.byteLength),
          (d = this.onProgress) == null ||
            d.call(this, { loaded: this._loaded }),
          { value: Hb(U), done: !1 });
    }
    cancel(U) {
      var l;
      (l = this._reader) == null || l.cancel(U), this._abortController.abort();
    }
  }
  const eN = 200,
    mN = 206;
  function RJ(Q) {
    const U = Q.response;
    return typeof U != 'string' ? U : aW(U).buffer;
  }
  class NJ {
    constructor(U, l = {}) {
      (this.url = U),
        (this.isHttp = /^https?:/i.test(U)),
        (this.httpHeaders =
          (this.isHttp && l.httpHeaders) || Object.create(null)),
        (this.withCredentials = l.withCredentials || !1),
        (this.currXhrId = 0),
        (this.pendingRequests = Object.create(null));
    }
    requestRange(U, l, d) {
      const Z = { begin: U, end: l };
      for (const t in d) Z[t] = d[t];
      return this.request(Z);
    }
    requestFull(U) {
      return this.request(U);
    }
    request(U) {
      const l = new XMLHttpRequest(),
        d = this.currXhrId++,
        Z = (this.pendingRequests[d] = { xhr: l });
      l.open('GET', this.url), (l.withCredentials = this.withCredentials);
      for (const t in this.httpHeaders) {
        const F = this.httpHeaders[t];
        F !== void 0 && l.setRequestHeader(t, F);
      }
      return (
        this.isHttp && 'begin' in U && 'end' in U
          ? (l.setRequestHeader('Range', `bytes=${U.begin}-${U.end - 1}`),
            (Z.expectedStatus = mN))
          : (Z.expectedStatus = eN),
        (l.responseType = 'arraybuffer'),
        U.onError &&
          (l.onerror = function (t) {
            U.onError(l.status);
          }),
        (l.onreadystatechange = this.onStateChange.bind(this, d)),
        (l.onprogress = this.onProgress.bind(this, d)),
        (Z.onHeadersReceived = U.onHeadersReceived),
        (Z.onDone = U.onDone),
        (Z.onError = U.onError),
        (Z.onProgress = U.onProgress),
        l.send(null),
        d
      );
    }
    onProgress(U, l) {
      var Z;
      const d = this.pendingRequests[U];
      d && ((Z = d.onProgress) == null || Z.call(d, l));
    }
    onStateChange(U, l) {
      var n, V, W;
      const d = this.pendingRequests[U];
      if (!d) return;
      const Z = d.xhr;
      if (
        (Z.readyState >= 2 &&
          d.onHeadersReceived &&
          (d.onHeadersReceived(), delete d.onHeadersReceived),
        Z.readyState !== 4 || !(U in this.pendingRequests))
      )
        return;
      if ((delete this.pendingRequests[U], Z.status === 0 && this.isHttp)) {
        (n = d.onError) == null || n.call(d, Z.status);
        return;
      }
      const t = Z.status || eN;
      if (!(t === eN && d.expectedStatus === mN) && t !== d.expectedStatus) {
        (V = d.onError) == null || V.call(d, Z.status);
        return;
      }
      const c = RJ(Z);
      if (t === mN) {
        const a = Z.getResponseHeader('Content-Range'),
          i = /bytes (\d+)-(\d+)\/(\d+)/.exec(a);
        d.onDone({ begin: parseInt(i[1], 10), chunk: c });
      } else
        c
          ? d.onDone({ begin: 0, chunk: c })
          : (W = d.onError) == null || W.call(d, Z.status);
    }
    getRequestXhr(U) {
      return this.pendingRequests[U].xhr;
    }
    isPendingRequest(U) {
      return U in this.pendingRequests;
    }
    abortRequest(U) {
      const l = this.pendingRequests[U].xhr;
      delete this.pendingRequests[U], l.abort();
    }
  }
  class hJ {
    constructor(U) {
      (this._source = U),
        (this._manager = new NJ(U.url, {
          httpHeaders: U.httpHeaders,
          withCredentials: U.withCredentials,
        })),
        (this._rangeChunkSize = U.rangeChunkSize),
        (this._fullRequestReader = null),
        (this._rangeRequestReaders = []);
    }
    _onRangeRequestReaderClosed(U) {
      const l = this._rangeRequestReaders.indexOf(U);
      l >= 0 && this._rangeRequestReaders.splice(l, 1);
    }
    getFullReader() {
      return (
        Bl(
          !this._fullRequestReader,
          'PDFNetworkStream.getFullReader can only be called once.',
        ),
        (this._fullRequestReader = new bJ(this._manager, this._source)),
        this._fullRequestReader
      );
    }
    getRangeReader(U, l) {
      const d = new eJ(this._manager, U, l);
      return (
        (d.onClosed = this._onRangeRequestReaderClosed.bind(this)),
        this._rangeRequestReaders.push(d),
        d
      );
    }
    cancelAllRequests(U) {
      var l;
      (l = this._fullRequestReader) == null || l.cancel(U);
      for (const d of this._rangeRequestReaders.slice(0)) d.cancel(U);
    }
  }
  class bJ {
    constructor(U, l) {
      this._manager = U;
      const d = {
        onHeadersReceived: this._onHeadersReceived.bind(this),
        onDone: this._onDone.bind(this),
        onError: this._onError.bind(this),
        onProgress: this._onProgress.bind(this),
      };
      (this._url = l.url),
        (this._fullRequestId = U.requestFull(d)),
        (this._headersReceivedCapability = Promise.withResolvers()),
        (this._disableRange = l.disableRange || !1),
        (this._contentLength = l.length),
        (this._rangeChunkSize = l.rangeChunkSize),
        !this._rangeChunkSize &&
          !this._disableRange &&
          (this._disableRange = !0),
        (this._isStreamingSupported = !1),
        (this._isRangeSupported = !1),
        (this._cachedChunks = []),
        (this._requests = []),
        (this._done = !1),
        (this._storedError = void 0),
        (this._filename = null),
        (this.onProgress = null);
    }
    _onHeadersReceived() {
      const U = this._fullRequestId,
        l = this._manager.getRequestXhr(U),
        d = (F) => l.getResponseHeader(F),
        { allowRangeRequests: Z, suggestedLength: t } = hN({
          getResponseHeader: d,
          isHttp: this._manager.isHttp,
          rangeChunkSize: this._rangeChunkSize,
          disableRange: this._disableRange,
        });
      Z && (this._isRangeSupported = !0),
        (this._contentLength = t || this._contentLength),
        (this._filename = bN(d)),
        this._isRangeSupported && this._manager.abortRequest(U),
        this._headersReceivedCapability.resolve();
    }
    _onDone(U) {
      if (
        (U &&
          (this._requests.length > 0
            ? this._requests.shift().resolve({ value: U.chunk, done: !1 })
            : this._cachedChunks.push(U.chunk)),
        (this._done = !0),
        !(this._cachedChunks.length > 0))
      ) {
        for (const l of this._requests) l.resolve({ value: void 0, done: !0 });
        this._requests.length = 0;
      }
    }
    _onError(U) {
      (this._storedError = TW(U, this._url)),
        this._headersReceivedCapability.reject(this._storedError);
      for (const l of this._requests) l.reject(this._storedError);
      (this._requests.length = 0), (this._cachedChunks.length = 0);
    }
    _onProgress(U) {
      var l;
      (l = this.onProgress) == null ||
        l.call(this, {
          loaded: U.loaded,
          total: U.lengthComputable ? U.total : this._contentLength,
        });
    }
    get filename() {
      return this._filename;
    }
    get isRangeSupported() {
      return this._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    get contentLength() {
      return this._contentLength;
    }
    get headersReady() {
      return this._headersReceivedCapability.promise;
    }
    async read() {
      if (this._storedError) throw this._storedError;
      if (this._cachedChunks.length > 0)
        return { value: this._cachedChunks.shift(), done: !1 };
      if (this._done) return { value: void 0, done: !0 };
      const U = Promise.withResolvers();
      return this._requests.push(U), U.promise;
    }
    cancel(U) {
      (this._done = !0), this._headersReceivedCapability.reject(U);
      for (const l of this._requests) l.resolve({ value: void 0, done: !0 });
      (this._requests.length = 0),
        this._manager.isPendingRequest(this._fullRequestId) &&
          this._manager.abortRequest(this._fullRequestId),
        (this._fullRequestReader = null);
    }
  }
  class eJ {
    constructor(U, l, d) {
      this._manager = U;
      const Z = {
        onDone: this._onDone.bind(this),
        onError: this._onError.bind(this),
        onProgress: this._onProgress.bind(this),
      };
      (this._url = U.url),
        (this._requestId = U.requestRange(l, d, Z)),
        (this._requests = []),
        (this._queuedChunk = null),
        (this._done = !1),
        (this._storedError = void 0),
        (this.onProgress = null),
        (this.onClosed = null);
    }
    _close() {
      var U;
      (U = this.onClosed) == null || U.call(this, this);
    }
    _onDone(U) {
      const l = U.chunk;
      this._requests.length > 0
        ? this._requests.shift().resolve({ value: l, done: !1 })
        : (this._queuedChunk = l),
        (this._done = !0);
      for (const d of this._requests) d.resolve({ value: void 0, done: !0 });
      (this._requests.length = 0), this._close();
    }
    _onError(U) {
      this._storedError = TW(U, this._url);
      for (const l of this._requests) l.reject(this._storedError);
      (this._requests.length = 0), (this._queuedChunk = null);
    }
    _onProgress(U) {
      var l;
      this.isStreamingSupported ||
        (l = this.onProgress) == null ||
        l.call(this, { loaded: U.loaded });
    }
    get isStreamingSupported() {
      return !1;
    }
    async read() {
      if (this._storedError) throw this._storedError;
      if (this._queuedChunk !== null) {
        const l = this._queuedChunk;
        return (this._queuedChunk = null), { value: l, done: !1 };
      }
      if (this._done) return { value: void 0, done: !0 };
      const U = Promise.withResolvers();
      return this._requests.push(U), U.promise;
    }
    cancel(U) {
      this._done = !0;
      for (const l of this._requests) l.resolve({ value: void 0, done: !0 });
      (this._requests.length = 0),
        this._manager.isPendingRequest(this._requestId) &&
          this._manager.abortRequest(this._requestId),
        this._close();
    }
  }
  const fb = /^file:\/\/\/[a-zA-Z]:\//;
  function mJ(Q) {
    const U = td.get('url'),
      l = U.parse(Q);
    return l.protocol === 'file:' || l.host
      ? l
      : /^[a-z]:[/\\]/i.test(Q)
        ? U.parse(`file:///${Q}`)
        : (l.host || (l.protocol = 'file:'), l);
  }
  class MJ {
    constructor(U) {
      (this.source = U),
        (this.url = mJ(U.url)),
        (this.isHttp =
          this.url.protocol === 'http:' || this.url.protocol === 'https:'),
        (this.isFsUrl = this.url.protocol === 'file:'),
        (this.httpHeaders = (this.isHttp && U.httpHeaders) || {}),
        (this._fullRequestReader = null),
        (this._rangeRequestReaders = []);
    }
    get _progressiveDataLength() {
      var U;
      return ((U = this._fullRequestReader) == null ? void 0 : U._loaded) ?? 0;
    }
    getFullReader() {
      return (
        Bl(
          !this._fullRequestReader,
          'PDFNodeStream.getFullReader can only be called once.',
        ),
        (this._fullRequestReader = this.isFsUrl ? new TJ(this) : new JJ(this)),
        this._fullRequestReader
      );
    }
    getRangeReader(U, l) {
      if (l <= this._progressiveDataLength) return null;
      const d = this.isFsUrl ? new SJ(this, U, l) : new GJ(this, U, l);
      return this._rangeRequestReaders.push(d), d;
    }
    cancelAllRequests(U) {
      var l;
      (l = this._fullRequestReader) == null || l.cancel(U);
      for (const d of this._rangeRequestReaders.slice(0)) d.cancel(U);
    }
  }
  class Ab {
    constructor(U) {
      (this._url = U.url),
        (this._done = !1),
        (this._storedError = null),
        (this.onProgress = null);
      const l = U.source;
      (this._contentLength = l.length),
        (this._loaded = 0),
        (this._filename = null),
        (this._disableRange = l.disableRange || !1),
        (this._rangeChunkSize = l.rangeChunkSize),
        !this._rangeChunkSize &&
          !this._disableRange &&
          (this._disableRange = !0),
        (this._isStreamingSupported = !l.disableStream),
        (this._isRangeSupported = !l.disableRange),
        (this._readableStream = null),
        (this._readCapability = Promise.withResolvers()),
        (this._headersCapability = Promise.withResolvers());
    }
    get headersReady() {
      return this._headersCapability.promise;
    }
    get filename() {
      return this._filename;
    }
    get contentLength() {
      return this._contentLength;
    }
    get isRangeSupported() {
      return this._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      var d;
      if ((await this._readCapability.promise, this._done))
        return { value: void 0, done: !0 };
      if (this._storedError) throw this._storedError;
      const U = this._readableStream.read();
      return U === null
        ? ((this._readCapability = Promise.withResolvers()), this.read())
        : ((this._loaded += U.length),
          (d = this.onProgress) == null ||
            d.call(this, { loaded: this._loaded, total: this._contentLength }),
          { value: new Uint8Array(U).buffer, done: !1 });
    }
    cancel(U) {
      if (!this._readableStream) {
        this._error(U);
        return;
      }
      this._readableStream.destroy(U);
    }
    _error(U) {
      (this._storedError = U), this._readCapability.resolve();
    }
    _setReadableStream(U) {
      (this._readableStream = U),
        U.on('readable', () => {
          this._readCapability.resolve();
        }),
        U.on('end', () => {
          U.destroy(), (this._done = !0), this._readCapability.resolve();
        }),
        U.on('error', (l) => {
          this._error(l);
        }),
        !this._isStreamingSupported &&
          this._isRangeSupported &&
          this._error(new Gt('streaming is disabled')),
        this._storedError && this._readableStream.destroy(this._storedError);
    }
  }
  class _b {
    constructor(U) {
      (this._url = U.url),
        (this._done = !1),
        (this._storedError = null),
        (this.onProgress = null),
        (this._loaded = 0),
        (this._readableStream = null),
        (this._readCapability = Promise.withResolvers());
      const l = U.source;
      this._isStreamingSupported = !l.disableStream;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      var d;
      if ((await this._readCapability.promise, this._done))
        return { value: void 0, done: !0 };
      if (this._storedError) throw this._storedError;
      const U = this._readableStream.read();
      return U === null
        ? ((this._readCapability = Promise.withResolvers()), this.read())
        : ((this._loaded += U.length),
          (d = this.onProgress) == null ||
            d.call(this, { loaded: this._loaded }),
          { value: new Uint8Array(U).buffer, done: !1 });
    }
    cancel(U) {
      if (!this._readableStream) {
        this._error(U);
        return;
      }
      this._readableStream.destroy(U);
    }
    _error(U) {
      (this._storedError = U), this._readCapability.resolve();
    }
    _setReadableStream(U) {
      (this._readableStream = U),
        U.on('readable', () => {
          this._readCapability.resolve();
        }),
        U.on('end', () => {
          U.destroy(), (this._done = !0), this._readCapability.resolve();
        }),
        U.on('error', (l) => {
          this._error(l);
        }),
        this._storedError && this._readableStream.destroy(this._storedError);
    }
  }
  function SW(Q, U) {
    return {
      protocol: Q.protocol,
      auth: Q.auth,
      host: Q.hostname,
      port: Q.port,
      path: Q.path,
      method: 'GET',
      headers: U,
    };
  }
  class JJ extends Ab {
    constructor(U) {
      super(U);
      const l = (d) => {
        if (d.statusCode === 404) {
          const c = new Jt(`Missing PDF "${this._url}".`);
          (this._storedError = c), this._headersCapability.reject(c);
          return;
        }
        this._headersCapability.resolve(), this._setReadableStream(d);
        const Z = (c) => this._readableStream.headers[c.toLowerCase()],
          { allowRangeRequests: t, suggestedLength: F } = hN({
            getResponseHeader: Z,
            isHttp: U.isHttp,
            rangeChunkSize: this._rangeChunkSize,
            disableRange: this._disableRange,
          });
        (this._isRangeSupported = t),
          (this._contentLength = F || this._contentLength),
          (this._filename = bN(Z));
      };
      if (((this._request = null), this._url.protocol === 'http:')) {
        const d = td.get('http');
        this._request = d.request(SW(this._url, U.httpHeaders), l);
      } else {
        const d = td.get('https');
        this._request = d.request(SW(this._url, U.httpHeaders), l);
      }
      this._request.on('error', (d) => {
        (this._storedError = d), this._headersCapability.reject(d);
      }),
        this._request.end();
    }
  }
  class GJ extends _b {
    constructor(U, l, d) {
      super(U), (this._httpHeaders = {});
      for (const t in U.httpHeaders) {
        const F = U.httpHeaders[t];
        F !== void 0 && (this._httpHeaders[t] = F);
      }
      this._httpHeaders.Range = `bytes=${l}-${d - 1}`;
      const Z = (t) => {
        if (t.statusCode === 404) {
          const F = new Jt(`Missing PDF "${this._url}".`);
          this._storedError = F;
          return;
        }
        this._setReadableStream(t);
      };
      if (((this._request = null), this._url.protocol === 'http:')) {
        const t = td.get('http');
        this._request = t.request(SW(this._url, this._httpHeaders), Z);
      } else {
        const t = td.get('https');
        this._request = t.request(SW(this._url, this._httpHeaders), Z);
      }
      this._request.on('error', (t) => {
        this._storedError = t;
      }),
        this._request.end();
    }
  }
  class TJ extends Ab {
    constructor(U) {
      super(U);
      let l = decodeURIComponent(this._url.path);
      fb.test(this._url.href) && (l = l.replace(/^\//, ''));
      const d = td.get('fs');
      d.promises.lstat(l).then(
        (Z) => {
          (this._contentLength = Z.size),
            this._setReadableStream(d.createReadStream(l)),
            this._headersCapability.resolve();
        },
        (Z) => {
          Z.code === 'ENOENT' && (Z = new Jt(`Missing PDF "${l}".`)),
            (this._storedError = Z),
            this._headersCapability.reject(Z);
        },
      );
    }
  }
  class SJ extends _b {
    constructor(U, l, d) {
      super(U);
      let Z = decodeURIComponent(this._url.path);
      fb.test(this._url.href) && (Z = Z.replace(/^\//, ''));
      const t = td.get('fs');
      this._setReadableStream(t.createReadStream(Z, { start: l, end: d - 1 }));
    }
  }
  const XJ = 1e5,
    aU = 30,
    YJ = 0.8;
  let XW =
    ((pl = class {
      constructor({ textContentSource: U, container: l, viewport: d }) {
        R(this, oa);
        R(this, Ba);
        R(this, EQ);
        R(this, CZ, Promise.withResolvers());
        R(this, RU, null);
        R(this, BQ, !1);
        R(this, yQ, !!((nm = globalThis.FontInspector) != null && nm.enabled));
        R(this, qt, null);
        R(this, Hd, null);
        R(this, LQ, 0);
        R(this, zQ, 0);
        R(this, $t, null);
        R(this, D0, null);
        R(this, I0, 0);
        R(this, rZ, 0);
        R(this, E0, Object.create(null));
        R(this, kQ, []);
        R(this, C0, null);
        R(this, lF, []);
        R(this, DQ, new WeakMap());
        R(this, IQ, null);
        var n;
        if (U instanceof ReadableStream) e(this, C0, U);
        else if (typeof U == 'object')
          e(
            this,
            C0,
            new ReadableStream({
              start(V) {
                V.enqueue(U), V.close();
              },
            }),
          );
        else throw new Error('No "textContentSource" parameter specified.');
        e(this, RU, e(this, D0, l)),
          e(this, rZ, d.scale * (globalThis.devicePixelRatio || 1)),
          e(this, I0, d.rotation),
          e(this, Hd, {
            prevFontSize: null,
            prevFontFamily: null,
            div: null,
            properties: null,
            ctx: null,
          });
        const { pageWidth: Z, pageHeight: t, pageX: F, pageY: c } = d.rawDims;
        e(this, IQ, [1, 0, 0, -1, -F, c + t]),
          e(this, zQ, Z),
          e(this, LQ, t),
          b((n = pl), ya, jm).call(n),
          Tt(l, d),
          s(this, CZ)
            .promise.catch(() => {})
            .then(() => {
              s(pl, r0).delete(this), e(this, Hd, null), e(this, E0, null);
            });
      }
      render() {
        const U = () => {
          s(this, $t)
            .read()
            .then(({ value: l, done: d }) => {
              if (d) {
                s(this, CZ).resolve();
                return;
              }
              s(this, qt) ?? e(this, qt, l.lang),
                Object.assign(s(this, E0), l.styles),
                b(this, oa, wm).call(this, l.items),
                U();
            }, s(this, CZ).reject);
        };
        return (
          e(this, $t, s(this, C0).getReader()),
          s(pl, r0).add(this),
          U(),
          s(this, CZ).promise
        );
      }
      update({ viewport: U, onBefore: l = null }) {
        var t;
        const d = U.scale * (globalThis.devicePixelRatio || 1),
          Z = U.rotation;
        if (
          (Z !== s(this, I0) &&
            (l == null || l(),
            e(this, I0, Z),
            Tt(s(this, D0), { rotation: Z })),
          d !== s(this, rZ))
        ) {
          l == null || l(), e(this, rZ, d);
          const F = {
            prevFontSize: null,
            prevFontFamily: null,
            div: null,
            properties: null,
            ctx: b((t = pl), w0, mR).call(t, s(this, qt)),
          };
          for (const c of s(this, lF))
            (F.properties = s(this, DQ).get(c)),
              (F.div = c),
              b(this, EQ, mh).call(this, F);
        }
      }
      cancel() {
        var l;
        const U = new Gt('TextLayer task cancelled.');
        (l = s(this, $t)) == null || l.cancel(U).catch(() => {}),
          e(this, $t, null),
          s(this, CZ).reject(U);
      }
      get textDivs() {
        return s(this, lF);
      }
      get textContentItemsStr() {
        return s(this, kQ);
      }
      static cleanup() {
        if (!(s(this, r0).size > 0)) {
          s(this, UF).clear();
          for (const { canvas: U } of s(this, dF).values()) U.remove();
          s(this, dF).clear();
        }
      }
    }),
    (CZ = new WeakMap()),
    (RU = new WeakMap()),
    (BQ = new WeakMap()),
    (yQ = new WeakMap()),
    (qt = new WeakMap()),
    (Hd = new WeakMap()),
    (LQ = new WeakMap()),
    (zQ = new WeakMap()),
    ($t = new WeakMap()),
    (D0 = new WeakMap()),
    (I0 = new WeakMap()),
    (rZ = new WeakMap()),
    (E0 = new WeakMap()),
    (kQ = new WeakMap()),
    (C0 = new WeakMap()),
    (lF = new WeakMap()),
    (DQ = new WeakMap()),
    (IQ = new WeakMap()),
    (UF = new WeakMap()),
    (dF = new WeakMap()),
    (wZ = new WeakMap()),
    (r0 = new WeakMap()),
    (oa = new WeakSet()),
    (wm = function (U) {
      var Z, t;
      if (s(this, BQ)) return;
      (t = s(this, Hd)).ctx ??
        (t.ctx = b((Z = pl), w0, mR).call(Z, s(this, qt)));
      const l = s(this, lF),
        d = s(this, kQ);
      for (const F of U) {
        if (l.length > XJ) {
          _('Ignoring additional textDivs for performance reasons.'),
            e(this, BQ, !0);
          return;
        }
        if (F.str === void 0) {
          if (
            F.type === 'beginMarkedContentProps' ||
            F.type === 'beginMarkedContent'
          ) {
            const c = s(this, RU);
            e(this, RU, document.createElement('span')),
              s(this, RU).classList.add('markedContent'),
              F.id !== null && s(this, RU).setAttribute('id', `${F.id}`),
              c.append(s(this, RU));
          } else
            F.type === 'endMarkedContent' &&
              e(this, RU, s(this, RU).parentNode);
          continue;
        }
        d.push(F.str), b(this, Ba, xm).call(this, F);
      }
    }),
    (Ba = new WeakSet()),
    (xm = function (U) {
      var M;
      const l = document.createElement('span'),
        d = {
          angle: 0,
          canvasWidth: 0,
          hasText: U.str !== '',
          hasEOL: U.hasEOL,
          fontSize: 0,
        };
      s(this, lF).push(l);
      const Z = g.transform(s(this, IQ), U.transform);
      let t = Math.atan2(Z[1], Z[0]);
      const F = s(this, E0)[U.fontName];
      F.vertical && (t += Math.PI / 2);
      const c = (s(this, yQ) && F.fontSubstitution) || F.fontFamily,
        n = Math.hypot(Z[2], Z[3]),
        V = n * b((M = pl), La, Om).call(M, c, s(this, qt));
      let W, a;
      t === 0
        ? ((W = Z[4]), (a = Z[5] - V))
        : ((W = Z[4] + V * Math.sin(t)), (a = Z[5] - V * Math.cos(t)));
      const i = 'calc(var(--scale-factor)*',
        h = l.style;
      s(this, RU) === s(this, D0)
        ? ((h.left = `${((100 * W) / s(this, zQ)).toFixed(2)}%`),
          (h.top = `${((100 * a) / s(this, LQ)).toFixed(2)}%`))
        : ((h.left = `${i}${W.toFixed(2)}px)`),
          (h.top = `${i}${a.toFixed(2)}px)`)),
        (h.fontSize = `${i}${(s(pl, wZ) * n).toFixed(2)}px)`),
        (h.fontFamily = c),
        (d.fontSize = n),
        l.setAttribute('role', 'presentation'),
        (l.textContent = U.str),
        (l.dir = U.dir),
        s(this, yQ) &&
          (l.dataset.fontName = F.fontSubstitutionLoadedName || U.fontName),
        t !== 0 && (d.angle = t * (180 / Math.PI));
      let N = !1;
      if (U.str.length > 1) N = !0;
      else if (U.str !== ' ' && U.transform[0] !== U.transform[3]) {
        const J = Math.abs(U.transform[0]),
          m = Math.abs(U.transform[3]);
        J !== m && Math.max(J, m) / Math.min(J, m) > 1.5 && (N = !0);
      }
      if (
        (N && (d.canvasWidth = F.vertical ? U.height : U.width),
        s(this, DQ).set(l, d),
        (s(this, Hd).div = l),
        (s(this, Hd).properties = d),
        b(this, EQ, mh).call(this, s(this, Hd)),
        d.hasText && s(this, RU).append(l),
        d.hasEOL)
      ) {
        const J = document.createElement('br');
        J.setAttribute('role', 'presentation'), s(this, RU).append(J);
      }
    }),
    (EQ = new WeakSet()),
    (mh = function (U) {
      const {
          div: l,
          properties: d,
          ctx: Z,
          prevFontSize: t,
          prevFontFamily: F,
        } = U,
        { style: c } = l;
      let n = '';
      if (
        (s(pl, wZ) > 1 && (n = `scale(${1 / s(pl, wZ)})`),
        d.canvasWidth !== 0 && d.hasText)
      ) {
        const { fontFamily: V } = c,
          { canvasWidth: W, fontSize: a } = d;
        (t !== a || F !== V) &&
          ((Z.font = `${a * s(this, rZ)}px ${V}`),
          (U.prevFontSize = a),
          (U.prevFontFamily = V));
        const { width: i } = Z.measureText(l.textContent);
        i > 0 && (n = `scaleX(${(W * s(this, rZ)) / i}) ${n}`);
      }
      d.angle !== 0 && (n = `rotate(${d.angle}deg) ${n}`),
        n.length > 0 && (c.transform = n);
    }),
    (w0 = new WeakSet()),
    (mR = function (U = null) {
      let l = s(this, dF).get(U || (U = ''));
      if (!l) {
        const d = document.createElement('canvas');
        (d.className = 'hiddenCanvasElement'),
          (d.lang = U),
          document.body.append(d),
          (l = d.getContext('2d', { alpha: !1, willReadFrequently: !0 })),
          s(this, dF).set(U, l);
      }
      return l;
    }),
    (ya = new WeakSet()),
    (jm = function () {
      if (s(this, wZ) !== null) return;
      const U = document.createElement('div');
      (U.style.opacity = 0),
        (U.style.lineHeight = 1),
        (U.style.fontSize = '1px'),
        (U.textContent = 'X'),
        document.body.append(U),
        e(this, wZ, U.getBoundingClientRect().height),
        U.remove();
    }),
    (La = new WeakSet()),
    (Om = function (U, l) {
      const d = s(this, UF).get(U);
      if (d) return d;
      const Z = b(this, w0, mR).call(this, l),
        t = Z.font;
      (Z.canvas.width = Z.canvas.height = aU), (Z.font = `${aU}px ${U}`);
      const F = Z.measureText('');
      let c = F.fontBoundingBoxAscent,
        n = Math.abs(F.fontBoundingBoxDescent);
      if (c) {
        const a = c / (c + n);
        return (
          s(this, UF).set(U, a),
          (Z.canvas.width = Z.canvas.height = 0),
          (Z.font = t),
          a
        );
      }
      (Z.strokeStyle = 'red'),
        Z.clearRect(0, 0, aU, aU),
        Z.strokeText('g', 0, 0);
      let V = Z.getImageData(0, 0, aU, aU).data;
      n = 0;
      for (let a = V.length - 1 - 3; a >= 0; a -= 4)
        if (V[a] > 0) {
          n = Math.ceil(a / 4 / aU);
          break;
        }
      Z.clearRect(0, 0, aU, aU),
        Z.strokeText('A', 0, aU),
        (V = Z.getImageData(0, 0, aU, aU).data),
        (c = 0);
      for (let a = 0, i = V.length; a < i; a += 4)
        if (V[a] > 0) {
          c = aU - Math.floor(a / 4 / aU);
          break;
        }
      (Z.canvas.width = Z.canvas.height = 0), (Z.font = t);
      const W = c ? c / (c + n) : YJ;
      return s(this, UF).set(U, W), W;
    }),
    R(pl, w0),
    R(pl, ya),
    R(pl, La),
    R(pl, UF, new Map()),
    R(pl, dF, new Map()),
    R(pl, wZ, null),
    R(pl, r0, new Set()),
    pl);
  function uJ() {
    ub('`renderTextLayer`, please use `TextLayer` instead.');
    const {
        textContentSource: Q,
        container: U,
        viewport: l,
        ...d
      } = arguments[0],
      Z = Object.keys(d);
    Z.length > 0 && _('Ignoring `renderTextLayer` parameters: ' + Z.join(', '));
    const t = new XW({ textContentSource: Q, container: U, viewport: l }),
      { textDivs: F, textContentItemsStr: c } = t;
    return { promise: t.render(), textDivs: F, textContentItemsStr: c };
  }
  function pJ() {
    ub('`updateTextLayer`, please use `TextLayer` instead.');
  }
  class ms {
    static textContent(U) {
      const l = [],
        d = { items: l, styles: Object.create(null) };
      function Z(t) {
        var n;
        if (!t) return;
        let F = null;
        const c = t.name;
        if (c === '#text') F = t.value;
        else if (ms.shouldBuildText(c))
          (n = t == null ? void 0 : t.attributes) != null && n.textContent
            ? (F = t.attributes.textContent)
            : t.value && (F = t.value);
        else return;
        if ((F !== null && l.push({ str: F }), !!t.children))
          for (const V of t.children) Z(V);
      }
      return Z(U), d;
    }
    static shouldBuildText(U) {
      return !(
        U === 'textarea' ||
        U === 'input' ||
        U === 'option' ||
        U === 'select'
      );
    }
  }
  const oJ = 65536,
    BJ = 100,
    yJ = 5e3,
    LJ = fl ? OM : BM,
    zJ = fl ? gM : Sb,
    kJ = fl ? jM : oM,
    DJ = fl ? KM : Xb;
  function IJ(Q = {}) {
    typeof Q == 'string' || Q instanceof URL
      ? (Q = { url: Q })
      : (Q instanceof ArrayBuffer || ArrayBuffer.isView(Q)) &&
        (Q = { data: Q });
    const U = new MN(),
      { docId: l } = U,
      d = Q.url ? EJ(Q.url) : null,
      Z = Q.data ? CJ(Q.data) : null,
      t = Q.httpHeaders || null,
      F = Q.withCredentials === !0,
      c = Q.password ?? null,
      n = Q.range instanceof $b ? Q.range : null,
      V =
        Number.isInteger(Q.rangeChunkSize) && Q.rangeChunkSize > 0
          ? Q.rangeChunkSize
          : oJ;
    let W = Q.worker instanceof YW ? Q.worker : null;
    const a = Q.verbosity,
      i =
        typeof Q.docBaseUrl == 'string' && !tN(Q.docBaseUrl)
          ? Q.docBaseUrl
          : null,
      h = typeof Q.cMapUrl == 'string' ? Q.cMapUrl : null,
      N = Q.cMapPacked !== !1,
      M = Q.CMapReaderFactory || zJ,
      J =
        typeof Q.standardFontDataUrl == 'string' ? Q.standardFontDataUrl : null,
      m = Q.StandardFontDataFactory || DJ,
      G = Q.stopAtErrors !== !0,
      T =
        Number.isInteger(Q.maxImageSize) && Q.maxImageSize > -1
          ? Q.maxImageSize
          : -1,
      u = Q.isEvalSupported !== !1,
      X =
        typeof Q.isOffscreenCanvasSupported == 'boolean'
          ? Q.isOffscreenCanvasSupported
          : !fl,
      S = Number.isInteger(Q.canvasMaxAreaInBytes)
        ? Q.canvasMaxAreaInBytes
        : -1,
      p = typeof Q.disableFontFace == 'boolean' ? Q.disableFontFace : fl,
      L = Q.fontExtraProperties === !0,
      Y = Q.enableXfa === !0,
      o = Q.ownerDocument || globalThis.document,
      y = Q.disableRange === !0,
      D = Q.disableStream === !0,
      I = Q.disableAutoFetch === !0,
      O = Q.pdfBug === !0,
      x = Q.enableHWA === !0,
      B = n ? n.length : (Q.length ?? NaN),
      C = typeof Q.useSystemFonts == 'boolean' ? Q.useSystemFonts : !fl && !p,
      r =
        typeof Q.useWorkerFetch == 'boolean'
          ? Q.useWorkerFetch
          : M === Sb &&
            m === Xb &&
            h &&
            J &&
            as(h, document.baseURI) &&
            as(J, document.baseURI),
      Wl = Q.canvasFactory || new LJ({ ownerDocument: o, enableHWA: x }),
      Jl = Q.filterFactory || new kJ({ docId: l, ownerDocument: o }),
      NU = null;
    eM(a);
    const al = { canvasFactory: Wl, filterFactory: Jl };
    if (
      (r ||
        ((al.cMapReaderFactory = new M({ baseUrl: h, isCompressed: N })),
        (al.standardFontDataFactory = new m({ baseUrl: J }))),
      !W)
    ) {
      const CU = { verbosity: a, port: St.workerPort };
      (W = CU.port ? YW.fromPort(CU) : new YW(CU)), (U._worker = W);
    }
    const Rl = {
        docId: l,
        apiVersion: '4.4.168',
        data: Z,
        password: c,
        disableAutoFetch: I,
        rangeChunkSize: V,
        length: B,
        docBaseUrl: i,
        enableXfa: Y,
        evaluatorOptions: {
          maxImageSize: T,
          disableFontFace: p,
          ignoreErrors: G,
          isEvalSupported: u,
          isOffscreenCanvasSupported: X,
          canvasMaxAreaInBytes: S,
          fontExtraProperties: L,
          useSystemFonts: C,
          cMapUrl: r ? h : null,
          standardFontDataUrl: r ? J : null,
        },
      },
      ht = {
        disableFontFace: p,
        fontExtraProperties: L,
        ownerDocument: o,
        pdfBug: O,
        styleElement: NU,
        loadingParams: { disableAutoFetch: I, enableXfa: Y },
      };
    return (
      W.promise
        .then(function () {
          if (U.destroyed) throw new Error('Loading aborted');
          if (W.destroyed) throw new Error('Worker was destroyed');
          const CU = W.messageHandler.sendWithPromise(
            'GetDocRequest',
            Rl,
            Z ? [Z.buffer] : null,
          );
          let w;
          if (n) w = new QJ(n, { disableRange: y, disableStream: D });
          else if (!Z) {
            if (!d)
              throw new Error('getDocument - no `url` parameter provided.');
            w = ((E) =>
              fl
                ? (function () {
                    return (
                      typeof fetch < 'u' &&
                      typeof Response < 'u' &&
                      'body' in Response.prototype
                    );
                  })() && as(E.url)
                  ? new Pb(E)
                  : new MJ(E)
                : as(E.url)
                  ? new Pb(E)
                  : new hJ(E))({
              url: d,
              length: B,
              httpHeaders: t,
              withCredentials: F,
              rangeChunkSize: V,
              disableRange: y,
              disableStream: D,
            });
          }
          return CU.then((z) => {
            if (U.destroyed) throw new Error('Loading aborted');
            if (W.destroyed) throw new Error('Worker was destroyed');
            const E = new es(l, z, W.port),
              A = new jJ(E, U, w, ht, al);
            (U._transport = A), E.send('Ready', null);
          });
        })
        .catch(U._capability.reject),
      U
    );
  }
  function EJ(Q) {
    if (Q instanceof URL) return Q.href;
    try {
      return new URL(Q, window.location).href;
    } catch {
      if (fl && typeof Q == 'string') return Q;
    }
    throw new Error(
      'Invalid PDF url data: either string or URL-object is expected in the url property.',
    );
  }
  function CJ(Q) {
    if (fl && typeof Buffer < 'u' && Q instanceof Buffer)
      throw new Error(
        'Please provide binary data as `Uint8Array`, rather than `Buffer`.',
      );
    if (Q instanceof Uint8Array && Q.byteLength === Q.buffer.byteLength)
      return Q;
    if (typeof Q == 'string') return aW(Q);
    if (
      Q instanceof ArrayBuffer ||
      ArrayBuffer.isView(Q) ||
      (typeof Q == 'object' && !isNaN(Q == null ? void 0 : Q.length))
    )
      return new Uint8Array(Q);
    throw new Error(
      'Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.',
    );
  }
  function qb(Q) {
    return (
      typeof Q == 'object' &&
      Number.isInteger(Q == null ? void 0 : Q.num) &&
      Q.num >= 0 &&
      Number.isInteger(Q == null ? void 0 : Q.gen) &&
      Q.gen >= 0
    );
  }
  const ka = class ka {
    constructor() {
      (this._capability = Promise.withResolvers()),
        (this._transport = null),
        (this._worker = null),
        (this.docId = `d${hU(ka, za)._++}`),
        (this.destroyed = !1),
        (this.onPassword = null),
        (this.onProgress = null);
    }
    get promise() {
      return this._capability.promise;
    }
    async destroy() {
      var U, l, d;
      this.destroyed = !0;
      try {
        (U = this._worker) != null &&
          U.port &&
          (this._worker._pendingDestroy = !0),
          await ((l = this._transport) == null ? void 0 : l.destroy());
      } catch (Z) {
        throw (
          ((d = this._worker) != null &&
            d.port &&
            delete this._worker._pendingDestroy,
          Z)
        );
      }
      (this._transport = null),
        this._worker && (this._worker.destroy(), (this._worker = null));
    }
  };
  (za = new WeakMap()), R(ka, za, 0);
  let MN = ka,
    $b = class {
      constructor(U, l, d = !1, Z = null) {
        (this.length = U),
          (this.initialData = l),
          (this.progressiveDone = d),
          (this.contentDispositionFilename = Z),
          (this._rangeListeners = []),
          (this._progressListeners = []),
          (this._progressiveReadListeners = []),
          (this._progressiveDoneListeners = []),
          (this._readyCapability = Promise.withResolvers());
      }
      addRangeListener(U) {
        this._rangeListeners.push(U);
      }
      addProgressListener(U) {
        this._progressListeners.push(U);
      }
      addProgressiveReadListener(U) {
        this._progressiveReadListeners.push(U);
      }
      addProgressiveDoneListener(U) {
        this._progressiveDoneListeners.push(U);
      }
      onDataRange(U, l) {
        for (const d of this._rangeListeners) d(U, l);
      }
      onDataProgress(U, l) {
        this._readyCapability.promise.then(() => {
          for (const d of this._progressListeners) d(U, l);
        });
      }
      onDataProgressiveRead(U) {
        this._readyCapability.promise.then(() => {
          for (const l of this._progressiveReadListeners) l(U);
        });
      }
      onDataProgressiveDone() {
        this._readyCapability.promise.then(() => {
          for (const U of this._progressiveDoneListeners) U();
        });
      }
      transportReady() {
        this._readyCapability.resolve();
      }
      requestDataRange(U, l) {
        sl('Abstract method PDFDataRangeTransport.requestDataRange');
      }
      abort() {}
    };
  class rJ {
    constructor(U, l) {
      (this._pdfInfo = U), (this._transport = l);
    }
    get annotationStorage() {
      return this._transport.annotationStorage;
    }
    get filterFactory() {
      return this._transport.filterFactory;
    }
    get numPages() {
      return this._pdfInfo.numPages;
    }
    get fingerprints() {
      return this._pdfInfo.fingerprints;
    }
    get isPureXfa() {
      return Zl(this, 'isPureXfa', !!this._transport._htmlForXfa);
    }
    get allXfaHtml() {
      return this._transport._htmlForXfa;
    }
    getPage(U) {
      return this._transport.getPage(U);
    }
    getPageIndex(U) {
      return this._transport.getPageIndex(U);
    }
    getDestinations() {
      return this._transport.getDestinations();
    }
    getDestination(U) {
      return this._transport.getDestination(U);
    }
    getPageLabels() {
      return this._transport.getPageLabels();
    }
    getPageLayout() {
      return this._transport.getPageLayout();
    }
    getPageMode() {
      return this._transport.getPageMode();
    }
    getViewerPreferences() {
      return this._transport.getViewerPreferences();
    }
    getOpenAction() {
      return this._transport.getOpenAction();
    }
    getAttachments() {
      return this._transport.getAttachments();
    }
    getJSActions() {
      return this._transport.getDocJSActions();
    }
    getOutline() {
      return this._transport.getOutline();
    }
    getOptionalContentConfig({ intent: U = 'display' } = {}) {
      const { renderingIntent: l } = this._transport.getRenderingIntent(U);
      return this._transport.getOptionalContentConfig(l);
    }
    getPermissions() {
      return this._transport.getPermissions();
    }
    getMetadata() {
      return this._transport.getMetadata();
    }
    getMarkInfo() {
      return this._transport.getMarkInfo();
    }
    getData() {
      return this._transport.getData();
    }
    saveDocument() {
      return this._transport.saveDocument();
    }
    getDownloadInfo() {
      return this._transport.downloadInfoCapability.promise;
    }
    cleanup(U = !1) {
      return this._transport.startCleanup(U || this.isPureXfa);
    }
    destroy() {
      return this.loadingTask.destroy();
    }
    cachedPageNumber(U) {
      return this._transport.cachedPageNumber(U);
    }
    get loadingParams() {
      return this._transport.loadingParams;
    }
    get loadingTask() {
      return this._transport.loadingTask;
    }
    getFieldObjects() {
      return this._transport.getFieldObjects();
    }
    hasJSActions() {
      return this._transport.hasJSActions();
    }
    getCalculationOrderIds() {
      return this._transport.getCalculationOrderIds();
    }
  }
  class wJ {
    constructor(U, l, d, Z = !1) {
      R(this, jZ);
      R(this, x0);
      R(this, xZ, null);
      R(this, Pd, !1);
      (this._pageIndex = U),
        (this._pageInfo = l),
        (this._transport = d),
        (this._stats = Z ? new Yb() : null),
        (this._pdfBug = Z),
        (this.commonObjs = d.commonObjs),
        (this.objs = new le()),
        (this._maybeCleanupAfterRender = !1),
        (this._intentStates = new Map()),
        (this.destroyed = !1);
    }
    get pageNumber() {
      return this._pageIndex + 1;
    }
    get rotate() {
      return this._pageInfo.rotate;
    }
    get ref() {
      return this._pageInfo.ref;
    }
    get userUnit() {
      return this._pageInfo.userUnit;
    }
    get view() {
      return this._pageInfo.view;
    }
    getViewport({
      scale: U,
      rotation: l = this.rotate,
      offsetX: d = 0,
      offsetY: Z = 0,
      dontFlip: t = !1,
    } = {}) {
      return new Ws({
        viewBox: this.view,
        scale: U,
        rotation: l,
        offsetX: d,
        offsetY: Z,
        dontFlip: t,
      });
    }
    getAnnotations({ intent: U = 'display' } = {}) {
      const { renderingIntent: l } = this._transport.getRenderingIntent(U);
      return this._transport.getAnnotations(this._pageIndex, l);
    }
    getJSActions() {
      return this._transport.getPageJSActions(this._pageIndex);
    }
    get filterFactory() {
      return this._transport.filterFactory;
    }
    get isPureXfa() {
      return Zl(this, 'isPureXfa', !!this._transport._htmlForXfa);
    }
    async getXfa() {
      var U;
      return (
        ((U = this._transport._htmlForXfa) == null
          ? void 0
          : U.children[this._pageIndex]) || null
      );
    }
    render({
      canvasContext: U,
      viewport: l,
      intent: d = 'display',
      annotationMode: Z = JZ.ENABLE,
      transform: t = null,
      background: F = null,
      optionalContentConfigPromise: c = null,
      annotationCanvasMap: n = null,
      pageColors: V = null,
      printAnnotationStorage: W = null,
    }) {
      var T, u;
      (T = this._stats) == null || T.time('Overall');
      const a = this._transport.getRenderingIntent(d, Z, W),
        { renderingIntent: i, cacheKey: h } = a;
      e(this, Pd, !1),
        b(this, x0, MR).call(this),
        c || (c = this._transport.getOptionalContentConfig(i));
      let N = this._intentStates.get(h);
      N || ((N = Object.create(null)), this._intentStates.set(h, N)),
        N.streamReaderCancelTimeout &&
          (clearTimeout(N.streamReaderCancelTimeout),
          (N.streamReaderCancelTimeout = null));
      const M = !!(i & pU.PRINT);
      N.displayReadyCapability ||
        ((N.displayReadyCapability = Promise.withResolvers()),
        (N.operatorList = {
          fnArray: [],
          argsArray: [],
          lastChunk: !1,
          separateAnnots: null,
        }),
        (u = this._stats) == null || u.time('Page Request'),
        this._pumpOperatorList(a));
      const J = (X) => {
          var S;
          N.renderTasks.delete(m),
            (this._maybeCleanupAfterRender || M) && e(this, Pd, !0),
            b(this, jZ, Fs).call(this, !M),
            X
              ? (m.capability.reject(X),
                this._abortOperatorList({
                  intentState: N,
                  reason: X instanceof Error ? X : new Error(X),
                }))
              : m.capability.resolve(),
            this._stats &&
              (this._stats.timeEnd('Rendering'),
              this._stats.timeEnd('Overall'),
              (S = globalThis.Stats) != null &&
                S.enabled &&
                globalThis.Stats.add(this.pageNumber, this._stats));
        },
        m = new JN({
          callback: J,
          params: {
            canvasContext: U,
            viewport: l,
            transform: t,
            background: F,
          },
          objs: this.objs,
          commonObjs: this.commonObjs,
          annotationCanvasMap: n,
          operatorList: N.operatorList,
          pageIndex: this._pageIndex,
          canvasFactory: this._transport.canvasFactory,
          filterFactory: this._transport.filterFactory,
          useRequestAnimationFrame: !M,
          pdfBug: this._pdfBug,
          pageColors: V,
        });
      (N.renderTasks || (N.renderTasks = new Set())).add(m);
      const G = m.task;
      return (
        Promise.all([N.displayReadyCapability.promise, c])
          .then(([X, S]) => {
            var p;
            if (this.destroyed) {
              J();
              return;
            }
            if (
              ((p = this._stats) == null || p.time('Rendering'),
              !(S.renderingIntent & i))
            )
              throw new Error(
                'Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.',
              );
            m.initializeGraphics({ transparency: X, optionalContentConfig: S }),
              m.operatorListChanged();
          })
          .catch(J),
        G
      );
    }
    getOperatorList({
      intent: U = 'display',
      annotationMode: l = JZ.ENABLE,
      printAnnotationStorage: d = null,
    } = {}) {
      var n;
      function Z() {
        F.operatorList.lastChunk &&
          (F.opListReadCapability.resolve(F.operatorList),
          F.renderTasks.delete(c));
      }
      const t = this._transport.getRenderingIntent(U, l, d, !0);
      let F = this._intentStates.get(t.cacheKey);
      F || ((F = Object.create(null)), this._intentStates.set(t.cacheKey, F));
      let c;
      return (
        F.opListReadCapability ||
          ((c = Object.create(null)),
          (c.operatorListChanged = Z),
          (F.opListReadCapability = Promise.withResolvers()),
          (F.renderTasks || (F.renderTasks = new Set())).add(c),
          (F.operatorList = {
            fnArray: [],
            argsArray: [],
            lastChunk: !1,
            separateAnnots: null,
          }),
          (n = this._stats) == null || n.time('Page Request'),
          this._pumpOperatorList(t)),
        F.opListReadCapability.promise
      );
    }
    streamTextContent({
      includeMarkedContent: U = !1,
      disableNormalization: l = !1,
    } = {}) {
      return this._transport.messageHandler.sendWithStream(
        'GetTextContent',
        {
          pageIndex: this._pageIndex,
          includeMarkedContent: U === !0,
          disableNormalization: l === !0,
        },
        {
          highWaterMark: 100,
          size(Z) {
            return Z.items.length;
          },
        },
      );
    }
    getTextContent(U = {}) {
      if (this._transport._htmlForXfa)
        return this.getXfa().then((d) => ms.textContent(d));
      const l = this.streamTextContent(U);
      return new Promise(function (d, Z) {
        function t() {
          F.read().then(function ({ value: n, done: V }) {
            if (V) {
              d(c);
              return;
            }
            c.lang ?? (c.lang = n.lang),
              Object.assign(c.styles, n.styles),
              c.items.push(...n.items),
              t();
          }, Z);
        }
        const F = l.getReader(),
          c = { items: [], styles: Object.create(null), lang: null };
        t();
      });
    }
    getStructTree() {
      return this._transport.getStructTree(this._pageIndex);
    }
    _destroy() {
      this.destroyed = !0;
      const U = [];
      for (const l of this._intentStates.values())
        if (
          (this._abortOperatorList({
            intentState: l,
            reason: new Error('Page was destroyed.'),
            force: !0,
          }),
          !l.opListReadCapability)
        )
          for (const d of l.renderTasks) U.push(d.completed), d.cancel();
      return (
        this.objs.clear(),
        e(this, Pd, !1),
        b(this, x0, MR).call(this),
        Promise.all(U)
      );
    }
    cleanup(U = !1) {
      e(this, Pd, !0);
      const l = b(this, jZ, Fs).call(this, !1);
      return U && l && this._stats && (this._stats = new Yb()), l;
    }
    _startRenderPage(U, l) {
      var Z, t;
      const d = this._intentStates.get(l);
      d &&
        ((Z = this._stats) == null || Z.timeEnd('Page Request'),
        (t = d.displayReadyCapability) == null || t.resolve(U));
    }
    _renderPageChunk(U, l) {
      for (let d = 0, Z = U.length; d < Z; d++)
        l.operatorList.fnArray.push(U.fnArray[d]),
          l.operatorList.argsArray.push(U.argsArray[d]);
      (l.operatorList.lastChunk = U.lastChunk),
        (l.operatorList.separateAnnots = U.separateAnnots);
      for (const d of l.renderTasks) d.operatorListChanged();
      U.lastChunk && b(this, jZ, Fs).call(this, !0);
    }
    _pumpOperatorList({
      renderingIntent: U,
      cacheKey: l,
      annotationStorageSerializable: d,
    }) {
      const { map: Z, transfer: t } = d,
        c = this._transport.messageHandler
          .sendWithStream(
            'GetOperatorList',
            {
              pageIndex: this._pageIndex,
              intent: U,
              cacheKey: l,
              annotationStorage: Z,
            },
            t,
          )
          .getReader(),
        n = this._intentStates.get(l);
      n.streamReader = c;
      const V = () => {
        c.read().then(
          ({ value: W, done: a }) => {
            if (a) {
              n.streamReader = null;
              return;
            }
            this._transport.destroyed || (this._renderPageChunk(W, n), V());
          },
          (W) => {
            if (((n.streamReader = null), !this._transport.destroyed)) {
              if (n.operatorList) {
                n.operatorList.lastChunk = !0;
                for (const a of n.renderTasks) a.operatorListChanged();
                b(this, jZ, Fs).call(this, !0);
              }
              if (n.displayReadyCapability) n.displayReadyCapability.reject(W);
              else if (n.opListReadCapability) n.opListReadCapability.reject(W);
              else throw W;
            }
          },
        );
      };
      V();
    }
    _abortOperatorList({ intentState: U, reason: l, force: d = !1 }) {
      if (U.streamReader) {
        if (
          (U.streamReaderCancelTimeout &&
            (clearTimeout(U.streamReaderCancelTimeout),
            (U.streamReaderCancelTimeout = null)),
          !d)
        ) {
          if (U.renderTasks.size > 0) return;
          if (l instanceof ZN) {
            let Z = BJ;
            l.extraDelay > 0 && l.extraDelay < 1e3 && (Z += l.extraDelay),
              (U.streamReaderCancelTimeout = setTimeout(() => {
                (U.streamReaderCancelTimeout = null),
                  this._abortOperatorList({
                    intentState: U,
                    reason: l,
                    force: !0,
                  });
              }, Z));
            return;
          }
        }
        if (
          (U.streamReader.cancel(new Gt(l.message)).catch(() => {}),
          (U.streamReader = null),
          !this._transport.destroyed)
        ) {
          for (const [Z, t] of this._intentStates)
            if (t === U) {
              this._intentStates.delete(Z);
              break;
            }
          this.cleanup();
        }
      }
    }
    get stats() {
      return this._stats;
    }
  }
  (xZ = new WeakMap()),
    (Pd = new WeakMap()),
    (jZ = new WeakSet()),
    (Fs = function (U = !1) {
      if ((b(this, x0, MR).call(this), !s(this, Pd) || this.destroyed))
        return !1;
      if (U)
        return (
          e(
            this,
            xZ,
            setTimeout(() => {
              e(this, xZ, null), b(this, jZ, Fs).call(this, !1);
            }, yJ),
          ),
          !1
        );
      for (const {
        renderTasks: l,
        operatorList: d,
      } of this._intentStates.values())
        if (l.size > 0 || !d.lastChunk) return !1;
      return this._intentStates.clear(), this.objs.clear(), e(this, Pd, !1), !0;
    }),
    (x0 = new WeakSet()),
    (MR = function () {
      s(this, xZ) && (clearTimeout(s(this, xZ)), e(this, xZ, null));
    });
  class xJ {
    constructor() {
      R(this, ZF, new Set());
      R(this, Da, Promise.resolve());
    }
    postMessage(U, l) {
      const d = { data: structuredClone(U, l ? { transfer: l } : null) };
      s(this, Da).then(() => {
        for (const Z of s(this, ZF)) Z.call(this, d);
      });
    }
    addEventListener(U, l) {
      s(this, ZF).add(l);
    }
    removeEventListener(U, l) {
      s(this, ZF).delete(l);
    }
    terminate() {
      s(this, ZF).clear();
    }
  }
  (ZF = new WeakMap()), (Da = new WeakMap());
  const Ld = { isWorkerDisabled: !1, fakeWorkerId: 0 };
  fl &&
    ((Ld.isWorkerDisabled = !0),
    St.workerSrc || (St.workerSrc = './pdf.worker.mjs')),
    (Ld.isSameOrigin = function (Q, U) {
      let l;
      try {
        if (((l = new URL(Q)), !l.origin || l.origin === 'null')) return !1;
      } catch {
        return !1;
      }
      const d = new URL(U, l);
      return l.origin === d.origin;
    }),
    (Ld.createCDNWrapper = function (Q) {
      const U = `await import("${Q}");`;
      return URL.createObjectURL(new Blob([U], { type: 'text/javascript' }));
    });
  let YW =
    ((ZU = class {
      constructor({
        name: U = null,
        port: l = null,
        verbosity: d = mM(),
      } = {}) {
        R(this, j0);
        var Z;
        if (
          ((this.name = U),
          (this.destroyed = !1),
          (this.verbosity = d),
          (this._readyCapability = Promise.withResolvers()),
          (this._port = null),
          (this._webWorker = null),
          (this._messageHandler = null),
          l)
        ) {
          if ((Z = s(ZU, tF)) != null && Z.has(l))
            throw new Error('Cannot use more than one PDFWorker per port.');
          (s(ZU, tF) || e(ZU, tF, new WeakMap())).set(l, this),
            this._initializeFromPort(l);
          return;
        }
        this._initialize();
      }
      get promise() {
        return fl
          ? Promise.all([td.promise, this._readyCapability.promise])
          : this._readyCapability.promise;
      }
      get port() {
        return this._port;
      }
      get messageHandler() {
        return this._messageHandler;
      }
      _initializeFromPort(U) {
        (this._port = U),
          (this._messageHandler = new es('main', 'worker', U)),
          this._messageHandler.on('ready', function () {}),
          b(this, j0, JR).call(this);
      }
      _initialize() {
        if (Ld.isWorkerDisabled || s(ZU, O0, GR)) {
          this._setupFakeWorker();
          return;
        }
        let { workerSrc: U } = ZU;
        try {
          Ld.isSameOrigin(window.location.href, U) ||
            (U = Ld.createCDNWrapper(new URL(U, window.location).href));
          const l = new Worker(U, { type: 'module' }),
            d = new es('main', 'worker', l),
            Z = () => {
              t.abort(),
                d.destroy(),
                l.terminate(),
                this.destroyed
                  ? this._readyCapability.reject(
                      new Error('Worker was destroyed'),
                    )
                  : this._setupFakeWorker();
            },
            t = new AbortController();
          l.addEventListener(
            'error',
            () => {
              this._webWorker || Z();
            },
            { signal: t.signal },
          ),
            d.on('test', (c) => {
              if ((t.abort(), this.destroyed || !c)) {
                Z();
                return;
              }
              (this._messageHandler = d),
                (this._port = l),
                (this._webWorker = l),
                b(this, j0, JR).call(this);
            }),
            d.on('ready', (c) => {
              if ((t.abort(), this.destroyed)) {
                Z();
                return;
              }
              try {
                F();
              } catch {
                this._setupFakeWorker();
              }
            });
          const F = () => {
            const c = new Uint8Array();
            d.send('test', c, [c.buffer]);
          };
          F();
          return;
        } catch {
          VW('The worker has been disabled.');
        }
        this._setupFakeWorker();
      }
      _setupFakeWorker() {
        Ld.isWorkerDisabled ||
          (_('Setting up fake worker.'), (Ld.isWorkerDisabled = !0)),
          ZU._setupFakeWorkerGlobal
            .then((U) => {
              if (this.destroyed) {
                this._readyCapability.reject(new Error('Worker was destroyed'));
                return;
              }
              const l = new xJ();
              this._port = l;
              const d = `fake${Ld.fakeWorkerId++}`,
                Z = new es(d + '_worker', d, l);
              U.setup(Z, l),
                (this._messageHandler = new es(d, d + '_worker', l)),
                b(this, j0, JR).call(this);
            })
            .catch((U) => {
              this._readyCapability.reject(
                new Error(`Setting up fake worker failed: "${U.message}".`),
              );
            });
      }
      destroy() {
        var U;
        (this.destroyed = !0),
          this._webWorker &&
            (this._webWorker.terminate(), (this._webWorker = null)),
          (U = s(ZU, tF)) == null || U.delete(this._port),
          (this._port = null),
          this._messageHandler &&
            (this._messageHandler.destroy(), (this._messageHandler = null));
      }
      static fromPort(U) {
        var d;
        if (!(U != null && U.port))
          throw new Error('PDFWorker.fromPort - invalid method signature.');
        const l = (d = s(this, tF)) == null ? void 0 : d.get(U.port);
        if (l) {
          if (l._pendingDestroy)
            throw new Error(
              'PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.',
            );
          return l;
        }
        return new ZU(U);
      }
      static get workerSrc() {
        if (St.workerSrc) return St.workerSrc;
        throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
      }
      static get _setupFakeWorkerGlobal() {
        return Zl(
          this,
          '_setupFakeWorkerGlobal',
          (async () =>
            s(this, O0, GR)
              ? s(this, O0, GR)
              : (await import(this.workerSrc)).WorkerMessageHandler)(),
        );
      }
    }),
    (tF = new WeakMap()),
    (j0 = new WeakSet()),
    (JR = function () {
      this._readyCapability.resolve(),
        this._messageHandler.send('configure', { verbosity: this.verbosity });
    }),
    (O0 = new WeakSet()),
    (GR = function () {
      var U;
      try {
        return (
          ((U = globalThis.pdfjsWorker) == null
            ? void 0
            : U.WorkerMessageHandler) || null
        );
      } catch {
        return null;
      }
    }),
    R(ZU, O0),
    R(ZU, tF, void 0),
    ZU);
  class jJ {
    constructor(U, l, d, Z, t) {
      R(this, FF);
      R(this, fd, new Map());
      R(this, id, new Map());
      R(this, g0, new Map());
      R(this, K0, new Map());
      R(this, Rd, null);
      (this.messageHandler = U),
        (this.loadingTask = l),
        (this.commonObjs = new le()),
        (this.fontLoader = new wM({
          ownerDocument: Z.ownerDocument,
          styleElement: Z.styleElement,
        })),
        (this.loadingParams = Z.loadingParams),
        (this._params = Z),
        (this.canvasFactory = t.canvasFactory),
        (this.filterFactory = t.filterFactory),
        (this.cMapReaderFactory = t.cMapReaderFactory),
        (this.standardFontDataFactory = t.standardFontDataFactory),
        (this.destroyed = !1),
        (this.destroyCapability = null),
        (this._networkStream = d),
        (this._fullReader = null),
        (this._lastProgress = null),
        (this.downloadInfoCapability = Promise.withResolvers()),
        this.setupMessageHandler();
    }
    get annotationStorage() {
      return Zl(this, 'annotationStorage', new WN());
    }
    getRenderingIntent(U, l = JZ.ENABLE, d = null, Z = !1) {
      let t = pU.DISPLAY,
        F = VN;
      switch (U) {
        case 'any':
          t = pU.ANY;
          break;
        case 'display':
          break;
        case 'print':
          t = pU.PRINT;
          break;
        default:
          _(`getRenderingIntent - invalid intent: ${U}`);
      }
      switch (l) {
        case JZ.DISABLE:
          t += pU.ANNOTATIONS_DISABLE;
          break;
        case JZ.ENABLE:
          break;
        case JZ.ENABLE_FORMS:
          t += pU.ANNOTATIONS_FORMS;
          break;
        case JZ.ENABLE_STORAGE:
          (t += pU.ANNOTATIONS_STORAGE),
            (F = (t & pU.PRINT && d instanceof Lb ? d : this.annotationStorage)
              .serializable);
          break;
        default:
          _(`getRenderingIntent - invalid annotationMode: ${l}`);
      }
      return (
        Z && (t += pU.OPLIST),
        {
          renderingIntent: t,
          cacheKey: `${t}_${F.hash}`,
          annotationStorageSerializable: F,
        }
      );
    }
    destroy() {
      var d;
      if (this.destroyCapability) return this.destroyCapability.promise;
      (this.destroyed = !0),
        (this.destroyCapability = Promise.withResolvers()),
        (d = s(this, Rd)) == null ||
          d.reject(
            new Error('Worker was destroyed during onPassword callback'),
          );
      const U = [];
      for (const Z of s(this, id).values()) U.push(Z._destroy());
      s(this, id).clear(),
        s(this, g0).clear(),
        s(this, K0).clear(),
        this.hasOwnProperty('annotationStorage') &&
          this.annotationStorage.resetModified();
      const l = this.messageHandler.sendWithPromise('Terminate', null);
      return (
        U.push(l),
        Promise.all(U).then(() => {
          var Z;
          this.commonObjs.clear(),
            this.fontLoader.clear(),
            s(this, fd).clear(),
            this.filterFactory.destroy(),
            XW.cleanup(),
            (Z = this._networkStream) == null ||
              Z.cancelAllRequests(new Gt('Worker was terminated.')),
            this.messageHandler &&
              (this.messageHandler.destroy(), (this.messageHandler = null)),
            this.destroyCapability.resolve();
        }, this.destroyCapability.reject),
        this.destroyCapability.promise
      );
    }
    setupMessageHandler() {
      const { messageHandler: U, loadingTask: l } = this;
      U.on('GetReader', (d, Z) => {
        Bl(
          this._networkStream,
          'GetReader - no `IPDFStream` instance available.',
        ),
          (this._fullReader = this._networkStream.getFullReader()),
          (this._fullReader.onProgress = (t) => {
            this._lastProgress = { loaded: t.loaded, total: t.total };
          }),
          (Z.onPull = () => {
            this._fullReader
              .read()
              .then(function ({ value: t, done: F }) {
                if (F) {
                  Z.close();
                  return;
                }
                Bl(
                  t instanceof ArrayBuffer,
                  'GetReader - expected an ArrayBuffer.',
                ),
                  Z.enqueue(new Uint8Array(t), 1, [t]);
              })
              .catch((t) => {
                Z.error(t);
              });
          }),
          (Z.onCancel = (t) => {
            this._fullReader.cancel(t),
              Z.ready.catch((F) => {
                if (!this.destroyed) throw F;
              });
          });
      }),
        U.on('ReaderHeadersReady', (d) => {
          const Z = Promise.withResolvers(),
            t = this._fullReader;
          return (
            t.headersReady.then(() => {
              var F;
              (!t.isStreamingSupported || !t.isRangeSupported) &&
                (this._lastProgress &&
                  ((F = l.onProgress) == null || F.call(l, this._lastProgress)),
                (t.onProgress = (c) => {
                  var n;
                  (n = l.onProgress) == null ||
                    n.call(l, { loaded: c.loaded, total: c.total });
                })),
                Z.resolve({
                  isStreamingSupported: t.isStreamingSupported,
                  isRangeSupported: t.isRangeSupported,
                  contentLength: t.contentLength,
                });
            }, Z.reject),
            Z.promise
          );
        }),
        U.on('GetRangeReader', (d, Z) => {
          Bl(
            this._networkStream,
            'GetRangeReader - no `IPDFStream` instance available.',
          );
          const t = this._networkStream.getRangeReader(d.begin, d.end);
          if (!t) {
            Z.close();
            return;
          }
          (Z.onPull = () => {
            t.read()
              .then(function ({ value: F, done: c }) {
                if (c) {
                  Z.close();
                  return;
                }
                Bl(
                  F instanceof ArrayBuffer,
                  'GetRangeReader - expected an ArrayBuffer.',
                ),
                  Z.enqueue(new Uint8Array(F), 1, [F]);
              })
              .catch((F) => {
                Z.error(F);
              });
          }),
            (Z.onCancel = (F) => {
              t.cancel(F),
                Z.ready.catch((c) => {
                  if (!this.destroyed) throw c;
                });
            });
        }),
        U.on('GetDoc', ({ pdfInfo: d }) => {
          (this._numPages = d.numPages),
            (this._htmlForXfa = d.htmlForXfa),
            delete d.htmlForXfa,
            l._capability.resolve(new rJ(d, this));
        }),
        U.on('DocException', function (d) {
          let Z;
          switch (d.name) {
            case 'PasswordException':
              Z = new AR(d.message, d.code);
              break;
            case 'InvalidPDFException':
              Z = new Mb(d.message);
              break;
            case 'MissingPDFException':
              Z = new Jt(d.message);
              break;
            case 'UnexpectedResponseException':
              Z = new WW(d.message, d.status);
              break;
            case 'UnknownErrorException':
              Z = new _R(d.message, d.details);
              break;
            default:
              sl('DocException - expected a valid Error.');
          }
          l._capability.reject(Z);
        }),
        U.on('PasswordRequest', (d) => {
          if ((e(this, Rd, Promise.withResolvers()), l.onPassword)) {
            const Z = (t) => {
              t instanceof Error
                ? s(this, Rd).reject(t)
                : s(this, Rd).resolve({ password: t });
            };
            try {
              l.onPassword(Z, d.code);
            } catch (t) {
              s(this, Rd).reject(t);
            }
          } else s(this, Rd).reject(new AR(d.message, d.code));
          return s(this, Rd).promise;
        }),
        U.on('DataLoaded', (d) => {
          var Z;
          (Z = l.onProgress) == null ||
            Z.call(l, { loaded: d.length, total: d.length }),
            this.downloadInfoCapability.resolve(d);
        }),
        U.on('StartRenderPage', (d) => {
          if (this.destroyed) return;
          s(this, id)
            .get(d.pageIndex)
            ._startRenderPage(d.transparency, d.cacheKey);
        }),
        U.on('commonobj', ([d, Z, t]) => {
          var F;
          if (this.destroyed || this.commonObjs.has(d)) return null;
          switch (Z) {
            case 'Font':
              const {
                disableFontFace: c,
                fontExtraProperties: n,
                pdfBug: V,
              } = this._params;
              if ('error' in t) {
                const h = t.error;
                _(`Error during font loading: ${h}`),
                  this.commonObjs.resolve(d, h);
                break;
              }
              const W =
                  V && (F = globalThis.FontInspector) != null && F.enabled
                    ? (h, N) => globalThis.FontInspector.fontAdded(h, N)
                    : null,
                a = new xM(t, { disableFontFace: c, inspectFont: W });
              this.fontLoader
                .bind(a)
                .catch(() => U.sendWithPromise('FontFallback', { id: d }))
                .finally(() => {
                  !n && a.data && (a.data = null),
                    this.commonObjs.resolve(d, a);
                });
              break;
            case 'CopyLocalImage':
              const { imageRef: i } = t;
              Bl(i, 'The imageRef must be defined.');
              for (const h of s(this, id).values())
                for (const [, N] of h.objs)
                  if ((N == null ? void 0 : N.ref) === i)
                    return N.dataLen
                      ? (this.commonObjs.resolve(d, structuredClone(N)),
                        N.dataLen)
                      : null;
              break;
            case 'FontPath':
            case 'Image':
            case 'Pattern':
              this.commonObjs.resolve(d, t);
              break;
            default:
              throw new Error(`Got unknown common object type ${Z}`);
          }
          return null;
        }),
        U.on('obj', ([d, Z, t, F]) => {
          var n;
          if (this.destroyed) return;
          const c = s(this, id).get(Z);
          if (!c.objs.has(d)) {
            if (c._intentStates.size === 0) {
              (n = F == null ? void 0 : F.bitmap) == null || n.close();
              return;
            }
            switch (t) {
              case 'Image':
                c.objs.resolve(d, F),
                  (F == null ? void 0 : F.dataLen) > RM &&
                    (c._maybeCleanupAfterRender = !0);
                break;
              case 'Pattern':
                c.objs.resolve(d, F);
                break;
              default:
                throw new Error(`Got unknown object type ${t}`);
            }
          }
        }),
        U.on('DocProgress', (d) => {
          var Z;
          this.destroyed ||
            (Z = l.onProgress) == null ||
            Z.call(l, { loaded: d.loaded, total: d.total });
        }),
        U.on('FetchBuiltInCMap', (d) =>
          this.destroyed
            ? Promise.reject(new Error('Worker was destroyed.'))
            : this.cMapReaderFactory
              ? this.cMapReaderFactory.fetch(d)
              : Promise.reject(
                  new Error(
                    'CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.',
                  ),
                ),
        ),
        U.on('FetchStandardFontData', (d) =>
          this.destroyed
            ? Promise.reject(new Error('Worker was destroyed.'))
            : this.standardFontDataFactory
              ? this.standardFontDataFactory.fetch(d)
              : Promise.reject(
                  new Error(
                    'StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.',
                  ),
                ),
        );
    }
    getData() {
      return this.messageHandler.sendWithPromise('GetData', null);
    }
    saveDocument() {
      var d;
      this.annotationStorage.size <= 0 &&
        _(
          'saveDocument called while `annotationStorage` is empty, please use the getData-method instead.',
        );
      const { map: U, transfer: l } = this.annotationStorage.serializable;
      return this.messageHandler
        .sendWithPromise(
          'SaveDocument',
          {
            isPureXfa: !!this._htmlForXfa,
            numPages: this._numPages,
            annotationStorage: U,
            filename:
              ((d = this._fullReader) == null ? void 0 : d.filename) ?? null,
          },
          l,
        )
        .finally(() => {
          this.annotationStorage.resetModified();
        });
    }
    getPage(U) {
      if (!Number.isInteger(U) || U <= 0 || U > this._numPages)
        return Promise.reject(new Error('Invalid page request.'));
      const l = U - 1,
        d = s(this, g0).get(l);
      if (d) return d;
      const Z = this.messageHandler
        .sendWithPromise('GetPage', { pageIndex: l })
        .then((t) => {
          if (this.destroyed) throw new Error('Transport destroyed');
          t.refStr && s(this, K0).set(t.refStr, U);
          const F = new wJ(l, t, this, this._params.pdfBug);
          return s(this, id).set(l, F), F;
        });
      return s(this, g0).set(l, Z), Z;
    }
    getPageIndex(U) {
      return qb(U)
        ? this.messageHandler.sendWithPromise('GetPageIndex', {
            num: U.num,
            gen: U.gen,
          })
        : Promise.reject(new Error('Invalid pageIndex request.'));
    }
    getAnnotations(U, l) {
      return this.messageHandler.sendWithPromise('GetAnnotations', {
        pageIndex: U,
        intent: l,
      });
    }
    getFieldObjects() {
      return b(this, FF, HV).call(this, 'GetFieldObjects');
    }
    hasJSActions() {
      return b(this, FF, HV).call(this, 'HasJSActions');
    }
    getCalculationOrderIds() {
      return this.messageHandler.sendWithPromise(
        'GetCalculationOrderIds',
        null,
      );
    }
    getDestinations() {
      return this.messageHandler.sendWithPromise('GetDestinations', null);
    }
    getDestination(U) {
      return typeof U != 'string'
        ? Promise.reject(new Error('Invalid destination request.'))
        : this.messageHandler.sendWithPromise('GetDestination', { id: U });
    }
    getPageLabels() {
      return this.messageHandler.sendWithPromise('GetPageLabels', null);
    }
    getPageLayout() {
      return this.messageHandler.sendWithPromise('GetPageLayout', null);
    }
    getPageMode() {
      return this.messageHandler.sendWithPromise('GetPageMode', null);
    }
    getViewerPreferences() {
      return this.messageHandler.sendWithPromise('GetViewerPreferences', null);
    }
    getOpenAction() {
      return this.messageHandler.sendWithPromise('GetOpenAction', null);
    }
    getAttachments() {
      return this.messageHandler.sendWithPromise('GetAttachments', null);
    }
    getDocJSActions() {
      return b(this, FF, HV).call(this, 'GetDocJSActions');
    }
    getPageJSActions(U) {
      return this.messageHandler.sendWithPromise('GetPageJSActions', {
        pageIndex: U,
      });
    }
    getStructTree(U) {
      return this.messageHandler.sendWithPromise('GetStructTree', {
        pageIndex: U,
      });
    }
    getOutline() {
      return this.messageHandler.sendWithPromise('GetOutline', null);
    }
    getOptionalContentConfig(U) {
      return b(this, FF, HV)
        .call(this, 'GetOptionalContentConfig')
        .then((l) => new sJ(l, U));
    }
    getPermissions() {
      return this.messageHandler.sendWithPromise('GetPermissions', null);
    }
    getMetadata() {
      const U = 'GetMetadata',
        l = s(this, fd).get(U);
      if (l) return l;
      const d = this.messageHandler.sendWithPromise(U, null).then((Z) => {
        var t, F;
        return {
          info: Z[0],
          metadata: Z[1] ? new FJ(Z[1]) : null,
          contentDispositionFilename:
            ((t = this._fullReader) == null ? void 0 : t.filename) ?? null,
          contentLength:
            ((F = this._fullReader) == null ? void 0 : F.contentLength) ?? null,
        };
      });
      return s(this, fd).set(U, d), d;
    }
    getMarkInfo() {
      return this.messageHandler.sendWithPromise('GetMarkInfo', null);
    }
    async startCleanup(U = !1) {
      if (!this.destroyed) {
        await this.messageHandler.sendWithPromise('Cleanup', null);
        for (const l of s(this, id).values())
          if (!l.cleanup())
            throw new Error(
              `startCleanup: Page ${l.pageNumber} is currently rendering.`,
            );
        this.commonObjs.clear(),
          U || this.fontLoader.clear(),
          s(this, fd).clear(),
          this.filterFactory.destroy(!0),
          XW.cleanup();
      }
    }
    cachedPageNumber(U) {
      if (!qb(U)) return null;
      const l = U.gen === 0 ? `${U.num}R` : `${U.num}R${U.gen}`;
      return s(this, K0).get(l) ?? null;
    }
  }
  (fd = new WeakMap()),
    (id = new WeakMap()),
    (g0 = new WeakMap()),
    (K0 = new WeakMap()),
    (Rd = new WeakMap()),
    (FF = new WeakSet()),
    (HV = function (U, l = null) {
      const d = s(this, fd).get(U);
      if (d) return d;
      const Z = this.messageHandler.sendWithPromise(U, l);
      return s(this, fd).set(U, Z), Z;
    });
  const uW = Symbol('INITIAL_DATA');
  class le {
    constructor() {
      R(this, CQ);
      R(this, vU, Object.create(null));
    }
    get(U, l = null) {
      if (l) {
        const Z = b(this, CQ, Mh).call(this, U);
        return Z.promise.then(() => l(Z.data)), null;
      }
      const d = s(this, vU)[U];
      if (!d || d.data === uW)
        throw new Error(`Requesting object that isn't resolved yet ${U}.`);
      return d.data;
    }
    has(U) {
      const l = s(this, vU)[U];
      return !!l && l.data !== uW;
    }
    resolve(U, l = null) {
      const d = b(this, CQ, Mh).call(this, U);
      (d.data = l), d.resolve();
    }
    clear() {
      var U;
      for (const l in s(this, vU)) {
        const { data: d } = s(this, vU)[l];
        (U = d == null ? void 0 : d.bitmap) == null || U.close();
      }
      e(this, vU, Object.create(null));
    }
    *[Symbol.iterator]() {
      for (const U in s(this, vU)) {
        const { data: l } = s(this, vU)[U];
        l !== uW && (yield [U, l]);
      }
    }
  }
  (vU = new WeakMap()),
    (CQ = new WeakSet()),
    (Mh = function (U) {
      var l;
      return (
        (l = s(this, vU))[U] ||
        (l[U] = { ...Promise.withResolvers(), data: uW })
      );
    });
  class OJ {
    constructor(U) {
      R(this, OZ, null);
      e(this, OZ, U), (this.onContinue = null);
    }
    get promise() {
      return s(this, OZ).capability.promise;
    }
    cancel(U = 0) {
      s(this, OZ).cancel(null, U);
    }
    get separateAnnots() {
      const { separateAnnots: U } = s(this, OZ).operatorList;
      if (!U) return !1;
      const { annotationCanvasMap: l } = s(this, OZ);
      return U.form || (U.canvas && (l == null ? void 0 : l.size) > 0);
    }
  }
  OZ = new WeakMap();
  const sF = class sF {
    constructor({
      callback: U,
      params: l,
      objs: d,
      commonObjs: Z,
      annotationCanvasMap: t,
      operatorList: F,
      pageIndex: c,
      canvasFactory: n,
      filterFactory: V,
      useRequestAnimationFrame: W = !1,
      pdfBug: a = !1,
      pageColors: i = null,
    }) {
      R(this, gZ, null);
      (this.callback = U),
        (this.params = l),
        (this.objs = d),
        (this.commonObjs = Z),
        (this.annotationCanvasMap = t),
        (this.operatorListIdx = null),
        (this.operatorList = F),
        (this._pageIndex = c),
        (this.canvasFactory = n),
        (this.filterFactory = V),
        (this._pdfBug = a),
        (this.pageColors = i),
        (this.running = !1),
        (this.graphicsReadyCallback = null),
        (this.graphicsReady = !1),
        (this._useRequestAnimationFrame = W === !0 && typeof window < 'u'),
        (this.cancelled = !1),
        (this.capability = Promise.withResolvers()),
        (this.task = new OJ(this)),
        (this._cancelBound = this.cancel.bind(this)),
        (this._continueBound = this._continue.bind(this)),
        (this._scheduleNextBound = this._scheduleNext.bind(this)),
        (this._nextBound = this._next.bind(this)),
        (this._canvas = l.canvasContext.canvas);
    }
    get completed() {
      return this.capability.promise.catch(function () {});
    }
    initializeGraphics({ transparency: U = !1, optionalContentConfig: l }) {
      var c, n;
      if (this.cancelled) return;
      if (this._canvas) {
        if (s(sF, cF).has(this._canvas))
          throw new Error(
            'Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.',
          );
        s(sF, cF).add(this._canvas);
      }
      this._pdfBug &&
        (c = globalThis.StepperManager) != null &&
        c.enabled &&
        ((this.stepper = globalThis.StepperManager.create(this._pageIndex)),
        this.stepper.init(this.operatorList),
        (this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint()));
      const {
        canvasContext: d,
        viewport: Z,
        transform: t,
        background: F,
      } = this.params;
      (this.gfx = new n0(
        d,
        this.commonObjs,
        this.objs,
        this.canvasFactory,
        this.filterFactory,
        { optionalContentConfig: l },
        this.annotationCanvasMap,
        this.pageColors,
      )),
        this.gfx.beginDrawing({
          transform: t,
          viewport: Z,
          transparency: U,
          background: F,
        }),
        (this.operatorListIdx = 0),
        (this.graphicsReady = !0),
        (n = this.graphicsReadyCallback) == null || n.call(this);
    }
    cancel(U = null, l = 0) {
      var d;
      (this.running = !1),
        (this.cancelled = !0),
        (d = this.gfx) == null || d.endDrawing(),
        s(this, gZ) &&
          (window.cancelAnimationFrame(s(this, gZ)), e(this, gZ, null)),
        s(sF, cF).delete(this._canvas),
        this.callback(
          U || new ZN(`Rendering cancelled, page ${this._pageIndex + 1}`, l),
        );
    }
    operatorListChanged() {
      var U;
      if (!this.graphicsReady) {
        this.graphicsReadyCallback ||
          (this.graphicsReadyCallback = this._continueBound);
        return;
      }
      (U = this.stepper) == null || U.updateOperatorList(this.operatorList),
        !this.running && this._continue();
    }
    _continue() {
      (this.running = !0),
        !this.cancelled &&
          (this.task.onContinue
            ? this.task.onContinue(this._scheduleNextBound)
            : this._scheduleNext());
    }
    _scheduleNext() {
      this._useRequestAnimationFrame
        ? e(
            this,
            gZ,
            window.requestAnimationFrame(() => {
              e(this, gZ, null), this._nextBound().catch(this._cancelBound);
            }),
          )
        : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
    }
    async _next() {
      this.cancelled ||
        ((this.operatorListIdx = this.gfx.executeOperatorList(
          this.operatorList,
          this.operatorListIdx,
          this._continueBound,
          this.stepper,
        )),
        this.operatorListIdx === this.operatorList.argsArray.length &&
          ((this.running = !1),
          this.operatorList.lastChunk &&
            (this.gfx.endDrawing(),
            s(sF, cF).delete(this._canvas),
            this.callback())));
    }
  };
  (gZ = new WeakMap()), (cF = new WeakMap()), R(sF, cF, new WeakSet());
  let JN = sF;
  const gJ = '4.4.168',
    KJ = '19fbc8998';
  q(670);
  function Ue(Q) {
    return Math.floor(Math.max(0, Math.min(1, Q)) * 255)
      .toString(16)
      .padStart(2, '0');
  }
  function Ms(Q) {
    return Math.max(0, Math.min(255, 255 * Q));
  }
  class de {
    static CMYK_G([U, l, d, Z]) {
      return ['G', 1 - Math.min(1, 0.3 * U + 0.59 * d + 0.11 * l + Z)];
    }
    static G_CMYK([U]) {
      return ['CMYK', 0, 0, 0, 1 - U];
    }
    static G_RGB([U]) {
      return ['RGB', U, U, U];
    }
    static G_rgb([U]) {
      return (U = Ms(U)), [U, U, U];
    }
    static G_HTML([U]) {
      const l = Ue(U);
      return `#${l}${l}${l}`;
    }
    static RGB_G([U, l, d]) {
      return ['G', 0.3 * U + 0.59 * l + 0.11 * d];
    }
    static RGB_rgb(U) {
      return U.map(Ms);
    }
    static RGB_HTML(U) {
      return `#${U.map(Ue).join('')}`;
    }
    static T_HTML() {
      return '#00000000';
    }
    static T_rgb() {
      return [null];
    }
    static CMYK_RGB([U, l, d, Z]) {
      return [
        'RGB',
        1 - Math.min(1, U + Z),
        1 - Math.min(1, d + Z),
        1 - Math.min(1, l + Z),
      ];
    }
    static CMYK_rgb([U, l, d, Z]) {
      return [
        Ms(1 - Math.min(1, U + Z)),
        Ms(1 - Math.min(1, d + Z)),
        Ms(1 - Math.min(1, l + Z)),
      ];
    }
    static CMYK_HTML(U) {
      const l = this.CMYK_RGB(U).slice(1);
      return this.RGB_HTML(l);
    }
    static RGB_CMYK([U, l, d]) {
      const Z = 1 - U,
        t = 1 - l,
        F = 1 - d,
        c = Math.min(Z, t, F);
      return ['CMYK', Z, t, F, c];
    }
  }
  let Ze = class {
    static setupStorage(U, l, d, Z, t) {
      const F = Z.getValue(l, { value: null });
      switch (d.name) {
        case 'textarea':
          if ((F.value !== null && (U.textContent = F.value), t === 'print'))
            break;
          U.addEventListener('input', (c) => {
            Z.setValue(l, { value: c.target.value });
          });
          break;
        case 'input':
          if (
            d.attributes.type === 'radio' ||
            d.attributes.type === 'checkbox'
          ) {
            if (
              (F.value === d.attributes.xfaOn
                ? U.setAttribute('checked', !0)
                : F.value === d.attributes.xfaOff &&
                  U.removeAttribute('checked'),
              t === 'print')
            )
              break;
            U.addEventListener('change', (c) => {
              Z.setValue(l, {
                value: c.target.checked
                  ? c.target.getAttribute('xfaOn')
                  : c.target.getAttribute('xfaOff'),
              });
            });
          } else {
            if (
              (F.value !== null && U.setAttribute('value', F.value),
              t === 'print')
            )
              break;
            U.addEventListener('input', (c) => {
              Z.setValue(l, { value: c.target.value });
            });
          }
          break;
        case 'select':
          if (F.value !== null) {
            U.setAttribute('value', F.value);
            for (const c of d.children)
              c.attributes.value === F.value
                ? (c.attributes.selected = !0)
                : c.attributes.hasOwnProperty('selected') &&
                  delete c.attributes.selected;
          }
          U.addEventListener('input', (c) => {
            const n = c.target.options,
              V = n.selectedIndex === -1 ? '' : n[n.selectedIndex].value;
            Z.setValue(l, { value: V });
          });
          break;
      }
    }
    static setAttributes({
      html: U,
      element: l,
      storage: d = null,
      intent: Z,
      linkService: t,
    }) {
      const { attributes: F } = l,
        c = U instanceof HTMLAnchorElement;
      F.type === 'radio' && (F.name = `${F.name}-${Z}`);
      for (const [n, V] of Object.entries(F))
        if (V != null)
          switch (n) {
            case 'class':
              V.length && U.setAttribute(n, V.join(' '));
              break;
            case 'dataId':
              break;
            case 'id':
              U.setAttribute('data-element-id', V);
              break;
            case 'style':
              Object.assign(U.style, V);
              break;
            case 'textContent':
              U.textContent = V;
              break;
            default:
              (!c || (n !== 'href' && n !== 'newWindow')) &&
                U.setAttribute(n, V);
          }
      c && t.addLinkAttributes(U, F.href, F.newWindow),
        d && F.dataId && this.setupStorage(U, F.dataId, l, d);
    }
    static render(U) {
      var a, i;
      const l = U.annotationStorage,
        d = U.linkService,
        Z = U.xfaHtml,
        t = U.intent || 'display',
        F = document.createElement(Z.name);
      Z.attributes &&
        this.setAttributes({ html: F, element: Z, intent: t, linkService: d });
      const c = t !== 'richText',
        n = U.div;
      if ((n.append(F), U.viewport)) {
        const h = `matrix(${U.viewport.transform.join(',')})`;
        n.style.transform = h;
      }
      c && n.setAttribute('class', 'xfaLayer xfaFont');
      const V = [];
      if (Z.children.length === 0) {
        if (Z.value) {
          const h = document.createTextNode(Z.value);
          F.append(h), c && ms.shouldBuildText(Z.name) && V.push(h);
        }
        return { textDivs: V };
      }
      const W = [[Z, -1, F]];
      for (; W.length > 0; ) {
        const [h, N, M] = W.at(-1);
        if (N + 1 === h.children.length) {
          W.pop();
          continue;
        }
        const J = h.children[++W.at(-1)[1]];
        if (J === null) continue;
        const { name: m } = J;
        if (m === '#text') {
          const T = document.createTextNode(J.value);
          V.push(T), M.append(T);
          continue;
        }
        const G =
          (a = J == null ? void 0 : J.attributes) != null && a.xmlns
            ? document.createElementNS(J.attributes.xmlns, m)
            : document.createElement(m);
        if (
          (M.append(G),
          J.attributes &&
            this.setAttributes({
              html: G,
              element: J,
              storage: l,
              intent: t,
              linkService: d,
            }),
          ((i = J.children) == null ? void 0 : i.length) > 0)
        )
          W.push([J, -1, G]);
        else if (J.value) {
          const T = document.createTextNode(J.value);
          c && ms.shouldBuildText(m) && V.push(T), G.append(T);
        }
      }
      for (const h of n.querySelectorAll(
        '.xfaNonInteractive input, .xfaNonInteractive textarea',
      ))
        h.setAttribute('readOnly', !0);
      return { textDivs: V };
    }
    static update(U) {
      const l = `matrix(${U.viewport.transform.join(',')})`;
      (U.div.style.transform = l), (U.div.hidden = !1);
    }
  };
  const Js = 1e3,
    vJ = 9,
    Xt = new WeakSet();
  function zd(Q) {
    return { width: Q[2] - Q[0], height: Q[3] - Q[1] };
  }
  class HJ {
    static create(U) {
      switch (U.data.annotationType) {
        case ol.LINK:
          return new te(U);
        case ol.TEXT:
          return new PJ(U);
        case ol.WIDGET:
          switch (U.data.fieldType) {
            case 'Tx':
              return new fJ(U);
            case 'Btn':
              return U.data.radioButton
                ? new Fe(U)
                : U.data.checkBox
                  ? new _J(U)
                  : new qJ(U);
            case 'Ch':
              return new $J(U);
            case 'Sig':
              return new AJ(U);
          }
          return new Yt(U);
        case ol.POPUP:
          return new GN(U);
        case ol.FREETEXT:
          return new ce(U);
        case ol.LINE:
          return new UG(U);
        case ol.SQUARE:
          return new dG(U);
        case ol.CIRCLE:
          return new ZG(U);
        case ol.POLYLINE:
          return new se(U);
        case ol.CARET:
          return new FG(U);
        case ol.INK:
          return new Qe(U);
        case ol.POLYGON:
          return new tG(U);
        case ol.HIGHLIGHT:
          return new cG(U);
        case ol.UNDERLINE:
          return new sG(U);
        case ol.SQUIGGLY:
          return new QG(U);
        case ol.STRIKEOUT:
          return new nG(U);
        case ol.STAMP:
          return new ne(U);
        case ol.FILEATTACHMENT:
          return new VG(U);
        default:
          return new Sl(U);
      }
    }
  }
  const PN = class PN {
    constructor(
      U,
      {
        isRenderable: l = !1,
        ignoreBorder: d = !1,
        createQuadrilaterals: Z = !1,
      } = {},
    ) {
      R(this, rQ);
      R(this, QF, null);
      R(this, v0, !1);
      R(this, H0, null);
      (this.isRenderable = l),
        (this.data = U.data),
        (this.layer = U.layer),
        (this.linkService = U.linkService),
        (this.downloadManager = U.downloadManager),
        (this.imageResourcesPath = U.imageResourcesPath),
        (this.renderForms = U.renderForms),
        (this.svgFactory = U.svgFactory),
        (this.annotationStorage = U.annotationStorage),
        (this.enableScripting = U.enableScripting),
        (this.hasJSActions = U.hasJSActions),
        (this._fieldObjects = U.fieldObjects),
        (this.parent = U.parent),
        l && (this.container = this._createContainer(d)),
        Z && this._createQuadrilaterals();
    }
    static _hasPopupData({ titleObj: U, contentsObj: l, richText: d }) {
      return !!(
        (U != null && U.str) ||
        (l != null && l.str) ||
        (d != null && d.str)
      );
    }
    get hasPopupData() {
      return PN._hasPopupData(this.data);
    }
    updateEdited(U) {
      var d;
      if (!this.container) return;
      s(this, QF) || e(this, QF, { rect: this.data.rect.slice(0) });
      const { rect: l } = U;
      l && b(this, rQ, Jh).call(this, l),
        (d = s(this, H0)) == null || d.popup.updateEdited(U);
    }
    resetEdited() {
      var U;
      s(this, QF) &&
        (b(this, rQ, Jh).call(this, s(this, QF).rect),
        (U = s(this, H0)) == null || U.popup.resetEdited(),
        e(this, QF, null));
    }
    _createContainer(U) {
      const {
          data: l,
          parent: { page: d, viewport: Z },
        } = this,
        t = document.createElement('section');
      t.setAttribute('data-annotation-id', l.id),
        this instanceof Yt || (t.tabIndex = Js);
      const { style: F } = t;
      if (
        ((F.zIndex = this.parent.zIndex++),
        l.popupRef && t.setAttribute('aria-haspopup', 'dialog'),
        l.alternativeText && (t.title = l.alternativeText),
        l.noRotate && t.classList.add('norotate'),
        !l.rect || this instanceof GN)
      ) {
        const { rotation: M } = l;
        return !l.hasOwnCanvas && M !== 0 && this.setRotation(M, t), t;
      }
      const { width: c, height: n } = zd(l.rect);
      if (!U && l.borderStyle.width > 0) {
        F.borderWidth = `${l.borderStyle.width}px`;
        const M = l.borderStyle.horizontalCornerRadius,
          J = l.borderStyle.verticalCornerRadius;
        if (M > 0 || J > 0) {
          const G = `calc(${M}px * var(--scale-factor)) / calc(${J}px * var(--scale-factor))`;
          F.borderRadius = G;
        } else if (this instanceof Fe) {
          const G = `calc(${c}px * var(--scale-factor)) / calc(${n}px * var(--scale-factor))`;
          F.borderRadius = G;
        }
        switch (l.borderStyle.style) {
          case Vs.SOLID:
            F.borderStyle = 'solid';
            break;
          case Vs.DASHED:
            F.borderStyle = 'dashed';
            break;
          case Vs.BEVELED:
            _('Unimplemented border style: beveled');
            break;
          case Vs.INSET:
            _('Unimplemented border style: inset');
            break;
          case Vs.UNDERLINE:
            F.borderBottomStyle = 'solid';
            break;
        }
        const m = l.borderColor || null;
        m
          ? (e(this, v0, !0),
            (F.borderColor = g.makeHexColor(m[0] | 0, m[1] | 0, m[2] | 0)))
          : (F.borderWidth = 0);
      }
      const V = g.normalizeRect([
          l.rect[0],
          d.view[3] - l.rect[1] + d.view[1],
          l.rect[2],
          d.view[3] - l.rect[3] + d.view[1],
        ]),
        { pageWidth: W, pageHeight: a, pageX: i, pageY: h } = Z.rawDims;
      (F.left = `${(100 * (V[0] - i)) / W}%`),
        (F.top = `${(100 * (V[1] - h)) / a}%`);
      const { rotation: N } = l;
      return (
        l.hasOwnCanvas || N === 0
          ? ((F.width = `${(100 * c) / W}%`), (F.height = `${(100 * n) / a}%`))
          : this.setRotation(N, t),
        t
      );
    }
    setRotation(U, l = this.container) {
      if (!this.data.rect) return;
      const { pageWidth: d, pageHeight: Z } = this.parent.viewport.rawDims,
        { width: t, height: F } = zd(this.data.rect);
      let c, n;
      U % 180 === 0
        ? ((c = (100 * t) / d), (n = (100 * F) / Z))
        : ((c = (100 * F) / d), (n = (100 * t) / Z)),
        (l.style.width = `${c}%`),
        (l.style.height = `${n}%`),
        l.setAttribute('data-main-rotation', (360 - U) % 360);
    }
    get _commonActions() {
      const U = (l, d, Z) => {
        const t = Z.detail[l],
          F = t[0],
          c = t.slice(1);
        (Z.target.style[d] = de[`${F}_HTML`](c)),
          this.annotationStorage.setValue(this.data.id, {
            [d]: de[`${F}_rgb`](c),
          });
      };
      return Zl(this, '_commonActions', {
        display: (l) => {
          const { display: d } = l.detail,
            Z = d % 2 === 1;
          (this.container.style.visibility = Z ? 'hidden' : 'visible'),
            this.annotationStorage.setValue(this.data.id, {
              noView: Z,
              noPrint: d === 1 || d === 2,
            });
        },
        print: (l) => {
          this.annotationStorage.setValue(this.data.id, {
            noPrint: !l.detail.print,
          });
        },
        hidden: (l) => {
          const { hidden: d } = l.detail;
          (this.container.style.visibility = d ? 'hidden' : 'visible'),
            this.annotationStorage.setValue(this.data.id, {
              noPrint: d,
              noView: d,
            });
        },
        focus: (l) => {
          setTimeout(() => l.target.focus({ preventScroll: !1 }), 0);
        },
        userName: (l) => {
          l.target.title = l.detail.userName;
        },
        readonly: (l) => {
          l.target.disabled = l.detail.readonly;
        },
        required: (l) => {
          this._setRequired(l.target, l.detail.required);
        },
        bgColor: (l) => {
          U('bgColor', 'backgroundColor', l);
        },
        fillColor: (l) => {
          U('fillColor', 'backgroundColor', l);
        },
        fgColor: (l) => {
          U('fgColor', 'color', l);
        },
        textColor: (l) => {
          U('textColor', 'color', l);
        },
        borderColor: (l) => {
          U('borderColor', 'borderColor', l);
        },
        strokeColor: (l) => {
          U('strokeColor', 'borderColor', l);
        },
        rotation: (l) => {
          const d = l.detail.rotation;
          this.setRotation(d),
            this.annotationStorage.setValue(this.data.id, { rotation: d });
        },
      });
    }
    _dispatchEventFromSandbox(U, l) {
      const d = this._commonActions;
      for (const Z of Object.keys(l.detail)) {
        const t = U[Z] || d[Z];
        t == null || t(l);
      }
    }
    _setDefaultPropertiesFromJS(U) {
      if (!this.enableScripting) return;
      const l = this.annotationStorage.getRawValue(this.data.id);
      if (!l) return;
      const d = this._commonActions;
      for (const [Z, t] of Object.entries(l)) {
        const F = d[Z];
        if (F) {
          const c = { detail: { [Z]: t }, target: U };
          F(c), delete l[Z];
        }
      }
    }
    _createQuadrilaterals() {
      if (!this.container) return;
      const { quadPoints: U } = this.data;
      if (!U) return;
      const [l, d, Z, t] = this.data.rect.map((M) => Math.fround(M));
      if (U.length === 8) {
        const [M, J, m, G] = U.subarray(2, 6);
        if (Z === M && t === J && l === m && d === G) return;
      }
      const { style: F } = this.container;
      let c;
      if (s(this, v0)) {
        const { borderColor: M, borderWidth: J } = F;
        (F.borderWidth = 0),
          (c = [
            "url('data:image/svg+xml;utf8,",
            '<svg xmlns="http://www.w3.org/2000/svg"',
            ' preserveAspectRatio="none" viewBox="0 0 1 1">',
            `<g fill="transparent" stroke="${M}" stroke-width="${J}">`,
          ]),
          this.container.classList.add('hasBorder');
      }
      const n = Z - l,
        V = t - d,
        { svgFactory: W } = this,
        a = W.createElement('svg');
      a.classList.add('quadrilateralsContainer'),
        a.setAttribute('width', 0),
        a.setAttribute('height', 0);
      const i = W.createElement('defs');
      a.append(i);
      const h = W.createElement('clipPath'),
        N = `clippath_${this.data.id}`;
      h.setAttribute('id', N),
        h.setAttribute('clipPathUnits', 'objectBoundingBox'),
        i.append(h);
      for (let M = 2, J = U.length; M < J; M += 8) {
        const m = U[M],
          G = U[M + 1],
          T = U[M + 2],
          u = U[M + 3],
          X = W.createElement('rect'),
          S = (T - l) / n,
          p = (t - G) / V,
          L = (m - T) / n,
          Y = (G - u) / V;
        X.setAttribute('x', S),
          X.setAttribute('y', p),
          X.setAttribute('width', L),
          X.setAttribute('height', Y),
          h.append(X),
          c == null ||
            c.push(
              `<rect vector-effect="non-scaling-stroke" x="${S}" y="${p}" width="${L}" height="${Y}"/>`,
            );
      }
      s(this, v0) && (c.push("</g></svg>')"), (F.backgroundImage = c.join(''))),
        this.container.append(a),
        (this.container.style.clipPath = `url(#${N})`);
    }
    _createPopup() {
      const { container: U, data: l } = this;
      U.setAttribute('aria-haspopup', 'dialog');
      const d = e(
        this,
        H0,
        new GN({
          data: {
            color: l.color,
            titleObj: l.titleObj,
            modificationDate: l.modificationDate,
            contentsObj: l.contentsObj,
            richText: l.richText,
            parentRect: l.rect,
            borderStyle: 0,
            id: `popup_${l.id}`,
            rotation: l.rotation,
          },
          parent: this.parent,
          elements: [this],
        }),
      );
      this.parent.div.append(d.render());
    }
    render() {
      sl('Abstract method `AnnotationElement.render` called');
    }
    _getElementsByName(U, l = null) {
      const d = [];
      if (this._fieldObjects) {
        const Z = this._fieldObjects[U];
        if (Z)
          for (const { page: t, id: F, exportValues: c } of Z) {
            if (t === -1 || F === l) continue;
            const n = typeof c == 'string' ? c : null,
              V = document.querySelector(`[data-element-id="${F}"]`);
            if (V && !Xt.has(V)) {
              _(`_getElementsByName - element not allowed: ${F}`);
              continue;
            }
            d.push({ id: F, exportValue: n, domElement: V });
          }
        return d;
      }
      for (const Z of document.getElementsByName(U)) {
        const { exportValue: t } = Z,
          F = Z.getAttribute('data-element-id');
        F !== l &&
          Xt.has(Z) &&
          d.push({ id: F, exportValue: t, domElement: Z });
      }
      return d;
    }
    show() {
      var U;
      this.container && (this.container.hidden = !1),
        (U = this.popup) == null || U.maybeShow();
    }
    hide() {
      var U;
      this.container && (this.container.hidden = !0),
        (U = this.popup) == null || U.forceHide();
    }
    getElementsToTriggerPopup() {
      return this.container;
    }
    addHighlightArea() {
      const U = this.getElementsToTriggerPopup();
      if (Array.isArray(U)) for (const l of U) l.classList.add('highlightArea');
      else U.classList.add('highlightArea');
    }
    get _isEditable() {
      return !1;
    }
    _editOnDoubleClick() {
      if (!this._isEditable) return;
      const {
        annotationEditorType: U,
        data: { id: l },
      } = this;
      this.container.addEventListener('dblclick', () => {
        var d;
        (d = this.linkService.eventBus) == null ||
          d.dispatch('switchannotationeditormode', {
            source: this,
            mode: U,
            editId: l,
          });
      });
    }
  };
  (QF = new WeakMap()),
    (v0 = new WeakMap()),
    (H0 = new WeakMap()),
    (rQ = new WeakSet()),
    (Jh = function (U) {
      const {
        container: { style: l },
        data: { rect: d, rotation: Z },
        parent: {
          viewport: {
            rawDims: { pageWidth: t, pageHeight: F, pageX: c, pageY: n },
          },
        },
      } = this;
      d == null || d.splice(0, 4, ...U);
      const { width: V, height: W } = zd(U);
      (l.left = `${(100 * (U[0] - c)) / t}%`),
        (l.top = `${(100 * (F - U[3] + n)) / F}%`),
        Z === 0
          ? ((l.width = `${(100 * V) / t}%`), (l.height = `${(100 * W) / F}%`))
          : this.setRotation(Z);
    });
  let Sl = PN;
  class te extends Sl {
    constructor(l, d = null) {
      super(l, {
        isRenderable: !0,
        ignoreBorder: !!(d != null && d.ignoreBorder),
        createQuadrilaterals: !0,
      });
      R(this, Ad);
      R(this, Ia);
      R(this, Ea);
      this.isTooltipOnly = l.data.isTooltipOnly;
    }
    render() {
      const { data: l, linkService: d } = this,
        Z = document.createElement('a');
      Z.setAttribute('data-element-id', l.id);
      let t = !1;
      return (
        l.url
          ? (d.addLinkAttributes(Z, l.url, l.newWindow), (t = !0))
          : l.action
            ? (this._bindNamedAction(Z, l.action), (t = !0))
            : l.attachment
              ? (b(this, Ia, gm).call(this, Z, l.attachment, l.attachmentDest),
                (t = !0))
              : l.setOCGState
                ? (b(this, Ea, Km).call(this, Z, l.setOCGState), (t = !0))
                : l.dest
                  ? (this._bindLink(Z, l.dest), (t = !0))
                  : (l.actions &&
                      (l.actions.Action ||
                        l.actions['Mouse Up'] ||
                        l.actions['Mouse Down']) &&
                      this.enableScripting &&
                      this.hasJSActions &&
                      (this._bindJSAction(Z, l), (t = !0)),
                    l.resetForm
                      ? (this._bindResetFormAction(Z, l.resetForm), (t = !0))
                      : this.isTooltipOnly &&
                        !t &&
                        (this._bindLink(Z, ''), (t = !0))),
        this.container.classList.add('linkAnnotation'),
        t && this.container.append(Z),
        this.container
      );
    }
    _bindLink(l, d) {
      (l.href = this.linkService.getDestinationHash(d)),
        (l.onclick = () => (d && this.linkService.goToDestination(d), !1)),
        (d || d === '') && b(this, Ad, F0).call(this);
    }
    _bindNamedAction(l, d) {
      (l.href = this.linkService.getAnchorUrl('')),
        (l.onclick = () => (this.linkService.executeNamedAction(d), !1)),
        b(this, Ad, F0).call(this);
    }
    _bindJSAction(l, d) {
      l.href = this.linkService.getAnchorUrl('');
      const Z = new Map([
        ['Action', 'onclick'],
        ['Mouse Up', 'onmouseup'],
        ['Mouse Down', 'onmousedown'],
      ]);
      for (const t of Object.keys(d.actions)) {
        const F = Z.get(t);
        F &&
          (l[F] = () => {
            var c;
            return (
              (c = this.linkService.eventBus) == null ||
                c.dispatch('dispatcheventinsandbox', {
                  source: this,
                  detail: { id: d.id, name: t },
                }),
              !1
            );
          });
      }
      l.onclick || (l.onclick = () => !1), b(this, Ad, F0).call(this);
    }
    _bindResetFormAction(l, d) {
      const Z = l.onclick;
      if (
        (Z || (l.href = this.linkService.getAnchorUrl('')),
        b(this, Ad, F0).call(this),
        !this._fieldObjects)
      ) {
        _(
          '_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.',
        ),
          Z || (l.onclick = () => !1);
        return;
      }
      l.onclick = () => {
        var a;
        Z == null || Z();
        const { fields: t, refs: F, include: c } = d,
          n = [];
        if (t.length !== 0 || F.length !== 0) {
          const i = new Set(F);
          for (const h of t) {
            const N = this._fieldObjects[h] || [];
            for (const { id: M } of N) i.add(M);
          }
          for (const h of Object.values(this._fieldObjects))
            for (const N of h) i.has(N.id) === c && n.push(N);
        } else for (const i of Object.values(this._fieldObjects)) n.push(...i);
        const V = this.annotationStorage,
          W = [];
        for (const i of n) {
          const { id: h } = i;
          switch ((W.push(h), i.type)) {
            case 'text': {
              const M = i.defaultValue || '';
              V.setValue(h, { value: M });
              break;
            }
            case 'checkbox':
            case 'radiobutton': {
              const M = i.defaultValue === i.exportValues;
              V.setValue(h, { value: M });
              break;
            }
            case 'combobox':
            case 'listbox': {
              const M = i.defaultValue || '';
              V.setValue(h, { value: M });
              break;
            }
            default:
              continue;
          }
          const N = document.querySelector(`[data-element-id="${h}"]`);
          if (N) {
            if (!Xt.has(N)) {
              _(`_bindResetFormAction - element not allowed: ${h}`);
              continue;
            }
          } else continue;
          N.dispatchEvent(new Event('resetform'));
        }
        return (
          this.enableScripting &&
            ((a = this.linkService.eventBus) == null ||
              a.dispatch('dispatcheventinsandbox', {
                source: this,
                detail: { id: 'app', ids: W, name: 'ResetForm' },
              })),
          !1
        );
      };
    }
  }
  (Ad = new WeakSet()),
    (F0 = function () {
      this.container.setAttribute('data-internal-link', '');
    }),
    (Ia = new WeakSet()),
    (gm = function (l, d, Z = null) {
      (l.href = this.linkService.getAnchorUrl('')),
        d.description && (l.title = d.description),
        (l.onclick = () => {
          var t;
          return (
            (t = this.downloadManager) == null ||
              t.openOrDownloadData(d.content, d.filename, Z),
            !1
          );
        }),
        b(this, Ad, F0).call(this);
    }),
    (Ea = new WeakSet()),
    (Km = function (l, d) {
      (l.href = this.linkService.getAnchorUrl('')),
        (l.onclick = () => (this.linkService.executeSetOCGState(d), !1)),
        b(this, Ad, F0).call(this);
    });
  class PJ extends Sl {
    constructor(U) {
      super(U, { isRenderable: !0 });
    }
    render() {
      this.container.classList.add('textAnnotation');
      const U = document.createElement('img');
      return (
        (U.src =
          this.imageResourcesPath +
          'annotation-' +
          this.data.name.toLowerCase() +
          '.svg'),
        U.setAttribute('data-l10n-id', 'pdfjs-text-annotation-type'),
        U.setAttribute(
          'data-l10n-args',
          JSON.stringify({ type: this.data.name }),
        ),
        !this.data.popupRef && this.hasPopupData && this._createPopup(),
        this.container.append(U),
        this.container
      );
    }
  }
  class Yt extends Sl {
    render() {
      return this.container;
    }
    showElementAndHideCanvas(U) {
      var l;
      this.data.hasOwnCanvas &&
        (((l = U.previousSibling) == null ? void 0 : l.nodeName) === 'CANVAS' &&
          (U.previousSibling.hidden = !0),
        (U.hidden = !1));
    }
    _getKeyModifier(U) {
      return nU.platform.isMac ? U.metaKey : U.ctrlKey;
    }
    _setEventListener(U, l, d, Z, t) {
      d.includes('mouse')
        ? U.addEventListener(d, (F) => {
            var c;
            (c = this.linkService.eventBus) == null ||
              c.dispatch('dispatcheventinsandbox', {
                source: this,
                detail: {
                  id: this.data.id,
                  name: Z,
                  value: t(F),
                  shift: F.shiftKey,
                  modifier: this._getKeyModifier(F),
                },
              });
          })
        : U.addEventListener(d, (F) => {
            var c;
            if (d === 'blur') {
              if (!l.focused || !F.relatedTarget) return;
              l.focused = !1;
            } else if (d === 'focus') {
              if (l.focused) return;
              l.focused = !0;
            }
            t &&
              ((c = this.linkService.eventBus) == null ||
                c.dispatch('dispatcheventinsandbox', {
                  source: this,
                  detail: { id: this.data.id, name: Z, value: t(F) },
                }));
          });
    }
    _setEventListeners(U, l, d, Z) {
      var t, F, c;
      for (const [n, V] of d)
        (V === 'Action' || ((t = this.data.actions) != null && t[V])) &&
          ((V === 'Focus' || V === 'Blur') && (l || (l = { focused: !1 })),
          this._setEventListener(U, l, n, V, Z),
          V === 'Focus' && !((F = this.data.actions) != null && F.Blur)
            ? this._setEventListener(U, l, 'blur', 'Blur', null)
            : V === 'Blur' &&
              !((c = this.data.actions) != null && c.Focus) &&
              this._setEventListener(U, l, 'focus', 'Focus', null));
    }
    _setBackgroundColor(U) {
      const l = this.data.backgroundColor || null;
      U.style.backgroundColor =
        l === null ? 'transparent' : g.makeHexColor(l[0], l[1], l[2]);
    }
    _setTextStyle(U) {
      const l = ['left', 'center', 'right'],
        { fontColor: d } = this.data.defaultAppearanceData,
        Z = this.data.defaultAppearanceData.fontSize || vJ,
        t = U.style;
      let F;
      const c = 2,
        n = (V) => Math.round(10 * V) / 10;
      if (this.data.multiLine) {
        const V = Math.abs(this.data.rect[3] - this.data.rect[1] - c),
          W = Math.round(V / (PR * Z)) || 1,
          a = V / W;
        F = Math.min(Z, n(a / PR));
      } else {
        const V = Math.abs(this.data.rect[3] - this.data.rect[1] - c);
        F = Math.min(Z, n(V / PR));
      }
      (t.fontSize = `calc(${F}px * var(--scale-factor))`),
        (t.color = g.makeHexColor(d[0], d[1], d[2])),
        this.data.textAlignment !== null &&
          (t.textAlign = l[this.data.textAlignment]);
    }
    _setRequired(U, l) {
      l ? U.setAttribute('required', !0) : U.removeAttribute('required'),
        U.setAttribute('aria-required', l);
    }
  }
  class fJ extends Yt {
    constructor(U) {
      const l =
        U.renderForms ||
        U.data.hasOwnCanvas ||
        (!U.data.hasAppearance && !!U.data.fieldValue);
      super(U, { isRenderable: l });
    }
    setPropertyOnSiblings(U, l, d, Z) {
      const t = this.annotationStorage;
      for (const F of this._getElementsByName(U.name, U.id))
        F.domElement && (F.domElement[l] = d), t.setValue(F.id, { [Z]: d });
    }
    render() {
      var Z, t;
      const U = this.annotationStorage,
        l = this.data.id;
      this.container.classList.add('textWidgetAnnotation');
      let d = null;
      if (this.renderForms) {
        const F = U.getValue(l, { value: this.data.fieldValue });
        let c = F.value || '';
        const n = U.getValue(l, { charLimit: this.data.maxLen }).charLimit;
        n && c.length > n && (c = c.slice(0, n));
        let V =
          F.formattedValue ||
          ((Z = this.data.textContent) == null
            ? void 0
            : Z.join(`
`)) ||
          null;
        V && this.data.comb && (V = V.replaceAll(/\s+/g, ''));
        const W = {
          userValue: c,
          formattedValue: V,
          lastCommittedValue: null,
          commitKey: 1,
          focused: !1,
        };
        this.data.multiLine
          ? ((d = document.createElement('textarea')),
            (d.textContent = V ?? c),
            this.data.doNotScroll && (d.style.overflowY = 'hidden'))
          : ((d = document.createElement('input')),
            (d.type = 'text'),
            d.setAttribute('value', V ?? c),
            this.data.doNotScroll && (d.style.overflowX = 'hidden')),
          this.data.hasOwnCanvas && (d.hidden = !0),
          Xt.add(d),
          d.setAttribute('data-element-id', l),
          (d.disabled = this.data.readOnly),
          (d.name = this.data.fieldName),
          (d.tabIndex = Js),
          this._setRequired(d, this.data.required),
          n && (d.maxLength = n),
          d.addEventListener('input', (i) => {
            U.setValue(l, { value: i.target.value }),
              this.setPropertyOnSiblings(d, 'value', i.target.value, 'value'),
              (W.formattedValue = null);
          }),
          d.addEventListener('resetform', (i) => {
            const h = this.data.defaultFieldValue ?? '';
            (d.value = W.userValue = h), (W.formattedValue = null);
          });
        let a = (i) => {
          const { formattedValue: h } = W;
          h != null && (i.target.value = h), (i.target.scrollLeft = 0);
        };
        if (this.enableScripting && this.hasJSActions) {
          d.addEventListener('focus', (h) => {
            var M;
            if (W.focused) return;
            const { target: N } = h;
            W.userValue && (N.value = W.userValue),
              (W.lastCommittedValue = N.value),
              (W.commitKey = 1),
              ((M = this.data.actions) != null && M.Focus) || (W.focused = !0);
          }),
            d.addEventListener('updatefromsandbox', (h) => {
              this.showElementAndHideCanvas(h.target);
              const N = {
                value(M) {
                  (W.userValue = M.detail.value ?? ''),
                    U.setValue(l, { value: W.userValue.toString() }),
                    (M.target.value = W.userValue);
                },
                formattedValue(M) {
                  const { formattedValue: J } = M.detail;
                  (W.formattedValue = J),
                    J != null &&
                      M.target !== document.activeElement &&
                      (M.target.value = J),
                    U.setValue(l, { formattedValue: J });
                },
                selRange(M) {
                  M.target.setSelectionRange(...M.detail.selRange);
                },
                charLimit: (M) => {
                  var T;
                  const { charLimit: J } = M.detail,
                    { target: m } = M;
                  if (J === 0) {
                    m.removeAttribute('maxLength');
                    return;
                  }
                  m.setAttribute('maxLength', J);
                  let G = W.userValue;
                  !G ||
                    G.length <= J ||
                    ((G = G.slice(0, J)),
                    (m.value = W.userValue = G),
                    U.setValue(l, { value: G }),
                    (T = this.linkService.eventBus) == null ||
                      T.dispatch('dispatcheventinsandbox', {
                        source: this,
                        detail: {
                          id: l,
                          name: 'Keystroke',
                          value: G,
                          willCommit: !0,
                          commitKey: 1,
                          selStart: m.selectionStart,
                          selEnd: m.selectionEnd,
                        },
                      }));
                },
              };
              this._dispatchEventFromSandbox(N, h);
            }),
            d.addEventListener('keydown', (h) => {
              var J;
              W.commitKey = 1;
              let N = -1;
              if (
                (h.key === 'Escape'
                  ? (N = 0)
                  : h.key === 'Enter' && !this.data.multiLine
                    ? (N = 2)
                    : h.key === 'Tab' && (W.commitKey = 3),
                N === -1)
              )
                return;
              const { value: M } = h.target;
              W.lastCommittedValue !== M &&
                ((W.lastCommittedValue = M),
                (W.userValue = M),
                (J = this.linkService.eventBus) == null ||
                  J.dispatch('dispatcheventinsandbox', {
                    source: this,
                    detail: {
                      id: l,
                      name: 'Keystroke',
                      value: M,
                      willCommit: !0,
                      commitKey: N,
                      selStart: h.target.selectionStart,
                      selEnd: h.target.selectionEnd,
                    },
                  }));
            });
          const i = a;
          (a = null),
            d.addEventListener('blur', (h) => {
              var M, J;
              if (!W.focused || !h.relatedTarget) return;
              ((M = this.data.actions) != null && M.Blur) || (W.focused = !1);
              const { value: N } = h.target;
              (W.userValue = N),
                W.lastCommittedValue !== N &&
                  ((J = this.linkService.eventBus) == null ||
                    J.dispatch('dispatcheventinsandbox', {
                      source: this,
                      detail: {
                        id: l,
                        name: 'Keystroke',
                        value: N,
                        willCommit: !0,
                        commitKey: W.commitKey,
                        selStart: h.target.selectionStart,
                        selEnd: h.target.selectionEnd,
                      },
                    })),
                i(h);
            }),
            (t = this.data.actions) != null &&
              t.Keystroke &&
              d.addEventListener('beforeinput', (h) => {
                var X;
                W.lastCommittedValue = null;
                const { data: N, target: M } = h,
                  { value: J, selectionStart: m, selectionEnd: G } = M;
                let T = m,
                  u = G;
                switch (h.inputType) {
                  case 'deleteWordBackward': {
                    const S = J.substring(0, m).match(/\w*[^\w]*$/);
                    S && (T -= S[0].length);
                    break;
                  }
                  case 'deleteWordForward': {
                    const S = J.substring(m).match(/^[^\w]*\w*/);
                    S && (u += S[0].length);
                    break;
                  }
                  case 'deleteContentBackward':
                    m === G && (T -= 1);
                    break;
                  case 'deleteContentForward':
                    m === G && (u += 1);
                    break;
                }
                h.preventDefault(),
                  (X = this.linkService.eventBus) == null ||
                    X.dispatch('dispatcheventinsandbox', {
                      source: this,
                      detail: {
                        id: l,
                        name: 'Keystroke',
                        value: J,
                        change: N || '',
                        willCommit: !1,
                        selStart: T,
                        selEnd: u,
                      },
                    });
              }),
            this._setEventListeners(
              d,
              W,
              [
                ['focus', 'Focus'],
                ['blur', 'Blur'],
                ['mousedown', 'Mouse Down'],
                ['mouseenter', 'Mouse Enter'],
                ['mouseleave', 'Mouse Exit'],
                ['mouseup', 'Mouse Up'],
              ],
              (h) => h.target.value,
            );
        }
        if ((a && d.addEventListener('blur', a), this.data.comb)) {
          const h = (this.data.rect[2] - this.data.rect[0]) / n;
          d.classList.add('comb'),
            (d.style.letterSpacing = `calc(${h}px * var(--scale-factor) - 1ch)`);
        }
      } else
        (d = document.createElement('div')),
          (d.textContent = this.data.fieldValue),
          (d.style.verticalAlign = 'middle'),
          (d.style.display = 'table-cell'),
          this.data.hasOwnCanvas && (d.hidden = !0);
      return (
        this._setTextStyle(d),
        this._setBackgroundColor(d),
        this._setDefaultPropertiesFromJS(d),
        this.container.append(d),
        this.container
      );
    }
  }
  class AJ extends Yt {
    constructor(U) {
      super(U, { isRenderable: !!U.data.hasOwnCanvas });
    }
  }
  class _J extends Yt {
    constructor(U) {
      super(U, { isRenderable: U.renderForms });
    }
    render() {
      const U = this.annotationStorage,
        l = this.data,
        d = l.id;
      let Z = U.getValue(d, { value: l.exportValue === l.fieldValue }).value;
      typeof Z == 'string' && ((Z = Z !== 'Off'), U.setValue(d, { value: Z })),
        this.container.classList.add('buttonWidgetAnnotation', 'checkBox');
      const t = document.createElement('input');
      return (
        Xt.add(t),
        t.setAttribute('data-element-id', d),
        (t.disabled = l.readOnly),
        this._setRequired(t, this.data.required),
        (t.type = 'checkbox'),
        (t.name = l.fieldName),
        Z && t.setAttribute('checked', !0),
        t.setAttribute('exportValue', l.exportValue),
        (t.tabIndex = Js),
        t.addEventListener('change', (F) => {
          const { name: c, checked: n } = F.target;
          for (const V of this._getElementsByName(c, d)) {
            const W = n && V.exportValue === l.exportValue;
            V.domElement && (V.domElement.checked = W),
              U.setValue(V.id, { value: W });
          }
          U.setValue(d, { value: n });
        }),
        t.addEventListener('resetform', (F) => {
          const c = l.defaultFieldValue || 'Off';
          F.target.checked = c === l.exportValue;
        }),
        this.enableScripting &&
          this.hasJSActions &&
          (t.addEventListener('updatefromsandbox', (F) => {
            const c = {
              value(n) {
                (n.target.checked = n.detail.value !== 'Off'),
                  U.setValue(d, { value: n.target.checked });
              },
            };
            this._dispatchEventFromSandbox(c, F);
          }),
          this._setEventListeners(
            t,
            null,
            [
              ['change', 'Validate'],
              ['change', 'Action'],
              ['focus', 'Focus'],
              ['blur', 'Blur'],
              ['mousedown', 'Mouse Down'],
              ['mouseenter', 'Mouse Enter'],
              ['mouseleave', 'Mouse Exit'],
              ['mouseup', 'Mouse Up'],
            ],
            (F) => F.target.checked,
          )),
        this._setBackgroundColor(t),
        this._setDefaultPropertiesFromJS(t),
        this.container.append(t),
        this.container
      );
    }
  }
  class Fe extends Yt {
    constructor(U) {
      super(U, { isRenderable: U.renderForms });
    }
    render() {
      this.container.classList.add('buttonWidgetAnnotation', 'radioButton');
      const U = this.annotationStorage,
        l = this.data,
        d = l.id;
      let Z = U.getValue(d, { value: l.fieldValue === l.buttonValue }).value;
      if (
        (typeof Z == 'string' &&
          ((Z = Z !== l.buttonValue), U.setValue(d, { value: Z })),
        Z)
      )
        for (const F of this._getElementsByName(l.fieldName, d))
          U.setValue(F.id, { value: !1 });
      const t = document.createElement('input');
      if (
        (Xt.add(t),
        t.setAttribute('data-element-id', d),
        (t.disabled = l.readOnly),
        this._setRequired(t, this.data.required),
        (t.type = 'radio'),
        (t.name = l.fieldName),
        Z && t.setAttribute('checked', !0),
        (t.tabIndex = Js),
        t.addEventListener('change', (F) => {
          const { name: c, checked: n } = F.target;
          for (const V of this._getElementsByName(c, d))
            U.setValue(V.id, { value: !1 });
          U.setValue(d, { value: n });
        }),
        t.addEventListener('resetform', (F) => {
          const c = l.defaultFieldValue;
          F.target.checked = c != null && c === l.buttonValue;
        }),
        this.enableScripting && this.hasJSActions)
      ) {
        const F = l.buttonValue;
        t.addEventListener('updatefromsandbox', (c) => {
          const n = {
            value: (V) => {
              const W = F === V.detail.value;
              for (const a of this._getElementsByName(V.target.name)) {
                const i = W && a.id === d;
                a.domElement && (a.domElement.checked = i),
                  U.setValue(a.id, { value: i });
              }
            },
          };
          this._dispatchEventFromSandbox(n, c);
        }),
          this._setEventListeners(
            t,
            null,
            [
              ['change', 'Validate'],
              ['change', 'Action'],
              ['focus', 'Focus'],
              ['blur', 'Blur'],
              ['mousedown', 'Mouse Down'],
              ['mouseenter', 'Mouse Enter'],
              ['mouseleave', 'Mouse Exit'],
              ['mouseup', 'Mouse Up'],
            ],
            (c) => c.target.checked,
          );
      }
      return (
        this._setBackgroundColor(t),
        this._setDefaultPropertiesFromJS(t),
        this.container.append(t),
        this.container
      );
    }
  }
  class qJ extends te {
    constructor(U) {
      super(U, { ignoreBorder: U.data.hasAppearance });
    }
    render() {
      const U = super.render();
      U.classList.add('buttonWidgetAnnotation', 'pushButton');
      const l = U.lastChild;
      return (
        this.enableScripting &&
          this.hasJSActions &&
          l &&
          (this._setDefaultPropertiesFromJS(l),
          l.addEventListener('updatefromsandbox', (d) => {
            this._dispatchEventFromSandbox({}, d);
          })),
        U
      );
    }
  }
  class $J extends Yt {
    constructor(U) {
      super(U, { isRenderable: U.renderForms });
    }
    render() {
      this.container.classList.add('choiceWidgetAnnotation');
      const U = this.annotationStorage,
        l = this.data.id,
        d = U.getValue(l, { value: this.data.fieldValue }),
        Z = document.createElement('select');
      Xt.add(Z),
        Z.setAttribute('data-element-id', l),
        (Z.disabled = this.data.readOnly),
        this._setRequired(Z, this.data.required),
        (Z.name = this.data.fieldName),
        (Z.tabIndex = Js);
      let t = this.data.combo && this.data.options.length > 0;
      this.data.combo ||
        ((Z.size = this.data.options.length),
        this.data.multiSelect && (Z.multiple = !0)),
        Z.addEventListener('resetform', (W) => {
          const a = this.data.defaultFieldValue;
          for (const i of Z.options) i.selected = i.value === a;
        });
      for (const W of this.data.options) {
        const a = document.createElement('option');
        (a.textContent = W.displayValue),
          (a.value = W.exportValue),
          d.value.includes(W.exportValue) &&
            (a.setAttribute('selected', !0), (t = !1)),
          Z.append(a);
      }
      let F = null;
      if (t) {
        const W = document.createElement('option');
        (W.value = ' '),
          W.setAttribute('hidden', !0),
          W.setAttribute('selected', !0),
          Z.prepend(W),
          (F = () => {
            W.remove(), Z.removeEventListener('input', F), (F = null);
          }),
          Z.addEventListener('input', F);
      }
      const c = (W) => {
        const a = W ? 'value' : 'textContent',
          { options: i, multiple: h } = Z;
        return h
          ? Array.prototype.filter.call(i, (N) => N.selected).map((N) => N[a])
          : i.selectedIndex === -1
            ? null
            : i[i.selectedIndex][a];
      };
      let n = c(!1);
      const V = (W) => {
        const a = W.target.options;
        return Array.prototype.map.call(a, (i) => ({
          displayValue: i.textContent,
          exportValue: i.value,
        }));
      };
      return (
        this.enableScripting && this.hasJSActions
          ? (Z.addEventListener('updatefromsandbox', (W) => {
              const a = {
                value(i) {
                  F == null || F();
                  const h = i.detail.value,
                    N = new Set(Array.isArray(h) ? h : [h]);
                  for (const M of Z.options) M.selected = N.has(M.value);
                  U.setValue(l, { value: c(!0) }), (n = c(!1));
                },
                multipleSelection(i) {
                  Z.multiple = !0;
                },
                remove(i) {
                  const h = Z.options,
                    N = i.detail.remove;
                  (h[N].selected = !1),
                    Z.remove(N),
                    h.length > 0 &&
                      Array.prototype.findIndex.call(h, (J) => J.selected) ===
                        -1 &&
                      (h[0].selected = !0),
                    U.setValue(l, { value: c(!0), items: V(i) }),
                    (n = c(!1));
                },
                clear(i) {
                  for (; Z.length !== 0; ) Z.remove(0);
                  U.setValue(l, { value: null, items: [] }), (n = c(!1));
                },
                insert(i) {
                  const {
                      index: h,
                      displayValue: N,
                      exportValue: M,
                    } = i.detail.insert,
                    J = Z.children[h],
                    m = document.createElement('option');
                  (m.textContent = N),
                    (m.value = M),
                    J ? J.before(m) : Z.append(m),
                    U.setValue(l, { value: c(!0), items: V(i) }),
                    (n = c(!1));
                },
                items(i) {
                  const { items: h } = i.detail;
                  for (; Z.length !== 0; ) Z.remove(0);
                  for (const N of h) {
                    const { displayValue: M, exportValue: J } = N,
                      m = document.createElement('option');
                    (m.textContent = M), (m.value = J), Z.append(m);
                  }
                  Z.options.length > 0 && (Z.options[0].selected = !0),
                    U.setValue(l, { value: c(!0), items: V(i) }),
                    (n = c(!1));
                },
                indices(i) {
                  const h = new Set(i.detail.indices);
                  for (const N of i.target.options) N.selected = h.has(N.index);
                  U.setValue(l, { value: c(!0) }), (n = c(!1));
                },
                editable(i) {
                  i.target.disabled = !i.detail.editable;
                },
              };
              this._dispatchEventFromSandbox(a, W);
            }),
            Z.addEventListener('input', (W) => {
              var h;
              const a = c(!0),
                i = c(!1);
              U.setValue(l, { value: a }),
                W.preventDefault(),
                (h = this.linkService.eventBus) == null ||
                  h.dispatch('dispatcheventinsandbox', {
                    source: this,
                    detail: {
                      id: l,
                      name: 'Keystroke',
                      value: n,
                      change: i,
                      changeEx: a,
                      willCommit: !1,
                      commitKey: 1,
                      keyDown: !1,
                    },
                  });
            }),
            this._setEventListeners(
              Z,
              null,
              [
                ['focus', 'Focus'],
                ['blur', 'Blur'],
                ['mousedown', 'Mouse Down'],
                ['mouseenter', 'Mouse Enter'],
                ['mouseleave', 'Mouse Exit'],
                ['mouseup', 'Mouse Up'],
                ['input', 'Action'],
                ['input', 'Validate'],
              ],
              (W) => W.target.value,
            ))
          : Z.addEventListener('input', function (W) {
              U.setValue(l, { value: c(!0) });
            }),
        this.data.combo && this._setTextStyle(Z),
        this._setBackgroundColor(Z),
        this._setDefaultPropertiesFromJS(Z),
        this.container.append(Z),
        this.container
      );
    }
  }
  class GN extends Sl {
    constructor(U) {
      const { data: l, elements: d } = U;
      super(U, { isRenderable: Sl._hasPopupData(l) }),
        (this.elements = d),
        (this.popup = null);
    }
    render() {
      this.container.classList.add('popupAnnotation');
      const U = (this.popup = new lG({
          container: this.container,
          color: this.data.color,
          titleObj: this.data.titleObj,
          modificationDate: this.data.modificationDate,
          contentsObj: this.data.contentsObj,
          richText: this.data.richText,
          rect: this.data.rect,
          parentRect: this.data.parentRect || null,
          parent: this.parent,
          elements: this.elements,
          open: this.data.open,
        })),
        l = [];
      for (const d of this.elements)
        (d.popup = U), l.push(d.data.id), d.addHighlightArea();
      return (
        this.container.setAttribute(
          'aria-controls',
          l.map((d) => `${Tb}${d}`).join(','),
        ),
        this.container
      );
    }
  }
  class lG {
    constructor({
      container: U,
      color: l,
      elements: d,
      titleObj: Z,
      modificationDate: t,
      contentsObj: F,
      richText: c,
      parent: n,
      rect: V,
      parentRect: W,
      open: a,
    }) {
      R(this, _0);
      R(this, gQ);
      R(this, wa);
      R(this, xa);
      R(this, ja);
      R(this, Oa);
      R(this, q0);
      R(this, $0);
      R(this, KQ);
      R(this, P0, b(this, ja, Pm).bind(this));
      R(this, Ca, b(this, KQ, Th).bind(this));
      R(this, ra, b(this, $0, XR).bind(this));
      R(this, f0, b(this, q0, SR).bind(this));
      R(this, nF, null);
      R(this, Ml, null);
      R(this, _d, null);
      R(this, VF, null);
      R(this, wQ, null);
      R(this, xQ, null);
      R(this, A0, null);
      R(this, qd, !1);
      R(this, HU, null);
      R(this, $d, null);
      R(this, jQ, null);
      R(this, lZ, null);
      R(this, OQ, null);
      R(this, WF, null);
      R(this, aF, !1);
      var i;
      e(this, Ml, U),
        e(this, OQ, Z),
        e(this, _d, F),
        e(this, lZ, c),
        e(this, xQ, n),
        e(this, nF, l),
        e(this, jQ, V),
        e(this, A0, W),
        e(this, wQ, d),
        e(this, VF, ob.toDateObject(t)),
        (this.trigger = d.flatMap((h) => h.getElementsToTriggerPopup()));
      for (const h of this.trigger)
        h.addEventListener('click', s(this, f0)),
          h.addEventListener('mouseenter', s(this, ra)),
          h.addEventListener('mouseleave', s(this, Ca)),
          h.classList.add('popupTriggerArea');
      for (const h of d)
        (i = h.container) == null || i.addEventListener('keydown', s(this, P0));
      (s(this, Ml).hidden = !0), a && b(this, q0, SR).call(this);
    }
    render() {
      if (s(this, HU)) return;
      const U = e(this, HU, document.createElement('div'));
      if (((U.className = 'popup'), s(this, nF))) {
        const t = (U.style.outlineColor = g.makeHexColor(...s(this, nF)));
        CSS.supports('background-color', 'color-mix(in srgb, red 30%, white)')
          ? (U.style.backgroundColor = `color-mix(in srgb, ${t} 30%, white)`)
          : (U.style.backgroundColor = g.makeHexColor(
              ...s(this, nF).map((c) => Math.floor(0.7 * (255 - c) + c)),
            ));
      }
      const l = document.createElement('span');
      l.className = 'header';
      const d = document.createElement('h1');
      if (
        (l.append(d),
        ({ dir: d.dir, str: d.textContent } = s(this, OQ)),
        U.append(l),
        s(this, VF))
      ) {
        const t = document.createElement('span');
        t.classList.add('popupDate'),
          t.setAttribute('data-l10n-id', 'pdfjs-annotation-date-string'),
          t.setAttribute(
            'data-l10n-args',
            JSON.stringify({
              date: s(this, VF).toLocaleDateString(),
              time: s(this, VF).toLocaleTimeString(),
            }),
          ),
          l.append(t);
      }
      const Z = s(this, _0, TR);
      if (Z)
        Ze.render({ xfaHtml: Z, intent: 'richText', div: U }),
          U.lastChild.classList.add('richText', 'popupContent');
      else {
        const t = this._formatContents(s(this, _d));
        U.append(t);
      }
      s(this, Ml).append(U);
    }
    _formatContents({ str: U, dir: l }) {
      const d = document.createElement('p');
      d.classList.add('popupContent'), (d.dir = l);
      const Z = U.split(/(?:\r\n?|\n)/);
      for (let t = 0, F = Z.length; t < F; ++t) {
        const c = Z[t];
        d.append(document.createTextNode(c)),
          t < F - 1 && d.append(document.createElement('br'));
      }
      return d;
    }
    updateEdited({ rect: U, popupContent: l }) {
      var d;
      s(this, WF) ||
        e(this, WF, { contentsObj: s(this, _d), richText: s(this, lZ) }),
        U && e(this, $d, null),
        l && (e(this, lZ, b(this, xa, Hm).call(this, l)), e(this, _d, null)),
        (d = s(this, HU)) == null || d.remove(),
        e(this, HU, null);
    }
    resetEdited() {
      var U;
      s(this, WF) &&
        (({ contentsObj: hU(this, _d)._, richText: hU(this, lZ)._ } = s(
          this,
          WF,
        )),
        e(this, WF, null),
        (U = s(this, HU)) == null || U.remove(),
        e(this, HU, null),
        e(this, $d, null));
    }
    forceHide() {
      e(this, aF, this.isVisible), s(this, aF) && (s(this, Ml).hidden = !0);
    }
    maybeShow() {
      s(this, aF) &&
        (s(this, HU) || b(this, $0, XR).call(this),
        e(this, aF, !1),
        (s(this, Ml).hidden = !1));
    }
    get isVisible() {
      return s(this, Ml).hidden === !1;
    }
  }
  (P0 = new WeakMap()),
    (Ca = new WeakMap()),
    (ra = new WeakMap()),
    (f0 = new WeakMap()),
    (nF = new WeakMap()),
    (Ml = new WeakMap()),
    (_d = new WeakMap()),
    (VF = new WeakMap()),
    (wQ = new WeakMap()),
    (xQ = new WeakMap()),
    (A0 = new WeakMap()),
    (qd = new WeakMap()),
    (HU = new WeakMap()),
    ($d = new WeakMap()),
    (jQ = new WeakMap()),
    (lZ = new WeakMap()),
    (OQ = new WeakMap()),
    (WF = new WeakMap()),
    (aF = new WeakMap()),
    (_0 = new WeakSet()),
    (TR = function () {
      const U = s(this, lZ),
        l = s(this, _d);
      return (
        (U != null &&
          U.str &&
          (!(l != null && l.str) || l.str === U.str) &&
          s(this, lZ).html) ||
        null
      );
    }),
    (gQ = new WeakSet()),
    (Gh = function () {
      var U, l, d;
      return (
        ((d =
          (l = (U = s(this, _0, TR)) == null ? void 0 : U.attributes) == null
            ? void 0
            : l.style) == null
          ? void 0
          : d.fontSize) || 0
      );
    }),
    (wa = new WeakSet()),
    (vm = function () {
      var U, l, d;
      return (
        ((d =
          (l = (U = s(this, _0, TR)) == null ? void 0 : U.attributes) == null
            ? void 0
            : l.style) == null
          ? void 0
          : d.color) || null
      );
    }),
    (xa = new WeakSet()),
    (Hm = function (U) {
      const l = [],
        d = {
          str: U,
          html: {
            name: 'div',
            attributes: { dir: 'auto' },
            children: [{ name: 'p', children: l }],
          },
        },
        Z = {
          style: {
            color: s(this, wa, vm),
            fontSize: s(this, gQ, Gh)
              ? `calc(${s(this, gQ, Gh)}px * var(--scale-factor))`
              : '',
          },
        };
      for (const t of U.split(`
`))
        l.push({ name: 'span', value: t, attributes: Z });
      return d;
    }),
    (ja = new WeakSet()),
    (Pm = function (U) {
      U.altKey ||
        U.shiftKey ||
        U.ctrlKey ||
        U.metaKey ||
        ((U.key === 'Enter' || (U.key === 'Escape' && s(this, qd))) &&
          b(this, q0, SR).call(this));
    }),
    (Oa = new WeakSet()),
    (fm = function () {
      if (s(this, $d) !== null) return;
      const {
        page: { view: U },
        viewport: {
          rawDims: { pageWidth: l, pageHeight: d, pageX: Z, pageY: t },
        },
      } = s(this, xQ);
      let F = !!s(this, A0),
        c = F ? s(this, A0) : s(this, jQ);
      for (const N of s(this, wQ))
        if (!c || g.intersect(N.data.rect, c) !== null) {
          (c = N.data.rect), (F = !0);
          break;
        }
      const n = g.normalizeRect([
          c[0],
          U[3] - c[1] + U[1],
          c[2],
          U[3] - c[3] + U[1],
        ]),
        V = 5,
        W = F ? c[2] - c[0] + V : 0,
        a = n[0] + W,
        i = n[1];
      e(this, $d, [(100 * (a - Z)) / l, (100 * (i - t)) / d]);
      const { style: h } = s(this, Ml);
      (h.left = `${s(this, $d)[0]}%`), (h.top = `${s(this, $d)[1]}%`);
    }),
    (q0 = new WeakSet()),
    (SR = function () {
      e(this, qd, !s(this, qd)),
        s(this, qd)
          ? (b(this, $0, XR).call(this),
            s(this, Ml).addEventListener('click', s(this, f0)),
            s(this, Ml).addEventListener('keydown', s(this, P0)))
          : (b(this, KQ, Th).call(this),
            s(this, Ml).removeEventListener('click', s(this, f0)),
            s(this, Ml).removeEventListener('keydown', s(this, P0)));
    }),
    ($0 = new WeakSet()),
    (XR = function () {
      s(this, HU) || this.render(),
        this.isVisible
          ? s(this, qd) && s(this, Ml).classList.add('focused')
          : (b(this, Oa, fm).call(this),
            (s(this, Ml).hidden = !1),
            (s(this, Ml).style.zIndex =
              parseInt(s(this, Ml).style.zIndex) + 1e3));
    }),
    (KQ = new WeakSet()),
    (Th = function () {
      s(this, Ml).classList.remove('focused'),
        !(s(this, qd) || !this.isVisible) &&
          ((s(this, Ml).hidden = !0),
          (s(this, Ml).style.zIndex =
            parseInt(s(this, Ml).style.zIndex) - 1e3));
    });
  class ce extends Sl {
    constructor(U) {
      super(U, { isRenderable: !0, ignoreBorder: !0 }),
        (this.textContent = U.data.textContent),
        (this.textPosition = U.data.textPosition),
        (this.annotationEditorType = ll.FREETEXT);
    }
    render() {
      if (
        (this.container.classList.add('freeTextAnnotation'), this.textContent)
      ) {
        const U = document.createElement('div');
        U.classList.add('annotationTextContent'),
          U.setAttribute('role', 'comment');
        for (const l of this.textContent) {
          const d = document.createElement('span');
          (d.textContent = l), U.append(d);
        }
        this.container.append(U);
      }
      return (
        !this.data.popupRef && this.hasPopupData && this._createPopup(),
        this._editOnDoubleClick(),
        this.container
      );
    }
    get _isEditable() {
      return this.data.hasOwnCanvas;
    }
  }
  class UG extends Sl {
    constructor(l) {
      super(l, { isRenderable: !0, ignoreBorder: !0 });
      R(this, vQ, null);
    }
    render() {
      this.container.classList.add('lineAnnotation');
      const l = this.data,
        { width: d, height: Z } = zd(l.rect),
        t = this.svgFactory.create(d, Z, !0),
        F = e(this, vQ, this.svgFactory.createElement('svg:line'));
      return (
        F.setAttribute('x1', l.rect[2] - l.lineCoordinates[0]),
        F.setAttribute('y1', l.rect[3] - l.lineCoordinates[1]),
        F.setAttribute('x2', l.rect[2] - l.lineCoordinates[2]),
        F.setAttribute('y2', l.rect[3] - l.lineCoordinates[3]),
        F.setAttribute('stroke-width', l.borderStyle.width || 1),
        F.setAttribute('stroke', 'transparent'),
        F.setAttribute('fill', 'transparent'),
        t.append(F),
        this.container.append(t),
        !l.popupRef && this.hasPopupData && this._createPopup(),
        this.container
      );
    }
    getElementsToTriggerPopup() {
      return s(this, vQ);
    }
    addHighlightArea() {
      this.container.classList.add('highlightArea');
    }
  }
  vQ = new WeakMap();
  class dG extends Sl {
    constructor(l) {
      super(l, { isRenderable: !0, ignoreBorder: !0 });
      R(this, HQ, null);
    }
    render() {
      this.container.classList.add('squareAnnotation');
      const l = this.data,
        { width: d, height: Z } = zd(l.rect),
        t = this.svgFactory.create(d, Z, !0),
        F = l.borderStyle.width,
        c = e(this, HQ, this.svgFactory.createElement('svg:rect'));
      return (
        c.setAttribute('x', F / 2),
        c.setAttribute('y', F / 2),
        c.setAttribute('width', d - F),
        c.setAttribute('height', Z - F),
        c.setAttribute('stroke-width', F || 1),
        c.setAttribute('stroke', 'transparent'),
        c.setAttribute('fill', 'transparent'),
        t.append(c),
        this.container.append(t),
        !l.popupRef && this.hasPopupData && this._createPopup(),
        this.container
      );
    }
    getElementsToTriggerPopup() {
      return s(this, HQ);
    }
    addHighlightArea() {
      this.container.classList.add('highlightArea');
    }
  }
  HQ = new WeakMap();
  class ZG extends Sl {
    constructor(l) {
      super(l, { isRenderable: !0, ignoreBorder: !0 });
      R(this, PQ, null);
    }
    render() {
      this.container.classList.add('circleAnnotation');
      const l = this.data,
        { width: d, height: Z } = zd(l.rect),
        t = this.svgFactory.create(d, Z, !0),
        F = l.borderStyle.width,
        c = e(this, PQ, this.svgFactory.createElement('svg:ellipse'));
      return (
        c.setAttribute('cx', d / 2),
        c.setAttribute('cy', Z / 2),
        c.setAttribute('rx', d / 2 - F / 2),
        c.setAttribute('ry', Z / 2 - F / 2),
        c.setAttribute('stroke-width', F || 1),
        c.setAttribute('stroke', 'transparent'),
        c.setAttribute('fill', 'transparent'),
        t.append(c),
        this.container.append(t),
        !l.popupRef && this.hasPopupData && this._createPopup(),
        this.container
      );
    }
    getElementsToTriggerPopup() {
      return s(this, PQ);
    }
    addHighlightArea() {
      this.container.classList.add('highlightArea');
    }
  }
  PQ = new WeakMap();
  class se extends Sl {
    constructor(l) {
      super(l, { isRenderable: !0, ignoreBorder: !0 });
      R(this, fQ, null);
      (this.containerClassName = 'polylineAnnotation'),
        (this.svgElementName = 'svg:polyline');
    }
    render() {
      this.container.classList.add(this.containerClassName);
      const {
        data: { rect: l, vertices: d, borderStyle: Z, popupRef: t },
      } = this;
      if (!d) return this.container;
      const { width: F, height: c } = zd(l),
        n = this.svgFactory.create(F, c, !0);
      let V = [];
      for (let a = 0, i = d.length; a < i; a += 2) {
        const h = d[a] - l[0],
          N = l[3] - d[a + 1];
        V.push(`${h},${N}`);
      }
      V = V.join(' ');
      const W = e(this, fQ, this.svgFactory.createElement(this.svgElementName));
      return (
        W.setAttribute('points', V),
        W.setAttribute('stroke-width', Z.width || 1),
        W.setAttribute('stroke', 'transparent'),
        W.setAttribute('fill', 'transparent'),
        n.append(W),
        this.container.append(n),
        !t && this.hasPopupData && this._createPopup(),
        this.container
      );
    }
    getElementsToTriggerPopup() {
      return s(this, fQ);
    }
    addHighlightArea() {
      this.container.classList.add('highlightArea');
    }
  }
  fQ = new WeakMap();
  class tG extends se {
    constructor(U) {
      super(U),
        (this.containerClassName = 'polygonAnnotation'),
        (this.svgElementName = 'svg:polygon');
    }
  }
  class FG extends Sl {
    constructor(U) {
      super(U, { isRenderable: !0, ignoreBorder: !0 });
    }
    render() {
      return (
        this.container.classList.add('caretAnnotation'),
        !this.data.popupRef && this.hasPopupData && this._createPopup(),
        this.container
      );
    }
  }
  class Qe extends Sl {
    constructor(l) {
      super(l, { isRenderable: !0, ignoreBorder: !0 });
      R(this, AQ, []);
      (this.containerClassName = 'inkAnnotation'),
        (this.svgElementName = 'svg:polyline'),
        (this.annotationEditorType = ll.INK);
    }
    render() {
      this.container.classList.add(this.containerClassName);
      const {
          data: { rect: l, inkLists: d, borderStyle: Z, popupRef: t },
        } = this,
        { width: F, height: c } = zd(l),
        n = this.svgFactory.create(F, c, !0);
      for (const V of d) {
        let W = [];
        for (let i = 0, h = V.length; i < h; i += 2) {
          const N = V[i] - l[0],
            M = l[3] - V[i + 1];
          W.push(`${N},${M}`);
        }
        W = W.join(' ');
        const a = this.svgFactory.createElement(this.svgElementName);
        s(this, AQ).push(a),
          a.setAttribute('points', W),
          a.setAttribute('stroke-width', Z.width || 1),
          a.setAttribute('stroke', 'transparent'),
          a.setAttribute('fill', 'transparent'),
          !t && this.hasPopupData && this._createPopup(),
          n.append(a);
      }
      return this.container.append(n), this.container;
    }
    getElementsToTriggerPopup() {
      return s(this, AQ);
    }
    addHighlightArea() {
      this.container.classList.add('highlightArea');
    }
  }
  AQ = new WeakMap();
  class cG extends Sl {
    constructor(U) {
      super(U, {
        isRenderable: !0,
        ignoreBorder: !0,
        createQuadrilaterals: !0,
      });
    }
    render() {
      return (
        !this.data.popupRef && this.hasPopupData && this._createPopup(),
        this.container.classList.add('highlightAnnotation'),
        this.container
      );
    }
  }
  class sG extends Sl {
    constructor(U) {
      super(U, {
        isRenderable: !0,
        ignoreBorder: !0,
        createQuadrilaterals: !0,
      });
    }
    render() {
      return (
        !this.data.popupRef && this.hasPopupData && this._createPopup(),
        this.container.classList.add('underlineAnnotation'),
        this.container
      );
    }
  }
  class QG extends Sl {
    constructor(U) {
      super(U, {
        isRenderable: !0,
        ignoreBorder: !0,
        createQuadrilaterals: !0,
      });
    }
    render() {
      return (
        !this.data.popupRef && this.hasPopupData && this._createPopup(),
        this.container.classList.add('squigglyAnnotation'),
        this.container
      );
    }
  }
  class nG extends Sl {
    constructor(U) {
      super(U, {
        isRenderable: !0,
        ignoreBorder: !0,
        createQuadrilaterals: !0,
      });
    }
    render() {
      return (
        !this.data.popupRef && this.hasPopupData && this._createPopup(),
        this.container.classList.add('strikeoutAnnotation'),
        this.container
      );
    }
  }
  class ne extends Sl {
    constructor(U) {
      super(U, { isRenderable: !0, ignoreBorder: !0 });
    }
    render() {
      return (
        this.container.classList.add('stampAnnotation'),
        !this.data.popupRef && this.hasPopupData && this._createPopup(),
        this.container
      );
    }
  }
  class VG extends Sl {
    constructor(l) {
      var Z;
      super(l, { isRenderable: !0 });
      R(this, qQ);
      R(this, _Q, null);
      const { file: d } = this.data;
      (this.filename = d.filename),
        (this.content = d.content),
        (Z = this.linkService.eventBus) == null ||
          Z.dispatch('fileattachmentannotation', { source: this, ...d });
    }
    render() {
      this.container.classList.add('fileAttachmentAnnotation');
      const { container: l, data: d } = this;
      let Z;
      d.hasAppearance || d.fillAlpha === 0
        ? (Z = document.createElement('div'))
        : ((Z = document.createElement('img')),
          (Z.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(d.name) ? 'paperclip' : 'pushpin'}.svg`),
          d.fillAlpha &&
            d.fillAlpha < 1 &&
            (Z.style = `filter: opacity(${Math.round(d.fillAlpha * 100)}%);`)),
        Z.addEventListener('dblclick', b(this, qQ, Sh).bind(this)),
        e(this, _Q, Z);
      const { isMac: t } = nU.platform;
      return (
        l.addEventListener('keydown', (F) => {
          F.key === 'Enter' &&
            (t ? F.metaKey : F.ctrlKey) &&
            b(this, qQ, Sh).call(this);
        }),
        !d.popupRef && this.hasPopupData
          ? this._createPopup()
          : Z.classList.add('popupTriggerArea'),
        l.append(Z),
        l
      );
    }
    getElementsToTriggerPopup() {
      return s(this, _Q);
    }
    addHighlightArea() {
      this.container.classList.add('highlightArea');
    }
  }
  (_Q = new WeakMap()),
    (qQ = new WeakSet()),
    (Sh = function () {
      var l;
      (l = this.downloadManager) == null ||
        l.openOrDownloadData(this.content, this.filename);
    });
  let WG =
    ((Vm = class {
      constructor({
        div: U,
        accessibilityManager: l,
        annotationCanvasMap: d,
        annotationEditorUIManager: Z,
        page: t,
        viewport: F,
      }) {
        R(this, ga);
        R(this, ln);
        R(this, $Q, null);
        R(this, iF, null);
        R(this, lc, new Map());
        (this.div = U),
          e(this, $Q, l),
          e(this, iF, d),
          (this.page = t),
          (this.viewport = F),
          (this.zIndex = 0),
          (this._annotationEditorUIManager = Z);
      }
      async render(U) {
        var F;
        const { annotations: l } = U,
          d = this.div;
        Tt(d, this.viewport);
        const Z = new Map(),
          t = {
            data: null,
            layer: d,
            linkService: U.linkService,
            downloadManager: U.downloadManager,
            imageResourcesPath: U.imageResourcesPath || '',
            renderForms: U.renderForms !== !1,
            svgFactory: new dN(),
            annotationStorage: U.annotationStorage || new WN(),
            enableScripting: U.enableScripting === !0,
            hasJSActions: U.hasJSActions,
            fieldObjects: U.fieldObjects,
            parent: this,
            elements: null,
          };
        for (const c of l) {
          if (c.noHTML) continue;
          const n = c.annotationType === ol.POPUP;
          if (n) {
            const a = Z.get(c.id);
            if (!a) continue;
            t.elements = a;
          } else {
            const { width: a, height: i } = zd(c.rect);
            if (a <= 0 || i <= 0) continue;
          }
          t.data = c;
          const V = HJ.create(t);
          if (!V.isRenderable) continue;
          if (!n && c.popupRef) {
            const a = Z.get(c.popupRef);
            a ? a.push(V) : Z.set(c.popupRef, [V]);
          }
          const W = V.render();
          c.hidden && (W.style.visibility = 'hidden'),
            b(this, ga, Am).call(this, W, c.id),
            V.annotationEditorType > 0 &&
              (s(this, lc).set(V.data.id, V),
              (F = this._annotationEditorUIManager) == null ||
                F.renderAnnotationElement(V));
        }
        b(this, ln, Xh).call(this);
      }
      update({ viewport: U }) {
        const l = this.div;
        (this.viewport = U),
          Tt(l, { rotation: U.rotation }),
          b(this, ln, Xh).call(this),
          (l.hidden = !1);
      }
      getEditableAnnotations() {
        return Array.from(s(this, lc).values());
      }
      getEditableAnnotation(U) {
        return s(this, lc).get(U);
      }
    }),
    ($Q = new WeakMap()),
    (iF = new WeakMap()),
    (lc = new WeakMap()),
    (ga = new WeakSet()),
    (Am = function (U, l) {
      var Z;
      const d = U.firstChild || U;
      (d.id = `${Tb}${l}`),
        this.div.append(U),
        (Z = s(this, $Q)) == null || Z.moveElementInDOM(this.div, U, d, !1);
    }),
    (ln = new WeakSet()),
    (Xh = function () {
      if (!s(this, iF)) return;
      const U = this.div;
      for (const [l, d] of s(this, iF)) {
        const Z = U.querySelector(`[data-annotation-id="${l}"]`);
        if (!Z) continue;
        d.className = 'annotationContent';
        const { firstChild: t } = Z;
        t
          ? t.nodeName === 'CANVAS'
            ? t.replaceWith(d)
            : t.classList.contains('annotationContent')
              ? t.after(d)
              : t.before(d)
          : Z.append(d);
      }
      s(this, iF).clear();
    }),
    Vm);
  const pW = /\r\n?|\n/g,
    Vl = class Vl extends Fl {
      constructor(l) {
        super({ ...l, name: 'freeTextEditor' });
        R(this, Ka);
        R(this, va);
        R(this, Ha);
        R(this, dc);
        R(this, tc);
        R(this, Pa);
        R(this, fa);
        R(this, Un, this.editorDivBlur.bind(this));
        R(this, dn, this.editorDivFocus.bind(this));
        R(this, Zn, this.editorDivInput.bind(this));
        R(this, tn, this.editorDivKeydown.bind(this));
        R(this, Fn, this.editorDivPaste.bind(this));
        R(this, PU, void 0);
        R(this, JU, '');
        R(this, cn, `${this.id}-editor`);
        R(this, GU, void 0);
        R(this, Uc, null);
        e(this, PU, l.color || Vl._defaultColor || Fl._defaultLineColor),
          e(this, GU, l.fontSize || Vl._defaultFontSize);
      }
      static get _keyboardManager() {
        const l = Vl.prototype,
          d = (F) => F.isEmpty(),
          Z = Rs.TRANSLATE_SMALL,
          t = Rs.TRANSLATE_BIG;
        return Zl(
          this,
          '_keyboardManager',
          new is([
            [
              ['ctrl+s', 'mac+meta+s', 'ctrl+p', 'mac+meta+p'],
              l.commitOrRemove,
              { bubbles: !0 },
            ],
            [
              ['ctrl+Enter', 'mac+meta+Enter', 'Escape', 'mac+Escape'],
              l.commitOrRemove,
            ],
            [
              ['ArrowLeft', 'mac+ArrowLeft'],
              l._translateEmpty,
              { args: [-Z, 0], checker: d },
            ],
            [
              ['ctrl+ArrowLeft', 'mac+shift+ArrowLeft'],
              l._translateEmpty,
              { args: [-t, 0], checker: d },
            ],
            [
              ['ArrowRight', 'mac+ArrowRight'],
              l._translateEmpty,
              { args: [Z, 0], checker: d },
            ],
            [
              ['ctrl+ArrowRight', 'mac+shift+ArrowRight'],
              l._translateEmpty,
              { args: [t, 0], checker: d },
            ],
            [
              ['ArrowUp', 'mac+ArrowUp'],
              l._translateEmpty,
              { args: [0, -Z], checker: d },
            ],
            [
              ['ctrl+ArrowUp', 'mac+shift+ArrowUp'],
              l._translateEmpty,
              { args: [0, -t], checker: d },
            ],
            [
              ['ArrowDown', 'mac+ArrowDown'],
              l._translateEmpty,
              { args: [0, Z], checker: d },
            ],
            [
              ['ctrl+ArrowDown', 'mac+shift+ArrowDown'],
              l._translateEmpty,
              { args: [0, t], checker: d },
            ],
          ]),
        );
      }
      static initialize(l, d) {
        Fl.initialize(l, d, { strings: ['pdfjs-free-text-default-content'] });
        const Z = getComputedStyle(document.documentElement);
        this._internalPadding = parseFloat(
          Z.getPropertyValue('--freetext-padding'),
        );
      }
      static updateDefaultParams(l, d) {
        switch (l) {
          case P.FREETEXT_SIZE:
            Vl._defaultFontSize = d;
            break;
          case P.FREETEXT_COLOR:
            Vl._defaultColor = d;
            break;
        }
      }
      updateParams(l, d) {
        switch (l) {
          case P.FREETEXT_SIZE:
            b(this, Ka, _m).call(this, d);
            break;
          case P.FREETEXT_COLOR:
            b(this, va, qm).call(this, d);
            break;
        }
      }
      static get defaultPropertiesToUpdate() {
        return [
          [P.FREETEXT_SIZE, Vl._defaultFontSize],
          [P.FREETEXT_COLOR, Vl._defaultColor || Fl._defaultLineColor],
        ];
      }
      get propertiesToUpdate() {
        return [
          [P.FREETEXT_SIZE, s(this, GU)],
          [P.FREETEXT_COLOR, s(this, PU)],
        ];
      }
      _translateEmpty(l, d) {
        this._uiManager.translateSelectedEditors(l, d, !0);
      }
      getInitialTranslation() {
        const l = this.parentScale;
        return [
          -Vl._internalPadding * l,
          -(Vl._internalPadding + s(this, GU)) * l,
        ];
      }
      rebuild() {
        this.parent &&
          (super.rebuild(),
          this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
      }
      enableEditMode() {
        if (this.isInEditMode()) return;
        this.parent.setEditingState(!1),
          this.parent.updateToolbar(ll.FREETEXT),
          super.enableEditMode(),
          this.overlayDiv.classList.remove('enabled'),
          (this.editorDiv.contentEditable = !0),
          (this._isDraggable = !1),
          this.div.removeAttribute('aria-activedescendant');
        const l = this._uiManager._signal;
        this.editorDiv.addEventListener('keydown', s(this, tn), { signal: l }),
          this.editorDiv.addEventListener('focus', s(this, dn), { signal: l }),
          this.editorDiv.addEventListener('blur', s(this, Un), { signal: l }),
          this.editorDiv.addEventListener('input', s(this, Zn), { signal: l }),
          this.editorDiv.addEventListener('paste', s(this, Fn), { signal: l });
      }
      disableEditMode() {
        this.isInEditMode() &&
          (this.parent.setEditingState(!0),
          super.disableEditMode(),
          this.overlayDiv.classList.add('enabled'),
          (this.editorDiv.contentEditable = !1),
          this.div.setAttribute('aria-activedescendant', s(this, cn)),
          (this._isDraggable = !0),
          this.editorDiv.removeEventListener('keydown', s(this, tn)),
          this.editorDiv.removeEventListener('focus', s(this, dn)),
          this.editorDiv.removeEventListener('blur', s(this, Un)),
          this.editorDiv.removeEventListener('input', s(this, Zn)),
          this.editorDiv.removeEventListener('paste', s(this, Fn)),
          this.div.focus({ preventScroll: !0 }),
          (this.isEditing = !1),
          this.parent.div.classList.add('freetextEditing'));
      }
      focusin(l) {
        this._focusEventsAllowed &&
          (super.focusin(l),
          l.target !== this.editorDiv && this.editorDiv.focus());
      }
      onceAdded() {
        var l;
        this.width ||
          (this.enableEditMode(),
          this.editorDiv.focus(),
          (l = this._initialOptions) != null && l.isCentered && this.center(),
          (this._initialOptions = null));
      }
      isEmpty() {
        return !this.editorDiv || this.editorDiv.innerText.trim() === '';
      }
      remove() {
        (this.isEditing = !1),
          this.parent &&
            (this.parent.setEditingState(!0),
            this.parent.div.classList.add('freetextEditing')),
          super.remove();
      }
      commit() {
        if (!this.isInEditMode()) return;
        super.commit(), this.disableEditMode();
        const l = s(this, JU),
          d = e(this, JU, b(this, Ha, $m).call(this).trimEnd());
        if (l === d) return;
        const Z = (t) => {
          if ((e(this, JU, t), !t)) {
            this.remove();
            return;
          }
          b(this, tc, pR).call(this),
            this._uiManager.rebuild(this),
            b(this, dc, YR).call(this);
        };
        this.addCommands({
          cmd: () => {
            Z(d);
          },
          undo: () => {
            Z(l);
          },
          mustExec: !1,
        }),
          b(this, dc, YR).call(this);
      }
      shouldGetKeyboardEvents() {
        return this.isInEditMode();
      }
      enterInEditMode() {
        this.enableEditMode(), this.editorDiv.focus();
      }
      dblclick(l) {
        this.enterInEditMode();
      }
      keydown(l) {
        l.target === this.div &&
          l.key === 'Enter' &&
          (this.enterInEditMode(), l.preventDefault());
      }
      editorDivKeydown(l) {
        Vl._keyboardManager.exec(this, l);
      }
      editorDivFocus(l) {
        this.isEditing = !0;
      }
      editorDivBlur(l) {
        this.isEditing = !1;
      }
      editorDivInput(l) {
        this.parent.div.classList.toggle('freetextEditing', this.isEmpty());
      }
      disableEditing() {
        this.editorDiv.setAttribute('role', 'comment'),
          this.editorDiv.removeAttribute('aria-multiline');
      }
      enableEditing() {
        this.editorDiv.setAttribute('role', 'textbox'),
          this.editorDiv.setAttribute('aria-multiline', !0);
      }
      render() {
        if (this.div) return this.div;
        let l, d;
        this.width && ((l = this.x), (d = this.y)),
          super.render(),
          (this.editorDiv = document.createElement('div')),
          (this.editorDiv.className = 'internal'),
          this.editorDiv.setAttribute('id', s(this, cn)),
          this.editorDiv.setAttribute('data-l10n-id', 'pdfjs-free-text'),
          this.enableEditing(),
          Fl._l10nPromise.get('pdfjs-free-text-default-content').then((t) => {
            var F;
            return (F = this.editorDiv) == null
              ? void 0
              : F.setAttribute('default-content', t);
          }),
          (this.editorDiv.contentEditable = !0);
        const { style: Z } = this.editorDiv;
        if (
          ((Z.fontSize = `calc(${s(this, GU)}px * var(--scale-factor))`),
          (Z.color = s(this, PU)),
          this.div.append(this.editorDiv),
          (this.overlayDiv = document.createElement('div')),
          this.overlayDiv.classList.add('overlay', 'enabled'),
          this.div.append(this.overlayDiv),
          eW(this, this.div, ['dblclick', 'keydown']),
          this.width)
        ) {
          const [t, F] = this.parentDimensions;
          if (this.annotationElementId) {
            const { position: c } = s(this, Uc);
            let [n, V] = this.getInitialTranslation();
            [n, V] = this.pageTranslationToScreen(n, V);
            const [W, a] = this.pageDimensions,
              [i, h] = this.pageTranslation;
            let N, M;
            switch (this.rotation) {
              case 0:
                (N = l + (c[0] - i) / W),
                  (M = d + this.height - (c[1] - h) / a);
                break;
              case 90:
                (N = l + (c[0] - i) / W),
                  (M = d - (c[1] - h) / a),
                  ([n, V] = [V, -n]);
                break;
              case 180:
                (N = l - this.width + (c[0] - i) / W),
                  (M = d - (c[1] - h) / a),
                  ([n, V] = [-n, -V]);
                break;
              case 270:
                (N = l + (c[0] - i - this.height * a) / W),
                  (M = d + (c[1] - h - this.width * W) / a),
                  ([n, V] = [-V, n]);
                break;
            }
            this.setAt(N * t, M * F, n, V);
          } else this.setAt(l * t, d * F, this.width * t, this.height * F);
          b(this, tc, pR).call(this),
            (this._isDraggable = !0),
            (this.editorDiv.contentEditable = !1);
        } else (this._isDraggable = !1), (this.editorDiv.contentEditable = !0);
        return this.div;
      }
      editorDivPaste(l) {
        var N, M, J;
        const d = l.clipboardData || window.clipboardData,
          { types: Z } = d;
        if (Z.length === 1 && Z[0] === 'text/plain') return;
        l.preventDefault();
        const t = b((N = Vl), sn, Yh)
          .call(N, d.getData('text') || '')
          .replaceAll(
            pW,
            `
`,
          );
        if (!t) return;
        const F = window.getSelection();
        if (!F.rangeCount) return;
        this.editorDiv.normalize(), F.deleteFromDocument();
        const c = F.getRangeAt(0);
        if (
          !t.includes(`
`)
        ) {
          c.insertNode(document.createTextNode(t)),
            this.editorDiv.normalize(),
            F.collapseToStart();
          return;
        }
        const { startContainer: n, startOffset: V } = c,
          W = [],
          a = [];
        if (n.nodeType === Node.TEXT_NODE) {
          const m = n.parentElement;
          if (
            (a.push(n.nodeValue.slice(V).replaceAll(pW, '')),
            m !== this.editorDiv)
          ) {
            let G = W;
            for (const T of this.editorDiv.childNodes) {
              if (T === m) {
                G = a;
                continue;
              }
              G.push(b((M = Vl), Zc, uR).call(M, T));
            }
          }
          W.push(n.nodeValue.slice(0, V).replaceAll(pW, ''));
        } else if (n === this.editorDiv) {
          let m = W,
            G = 0;
          for (const T of this.editorDiv.childNodes)
            G++ === V && (m = a), m.push(b((J = Vl), Zc, uR).call(J, T));
        }
        e(
          this,
          JU,
          `${W.join(`
`)}${t}${a.join(`
`)}`,
        ),
          b(this, tc, pR).call(this);
        const i = new Range();
        let h = W.reduce((m, G) => m + G.length, 0);
        for (const { firstChild: m } of this.editorDiv.childNodes)
          if (m.nodeType === Node.TEXT_NODE) {
            const G = m.nodeValue.length;
            if (h <= G) {
              i.setStart(m, h), i.setEnd(m, h);
              break;
            }
            h -= G;
          }
        F.removeAllRanges(), F.addRange(i);
      }
      get contentDiv() {
        return this.editorDiv;
      }
      static deserialize(l, d, Z) {
        var c;
        let t = null;
        if (l instanceof ce) {
          const {
            data: {
              defaultAppearanceData: { fontSize: n, fontColor: V },
              rect: W,
              rotation: a,
              id: i,
            },
            textContent: h,
            textPosition: N,
            parent: {
              page: { pageNumber: M },
            },
          } = l;
          if (!h || h.length === 0) return null;
          t = l = {
            annotationType: ll.FREETEXT,
            color: Array.from(V),
            fontSize: n,
            value: h.join(`
`),
            position: N,
            pageIndex: M - 1,
            rect: W.slice(0),
            rotation: a,
            id: i,
            deleted: !1,
          };
        }
        const F = super.deserialize(l, d, Z);
        return (
          e(F, GU, l.fontSize),
          e(F, PU, g.makeHexColor(...l.color)),
          e(F, JU, b((c = Vl), sn, Yh).call(c, l.value)),
          (F.annotationElementId = l.id || null),
          e(F, Uc, t),
          F
        );
      }
      serialize(l = !1) {
        if (this.isEmpty()) return null;
        if (this.deleted)
          return {
            pageIndex: this.pageIndex,
            id: this.annotationElementId,
            deleted: !0,
          };
        const d = Vl._internalPadding * this.parentScale,
          Z = this.getRect(d, d),
          t = Fl._colorManager.convert(
            this.isAttachedToDOM
              ? getComputedStyle(this.editorDiv).color
              : s(this, PU),
          ),
          F = {
            annotationType: ll.FREETEXT,
            color: t,
            fontSize: s(this, GU),
            value: b(this, Pa, l2).call(this),
            pageIndex: this.pageIndex,
            rect: Z,
            rotation: this.rotation,
            structTreeParentId: this._structTreeParentId,
          };
        return l
          ? F
          : this.annotationElementId && !b(this, fa, U2).call(this, F)
            ? null
            : ((F.id = this.annotationElementId), F);
      }
      renderAnnotationElement(l) {
        const d = super.renderAnnotationElement(l);
        if (this.deleted) return d;
        const { style: Z } = d;
        (Z.fontSize = `calc(${s(this, GU)}px * var(--scale-factor))`),
          (Z.color = s(this, PU)),
          d.replaceChildren();
        for (const F of s(this, JU).split(`
`)) {
          const c = document.createElement('div');
          c.append(
            F ? document.createTextNode(F) : document.createElement('br'),
          ),
            d.append(c);
        }
        const t = Vl._internalPadding * this.parentScale;
        return (
          l.updateEdited({
            rect: this.getRect(t, t),
            popupContent: s(this, JU),
          }),
          d
        );
      }
      resetAnnotationElement(l) {
        super.resetAnnotationElement(l), l.resetEdited();
      }
    };
  (Un = new WeakMap()),
    (dn = new WeakMap()),
    (Zn = new WeakMap()),
    (tn = new WeakMap()),
    (Fn = new WeakMap()),
    (PU = new WeakMap()),
    (JU = new WeakMap()),
    (cn = new WeakMap()),
    (GU = new WeakMap()),
    (Uc = new WeakMap()),
    (Ka = new WeakSet()),
    (_m = function (l) {
      const d = (t) => {
          (this.editorDiv.style.fontSize = `calc(${t}px * var(--scale-factor))`),
            this.translate(0, -(t - s(this, GU)) * this.parentScale),
            e(this, GU, t),
            b(this, dc, YR).call(this);
        },
        Z = s(this, GU);
      this.addCommands({
        cmd: d.bind(this, l),
        undo: d.bind(this, Z),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: !0,
        type: P.FREETEXT_SIZE,
        overwriteIfSameType: !0,
        keepUndo: !0,
      });
    }),
    (va = new WeakSet()),
    (qm = function (l) {
      const d = (t) => {
          e(this, PU, (this.editorDiv.style.color = t));
        },
        Z = s(this, PU);
      this.addCommands({
        cmd: d.bind(this, l),
        undo: d.bind(this, Z),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: !0,
        type: P.FREETEXT_COLOR,
        overwriteIfSameType: !0,
        keepUndo: !0,
      });
    }),
    (Ha = new WeakSet()),
    ($m = function () {
      var d;
      const l = [];
      this.editorDiv.normalize();
      for (const Z of this.editorDiv.childNodes)
        l.push(b((d = Vl), Zc, uR).call(d, Z));
      return l.join(`
`);
    }),
    (dc = new WeakSet()),
    (YR = function () {
      const [l, d] = this.parentDimensions;
      let Z;
      if (this.isAttachedToDOM) Z = this.div.getBoundingClientRect();
      else {
        const { currentLayer: t, div: F } = this,
          c = F.style.display,
          n = F.classList.contains('hidden');
        F.classList.remove('hidden'),
          (F.style.display = 'hidden'),
          t.div.append(this.div),
          (Z = F.getBoundingClientRect()),
          F.remove(),
          (F.style.display = c),
          F.classList.toggle('hidden', n);
      }
      this.rotation % 180 === this.parentRotation % 180
        ? ((this.width = Z.width / l), (this.height = Z.height / d))
        : ((this.width = Z.height / l), (this.height = Z.width / d)),
        this.fixAndSetPosition();
    }),
    (Zc = new WeakSet()),
    (uR = function (l) {
      return (
        l.nodeType === Node.TEXT_NODE ? l.nodeValue : l.innerText
      ).replaceAll(pW, '');
    }),
    (tc = new WeakSet()),
    (pR = function () {
      if ((this.editorDiv.replaceChildren(), !!s(this, JU)))
        for (const l of s(this, JU).split(`
`)) {
          const d = document.createElement('div');
          d.append(
            l ? document.createTextNode(l) : document.createElement('br'),
          ),
            this.editorDiv.append(d);
        }
    }),
    (Pa = new WeakSet()),
    (l2 = function () {
      return s(this, JU).replaceAll(' ', ' ');
    }),
    (sn = new WeakSet()),
    (Yh = function (l) {
      return l.replaceAll(' ', ' ');
    }),
    (fa = new WeakSet()),
    (U2 = function (l) {
      const { value: d, fontSize: Z, color: t, pageIndex: F } = s(this, Uc);
      return (
        this._hasBeenMoved ||
        l.value !== d ||
        l.fontSize !== Z ||
        l.color.some((c, n) => c !== t[n]) ||
        l.pageIndex !== F
      );
    }),
    R(Vl, Zc),
    R(Vl, sn),
    f(Vl, '_freeTextDefaultContent', ''),
    f(Vl, '_internalPadding', 0),
    f(Vl, '_defaultColor', null),
    f(Vl, '_defaultFontSize', 10),
    f(Vl, '_type', 'freetext'),
    f(Vl, '_editorType', ll.FREETEXT);
  let TN = Vl,
    SN =
      ((Wm = class {
        constructor(U, l = 0, d = 0, Z = !0) {
          R(this, Aa);
          R(this, Fc);
          R(this, _a);
          R(this, qa);
          R(this, nn);
          R(this, Qn, void 0);
          R(this, KZ, []);
          R(this, fU, []);
          let t = 1 / 0,
            F = -1 / 0,
            c = 1 / 0,
            n = -1 / 0;
          const W = 10 ** -4;
          for (const { x: m, y: G, width: T, height: u } of U) {
            const X = Math.floor((m - l) / W) * W,
              S = Math.ceil((m + T + l) / W) * W,
              p = Math.floor((G - l) / W) * W,
              L = Math.ceil((G + u + l) / W) * W,
              Y = [X, p, L, !0],
              o = [S, p, L, !1];
            s(this, KZ).push(Y, o),
              (t = Math.min(t, X)),
              (F = Math.max(F, S)),
              (c = Math.min(c, p)),
              (n = Math.max(n, L));
          }
          const a = F - t + 2 * d,
            i = n - c + 2 * d,
            h = t - d,
            N = c - d,
            M = s(this, KZ).at(Z ? -1 : -2),
            J = [M[0], M[2]];
          for (const m of s(this, KZ)) {
            const [G, T, u] = m;
            (m[0] = (G - h) / a), (m[1] = (T - N) / i), (m[2] = (u - N) / i);
          }
          e(this, Qn, { x: h, y: N, width: a, height: i, lastPoint: J });
        }
        getOutlines() {
          s(this, KZ).sort((l, d) => l[0] - d[0] || l[1] - d[1] || l[2] - d[2]);
          const U = [];
          for (const l of s(this, KZ))
            l[3]
              ? (U.push(...b(this, nn, uh).call(this, l)),
                b(this, _a, Z2).call(this, l))
              : (b(this, qa, t2).call(this, l),
                U.push(...b(this, nn, uh).call(this, l)));
          return b(this, Aa, d2).call(this, U);
        }
      }),
      (Qn = new WeakMap()),
      (KZ = new WeakMap()),
      (fU = new WeakMap()),
      (Aa = new WeakSet()),
      (d2 = function (U) {
        const l = [],
          d = new Set();
        for (const F of U) {
          const [c, n, V] = F;
          l.push([c, n, F], [c, V, F]);
        }
        l.sort((F, c) => F[1] - c[1] || F[0] - c[0]);
        for (let F = 0, c = l.length; F < c; F += 2) {
          const n = l[F][2],
            V = l[F + 1][2];
          n.push(V), V.push(n), d.add(n), d.add(V);
        }
        const Z = [];
        let t;
        for (; d.size > 0; ) {
          const F = d.values().next().value;
          let [c, n, V, W, a] = F;
          d.delete(F);
          let i = c,
            h = n;
          for (t = [c, V], Z.push(t); ; ) {
            let N;
            if (d.has(W)) N = W;
            else if (d.has(a)) N = a;
            else break;
            d.delete(N),
              ([c, n, V, W, a] = N),
              i !== c && (t.push(i, h, c, h === n ? n : V), (i = c)),
              (h = h === n ? V : n);
          }
          t.push(i, h);
        }
        return new aG(Z, s(this, Qn));
      }),
      (Fc = new WeakSet()),
      (oR = function (U) {
        const l = s(this, fU);
        let d = 0,
          Z = l.length - 1;
        for (; d <= Z; ) {
          const t = (d + Z) >> 1,
            F = l[t][0];
          if (F === U) return t;
          F < U ? (d = t + 1) : (Z = t - 1);
        }
        return Z + 1;
      }),
      (_a = new WeakSet()),
      (Z2 = function ([, U, l]) {
        const d = b(this, Fc, oR).call(this, U);
        s(this, fU).splice(d, 0, [U, l]);
      }),
      (qa = new WeakSet()),
      (t2 = function ([, U, l]) {
        const d = b(this, Fc, oR).call(this, U);
        for (let Z = d; Z < s(this, fU).length; Z++) {
          const [t, F] = s(this, fU)[Z];
          if (t !== U) break;
          if (t === U && F === l) {
            s(this, fU).splice(Z, 1);
            return;
          }
        }
        for (let Z = d - 1; Z >= 0; Z--) {
          const [t, F] = s(this, fU)[Z];
          if (t !== U) break;
          if (t === U && F === l) {
            s(this, fU).splice(Z, 1);
            return;
          }
        }
      }),
      (nn = new WeakSet()),
      (uh = function (U) {
        const [l, d, Z] = U,
          t = [[l, d, Z]],
          F = b(this, Fc, oR).call(this, Z);
        for (let c = 0; c < F; c++) {
          const [n, V] = s(this, fU)[c];
          for (let W = 0, a = t.length; W < a; W++) {
            const [, i, h] = t[W];
            if (!(V <= i || h <= n)) {
              if (i >= n) {
                if (h > V) t[W][1] = V;
                else {
                  if (a === 1) return [];
                  t.splice(W, 1), W--, a--;
                }
                continue;
              }
              (t[W][2] = n), h > V && t.push([l, V, h]);
            }
          }
        }
        return t;
      }),
      Wm);
  class Ve {
    toSVGPath() {
      throw new Error('Abstract method `toSVGPath` must be implemented.');
    }
    get box() {
      throw new Error('Abstract getter `box` must be implemented.');
    }
    serialize(U, l) {
      throw new Error('Abstract method `serialize` must be implemented.');
    }
    get free() {
      return this instanceof XN;
    }
  }
  class aG extends Ve {
    constructor(l, d) {
      super();
      R(this, Vn, void 0);
      R(this, cc, void 0);
      e(this, cc, l), e(this, Vn, d);
    }
    toSVGPath() {
      const l = [];
      for (const d of s(this, cc)) {
        let [Z, t] = d;
        l.push(`M${Z} ${t}`);
        for (let F = 2; F < d.length; F += 2) {
          const c = d[F],
            n = d[F + 1];
          c === Z
            ? (l.push(`V${n}`), (t = n))
            : n === t && (l.push(`H${c}`), (Z = c));
        }
        l.push('Z');
      }
      return l.join(' ');
    }
    serialize([l, d, Z, t], F) {
      const c = [],
        n = Z - l,
        V = t - d;
      for (const W of s(this, cc)) {
        const a = new Array(W.length);
        for (let i = 0; i < W.length; i += 2)
          (a[i] = l + W[i] * n), (a[i + 1] = t - W[i + 1] * V);
        c.push(a);
      }
      return c;
    }
    get box() {
      return s(this, Vn);
    }
  }
  (Vn = new WeakMap()), (cc = new WeakMap());
  const dZ = class dZ {
    constructor({ x: U, y: l }, d, Z, t, F, c = 0) {
      R(this, Nn);
      R(this, Nd, void 0);
      R(this, UZ, []);
      R(this, sc, void 0);
      R(this, Qc, void 0);
      R(this, hd, []);
      R(this, $, new Float64Array(18));
      R(this, RF, void 0);
      R(this, NF, void 0);
      R(this, Wn, void 0);
      R(this, an, void 0);
      R(this, nc, void 0);
      R(this, Vc, void 0);
      R(this, vZ, []);
      e(this, Nd, d),
        e(this, Vc, t * Z),
        e(this, Qc, F),
        s(this, $).set([NaN, NaN, NaN, NaN, U, l], 6),
        e(this, sc, c),
        e(this, an, s(dZ, Rn) * Z),
        e(this, Wn, s(dZ, li) * Z),
        e(this, nc, Z),
        s(this, vZ).push(U, l);
    }
    get free() {
      return !0;
    }
    isEmpty() {
      return isNaN(s(this, $)[8]);
    }
    add({ x: U, y: l }) {
      var Y;
      e(this, RF, U), e(this, NF, l);
      const [d, Z, t, F] = s(this, Nd);
      let [c, n, V, W] = s(this, $).subarray(8, 12);
      const a = U - V,
        i = l - W,
        h = Math.hypot(a, i);
      if (h < s(this, Wn)) return !1;
      const N = h - s(this, an),
        M = N / h,
        J = M * a,
        m = M * i;
      let G = c,
        T = n;
      (c = V),
        (n = W),
        (V += J),
        (W += m),
        (Y = s(this, vZ)) == null || Y.push(U, l);
      const u = -m / N,
        X = J / N,
        S = u * s(this, Vc),
        p = X * s(this, Vc);
      return (
        s(this, $).set(s(this, $).subarray(2, 8), 0),
        s(this, $).set([V + S, W + p], 4),
        s(this, $).set(s(this, $).subarray(14, 18), 12),
        s(this, $).set([V - S, W - p], 16),
        isNaN(s(this, $)[6])
          ? (s(this, hd).length === 0 &&
              (s(this, $).set([c + S, n + p], 2),
              s(this, hd).push(
                NaN,
                NaN,
                NaN,
                NaN,
                (c + S - d) / t,
                (n + p - Z) / F,
              ),
              s(this, $).set([c - S, n - p], 14),
              s(this, UZ).push(
                NaN,
                NaN,
                NaN,
                NaN,
                (c - S - d) / t,
                (n - p - Z) / F,
              )),
            s(this, $).set([G, T, c, n, V, W], 6),
            !this.isEmpty())
          : (s(this, $).set([G, T, c, n, V, W], 6),
            Math.abs(Math.atan2(T - n, G - c) - Math.atan2(m, J)) < Math.PI / 2
              ? (([c, n, V, W] = s(this, $).subarray(2, 6)),
                s(this, hd).push(
                  NaN,
                  NaN,
                  NaN,
                  NaN,
                  ((c + V) / 2 - d) / t,
                  ((n + W) / 2 - Z) / F,
                ),
                ([c, n, G, T] = s(this, $).subarray(14, 18)),
                s(this, UZ).push(
                  NaN,
                  NaN,
                  NaN,
                  NaN,
                  ((G + c) / 2 - d) / t,
                  ((T + n) / 2 - Z) / F,
                ),
                !0)
              : (([G, T, c, n, V, W] = s(this, $).subarray(0, 6)),
                s(this, hd).push(
                  ((G + 5 * c) / 6 - d) / t,
                  ((T + 5 * n) / 6 - Z) / F,
                  ((5 * c + V) / 6 - d) / t,
                  ((5 * n + W) / 6 - Z) / F,
                  ((c + V) / 2 - d) / t,
                  ((n + W) / 2 - Z) / F,
                ),
                ([V, W, c, n, G, T] = s(this, $).subarray(12, 18)),
                s(this, UZ).push(
                  ((G + 5 * c) / 6 - d) / t,
                  ((T + 5 * n) / 6 - Z) / F,
                  ((5 * c + V) / 6 - d) / t,
                  ((5 * n + W) / 6 - Z) / F,
                  ((c + V) / 2 - d) / t,
                  ((n + W) / 2 - Z) / F,
                ),
                !0))
      );
    }
    toSVGPath() {
      if (this.isEmpty()) return '';
      const U = s(this, hd),
        l = s(this, UZ),
        d = s(this, $).subarray(4, 6),
        Z = s(this, $).subarray(16, 18),
        [t, F, c, n] = s(this, Nd),
        [V, W, a, i] = b(this, Nn, ph).call(this);
      if (isNaN(s(this, $)[6]) && !this.isEmpty())
        return `M${(s(this, $)[2] - t) / c} ${(s(this, $)[3] - F) / n} L${(s(this, $)[4] - t) / c} ${(s(this, $)[5] - F) / n} L${V} ${W} L${a} ${i} L${(s(this, $)[16] - t) / c} ${(s(this, $)[17] - F) / n} L${(s(this, $)[14] - t) / c} ${(s(this, $)[15] - F) / n} Z`;
      const h = [];
      h.push(`M${U[4]} ${U[5]}`);
      for (let N = 6; N < U.length; N += 6)
        isNaN(U[N])
          ? h.push(`L${U[N + 4]} ${U[N + 5]}`)
          : h.push(
              `C${U[N]} ${U[N + 1]} ${U[N + 2]} ${U[N + 3]} ${U[N + 4]} ${U[N + 5]}`,
            );
      h.push(
        `L${(d[0] - t) / c} ${(d[1] - F) / n} L${V} ${W} L${a} ${i} L${(Z[0] - t) / c} ${(Z[1] - F) / n}`,
      );
      for (let N = l.length - 6; N >= 6; N -= 6)
        isNaN(l[N])
          ? h.push(`L${l[N + 4]} ${l[N + 5]}`)
          : h.push(
              `C${l[N]} ${l[N + 1]} ${l[N + 2]} ${l[N + 3]} ${l[N + 4]} ${l[N + 5]}`,
            );
      return h.push(`L${l[4]} ${l[5]} Z`), h.join(' ');
    }
    getOutlines() {
      var m;
      const U = s(this, hd),
        l = s(this, UZ),
        d = s(this, $),
        Z = d.subarray(4, 6),
        t = d.subarray(16, 18),
        [F, c, n, V] = s(this, Nd),
        W = new Float64Array(
          (((m = s(this, vZ)) == null ? void 0 : m.length) ?? 0) + 2,
        );
      for (let G = 0, T = W.length - 2; G < T; G += 2)
        (W[G] = (s(this, vZ)[G] - F) / n),
          (W[G + 1] = (s(this, vZ)[G + 1] - c) / V);
      (W[W.length - 2] = (s(this, RF) - F) / n),
        (W[W.length - 1] = (s(this, NF) - c) / V);
      const [a, i, h, N] = b(this, Nn, ph).call(this);
      if (isNaN(d[6]) && !this.isEmpty()) {
        const G = new Float64Array(36);
        return (
          G.set(
            [
              NaN,
              NaN,
              NaN,
              NaN,
              (d[2] - F) / n,
              (d[3] - c) / V,
              NaN,
              NaN,
              NaN,
              NaN,
              (d[4] - F) / n,
              (d[5] - c) / V,
              NaN,
              NaN,
              NaN,
              NaN,
              a,
              i,
              NaN,
              NaN,
              NaN,
              NaN,
              h,
              N,
              NaN,
              NaN,
              NaN,
              NaN,
              (d[16] - F) / n,
              (d[17] - c) / V,
              NaN,
              NaN,
              NaN,
              NaN,
              (d[14] - F) / n,
              (d[15] - c) / V,
            ],
            0,
          ),
          new XN(G, W, s(this, Nd), s(this, nc), s(this, sc), s(this, Qc))
        );
      }
      const M = new Float64Array(s(this, hd).length + 24 + s(this, UZ).length);
      let J = U.length;
      for (let G = 0; G < J; G += 2) {
        if (isNaN(U[G])) {
          M[G] = M[G + 1] = NaN;
          continue;
        }
        (M[G] = U[G]), (M[G + 1] = U[G + 1]);
      }
      M.set(
        [
          NaN,
          NaN,
          NaN,
          NaN,
          (Z[0] - F) / n,
          (Z[1] - c) / V,
          NaN,
          NaN,
          NaN,
          NaN,
          a,
          i,
          NaN,
          NaN,
          NaN,
          NaN,
          h,
          N,
          NaN,
          NaN,
          NaN,
          NaN,
          (t[0] - F) / n,
          (t[1] - c) / V,
        ],
        J,
      ),
        (J += 24);
      for (let G = l.length - 6; G >= 6; G -= 6)
        for (let T = 0; T < 6; T += 2) {
          if (isNaN(l[G + T])) {
            (M[J] = M[J + 1] = NaN), (J += 2);
            continue;
          }
          (M[J] = l[G + T]), (M[J + 1] = l[G + T + 1]), (J += 2);
        }
      return (
        M.set([NaN, NaN, NaN, NaN, l[4], l[5]], J),
        new XN(M, W, s(this, Nd), s(this, nc), s(this, sc), s(this, Qc))
      );
    }
  };
  (Nd = new WeakMap()),
    (UZ = new WeakMap()),
    (sc = new WeakMap()),
    (Qc = new WeakMap()),
    (hd = new WeakMap()),
    ($ = new WeakMap()),
    (RF = new WeakMap()),
    (NF = new WeakMap()),
    (Wn = new WeakMap()),
    (an = new WeakMap()),
    (nc = new WeakMap()),
    (Vc = new WeakMap()),
    (vZ = new WeakMap()),
    (Rn = new WeakMap()),
    ($a = new WeakMap()),
    (li = new WeakMap()),
    (Nn = new WeakSet()),
    (ph = function () {
      const U = s(this, $).subarray(4, 6),
        l = s(this, $).subarray(16, 18),
        [d, Z, t, F] = s(this, Nd);
      return [
        (s(this, RF) + (U[0] - l[0]) / 2 - d) / t,
        (s(this, NF) + (U[1] - l[1]) / 2 - Z) / F,
        (s(this, RF) + (l[0] - U[0]) / 2 - d) / t,
        (s(this, NF) + (l[1] - U[1]) / 2 - Z) / F,
      ];
    }),
    R(dZ, Rn, 8),
    R(dZ, $a, 2),
    R(dZ, li, s(dZ, Rn) + s(dZ, $a));
  let oW = dZ;
  class XN extends Ve {
    constructor(l, d, Z, t, F, c) {
      super();
      R(this, bF);
      R(this, eF);
      R(this, Ui);
      R(this, Wc, void 0);
      R(this, hF, null);
      R(this, ZZ, void 0);
      R(this, hn, void 0);
      R(this, TU, void 0);
      R(this, bn, void 0);
      R(this, Xl, void 0);
      e(this, Xl, l),
        e(this, TU, d),
        e(this, Wc, Z),
        e(this, bn, t),
        e(this, ZZ, F),
        e(this, hn, c),
        b(this, Ui, F2).call(this, c);
      const { x: n, y: V, width: W, height: a } = s(this, hF);
      for (let i = 0, h = l.length; i < h; i += 2)
        (l[i] = (l[i] - n) / W), (l[i + 1] = (l[i + 1] - V) / a);
      for (let i = 0, h = d.length; i < h; i += 2)
        (d[i] = (d[i] - n) / W), (d[i + 1] = (d[i + 1] - V) / a);
    }
    toSVGPath() {
      const l = [`M${s(this, Xl)[4]} ${s(this, Xl)[5]}`];
      for (let d = 6, Z = s(this, Xl).length; d < Z; d += 6) {
        if (isNaN(s(this, Xl)[d])) {
          l.push(`L${s(this, Xl)[d + 4]} ${s(this, Xl)[d + 5]}`);
          continue;
        }
        l.push(
          `C${s(this, Xl)[d]} ${s(this, Xl)[d + 1]} ${s(this, Xl)[d + 2]} ${s(this, Xl)[d + 3]} ${s(this, Xl)[d + 4]} ${s(this, Xl)[d + 5]}`,
        );
      }
      return l.push('Z'), l.join(' ');
    }
    serialize([l, d, Z, t], F) {
      const c = Z - l,
        n = t - d;
      let V, W;
      switch (F) {
        case 0:
          (V = b(this, bF, PV).call(this, s(this, Xl), l, t, c, -n)),
            (W = b(this, bF, PV).call(this, s(this, TU), l, t, c, -n));
          break;
        case 90:
          (V = b(this, eF, fV).call(this, s(this, Xl), l, d, c, n)),
            (W = b(this, eF, fV).call(this, s(this, TU), l, d, c, n));
          break;
        case 180:
          (V = b(this, bF, PV).call(this, s(this, Xl), Z, d, -c, n)),
            (W = b(this, bF, PV).call(this, s(this, TU), Z, d, -c, n));
          break;
        case 270:
          (V = b(this, eF, fV).call(this, s(this, Xl), Z, t, -c, -n)),
            (W = b(this, eF, fV).call(this, s(this, TU), Z, t, -c, -n));
          break;
      }
      return { outline: Array.from(V), points: [Array.from(W)] };
    }
    get box() {
      return s(this, hF);
    }
    getNewOutline(l, d) {
      const { x: Z, y: t, width: F, height: c } = s(this, hF),
        [n, V, W, a] = s(this, Wc),
        i = F * W,
        h = c * a,
        N = Z * W + n,
        M = t * a + V,
        J = new oW(
          { x: s(this, TU)[0] * i + N, y: s(this, TU)[1] * h + M },
          s(this, Wc),
          s(this, bn),
          l,
          s(this, hn),
          d ?? s(this, ZZ),
        );
      for (let m = 2; m < s(this, TU).length; m += 2)
        J.add({ x: s(this, TU)[m] * i + N, y: s(this, TU)[m + 1] * h + M });
      return J.getOutlines();
    }
  }
  (Wc = new WeakMap()),
    (hF = new WeakMap()),
    (ZZ = new WeakMap()),
    (hn = new WeakMap()),
    (TU = new WeakMap()),
    (bn = new WeakMap()),
    (Xl = new WeakMap()),
    (bF = new WeakSet()),
    (PV = function (l, d, Z, t, F) {
      const c = new Float64Array(l.length);
      for (let n = 0, V = l.length; n < V; n += 2)
        (c[n] = d + l[n] * t), (c[n + 1] = Z + l[n + 1] * F);
      return c;
    }),
    (eF = new WeakSet()),
    (fV = function (l, d, Z, t, F) {
      const c = new Float64Array(l.length);
      for (let n = 0, V = l.length; n < V; n += 2)
        (c[n] = d + l[n + 1] * t), (c[n + 1] = Z + l[n] * F);
      return c;
    }),
    (Ui = new WeakSet()),
    (F2 = function (l) {
      const d = s(this, Xl);
      let Z = d[4],
        t = d[5],
        F = Z,
        c = t,
        n = Z,
        V = t,
        W = Z,
        a = t;
      const i = l ? Math.max : Math.min;
      for (let m = 6, G = d.length; m < G; m += 6) {
        if (isNaN(d[m]))
          (F = Math.min(F, d[m + 4])),
            (c = Math.min(c, d[m + 5])),
            (n = Math.max(n, d[m + 4])),
            (V = Math.max(V, d[m + 5])),
            a < d[m + 5]
              ? ((W = d[m + 4]), (a = d[m + 5]))
              : a === d[m + 5] && (W = i(W, d[m + 4]));
        else {
          const T = g.bezierBoundingBox(Z, t, ...d.slice(m, m + 6));
          (F = Math.min(F, T[0])),
            (c = Math.min(c, T[1])),
            (n = Math.max(n, T[2])),
            (V = Math.max(V, T[3])),
            a < T[3]
              ? ((W = T[2]), (a = T[3]))
              : a === T[3] && (W = i(W, T[2]));
        }
        (Z = d[m + 4]), (t = d[m + 5]);
      }
      const h = F - s(this, ZZ),
        N = c - s(this, ZZ),
        M = n - F + 2 * s(this, ZZ),
        J = V - c + 2 * s(this, ZZ);
      e(this, hF, { x: h, y: N, width: M, height: J, lastPoint: [W, a] });
    });
  let We =
    ((qU = class {
      constructor({ editor: U = null, uiManager: l = null }) {
        R(this, Tn);
        R(this, Sn);
        R(this, di);
        R(this, tZ);
        R(this, Zi);
        R(this, bd);
        R(this, en, b(this, di, c2).bind(this));
        R(this, mn, b(this, Zi, s2).bind(this));
        R(this, AU, null);
        R(this, mF, null);
        R(this, ac, void 0);
        R(this, Ll, null);
        R(this, Mn, !1);
        R(this, ic, !1);
        R(this, Jn, null);
        R(this, Gn, void 0);
        R(this, _U, null);
        R(this, Rc, void 0);
        var d;
        U
          ? (e(this, ic, !1), e(this, Rc, P.HIGHLIGHT_COLOR), e(this, Jn, U))
          : (e(this, ic, !0), e(this, Rc, P.HIGHLIGHT_DEFAULT_COLOR)),
          e(this, _U, (U == null ? void 0 : U._uiManager) || l),
          e(this, Gn, s(this, _U)._eventBus),
          e(
            this,
            ac,
            (U == null ? void 0 : U.color) ||
              ((d = s(this, _U)) == null
                ? void 0
                : d.highlightColors.values().next().value) ||
              '#FFFF98',
          );
      }
      static get _keyboardManager() {
        return Zl(
          this,
          '_keyboardManager',
          new is([
            [['Escape', 'mac+Escape'], qU.prototype._hideDropdownFromKeyboard],
            [[' ', 'mac+ '], qU.prototype._colorSelectFromKeyboard],
            [
              ['ArrowDown', 'ArrowRight', 'mac+ArrowDown', 'mac+ArrowRight'],
              qU.prototype._moveToNext,
            ],
            [
              ['ArrowUp', 'ArrowLeft', 'mac+ArrowUp', 'mac+ArrowLeft'],
              qU.prototype._moveToPrevious,
            ],
            [['Home', 'mac+Home'], qU.prototype._moveToBeginning],
            [['End', 'mac+End'], qU.prototype._moveToEnd],
          ]),
        );
      }
      renderButton() {
        const U = e(this, AU, document.createElement('button'));
        (U.className = 'colorPicker'),
          (U.tabIndex = '0'),
          U.setAttribute('data-l10n-id', 'pdfjs-editor-colorpicker-button'),
          U.setAttribute('aria-haspopup', !0);
        const l = s(this, _U)._signal;
        U.addEventListener('click', b(this, tZ, c0).bind(this), { signal: l }),
          U.addEventListener('keydown', s(this, en), { signal: l });
        const d = e(this, mF, document.createElement('span'));
        return (
          (d.className = 'swatch'),
          d.setAttribute('aria-hidden', !0),
          (d.style.backgroundColor = s(this, ac)),
          U.append(d),
          U
        );
      }
      renderMainDropdown() {
        const U = e(this, Ll, b(this, Tn, oh).call(this));
        return (
          U.setAttribute('aria-orientation', 'horizontal'),
          U.setAttribute('aria-labelledby', 'highlightColorPickerLabel'),
          U
        );
      }
      _colorSelectFromKeyboard(U) {
        if (U.target === s(this, AU)) {
          b(this, tZ, c0).call(this, U);
          return;
        }
        const l = U.target.getAttribute('data-color');
        l && b(this, Sn, Bh).call(this, l, U);
      }
      _moveToNext(U) {
        var l, d;
        if (!s(this, bd, et)) {
          b(this, tZ, c0).call(this, U);
          return;
        }
        if (U.target === s(this, AU)) {
          (l = s(this, Ll).firstChild) == null || l.focus();
          return;
        }
        (d = U.target.nextSibling) == null || d.focus();
      }
      _moveToPrevious(U) {
        var l, d;
        if (
          U.target === ((l = s(this, Ll)) == null ? void 0 : l.firstChild) ||
          U.target === s(this, AU)
        ) {
          s(this, bd, et) && this._hideDropdownFromKeyboard();
          return;
        }
        s(this, bd, et) || b(this, tZ, c0).call(this, U),
          (d = U.target.previousSibling) == null || d.focus();
      }
      _moveToBeginning(U) {
        var l;
        if (!s(this, bd, et)) {
          b(this, tZ, c0).call(this, U);
          return;
        }
        (l = s(this, Ll).firstChild) == null || l.focus();
      }
      _moveToEnd(U) {
        var l;
        if (!s(this, bd, et)) {
          b(this, tZ, c0).call(this, U);
          return;
        }
        (l = s(this, Ll).lastChild) == null || l.focus();
      }
      hideDropdown() {
        var U;
        (U = s(this, Ll)) == null || U.classList.add('hidden'),
          window.removeEventListener('pointerdown', s(this, mn));
      }
      _hideDropdownFromKeyboard() {
        var U;
        if (!s(this, ic)) {
          if (!s(this, bd, et)) {
            (U = s(this, Jn)) == null || U.unselect();
            return;
          }
          this.hideDropdown(),
            s(this, AU).focus({ preventScroll: !0, focusVisible: s(this, Mn) });
        }
      }
      updateColor(U) {
        if (
          (s(this, mF) && (s(this, mF).style.backgroundColor = U), !s(this, Ll))
        )
          return;
        const l = s(this, _U).highlightColors.values();
        for (const d of s(this, Ll).children)
          d.setAttribute('aria-selected', l.next().value === U);
      }
      destroy() {
        var U, l;
        (U = s(this, AU)) == null || U.remove(),
          e(this, AU, null),
          e(this, mF, null),
          (l = s(this, Ll)) == null || l.remove(),
          e(this, Ll, null);
      }
    }),
    (en = new WeakMap()),
    (mn = new WeakMap()),
    (AU = new WeakMap()),
    (mF = new WeakMap()),
    (ac = new WeakMap()),
    (Ll = new WeakMap()),
    (Mn = new WeakMap()),
    (ic = new WeakMap()),
    (Jn = new WeakMap()),
    (Gn = new WeakMap()),
    (_U = new WeakMap()),
    (Rc = new WeakMap()),
    (Tn = new WeakSet()),
    (oh = function () {
      const U = document.createElement('div'),
        l = s(this, _U)._signal;
      U.addEventListener('contextmenu', VU, { signal: l }),
        (U.className = 'dropdown'),
        (U.role = 'listbox'),
        U.setAttribute('aria-multiselectable', !1),
        U.setAttribute('aria-orientation', 'vertical'),
        U.setAttribute('data-l10n-id', 'pdfjs-editor-colorpicker-dropdown');
      for (const [d, Z] of s(this, _U).highlightColors) {
        const t = document.createElement('button');
        (t.tabIndex = '0'),
          (t.role = 'option'),
          t.setAttribute('data-color', Z),
          (t.title = d),
          t.setAttribute('data-l10n-id', `pdfjs-editor-colorpicker-${d}`);
        const F = document.createElement('span');
        t.append(F),
          (F.className = 'swatch'),
          (F.style.backgroundColor = Z),
          t.setAttribute('aria-selected', Z === s(this, ac)),
          t.addEventListener('click', b(this, Sn, Bh).bind(this, Z), {
            signal: l,
          }),
          U.append(t);
      }
      return U.addEventListener('keydown', s(this, en), { signal: l }), U;
    }),
    (Sn = new WeakSet()),
    (Bh = function (U, l) {
      l.stopPropagation(),
        s(this, Gn).dispatch('switchannotationeditorparams', {
          source: this,
          type: s(this, Rc),
          value: U,
        });
    }),
    (di = new WeakSet()),
    (c2 = function (U) {
      qU._keyboardManager.exec(this, U);
    }),
    (tZ = new WeakSet()),
    (c0 = function (U) {
      if (s(this, bd, et)) {
        this.hideDropdown();
        return;
      }
      if (
        (e(this, Mn, U.detail === 0),
        window.addEventListener('pointerdown', s(this, mn), {
          signal: s(this, _U)._signal,
        }),
        s(this, Ll))
      ) {
        s(this, Ll).classList.remove('hidden');
        return;
      }
      const l = e(this, Ll, b(this, Tn, oh).call(this));
      s(this, AU).append(l);
    }),
    (Zi = new WeakSet()),
    (s2 = function (U) {
      var l;
      ((l = s(this, Ll)) != null && l.contains(U.target)) ||
        this.hideDropdown();
    }),
    (bd = new WeakSet()),
    (et = function () {
      return s(this, Ll) && !s(this, Ll).classList.contains('hidden');
    }),
    qU);
  const tl = class tl extends Fl {
    constructor(l) {
      super({ ...l, name: 'highlightEditor' });
      R(this, on);
      R(this, Bn);
      R(this, Fi);
      R(this, ci);
      R(this, si);
      R(this, yn);
      R(this, TF);
      R(this, Qi);
      R(this, mc);
      R(this, SF);
      R(this, ni);
      R(this, Vi);
      R(this, Nc, null);
      R(this, Xn, 0);
      R(this, HZ, void 0);
      R(this, MF, null);
      R(this, hc, null);
      R(this, LU, null);
      R(this, Yn, null);
      R(this, un, 0);
      R(this, JF, null);
      R(this, $U, null);
      R(this, tU, null);
      R(this, SU, !1);
      R(this, ti, b(this, Qi, W2).bind(this));
      R(this, bc, null);
      R(this, GF, void 0);
      R(this, zl, null);
      R(this, ec, '');
      R(this, ed, void 0);
      R(this, pn, '');
      (this.color = l.color || tl._defaultColor),
        e(this, ed, l.thickness || tl._defaultThickness),
        e(this, GF, l.opacity || tl._defaultOpacity),
        e(this, HZ, l.boxes || null),
        e(this, pn, l.methodOfCreation || ''),
        e(this, ec, l.text || ''),
        (this._isDraggable = !1),
        l.highlightId > -1
          ? (e(this, SU, !0),
            b(this, Bn, Lh).call(this, l),
            b(this, TF, AV).call(this))
          : (e(this, Nc, l.anchorNode),
            e(this, Xn, l.anchorOffset),
            e(this, Yn, l.focusNode),
            e(this, un, l.focusOffset),
            b(this, on, yh).call(this),
            b(this, TF, AV).call(this),
            this.rotate(this.rotation));
    }
    static get _keyboardManager() {
      const l = tl.prototype;
      return Zl(
        this,
        '_keyboardManager',
        new is([
          [['ArrowLeft', 'mac+ArrowLeft'], l._moveCaret, { args: [0] }],
          [['ArrowRight', 'mac+ArrowRight'], l._moveCaret, { args: [1] }],
          [['ArrowUp', 'mac+ArrowUp'], l._moveCaret, { args: [2] }],
          [['ArrowDown', 'mac+ArrowDown'], l._moveCaret, { args: [3] }],
        ]),
      );
    }
    get telemetryInitialData() {
      return {
        action: 'added',
        type: s(this, SU) ? 'free_highlight' : 'highlight',
        color: this._uiManager.highlightColorNames.get(this.color),
        thickness: s(this, ed),
        methodOfCreation: s(this, pn),
      };
    }
    get telemetryFinalData() {
      return {
        type: 'highlight',
        color: this._uiManager.highlightColorNames.get(this.color),
      };
    }
    static computeTelemetryFinalData(l) {
      return { numberOfColors: l.get('color').size };
    }
    static initialize(l, d) {
      var Z;
      Fl.initialize(l, d),
        tl._defaultColor ||
          (tl._defaultColor =
            ((Z = d.highlightColors) == null
              ? void 0
              : Z.values().next().value) || '#fff066');
    }
    static updateDefaultParams(l, d) {
      switch (l) {
        case P.HIGHLIGHT_DEFAULT_COLOR:
          tl._defaultColor = d;
          break;
        case P.HIGHLIGHT_THICKNESS:
          tl._defaultThickness = d;
          break;
      }
    }
    translateInPage(l, d) {}
    get toolbarPosition() {
      return s(this, bc);
    }
    updateParams(l, d) {
      switch (l) {
        case P.HIGHLIGHT_COLOR:
          b(this, Fi, Q2).call(this, d);
          break;
        case P.HIGHLIGHT_THICKNESS:
          b(this, ci, n2).call(this, d);
          break;
      }
    }
    static get defaultPropertiesToUpdate() {
      return [
        [P.HIGHLIGHT_DEFAULT_COLOR, tl._defaultColor],
        [P.HIGHLIGHT_THICKNESS, tl._defaultThickness],
      ];
    }
    get propertiesToUpdate() {
      return [
        [P.HIGHLIGHT_COLOR, this.color || tl._defaultColor],
        [P.HIGHLIGHT_THICKNESS, s(this, ed) || tl._defaultThickness],
        [P.HIGHLIGHT_FREE, s(this, SU)],
      ];
    }
    async addEditToolbar() {
      const l = await super.addEditToolbar();
      return l
        ? (this._uiManager.highlightColors &&
            (e(this, hc, new We({ editor: this })),
            l.addColorPicker(s(this, hc))),
          l)
        : null;
    }
    disableEditing() {
      super.disableEditing(), this.div.classList.toggle('disabled', !0);
    }
    enableEditing() {
      super.enableEditing(), this.div.classList.toggle('disabled', !1);
    }
    fixAndSetPosition() {
      return super.fixAndSetPosition(b(this, SF, _V).call(this));
    }
    getBaseTranslation() {
      return [0, 0];
    }
    getRect(l, d) {
      return super.getRect(l, d, b(this, SF, _V).call(this));
    }
    onceAdded() {
      this.parent.addUndoableEditor(this), this.div.focus();
    }
    remove() {
      b(this, yn, zh).call(this),
        this._reportTelemetry({ action: 'deleted' }),
        super.remove();
    }
    rebuild() {
      this.parent &&
        (super.rebuild(),
        this.div !== null &&
          (b(this, TF, AV).call(this),
          this.isAttachedToDOM || this.parent.add(this)));
    }
    setParent(l) {
      var Z;
      let d = !1;
      this.parent && !l
        ? b(this, yn, zh).call(this)
        : l &&
          (b(this, TF, AV).call(this, l),
          (d =
            !this.parent &&
            ((Z = this.div) == null
              ? void 0
              : Z.classList.contains('selectedEditor')))),
        super.setParent(l),
        this.show(this._isVisible),
        d && this.select();
    }
    rotate(l) {
      var t, F, c;
      const { drawLayer: d } = this.parent;
      let Z;
      s(this, SU)
        ? ((l = (l - this.rotation + 360) % 360),
          (Z = b((t = tl), PZ, cs).call(t, s(this, $U).box, l)))
        : (Z = b((F = tl), PZ, cs).call(F, this, l)),
        d.rotate(s(this, tU), l),
        d.rotate(s(this, zl), l),
        d.updateBox(s(this, tU), Z),
        d.updateBox(
          s(this, zl),
          b((c = tl), PZ, cs).call(c, s(this, LU).box, l),
        );
    }
    render() {
      if (this.div) return this.div;
      const l = super.render();
      s(this, ec) &&
        (l.setAttribute('aria-label', s(this, ec)),
        l.setAttribute('role', 'mark')),
        s(this, SU)
          ? l.classList.add('free')
          : this.div.addEventListener('keydown', s(this, ti), {
              signal: this._uiManager._signal,
            });
      const d = e(this, JF, document.createElement('div'));
      l.append(d),
        d.setAttribute('aria-hidden', 'true'),
        (d.className = 'internal'),
        (d.style.clipPath = s(this, MF));
      const [Z, t] = this.parentDimensions;
      return (
        this.setDims(this.width * Z, this.height * t),
        eW(this, s(this, JF), ['pointerover', 'pointerleave']),
        this.enableEditing(),
        l
      );
    }
    pointerover() {
      this.parent.drawLayer.addClass(s(this, zl), 'hovered');
    }
    pointerleave() {
      this.parent.drawLayer.removeClass(s(this, zl), 'hovered');
    }
    _moveCaret(l) {
      switch ((this.parent.unselect(this), l)) {
        case 0:
        case 2:
          b(this, mc, BR).call(this, !0);
          break;
        case 1:
        case 3:
          b(this, mc, BR).call(this, !1);
          break;
      }
    }
    select() {
      var l, d;
      super.select(),
        s(this, zl) &&
          ((l = this.parent) == null ||
            l.drawLayer.removeClass(s(this, zl), 'hovered'),
          (d = this.parent) == null ||
            d.drawLayer.addClass(s(this, zl), 'selected'));
    }
    unselect() {
      var l;
      super.unselect(),
        s(this, zl) &&
          ((l = this.parent) == null ||
            l.drawLayer.removeClass(s(this, zl), 'selected'),
          s(this, SU) || b(this, mc, BR).call(this, !1));
    }
    get _mustFixPosition() {
      return !s(this, SU);
    }
    show(l = this._isVisible) {
      super.show(l),
        this.parent &&
          (this.parent.drawLayer.show(s(this, tU), l),
          this.parent.drawLayer.show(s(this, zl), l));
    }
    static startHighlighting(l, d, { target: Z, x: t, y: F }) {
      const { x: c, y: n, width: V, height: W } = Z.getBoundingClientRect(),
        a = (J) => {
          b(this, Wi, R2).call(this, l, J);
        },
        i = l._signal,
        h = { capture: !0, passive: !1, signal: i },
        N = (J) => {
          J.preventDefault(), J.stopPropagation();
        },
        M = (J) => {
          Z.removeEventListener('pointermove', a),
            window.removeEventListener('blur', M),
            window.removeEventListener('pointerup', M),
            window.removeEventListener('pointerdown', N, h),
            window.removeEventListener('contextmenu', VU),
            b(this, ai, N2).call(this, l, J);
        };
      window.addEventListener('blur', M, { signal: i }),
        window.addEventListener('pointerup', M, { signal: i }),
        window.addEventListener('pointerdown', N, h),
        window.addEventListener('contextmenu', VU, { signal: i }),
        Z.addEventListener('pointermove', a, { signal: i }),
        (this._freeHighlight = new oW(
          { x: t, y: F },
          [c, n, V, W],
          l.scale,
          this._defaultThickness / 2,
          d,
          0.001,
        )),
        ({ id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } =
          l.drawLayer.highlight(
            this._freeHighlight,
            this._defaultColor,
            this._defaultOpacity,
            !0,
          ));
    }
    static deserialize(l, d, Z) {
      var M;
      const t = super.deserialize(l, d, Z),
        {
          rect: [F, c, n, V],
          color: W,
          quadPoints: a,
        } = l;
      (t.color = g.makeHexColor(...W)), e(t, GF, l.opacity);
      const [i, h] = t.pageDimensions;
      (t.width = (n - F) / i), (t.height = (V - c) / h);
      const N = e(t, HZ, []);
      for (let J = 0; J < a.length; J += 8)
        N.push({
          x: (a[4] - n) / i,
          y: (V - (1 - a[J + 5])) / h,
          width: (a[J + 2] - a[J]) / i,
          height: (a[J + 5] - a[J + 1]) / h,
        });
      return b((M = t), on, yh).call(M), t;
    }
    serialize(l = !1) {
      if (this.isEmpty() || l) return null;
      const d = this.getRect(0, 0),
        Z = Fl._colorManager.convert(this.color);
      return {
        annotationType: ll.HIGHLIGHT,
        color: Z,
        opacity: s(this, GF),
        thickness: s(this, ed),
        quadPoints: b(this, ni, a2).call(this),
        outlines: b(this, Vi, i2).call(this, d),
        pageIndex: this.pageIndex,
        rect: d,
        rotation: b(this, SF, _V).call(this),
        structTreeParentId: this._structTreeParentId,
      };
    }
    static canCreateNewEmptyEditor() {
      return !1;
    }
  };
  (Nc = new WeakMap()),
    (Xn = new WeakMap()),
    (HZ = new WeakMap()),
    (MF = new WeakMap()),
    (hc = new WeakMap()),
    (LU = new WeakMap()),
    (Yn = new WeakMap()),
    (un = new WeakMap()),
    (JF = new WeakMap()),
    ($U = new WeakMap()),
    (tU = new WeakMap()),
    (SU = new WeakMap()),
    (ti = new WeakMap()),
    (bc = new WeakMap()),
    (GF = new WeakMap()),
    (zl = new WeakMap()),
    (ec = new WeakMap()),
    (ed = new WeakMap()),
    (pn = new WeakMap()),
    (on = new WeakSet()),
    (yh = function () {
      const l = new SN(s(this, HZ), 0.001);
      e(this, $U, l.getOutlines()),
        ({
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height,
        } = s(this, $U).box);
      const d = new SN(
        s(this, HZ),
        0.0025,
        0.001,
        this._uiManager.direction === 'ltr',
      );
      e(this, LU, d.getOutlines());
      const { lastPoint: Z } = s(this, LU).box;
      e(this, bc, [
        (Z[0] - this.x) / this.width,
        (Z[1] - this.y) / this.height,
      ]);
    }),
    (Bn = new WeakSet()),
    (Lh = function ({ highlightOutlines: l, highlightId: d, clipPathId: Z }) {
      var a, i;
      e(this, $U, l);
      const t = 1.5;
      if ((e(this, LU, l.getNewOutline(s(this, ed) / 2 + t, 0.0025)), d >= 0))
        e(this, tU, d),
          e(this, MF, Z),
          this.parent.drawLayer.finalizeLine(d, l),
          e(this, zl, this.parent.drawLayer.highlightOutline(s(this, LU)));
      else if (this.parent) {
        const h = this.parent.viewport.rotation;
        this.parent.drawLayer.updateLine(s(this, tU), l),
          this.parent.drawLayer.updateBox(
            s(this, tU),
            b((a = tl), PZ, cs).call(
              a,
              s(this, $U).box,
              (h - this.rotation + 360) % 360,
            ),
          ),
          this.parent.drawLayer.updateLine(s(this, zl), s(this, LU)),
          this.parent.drawLayer.updateBox(
            s(this, zl),
            b((i = tl), PZ, cs).call(i, s(this, LU).box, h),
          );
      }
      const { x: F, y: c, width: n, height: V } = l.box;
      switch (this.rotation) {
        case 0:
          (this.x = F), (this.y = c), (this.width = n), (this.height = V);
          break;
        case 90: {
          const [h, N] = this.parentDimensions;
          (this.x = c),
            (this.y = 1 - F),
            (this.width = (n * N) / h),
            (this.height = (V * h) / N);
          break;
        }
        case 180:
          (this.x = 1 - F),
            (this.y = 1 - c),
            (this.width = n),
            (this.height = V);
          break;
        case 270: {
          const [h, N] = this.parentDimensions;
          (this.x = 1 - c),
            (this.y = F),
            (this.width = (n * N) / h),
            (this.height = (V * h) / N);
          break;
        }
      }
      const { lastPoint: W } = s(this, LU).box;
      e(this, bc, [(W[0] - F) / n, (W[1] - c) / V]);
    }),
    (Fi = new WeakSet()),
    (Q2 = function (l) {
      const d = (t) => {
          var F, c;
          (this.color = t),
            (F = this.parent) == null ||
              F.drawLayer.changeColor(s(this, tU), t),
            (c = s(this, hc)) == null || c.updateColor(t);
        },
        Z = this.color;
      this.addCommands({
        cmd: d.bind(this, l),
        undo: d.bind(this, Z),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: !0,
        type: P.HIGHLIGHT_COLOR,
        overwriteIfSameType: !0,
        keepUndo: !0,
      }),
        this._reportTelemetry(
          {
            action: 'color_changed',
            color: this._uiManager.highlightColorNames.get(l),
          },
          !0,
        );
    }),
    (ci = new WeakSet()),
    (n2 = function (l) {
      const d = s(this, ed),
        Z = (t) => {
          e(this, ed, t), b(this, si, V2).call(this, t);
        };
      this.addCommands({
        cmd: Z.bind(this, l),
        undo: Z.bind(this, d),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: !0,
        type: P.INK_THICKNESS,
        overwriteIfSameType: !0,
        keepUndo: !0,
      }),
        this._reportTelemetry(
          { action: 'thickness_changed', thickness: l },
          !0,
        );
    }),
    (si = new WeakSet()),
    (V2 = function (l) {
      if (!s(this, SU)) return;
      b(this, Bn, Lh).call(this, {
        highlightOutlines: s(this, $U).getNewOutline(l / 2),
      }),
        this.fixAndSetPosition();
      const [d, Z] = this.parentDimensions;
      this.setDims(this.width * d, this.height * Z);
    }),
    (yn = new WeakSet()),
    (zh = function () {
      s(this, tU) === null ||
        !this.parent ||
        (this.parent.drawLayer.remove(s(this, tU)),
        e(this, tU, null),
        this.parent.drawLayer.remove(s(this, zl)),
        e(this, zl, null));
    }),
    (TF = new WeakSet()),
    (AV = function (l = this.parent) {
      s(this, tU) === null &&
        (({ id: hU(this, tU)._, clipPathId: hU(this, MF)._ } =
          l.drawLayer.highlight(s(this, $U), this.color, s(this, GF))),
        e(this, zl, l.drawLayer.highlightOutline(s(this, LU))),
        s(this, JF) && (s(this, JF).style.clipPath = s(this, MF)));
    }),
    (PZ = new WeakSet()),
    (cs = function ({ x: l, y: d, width: Z, height: t }, F) {
      switch (F) {
        case 90:
          return { x: 1 - d - t, y: l, width: t, height: Z };
        case 180:
          return { x: 1 - l - Z, y: 1 - d - t, width: Z, height: t };
        case 270:
          return { x: d, y: 1 - l - Z, width: t, height: Z };
      }
      return { x: l, y: d, width: Z, height: t };
    }),
    (Qi = new WeakSet()),
    (W2 = function (l) {
      tl._keyboardManager.exec(this, l);
    }),
    (mc = new WeakSet()),
    (BR = function (l) {
      if (!s(this, Nc)) return;
      const d = window.getSelection();
      l
        ? d.setPosition(s(this, Nc), s(this, Xn))
        : d.setPosition(s(this, Yn), s(this, un));
    }),
    (SF = new WeakSet()),
    (_V = function () {
      return s(this, SU) ? this.rotation : 0;
    }),
    (ni = new WeakSet()),
    (a2 = function () {
      if (s(this, SU)) return null;
      const [l, d] = this.pageDimensions,
        Z = s(this, HZ),
        t = new Float32Array(Z.length * 8);
      let F = 0;
      for (const { x: c, y: n, width: V, height: W } of Z) {
        const a = c * l,
          i = (1 - n - W) * d;
        (t[F] = t[F + 4] = a),
          (t[F + 1] = t[F + 3] = i),
          (t[F + 2] = t[F + 6] = a + V * l),
          (t[F + 5] = t[F + 7] = i + W * d),
          (F += 8);
      }
      return t;
    }),
    (Vi = new WeakSet()),
    (i2 = function (l) {
      return s(this, $U).serialize(l, b(this, SF, _V).call(this));
    }),
    (Wi = new WeakSet()),
    (R2 = function (l, d) {
      this._freeHighlight.add(d) &&
        l.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight);
    }),
    (ai = new WeakSet()),
    (N2 = function (l, d) {
      this._freeHighlight.isEmpty()
        ? l.drawLayer.removeFreeHighlight(this._freeHighlightId)
        : l.createAndAddNewEditor(d, !1, {
            highlightId: this._freeHighlightId,
            highlightOutlines: this._freeHighlight.getOutlines(),
            clipPathId: this._freeHighlightClipId,
            methodOfCreation: 'main_toolbar',
          }),
        (this._freeHighlightId = -1),
        (this._freeHighlight = null),
        (this._freeHighlightClipId = '');
    }),
    R(tl, PZ),
    R(tl, Wi),
    R(tl, ai),
    f(tl, '_defaultColor', null),
    f(tl, '_defaultOpacity', 1),
    f(tl, '_defaultThickness', 12),
    f(tl, '_l10nPromise'),
    f(tl, '_type', 'highlight'),
    f(tl, '_editorType', ll.HIGHLIGHT),
    f(tl, '_freeHighlightId', -1),
    f(tl, '_freeHighlight', null),
    f(tl, '_freeHighlightClipId', '');
  let BW = tl;
  const il = class il extends Fl {
    constructor(l) {
      super({ ...l, name: 'inkEditor' });
      R(this, ii);
      R(this, Ri);
      R(this, Ni);
      R(this, hi);
      R(this, Dn);
      R(this, bi);
      R(this, In);
      R(this, ei);
      R(this, mi);
      R(this, Mi);
      R(this, Ji);
      R(this, Gi);
      R(this, sZ);
      R(this, En);
      R(this, Mc);
      R(this, Jc);
      R(this, AZ);
      R(this, Cn);
      R(this, Gc);
      R(this, Xi);
      R(this, wn);
      R(this, Tc);
      R(this, LF);
      R(this, XF, 0);
      R(this, YF, 0);
      R(this, Ln, this.canvasPointermove.bind(this));
      R(this, zn, this.canvasPointerleave.bind(this));
      R(this, kn, this.canvasPointerup.bind(this));
      R(this, uF, this.canvasPointerdown.bind(this));
      R(this, md, null);
      R(this, FZ, new Path2D());
      R(this, zU, !1);
      R(this, pF, !1);
      R(this, oF, !1);
      R(this, cZ, null);
      R(this, BF, 0);
      R(this, yF, 0);
      R(this, fZ, null);
      (this.color = l.color || null),
        (this.thickness = l.thickness || null),
        (this.opacity = l.opacity || null),
        (this.paths = []),
        (this.bezierPath2D = []),
        (this.allRawPaths = []),
        (this.currentPath = []),
        (this.scaleFactor = 1),
        (this.translationX = this.translationY = 0),
        (this.x = 0),
        (this.y = 0),
        (this._willKeepAspectRatio = !0);
    }
    static initialize(l, d) {
      Fl.initialize(l, d);
    }
    static updateDefaultParams(l, d) {
      switch (l) {
        case P.INK_THICKNESS:
          il._defaultThickness = d;
          break;
        case P.INK_COLOR:
          il._defaultColor = d;
          break;
        case P.INK_OPACITY:
          il._defaultOpacity = d / 100;
          break;
      }
    }
    updateParams(l, d) {
      switch (l) {
        case P.INK_THICKNESS:
          b(this, ii, h2).call(this, d);
          break;
        case P.INK_COLOR:
          b(this, Ri, b2).call(this, d);
          break;
        case P.INK_OPACITY:
          b(this, Ni, e2).call(this, d);
          break;
      }
    }
    static get defaultPropertiesToUpdate() {
      return [
        [P.INK_THICKNESS, il._defaultThickness],
        [P.INK_COLOR, il._defaultColor || Fl._defaultLineColor],
        [P.INK_OPACITY, Math.round(il._defaultOpacity * 100)],
      ];
    }
    get propertiesToUpdate() {
      return [
        [P.INK_THICKNESS, this.thickness || il._defaultThickness],
        [P.INK_COLOR, this.color || il._defaultColor || Fl._defaultLineColor],
        [P.INK_OPACITY, Math.round(100 * (this.opacity ?? il._defaultOpacity))],
      ];
    }
    rebuild() {
      this.parent &&
        (super.rebuild(),
        this.div !== null &&
          (this.canvas ||
            (b(this, Mc, yR).call(this), b(this, Jc, LR).call(this)),
          this.isAttachedToDOM ||
            (this.parent.add(this), b(this, AZ, ss).call(this)),
          b(this, LF, qV).call(this)));
    }
    remove() {
      var l;
      this.canvas !== null &&
        (this.isEmpty() || this.commit(),
        (this.canvas.width = this.canvas.height = 0),
        this.canvas.remove(),
        (this.canvas = null),
        s(this, md) && (clearTimeout(s(this, md)), e(this, md, null)),
        (l = s(this, cZ)) == null || l.disconnect(),
        e(this, cZ, null),
        super.remove());
    }
    setParent(l) {
      !this.parent && l
        ? this._uiManager.removeShouldRescale(this)
        : this.parent && l === null && this._uiManager.addShouldRescale(this),
        super.setParent(l);
    }
    onScaleChanging() {
      const [l, d] = this.parentDimensions,
        Z = this.width * l,
        t = this.height * d;
      this.setDimensions(Z, t);
    }
    enableEditMode() {
      s(this, zU) ||
        this.canvas === null ||
        (super.enableEditMode(),
        (this._isDraggable = !1),
        this.canvas.addEventListener('pointerdown', s(this, uF), {
          signal: this._uiManager._signal,
        }));
    }
    disableEditMode() {
      !this.isInEditMode() ||
        this.canvas === null ||
        (super.disableEditMode(),
        (this._isDraggable = !this.isEmpty()),
        this.div.classList.remove('editing'),
        this.canvas.removeEventListener('pointerdown', s(this, uF)));
    }
    onceAdded() {
      this._isDraggable = !this.isEmpty();
    }
    isEmpty() {
      return (
        this.paths.length === 0 ||
        (this.paths.length === 1 && this.paths[0].length === 0)
      );
    }
    commit() {
      s(this, zU) ||
        (super.commit(),
        (this.isEditing = !1),
        this.disableEditMode(),
        this.setInForeground(),
        e(this, zU, !0),
        this.div.classList.add('disabled'),
        b(this, LF, qV).call(this, !0),
        this.select(),
        this.parent.addInkEditorIfNeeded(!0),
        this.moveInDOM(),
        this.div.focus({ preventScroll: !0 }));
    }
    focusin(l) {
      this._focusEventsAllowed && (super.focusin(l), this.enableEditMode());
    }
    canvasPointerdown(l) {
      l.button !== 0 ||
        !this.isInEditMode() ||
        s(this, zU) ||
        (this.setInForeground(),
        l.preventDefault(),
        this.div.contains(document.activeElement) ||
          this.div.focus({ preventScroll: !0 }),
        b(this, bi, M2).call(this, l.offsetX, l.offsetY));
    }
    canvasPointermove(l) {
      l.preventDefault(), b(this, In, Dh).call(this, l.offsetX, l.offsetY);
    }
    canvasPointerup(l) {
      l.preventDefault(), b(this, En, Ih).call(this, l);
    }
    canvasPointerleave(l) {
      b(this, En, Ih).call(this, l);
    }
    get isResizable() {
      return !this.isEmpty() && s(this, zU);
    }
    render() {
      if (this.div) return this.div;
      let l, d;
      this.width && ((l = this.x), (d = this.y)),
        super.render(),
        this.div.setAttribute('data-l10n-id', 'pdfjs-ink');
      const [Z, t, F, c] = b(this, hi, m2).call(this);
      if (
        (this.setAt(Z, t, 0, 0),
        this.setDims(F, c),
        b(this, Mc, yR).call(this),
        this.width)
      ) {
        const [n, V] = this.parentDimensions;
        this.setAspectRatio(this.width * n, this.height * V),
          this.setAt(l * n, d * V, this.width * n, this.height * V),
          e(this, oF, !0),
          b(this, AZ, ss).call(this),
          this.setDims(this.width * n, this.height * V),
          b(this, sZ, s0).call(this),
          this.div.classList.add('disabled');
      } else this.div.classList.add('editing'), this.enableEditMode();
      return b(this, Jc, LR).call(this), this.div;
    }
    setDimensions(l, d) {
      const Z = Math.round(l),
        t = Math.round(d);
      if (s(this, BF) === Z && s(this, yF) === t) return;
      e(this, BF, Z), e(this, yF, t), (this.canvas.style.visibility = 'hidden');
      const [F, c] = this.parentDimensions;
      (this.width = l / F),
        (this.height = d / c),
        this.fixAndSetPosition(),
        s(this, zU) && b(this, Cn, Eh).call(this, l, d),
        b(this, AZ, ss).call(this),
        b(this, sZ, s0).call(this),
        (this.canvas.style.visibility = 'visible'),
        this.fixDims();
    }
    static deserialize(l, d, Z) {
      var J, m, G;
      if (l instanceof Qe) return null;
      const t = super.deserialize(l, d, Z);
      (t.thickness = l.thickness),
        (t.color = g.makeHexColor(...l.color)),
        (t.opacity = l.opacity);
      const [F, c] = t.pageDimensions,
        n = t.width * F,
        V = t.height * c,
        W = t.parentScale,
        a = l.thickness / 2;
      e(t, zU, !0), e(t, BF, Math.round(n)), e(t, yF, Math.round(V));
      const { paths: i, rect: h, rotation: N } = l;
      for (let { bezier: T } of i) {
        T = b((J = il), Si, u2).call(J, T, h, N);
        const u = [];
        t.paths.push(u);
        let X = W * (T[0] - a),
          S = W * (T[1] - a);
        for (let L = 2, Y = T.length; L < Y; L += 6) {
          const o = W * (T[L] - a),
            y = W * (T[L + 1] - a),
            D = W * (T[L + 2] - a),
            I = W * (T[L + 3] - a),
            O = W * (T[L + 4] - a),
            x = W * (T[L + 5] - a);
          u.push([
            [X, S],
            [o, y],
            [D, I],
            [O, x],
          ]),
            (X = O),
            (S = x);
        }
        const p = b(this, Ti, Y2).call(this, u);
        t.bezierPath2D.push(p);
      }
      const M = b((m = t), wn, rh).call(m);
      return (
        e(t, YF, Math.max(Fl.MIN_SIZE, M[2] - M[0])),
        e(t, XF, Math.max(Fl.MIN_SIZE, M[3] - M[1])),
        b((G = t), Cn, Eh).call(G, n, V),
        t
      );
    }
    serialize() {
      if (this.isEmpty()) return null;
      const l = this.getRect(0, 0),
        d = Fl._colorManager.convert(this.ctx.strokeStyle);
      return {
        annotationType: ll.INK,
        color: d,
        thickness: this.thickness,
        opacity: this.opacity,
        paths: b(this, Xi, p2).call(
          this,
          this.scaleFactor / this.parentScale,
          this.translationX,
          this.translationY,
          l,
        ),
        pageIndex: this.pageIndex,
        rect: l,
        rotation: this.rotation,
        structTreeParentId: this._structTreeParentId,
      };
    }
  };
  (XF = new WeakMap()),
    (YF = new WeakMap()),
    (Ln = new WeakMap()),
    (zn = new WeakMap()),
    (kn = new WeakMap()),
    (uF = new WeakMap()),
    (md = new WeakMap()),
    (FZ = new WeakMap()),
    (zU = new WeakMap()),
    (pF = new WeakMap()),
    (oF = new WeakMap()),
    (cZ = new WeakMap()),
    (BF = new WeakMap()),
    (yF = new WeakMap()),
    (fZ = new WeakMap()),
    (ii = new WeakSet()),
    (h2 = function (l) {
      const d = (t) => {
          (this.thickness = t), b(this, LF, qV).call(this);
        },
        Z = this.thickness;
      this.addCommands({
        cmd: d.bind(this, l),
        undo: d.bind(this, Z),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: !0,
        type: P.INK_THICKNESS,
        overwriteIfSameType: !0,
        keepUndo: !0,
      });
    }),
    (Ri = new WeakSet()),
    (b2 = function (l) {
      const d = (t) => {
          (this.color = t), b(this, sZ, s0).call(this);
        },
        Z = this.color;
      this.addCommands({
        cmd: d.bind(this, l),
        undo: d.bind(this, Z),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: !0,
        type: P.INK_COLOR,
        overwriteIfSameType: !0,
        keepUndo: !0,
      });
    }),
    (Ni = new WeakSet()),
    (e2 = function (l) {
      const d = (t) => {
        (this.opacity = t), b(this, sZ, s0).call(this);
      };
      l /= 100;
      const Z = this.opacity;
      this.addCommands({
        cmd: d.bind(this, l),
        undo: d.bind(this, Z),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: !0,
        type: P.INK_OPACITY,
        overwriteIfSameType: !0,
        keepUndo: !0,
      });
    }),
    (hi = new WeakSet()),
    (m2 = function () {
      const {
        parentRotation: l,
        parentDimensions: [d, Z],
      } = this;
      switch (l) {
        case 90:
          return [0, Z, Z, d];
        case 180:
          return [d, Z, d, Z];
        case 270:
          return [d, 0, Z, d];
        default:
          return [0, 0, d, Z];
      }
    }),
    (Dn = new WeakSet()),
    (kh = function () {
      const {
        ctx: l,
        color: d,
        opacity: Z,
        thickness: t,
        parentScale: F,
        scaleFactor: c,
      } = this;
      (l.lineWidth = (t * F) / c),
        (l.lineCap = 'round'),
        (l.lineJoin = 'round'),
        (l.miterLimit = 10),
        (l.strokeStyle = `${d}${IM(Z)}`);
    }),
    (bi = new WeakSet()),
    (M2 = function (l, d) {
      const Z = this._uiManager._signal;
      this.canvas.addEventListener('contextmenu', VU, { signal: Z }),
        this.canvas.addEventListener('pointerleave', s(this, zn), {
          signal: Z,
        }),
        this.canvas.addEventListener('pointermove', s(this, Ln), { signal: Z }),
        this.canvas.addEventListener('pointerup', s(this, kn), { signal: Z }),
        this.canvas.removeEventListener('pointerdown', s(this, uF)),
        (this.isEditing = !0),
        s(this, oF) ||
          (e(this, oF, !0),
          b(this, AZ, ss).call(this),
          this.thickness || (this.thickness = il._defaultThickness),
          this.color || (this.color = il._defaultColor || Fl._defaultLineColor),
          this.opacity ?? (this.opacity = il._defaultOpacity)),
        this.currentPath.push([l, d]),
        e(this, pF, !1),
        b(this, Dn, kh).call(this),
        e(this, fZ, () => {
          b(this, Mi, T2).call(this),
            s(this, fZ) && window.requestAnimationFrame(s(this, fZ));
        }),
        window.requestAnimationFrame(s(this, fZ));
    }),
    (In = new WeakSet()),
    (Dh = function (l, d) {
      const [Z, t] = this.currentPath.at(-1);
      if (this.currentPath.length > 1 && l === Z && d === t) return;
      const F = this.currentPath;
      let c = s(this, FZ);
      if ((F.push([l, d]), e(this, pF, !0), F.length <= 2)) {
        c.moveTo(...F[0]), c.lineTo(l, d);
        return;
      }
      F.length === 3 && (e(this, FZ, (c = new Path2D())), c.moveTo(...F[0])),
        b(this, Ji, S2).call(this, c, ...F.at(-3), ...F.at(-2), l, d);
    }),
    (ei = new WeakSet()),
    (J2 = function () {
      if (this.currentPath.length === 0) return;
      const l = this.currentPath.at(-1);
      s(this, FZ).lineTo(...l);
    }),
    (mi = new WeakSet()),
    (G2 = function (l, d) {
      e(this, fZ, null),
        (l = Math.min(Math.max(l, 0), this.canvas.width)),
        (d = Math.min(Math.max(d, 0), this.canvas.height)),
        b(this, In, Dh).call(this, l, d),
        b(this, ei, J2).call(this);
      let Z;
      if (this.currentPath.length !== 1) Z = b(this, Gi, X2).call(this);
      else {
        const V = [l, d];
        Z = [[V, V.slice(), V.slice(), V]];
      }
      const t = s(this, FZ),
        F = this.currentPath;
      (this.currentPath = []), e(this, FZ, new Path2D());
      const c = () => {
          this.allRawPaths.push(F),
            this.paths.push(Z),
            this.bezierPath2D.push(t),
            this._uiManager.rebuild(this);
        },
        n = () => {
          this.allRawPaths.pop(),
            this.paths.pop(),
            this.bezierPath2D.pop(),
            this.paths.length === 0
              ? this.remove()
              : (this.canvas ||
                  (b(this, Mc, yR).call(this), b(this, Jc, LR).call(this)),
                b(this, LF, qV).call(this));
        };
      this.addCommands({ cmd: c, undo: n, mustExec: !0 });
    }),
    (Mi = new WeakSet()),
    (T2 = function () {
      if (!s(this, pF)) return;
      e(this, pF, !1);
      const l = Math.ceil(this.thickness * this.parentScale),
        d = this.currentPath.slice(-3),
        Z = d.map((c) => c[0]),
        t = d.map((c) => c[1]);
      Math.min(...Z) - l,
        Math.max(...Z) + l,
        Math.min(...t) - l,
        Math.max(...t) + l;
      const { ctx: F } = this;
      F.save(), F.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (const c of this.bezierPath2D) F.stroke(c);
      F.stroke(s(this, FZ)), F.restore();
    }),
    (Ji = new WeakSet()),
    (S2 = function (l, d, Z, t, F, c, n) {
      const V = (d + t) / 2,
        W = (Z + F) / 2,
        a = (t + c) / 2,
        i = (F + n) / 2;
      l.bezierCurveTo(
        V + (2 * (t - V)) / 3,
        W + (2 * (F - W)) / 3,
        a + (2 * (t - a)) / 3,
        i + (2 * (F - i)) / 3,
        a,
        i,
      );
    }),
    (Gi = new WeakSet()),
    (X2 = function () {
      const l = this.currentPath;
      if (l.length <= 2) return [[l[0], l[0], l.at(-1), l.at(-1)]];
      const d = [];
      let Z,
        [t, F] = l[0];
      for (Z = 1; Z < l.length - 2; Z++) {
        const [h, N] = l[Z],
          [M, J] = l[Z + 1],
          m = (h + M) / 2,
          G = (N + J) / 2,
          T = [t + (2 * (h - t)) / 3, F + (2 * (N - F)) / 3],
          u = [m + (2 * (h - m)) / 3, G + (2 * (N - G)) / 3];
        d.push([[t, F], T, u, [m, G]]), ([t, F] = [m, G]);
      }
      const [c, n] = l[Z],
        [V, W] = l[Z + 1],
        a = [t + (2 * (c - t)) / 3, F + (2 * (n - F)) / 3],
        i = [V + (2 * (c - V)) / 3, W + (2 * (n - W)) / 3];
      return d.push([[t, F], a, i, [V, W]]), d;
    }),
    (sZ = new WeakSet()),
    (s0 = function () {
      if (this.isEmpty()) {
        b(this, Gc, zR).call(this);
        return;
      }
      b(this, Dn, kh).call(this);
      const { canvas: l, ctx: d } = this;
      d.setTransform(1, 0, 0, 1, 0, 0),
        d.clearRect(0, 0, l.width, l.height),
        b(this, Gc, zR).call(this);
      for (const Z of this.bezierPath2D) d.stroke(Z);
    }),
    (En = new WeakSet()),
    (Ih = function (l) {
      this.canvas.removeEventListener('pointerleave', s(this, zn)),
        this.canvas.removeEventListener('pointermove', s(this, Ln)),
        this.canvas.removeEventListener('pointerup', s(this, kn)),
        this.canvas.addEventListener('pointerdown', s(this, uF), {
          signal: this._uiManager._signal,
        }),
        s(this, md) && clearTimeout(s(this, md)),
        e(
          this,
          md,
          setTimeout(() => {
            e(this, md, null),
              this.canvas.removeEventListener('contextmenu', VU);
          }, 10),
        ),
        b(this, mi, G2).call(this, l.offsetX, l.offsetY),
        this.addToAnnotationStorage(),
        this.setInBackground();
    }),
    (Mc = new WeakSet()),
    (yR = function () {
      (this.canvas = document.createElement('canvas')),
        (this.canvas.width = this.canvas.height = 0),
        (this.canvas.className = 'inkEditorCanvas'),
        this.canvas.setAttribute('data-l10n-id', 'pdfjs-ink-canvas'),
        this.div.append(this.canvas),
        (this.ctx = this.canvas.getContext('2d'));
    }),
    (Jc = new WeakSet()),
    (LR = function () {
      e(
        this,
        cZ,
        new ResizeObserver((l) => {
          const d = l[0].contentRect;
          d.width && d.height && this.setDimensions(d.width, d.height);
        }),
      ),
        s(this, cZ).observe(this.div),
        this._uiManager._signal.addEventListener(
          'abort',
          () => {
            var l;
            (l = s(this, cZ)) == null || l.disconnect(), e(this, cZ, null);
          },
          { once: !0 },
        );
    }),
    (AZ = new WeakSet()),
    (ss = function () {
      if (!s(this, oF)) return;
      const [l, d] = this.parentDimensions;
      (this.canvas.width = Math.ceil(this.width * l)),
        (this.canvas.height = Math.ceil(this.height * d)),
        b(this, Gc, zR).call(this);
    }),
    (Cn = new WeakSet()),
    (Eh = function (l, d) {
      const Z = b(this, Tc, kR).call(this),
        t = (l - Z) / s(this, YF),
        F = (d - Z) / s(this, XF);
      this.scaleFactor = Math.min(t, F);
    }),
    (Gc = new WeakSet()),
    (zR = function () {
      const l = b(this, Tc, kR).call(this) / 2;
      this.ctx.setTransform(
        this.scaleFactor,
        0,
        0,
        this.scaleFactor,
        this.translationX * this.scaleFactor + l,
        this.translationY * this.scaleFactor + l,
      );
    }),
    (Ti = new WeakSet()),
    (Y2 = function (l) {
      const d = new Path2D();
      for (let Z = 0, t = l.length; Z < t; Z++) {
        const [F, c, n, V] = l[Z];
        Z === 0 && d.moveTo(...F),
          d.bezierCurveTo(c[0], c[1], n[0], n[1], V[0], V[1]);
      }
      return d;
    }),
    (rn = new WeakSet()),
    (Ch = function (l, d, Z) {
      const [t, F, c, n] = d;
      switch (Z) {
        case 0:
          for (let V = 0, W = l.length; V < W; V += 2)
            (l[V] += t), (l[V + 1] = n - l[V + 1]);
          break;
        case 90:
          for (let V = 0, W = l.length; V < W; V += 2) {
            const a = l[V];
            (l[V] = l[V + 1] + t), (l[V + 1] = a + F);
          }
          break;
        case 180:
          for (let V = 0, W = l.length; V < W; V += 2)
            (l[V] = c - l[V]), (l[V + 1] += F);
          break;
        case 270:
          for (let V = 0, W = l.length; V < W; V += 2) {
            const a = l[V];
            (l[V] = c - l[V + 1]), (l[V + 1] = n - a);
          }
          break;
        default:
          throw new Error('Invalid rotation');
      }
      return l;
    }),
    (Si = new WeakSet()),
    (u2 = function (l, d, Z) {
      const [t, F, c, n] = d;
      switch (Z) {
        case 0:
          for (let V = 0, W = l.length; V < W; V += 2)
            (l[V] -= t), (l[V + 1] = n - l[V + 1]);
          break;
        case 90:
          for (let V = 0, W = l.length; V < W; V += 2) {
            const a = l[V];
            (l[V] = l[V + 1] - F), (l[V + 1] = a - t);
          }
          break;
        case 180:
          for (let V = 0, W = l.length; V < W; V += 2)
            (l[V] = c - l[V]), (l[V + 1] -= F);
          break;
        case 270:
          for (let V = 0, W = l.length; V < W; V += 2) {
            const a = l[V];
            (l[V] = n - l[V + 1]), (l[V + 1] = c - a);
          }
          break;
        default:
          throw new Error('Invalid rotation');
      }
      return l;
    }),
    (Xi = new WeakSet()),
    (p2 = function (l, d, Z, t) {
      var W, a;
      const F = [],
        c = this.thickness / 2,
        n = l * d + c,
        V = l * Z + c;
      for (const i of this.paths) {
        const h = [],
          N = [];
        for (let M = 0, J = i.length; M < J; M++) {
          const [m, G, T, u] = i[M];
          if (m[0] === u[0] && m[1] === u[1] && J === 1) {
            const I = l * m[0] + n,
              O = l * m[1] + V;
            h.push(I, O), N.push(I, O);
            break;
          }
          const X = l * m[0] + n,
            S = l * m[1] + V,
            p = l * G[0] + n,
            L = l * G[1] + V,
            Y = l * T[0] + n,
            o = l * T[1] + V,
            y = l * u[0] + n,
            D = l * u[1] + V;
          M === 0 && (h.push(X, S), N.push(X, S)),
            h.push(p, L, Y, o, y, D),
            N.push(p, L),
            M === J - 1 && N.push(y, D);
        }
        F.push({
          bezier: b((W = il), rn, Ch).call(W, h, t, this.rotation),
          points: b((a = il), rn, Ch).call(a, N, t, this.rotation),
        });
      }
      return F;
    }),
    (wn = new WeakSet()),
    (rh = function () {
      let l = 1 / 0,
        d = -1 / 0,
        Z = 1 / 0,
        t = -1 / 0;
      for (const F of this.paths)
        for (const [c, n, V, W] of F) {
          const a = g.bezierBoundingBox(...c, ...n, ...V, ...W);
          (l = Math.min(l, a[0])),
            (Z = Math.min(Z, a[1])),
            (d = Math.max(d, a[2])),
            (t = Math.max(t, a[3]));
        }
      return [l, Z, d, t];
    }),
    (Tc = new WeakSet()),
    (kR = function () {
      return s(this, zU) ? Math.ceil(this.thickness * this.parentScale) : 0;
    }),
    (LF = new WeakSet()),
    (qV = function (l = !1) {
      if (this.isEmpty()) return;
      if (!s(this, zU)) {
        b(this, sZ, s0).call(this);
        return;
      }
      const d = b(this, wn, rh).call(this),
        Z = b(this, Tc, kR).call(this);
      e(this, YF, Math.max(Fl.MIN_SIZE, d[2] - d[0])),
        e(this, XF, Math.max(Fl.MIN_SIZE, d[3] - d[1]));
      const t = Math.ceil(Z + s(this, YF) * this.scaleFactor),
        F = Math.ceil(Z + s(this, XF) * this.scaleFactor),
        [c, n] = this.parentDimensions;
      (this.width = t / c), (this.height = F / n), this.setAspectRatio(t, F);
      const V = this.translationX,
        W = this.translationY;
      (this.translationX = -d[0]),
        (this.translationY = -d[1]),
        b(this, AZ, ss).call(this),
        b(this, sZ, s0).call(this),
        e(this, BF, t),
        e(this, yF, F),
        this.setDims(t, F);
      const a = l ? Z / this.scaleFactor / 2 : 0;
      this.translate(V - this.translationX - a, W - this.translationY - a);
    }),
    R(il, Ti),
    R(il, rn),
    R(il, Si),
    f(il, '_defaultColor', null),
    f(il, '_defaultOpacity', 1),
    f(il, '_defaultThickness', 1),
    f(il, '_type', 'ink'),
    f(il, '_editorType', ll.INK);
  let YN = il;
  const gn = class gn extends Fl {
    constructor(l) {
      super({ ...l, name: 'stampEditor' });
      R(this, zF);
      R(this, kF);
      R(this, Xc);
      R(this, jn);
      R(this, Yi);
      R(this, ui);
      R(this, On);
      R(this, Yc);
      R(this, pi);
      R(this, Hl, null);
      R(this, Pl, null);
      R(this, _Z, null);
      R(this, QZ, null);
      R(this, qZ, null);
      R(this, Sc, '');
      R(this, Md, null);
      R(this, nZ, null);
      R(this, Jd, null);
      R(this, ld, !1);
      R(this, xn, !1);
      e(this, QZ, l.bitmapUrl), e(this, qZ, l.bitmapFile);
    }
    static initialize(l, d) {
      Fl.initialize(l, d);
    }
    static get supportedTypes() {
      return Zl(
        this,
        'supportedTypes',
        [
          'apng',
          'avif',
          'bmp',
          'gif',
          'jpeg',
          'png',
          'svg+xml',
          'webp',
          'x-icon',
        ].map((d) => `image/${d}`),
      );
    }
    static get supportedTypesStr() {
      return Zl(this, 'supportedTypesStr', this.supportedTypes.join(','));
    }
    static isHandlingMimeForPasting(l) {
      return this.supportedTypes.includes(l);
    }
    static paste(l, d) {
      d.pasteEditor(ll.STAMP, { bitmapFile: l.getAsFile() });
    }
    remove() {
      var l, d;
      s(this, Pl) &&
        (e(this, Hl, null),
        this._uiManager.imageManager.deleteId(s(this, Pl)),
        (l = s(this, Md)) == null || l.remove(),
        e(this, Md, null),
        (d = s(this, nZ)) == null || d.disconnect(),
        e(this, nZ, null),
        s(this, Jd) && (clearTimeout(s(this, Jd)), e(this, Jd, null))),
        super.remove();
    }
    rebuild() {
      if (!this.parent) {
        s(this, Pl) && b(this, Xc, DR).call(this);
        return;
      }
      super.rebuild(),
        this.div !== null &&
          (s(this, Pl) && s(this, Md) === null && b(this, Xc, DR).call(this),
          this.isAttachedToDOM || this.parent.add(this));
    }
    onceAdded() {
      (this._isDraggable = !0), this.div.focus();
    }
    isEmpty() {
      return !(
        s(this, _Z) ||
        s(this, Hl) ||
        s(this, QZ) ||
        s(this, qZ) ||
        s(this, Pl)
      );
    }
    get isResizable() {
      return !0;
    }
    render() {
      if (this.div) return this.div;
      let l, d;
      if (
        (this.width && ((l = this.x), (d = this.y)),
        super.render(),
        (this.div.hidden = !0),
        this.addAltTextButton(),
        s(this, Hl) ? b(this, jn, wh).call(this) : b(this, Xc, DR).call(this),
        this.width)
      ) {
        const [Z, t] = this.parentDimensions;
        this.setAt(l * Z, d * t, this.width * Z, this.height * t);
      }
      return this.div;
    }
    getImageForAltText() {
      return s(this, Md);
    }
    static deserialize(l, d, Z) {
      if (l instanceof ne) return null;
      const t = super.deserialize(l, d, Z),
        {
          rect: F,
          bitmapUrl: c,
          bitmapId: n,
          isSvg: V,
          accessibilityData: W,
        } = l;
      n && Z.imageManager.isValidId(n) ? e(t, Pl, n) : e(t, QZ, c), e(t, ld, V);
      const [a, i] = t.pageDimensions;
      return (
        (t.width = (F[2] - F[0]) / a),
        (t.height = (F[3] - F[1]) / i),
        W && (t.altTextData = W),
        t
      );
    }
    serialize(l = !1, d = null) {
      if (this.isEmpty()) return null;
      const Z = {
        annotationType: ll.STAMP,
        bitmapId: s(this, Pl),
        pageIndex: this.pageIndex,
        rect: this.getRect(0, 0),
        rotation: this.rotation,
        isSvg: s(this, ld),
        structTreeParentId: this._structTreeParentId,
      };
      if (l)
        return (
          (Z.bitmapUrl = b(this, Yc, IR).call(this, !0)),
          (Z.accessibilityData = this.altTextData),
          Z
        );
      const { decorative: t, altText: F } = this.altTextData;
      if (
        (!t && F && (Z.accessibilityData = { type: 'Figure', alt: F }),
        d === null)
      )
        return Z;
      d.stamps || (d.stamps = new Map());
      const c = s(this, ld)
        ? (Z.rect[2] - Z.rect[0]) * (Z.rect[3] - Z.rect[1])
        : null;
      if (!d.stamps.has(s(this, Pl)))
        d.stamps.set(s(this, Pl), { area: c, serialized: Z }),
          (Z.bitmap = b(this, Yc, IR).call(this, !1));
      else if (s(this, ld)) {
        const n = d.stamps.get(s(this, Pl));
        c > n.area &&
          ((n.area = c),
          n.serialized.bitmap.close(),
          (n.serialized.bitmap = b(this, Yc, IR).call(this, !1)));
      }
      return Z;
    }
  };
  (Hl = new WeakMap()),
    (Pl = new WeakMap()),
    (_Z = new WeakMap()),
    (QZ = new WeakMap()),
    (qZ = new WeakMap()),
    (Sc = new WeakMap()),
    (Md = new WeakMap()),
    (nZ = new WeakMap()),
    (Jd = new WeakMap()),
    (ld = new WeakMap()),
    (xn = new WeakMap()),
    (zF = new WeakSet()),
    ($V = function (l, d = !1) {
      if (!l) {
        this.remove();
        return;
      }
      e(this, Hl, l.bitmap),
        d || (e(this, Pl, l.id), e(this, ld, l.isSvg)),
        l.file && e(this, Sc, l.file.name),
        b(this, jn, wh).call(this);
    }),
    (kF = new WeakSet()),
    (lW = function () {
      e(this, _Z, null),
        this._uiManager.enableWaiting(!1),
        s(this, Md) && this.div.focus();
    }),
    (Xc = new WeakSet()),
    (DR = function () {
      if (s(this, Pl)) {
        this._uiManager.enableWaiting(!0),
          this._uiManager.imageManager
            .getFromId(s(this, Pl))
            .then((Z) => b(this, zF, $V).call(this, Z, !0))
            .finally(() => b(this, kF, lW).call(this));
        return;
      }
      if (s(this, QZ)) {
        const Z = s(this, QZ);
        e(this, QZ, null),
          this._uiManager.enableWaiting(!0),
          e(
            this,
            _Z,
            this._uiManager.imageManager
              .getFromUrl(Z)
              .then((t) => b(this, zF, $V).call(this, t))
              .finally(() => b(this, kF, lW).call(this)),
          );
        return;
      }
      if (s(this, qZ)) {
        const Z = s(this, qZ);
        e(this, qZ, null),
          this._uiManager.enableWaiting(!0),
          e(
            this,
            _Z,
            this._uiManager.imageManager
              .getFromFile(Z)
              .then((t) => b(this, zF, $V).call(this, t))
              .finally(() => b(this, kF, lW).call(this)),
          );
        return;
      }
      const l = document.createElement('input');
      (l.type = 'file'), (l.accept = gn.supportedTypesStr);
      const d = this._uiManager._signal;
      e(
        this,
        _Z,
        new Promise((Z) => {
          l.addEventListener(
            'change',
            async () => {
              if (!l.files || l.files.length === 0) this.remove();
              else {
                this._uiManager.enableWaiting(!0);
                const t = await this._uiManager.imageManager.getFromFile(
                  l.files[0],
                );
                b(this, zF, $V).call(this, t);
              }
              Z();
            },
            { signal: d },
          ),
            l.addEventListener(
              'cancel',
              () => {
                this.remove(), Z();
              },
              { signal: d },
            );
        }).finally(() => b(this, kF, lW).call(this)),
      ),
        l.click();
    }),
    (jn = new WeakSet()),
    (wh = function () {
      const { div: l } = this;
      let { width: d, height: Z } = s(this, Hl);
      const [t, F] = this.pageDimensions,
        c = 0.75;
      if (this.width) (d = this.width * t), (Z = this.height * F);
      else if (d > c * t || Z > c * F) {
        const a = Math.min((c * t) / d, (c * F) / Z);
        (d *= a), (Z *= a);
      }
      const [n, V] = this.parentDimensions;
      this.setDims((d * n) / t, (Z * V) / F), this._uiManager.enableWaiting(!1);
      const W = e(this, Md, document.createElement('canvas'));
      l.append(W),
        (l.hidden = !1),
        b(this, On, xh).call(this, d, Z),
        b(this, pi, y2).call(this),
        s(this, xn) || (this.parent.addUndoableEditor(this), e(this, xn, !0)),
        this._reportTelemetry({ action: 'inserted_image' }),
        s(this, Sc) && W.setAttribute('aria-label', s(this, Sc));
    }),
    (Yi = new WeakSet()),
    (o2 = function (l, d) {
      var c;
      const [Z, t] = this.parentDimensions;
      (this.width = l / Z),
        (this.height = d / t),
        this.setDims(l, d),
        (c = this._initialOptions) != null && c.isCentered
          ? this.center()
          : this.fixAndSetPosition(),
        (this._initialOptions = null),
        s(this, Jd) !== null && clearTimeout(s(this, Jd)),
        e(
          this,
          Jd,
          setTimeout(() => {
            e(this, Jd, null), b(this, On, xh).call(this, l, d);
          }, 200),
        );
    }),
    (ui = new WeakSet()),
    (B2 = function (l, d) {
      const { width: Z, height: t } = s(this, Hl);
      let F = Z,
        c = t,
        n = s(this, Hl);
      for (; F > 2 * l || c > 2 * d; ) {
        const V = F,
          W = c;
        F > 2 * l &&
          (F = F >= 16384 ? Math.floor(F / 2) - 1 : Math.ceil(F / 2)),
          c > 2 * d &&
            (c = c >= 16384 ? Math.floor(c / 2) - 1 : Math.ceil(c / 2));
        const a = new OffscreenCanvas(F, c);
        a.getContext('2d').drawImage(n, 0, 0, V, W, 0, 0, F, c),
          (n = a.transferToImageBitmap());
      }
      return n;
    }),
    (On = new WeakSet()),
    (xh = function (l, d) {
      (l = Math.ceil(l)), (d = Math.ceil(d));
      const Z = s(this, Md);
      if (!Z || (Z.width === l && Z.height === d)) return;
      (Z.width = l), (Z.height = d);
      const t = s(this, ld) ? s(this, Hl) : b(this, ui, B2).call(this, l, d);
      if (this._uiManager.hasMLManager && !this.hasAltText()) {
        const n = new OffscreenCanvas(l, d).getContext('2d');
        n.drawImage(t, 0, 0, t.width, t.height, 0, 0, l, d),
          this._uiManager
            .mlGuess({
              service: 'image-to-text',
              request: {
                data: n.getImageData(0, 0, l, d).data,
                width: l,
                height: d,
                channels: 4,
              },
            })
            .then((V) => {
              const W = (V == null ? void 0 : V.output) || '';
              this.parent &&
                W &&
                !this.hasAltText() &&
                (this.altTextData = { altText: W, decorative: !1 });
            });
      }
      const F = Z.getContext('2d');
      (F.filter = this._uiManager.hcmFilter),
        F.drawImage(t, 0, 0, t.width, t.height, 0, 0, l, d);
    }),
    (Yc = new WeakSet()),
    (IR = function (l) {
      if (l) {
        if (s(this, ld)) {
          const t = this._uiManager.imageManager.getSvgUrl(s(this, Pl));
          if (t) return t;
        }
        const d = document.createElement('canvas');
        return (
          ({ width: d.width, height: d.height } = s(this, Hl)),
          d.getContext('2d').drawImage(s(this, Hl), 0, 0),
          d.toDataURL()
        );
      }
      if (s(this, ld)) {
        const [d, Z] = this.pageDimensions,
          t = Math.round(this.width * d * Q0.PDF_TO_CSS_UNITS),
          F = Math.round(this.height * Z * Q0.PDF_TO_CSS_UNITS),
          c = new OffscreenCanvas(t, F);
        return (
          c
            .getContext('2d')
            .drawImage(
              s(this, Hl),
              0,
              0,
              s(this, Hl).width,
              s(this, Hl).height,
              0,
              0,
              t,
              F,
            ),
          c.transferToImageBitmap()
        );
      }
      return structuredClone(s(this, Hl));
    }),
    (pi = new WeakSet()),
    (y2 = function () {
      this._uiManager._signal &&
        (e(
          this,
          nZ,
          new ResizeObserver((l) => {
            const d = l[0].contentRect;
            d.width &&
              d.height &&
              b(this, Yi, o2).call(this, d.width, d.height);
          }),
        ),
        s(this, nZ).observe(this.div),
        this._uiManager._signal.addEventListener(
          'abort',
          () => {
            var l;
            (l = s(this, nZ)) == null || l.disconnect(), e(this, nZ, null);
          },
          { once: !0 },
        ));
    }),
    f(gn, '_type', 'stamp'),
    f(gn, '_editorType', ll.STAMP);
  let uN = gn,
    iG =
      ((YU = class {
        constructor({
          uiManager: U,
          pageIndex: l,
          div: d,
          accessibilityManager: Z,
          annotationLayer: t,
          drawLayer: F,
          textLayer: c,
          viewport: n,
          l10n: V,
        }) {
          R(this, oi);
          R(this, Kn);
          R(this, vn);
          R(this, Hn);
          R(this, Bc);
          R(this, DF, void 0);
          R(this, uc, !1);
          R(this, Gd, null);
          R(this, IF, null);
          R(this, VZ, null);
          R(this, WZ, null);
          R(this, aZ, null);
          R(this, XU, new Map());
          R(this, $Z, !1);
          R(this, pc, !1);
          R(this, oc, !1);
          R(this, FU, null);
          R(this, K, void 0);
          const W = [...s(YU, lt).values()];
          if (!YU._initialized) {
            YU._initialized = !0;
            for (const a of W) a.initialize(V, U);
          }
          U.registerEditorTypes(W),
            e(this, K, U),
            (this.pageIndex = l),
            (this.div = d),
            e(this, DF, Z),
            e(this, Gd, t),
            (this.viewport = n),
            e(this, FU, c),
            (this.drawLayer = F),
            s(this, K).addLayer(this);
        }
        get isEmpty() {
          return s(this, XU).size === 0;
        }
        get isInvisible() {
          return this.isEmpty && s(this, K).getMode() === ll.NONE;
        }
        updateToolbar(U) {
          s(this, K).updateToolbar(U);
        }
        updateMode(U = s(this, K).getMode()) {
          switch ((b(this, Bc, ER).call(this), U)) {
            case ll.NONE:
              this.disableTextSelection(),
                this.togglePointerEvents(!1),
                this.toggleAnnotationLayerPointerEvents(!0),
                this.disableClick();
              return;
            case ll.INK:
              this.addInkEditorIfNeeded(!1),
                this.disableTextSelection(),
                this.togglePointerEvents(!0),
                this.disableClick();
              break;
            case ll.HIGHLIGHT:
              this.enableTextSelection(),
                this.togglePointerEvents(!1),
                this.disableClick();
              break;
            default:
              this.disableTextSelection(),
                this.togglePointerEvents(!0),
                this.enableClick();
          }
          this.toggleAnnotationLayerPointerEvents(!1);
          const { classList: l } = this.div;
          for (const d of s(YU, lt).values())
            l.toggle(`${d._type}Editing`, U === d._editorType);
          this.div.hidden = !1;
        }
        hasTextLayer(U) {
          var l;
          return U === ((l = s(this, FU)) == null ? void 0 : l.div);
        }
        addInkEditorIfNeeded(U) {
          if (s(this, K).getMode() !== ll.INK) return;
          if (!U) {
            for (const d of s(this, XU).values())
              if (d.isEmpty()) {
                d.setInBackground();
                return;
              }
          }
          this.createAndAddNewEditor(
            { offsetX: 0, offsetY: 0 },
            !1,
          ).setInBackground();
        }
        setEditingState(U) {
          s(this, K).setEditingState(U);
        }
        addCommands(U) {
          s(this, K).addCommands(U);
        }
        togglePointerEvents(U = !1) {
          this.div.classList.toggle('disabled', !U);
        }
        toggleAnnotationLayerPointerEvents(U = !1) {
          var l;
          (l = s(this, Gd)) == null || l.div.classList.toggle('disabled', !U);
        }
        enable() {
          (this.div.tabIndex = 0), this.togglePointerEvents(!0);
          const U = new Set();
          for (const d of s(this, XU).values())
            d.enableEditing(),
              d.show(!0),
              d.annotationElementId &&
                (s(this, K).removeChangedExistingAnnotation(d),
                U.add(d.annotationElementId));
          if (!s(this, Gd)) return;
          const l = s(this, Gd).getEditableAnnotations();
          for (const d of l) {
            if (
              (d.hide(),
              s(this, K).isDeletedAnnotationElement(d.data.id) ||
                U.has(d.data.id))
            )
              continue;
            const Z = this.deserialize(d);
            Z && (this.addOrRebuild(Z), Z.enableEditing());
          }
        }
        disable() {
          var Z;
          e(this, oc, !0),
            (this.div.tabIndex = -1),
            this.togglePointerEvents(!1);
          const U = new Map(),
            l = new Map();
          for (const t of s(this, XU).values())
            if ((t.disableEditing(), !!t.annotationElementId)) {
              if (t.serialize() !== null) {
                U.set(t.annotationElementId, t);
                continue;
              } else l.set(t.annotationElementId, t);
              (Z = this.getEditableAnnotation(t.annotationElementId)) == null ||
                Z.show(),
                t.remove();
            }
          if (s(this, Gd)) {
            const t = s(this, Gd).getEditableAnnotations();
            for (const F of t) {
              const { id: c } = F.data;
              if (s(this, K).isDeletedAnnotationElement(c)) continue;
              let n = l.get(c);
              if (n) {
                n.resetAnnotationElement(F), n.show(!1), F.show();
                continue;
              }
              (n = U.get(c)),
                n &&
                  (s(this, K).addChangedExistingAnnotation(n),
                  n.renderAnnotationElement(F),
                  n.show(!1)),
                F.show();
            }
          }
          b(this, Bc, ER).call(this), this.isEmpty && (this.div.hidden = !0);
          const { classList: d } = this.div;
          for (const t of s(YU, lt).values()) d.remove(`${t._type}Editing`);
          this.disableTextSelection(),
            this.toggleAnnotationLayerPointerEvents(!0),
            e(this, oc, !1);
        }
        getEditableAnnotation(U) {
          var l;
          return (
            ((l = s(this, Gd)) == null ? void 0 : l.getEditableAnnotation(U)) ||
            null
          );
        }
        setActiveEditor(U) {
          s(this, K).getActive() !== U && s(this, K).setActiveEditor(U);
        }
        enableTextSelection() {
          var U;
          (this.div.tabIndex = -1),
            (U = s(this, FU)) != null &&
              U.div &&
              !s(this, WZ) &&
              (e(this, WZ, b(this, oi, L2).bind(this)),
              s(this, FU).div.addEventListener('pointerdown', s(this, WZ), {
                signal: s(this, K)._signal,
              }),
              s(this, FU).div.classList.add('highlighting'));
        }
        disableTextSelection() {
          var U;
          (this.div.tabIndex = 0),
            (U = s(this, FU)) != null &&
              U.div &&
              s(this, WZ) &&
              (s(this, FU).div.removeEventListener('pointerdown', s(this, WZ)),
              e(this, WZ, null),
              s(this, FU).div.classList.remove('highlighting'));
        }
        enableClick() {
          if (s(this, VZ)) return;
          const U = s(this, K)._signal;
          e(this, VZ, this.pointerdown.bind(this)),
            e(this, IF, this.pointerup.bind(this)),
            this.div.addEventListener('pointerdown', s(this, VZ), {
              signal: U,
            }),
            this.div.addEventListener('pointerup', s(this, IF), { signal: U });
        }
        disableClick() {
          s(this, VZ) &&
            (this.div.removeEventListener('pointerdown', s(this, VZ)),
            this.div.removeEventListener('pointerup', s(this, IF)),
            e(this, VZ, null),
            e(this, IF, null));
        }
        attach(U) {
          s(this, XU).set(U.id, U);
          const { annotationElementId: l } = U;
          l &&
            s(this, K).isDeletedAnnotationElement(l) &&
            s(this, K).removeDeletedAnnotationElement(U);
        }
        detach(U) {
          var l;
          s(this, XU).delete(U.id),
            (l = s(this, DF)) == null ||
              l.removePointerInTextLayer(U.contentDiv),
            !s(this, oc) &&
              U.annotationElementId &&
              s(this, K).addDeletedAnnotationElement(U);
        }
        remove(U) {
          this.detach(U),
            s(this, K).removeEditor(U),
            U.div.remove(),
            (U.isAttachedToDOM = !1),
            s(this, pc) || this.addInkEditorIfNeeded(!1);
        }
        changeParent(U) {
          var l;
          U.parent !== this &&
            (U.parent &&
              U.annotationElementId &&
              (s(this, K).addDeletedAnnotationElement(U.annotationElementId),
              Fl.deleteAnnotationElement(U),
              (U.annotationElementId = null)),
            this.attach(U),
            (l = U.parent) == null || l.detach(U),
            U.setParent(this),
            U.div &&
              U.isAttachedToDOM &&
              (U.div.remove(), this.div.append(U.div)));
        }
        add(U) {
          if (!(U.parent === this && U.isAttachedToDOM)) {
            if (
              (this.changeParent(U),
              s(this, K).addEditor(U),
              this.attach(U),
              !U.isAttachedToDOM)
            ) {
              const l = U.render();
              this.div.append(l), (U.isAttachedToDOM = !0);
            }
            U.fixAndSetPosition(),
              U.onceAdded(),
              s(this, K).addToAnnotationStorage(U),
              U._reportTelemetry(U.telemetryInitialData);
          }
        }
        moveEditorInDOM(U) {
          var d;
          if (!U.isAttachedToDOM) return;
          const { activeElement: l } = document;
          U.div.contains(l) &&
            !s(this, aZ) &&
            ((U._focusEventsAllowed = !1),
            e(
              this,
              aZ,
              setTimeout(() => {
                e(this, aZ, null),
                  U.div.contains(document.activeElement)
                    ? (U._focusEventsAllowed = !0)
                    : (U.div.addEventListener(
                        'focusin',
                        () => {
                          U._focusEventsAllowed = !0;
                        },
                        { once: !0, signal: s(this, K)._signal },
                      ),
                      l.focus());
              }, 0),
            )),
            (U._structTreeParentId =
              (d = s(this, DF)) == null
                ? void 0
                : d.moveElementInDOM(this.div, U.div, U.contentDiv, !0));
        }
        addOrRebuild(U) {
          U.needsToBeRebuilt()
            ? (U.parent || (U.parent = this), U.rebuild(), U.show())
            : this.add(U);
        }
        addUndoableEditor(U) {
          const l = () => U._uiManager.rebuild(U),
            d = () => {
              U.remove();
            };
          this.addCommands({ cmd: l, undo: d, mustExec: !1 });
        }
        getNextId() {
          return s(this, K).getId();
        }
        get _signal() {
          return s(this, K)._signal;
        }
        canCreateNewEmptyEditor() {
          var U;
          return (U = s(this, Kn, jh)) == null
            ? void 0
            : U.canCreateNewEmptyEditor();
        }
        pasteEditor(U, l) {
          s(this, K).updateToolbar(U), s(this, K).updateMode(U);
          const { offsetX: d, offsetY: Z } = b(this, Hn, gh).call(this),
            t = this.getNextId(),
            F = b(this, vn, Oh).call(this, {
              parent: this,
              id: t,
              x: d,
              y: Z,
              uiManager: s(this, K),
              isCentered: !0,
              ...l,
            });
          F && this.add(F);
        }
        deserialize(U) {
          var l;
          return (
            ((l = s(YU, lt).get(U.annotationType ?? U.annotationEditorType)) ==
            null
              ? void 0
              : l.deserialize(U, this, s(this, K))) || null
          );
        }
        createAndAddNewEditor(U, l, d = {}) {
          const Z = this.getNextId(),
            t = b(this, vn, Oh).call(this, {
              parent: this,
              id: Z,
              x: U.offsetX,
              y: U.offsetY,
              uiManager: s(this, K),
              isCentered: l,
              ...d,
            });
          return t && this.add(t), t;
        }
        addNewEditor() {
          this.createAndAddNewEditor(b(this, Hn, gh).call(this), !0);
        }
        setSelected(U) {
          s(this, K).setSelected(U);
        }
        toggleSelected(U) {
          s(this, K).toggleSelected(U);
        }
        isSelected(U) {
          return s(this, K).isSelected(U);
        }
        unselect(U) {
          s(this, K).unselect(U);
        }
        pointerup(U) {
          const { isMac: l } = nU.platform;
          if (
            !(U.button !== 0 || (U.ctrlKey && l)) &&
            U.target === this.div &&
            s(this, $Z)
          ) {
            if ((e(this, $Z, !1), !s(this, uc))) {
              e(this, uc, !0);
              return;
            }
            if (s(this, K).getMode() === ll.STAMP) {
              s(this, K).unselectAll();
              return;
            }
            this.createAndAddNewEditor(U, !1);
          }
        }
        pointerdown(U) {
          if (
            (s(this, K).getMode() === ll.HIGHLIGHT &&
              this.enableTextSelection(),
            s(this, $Z))
          ) {
            e(this, $Z, !1);
            return;
          }
          const { isMac: l } = nU.platform;
          if (U.button !== 0 || (U.ctrlKey && l) || U.target !== this.div)
            return;
          e(this, $Z, !0);
          const d = s(this, K).getActive();
          e(this, uc, !d || d.isEmpty());
        }
        findNewParent(U, l, d) {
          const Z = s(this, K).findParent(l, d);
          return Z === null || Z === this ? !1 : (Z.changeParent(U), !0);
        }
        destroy() {
          var U, l;
          ((U = s(this, K).getActive()) == null ? void 0 : U.parent) === this &&
            (s(this, K).commitOrRemove(), s(this, K).setActiveEditor(null)),
            s(this, aZ) && (clearTimeout(s(this, aZ)), e(this, aZ, null));
          for (const d of s(this, XU).values())
            (l = s(this, DF)) == null ||
              l.removePointerInTextLayer(d.contentDiv),
              d.setParent(null),
              (d.isAttachedToDOM = !1),
              d.div.remove();
          (this.div = null), s(this, XU).clear(), s(this, K).removeLayer(this);
        }
        render({ viewport: U }) {
          (this.viewport = U), Tt(this.div, U);
          for (const l of s(this, K).getEditors(this.pageIndex))
            this.add(l), l.rebuild();
          this.updateMode();
        }
        update({ viewport: U }) {
          s(this, K).commitOrRemove(), b(this, Bc, ER).call(this);
          const l = this.viewport.rotation,
            d = U.rotation;
          if (((this.viewport = U), Tt(this.div, { rotation: d }), l !== d))
            for (const Z of s(this, XU).values()) Z.rotate(d);
          this.addInkEditorIfNeeded(!1);
        }
        get pageDimensions() {
          const { pageWidth: U, pageHeight: l } = this.viewport.rawDims;
          return [U, l];
        }
        get scale() {
          return s(this, K).viewParameters.realScale;
        }
      }),
      (DF = new WeakMap()),
      (uc = new WeakMap()),
      (Gd = new WeakMap()),
      (IF = new WeakMap()),
      (VZ = new WeakMap()),
      (WZ = new WeakMap()),
      (aZ = new WeakMap()),
      (XU = new WeakMap()),
      ($Z = new WeakMap()),
      (pc = new WeakMap()),
      (oc = new WeakMap()),
      (FU = new WeakMap()),
      (K = new WeakMap()),
      (lt = new WeakMap()),
      (oi = new WeakSet()),
      (L2 = function (U) {
        if ((s(this, K).unselectAll(), U.target === s(this, FU).div)) {
          const { isMac: l } = nU.platform;
          if (U.button !== 0 || (U.ctrlKey && l)) return;
          s(this, K).showAllEditors('highlight', !0, !0),
            s(this, FU).div.classList.add('free'),
            BW.startHighlighting(this, s(this, K).direction === 'ltr', U),
            s(this, FU).div.addEventListener(
              'pointerup',
              () => {
                s(this, FU).div.classList.remove('free');
              },
              { once: !0, signal: s(this, K)._signal },
            ),
            U.preventDefault();
        }
      }),
      (Kn = new WeakSet()),
      (jh = function () {
        return s(YU, lt).get(s(this, K).getMode());
      }),
      (vn = new WeakSet()),
      (Oh = function (U) {
        const l = s(this, Kn, jh);
        return l ? new l.prototype.constructor(U) : null;
      }),
      (Hn = new WeakSet()),
      (gh = function () {
        const {
            x: U,
            y: l,
            width: d,
            height: Z,
          } = this.div.getBoundingClientRect(),
          t = Math.max(0, U),
          F = Math.max(0, l),
          c = Math.min(window.innerWidth, U + d),
          n = Math.min(window.innerHeight, l + Z),
          V = (t + c) / 2 - U,
          W = (F + n) / 2 - l,
          [a, i] = this.viewport.rotation % 180 === 0 ? [V, W] : [W, V];
        return { offsetX: a, offsetY: i };
      }),
      (Bc = new WeakSet()),
      (ER = function () {
        e(this, pc, !0);
        for (const U of s(this, XU).values()) U.isEmpty() && U.remove();
        e(this, pc, !1);
      }),
      f(YU, '_initialized', !1),
      R(YU, lt, new Map([TN, YN, uN, BW].map((U) => [U._editorType, U]))),
      YU),
    RG =
      ((Dl = class {
        constructor({ pageIndex: U }) {
          R(this, An);
          R(this, Bi);
          R(this, Td, null);
          R(this, Pn, 0);
          R(this, kl, new Map());
          R(this, Ut, new Map());
          this.pageIndex = U;
        }
        setParent(U) {
          if (!s(this, Td)) {
            e(this, Td, U);
            return;
          }
          if (s(this, Td) !== U) {
            if (s(this, kl).size > 0)
              for (const l of s(this, kl).values()) l.remove(), U.append(l);
            e(this, Td, U);
          }
        }
        static get _svgFactory() {
          return Zl(this, '_svgFactory', new dN());
        }
        highlight(U, l, d, Z = !1) {
          const t = hU(this, Pn)._++,
            F = b(this, An, vh).call(this, U.box);
          F.classList.add('highlight'), U.free && F.classList.add('free');
          const c = Dl._svgFactory.createElement('defs');
          F.append(c);
          const n = Dl._svgFactory.createElement('path');
          c.append(n);
          const V = `path_p${this.pageIndex}_${t}`;
          n.setAttribute('id', V),
            n.setAttribute('d', U.toSVGPath()),
            Z && s(this, Ut).set(t, n);
          const W = b(this, Bi, z2).call(this, c, V),
            a = Dl._svgFactory.createElement('use');
          return (
            F.append(a),
            F.setAttribute('fill', l),
            F.setAttribute('fill-opacity', d),
            a.setAttribute('href', `#${V}`),
            s(this, kl).set(t, F),
            { id: t, clipPathId: `url(#${W})` }
          );
        }
        highlightOutline(U) {
          const l = hU(this, Pn)._++,
            d = b(this, An, vh).call(this, U.box);
          d.classList.add('highlightOutline');
          const Z = Dl._svgFactory.createElement('defs');
          d.append(Z);
          const t = Dl._svgFactory.createElement('path');
          Z.append(t);
          const F = `path_p${this.pageIndex}_${l}`;
          t.setAttribute('id', F),
            t.setAttribute('d', U.toSVGPath()),
            t.setAttribute('vector-effect', 'non-scaling-stroke');
          let c;
          if (U.free) {
            d.classList.add('free');
            const W = Dl._svgFactory.createElement('mask');
            Z.append(W),
              (c = `mask_p${this.pageIndex}_${l}`),
              W.setAttribute('id', c),
              W.setAttribute('maskUnits', 'objectBoundingBox');
            const a = Dl._svgFactory.createElement('rect');
            W.append(a),
              a.setAttribute('width', '1'),
              a.setAttribute('height', '1'),
              a.setAttribute('fill', 'white');
            const i = Dl._svgFactory.createElement('use');
            W.append(i),
              i.setAttribute('href', `#${F}`),
              i.setAttribute('stroke', 'none'),
              i.setAttribute('fill', 'black'),
              i.setAttribute('fill-rule', 'nonzero'),
              i.classList.add('mask');
          }
          const n = Dl._svgFactory.createElement('use');
          d.append(n),
            n.setAttribute('href', `#${F}`),
            c && n.setAttribute('mask', `url(#${c})`);
          const V = n.cloneNode();
          return (
            d.append(V),
            n.classList.add('mainOutline'),
            V.classList.add('secondaryOutline'),
            s(this, kl).set(l, d),
            l
          );
        }
        finalizeLine(U, l) {
          const d = s(this, Ut).get(U);
          s(this, Ut).delete(U),
            this.updateBox(U, l.box),
            d.setAttribute('d', l.toSVGPath());
        }
        updateLine(U, l) {
          s(this, kl)
            .get(U)
            .firstChild.firstChild.setAttribute('d', l.toSVGPath());
        }
        removeFreeHighlight(U) {
          this.remove(U), s(this, Ut).delete(U);
        }
        updatePath(U, l) {
          s(this, Ut).get(U).setAttribute('d', l.toSVGPath());
        }
        updateBox(U, l) {
          var d;
          b((d = Dl), fn, Kh).call(d, s(this, kl).get(U), l);
        }
        show(U, l) {
          s(this, kl).get(U).classList.toggle('hidden', !l);
        }
        rotate(U, l) {
          s(this, kl).get(U).setAttribute('data-main-rotation', l);
        }
        changeColor(U, l) {
          s(this, kl).get(U).setAttribute('fill', l);
        }
        changeOpacity(U, l) {
          s(this, kl).get(U).setAttribute('fill-opacity', l);
        }
        addClass(U, l) {
          s(this, kl).get(U).classList.add(l);
        }
        removeClass(U, l) {
          s(this, kl).get(U).classList.remove(l);
        }
        remove(U) {
          s(this, Td) !== null &&
            (s(this, kl).get(U).remove(), s(this, kl).delete(U));
        }
        destroy() {
          e(this, Td, null);
          for (const U of s(this, kl).values()) U.remove();
          s(this, kl).clear();
        }
      }),
      (Td = new WeakMap()),
      (Pn = new WeakMap()),
      (kl = new WeakMap()),
      (Ut = new WeakMap()),
      (fn = new WeakSet()),
      (Kh = function (
        U,
        { x: l = 0, y: d = 0, width: Z = 1, height: t = 1 } = {},
      ) {
        const { style: F } = U;
        (F.top = `${100 * d}%`),
          (F.left = `${100 * l}%`),
          (F.width = `${100 * Z}%`),
          (F.height = `${100 * t}%`);
      }),
      (An = new WeakSet()),
      (vh = function (U) {
        var d;
        const l = Dl._svgFactory.create(1, 1, !0);
        return (
          s(this, Td).append(l),
          l.setAttribute('aria-hidden', !0),
          b((d = Dl), fn, Kh).call(d, l, U),
          l
        );
      }),
      (Bi = new WeakSet()),
      (z2 = function (U, l) {
        const d = Dl._svgFactory.createElement('clipPath');
        U.append(d);
        const Z = `clip_${l}`;
        d.setAttribute('id', Z),
          d.setAttribute('clipPathUnits', 'objectBoundingBox');
        const t = Dl._svgFactory.createElement('use');
        return (
          d.append(t),
          t.setAttribute('href', `#${l}`),
          t.classList.add('clip'),
          Z
        );
      }),
      R(Dl, fn),
      Dl);
  v.AbortException,
    v.AnnotationEditorLayer,
    v.AnnotationEditorParamsType,
    v.AnnotationEditorType,
    v.AnnotationEditorUIManager;
  var NG = v.AnnotationLayer;
  v.AnnotationMode,
    v.CMapCompressionType,
    v.ColorPicker,
    v.DOMSVGFactory,
    v.DrawLayer,
    v.FeatureTest;
  var yW = v.GlobalWorkerOptions;
  v.ImageKind,
    v.InvalidPDFException,
    v.MissingPDFException,
    v.OPS,
    v.Outliner,
    v.PDFDataRangeTransport,
    v.PDFDateString,
    v.PDFWorker;
  var hG = v.PasswordResponses;
  v.PermissionFlag, v.PixelsPerInch, v.RenderingCancelledException;
  var bG = v.TextLayer;
  v.UnexpectedResponseException,
    v.Util,
    v.VerbosityLevel,
    v.XfaLayer,
    v.build,
    v.createValidAbsoluteUrl,
    v.fetchData;
  var eG = v.getDocument;
  v.getFilenameFromUrl,
    v.getPdfFilenameFromUrl,
    v.getXfaPageViewport,
    v.isDataScheme,
    v.isPdfFile,
    v.noContextMenu,
    v.normalizeUnicode,
    v.renderTextLayer,
    v.setLayerDimensions,
    v.shadow,
    v.updateTextLayer,
    v.version;
  const mG =
  function MG(Q, U, l) {
    const d = Q.contentWindow.document.createElement('style');
    (d.textContent = `
    @page {
      margin: 3mm;
      size: ${U}pt ${l}pt;
    }
    body {
      margin: 0;
    }
    canvas {
      width: 100%;
      page-break-after: always;
      page-break-before: avoid;
      page-break-inside: avoid;
    }
  `),
      Q.contentWindow.document.head.appendChild(d),
      (Q.contentWindow.document.body.style.width = '100%');
  }
  function JG(Q) {
    return new Promise((U) => {
      const l = document.createElement('iframe');
      (l.width = '0'),
        (l.height = '0'),
        (l.style.position = 'absolute'),
        (l.style.top = '0'),
        (l.style.left = '0'),
        (l.style.border = 'none'),
        (l.style.overflow = 'hidden'),
        (l.onload = () => U(l)),
        Q.appendChild(l);
    });
  }
  function GG(Q, U) {
    const l = URL.createObjectURL(new Blob([Q], { type: 'application/pdf' })),
      d = document.createElement('a');
    (d.href = l),
      (d.download = U),
      (d.style.display = 'none'),
      document.body.append(d),
      d.click(),
      setTimeout(() => {
        URL.revokeObjectURL(l), document.body.removeChild(d);
      }, 1e3);
  }
  function ae(Q) {
    for (; Q != null && Q.firstChild; ) Q.removeChild(Q.firstChild);
  }
  function pN(Q) {
    Q == null ||
      Q.querySelectorAll('canvas').forEach((U) => {
        var l;
        (U.width = 1),
          (U.height = 1),
          (l = U.getContext('2d')) == null || l.clearRect(0, 0, 1, 1);
      });
  }
  function ie(Q) {
    return Object.prototype.hasOwnProperty.call(Q, '_pdfInfo');
  }
  function oN({ onError: Q, onPasswordRequest: U, onProgress: l, source: d }) {
    const Z = j.shallowRef(null),
      t = j.shallowRef(null);
    return (
      j.watchEffect(async () => {
        const F = j.toValue(d);
        if (F) {
          if (ie(F)) {
            Z.value = F;
            return;
          }
          try {
            (t.value = eG(F)),
              U &&
                (t.value.onPassword = (c, n) => {
                  U({
                    callback: c,
                    isWrongPassword: n === hG.INCORRECT_PASSWORD,
                  });
                }),
              l && (t.value.onProgress = l),
              (Z.value = await t.value.promise);
          } catch (c) {
            if (((Z.value = null), Q)) Q(c);
            else throw c;
          }
        }
      }),
      j.watch(Z, (F, c) => {
        c == null || c.destroy();
      }),
      j.onBeforeUnmount(() => {
        var F, c, n, V;
        (F = t.value) != null && F.onPassword && (t.value.onPassword = null),
          (c = t.value) != null && c.onProgress && (t.value.onProgress = null),
          (n = t.value) == null || n.destroy(),
          ie(j.toValue(d)) || (V = Z.value) == null || V.destroy();
      }),
      { doc: Z }
    );
  }
  var Gs = {};
  (Gs.d = (Q, U) => {
    for (var l in U)
      Gs.o(U, l) &&
        !Gs.o(Q, l) &&
        Object.defineProperty(Q, l, { enumerable: !0, get: U[l] });
  }),
    (Gs.o = (Q, U) => Object.prototype.hasOwnProperty.call(Q, U));
  var bl = (globalThis.pdfjsViewer = {});
  Gs.d(bl, {
    AnnotationLayerBuilder: () => ye,
    DownloadManager: () => bT,
    EventBus: () => ke,
    FindState: () => SZ,
    GenericL10n: () => a0,
    LinkTarget: () => ut,
    PDFFindController: () => tT,
    PDFHistory: () => RS,
    PDFLinkService: () => IW,
    PDFPageView: () => Um,
    PDFScriptingManager: () => uS,
    PDFSinglePageViewer: () => yS,
    PDFViewer: () => tm,
    ProgressBar: () => DG,
    RenderingStates: () => ml,
    ScrollMode: () => Ul,
    SimpleLinkService: () => kN,
    SpreadMode: () => _l,
    StructTreeLayerBuilder: () => $e,
    TextLayerBuilder: () => jW,
    XfaLayerBuilder: () => lm,
    parseQueryString: () => LW,
  });
  const TG = 'auto',
    Re = 1,
    Ne = 1.1,
    SG = 0.1,
    XG = 10,
    BN = 0,
    YG = 1.25,
    he = 40,
    be = 5,
    ml = { INITIAL: 0, RUNNING: 1, PAUSED: 2, FINISHED: 3 },
    V0 = { UNKNOWN: 0, NORMAL: 1, CHANGING: 2, FULLSCREEN: 3 },
    Fd = { DISABLE: 0, ENABLE: 1, ENABLE_PERMISSIONS: 2 },
    Ul = { UNKNOWN: -1, VERTICAL: 0, HORIZONTAL: 1, WRAPPED: 2, PAGE: 3 },
    _l = { UNKNOWN: -1, NONE: 0, ODD: 1, EVEN: 2 };
  class uG {
    constructor() {
      const U = window.devicePixelRatio || 1;
      (this.sx = U), (this.sy = U);
    }
    get scaled() {
      return this.sx !== 1 || this.sy !== 1;
    }
  }
  function ee(Q, U, l = !1) {
    let d = Q.offsetParent;
    if (!d) {
      console.error('offsetParent is not set -- cannot scroll');
      return;
    }
    let Z = Q.offsetTop + Q.clientTop,
      t = Q.offsetLeft + Q.clientLeft;
    for (
      ;
      (d.clientHeight === d.scrollHeight && d.clientWidth === d.scrollWidth) ||
      (l &&
        (d.classList.contains('markedContent') ||
          getComputedStyle(d).overflow === 'hidden'));

    )
      if (((Z += d.offsetTop), (t += d.offsetLeft), (d = d.offsetParent), !d))
        return;
    U &&
      (U.top !== void 0 && (Z += U.top),
      U.left !== void 0 && ((t += U.left), (d.scrollLeft = t))),
      (d.scrollTop = Z);
  }
  function pG(Q, U, l = void 0) {
    const d = function (F) {
        t ||
          (t = window.requestAnimationFrame(function () {
            t = null;
            const n = Q.scrollLeft,
              V = Z.lastX;
            n !== V && (Z.right = n > V), (Z.lastX = n);
            const W = Q.scrollTop,
              a = Z.lastY;
            W !== a && (Z.down = W > a), (Z.lastY = W), U(Z);
          }));
      },
      Z = {
        right: !0,
        down: !0,
        lastX: Q.scrollLeft,
        lastY: Q.scrollTop,
        _eventHandler: d,
      };
    let t = null;
    return (
      Q.addEventListener('scroll', d, { useCapture: !0, signal: l }),
      l == null ||
        l.addEventListener('abort', () => window.cancelAnimationFrame(t), {
          once: !0,
        }),
      Z
    );
  }
  function LW(Q) {
    const U = new Map();
    for (const [l, d] of new URLSearchParams(Q)) U.set(l.toLowerCase(), d);
    return U;
  }
  const me = /[\x00-\x1F]/g;
  function zW(Q, U = !1) {
    return me.test(Q)
      ? U
        ? Q.replaceAll(me, (l) => (l === '\0' ? '' : ' '))
        : Q.replaceAll('\0', '')
      : Q;
  }
  function Ts(Q, U, l = 0) {
    let d = l,
      Z = Q.length - 1;
    if (Z < 0 || !U(Q[Z])) return Q.length;
    if (U(Q[d])) return d;
    for (; d < Z; ) {
      const t = (d + Z) >> 1,
        F = Q[t];
      U(F) ? (Z = t) : (d = t + 1);
    }
    return d;
  }
  function Me(Q) {
    if (Math.floor(Q) === Q) return [Q, 1];
    const U = 1 / Q,
      l = 8;
    if (U > l) return [1, l];
    if (Math.floor(U) === U) return [1, U];
    const d = Q > 1 ? U : Q;
    let Z = 0,
      t = 1,
      F = 1,
      c = 1;
    for (;;) {
      const V = Z + F,
        W = t + c;
      if (W > l) break;
      d <= V / W ? ((F = V), (c = W)) : ((Z = V), (t = W));
    }
    let n;
    return (
      d - Z / t < F / c - d
        ? (n = d === Q ? [Z, t] : [t, Z])
        : (n = d === Q ? [F, c] : [c, F]),
      n
    );
  }
  function kW(Q, U) {
    return Q - (Q % U);
  }
  function oG(Q, U, l) {
    if (Q < 2) return Q;
    let d = U[Q].div,
      Z = d.offsetTop + d.clientTop;
    Z >= l && ((d = U[Q - 1].div), (Z = d.offsetTop + d.clientTop));
    for (
      let t = Q - 2;
      t >= 0 &&
      ((d = U[t].div), !(d.offsetTop + d.clientTop + d.clientHeight <= Z));
      --t
    )
      Q = t;
    return Q;
  }
  function BG({
    scrollEl: Q,
    views: U,
    sortByVisibility: l = !1,
    horizontal: d = !1,
    rtl: Z = !1,
  }) {
    const t = Q.scrollTop,
      F = t + Q.clientHeight,
      c = Q.scrollLeft,
      n = c + Q.clientWidth;
    function V(G) {
      const T = G.div;
      return T.offsetTop + T.clientTop + T.clientHeight > t;
    }
    function W(G) {
      const T = G.div,
        u = T.offsetLeft + T.clientLeft,
        X = u + T.clientWidth;
      return Z ? u < n : X > c;
    }
    const a = [],
      i = new Set(),
      h = U.length;
    let N = Ts(U, d ? W : V);
    N > 0 && N < h && !d && (N = oG(N, U, t));
    let M = d ? n : -1;
    for (let G = N; G < h; G++) {
      const T = U[G],
        u = T.div,
        X = u.offsetLeft + u.clientLeft,
        S = u.offsetTop + u.clientTop,
        p = u.clientWidth,
        L = u.clientHeight,
        Y = X + p,
        o = S + L;
      if (M === -1) o >= F && (M = o);
      else if ((d ? X : S) > M) break;
      if (o <= t || S >= F || Y <= c || X >= n) continue;
      const y = Math.max(0, t - S) + Math.max(0, o - F),
        D = Math.max(0, c - X) + Math.max(0, Y - n),
        I = (L - y) / L,
        O = (p - D) / p,
        x = (I * O * 100) | 0;
      a.push({
        id: T.id,
        x: X,
        y: S,
        view: T,
        percent: x,
        widthPercent: (O * 100) | 0,
      }),
        i.add(T.id);
    }
    const J = a[0],
      m = a.at(-1);
    return (
      l &&
        a.sort(function (G, T) {
          const u = G.percent - T.percent;
          return Math.abs(u) > 0.001 ? -u : G.id - T.id;
        }),
      { first: J, last: m, views: a, ids: i }
    );
  }
  function Je(Q) {
    return Number.isInteger(Q) && Q % 90 === 0;
  }
  function yG(Q) {
    return (
      Number.isInteger(Q) && Object.values(Ul).includes(Q) && Q !== Ul.UNKNOWN
    );
  }
  function LG(Q) {
    return (
      Number.isInteger(Q) && Object.values(_l).includes(Q) && Q !== _l.UNKNOWN
    );
  }
  function Ge(Q) {
    return Q.width <= Q.height;
  }
  new Promise(function (Q) {
    window.requestAnimationFrame(Q);
  });
  const zG = document.documentElement.style;
  function kG(Q, U, l) {
    return Math.min(Math.max(Q, U), l);
  }
  class DG {
    constructor(U) {
      R(this, dt, null);
      R(this, EF, null);
      R(this, CF, 0);
      R(this, yc, null);
      R(this, rF, !0);
      e(this, dt, U.classList), e(this, yc, U.style);
    }
    get percent() {
      return s(this, CF);
    }
    set percent(U) {
      if ((e(this, CF, kG(U, 0, 100)), isNaN(U))) {
        s(this, dt).add('indeterminate');
        return;
      }
      s(this, dt).remove('indeterminate'),
        s(this, yc).setProperty('--progressBar-percent', `${s(this, CF)}%`);
    }
    setWidth(U) {
      if (!U) return;
      const d = U.parentNode.offsetWidth - U.offsetWidth;
      d > 0 && s(this, yc).setProperty('--progressBar-end-offset', `${d}px`);
    }
    setDisableAutoFetch(U = 5e3) {
      isNaN(s(this, CF)) ||
        (s(this, EF) && clearTimeout(s(this, EF)),
        this.show(),
        e(
          this,
          EF,
          setTimeout(() => {
            e(this, EF, null), this.hide();
          }, U),
        ));
    }
    hide() {
      s(this, rF) && (e(this, rF, !1), s(this, dt).add('hidden'));
    }
    show() {
      s(this, rF) || (e(this, rF, !0), s(this, dt).remove('hidden'));
    }
  }
  (dt = new WeakMap()),
    (EF = new WeakMap()),
    (CF = new WeakMap()),
    (yc = new WeakMap()),
    (rF = new WeakMap());
  function IG(Q) {
    let U = Ul.VERTICAL,
      l = _l.NONE;
    switch (Q) {
      case 'SinglePage':
        U = Ul.PAGE;
        break;
      case 'OneColumn':
        break;
      case 'TwoPageLeft':
        U = Ul.PAGE;
      case 'TwoColumnLeft':
        l = _l.ODD;
        break;
      case 'TwoPageRight':
        U = Ul.PAGE;
      case 'TwoColumnRight':
        l = _l.EVEN;
        break;
    }
    return { scrollMode: U, spreadMode: l };
  }
  const wU = {
    SPACE: 0,
    ALPHA_LETTER: 1,
    PUNCT: 2,
    HAN_LETTER: 3,
    KATAKANA_LETTER: 4,
    HIRAGANA_LETTER: 5,
    HALFWIDTH_KATAKANA_LETTER: 6,
    THAI_LETTER: 7,
  };
  function EG(Q) {
    return Q < 11904;
  }
  function CG(Q) {
    return (Q & 65408) === 0;
  }
  function rG(Q) {
    return (Q >= 97 && Q <= 122) || (Q >= 65 && Q <= 90);
  }
  function wG(Q) {
    return Q >= 48 && Q <= 57;
  }
  function xG(Q) {
    return Q === 32 || Q === 9 || Q === 13 || Q === 10;
  }
  function jG(Q) {
    return (Q >= 13312 && Q <= 40959) || (Q >= 63744 && Q <= 64255);
  }
  function OG(Q) {
    return Q >= 12448 && Q <= 12543;
  }
  function gG(Q) {
    return Q >= 12352 && Q <= 12447;
  }
  function KG(Q) {
    return Q >= 65376 && Q <= 65439;
  }
  function vG(Q) {
    return (Q & 65408) === 3584;
  }
  function DW(Q) {
    return EG(Q)
      ? CG(Q)
        ? xG(Q)
          ? wU.SPACE
          : rG(Q) || wG(Q) || Q === 95
            ? wU.ALPHA_LETTER
            : wU.PUNCT
        : vG(Q)
          ? wU.THAI_LETTER
          : Q === 160
            ? wU.SPACE
            : wU.ALPHA_LETTER
      : jG(Q)
        ? wU.HAN_LETTER
        : OG(Q)
          ? wU.KATAKANA_LETTER
          : gG(Q)
            ? wU.HIRAGANA_LETTER
            : KG(Q)
              ? wU.HALFWIDTH_KATAKANA_LETTER
              : wU.ALPHA_LETTER;
  }
  let Te;
  function HG() {
    return (
      Te ||
        (Te =
          ' ¨ª¯²-µ¸-º¼-¾Ĳ-ĳĿ-ŀŉſǄ-ǌǱ-ǳʰ-ʸ˘-˝ˠ-ˤʹͺ;΄-΅·ϐ-ϖϰ-ϲϴ-ϵϹևٵ-ٸक़-य़ড়-ঢ়য়ਲ਼ਸ਼ਖ਼-ਜ਼ਫ਼ଡ଼-ଢ଼ำຳໜ-ໝ༌གྷཌྷདྷབྷཛྷཀྵჼᴬ-ᴮᴰ-ᴺᴼ-ᵍᵏ-ᵪᵸᶛ-ᶿẚ-ẛάέήίόύώΆ᾽-῁ΈΉ῍-῏ΐΊ῝-῟ΰΎ῭-`ΌΏ´-῾ - ‑‗․-… ″-‴‶-‷‼‾⁇-⁉⁗ ⁰-ⁱ⁴-₎ₐ-ₜ₨℀-℃℅-ℇ℉-ℓℕ-№ℙ-ℝ℠-™ℤΩℨK-ℭℯ-ℱℳ-ℹ℻-⅀ⅅ-ⅉ⅐-ⅿ↉∬-∭∯-∰〈-〉①-⓪⨌⩴-⩶⫝̸ⱼ-ⱽⵯ⺟⻳⼀-⿕　〶〸-〺゛-゜ゟヿㄱ-ㆎ㆒-㆟㈀-㈞㈠-㉇㉐-㉾㊀-㏿ꚜ-ꚝꝰꟲ-ꟴꟸ-ꟹꭜ-ꭟꭩ豈-嗀塚晴凞-羽蘒諸逸-都飯-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-﷼︐-︙︰-﹄﹇-﹒﹔-﹦﹨-﹫ﹰ-ﹲﹴﹶ-ﻼ！-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ￠-￦'),
      Te
    );
  }
  const SZ = { FOUND: 0, NOT_FOUND: 1, WRAPPED: 2, PENDING: 3 },
    PG = 250,
    fG = -50,
    AG = -400,
    Se = {
      '‐': '-',
      '‘': "'",
      '’': "'",
      '‚': "'",
      '‛': "'",
      '“': '"',
      '”': '"',
      '„': '"',
      '‟': '"',
      '¼': '1/4',
      '½': '1/2',
      '¾': '3/4',
    },
    Xe = new Set([
      12441, 12442, 2381, 2509, 2637, 2765, 2893, 3021, 3149, 3277, 3387, 3388,
      3405, 3530, 3642, 3770, 3972, 4153, 4154, 5908, 5940, 6098, 6752, 6980,
      7082, 7083, 7154, 7155, 11647, 43014, 43052, 43204, 43347, 43456, 43766,
      44013, 3158, 3953, 3954, 3962, 3963, 3964, 3965, 3968, 3956,
    ]);
  let Ye;
  const _G = /\p{M}+/gu,
    qG = /([.*+?^${}()|[\]\\])|(\p{P})|(\s+)|(\p{M})|(\p{L})/gu,
    $G = /([^\p{M}])\p{M}*$/u,
    lT = /^\p{M}*([^\p{M}])/u,
    UT = /[\uAC00-\uD7AF\uFA6C\uFACF-\uFAD1\uFAD5-\uFAD7]+/g,
    ue = new Map(),
    dT =
      '[\\u1100-\\u1112\\ud7a4-\\ud7af\\ud84a\\ud84c\\ud850\\ud854\\ud857\\ud85f]',
    pe = new Map();
  let yN = null,
    LN = null;
  function zN(Q) {
    const U = [];
    let l;
    for (; (l = UT.exec(Q)) !== null; ) {
      let { index: h } = l;
      for (const N of l[0]) {
        let M = ue.get(N);
        M || ((M = N.normalize('NFD').length), ue.set(N, M)), U.push([M, h++]);
      }
    }
    let d;
    if (U.length === 0 && yN) d = yN;
    else if (U.length > 0 && LN) d = LN;
    else {
      const h = Object.keys(Se).join(''),
        N = HG(),
        m = `([${h}])|([${N}])|((?:゙|゚)\\n)|(\\p{M}+(?:-\\n)?)|(\\S-\\n)|((?:\\p{Ideographic}|[぀-ヿ])\\n)|(\\n)`;
      U.length === 0
        ? (d = yN = new RegExp(m + '|(\\u0000)', 'gum'))
        : (d = LN = new RegExp(m + `|(${dT})`, 'gum'));
    }
    const Z = [];
    for (; (l = _G.exec(Q)) !== null; ) Z.push([l[0].length, l.index]);
    let t = Q.normalize('NFD');
    const F = [[0, 0]];
    let c = 0,
      n = 0,
      V = 0,
      W = 0,
      a = 0,
      i = !1;
    return (
      (t = t.replace(d, (h, N, M, J, m, G, T, u, X, S) => {
        var p, L, Y;
        if (((S -= W), N)) {
          const o = Se[N],
            y = o.length;
          for (let D = 1; D < y; D++) F.push([S - V + D, V - D]);
          return (V -= y - 1), o;
        }
        if (M) {
          let o = pe.get(M);
          o || ((o = M.normalize('NFKC')), pe.set(M, o));
          const y = o.length;
          for (let D = 1; D < y; D++) F.push([S - V + D, V - D]);
          return (V -= y - 1), o;
        }
        if (J)
          return (
            (i = !0),
            S + a === ((p = Z[c]) == null ? void 0 : p[1])
              ? ++c
              : (F.push([S - 1 - V + 1, V - 1]), (V -= 1), (W += 1)),
            F.push([S - V + 1, V]),
            (W += 1),
            (a += 1),
            J.charAt(0)
          );
        if (m) {
          const o = m.endsWith(`
`),
            y = o ? m.length - 2 : m.length;
          i = !0;
          let D = y;
          S + a === ((L = Z[c]) == null ? void 0 : L[1]) &&
            ((D -= Z[c][0]), ++c);
          for (let I = 1; I <= D; I++) F.push([S - 1 - V + I, V - I]);
          return (
            (V -= D),
            (W += D),
            o
              ? ((S += y - 1),
                F.push([S - V + 1, 1 + V]),
                (V += 1),
                (W += 1),
                (a += 1),
                m.slice(0, y))
              : m
          );
        }
        if (G) {
          const o = G.length - 2;
          return (
            F.push([S - V + o, 1 + V]),
            (V += 1),
            (W += 1),
            (a += 1),
            G.slice(0, -2)
          );
        }
        if (T) {
          const o = T.length - 1;
          return F.push([S - V + o, V]), (W += 1), (a += 1), T.slice(0, -1);
        }
        if (u)
          return F.push([S - V + 1, V - 1]), (V -= 1), (W += 1), (a += 1), ' ';
        if (S + a === ((Y = U[n]) == null ? void 0 : Y[1])) {
          const o = U[n][0] - 1;
          ++n;
          for (let y = 1; y <= o; y++) F.push([S - (V - y), V - y]);
          (V -= o), (W += o);
        }
        return X;
      })),
      F.push([t.length, V]),
      [t, F, i]
    );
  }
  function ZT(Q, U, l) {
    if (!Q) return [U, l];
    const d = U,
      Z = U + l - 1;
    let t = Ts(Q, (W) => W[0] >= d);
    Q[t][0] > d && --t;
    let F = Ts(Q, (W) => W[0] >= Z, t);
    Q[F][0] > Z && --F;
    const c = d + Q[t][1],
      V = Z + Q[F][1] + 1 - c;
    return [c, V];
  }
  class tT {
    constructor({
      linkService: U,
      eventBus: l,
      updateMatchesCountOnProgress: d = !0,
    }) {
      R(this, yi);
      R(this, _n);
      R(this, qn);
      R(this, Li);
      R(this, zi);
      R(this, ki);
      R(this, $n);
      R(this, Di);
      R(this, Ii);
      R(this, zc);
      R(this, xF);
      R(this, Zt);
      R(this, Ei);
      R(this, lV);
      R(this, UV);
      R(this, kc);
      R(this, Ci);
      R(this, dV);
      R(this, ZV);
      R(this, jF);
      R(this, wl, null);
      R(this, Lc, !0);
      R(this, wF, 0);
      (this._linkService = U),
        (this._eventBus = l),
        e(this, Lc, d),
        (this.onIsPageVisible = null),
        b(this, _n, Hh).call(this),
        l._on('find', b(this, yi, k2).bind(this)),
        l._on('findbarclose', b(this, Ci, x2).bind(this));
    }
    get highlightMatches() {
      return this._highlightMatches;
    }
    get pageMatches() {
      return this._pageMatches;
    }
    get pageMatchesLength() {
      return this._pageMatchesLength;
    }
    get selected() {
      return this._selected;
    }
    get state() {
      return s(this, wl);
    }
    setDocument(U) {
      this._pdfDocument && b(this, _n, Hh).call(this),
        U && ((this._pdfDocument = U), this._firstPageCapability.resolve());
    }
    scrollMatchIntoView({
      element: U = null,
      selectedLeft: l = 0,
      pageIndex: d = -1,
      matchIndex: Z = -1,
    }) {
      if (!this._scrollMatches || !U) return;
      if (Z === -1 || Z !== this._selected.matchIdx) return;
      if (d === -1 || d !== this._selected.pageIdx) return;
      this._scrollMatches = !1;
      const t = { top: fG, left: l + AG };
      ee(U, t, !0);
    }
  }
  (wl = new WeakMap()),
    (Lc = new WeakMap()),
    (wF = new WeakMap()),
    (yi = new WeakSet()),
    (k2 = function (U) {
      if (!U) return;
      const l = this._pdfDocument,
        { type: d } = U;
      (s(this, wl) === null || b(this, Li, D2).call(this, U)) &&
        (this._dirtyMatch = !0),
        e(this, wl, U),
        d !== 'highlightallchange' && b(this, jF, dW).call(this, SZ.PENDING),
        this._firstPageCapability.promise.then(() => {
          if (!this._pdfDocument || (l && this._pdfDocument !== l)) return;
          b(this, Ii, r2).call(this);
          const Z = !this._highlightMatches,
            t = !!this._findTimeout;
          this._findTimeout &&
            (clearTimeout(this._findTimeout), (this._findTimeout = null)),
            d
              ? this._dirtyMatch
                ? b(this, Zt, Qs).call(this)
                : d === 'again'
                  ? (b(this, Zt, Qs).call(this),
                    Z && s(this, wl).highlightAll && b(this, xF, UW).call(this))
                  : d === 'highlightallchange'
                    ? (t
                        ? b(this, Zt, Qs).call(this)
                        : (this._highlightMatches = !0),
                      b(this, xF, UW).call(this))
                    : b(this, Zt, Qs).call(this)
              : (this._findTimeout = setTimeout(() => {
                  b(this, Zt, Qs).call(this), (this._findTimeout = null);
                }, PG));
        });
    }),
    (_n = new WeakSet()),
    (Hh = function () {
      (this._highlightMatches = !1),
        (this._scrollMatches = !1),
        (this._pdfDocument = null),
        (this._pageMatches = []),
        (this._pageMatchesLength = []),
        e(this, wF, 0),
        e(this, wl, null),
        (this._selected = { pageIdx: -1, matchIdx: -1 }),
        (this._offset = { pageIdx: null, matchIdx: null, wrapped: !1 }),
        (this._extractTextPromises = []),
        (this._pageContents = []),
        (this._pageDiffs = []),
        (this._hasDiacritics = []),
        (this._matchesCountTotal = 0),
        (this._pagesToSearch = null),
        (this._pendingFindMatches = new Set()),
        (this._resumePageIdx = null),
        (this._dirtyMatch = !1),
        clearTimeout(this._findTimeout),
        (this._findTimeout = null),
        (this._firstPageCapability = Promise.withResolvers());
    }),
    (qn = new WeakSet()),
    (Ph = function () {
      const { query: U } = s(this, wl);
      return typeof U == 'string'
        ? (U !== this._rawQuery &&
            ((this._rawQuery = U), ([this._normalizedQuery] = zN(U))),
          this._normalizedQuery)
        : (U || []).filter((l) => !!l).map((l) => zN(l)[0]);
    }),
    (Li = new WeakSet()),
    (D2 = function (U) {
      var F;
      const l = U.query,
        d = s(this, wl).query,
        Z = typeof l;
      if (Z !== typeof d) return !0;
      if (Z === 'string') {
        if (l !== d) return !0;
      } else if (JSON.stringify(l) !== JSON.stringify(d)) return !0;
      switch (U.type) {
        case 'again':
          const c = this._selected.pageIdx + 1,
            n = this._linkService;
          return (
            c >= 1 &&
            c <= n.pagesCount &&
            c !== n.page &&
            !(
              ((F = this.onIsPageVisible) == null ? void 0 : F.call(this, c)) ??
              !0
            )
          );
        case 'highlightallchange':
          return !1;
      }
      return !0;
    }),
    (zi = new WeakSet()),
    (I2 = function (U, l, d) {
      let Z = U.slice(0, l).match($G);
      if (Z) {
        const t = U.charCodeAt(l),
          F = Z[1].charCodeAt(0);
        if (DW(t) === DW(F)) return !1;
      }
      if (((Z = U.slice(l + d).match(lT)), Z)) {
        const t = U.charCodeAt(l + d - 1),
          F = Z[1].charCodeAt(0);
        if (DW(t) === DW(F)) return !1;
      }
      return !0;
    }),
    (ki = new WeakSet()),
    (E2 = function (U, l, d, Z) {
      const t = (this._pageMatches[d] = []),
        F = (this._pageMatchesLength[d] = []);
      if (!U) return;
      const c = this._pageDiffs[d];
      let n;
      for (; (n = U.exec(Z)) !== null; ) {
        if (l && !b(this, zi, I2).call(this, Z, n.index, n[0].length)) continue;
        const [V, W] = ZT(c, n.index, n[0].length);
        W && (t.push(V), F.push(W));
      }
    }),
    ($n = new WeakSet()),
    (fh = function (U, l) {
      const { matchDiacritics: d } = s(this, wl);
      let Z = !1;
      U = U.replaceAll(qG, (F, c, n, V, W, a) =>
        c
          ? `[ ]*\\${c}[ ]*`
          : n
            ? `[ ]*${n}[ ]*`
            : V
              ? '[ ]+'
              : d
                ? W || a
                : W
                  ? Xe.has(W.charCodeAt(0))
                    ? W
                    : ''
                  : l
                    ? ((Z = !0), `${a}\\p{M}*`)
                    : a,
      );
      const t = '[ ]*';
      return (
        U.endsWith(t) && (U = U.slice(0, U.length - t.length)),
        d &&
          l &&
          (Ye || (Ye = String.fromCharCode(...Xe)),
          (Z = !0),
          (U = `${U}(?=[${Ye}]|[^\\p{M}]|$)`)),
        [Z, U]
      );
    }),
    (Di = new WeakSet()),
    (C2 = function (U) {
      let l = s(this, qn, Ph);
      if (l.length === 0) return;
      const { caseSensitive: d, entireWord: Z } = s(this, wl),
        t = this._pageContents[U],
        F = this._hasDiacritics[U];
      let c = !1;
      typeof l == 'string'
        ? ([c, l] = b(this, $n, fh).call(this, l, F))
        : (l = l
            .sort()
            .reverse()
            .map((W) => {
              const [a, i] = b(this, $n, fh).call(this, W, F);
              return c || (c = a), `(${i})`;
            })
            .join('|'));
      const n = `g${c ? 'u' : ''}${d ? '' : 'i'}`;
      (l = l ? new RegExp(l, n) : null),
        b(this, ki, E2).call(this, l, Z, U, t),
        s(this, wl).highlightAll && b(this, zc, CR).call(this, U),
        this._resumePageIdx === U &&
          ((this._resumePageIdx = null), b(this, lV, Ah).call(this));
      const V = this._pageMatches[U].length;
      (this._matchesCountTotal += V),
        s(this, Lc)
          ? V > 0 && b(this, ZV, $h).call(this)
          : ++hU(this, wF)._ === this._linkService.pagesCount &&
            b(this, ZV, $h).call(this);
    }),
    (Ii = new WeakSet()),
    (r2 = function () {
      if (this._extractTextPromises.length > 0) return;
      let U = Promise.resolve();
      const l = { disableNormalization: !0 };
      for (let d = 0, Z = this._linkService.pagesCount; d < Z; d++) {
        const { promise: t, resolve: F } = Promise.withResolvers();
        (this._extractTextPromises[d] = t),
          (U = U.then(() =>
            this._pdfDocument
              .getPage(d + 1)
              .then((c) => c.getTextContent(l))
              .then(
                (c) => {
                  const n = [];
                  for (const V of c.items)
                    n.push(V.str),
                      V.hasEOL &&
                        n.push(`
`);
                  ([
                    this._pageContents[d],
                    this._pageDiffs[d],
                    this._hasDiacritics[d],
                  ] = zN(n.join(''))),
                    F();
                },
                (c) => {
                  console.error(
                    `Unable to get text content for page ${d + 1}`,
                    c,
                  ),
                    (this._pageContents[d] = ''),
                    (this._pageDiffs[d] = null),
                    (this._hasDiacritics[d] = !1),
                    F();
                },
              ),
          ));
      }
    }),
    (zc = new WeakSet()),
    (CR = function (U) {
      this._scrollMatches &&
        this._selected.pageIdx === U &&
        (this._linkService.page = U + 1),
        this._eventBus.dispatch('updatetextlayermatches', {
          source: this,
          pageIndex: U,
        });
    }),
    (xF = new WeakSet()),
    (UW = function () {
      this._eventBus.dispatch('updatetextlayermatches', {
        source: this,
        pageIndex: -1,
      });
    }),
    (Zt = new WeakSet()),
    (Qs = function () {
      const U = s(this, wl).findPrevious,
        l = this._linkService.page - 1,
        d = this._linkService.pagesCount;
      if (((this._highlightMatches = !0), this._dirtyMatch)) {
        (this._dirtyMatch = !1),
          (this._selected.pageIdx = this._selected.matchIdx = -1),
          (this._offset.pageIdx = l),
          (this._offset.matchIdx = null),
          (this._offset.wrapped = !1),
          (this._resumePageIdx = null),
          (this._pageMatches.length = 0),
          (this._pageMatchesLength.length = 0),
          e(this, wF, 0),
          (this._matchesCountTotal = 0),
          b(this, xF, UW).call(this);
        for (let F = 0; F < d; F++)
          this._pendingFindMatches.has(F) ||
            (this._pendingFindMatches.add(F),
            this._extractTextPromises[F].then(() => {
              this._pendingFindMatches.delete(F), b(this, Di, C2).call(this, F);
            }));
      }
      if (s(this, qn, Ph).length === 0) {
        b(this, jF, dW).call(this, SZ.FOUND);
        return;
      }
      if (this._resumePageIdx) return;
      const t = this._offset;
      if (((this._pagesToSearch = d), t.matchIdx !== null)) {
        const F = this._pageMatches[t.pageIdx].length;
        if ((!U && t.matchIdx + 1 < F) || (U && t.matchIdx > 0)) {
          (t.matchIdx = U ? t.matchIdx - 1 : t.matchIdx + 1),
            b(this, kc, rR).call(this, !0);
          return;
        }
        b(this, UV, _h).call(this, U);
      }
      b(this, lV, Ah).call(this);
    }),
    (Ei = new WeakSet()),
    (w2 = function (U) {
      const l = this._offset,
        d = U.length,
        Z = s(this, wl).findPrevious;
      return d
        ? ((l.matchIdx = Z ? d - 1 : 0), b(this, kc, rR).call(this, !0), !0)
        : (b(this, UV, _h).call(this, Z),
          l.wrapped && ((l.matchIdx = null), this._pagesToSearch < 0)
            ? (b(this, kc, rR).call(this, !1), !0)
            : !1);
    }),
    (lV = new WeakSet()),
    (Ah = function () {
      this._resumePageIdx !== null &&
        console.error('There can only be one pending page.');
      let U = null;
      do {
        const l = this._offset.pageIdx;
        if (((U = this._pageMatches[l]), !U)) {
          this._resumePageIdx = l;
          break;
        }
      } while (!b(this, Ei, w2).call(this, U));
    }),
    (UV = new WeakSet()),
    (_h = function (U) {
      const l = this._offset,
        d = this._linkService.pagesCount;
      (l.pageIdx = U ? l.pageIdx - 1 : l.pageIdx + 1),
        (l.matchIdx = null),
        this._pagesToSearch--,
        (l.pageIdx >= d || l.pageIdx < 0) &&
          ((l.pageIdx = U ? d - 1 : 0), (l.wrapped = !0));
    }),
    (kc = new WeakSet()),
    (rR = function (U = !1) {
      let l = SZ.NOT_FOUND;
      const d = this._offset.wrapped;
      if (((this._offset.wrapped = !1), U)) {
        const Z = this._selected.pageIdx;
        (this._selected.pageIdx = this._offset.pageIdx),
          (this._selected.matchIdx = this._offset.matchIdx),
          (l = d ? SZ.WRAPPED : SZ.FOUND),
          Z !== -1 &&
            Z !== this._selected.pageIdx &&
            b(this, zc, CR).call(this, Z);
      }
      b(this, jF, dW).call(this, l, s(this, wl).findPrevious),
        this._selected.pageIdx !== -1 &&
          ((this._scrollMatches = !0),
          b(this, zc, CR).call(this, this._selected.pageIdx));
    }),
    (Ci = new WeakSet()),
    (x2 = function (U) {
      const l = this._pdfDocument;
      this._firstPageCapability.promise.then(() => {
        !this._pdfDocument ||
          (l && this._pdfDocument !== l) ||
          (this._findTimeout &&
            (clearTimeout(this._findTimeout), (this._findTimeout = null)),
          this._resumePageIdx &&
            ((this._resumePageIdx = null), (this._dirtyMatch = !0)),
          b(this, jF, dW).call(this, SZ.FOUND),
          (this._highlightMatches = !1),
          b(this, xF, UW).call(this));
      });
    }),
    (dV = new WeakSet()),
    (qh = function () {
      var t;
      const { pageIdx: U, matchIdx: l } = this._selected;
      let d = 0,
        Z = this._matchesCountTotal;
      if (l !== -1) {
        for (let F = 0; F < U; F++)
          d += ((t = this._pageMatches[F]) == null ? void 0 : t.length) || 0;
        d += l + 1;
      }
      return (d < 1 || d > Z) && (d = Z = 0), { current: d, total: Z };
    }),
    (ZV = new WeakSet()),
    ($h = function () {
      this._eventBus.dispatch('updatefindmatchescount', {
        source: this,
        matchesCount: b(this, dV, qh).call(this),
      });
    }),
    (jF = new WeakSet()),
    (dW = function (U, l = !1) {
      var d, Z;
      (!s(this, Lc) &&
        (s(this, wF) !== this._linkService.pagesCount || U === SZ.PENDING)) ||
        this._eventBus.dispatch('updatefindcontrolstate', {
          source: this,
          state: U,
          previous: l,
          entireWord:
            ((d = s(this, wl)) == null ? void 0 : d.entireWord) ?? null,
          matchesCount: b(this, dV, qh).call(this),
          rawQuery: ((Z = s(this, wl)) == null ? void 0 : Z.query) ?? null,
        });
    });
  const FT = 'noopener noreferrer nofollow',
    ut = { NONE: 0, SELF: 1, BLANK: 2, PARENT: 3, TOP: 4 },
    wi = class wi {
      constructor({
        eventBus: U,
        externalLinkTarget: l = null,
        externalLinkRel: d = null,
        ignoreDestinationZoom: Z = !1,
      } = {}) {
        f(this, 'externalLinkEnabled', !0);
        (this.eventBus = U),
          (this.externalLinkTarget = l),
          (this.externalLinkRel = d),
          (this._ignoreDestinationZoom = Z),
          (this.baseUrl = null),
          (this.pdfDocument = null),
          (this.pdfViewer = null),
          (this.pdfHistory = null);
      }
      setDocument(U, l = null) {
        (this.baseUrl = l), (this.pdfDocument = U);
      }
      setViewer(U) {
        this.pdfViewer = U;
      }
      setHistory(U) {
        this.pdfHistory = U;
      }
      get pagesCount() {
        return this.pdfDocument ? this.pdfDocument.numPages : 0;
      }
      get page() {
        return this.pdfDocument ? this.pdfViewer.currentPageNumber : 1;
      }
      set page(U) {
        this.pdfDocument && (this.pdfViewer.currentPageNumber = U);
      }
      get rotation() {
        return this.pdfDocument ? this.pdfViewer.pagesRotation : 0;
      }
      set rotation(U) {
        this.pdfDocument && (this.pdfViewer.pagesRotation = U);
      }
      get isInPresentationMode() {
        return this.pdfDocument ? this.pdfViewer.isInPresentationMode : !1;
      }
      async goToDestination(U) {
        if (!this.pdfDocument) return;
        let l, d, Z;
        if (
          (typeof U == 'string'
            ? ((l = U), (d = await this.pdfDocument.getDestination(U)))
            : ((l = null), (d = await U)),
          !Array.isArray(d))
        ) {
          console.error(
            `goToDestination: "${d}" is not a valid destination array, for dest="${U}".`,
          );
          return;
        }
        const [t] = d;
        if (t && typeof t == 'object') {
          if (((Z = this.pdfDocument.cachedPageNumber(t)), !Z))
            try {
              Z = (await this.pdfDocument.getPageIndex(t)) + 1;
            } catch {
              console.error(
                `goToDestination: "${t}" is not a valid page reference, for dest="${U}".`,
              );
              return;
            }
        } else Number.isInteger(t) && (Z = t + 1);
        if (!Z || Z < 1 || Z > this.pagesCount) {
          console.error(
            `goToDestination: "${Z}" is not a valid page number, for dest="${U}".`,
          );
          return;
        }
        this.pdfHistory &&
          (this.pdfHistory.pushCurrentPosition(),
          this.pdfHistory.push({
            namedDest: l,
            explicitDest: d,
            pageNumber: Z,
          })),
          this.pdfViewer.scrollPageIntoView({
            pageNumber: Z,
            destArray: d,
            ignoreDestinationZoom: this._ignoreDestinationZoom,
          });
      }
      goToPage(U) {
        if (!this.pdfDocument) return;
        const l =
          (typeof U == 'string' && this.pdfViewer.pageLabelToPageNumber(U)) ||
          U | 0;
        if (!(Number.isInteger(l) && l > 0 && l <= this.pagesCount)) {
          console.error(`PDFLinkService.goToPage: "${U}" is not a valid page.`);
          return;
        }
        this.pdfHistory &&
          (this.pdfHistory.pushCurrentPosition(), this.pdfHistory.pushPage(l)),
          this.pdfViewer.scrollPageIntoView({ pageNumber: l });
      }
      addLinkAttributes(U, l, d = !1) {
        if (!l || typeof l != 'string')
          throw new Error('A valid "url" parameter must provided.');
        const Z = d ? ut.BLANK : this.externalLinkTarget,
          t = this.externalLinkRel;
        this.externalLinkEnabled
          ? (U.href = U.title = l)
          : ((U.href = ''),
            (U.title = `Disabled: ${l}`),
            (U.onclick = () => !1));
        let F = '';
        switch (Z) {
          case ut.NONE:
            break;
          case ut.SELF:
            F = '_self';
            break;
          case ut.BLANK:
            F = '_blank';
            break;
          case ut.PARENT:
            F = '_parent';
            break;
          case ut.TOP:
            F = '_top';
            break;
        }
        (U.target = F), (U.rel = typeof t == 'string' ? t : FT);
      }
      getDestinationHash(U) {
        if (typeof U == 'string') {
          if (U.length > 0) return this.getAnchorUrl('#' + escape(U));
        } else if (Array.isArray(U)) {
          const l = JSON.stringify(U);
          if (l.length > 0) return this.getAnchorUrl('#' + escape(l));
        }
        return this.getAnchorUrl('');
      }
      getAnchorUrl(U) {
        return this.baseUrl ? this.baseUrl + U : U;
      }
      setHash(U) {
        var Z;
        if (!this.pdfDocument) return;
        let l, d;
        if (U.includes('=')) {
          const t = LW(U);
          if (t.has('search')) {
            const F = t.get('search').replaceAll('"', ''),
              c = t.get('phrase') === 'true';
            this.eventBus.dispatch('findfromurlhash', {
              source: this,
              query: c ? F : F.match(/\S+/g),
            });
          }
          if ((t.has('page') && (l = t.get('page') | 0 || 1), t.has('zoom'))) {
            const F = t.get('zoom').split(','),
              c = F[0],
              n = parseFloat(c);
            c.includes('Fit')
              ? c === 'Fit' || c === 'FitB'
                ? (d = [null, { name: c }])
                : c === 'FitH' || c === 'FitBH' || c === 'FitV' || c === 'FitBV'
                  ? (d = [null, { name: c }, F.length > 1 ? F[1] | 0 : null])
                  : c === 'FitR'
                    ? F.length !== 5
                      ? console.error(
                          'PDFLinkService.setHash: Not enough parameters for "FitR".',
                        )
                      : (d = [
                          null,
                          { name: c },
                          F[1] | 0,
                          F[2] | 0,
                          F[3] | 0,
                          F[4] | 0,
                        ])
                    : console.error(
                        `PDFLinkService.setHash: "${c}" is not a valid zoom value.`,
                      )
              : (d = [
                  null,
                  { name: 'XYZ' },
                  F.length > 1 ? F[1] | 0 : null,
                  F.length > 2 ? F[2] | 0 : null,
                  n ? n / 100 : c,
                ]);
          }
          d
            ? this.pdfViewer.scrollPageIntoView({
                pageNumber: l || this.page,
                destArray: d,
                allowNegativeOffset: !0,
              })
            : l && (this.page = l),
            t.has('pagemode') &&
              this.eventBus.dispatch('pagemode', {
                source: this,
                mode: t.get('pagemode'),
              }),
            t.has('nameddest') && this.goToDestination(t.get('nameddest'));
          return;
        }
        d = unescape(U);
        try {
          (d = JSON.parse(d)), Array.isArray(d) || (d = d.toString());
        } catch {}
        if (typeof d == 'string' || b((Z = wi), ri, j2).call(Z, d)) {
          this.goToDestination(d);
          return;
        }
        console.error(
          `PDFLinkService.setHash: "${unescape(U)}" is not a valid destination.`,
        );
      }
      executeNamedAction(U) {
        var l, d;
        if (this.pdfDocument) {
          switch (U) {
            case 'GoBack':
              (l = this.pdfHistory) == null || l.back();
              break;
            case 'GoForward':
              (d = this.pdfHistory) == null || d.forward();
              break;
            case 'NextPage':
              this.pdfViewer.nextPage();
              break;
            case 'PrevPage':
              this.pdfViewer.previousPage();
              break;
            case 'LastPage':
              this.page = this.pagesCount;
              break;
            case 'FirstPage':
              this.page = 1;
              break;
          }
          this.eventBus.dispatch('namedaction', { source: this, action: U });
        }
      }
      async executeSetOCGState(U) {
        if (!this.pdfDocument) return;
        const l = this.pdfDocument,
          d = await this.pdfViewer.optionalContentConfigPromise;
        l === this.pdfDocument &&
          (d.setOCGState(U),
          (this.pdfViewer.optionalContentConfigPromise = Promise.resolve(d)));
      }
    };
  (ri = new WeakSet()),
    (j2 = function (U) {
      if (!Array.isArray(U) || U.length < 2) return !1;
      const [l, d, ...Z] = U;
      if (
        (!(
          typeof l == 'object' &&
          Number.isInteger(l == null ? void 0 : l.num) &&
          Number.isInteger(l == null ? void 0 : l.gen)
        ) &&
          !Number.isInteger(l)) ||
        !(
          typeof d == 'object' &&
          typeof (d == null ? void 0 : d.name) == 'string'
        )
      )
        return !1;
      let t = !0;
      switch (d.name) {
        case 'XYZ':
          if (Z.length !== 3) return !1;
          break;
        case 'Fit':
        case 'FitB':
          return Z.length === 0;
        case 'FitH':
        case 'FitBH':
        case 'FitV':
        case 'FitBV':
          if (Z.length !== 1) return !1;
          break;
        case 'FitR':
          if (Z.length !== 4) return !1;
          t = !1;
          break;
        default:
          return !1;
      }
      for (const F of Z)
        if (!(typeof F == 'number' || (t && F === null))) return !1;
      return !0;
    }),
    R(wi, ri);
  let IW = wi;
  class kN extends IW {
    setDocument(U, l = null) {}
  }
  const {
    AbortException: cT,
    AnnotationEditorLayer: sT,
    AnnotationEditorParamsType: PS,
    AnnotationEditorType: XZ,
    AnnotationEditorUIManager: QT,
    AnnotationLayer: nT,
    AnnotationMode: kd,
    build: fS,
    CMapCompressionType: AS,
    ColorPicker: _S,
    createValidAbsoluteUrl: VT,
    DOMSVGFactory: qS,
    DrawLayer: WT,
    FeatureTest: $S,
    fetchData: oe,
    getDocument: lX,
    getFilenameFromUrl: UX,
    getPdfFilenameFromUrl: aT,
    getXfaPageViewport: dX,
    GlobalWorkerOptions: ZX,
    ImageKind: tX,
    InvalidPDFException: FX,
    isDataScheme: cX,
    isPdfFile: iT,
    MissingPDFException: sX,
    noContextMenu: QX,
    normalizeUnicode: RT,
    OPS: nX,
    Outliner: VX,
    PasswordResponses: WX,
    PDFDataRangeTransport: aX,
    PDFDateString: iX,
    PDFWorker: RX,
    PermissionFlag: EW,
    PixelsPerInch: Dd,
    RenderingCancelledException: DN,
    renderTextLayer: NX,
    setLayerDimensions: NT,
    shadow: CW,
    TextLayer: hT,
    UnexpectedResponseException: hX,
    updateTextLayer: bX,
    Util: eX,
    VerbosityLevel: mX,
    version: Be,
    XfaLayer: IN,
  } = globalThis.pdfjsLib;
  class ye {
    constructor({
      pdfPage: U,
      linkService: l,
      downloadManager: d,
      annotationStorage: Z = null,
      imageResourcesPath: t = '',
      renderForms: F = !0,
      enableScripting: c = !1,
      hasJSActionsPromise: n = null,
      fieldObjectsPromise: V = null,
      annotationCanvasMap: W = null,
      accessibilityManager: a = null,
      annotationEditorUIManager: i = null,
      onAppend: h = null,
    }) {
      R(this, FV);
      R(this, tV, null);
      R(this, tt, null);
      (this.pdfPage = U),
        (this.linkService = l),
        (this.downloadManager = d),
        (this.imageResourcesPath = t),
        (this.renderForms = F),
        (this.annotationStorage = Z),
        (this.enableScripting = c),
        (this._hasJSActionsPromise = n || Promise.resolve(!1)),
        (this._fieldObjectsPromise = V || Promise.resolve(null)),
        (this._annotationCanvasMap = W),
        (this._accessibilityManager = a),
        (this._annotationEditorUIManager = i),
        e(this, tV, h),
        (this.annotationLayer = null),
        (this.div = null),
        (this._cancelled = !1),
        (this._eventBus = l.eventBus);
    }
    async render(U, l = 'display') {
      var c, n;
      if (this.div) {
        if (this._cancelled || !this.annotationLayer) return;
        this.annotationLayer.update({ viewport: U.clone({ dontFlip: !0 }) });
        return;
      }
      const [d, Z, t] = await Promise.all([
        this.pdfPage.getAnnotations({ intent: l }),
        this._hasJSActionsPromise,
        this._fieldObjectsPromise,
      ]);
      if (this._cancelled) return;
      const F = (this.div = document.createElement('div'));
      if (
        ((F.className = 'annotationLayer'),
        (c = s(this, tV)) == null || c.call(this, F),
        d.length === 0)
      ) {
        this.hide();
        return;
      }
      (this.annotationLayer = new nT({
        div: F,
        accessibilityManager: this._accessibilityManager,
        annotationCanvasMap: this._annotationCanvasMap,
        annotationEditorUIManager: this._annotationEditorUIManager,
        page: this.pdfPage,
        viewport: U.clone({ dontFlip: !0 }),
      })),
        await this.annotationLayer.render({
          annotations: d,
          imageResourcesPath: this.imageResourcesPath,
          renderForms: this.renderForms,
          linkService: this.linkService,
          downloadManager: this.downloadManager,
          annotationStorage: this.annotationStorage,
          enableScripting: this.enableScripting,
          hasJSActions: Z,
          fieldObjects: t,
        }),
        this.linkService.isInPresentationMode &&
          b(this, FV, lb).call(this, V0.FULLSCREEN),
        s(this, tt) ||
          (e(this, tt, new AbortController()),
          (n = this._eventBus) == null ||
            n._on(
              'presentationmodechanged',
              (V) => {
                b(this, FV, lb).call(this, V.state);
              },
              { signal: s(this, tt).signal },
            ));
    }
    cancel() {
      var U;
      (this._cancelled = !0),
        (U = s(this, tt)) == null || U.abort(),
        e(this, tt, null);
    }
    hide() {
      this.div && (this.div.hidden = !0);
    }
  }
  (tV = new WeakMap()),
    (tt = new WeakMap()),
    (FV = new WeakSet()),
    (lb = function (U) {
      if (!this.div) return;
      let l = !1;
      switch (U) {
        case V0.FULLSCREEN:
          l = !0;
          break;
        case V0.NORMAL:
          break;
        default:
          return;
      }
      for (const d of this.div.childNodes)
        d.hasAttribute('data-internal-link') || (d.inert = l);
    });
  function Le(Q, U) {
    const l = document.createElement('a');
    if (!l.click)
      throw new Error('DownloadManager: "a.click()" is not supported.');
    (l.href = Q),
      (l.target = '_parent'),
      'download' in l && (l.download = U),
      (document.body || document.documentElement).append(l),
      l.click(),
      l.remove();
  }
  class bT {
    constructor() {
      R(this, fN, new WeakMap());
    }
    downloadData(U, l, d) {
      const Z = URL.createObjectURL(new Blob([U], { type: d }));
      Le(Z, l);
    }
    openOrDownloadData(U, l, d = null) {
      const t = iT(l) ? 'application/pdf' : '';
      return this.downloadData(U, l, t), !1;
    }
    download(U, l, d, Z) {
      let t;
      if (U)
        t = URL.createObjectURL(new Blob([U], { type: 'application/pdf' }));
      else {
        if (!VT(l, 'http://example.com')) {
          console.error(`download - not a valid URL: ${l}`);
          return;
        }
        t = l + '#pdfjs.action=download';
      }
      Le(t, d);
    }
  }
  fN = new WeakMap();
  const ze = { EVENT: 'event', TIMEOUT: 'timeout' };
  async function eT({ target: Q, name: U, delay: l = 0 }) {
    if (
      typeof Q != 'object' ||
      !(U && typeof U == 'string') ||
      !(Number.isInteger(l) && l >= 0)
    )
      throw new Error('waitOnEventOrTimeout - invalid parameters.');
    const { promise: d, resolve: Z } = Promise.withResolvers(),
      t = new AbortController();
    function F(V) {
      t.abort(), clearTimeout(n), Z(V);
    }
    const c = Q instanceof ke ? '_on' : 'addEventListener';
    Q[c](U, F.bind(null, ze.EVENT), { signal: t.signal });
    const n = setTimeout(F.bind(null, ze.TIMEOUT), l);
    return d;
  }
  class ke {
    constructor() {
      R(this, Dc, Object.create(null));
    }
    on(U, l, d = null) {
      this._on(U, l, {
        external: !0,
        once: d == null ? void 0 : d.once,
        signal: d == null ? void 0 : d.signal,
      });
    }
    off(U, l, d = null) {
      this._off(U, l);
    }
    dispatch(U, l) {
      const d = s(this, Dc)[U];
      if (!d || d.length === 0) return;
      let Z;
      for (const { listener: t, external: F, once: c } of d.slice(0)) {
        if ((c && this._off(U, t), F)) {
          (Z || (Z = [])).push(t);
          continue;
        }
        t(l);
      }
      if (Z) {
        for (const t of Z) t(l);
        Z = null;
      }
    }
    _on(U, l, d = null) {
      var F;
      let Z = null;
      if ((d == null ? void 0 : d.signal) instanceof AbortSignal) {
        const { signal: c } = d;
        if (c.aborted) {
          console.error('Cannot use an `aborted` signal.');
          return;
        }
        const n = () => this._off(U, l);
        (Z = () => c.removeEventListener('abort', n)),
          c.addEventListener('abort', n);
      }
      ((F = s(this, Dc))[U] || (F[U] = [])).push({
        listener: l,
        external: (d == null ? void 0 : d.external) === !0,
        once: (d == null ? void 0 : d.once) === !0,
        rmAbort: Z,
      });
    }
    _off(U, l, d = null) {
      var t;
      const Z = s(this, Dc)[U];
      if (Z)
        for (let F = 0, c = Z.length; F < c; F++) {
          const n = Z[F];
          if (n.listener === l) {
            (t = n.rmAbort) == null || t.call(n), Z.splice(F, 1);
            return;
          }
        }
    }
  }
  Dc = new WeakMap();
  class rW {
    constructor(U) {
      this.value = U;
    }
    valueOf() {
      return this.value;
    }
  }
  class ul extends rW {
    constructor(U = '???') {
      super(U);
    }
    toString(U) {
      return `{${this.value}}`;
    }
  }
  class Id extends rW {
    constructor(U, l = {}) {
      super(U), (this.opts = l);
    }
    toString(U) {
      try {
        return U.memoizeIntlObject(Intl.NumberFormat, this.opts).format(
          this.value,
        );
      } catch (l) {
        return U.reportError(l), this.value.toString(10);
      }
    }
  }
  class Ss extends rW {
    constructor(U, l = {}) {
      super(U), (this.opts = l);
    }
    toString(U) {
      try {
        return U.memoizeIntlObject(Intl.DateTimeFormat, this.opts).format(
          this.value,
        );
      } catch (l) {
        return U.reportError(l), new Date(this.value).toISOString();
      }
    }
  }
  const De = 100,
    mT = '⁨',
    MT = '⁩';
  function JT(Q, U, l) {
    if (l === U || (l instanceof Id && U instanceof Id && l.value === U.value))
      return !0;
    if (U instanceof Id && typeof l == 'string') {
      let d = Q.memoizeIntlObject(Intl.PluralRules, U.opts).select(U.value);
      if (l === d) return !0;
    }
    return !1;
  }
  function Ie(Q, U, l) {
    return U[l]
      ? W0(Q, U[l].value)
      : (Q.reportError(new RangeError('No default')), new ul());
  }
  function EN(Q, U) {
    const l = [],
      d = Object.create(null);
    for (const Z of U)
      Z.type === 'narg' ? (d[Z.name] = Xs(Q, Z.value)) : l.push(Xs(Q, Z));
    return { positional: l, named: d };
  }
  function Xs(Q, U) {
    switch (U.type) {
      case 'str':
        return U.value;
      case 'num':
        return new Id(U.value, { minimumFractionDigits: U.precision });
      case 'var':
        return GT(Q, U);
      case 'mesg':
        return TT(Q, U);
      case 'term':
        return ST(Q, U);
      case 'func':
        return XT(Q, U);
      case 'select':
        return YT(Q, U);
      default:
        return new ul();
    }
  }
  function GT(Q, { name: U }) {
    let l;
    if (Q.params)
      if (Object.prototype.hasOwnProperty.call(Q.params, U)) l = Q.params[U];
      else return new ul(`$${U}`);
    else if (Q.args && Object.prototype.hasOwnProperty.call(Q.args, U))
      l = Q.args[U];
    else
      return (
        Q.reportError(new ReferenceError(`Unknown variable: $${U}`)),
        new ul(`$${U}`)
      );
    if (l instanceof rW) return l;
    switch (typeof l) {
      case 'string':
        return l;
      case 'number':
        return new Id(l);
      case 'object':
        if (l instanceof Date) return new Ss(l.getTime());
      default:
        return (
          Q.reportError(
            new TypeError(`Variable type not supported: $${U}, ${typeof l}`),
          ),
          new ul(`$${U}`)
        );
    }
  }
  function TT(Q, { name: U, attr: l }) {
    const d = Q.bundle._messages.get(U);
    if (!d)
      return (
        Q.reportError(new ReferenceError(`Unknown message: ${U}`)), new ul(U)
      );
    if (l) {
      const Z = d.attributes[l];
      return Z
        ? W0(Q, Z)
        : (Q.reportError(new ReferenceError(`Unknown attribute: ${l}`)),
          new ul(`${U}.${l}`));
    }
    return d.value
      ? W0(Q, d.value)
      : (Q.reportError(new ReferenceError(`No value: ${U}`)), new ul(U));
  }
  function ST(Q, { name: U, attr: l, args: d }) {
    const Z = `-${U}`,
      t = Q.bundle._terms.get(Z);
    if (!t)
      return Q.reportError(new ReferenceError(`Unknown term: ${Z}`)), new ul(Z);
    if (l) {
      const c = t.attributes[l];
      if (c) {
        Q.params = EN(Q, d).named;
        const n = W0(Q, c);
        return (Q.params = null), n;
      }
      return (
        Q.reportError(new ReferenceError(`Unknown attribute: ${l}`)),
        new ul(`${Z}.${l}`)
      );
    }
    Q.params = EN(Q, d).named;
    const F = W0(Q, t.value);
    return (Q.params = null), F;
  }
  function XT(Q, { name: U, args: l }) {
    let d = Q.bundle._functions[U];
    if (!d)
      return (
        Q.reportError(new ReferenceError(`Unknown function: ${U}()`)),
        new ul(`${U}()`)
      );
    if (typeof d != 'function')
      return (
        Q.reportError(new TypeError(`Function ${U}() is not callable`)),
        new ul(`${U}()`)
      );
    try {
      let Z = EN(Q, l);
      return d(Z.positional, Z.named);
    } catch (Z) {
      return Q.reportError(Z), new ul(`${U}()`);
    }
  }
  function YT(Q, { selector: U, variants: l, star: d }) {
    let Z = Xs(Q, U);
    if (Z instanceof ul) return Ie(Q, l, d);
    for (const t of l) {
      const F = Xs(Q, t.key);
      if (JT(Q, Z, F)) return W0(Q, t.value);
    }
    return Ie(Q, l, d);
  }
  function Ee(Q, U) {
    if (Q.dirty.has(U))
      return Q.reportError(new RangeError('Cyclic reference')), new ul();
    Q.dirty.add(U);
    const l = [],
      d = Q.bundle._useIsolating && U.length > 1;
    for (const Z of U) {
      if (typeof Z == 'string') {
        l.push(Q.bundle._transform(Z));
        continue;
      }
      if ((Q.placeables++, Q.placeables > De))
        throw (
          (Q.dirty.delete(U),
          new RangeError(
            `Too many placeables expanded: ${Q.placeables}, max allowed is ${De}`,
          ))
        );
      d && l.push(mT), l.push(Xs(Q, Z).toString(Q)), d && l.push(MT);
    }
    return Q.dirty.delete(U), l.join('');
  }
  function W0(Q, U) {
    return typeof U == 'string' ? Q.bundle._transform(U) : Ee(Q, U);
  }
  class uT {
    constructor(U, l, d) {
      (this.dirty = new WeakSet()),
        (this.params = null),
        (this.placeables = 0),
        (this.bundle = U),
        (this.errors = l),
        (this.args = d);
    }
    reportError(U) {
      if (!this.errors || !(U instanceof Error)) throw U;
      this.errors.push(U);
    }
    memoizeIntlObject(U, l) {
      let d = this.bundle._intls.get(U);
      d || ((d = {}), this.bundle._intls.set(U, d));
      let Z = JSON.stringify(l);
      return d[Z] || (d[Z] = new U(this.bundle.locales, l)), d[Z];
    }
  }
  function wW(Q, U) {
    const l = Object.create(null);
    for (const [d, Z] of Object.entries(Q))
      U.includes(d) && (l[d] = Z.valueOf());
    return l;
  }
  const Ce = [
    'unitDisplay',
    'currencyDisplay',
    'useGrouping',
    'minimumIntegerDigits',
    'minimumFractionDigits',
    'maximumFractionDigits',
    'minimumSignificantDigits',
    'maximumSignificantDigits',
  ];
  function pT(Q, U) {
    let l = Q[0];
    if (l instanceof ul) return new ul(`NUMBER(${l.valueOf()})`);
    if (l instanceof Id)
      return new Id(l.valueOf(), { ...l.opts, ...wW(U, Ce) });
    if (l instanceof Ss) return new Id(l.valueOf(), { ...wW(U, Ce) });
    throw new TypeError('Invalid argument to NUMBER');
  }
  const re = [
    'dateStyle',
    'timeStyle',
    'fractionalSecondDigits',
    'dayPeriod',
    'hour12',
    'weekday',
    'era',
    'year',
    'month',
    'day',
    'hour',
    'minute',
    'second',
    'timeZoneName',
  ];
  function oT(Q, U) {
    let l = Q[0];
    if (l instanceof ul) return new ul(`DATETIME(${l.valueOf()})`);
    if (l instanceof Ss)
      return new Ss(l.valueOf(), { ...l.opts, ...wW(U, re) });
    if (l instanceof Id) return new Ss(l.valueOf(), { ...wW(U, re) });
    throw new TypeError('Invalid argument to DATETIME');
  }
  const we = new Map();
  function BT(Q) {
    const U = Array.isArray(Q) ? Q.join(' ') : Q;
    let l = we.get(U);
    return l === void 0 && ((l = new Map()), we.set(U, l)), l;
  }
  class yT {
    constructor(
      U,
      { functions: l, useIsolating: d = !0, transform: Z = (t) => t } = {},
    ) {
      (this._terms = new Map()),
        (this._messages = new Map()),
        (this.locales = Array.isArray(U) ? U : [U]),
        (this._functions = { NUMBER: pT, DATETIME: oT, ...l }),
        (this._useIsolating = d),
        (this._transform = Z),
        (this._intls = BT(U));
    }
    hasMessage(U) {
      return this._messages.has(U);
    }
    getMessage(U) {
      return this._messages.get(U);
    }
    addResource(U, { allowOverrides: l = !1 } = {}) {
      const d = [];
      for (let Z = 0; Z < U.body.length; Z++) {
        let t = U.body[Z];
        if (t.id.startsWith('-')) {
          if (l === !1 && this._terms.has(t.id)) {
            d.push(
              new Error(`Attempt to override an existing term: "${t.id}"`),
            );
            continue;
          }
          this._terms.set(t.id, t);
        } else {
          if (l === !1 && this._messages.has(t.id)) {
            d.push(
              new Error(`Attempt to override an existing message: "${t.id}"`),
            );
            continue;
          }
          this._messages.set(t.id, t);
        }
      }
      return d;
    }
    formatPattern(U, l = null, d = null) {
      if (typeof U == 'string') return this._transform(U);
      let Z = new uT(this, d, l);
      try {
        return Ee(Z, U).toString(Z);
      } catch (t) {
        if (Z.errors && t instanceof Error)
          return Z.errors.push(t), new ul().toString(Z);
        throw t;
      }
    }
  }
  const CN = /^(-?[a-zA-Z][\w-]*) *= */gm,
    xe = /\.([a-zA-Z][\w-]*) *= */y,
    LT = /\*?\[/y,
    rN = /(-?[0-9]+(?:\.([0-9]+))?)/y,
    zT = /([a-zA-Z][\w-]*)/y,
    je = /([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,
    kT = /^[A-Z][A-Z0-9_-]*$/,
    xW = /([^{}\n\r]+)/y,
    DT = /([^\\"\n\r]*)/y,
    Oe = /\\([\\"])/y,
    ge = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,
    IT = /^\n+/,
    Ke = / +$/,
    ET = / *\r?\n/g,
    CT = /( *)$/,
    rT = /{\s*/y,
    ve = /\s*}/y,
    wT = /\[\s*/y,
    xT = /\s*] */y,
    jT = /\s*\(\s*/y,
    OT = /\s*->\s*/y,
    gT = /\s*:\s*/y,
    KT = /\s*,?\s*/y,
    vT = /\s+/y;
  class HT {
    constructor(U) {
      (this.body = []), (CN.lastIndex = 0);
      let l = 0;
      for (;;) {
        let Y = CN.exec(U);
        if (Y === null) break;
        l = CN.lastIndex;
        try {
          this.body.push(n(Y[1]));
        } catch (o) {
          if (o instanceof SyntaxError) continue;
          throw o;
        }
      }
      function d(Y) {
        return (Y.lastIndex = l), Y.test(U);
      }
      function Z(Y, o) {
        if (U[l] === Y) return l++, !0;
        if (o) throw new o(`Expected ${Y}`);
        return !1;
      }
      function t(Y, o) {
        if (d(Y)) return (l = Y.lastIndex), !0;
        if (o) throw new o(`Expected ${Y.toString()}`);
        return !1;
      }
      function F(Y) {
        Y.lastIndex = l;
        let o = Y.exec(U);
        if (o === null) throw new SyntaxError(`Expected ${Y.toString()}`);
        return (l = Y.lastIndex), o;
      }
      function c(Y) {
        return F(Y)[1];
      }
      function n(Y) {
        let o = W(),
          y = V();
        if (o === null && Object.keys(y).length === 0)
          throw new SyntaxError('Expected message value or attributes');
        return { id: Y, value: o, attributes: y };
      }
      function V() {
        let Y = Object.create(null);
        for (; d(xe); ) {
          let o = c(xe),
            y = W();
          if (y === null) throw new SyntaxError('Expected attribute value');
          Y[o] = y;
        }
        return Y;
      }
      function W() {
        let Y;
        if ((d(xW) && (Y = c(xW)), U[l] === '{' || U[l] === '}'))
          return a(Y ? [Y] : [], 1 / 0);
        let o = S();
        return o
          ? Y
            ? a([Y, o], o.length)
            : ((o.value = p(o.value, IT)), a([o], o.length))
          : Y
            ? p(Y, Ke)
            : null;
      }
      function a(Y = [], o) {
        for (;;) {
          if (d(xW)) {
            Y.push(c(xW));
            continue;
          }
          if (U[l] === '{') {
            Y.push(i());
            continue;
          }
          if (U[l] === '}') throw new SyntaxError('Unbalanced closing brace');
          let O = S();
          if (O) {
            Y.push(O), (o = Math.min(o, O.length));
            continue;
          }
          break;
        }
        let y = Y.length - 1,
          D = Y[y];
        typeof D == 'string' && (Y[y] = p(D, Ke));
        let I = [];
        for (let O of Y)
          O instanceof He && (O = O.value.slice(0, O.value.length - o)),
            O && I.push(O);
        return I;
      }
      function i() {
        t(rT, SyntaxError);
        let Y = h();
        if (t(ve)) return Y;
        if (t(OT)) {
          let o = J();
          return t(ve, SyntaxError), { type: 'select', selector: Y, ...o };
        }
        throw new SyntaxError('Unclosed placeable');
      }
      function h() {
        if (U[l] === '{') return i();
        if (d(je)) {
          let [, Y, o, y = null] = F(je);
          if (Y === '$') return { type: 'var', name: o };
          if (t(jT)) {
            let D = N();
            if (Y === '-') return { type: 'term', name: o, attr: y, args: D };
            if (kT.test(o)) return { type: 'func', name: o, args: D };
            throw new SyntaxError('Function names must be all upper-case');
          }
          return Y === '-'
            ? { type: 'term', name: o, attr: y, args: [] }
            : { type: 'mesg', name: o, attr: y };
        }
        return G();
      }
      function N() {
        let Y = [];
        for (;;) {
          switch (U[l]) {
            case ')':
              return l++, Y;
            case void 0:
              throw new SyntaxError('Unclosed argument list');
          }
          Y.push(M()), t(KT);
        }
      }
      function M() {
        let Y = h();
        return Y.type !== 'mesg'
          ? Y
          : t(gT)
            ? { type: 'narg', name: Y.name, value: G() }
            : Y;
      }
      function J() {
        let Y = [],
          o = 0,
          y;
        for (; d(LT); ) {
          Z('*') && (y = o);
          let D = m(),
            I = W();
          if (I === null) throw new SyntaxError('Expected variant value');
          Y[o++] = { key: D, value: I };
        }
        if (o === 0) return null;
        if (y === void 0) throw new SyntaxError('Expected default variant');
        return { variants: Y, star: y };
      }
      function m() {
        t(wT, SyntaxError);
        let Y;
        return (
          d(rN) ? (Y = T()) : (Y = { type: 'str', value: c(zT) }),
          t(xT, SyntaxError),
          Y
        );
      }
      function G() {
        if (d(rN)) return T();
        if (U[l] === '"') return u();
        throw new SyntaxError('Invalid expression');
      }
      function T() {
        let [, Y, o = ''] = F(rN),
          y = o.length;
        return { type: 'num', value: parseFloat(Y), precision: y };
      }
      function u() {
        Z('"', SyntaxError);
        let Y = '';
        for (;;) {
          if (((Y += c(DT)), U[l] === '\\')) {
            Y += X();
            continue;
          }
          if (Z('"')) return { type: 'str', value: Y };
          throw new SyntaxError('Unclosed string literal');
        }
      }
      function X() {
        if (d(Oe)) return c(Oe);
        if (d(ge)) {
          let [, Y, o] = F(ge),
            y = parseInt(Y || o, 16);
          return y <= 55295 || 57344 <= y ? String.fromCodePoint(y) : '�';
        }
        throw new SyntaxError('Unknown escape sequence');
      }
      function S() {
        let Y = l;
        switch ((t(vT), U[l])) {
          case '.':
          case '[':
          case '*':
          case '}':
          case void 0:
            return !1;
          case '{':
            return L(U.slice(Y, l));
        }
        return U[l - 1] === ' ' ? L(U.slice(Y, l)) : !1;
      }
      function p(Y, o) {
        return Y.replace(o, '');
      }
      function L(Y) {
        let o = Y.replace(
            ET,
            `
`,
          ),
          y = CT.exec(Y)[1].length;
        return new He(o, y);
      }
    }
  }
  class He {
    constructor(U, l) {
      (this.value = U), (this.length = l);
    }
  }
  const PT = /<|&#?\w+;/,
    fT = {
      'http://www.w3.org/1999/xhtml': [
        'em',
        'strong',
        'small',
        's',
        'cite',
        'q',
        'dfn',
        'abbr',
        'data',
        'time',
        'code',
        'var',
        'samp',
        'kbd',
        'sub',
        'sup',
        'i',
        'b',
        'u',
        'mark',
        'bdi',
        'bdo',
        'span',
        'br',
        'wbr',
      ],
    },
    AT = {
      'http://www.w3.org/1999/xhtml': {
        global: ['title', 'aria-label', 'aria-valuetext'],
        a: ['download'],
        area: ['download', 'alt'],
        input: ['alt', 'placeholder'],
        menuitem: ['label'],
        menu: ['label'],
        optgroup: ['label'],
        option: ['label'],
        track: ['label'],
        img: ['alt'],
        textarea: ['placeholder'],
        th: ['abbr'],
      },
      'http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul': {
        global: [
          'accesskey',
          'aria-label',
          'aria-valuetext',
          'label',
          'title',
          'tooltiptext',
        ],
        description: ['value'],
        key: ['key', 'keycode'],
        label: ['value'],
        textbox: ['placeholder', 'value'],
      },
    };
  function _T(Q, U) {
    const { value: l } = U;
    if (typeof l == 'string')
      if (
        Q.localName === 'title' &&
        Q.namespaceURI === 'http://www.w3.org/1999/xhtml'
      )
        Q.textContent = l;
      else if (!PT.test(l)) Q.textContent = l;
      else {
        const d = Q.ownerDocument.createElementNS(
          'http://www.w3.org/1999/xhtml',
          'template',
        );
        (d.innerHTML = l), qT(d.content, Q);
      }
    Pe(U, Q);
  }
  function qT(Q, U) {
    for (const l of Q.childNodes)
      if (l.nodeType !== l.TEXT_NODE) {
        if (l.hasAttribute('data-l10n-name')) {
          const d = lS(U, l);
          Q.replaceChild(d, l);
          continue;
        }
        if (dS(l)) {
          const d = US(l);
          Q.replaceChild(d, l);
          continue;
        }
        console.warn(
          `An element of forbidden type "${l.localName}" was found in the translation. Only safe text-level elements and elements with data-l10n-name are allowed.`,
        ),
          Q.replaceChild(wN(l), l);
      }
    (U.textContent = ''), U.appendChild(Q);
  }
  function $T(Q, U) {
    if (!Q) return !1;
    for (let l of Q) if (l.name === U) return !0;
    return !1;
  }
  function Pe(Q, U) {
    const l = U.hasAttribute('data-l10n-attrs')
      ? U.getAttribute('data-l10n-attrs')
          .split(',')
          .map((d) => d.trim())
      : null;
    for (const d of Array.from(U.attributes))
      fe(d.name, U, l) &&
        !$T(Q.attributes, d.name) &&
        U.removeAttribute(d.name);
    if (Q.attributes)
      for (const d of Array.from(Q.attributes))
        fe(d.name, U, l) &&
          U.getAttribute(d.name) !== d.value &&
          U.setAttribute(d.name, d.value);
  }
  function lS(Q, U) {
    const l = U.getAttribute('data-l10n-name'),
      d = Q.querySelector(`[data-l10n-name="${l}"]`);
    if (!d)
      return (
        console.warn(`An element named "${l}" wasn't found in the source.`),
        wN(U)
      );
    if (d.localName !== U.localName)
      return (
        console.warn(
          `An element named "${l}" was found in the translation but its type ${U.localName} didn't match the element found in the source (${d.localName}).`,
        ),
        wN(U)
      );
    Q.removeChild(d);
    const Z = d.cloneNode(!1);
    return Ae(U, Z);
  }
  function US(Q) {
    const U = Q.ownerDocument.createElement(Q.localName);
    return Ae(Q, U);
  }
  function wN(Q) {
    return Q.ownerDocument.createTextNode(Q.textContent);
  }
  function dS(Q) {
    const U = fT[Q.namespaceURI];
    return U && U.includes(Q.localName);
  }
  function fe(Q, U, l = null) {
    if (l && l.includes(Q)) return !0;
    const d = AT[U.namespaceURI];
    if (!d) return !1;
    const Z = Q.toLowerCase(),
      t = U.localName;
    if (d.global.includes(Z)) return !0;
    if (!d[t]) return !1;
    if (d[t].includes(Z)) return !0;
    if (
      U.namespaceURI === 'http://www.w3.org/1999/xhtml' &&
      t === 'input' &&
      Z === 'value'
    ) {
      const F = U.type.toLowerCase();
      if (F === 'submit' || F === 'button' || F === 'reset') return !0;
    }
    return !1;
  }
  function Ae(Q, U) {
    return (U.textContent = Q.textContent), Pe(Q, U), U;
  }
  class ZS extends Array {
    static from(U) {
      return U instanceof this ? U : new this(U);
    }
  }
  class tS extends ZS {
    constructor(U) {
      if ((super(), Symbol.asyncIterator in Object(U)))
        this.iterator = U[Symbol.asyncIterator]();
      else if (Symbol.iterator in Object(U))
        this.iterator = U[Symbol.iterator]();
      else
        throw new TypeError('Argument must implement the iteration protocol.');
    }
    [Symbol.asyncIterator]() {
      const U = this;
      let l = 0;
      return {
        async next() {
          return U.length <= l && U.push(U.iterator.next()), U[l++];
        },
      };
    }
    async touchNext(U = 1) {
      let l = 0;
      for (; l++ < U; ) {
        const d = this[this.length - 1];
        if (d && (await d).done) break;
        this.push(this.iterator.next());
      }
      return this[this.length - 1];
    }
  }
  class FS {
    constructor(U = [], l) {
      (this.resourceIds = U), (this.generateBundles = l), this.onChange(!0);
    }
    addResourceIds(U, l = !1) {
      return (
        this.resourceIds.push(...U), this.onChange(l), this.resourceIds.length
      );
    }
    removeResourceIds(U) {
      return (
        (this.resourceIds = this.resourceIds.filter((l) => !U.includes(l))),
        this.onChange(),
        this.resourceIds.length
      );
    }
    async formatWithFallback(U, l) {
      const d = [];
      let Z = !1;
      for await (const t of this.bundles) {
        Z = !0;
        const F = QS(l, t, U, d);
        if (F.size === 0) break;
        if (typeof console < 'u') {
          const c = t.locales[0],
            n = Array.from(F).join(', ');
          console.warn(`[fluent] Missing translations in ${c}: ${n}`);
        }
      }
      return (
        !Z &&
          typeof console < 'u' &&
          console.warn(`[fluent] Request for keys failed because no resource bundles got generated.
  keys: ${JSON.stringify(U)}.
  resourceIds: ${JSON.stringify(this.resourceIds)}.`),
        d
      );
    }
    formatMessages(U) {
      return this.formatWithFallback(U, sS);
    }
    formatValues(U) {
      return this.formatWithFallback(U, cS);
    }
    async formatValue(U, l) {
      const [d] = await this.formatValues([{ id: U, args: l }]);
      return d;
    }
    handleEvent() {
      this.onChange();
    }
    onChange(U = !1) {
      (this.bundles = tS.from(this.generateBundles(this.resourceIds))),
        U && this.bundles.touchNext(2);
    }
  }
  function cS(Q, U, l, d) {
    return l.value ? Q.formatPattern(l.value, d, U) : null;
  }
  function sS(Q, U, l, d) {
    const Z = { value: null, attributes: null };
    l.value && (Z.value = Q.formatPattern(l.value, d, U));
    let t = Object.keys(l.attributes);
    if (t.length > 0) {
      Z.attributes = new Array(t.length);
      for (let [F, c] of t.entries()) {
        let n = Q.formatPattern(l.attributes[c], d, U);
        Z.attributes[F] = { name: c, value: n };
      }
    }
    return Z;
  }
  function QS(Q, U, l, d) {
    const Z = [],
      t = new Set();
    return (
      l.forEach(({ id: F, args: c }, n) => {
        if (d[n] !== void 0) return;
        let V = U.getMessage(F);
        if (V) {
          if (
            ((Z.length = 0),
            (d[n] = Q(U, Z, V, c)),
            Z.length > 0 && typeof console < 'u')
          ) {
            const W = U.locales[0],
              a = Z.join(', ');
            console.warn(`[fluent][resolver] errors in ${W}/${F}: ${a}.`);
          }
        } else t.add(F);
      }),
      t
    );
  }
  const pt = 'data-l10n-id',
    Ys = 'data-l10n-args',
    nS = `[${pt}]`;
  class VS extends FS {
    constructor(U, l) {
      super(U, l),
        (this.roots = new Set()),
        (this.pendingrAF = null),
        (this.pendingElements = new Set()),
        (this.windowElement = null),
        (this.mutationObserver = null),
        (this.observerConfig = {
          attributes: !0,
          characterData: !1,
          childList: !0,
          subtree: !0,
          attributeFilter: [pt, Ys],
        });
    }
    onChange(U = !1) {
      super.onChange(U), this.roots && this.translateRoots();
    }
    setAttributes(U, l, d) {
      return (
        U.setAttribute(pt, l),
        d ? U.setAttribute(Ys, JSON.stringify(d)) : U.removeAttribute(Ys),
        U
      );
    }
    getAttributes(U) {
      return {
        id: U.getAttribute(pt),
        args: JSON.parse(U.getAttribute(Ys) || null),
      };
    }
    connectRoot(U) {
      for (const l of this.roots)
        if (l === U || l.contains(U) || U.contains(l))
          throw new Error(
            'Cannot add a root that overlaps with existing root.',
          );
      if (this.windowElement) {
        if (this.windowElement !== U.ownerDocument.defaultView)
          throw new Error(`Cannot connect a root:
          DOMLocalization already has a root from a different window.`);
      } else
        (this.windowElement = U.ownerDocument.defaultView),
          (this.mutationObserver = new this.windowElement.MutationObserver(
            (l) => this.translateMutations(l),
          ));
      this.roots.add(U), this.mutationObserver.observe(U, this.observerConfig);
    }
    disconnectRoot(U) {
      return (
        this.roots.delete(U),
        this.pauseObserving(),
        this.roots.size === 0
          ? ((this.mutationObserver = null),
            this.windowElement &&
              this.pendingrAF &&
              this.windowElement.cancelAnimationFrame(this.pendingrAF),
            (this.windowElement = null),
            (this.pendingrAF = null),
            this.pendingElements.clear(),
            !0)
          : (this.resumeObserving(), !1)
      );
    }
    translateRoots() {
      const U = Array.from(this.roots);
      return Promise.all(U.map((l) => this.translateFragment(l)));
    }
    pauseObserving() {
      this.mutationObserver &&
        (this.translateMutations(this.mutationObserver.takeRecords()),
        this.mutationObserver.disconnect());
    }
    resumeObserving() {
      if (this.mutationObserver)
        for (const U of this.roots)
          this.mutationObserver.observe(U, this.observerConfig);
    }
    translateMutations(U) {
      for (const l of U)
        switch (l.type) {
          case 'attributes':
            l.target.hasAttribute('data-l10n-id') &&
              this.pendingElements.add(l.target);
            break;
          case 'childList':
            for (const d of l.addedNodes)
              if (d.nodeType === d.ELEMENT_NODE)
                if (d.childElementCount)
                  for (const Z of this.getTranslatables(d))
                    this.pendingElements.add(Z);
                else d.hasAttribute(pt) && this.pendingElements.add(d);
            break;
        }
      this.pendingElements.size > 0 &&
        this.pendingrAF === null &&
        (this.pendingrAF = this.windowElement.requestAnimationFrame(() => {
          this.translateElements(Array.from(this.pendingElements)),
            this.pendingElements.clear(),
            (this.pendingrAF = null);
        }));
    }
    translateFragment(U) {
      return this.translateElements(this.getTranslatables(U));
    }
    async translateElements(U) {
      if (!U.length) return;
      const l = U.map(this.getKeysForElement),
        d = await this.formatMessages(l);
      return this.applyTranslations(U, d);
    }
    applyTranslations(U, l) {
      this.pauseObserving();
      for (let d = 0; d < U.length; d++) l[d] !== void 0 && _T(U[d], l[d]);
      this.resumeObserving();
    }
    getTranslatables(U) {
      const l = Array.from(U.querySelectorAll(nS));
      return (
        typeof U.hasAttribute == 'function' && U.hasAttribute(pt) && l.push(U),
        l
      );
    }
    getKeysForElement(U) {
      return {
        id: U.getAttribute(pt),
        args: JSON.parse(U.getAttribute(Ys) || null),
      };
    }
  }
  const Cc = class Cc {
    constructor({ lang: U, isRTL: l }, d = null) {
      R(this, cV, void 0);
      R(this, Ic, new Set());
      R(this, Ec, void 0);
      R(this, uU, void 0);
      var Z, t;
      e(this, Ec, b((Z = Cc), xi, O2).call(Z, U)),
        e(this, uU, d),
        e(
          this,
          cV,
          (l ?? b((t = Cc), ji, g2).call(t, s(this, Ec))) ? 'rtl' : 'ltr',
        );
    }
    _setL10n(U) {
      e(this, uU, U);
    }
    getLanguage() {
      return s(this, Ec);
    }
    getDirection() {
      return s(this, cV);
    }
    async get(U, l = null, d) {
      if (Array.isArray(U))
        return (
          (U = U.map((F) => ({ id: F }))),
          (await s(this, uU).formatMessages(U)).map((F) => F.value)
        );
      const Z = await s(this, uU).formatMessages([{ id: U, args: l }]);
      return (Z == null ? void 0 : Z[0].value) || d;
    }
    async translate(U) {
      s(this, Ic).add(U);
      try {
        s(this, uU).connectRoot(U), await s(this, uU).translateRoots();
      } catch {}
    }
    async destroy() {
      for (const U of s(this, Ic)) s(this, uU).disconnectRoot(U);
      s(this, Ic).clear(), s(this, uU).pauseObserving();
    }
    pause() {
      s(this, uU).pauseObserving();
    }
    resume() {
      s(this, uU).resumeObserving();
    }
  };
  (cV = new WeakMap()),
    (Ic = new WeakMap()),
    (Ec = new WeakMap()),
    (uU = new WeakMap()),
    (xi = new WeakSet()),
    (O2 = function (U) {
      return (
        (U = (U == null ? void 0 : U.toLowerCase()) || 'en-us'),
        {
          en: 'en-us',
          es: 'es-es',
          fy: 'fy-nl',
          ga: 'ga-ie',
          gu: 'gu-in',
          hi: 'hi-in',
          hy: 'hy-am',
          nb: 'nb-no',
          ne: 'ne-np',
          nn: 'nn-no',
          pa: 'pa-in',
          pt: 'pt-pt',
          sv: 'sv-se',
          zh: 'zh-cn',
        }[U] || U
      );
    }),
    (ji = new WeakSet()),
    (g2 = function (U) {
      const l = U.split('-', 1)[0];
      return ['ar', 'he', 'fa', 'ps', 'ur'].includes(l);
    }),
    R(Cc, xi),
    R(Cc, ji);
  let xN = Cc;
  function _e(Q, U) {
    const l = new HT(U),
      d = new yT(Q),
      Z = d.addResource(l);
    return Z.length && console.error('L10n errors', Z), d;
  }
  const Ud = class Ud extends xN {
    constructor(U) {
      super({ lang: U });
      const l = U
        ? b(Ud, Oi, K2).bind(Ud, 'en-us', this.getLanguage())
        : b(Ud, vi, P2).bind(Ud, this.getLanguage());
      this._setL10n(new VS([], l));
    }
  };
  (Oi = new WeakSet()),
    (K2 = async function* (U, l) {
      const { baseURL: d, paths: Z } = await b(this, Ki, H2).call(this),
        t = [l];
      if (U !== l) {
        const F = l.split('-', 1)[0];
        F !== l && t.push(F), t.push(U);
      }
      for (const F of t) {
        const c = await b(this, gi, v2).call(this, F, d, Z);
        c ? yield c : F === 'en-us' && (yield b(this, sV, Ub).call(this, F));
      }
    }),
    (gi = new WeakSet()),
    (v2 = async function (U, l, d) {
      const Z = d[U];
      if (!Z) return null;
      const t = new URL(Z, l),
        F = await oe(t, 'text');
      return _e(U, F);
    }),
    (Ki = new WeakSet()),
    (H2 = async function () {
      try {
        const { href: U } = document.querySelector(
            'link[type="application/l10n"]',
          ),
          l = await oe(U, 'json');
        return { baseURL: U.replace(/[^/]*$/, '') || './', paths: l };
      } catch {}
      return { baseURL: './', paths: Object.create(null) };
    }),
    (vi = new WeakSet()),
    (P2 = async function* (U) {
      yield b(this, sV, Ub).call(this, U);
    }),
    (sV = new WeakSet()),
    (Ub = async function (U) {
      return _e(
        U,
        `pdfjs-previous-button =
    .title = Previous Page
pdfjs-previous-button-label = Previous
pdfjs-next-button =
    .title = Next Page
pdfjs-next-button-label = Next
pdfjs-page-input =
    .title = Page
pdfjs-of-pages = of { $pagesCount }
pdfjs-page-of-pages = ({ $pageNumber } of { $pagesCount })
pdfjs-zoom-out-button =
    .title = Zoom Out
pdfjs-zoom-out-button-label = Zoom Out
pdfjs-zoom-in-button =
    .title = Zoom In
pdfjs-zoom-in-button-label = Zoom In
pdfjs-zoom-select =
    .title = Zoom
pdfjs-presentation-mode-button =
    .title = Switch to Presentation Mode
pdfjs-presentation-mode-button-label = Presentation Mode
pdfjs-open-file-button =
    .title = Open File
pdfjs-open-file-button-label = Open
pdfjs-print-button =
    .title = Print
pdfjs-print-button-label = Print
pdfjs-save-button =
    .title = Save
pdfjs-save-button-label = Save
pdfjs-download-button =
    .title = Download
pdfjs-download-button-label = Download
pdfjs-bookmark-button =
    .title = Current Page (View URL from Current Page)
pdfjs-bookmark-button-label = Current Page
pdfjs-tools-button =
    .title = Tools
pdfjs-tools-button-label = Tools
pdfjs-first-page-button =
    .title = Go to First Page
pdfjs-first-page-button-label = Go to First Page
pdfjs-last-page-button =
    .title = Go to Last Page
pdfjs-last-page-button-label = Go to Last Page
pdfjs-page-rotate-cw-button =
    .title = Rotate Clockwise
pdfjs-page-rotate-cw-button-label = Rotate Clockwise
pdfjs-page-rotate-ccw-button =
    .title = Rotate Counterclockwise
pdfjs-page-rotate-ccw-button-label = Rotate Counterclockwise
pdfjs-cursor-text-select-tool-button =
    .title = Enable Text Selection Tool
pdfjs-cursor-text-select-tool-button-label = Text Selection Tool
pdfjs-cursor-hand-tool-button =
    .title = Enable Hand Tool
pdfjs-cursor-hand-tool-button-label = Hand Tool
pdfjs-scroll-page-button =
    .title = Use Page Scrolling
pdfjs-scroll-page-button-label = Page Scrolling
pdfjs-scroll-vertical-button =
    .title = Use Vertical Scrolling
pdfjs-scroll-vertical-button-label = Vertical Scrolling
pdfjs-scroll-horizontal-button =
    .title = Use Horizontal Scrolling
pdfjs-scroll-horizontal-button-label = Horizontal Scrolling
pdfjs-scroll-wrapped-button =
    .title = Use Wrapped Scrolling
pdfjs-scroll-wrapped-button-label = Wrapped Scrolling
pdfjs-spread-none-button =
    .title = Do not join page spreads
pdfjs-spread-none-button-label = No Spreads
pdfjs-spread-odd-button =
    .title = Join page spreads starting with odd-numbered pages
pdfjs-spread-odd-button-label = Odd Spreads
pdfjs-spread-even-button =
    .title = Join page spreads starting with even-numbered pages
pdfjs-spread-even-button-label = Even Spreads
pdfjs-document-properties-button =
    .title = Document Properties…
pdfjs-document-properties-button-label = Document Properties…
pdfjs-document-properties-file-name = File name:
pdfjs-document-properties-file-size = File size:
pdfjs-document-properties-kb = { $size_kb } KB ({ $size_b } bytes)
pdfjs-document-properties-mb = { $size_mb } MB ({ $size_b } bytes)
pdfjs-document-properties-title = Title:
pdfjs-document-properties-author = Author:
pdfjs-document-properties-subject = Subject:
pdfjs-document-properties-keywords = Keywords:
pdfjs-document-properties-creation-date = Creation Date:
pdfjs-document-properties-modification-date = Modification Date:
pdfjs-document-properties-date-string = { $date }, { $time }
pdfjs-document-properties-creator = Creator:
pdfjs-document-properties-producer = PDF Producer:
pdfjs-document-properties-version = PDF Version:
pdfjs-document-properties-page-count = Page Count:
pdfjs-document-properties-page-size = Page Size:
pdfjs-document-properties-page-size-unit-inches = in
pdfjs-document-properties-page-size-unit-millimeters = mm
pdfjs-document-properties-page-size-orientation-portrait = portrait
pdfjs-document-properties-page-size-orientation-landscape = landscape
pdfjs-document-properties-page-size-name-a-three = A3
pdfjs-document-properties-page-size-name-a-four = A4
pdfjs-document-properties-page-size-name-letter = Letter
pdfjs-document-properties-page-size-name-legal = Legal
pdfjs-document-properties-page-size-dimension-string = { $width } × { $height } { $unit } ({ $orientation })
pdfjs-document-properties-page-size-dimension-name-string = { $width } × { $height } { $unit } ({ $name }, { $orientation })
pdfjs-document-properties-linearized = Fast Web View:
pdfjs-document-properties-linearized-yes = Yes
pdfjs-document-properties-linearized-no = No
pdfjs-document-properties-close-button = Close
pdfjs-print-progress-message = Preparing document for printing…
pdfjs-print-progress-percent = { $progress }%
pdfjs-print-progress-close-button = Cancel
pdfjs-printing-not-supported = Warning: Printing is not fully supported by this browser.
pdfjs-printing-not-ready = Warning: The PDF is not fully loaded for printing.
pdfjs-toggle-sidebar-button =
    .title = Toggle Sidebar
pdfjs-toggle-sidebar-notification-button =
    .title = Toggle Sidebar (document contains outline/attachments/layers)
pdfjs-toggle-sidebar-button-label = Toggle Sidebar
pdfjs-document-outline-button =
    .title = Show Document Outline (double-click to expand/collapse all items)
pdfjs-document-outline-button-label = Document Outline
pdfjs-attachments-button =
    .title = Show Attachments
pdfjs-attachments-button-label = Attachments
pdfjs-layers-button =
    .title = Show Layers (double-click to reset all layers to the default state)
pdfjs-layers-button-label = Layers
pdfjs-thumbs-button =
    .title = Show Thumbnails
pdfjs-thumbs-button-label = Thumbnails
pdfjs-current-outline-item-button =
    .title = Find Current Outline Item
pdfjs-current-outline-item-button-label = Current Outline Item
pdfjs-findbar-button =
    .title = Find in Document
pdfjs-findbar-button-label = Find
pdfjs-additional-layers = Additional Layers
pdfjs-thumb-page-title =
    .title = Page { $page }
pdfjs-thumb-page-canvas =
    .aria-label = Thumbnail of Page { $page }
pdfjs-find-input =
    .title = Find
    .placeholder = Find in document…
pdfjs-find-previous-button =
    .title = Find the previous occurrence of the phrase
pdfjs-find-previous-button-label = Previous
pdfjs-find-next-button =
    .title = Find the next occurrence of the phrase
pdfjs-find-next-button-label = Next
pdfjs-find-highlight-checkbox = Highlight All
pdfjs-find-match-case-checkbox-label = Match Case
pdfjs-find-match-diacritics-checkbox-label = Match Diacritics
pdfjs-find-entire-word-checkbox-label = Whole Words
pdfjs-find-reached-top = Reached top of document, continued from bottom
pdfjs-find-reached-bottom = Reached end of document, continued from top
pdfjs-find-match-count =
    { $total ->
        [one] { $current } of { $total } match
       *[other] { $current } of { $total } matches
    }
pdfjs-find-match-count-limit =
    { $limit ->
        [one] More than { $limit } match
       *[other] More than { $limit } matches
    }
pdfjs-find-not-found = Phrase not found
pdfjs-page-scale-width = Page Width
pdfjs-page-scale-fit = Page Fit
pdfjs-page-scale-auto = Automatic Zoom
pdfjs-page-scale-actual = Actual Size
pdfjs-page-scale-percent = { $scale }%
pdfjs-page-landmark =
    .aria-label = Page { $page }
pdfjs-loading-error = An error occurred while loading the PDF.
pdfjs-invalid-file-error = Invalid or corrupted PDF file.
pdfjs-missing-file-error = Missing PDF file.
pdfjs-unexpected-response-error = Unexpected server response.
pdfjs-rendering-error = An error occurred while rendering the page.
pdfjs-annotation-date-string = { $date }, { $time }
pdfjs-text-annotation-type =
    .alt = [{ $type } Annotation]
pdfjs-password-label = Enter the password to open this PDF file.
pdfjs-password-invalid = Invalid password. Please try again.
pdfjs-password-ok-button = OK
pdfjs-password-cancel-button = Cancel
pdfjs-web-fonts-disabled = Web fonts are disabled: unable to use embedded PDF fonts.
pdfjs-editor-free-text-button =
    .title = Text
pdfjs-editor-free-text-button-label = Text
pdfjs-editor-ink-button =
    .title = Draw
pdfjs-editor-ink-button-label = Draw
pdfjs-editor-stamp-button =
    .title = Add or edit images
pdfjs-editor-stamp-button-label = Add or edit images
pdfjs-editor-highlight-button =
    .title = Highlight
pdfjs-editor-highlight-button-label = Highlight
pdfjs-highlight-floating-button1 =
    .title = Highlight
    .aria-label = Highlight
pdfjs-highlight-floating-button-label = Highlight
pdfjs-editor-remove-ink-button =
    .title = Remove drawing
pdfjs-editor-remove-freetext-button =
    .title = Remove text
pdfjs-editor-remove-stamp-button =
    .title = Remove image
pdfjs-editor-remove-highlight-button =
    .title = Remove highlight
pdfjs-editor-free-text-color-input = Color
pdfjs-editor-free-text-size-input = Size
pdfjs-editor-ink-color-input = Color
pdfjs-editor-ink-thickness-input = Thickness
pdfjs-editor-ink-opacity-input = Opacity
pdfjs-editor-stamp-add-image-button =
    .title = Add image
pdfjs-editor-stamp-add-image-button-label = Add image
pdfjs-editor-free-highlight-thickness-input = Thickness
pdfjs-editor-free-highlight-thickness-title =
    .title = Change thickness when highlighting items other than text
pdfjs-free-text =
    .aria-label = Text Editor
pdfjs-free-text-default-content = Start typing…
pdfjs-ink =
    .aria-label = Draw Editor
pdfjs-ink-canvas =
    .aria-label = User-created image
pdfjs-editor-alt-text-button-label = Alt text
pdfjs-editor-alt-text-edit-button-label = Edit alt text
pdfjs-editor-alt-text-dialog-label = Choose an option
pdfjs-editor-alt-text-dialog-description = Alt text (alternative text) helps when people can’t see the image or when it doesn’t load.
pdfjs-editor-alt-text-add-description-label = Add a description
pdfjs-editor-alt-text-add-description-description = Aim for 1-2 sentences that describe the subject, setting, or actions.
pdfjs-editor-alt-text-mark-decorative-label = Mark as decorative
pdfjs-editor-alt-text-mark-decorative-description = This is used for ornamental images, like borders or watermarks.
pdfjs-editor-alt-text-cancel-button = Cancel
pdfjs-editor-alt-text-save-button = Save
pdfjs-editor-alt-text-decorative-tooltip = Marked as decorative
pdfjs-editor-alt-text-textarea =
    .placeholder = For example, “A young man sits down at a table to eat a meal”
pdfjs-editor-resizer-label-top-left = Top left corner — resize
pdfjs-editor-resizer-label-top-middle = Top middle — resize
pdfjs-editor-resizer-label-top-right = Top right corner — resize
pdfjs-editor-resizer-label-middle-right = Middle right — resize
pdfjs-editor-resizer-label-bottom-right = Bottom right corner — resize
pdfjs-editor-resizer-label-bottom-middle = Bottom middle — resize
pdfjs-editor-resizer-label-bottom-left = Bottom left corner — resize
pdfjs-editor-resizer-label-middle-left = Middle left — resize
pdfjs-editor-highlight-colorpicker-label = Highlight color
pdfjs-editor-colorpicker-button =
    .title = Change color
pdfjs-editor-colorpicker-dropdown =
    .aria-label = Color choices
pdfjs-editor-colorpicker-yellow =
    .title = Yellow
pdfjs-editor-colorpicker-green =
    .title = Green
pdfjs-editor-colorpicker-blue =
    .title = Blue
pdfjs-editor-colorpicker-pink =
    .title = Pink
pdfjs-editor-colorpicker-red =
    .title = Red
pdfjs-editor-highlight-show-all-button-label = Show all
pdfjs-editor-highlight-show-all-button =
    .title = Show all`,
      );
    }),
    R(Ud, Oi),
    R(Ud, gi),
    R(Ud, Ki),
    R(Ud, vi),
    R(Ud, sV);
  let a0 = Ud;
  const WS = 1e3,
    aS = 50,
    iS = 1e3;
  function jN() {
    return document.location.hash;
  }
  class RS {
    constructor({ linkService: U, eventBus: l }) {
      R(this, dd);
      R(this, rc);
      R(this, wc);
      R(this, OF);
      R(this, xc);
      R(this, QV);
      R(this, Hi);
      R(this, Pi);
      R(this, nV);
      R(this, fi);
      R(this, Ai);
      R(this, Ft, null);
      (this.linkService = U),
        (this.eventBus = l),
        (this._initialized = !1),
        (this._fingerprint = ''),
        this.reset(),
        this.eventBus._on('pagesinit', () => {
          (this._isPagesLoaded = !1),
            this.eventBus._on(
              'pagesloaded',
              (d) => {
                this._isPagesLoaded = !!d.pagesCount;
              },
              { once: !0 },
            );
        });
    }
    initialize({ fingerprint: U, resetHistory: l = !1, updateUrl: d = !1 }) {
      if (!U || typeof U != 'string') {
        console.error(
          'PDFHistory.initialize: The "fingerprint" must be a non-empty string.',
        );
        return;
      }
      this._initialized && this.reset();
      const Z = this._fingerprint !== '' && this._fingerprint !== U;
      (this._fingerprint = U),
        (this._updateUrl = d === !0),
        (this._initialized = !0),
        b(this, fi, _2).call(this);
      const t = window.history.state;
      if (
        ((this._popStateInProgress = !1),
        (this._blockHashChange = 0),
        (this._currentHash = jN()),
        (this._numPositionUpdates = 0),
        (this._uid = this._maxUid = 0),
        (this._destination = null),
        (this._position = null),
        !b(this, OF, ZW).call(this, t, !0) || l)
      ) {
        const {
          hash: c,
          page: n,
          rotation: V,
        } = b(this, QV, db).call(this, !0);
        if (!c || Z || l) {
          b(this, dd, MZ).call(this, null, !0);
          return;
        }
        b(this, dd, MZ).call(this, { hash: c, page: n, rotation: V }, !0);
        return;
      }
      const F = t.destination;
      b(this, xc, jR).call(this, F, t.uid, !0),
        F.rotation !== void 0 && (this._initialRotation = F.rotation),
        F.dest
          ? ((this._initialBookmark = JSON.stringify(F.dest)),
            (this._destination.page = null))
          : F.hash
            ? (this._initialBookmark = F.hash)
            : F.page && (this._initialBookmark = `page=${F.page}`);
    }
    reset() {
      this._initialized &&
        (b(this, nV, Zb).call(this),
        (this._initialized = !1),
        b(this, Ai, q2).call(this)),
        this._updateViewareaTimeout &&
          (clearTimeout(this._updateViewareaTimeout),
          (this._updateViewareaTimeout = null)),
        (this._initialBookmark = null),
        (this._initialRotation = null);
    }
    push({ namedDest: U = null, explicitDest: l, pageNumber: d }) {
      if (!this._initialized) return;
      if (U && typeof U != 'string') {
        console.error(
          `PDFHistory.push: "${U}" is not a valid namedDest parameter.`,
        );
        return;
      } else if (Array.isArray(l)) {
        if (
          !b(this, wc, xR).call(this, d) &&
          (d !== null || this._destination)
        ) {
          console.error(
            `PDFHistory.push: "${d}" is not a valid pageNumber parameter.`,
          );
          return;
        }
      } else {
        console.error(
          `PDFHistory.push: "${l}" is not a valid explicitDest parameter.`,
        );
        return;
      }
      const Z = U || JSON.stringify(l);
      if (!Z) return;
      let t = !1;
      if (
        this._destination &&
        (NS(this._destination.hash, Z) || hS(this._destination.dest, l))
      ) {
        if (this._destination.page) return;
        t = !0;
      }
      (this._popStateInProgress && !t) ||
        (b(this, dd, MZ).call(
          this,
          { dest: l, hash: Z, page: d, rotation: this.linkService.rotation },
          t,
        ),
        this._popStateInProgress ||
          ((this._popStateInProgress = !0),
          Promise.resolve().then(() => {
            this._popStateInProgress = !1;
          })));
    }
    pushPage(U) {
      var l;
      if (this._initialized) {
        if (!b(this, wc, xR).call(this, U)) {
          console.error(
            `PDFHistory.pushPage: "${U}" is not a valid page number.`,
          );
          return;
        }
        ((l = this._destination) == null ? void 0 : l.page) !== U &&
          (this._popStateInProgress ||
            (b(this, dd, MZ).call(this, {
              dest: null,
              hash: `page=${U}`,
              page: U,
              rotation: this.linkService.rotation,
            }),
            this._popStateInProgress ||
              ((this._popStateInProgress = !0),
              Promise.resolve().then(() => {
                this._popStateInProgress = !1;
              }))));
      }
    }
    pushCurrentPosition() {
      !this._initialized ||
        this._popStateInProgress ||
        b(this, rc, wR).call(this);
    }
    back() {
      if (!this._initialized || this._popStateInProgress) return;
      const U = window.history.state;
      b(this, OF, ZW).call(this, U) && U.uid > 0 && window.history.back();
    }
    forward() {
      if (!this._initialized || this._popStateInProgress) return;
      const U = window.history.state;
      b(this, OF, ZW).call(this, U) &&
        U.uid < this._maxUid &&
        window.history.forward();
    }
    get popStateInProgress() {
      return (
        this._initialized &&
        (this._popStateInProgress || this._blockHashChange > 0)
      );
    }
    get initialBookmark() {
      return this._initialized ? this._initialBookmark : null;
    }
    get initialRotation() {
      return this._initialized ? this._initialRotation : null;
    }
  }
  (Ft = new WeakMap()),
    (dd = new WeakSet()),
    (MZ = function (U, l = !1) {
      const d = l || !this._destination,
        Z = {
          fingerprint: this._fingerprint,
          uid: d ? this._uid : this._uid + 1,
          destination: U,
        };
      b(this, xc, jR).call(this, U, Z.uid);
      let t;
      if (this._updateUrl && U != null && U.hash) {
        const F = document.location.href.split('#', 1)[0];
        F.startsWith('file://') || (t = `${F}#${U.hash}`);
      }
      d
        ? window.history.replaceState(Z, '', t)
        : window.history.pushState(Z, '', t);
    }),
    (rc = new WeakSet()),
    (wR = function (U = !1) {
      if (!this._position) return;
      let l = this._position;
      if (
        (U &&
          ((l = Object.assign(Object.create(null), this._position)),
          (l.temporary = !0)),
        !this._destination)
      ) {
        b(this, dd, MZ).call(this, l);
        return;
      }
      if (this._destination.temporary) {
        b(this, dd, MZ).call(this, l, !0);
        return;
      }
      if (
        this._destination.hash === l.hash ||
        (!this._destination.page && this._numPositionUpdates <= aS)
      )
        return;
      let d = !1;
      if (
        this._destination.page >= l.first &&
        this._destination.page <= l.page
      ) {
        if (this._destination.dest !== void 0 || !this._destination.first)
          return;
        d = !0;
      }
      b(this, dd, MZ).call(this, l, d);
    }),
    (wc = new WeakSet()),
    (xR = function (U) {
      return Number.isInteger(U) && U > 0 && U <= this.linkService.pagesCount;
    }),
    (OF = new WeakSet()),
    (ZW = function (U, l = !1) {
      if (!U) return !1;
      if (U.fingerprint !== this._fingerprint)
        if (l) {
          if (
            typeof U.fingerprint != 'string' ||
            U.fingerprint.length !== this._fingerprint.length
          )
            return !1;
          const [d] = performance.getEntriesByType('navigation');
          if ((d == null ? void 0 : d.type) !== 'reload') return !1;
        } else return !1;
      return !(
        !Number.isInteger(U.uid) ||
        U.uid < 0 ||
        U.destination === null ||
        typeof U.destination != 'object'
      );
    }),
    (xc = new WeakSet()),
    (jR = function (U, l, d = !1) {
      this._updateViewareaTimeout &&
        (clearTimeout(this._updateViewareaTimeout),
        (this._updateViewareaTimeout = null)),
        d && U != null && U.temporary && delete U.temporary,
        (this._destination = U),
        (this._uid = l),
        (this._maxUid = Math.max(this._maxUid, l)),
        (this._numPositionUpdates = 0);
    }),
    (QV = new WeakSet()),
    (db = function (U = !1) {
      const l = unescape(jN()).substring(1),
        d = LW(l),
        Z = d.get('nameddest') || '';
      let t = d.get('page') | 0;
      return (
        (!b(this, wc, xR).call(this, t) || (U && Z.length > 0)) && (t = null),
        { hash: l, page: t, rotation: this.linkService.rotation }
      );
    }),
    (Hi = new WeakSet()),
    (f2 = function ({ location: U }) {
      this._updateViewareaTimeout &&
        (clearTimeout(this._updateViewareaTimeout),
        (this._updateViewareaTimeout = null)),
        (this._position = {
          hash: U.pdfOpenParams.substring(1),
          page: this.linkService.page,
          first: U.pageNumber,
          rotation: U.rotation,
        }),
        !this._popStateInProgress &&
          (this._isPagesLoaded &&
            this._destination &&
            !this._destination.page &&
            this._numPositionUpdates++,
          (this._updateViewareaTimeout = setTimeout(() => {
            this._popStateInProgress || b(this, rc, wR).call(this, !0),
              (this._updateViewareaTimeout = null);
          }, iS)));
    }),
    (Pi = new WeakSet()),
    (A2 = function ({ state: U }) {
      const l = jN(),
        d = this._currentHash !== l;
      if (((this._currentHash = l), !U)) {
        this._uid++;
        const { hash: t, page: F, rotation: c } = b(this, QV, db).call(this);
        b(this, dd, MZ).call(this, { hash: t, page: F, rotation: c }, !0);
        return;
      }
      if (!b(this, OF, ZW).call(this, U)) return;
      (this._popStateInProgress = !0),
        d &&
          (this._blockHashChange++,
          eT({ target: window, name: 'hashchange', delay: WS }).then(() => {
            this._blockHashChange--;
          }));
      const Z = U.destination;
      b(this, xc, jR).call(this, Z, U.uid, !0),
        Je(Z.rotation) && (this.linkService.rotation = Z.rotation),
        Z.dest
          ? this.linkService.goToDestination(Z.dest)
          : Z.hash
            ? this.linkService.setHash(Z.hash)
            : Z.page && (this.linkService.page = Z.page),
        Promise.resolve().then(() => {
          this._popStateInProgress = !1;
        });
    }),
    (nV = new WeakSet()),
    (Zb = function () {
      (!this._destination || this._destination.temporary) &&
        b(this, rc, wR).call(this);
    }),
    (fi = new WeakSet()),
    (_2 = function () {
      if (s(this, Ft)) return;
      e(this, Ft, new AbortController());
      const { signal: U } = s(this, Ft);
      this.eventBus._on('updateviewarea', b(this, Hi, f2).bind(this), {
        signal: U,
      }),
        window.addEventListener('popstate', b(this, Pi, A2).bind(this), {
          signal: U,
        }),
        window.addEventListener('pagehide', b(this, nV, Zb).bind(this), {
          signal: U,
        });
    }),
    (Ai = new WeakSet()),
    (q2 = function () {
      var U;
      (U = s(this, Ft)) == null || U.abort(), e(this, Ft, null);
    });
  function NS(Q, U) {
    return typeof Q != 'string' || typeof U != 'string'
      ? !1
      : Q === U || LW(Q).get('nameddest') === U;
  }
  function hS(Q, U) {
    function l(d, Z) {
      if (typeof d != typeof Z || Array.isArray(d) || Array.isArray(Z))
        return !1;
      if (d !== null && typeof d == 'object' && Z !== null) {
        if (Object.keys(d).length !== Object.keys(Z).length) return !1;
        for (const t in d) if (!l(d[t], Z[t])) return !1;
        return !0;
      }
      return d === Z || (Number.isNaN(d) && Number.isNaN(Z));
    }
    if (!(Array.isArray(Q) && Array.isArray(U)) || Q.length !== U.length)
      return !1;
    for (let d = 0, Z = Q.length; d < Z; d++) if (!l(Q[d], U[d])) return !1;
    return !0;
  }
  class bS {
    constructor(U) {
      R(this, VV, null);
      R(this, WV, null);
      R(this, aV, null);
      R(this, iV, null);
      R(this, jc, void 0);
      (this.pdfPage = U.pdfPage),
        (this.accessibilityManager = U.accessibilityManager),
        (this.l10n = U.l10n),
        this.l10n || (this.l10n = new a0()),
        (this.annotationEditorLayer = null),
        (this.div = null),
        (this._cancelled = !1),
        e(this, jc, U.uiManager),
        e(this, VV, U.annotationLayer || null),
        e(this, iV, U.textLayer || null),
        e(this, WV, U.drawLayer || null),
        e(this, aV, U.onAppend || null);
    }
    async render(U, l = 'display') {
      var F;
      if (l !== 'display' || this._cancelled) return;
      const d = U.clone({ dontFlip: !0 });
      if (this.div) {
        this.annotationEditorLayer.update({ viewport: d }), this.show();
        return;
      }
      const Z = (this.div = document.createElement('div'));
      (Z.className = 'annotationEditorLayer'),
        (Z.hidden = !0),
        (Z.dir = s(this, jc).direction),
        (F = s(this, aV)) == null || F.call(this, Z),
        (this.annotationEditorLayer = new sT({
          uiManager: s(this, jc),
          div: Z,
          accessibilityManager: this.accessibilityManager,
          pageIndex: this.pdfPage.pageNumber - 1,
          l10n: this.l10n,
          viewport: d,
          annotationLayer: s(this, VV),
          textLayer: s(this, iV),
          drawLayer: s(this, WV),
        }));
      const t = { viewport: d, div: Z, annotations: null, intent: l };
      this.annotationEditorLayer.render(t), this.show();
    }
    cancel() {
      (this._cancelled = !0), this.div && this.annotationEditorLayer.destroy();
    }
    hide() {
      this.div && (this.div.hidden = !0);
    }
    show() {
      !this.div ||
        this.annotationEditorLayer.isInvisible ||
        (this.div.hidden = !1);
    }
  }
  (VV = new WeakMap()),
    (WV = new WeakMap()),
    (aV = new WeakMap()),
    (iV = new WeakMap()),
    (jc = new WeakMap());
  {
    var us = Object.create(null);
    const Q = navigator.userAgent || '',
      U = navigator.platform || '',
      l = navigator.maxTouchPoints || 1,
      d = /Android/.test(Q),
      Z = /\b(iPad|iPhone|iPod)(?=;)/.test(Q) || (U === 'MacIntel' && l > 1);
    (function () {
      (Z || d) && (us.maxCanvasPixels = 5242880);
    })();
  }
  const k = { BROWSER: 1, VIEWER: 2, API: 4, WORKER: 8, PREFERENCE: 128 },
    YZ = {
      canvasMaxAreaInBytes: { value: -1, kind: k.BROWSER + k.API },
      isInAutomation: { value: !1, kind: k.BROWSER },
      supportsCaretBrowsingMode: { value: !1, kind: k.BROWSER },
      supportsDocumentFonts: { value: !0, kind: k.BROWSER },
      supportsIntegratedFind: { value: !1, kind: k.BROWSER },
      supportsMouseWheelZoomCtrlKey: { value: !0, kind: k.BROWSER },
      supportsMouseWheelZoomMetaKey: { value: !0, kind: k.BROWSER },
      supportsPinchToZoom: { value: !0, kind: k.BROWSER },
      annotationEditorMode: { value: 0, kind: k.VIEWER + k.PREFERENCE },
      annotationMode: { value: 2, kind: k.VIEWER + k.PREFERENCE },
      cursorToolOnLoad: { value: 0, kind: k.VIEWER + k.PREFERENCE },
      debuggerSrc: { value: './debugger.mjs', kind: k.VIEWER },
      defaultZoomDelay: { value: 400, kind: k.VIEWER + k.PREFERENCE },
      defaultZoomValue: { value: '', kind: k.VIEWER + k.PREFERENCE },
      disableHistory: { value: !1, kind: k.VIEWER },
      disablePageLabels: { value: !1, kind: k.VIEWER + k.PREFERENCE },
      enableHighlightEditor: { value: !1, kind: k.VIEWER + k.PREFERENCE },
      enableHighlightFloatingButton: {
        value: !1,
        kind: k.VIEWER + k.PREFERENCE,
      },
      enableML: { value: !1, kind: k.VIEWER + k.PREFERENCE },
      enablePermissions: { value: !1, kind: k.VIEWER + k.PREFERENCE },
      enablePrintAutoRotate: { value: !0, kind: k.VIEWER + k.PREFERENCE },
      enableScripting: { value: !0, kind: k.VIEWER + k.PREFERENCE },
      enableStampEditor: { value: !0, kind: k.VIEWER + k.PREFERENCE },
      externalLinkRel: {
        value: 'noopener noreferrer nofollow',
        kind: k.VIEWER,
      },
      externalLinkTarget: { value: 0, kind: k.VIEWER + k.PREFERENCE },
      highlightEditorColors: {
        value:
          'yellow=#FFFF98,green=#53FFBC,blue=#80EBFF,pink=#FFCBE6,red=#FF4F5F',
        kind: k.VIEWER + k.PREFERENCE,
      },
      historyUpdateUrl: { value: !1, kind: k.VIEWER + k.PREFERENCE },
      ignoreDestinationZoom: { value: !1, kind: k.VIEWER + k.PREFERENCE },
      imageResourcesPath: { value: './images/', kind: k.VIEWER },
      maxCanvasPixels: { value: 2 ** 25, kind: k.VIEWER },
      forcePageColors: { value: !1, kind: k.VIEWER + k.PREFERENCE },
      pageColorsBackground: { value: 'Canvas', kind: k.VIEWER + k.PREFERENCE },
      pageColorsForeground: {
        value: 'CanvasText',
        kind: k.VIEWER + k.PREFERENCE,
      },
      pdfBugEnabled: { value: !1, kind: k.VIEWER + k.PREFERENCE },
      printResolution: { value: 150, kind: k.VIEWER },
      sidebarViewOnLoad: { value: -1, kind: k.VIEWER + k.PREFERENCE },
      scrollModeOnLoad: { value: -1, kind: k.VIEWER + k.PREFERENCE },
      spreadModeOnLoad: { value: -1, kind: k.VIEWER + k.PREFERENCE },
      textLayerMode: { value: 1, kind: k.VIEWER + k.PREFERENCE },
      viewOnLoad: { value: 0, kind: k.VIEWER + k.PREFERENCE },
      cMapPacked: { value: !0, kind: k.API },
      cMapUrl: { value: '../web/cmaps/', kind: k.API },
      disableAutoFetch: { value: !1, kind: k.API + k.PREFERENCE },
      disableFontFace: { value: !1, kind: k.API + k.PREFERENCE },
      disableRange: { value: !1, kind: k.API + k.PREFERENCE },
      disableStream: { value: !1, kind: k.API + k.PREFERENCE },
      docBaseUrl: { value: '', kind: k.API },
      enableHWA: { value: !0, kind: k.API + k.VIEWER + k.PREFERENCE },
      enableXfa: { value: !0, kind: k.API + k.PREFERENCE },
      fontExtraProperties: { value: !1, kind: k.API },
      isEvalSupported: { value: !0, kind: k.API },
      isOffscreenCanvasSupported: { value: !0, kind: k.API },
      maxImageSize: { value: -1, kind: k.API },
      pdfBug: { value: !1, kind: k.API },
      standardFontDataUrl: { value: '../web/standard_fonts/', kind: k.API },
      verbosity: { value: 1, kind: k.API },
      workerPort: { value: null, kind: k.WORKER },
      workerSrc: { value: '../build/pdf.worker.mjs', kind: k.WORKER },
    };
  (YZ.defaultUrl = {
    value: 'compressed.tracemonkey-pldi-09.pdf',
    kind: k.VIEWER,
  }),
    (YZ.sandboxBundleSrc = {
      value: '../build/pdf.sandbox.mjs',
      kind: k.VIEWER,
    }),
    (YZ.viewerCssTheme = { value: 0, kind: k.VIEWER + k.PREFERENCE }),
    (YZ.disablePreferences = { value: !1, kind: k.VIEWER }),
    (YZ.locale = { value: navigator.language || 'en-US', kind: k.VIEWER });
  const uZ = Object.create(null);
  for (const Q in us) uZ[Q] = us[Q];
  class eS {
    constructor() {
      throw new Error('Cannot initialize AppOptions.');
    }
    static get(U) {
      var l;
      return uZ[U] ?? ((l = YZ[U]) == null ? void 0 : l.value) ?? void 0;
    }
    static getAll(U = null, l = !1) {
      const d = Object.create(null);
      for (const Z in YZ) {
        const t = YZ[Z];
        (U && !(U & t.kind)) || (d[Z] = l ? t.value : (uZ[Z] ?? t.value));
      }
      return d;
    }
    static set(U, l) {
      uZ[U] = l;
    }
    static setAll(U, l = !1) {
      if (l) {
        if (this.get('disablePreferences')) return;
        for (const d in uZ)
          if (us[d] === void 0) {
            console.warn(
              'setAll: The Preferences may override manually set AppOptions; please use the "disablePreferences"-option in order to prevent that.',
            );
            break;
          }
      }
      for (const d in U) uZ[d] = U[d];
    }
    static remove(U) {
      delete uZ[U];
      const l = us[U];
      l !== void 0 && (uZ[U] = l);
    }
  }
  class mS {
    constructor(U) {
      R(this, Sd, null);
      this.pageIndex = U.pageIndex;
    }
    async render(U = 'display') {
      U !== 'display' ||
        s(this, Sd) ||
        this._cancelled ||
        e(this, Sd, new WT({ pageIndex: this.pageIndex }));
    }
    cancel() {
      (this._cancelled = !0),
        s(this, Sd) && (s(this, Sd).destroy(), e(this, Sd, null));
    }
    setParent(U) {
      var l;
      (l = s(this, Sd)) == null || l.setParent(U);
    }
    getDrawLayer() {
      return s(this, Sd);
    }
  }
  Sd = new WeakMap();
  const qe = {
      Document: null,
      DocumentFragment: null,
      Part: 'group',
      Sect: 'group',
      Div: 'group',
      Aside: 'note',
      NonStruct: 'none',
      P: null,
      H: 'heading',
      Title: null,
      FENote: 'note',
      Sub: 'group',
      Lbl: null,
      Span: null,
      Em: null,
      Strong: null,
      Link: 'link',
      Annot: 'note',
      Form: 'form',
      Ruby: null,
      RB: null,
      RT: null,
      RP: null,
      Warichu: null,
      WT: null,
      WP: null,
      L: 'list',
      LI: 'listitem',
      LBody: null,
      Table: 'table',
      TR: 'row',
      TH: 'columnheader',
      TD: 'cell',
      THead: 'columnheader',
      TBody: null,
      TFoot: null,
      Caption: null,
      Figure: 'figure',
      Formula: null,
      Artifact: null,
    },
    MS = /^H(\d+)$/;
  class $e {
    constructor() {
      R(this, RV);
      R(this, NV);
      R(this, kU, void 0);
    }
    get renderingDone() {
      return s(this, kU) !== void 0;
    }
    render(U) {
      if (s(this, kU) !== void 0) return s(this, kU);
      const l = b(this, NV, Fb).call(this, U);
      return l == null || l.classList.add('structTree'), e(this, kU, l);
    }
    hide() {
      s(this, kU) && !s(this, kU).hidden && (s(this, kU).hidden = !0);
    }
    show() {
      var U;
      (U = s(this, kU)) != null && U.hidden && (s(this, kU).hidden = !1);
    }
  }
  (kU = new WeakMap()),
    (RV = new WeakSet()),
    (tb = function (U, l) {
      const { alt: d, id: Z, lang: t } = U;
      d !== void 0 && l.setAttribute('aria-label', zW(d)),
        Z !== void 0 && l.setAttribute('aria-owns', Z),
        t !== void 0 && l.setAttribute('lang', zW(t, !0));
    }),
    (NV = new WeakSet()),
    (Fb = function (U) {
      if (!U) return null;
      const l = document.createElement('span');
      if ('role' in U) {
        const { role: d } = U,
          Z = d.match(MS);
        Z
          ? (l.setAttribute('role', 'heading'),
            l.setAttribute('aria-level', Z[1]))
          : qe[d] && l.setAttribute('role', qe[d]);
      }
      if ((b(this, RV, tb).call(this, U, l), U.children))
        if (U.children.length === 1 && 'id' in U.children[0])
          b(this, RV, tb).call(this, U.children[0], l);
        else
          for (const d of U.children) l.append(b(this, NV, Fb).call(this, d));
      return l;
    });
  const gc = class gc {
    constructor() {
      R(this, hV);
      R(this, iZ, !1);
      R(this, DU, null);
      R(this, RZ, new Map());
      R(this, ct, new Map());
    }
    setTextMapping(U) {
      e(this, DU, U);
    }
    enable() {
      if (s(this, iZ))
        throw new Error('TextAccessibilityManager is already enabled.');
      if (!s(this, DU))
        throw new Error('Text divs and strings have not been set.');
      if (
        (e(this, iZ, !0),
        e(this, DU, s(this, DU).slice()),
        s(this, DU).sort(b(gc, Oc, OR)),
        s(this, RZ).size > 0)
      ) {
        const U = s(this, DU);
        for (const [l, d] of s(this, RZ)) {
          if (!document.getElementById(l)) {
            s(this, RZ).delete(l);
            continue;
          }
          b(this, hV, cb).call(this, l, U[d]);
        }
      }
      for (const [U, l] of s(this, ct)) this.addPointerInTextLayer(U, l);
      s(this, ct).clear();
    }
    disable() {
      s(this, iZ) && (s(this, ct).clear(), e(this, DU, null), e(this, iZ, !1));
    }
    removePointerInTextLayer(U) {
      if (!s(this, iZ)) {
        s(this, ct).delete(U);
        return;
      }
      const l = s(this, DU);
      if (!l || l.length === 0) return;
      const { id: d } = U,
        Z = s(this, RZ).get(d);
      if (Z === void 0) return;
      const t = l[Z];
      s(this, RZ).delete(d);
      let F = t.getAttribute('aria-owns');
      F != null &&
        F.includes(d) &&
        ((F = F.split(' ')
          .filter((c) => c !== d)
          .join(' ')),
        F
          ? t.setAttribute('aria-owns', F)
          : (t.removeAttribute('aria-owns'),
            t.setAttribute('role', 'presentation')));
    }
    addPointerInTextLayer(U, l) {
      const { id: d } = U;
      if (!d) return null;
      if (!s(this, iZ)) return s(this, ct).set(U, l), null;
      l && this.removePointerInTextLayer(U);
      const Z = s(this, DU);
      if (!Z || Z.length === 0) return null;
      const t = Ts(Z, (V) => {
          var W;
          return b((W = gc), Oc, OR).call(W, U, V) < 0;
        }),
        F = Math.max(0, t - 1),
        c = Z[F];
      b(this, hV, cb).call(this, d, c), s(this, RZ).set(d, F);
      const n = c.parentNode;
      return n != null && n.classList.contains('markedContent') ? n.id : null;
    }
    moveElementInDOM(U, l, d, Z) {
      const t = this.addPointerInTextLayer(d, Z);
      if (!U.hasChildNodes()) return U.append(l), t;
      const F = Array.from(U.childNodes).filter((V) => V !== l);
      if (F.length === 0) return t;
      const c = d || l,
        n = Ts(F, (V) => {
          var W;
          return b((W = gc), Oc, OR).call(W, c, V) < 0;
        });
      return n === 0 ? F[0].before(l) : F[n - 1].after(l), t;
    }
  };
  (iZ = new WeakMap()),
    (DU = new WeakMap()),
    (RZ = new WeakMap()),
    (ct = new WeakMap()),
    (Oc = new WeakSet()),
    (OR = function (U, l) {
      const d = U.getBoundingClientRect(),
        Z = l.getBoundingClientRect();
      if (d.width === 0 && d.height === 0) return 1;
      if (Z.width === 0 && Z.height === 0) return -1;
      const t = d.y,
        F = d.y + d.height,
        c = d.y + d.height / 2,
        n = Z.y,
        V = Z.y + Z.height,
        W = Z.y + Z.height / 2;
      if (c <= n && W >= F) return -1;
      if (W <= t && c >= V) return 1;
      const a = d.x + d.width / 2,
        i = Z.x + Z.width / 2;
      return a - i;
    }),
    (hV = new WeakSet()),
    (cb = function (U, l) {
      const d = l.getAttribute('aria-owns');
      (d != null && d.includes(U)) ||
        l.setAttribute('aria-owns', d ? `${d} ${U}` : U),
        l.removeAttribute('role');
    }),
    R(gc, Oc);
  let ON = gc;
  class JS {
    constructor({ findController: U, eventBus: l, pageIndex: d }) {
      R(this, st, null);
      (this.findController = U),
        (this.matches = []),
        (this.eventBus = l),
        (this.pageIdx = d),
        (this.textDivs = null),
        (this.textContentItemsStr = null),
        (this.enabled = !1);
    }
    setTextMapping(U, l) {
      (this.textDivs = U), (this.textContentItemsStr = l);
    }
    enable() {
      if (!this.textDivs || !this.textContentItemsStr)
        throw new Error('Text divs and strings have not been set.');
      if (this.enabled) throw new Error('TextHighlighter is already enabled.');
      (this.enabled = !0),
        s(this, st) ||
          (e(this, st, new AbortController()),
          this.eventBus._on(
            'updatetextlayermatches',
            (U) => {
              (U.pageIndex === this.pageIdx || U.pageIndex === -1) &&
                this._updateMatches();
            },
            { signal: s(this, st).signal },
          )),
        this._updateMatches();
    }
    disable() {
      var U;
      this.enabled &&
        ((this.enabled = !1),
        (U = s(this, st)) == null || U.abort(),
        e(this, st, null),
        this._updateMatches(!0));
    }
    _convertMatches(U, l) {
      if (!U) return [];
      const { textContentItemsStr: d } = this;
      let Z = 0,
        t = 0;
      const F = d.length - 1,
        c = [];
      for (let n = 0, V = U.length; n < V; n++) {
        let W = U[n];
        for (; Z !== F && W >= t + d[Z].length; ) (t += d[Z].length), Z++;
        Z === d.length && console.error('Could not find a matching mapping');
        const a = { begin: { divIdx: Z, offset: W - t } };
        for (W += l[n]; Z !== F && W > t + d[Z].length; )
          (t += d[Z].length), Z++;
        (a.end = { divIdx: Z, offset: W - t }), c.push(a);
      }
      return c;
    }
    _renderMatches(U) {
      if (U.length === 0) return;
      const { findController: l, pageIdx: d } = this,
        { textContentItemsStr: Z, textDivs: t } = this,
        F = d === l.selected.pageIdx,
        c = l.selected.matchIdx,
        n = l.state.highlightAll;
      let V = null;
      const W = { divIdx: -1, offset: void 0 };
      function a(m, G) {
        const T = m.divIdx;
        return (t[T].textContent = ''), i(T, 0, m.offset, G);
      }
      function i(m, G, T, u) {
        let X = t[m];
        if (X.nodeType === Node.TEXT_NODE) {
          const L = document.createElement('span');
          X.before(L), L.append(X), (t[m] = L), (X = L);
        }
        const S = Z[m].substring(G, T),
          p = document.createTextNode(S);
        if (u) {
          const L = document.createElement('span');
          return (
            (L.className = `${u} appended`),
            L.append(p),
            X.append(L),
            u.includes('selected') ? L.offsetLeft : 0
          );
        }
        return X.append(p), 0;
      }
      let h = c,
        N = h + 1;
      if (n) (h = 0), (N = U.length);
      else if (!F) return;
      let M = -1,
        J = -1;
      for (let m = h; m < N; m++) {
        const G = U[m],
          T = G.begin;
        if (T.divIdx === M && T.offset === J) continue;
        (M = T.divIdx), (J = T.offset);
        const u = G.end,
          X = F && m === c,
          S = X ? ' selected' : '';
        let p = 0;
        if (
          (!V || T.divIdx !== V.divIdx
            ? (V !== null && i(V.divIdx, V.offset, W.offset), a(T))
            : i(V.divIdx, V.offset, T.offset),
          T.divIdx === u.divIdx)
        )
          p = i(T.divIdx, T.offset, u.offset, 'highlight' + S);
        else {
          p = i(T.divIdx, T.offset, W.offset, 'highlight begin' + S);
          for (let L = T.divIdx + 1, Y = u.divIdx; L < Y; L++)
            t[L].className = 'highlight middle' + S;
          a(u, 'highlight end' + S);
        }
        (V = u),
          X &&
            l.scrollMatchIntoView({
              element: t[T.divIdx],
              selectedLeft: p,
              pageIndex: d,
              matchIndex: c,
            });
      }
      V && i(V.divIdx, V.offset, W.offset);
    }
    _updateMatches(U = !1) {
      if (!this.enabled && !U) return;
      const { findController: l, matches: d, pageIdx: Z } = this,
        { textContentItemsStr: t, textDivs: F } = this;
      let c = -1;
      for (const W of d) {
        const a = Math.max(c, W.begin.divIdx);
        for (let i = a, h = W.end.divIdx; i <= h; i++) {
          const N = F[i];
          (N.textContent = t[i]), (N.className = '');
        }
        c = W.end.divIdx + 1;
      }
      if (!(l != null && l.highlightMatches) || U) return;
      const n = l.pageMatches[Z] || null,
        V = l.pageMatchesLength[Z] || null;
      (this.matches = this._convertMatches(n, V)),
        this._renderMatches(this.matches);
    }
  }
  st = new WeakMap();
  const NZ = class NZ {
    constructor({
      pdfPage: U,
      highlighter: l = null,
      accessibilityManager: d = null,
      enablePermissions: Z = !1,
      onAppend: t = null,
    }) {
      R(this, _i);
      R(this, bV, !1);
      R(this, eV, null);
      R(this, gF, !1);
      R(this, Xd, null);
      (this.pdfPage = U),
        (this.highlighter = l),
        (this.accessibilityManager = d),
        e(this, bV, Z === !0),
        e(this, eV, t),
        (this.div = document.createElement('div')),
        (this.div.tabIndex = 0),
        (this.div.className = 'textLayer');
    }
    async render(U, l = null) {
      var F, c, n, V, W;
      if (s(this, gF) && s(this, Xd)) {
        s(this, Xd).update({ viewport: U, onBefore: this.hide.bind(this) }),
          this.show();
        return;
      }
      this.cancel(),
        e(
          this,
          Xd,
          new hT({
            textContentSource: this.pdfPage.streamTextContent(
              l || { includeMarkedContent: !0, disableNormalization: !0 },
            ),
            container: this.div,
            viewport: U,
          }),
        );
      const { textDivs: d, textContentItemsStr: Z } = s(this, Xd);
      (F = this.highlighter) == null || F.setTextMapping(d, Z),
        (c = this.accessibilityManager) == null || c.setTextMapping(d),
        await s(this, Xd).render(),
        e(this, gF, !0);
      const t = document.createElement('div');
      (t.className = 'endOfContent'),
        this.div.append(t),
        b(this, _i, $2).call(this, t),
        (n = s(this, eV)) == null || n.call(this, this.div),
        (V = this.highlighter) == null || V.enable(),
        (W = this.accessibilityManager) == null || W.enable();
    }
    hide() {
      var U;
      !this.div.hidden &&
        s(this, gF) &&
        ((U = this.highlighter) == null || U.disable(), (this.div.hidden = !0));
    }
    show() {
      var U;
      this.div.hidden &&
        s(this, gF) &&
        ((this.div.hidden = !1), (U = this.highlighter) == null || U.enable());
    }
    cancel() {
      var U, l, d, Z;
      (U = s(this, Xd)) == null || U.cancel(),
        e(this, Xd, null),
        (l = this.highlighter) == null || l.disable(),
        (d = this.accessibilityManager) == null || d.disable(),
        b((Z = NZ), qi, lM).call(Z, this.div);
    }
  };
  (bV = new WeakMap()),
    (eV = new WeakMap()),
    (gF = new WeakMap()),
    (Xd = new WeakMap()),
    (IU = new WeakMap()),
    (Qt = new WeakMap()),
    (_i = new WeakSet()),
    ($2 = function (U) {
      var d;
      const { div: l } = this;
      l.addEventListener('mousedown', (Z) => {
        U.classList.add('active');
      }),
        l.addEventListener('copy', (Z) => {
          if (!s(this, bV)) {
            const t = document.getSelection();
            Z.clipboardData.setData('text/plain', zW(RT(t.toString())));
          }
          Z.preventDefault(), Z.stopPropagation();
        }),
        s(NZ, IU).set(l, U),
        b((d = NZ), $i, UM).call(d);
    }),
    (qi = new WeakSet()),
    (lM = function (U) {
      var l;
      s(this, IU).delete(U),
        s(this, IU).size === 0 &&
          ((l = s(this, Qt)) == null || l.abort(), e(this, Qt, null));
    }),
    ($i = new WeakSet()),
    (UM = function () {
      if (s(this, Qt)) return;
      e(this, Qt, new AbortController());
      const { signal: U } = s(this, Qt),
        l = (t, F) => {
          F.append(t),
            (t.style.width = ''),
            (t.style.height = ''),
            t.classList.remove('active');
        };
      document.addEventListener(
        'pointerup',
        () => {
          s(this, IU).forEach(l);
        },
        { signal: U },
      );
      var d, Z;
      document.addEventListener(
        'selectionchange',
        () => {
          const t = document.getSelection();
          if (t.rangeCount === 0) {
            s(this, IU).forEach(l);
            return;
          }
          const F = new Set();
          for (let i = 0; i < t.rangeCount; i++) {
            const h = t.getRangeAt(i);
            for (const N of s(this, IU).keys())
              !F.has(N) && h.intersectsNode(N) && F.add(N);
          }
          for (const [i, h] of s(this, IU))
            F.has(i) ? h.classList.add('active') : l(h, i);
          if (
            (d ??
              (d =
                getComputedStyle(
                  s(this, IU).values().next().value,
                ).getPropertyValue('-moz-user-select') === 'none'),
            d)
          )
            return;
          const c = t.getRangeAt(0),
            n =
              Z &&
              (c.compareBoundaryPoints(Range.END_TO_END, Z) === 0 ||
                c.compareBoundaryPoints(Range.START_TO_END, Z) === 0);
          let V = n ? c.startContainer : c.endContainer;
          V.nodeType === Node.TEXT_NODE && (V = V.parentNode);
          const W = V.parentElement.closest('.textLayer'),
            a = s(this, IU).get(W);
          a &&
            ((a.style.width = W.style.width),
            (a.style.height = W.style.height),
            V.parentElement.insertBefore(a, n ? V : V.nextSibling)),
            (Z = c.cloneRange());
        },
        { signal: U },
      );
    }),
    R(NZ, qi),
    R(NZ, $i),
    R(NZ, IU, new Map()),
    R(NZ, Qt, null);
  let jW = NZ;
  class lm {
    constructor({
      pdfPage: U,
      annotationStorage: l = null,
      linkService: d,
      xfaHtml: Z = null,
    }) {
      (this.pdfPage = U),
        (this.annotationStorage = l),
        (this.linkService = d),
        (this.xfaHtml = Z),
        (this.div = null),
        (this._cancelled = !1);
    }
    async render(U, l = 'display') {
      if (l === 'print') {
        const t = {
          viewport: U.clone({ dontFlip: !0 }),
          div: this.div,
          xfaHtml: this.xfaHtml,
          annotationStorage: this.annotationStorage,
          linkService: this.linkService,
          intent: l,
        };
        return (
          (this.div = document.createElement('div')),
          (t.div = this.div),
          IN.render(t)
        );
      }
      const d = await this.pdfPage.getXfa();
      if (this._cancelled || !d) return { textDivs: [] };
      const Z = {
        viewport: U.clone({ dontFlip: !0 }),
        div: this.div,
        xfaHtml: d,
        annotationStorage: this.annotationStorage,
        linkService: this.linkService,
        intent: l,
      };
      return this.div
        ? IN.update(Z)
        : ((this.div = document.createElement('div')),
          (Z.div = this.div),
          IN.render(Z));
    }
    cancel() {
      this._cancelled = !0;
    }
    hide() {
      this.div && (this.div.hidden = !0);
    }
  }
  const GS = {
      annotationEditorUIManager: null,
      annotationStorage: null,
      downloadManager: null,
      enableScripting: !1,
      fieldObjectsPromise: null,
      findController: null,
      hasJSActionsPromise: null,
      get linkService() {
        return new kN();
      },
    },
    TS = new Map([
      ['canvasWrapper', 0],
      ['textLayer', 1],
      ['annotationLayer', 2],
      ['annotationEditorLayer', 3],
      ['xfaLayer', 3],
    ]);
  class Um {
    constructor(U) {
      R(this, at);
      R(this, Hc);
      R(this, fF);
      R(this, JV);
      R(this, GV);
      R(this, TV);
      R(this, SV);
      R(this, XV);
      R(this, lR);
      R(this, UR);
      R(this, YV);
      R(this, KF, kd.ENABLE_FORMS);
      R(this, mV, !1);
      R(this, vF, !1);
      R(this, nt, null);
      R(this, Vt, null);
      R(this, MV, null);
      R(this, HF, null);
      R(this, Kc, ml.INITIAL);
      R(this, vc, Fd.ENABLE);
      R(this, hZ, {
        directDrawing: !0,
        initialOptionalContent: !0,
        regularAnnotations: !0,
      });
      R(this, PF, new WeakMap());
      R(this, Wt, [null, null, null, null]);
      var t;
      const l = U.container,
        d = U.defaultViewport;
      (this.id = U.id),
        (this.renderingId = 'page' + this.id),
        e(this, nt, U.layerProperties || GS),
        (this.pdfPage = null),
        (this.pageLabel = null),
        (this.rotation = 0),
        (this.scale = U.scale || Re),
        (this.viewport = d),
        (this.pdfPageRotate = d.rotation),
        (this._optionalContentConfigPromise =
          U.optionalContentConfigPromise || null),
        e(this, vc, U.textLayerMode ?? Fd.ENABLE),
        e(this, KF, U.annotationMode ?? kd.ENABLE_FORMS),
        (this.imageResourcesPath = U.imageResourcesPath || ''),
        (this.maxCanvasPixels = U.maxCanvasPixels ?? eS.get('maxCanvasPixels')),
        (this.pageColors = U.pageColors || null),
        e(this, mV, U.enableHWA || !1),
        (this.eventBus = U.eventBus),
        (this.renderingQueue = U.renderingQueue),
        (this.l10n = U.l10n),
        this.l10n || (this.l10n = new a0()),
        (this.renderTask = null),
        (this.resume = null),
        (this._isStandalone = !(
          (t = this.renderingQueue) != null && t.hasViewer()
        )),
        (this._container = l),
        (this._annotationCanvasMap = null),
        (this.annotationLayer = null),
        (this.annotationEditorLayer = null),
        (this.textLayer = null),
        (this.zoomLayer = null),
        (this.xfaLayer = null),
        (this.structTreeLayer = null),
        (this.drawLayer = null);
      const Z = document.createElement('div');
      if (
        ((Z.className = 'page'),
        Z.setAttribute('data-page-number', this.id),
        Z.setAttribute('role', 'region'),
        Z.setAttribute('data-l10n-id', 'pdfjs-page-landmark'),
        Z.setAttribute('data-l10n-args', JSON.stringify({ page: this.id })),
        (this.div = Z),
        b(this, Hc, gR).call(this),
        l == null || l.append(Z),
        this._isStandalone)
      ) {
        l == null ||
          l.style.setProperty(
            '--scale-factor',
            this.scale * Dd.PDF_TO_CSS_UNITS,
          );
        const { optionalContentConfigPromise: F } = U;
        F &&
          F.then((c) => {
            F === this._optionalContentConfigPromise &&
              (s(this, hZ).initialOptionalContent = c.hasInitialVisibility);
          }),
          U.l10n || this.l10n.translate(this.div);
      }
    }
    get renderingState() {
      return s(this, Kc);
    }
    set renderingState(U) {
      if (U !== s(this, Kc))
        switch (
          (e(this, Kc, U),
          s(this, Vt) && (clearTimeout(s(this, Vt)), e(this, Vt, null)),
          U)
        ) {
          case ml.PAUSED:
            this.div.classList.remove('loading');
            break;
          case ml.RUNNING:
            this.div.classList.add('loadingIcon'),
              e(
                this,
                Vt,
                setTimeout(() => {
                  this.div.classList.add('loading'), e(this, Vt, null);
                }, 0),
              );
            break;
          case ml.INITIAL:
          case ml.FINISHED:
            this.div.classList.remove('loadingIcon', 'loading');
            break;
        }
    }
    setPdfPage(U) {
      var d, Z, t, F;
      this._isStandalone &&
        (((d = this.pageColors) == null ? void 0 : d.foreground) ===
          'CanvasText' ||
          ((Z = this.pageColors) == null ? void 0 : Z.background) ===
            'Canvas') &&
        ((t = this._container) == null ||
          t.style.setProperty(
            '--hcm-highlight-filter',
            U.filterFactory.addHighlightHCMFilter(
              'highlight',
              'CanvasText',
              'Canvas',
              'HighlightText',
              'Highlight',
            ),
          ),
        (F = this._container) == null ||
          F.style.setProperty(
            '--hcm-highlight-selected-filter',
            U.filterFactory.addHighlightHCMFilter(
              'highlight_selected',
              'CanvasText',
              'Canvas',
              'HighlightText',
              'Highlight',
            ),
          )),
        (this.pdfPage = U),
        (this.pdfPageRotate = U.rotate);
      const l = (this.rotation + this.pdfPageRotate) % 360;
      (this.viewport = U.getViewport({
        scale: this.scale * Dd.PDF_TO_CSS_UNITS,
        rotation: l,
      })),
        b(this, Hc, gR).call(this),
        this.reset();
    }
    destroy() {
      var U;
      this.reset(), (U = this.pdfPage) == null || U.cleanup();
    }
    get _textHighlighter() {
      return CW(
        this,
        '_textHighlighter',
        new JS({
          pageIndex: this.id - 1,
          eventBus: this.eventBus,
          findController: s(this, nt).findController,
        }),
      );
    }
    _resetZoomLayer(U = !1) {
      if (!this.zoomLayer) return;
      const l = this.zoomLayer.firstChild;
      s(this, PF).delete(l),
        (l.width = 0),
        (l.height = 0),
        U && this.zoomLayer.remove(),
        (this.zoomLayer = null);
    }
    reset({
      keepZoomLayer: U = !1,
      keepAnnotationLayer: l = !1,
      keepAnnotationEditorLayer: d = !1,
      keepXfaLayer: Z = !1,
      keepTextLayer: t = !1,
    } = {}) {
      var h, N, M, J, m;
      this.cancelRendering({
        keepAnnotationLayer: l,
        keepAnnotationEditorLayer: d,
        keepXfaLayer: Z,
        keepTextLayer: t,
      }),
        (this.renderingState = ml.INITIAL);
      const F = this.div,
        c = F.childNodes,
        n = (U && this.zoomLayer) || null,
        V =
          (l && ((h = this.annotationLayer) == null ? void 0 : h.div)) || null,
        W =
          (d && ((N = this.annotationEditorLayer) == null ? void 0 : N.div)) ||
          null,
        a = (Z && ((M = this.xfaLayer) == null ? void 0 : M.div)) || null,
        i = (t && ((J = this.textLayer) == null ? void 0 : J.div)) || null;
      for (let G = c.length - 1; G >= 0; G--) {
        const T = c[G];
        switch (T) {
          case n:
          case V:
          case W:
          case a:
          case i:
            continue;
        }
        T.remove();
        const u = s(this, Wt).indexOf(T);
        u >= 0 && (s(this, Wt)[u] = null);
      }
      F.removeAttribute('data-loaded'),
        V && this.annotationLayer.hide(),
        W && this.annotationEditorLayer.hide(),
        a && this.xfaLayer.hide(),
        i && this.textLayer.hide(),
        (m = this.structTreeLayer) == null || m.hide(),
        n ||
          (this.canvas &&
            (s(this, PF).delete(this.canvas),
            (this.canvas.width = 0),
            (this.canvas.height = 0),
            delete this.canvas),
          this._resetZoomLayer());
    }
    update({
      scale: U = 0,
      rotation: l = null,
      optionalContentConfigPromise: d = null,
      drawingDelay: Z = -1,
    }) {
      var F;
      (this.scale = U || this.scale),
        typeof l == 'number' && (this.rotation = l),
        d instanceof Promise &&
          ((this._optionalContentConfigPromise = d),
          d.then((c) => {
            d === this._optionalContentConfigPromise &&
              (s(this, hZ).initialOptionalContent = c.hasInitialVisibility);
          })),
        (s(this, hZ).directDrawing = !0);
      const t = (this.rotation + this.pdfPageRotate) % 360;
      if (
        ((this.viewport = this.viewport.clone({
          scale: this.scale * Dd.PDF_TO_CSS_UNITS,
          rotation: t,
        })),
        b(this, Hc, gR).call(this),
        this._isStandalone &&
          ((F = this._container) == null ||
            F.style.setProperty('--scale-factor', this.viewport.scale)),
        this.canvas)
      ) {
        let c = !1;
        if (s(this, vF)) {
          if (this.maxCanvasPixels === 0) c = !0;
          else if (this.maxCanvasPixels > 0) {
            const { width: V, height: W } = this.viewport,
              { sx: a, sy: i } = this.outputScale;
            c =
              ((Math.floor(V) * a) | 0) * ((Math.floor(W) * i) | 0) >
              this.maxCanvasPixels;
          }
        }
        const n = Z >= 0 && Z < 1e3;
        if (n || c) {
          if (
            (n &&
              !c &&
              this.renderingState !== ml.FINISHED &&
              (this.cancelRendering({
                keepZoomLayer: !0,
                keepAnnotationLayer: !0,
                keepAnnotationEditorLayer: !0,
                keepXfaLayer: !0,
                keepTextLayer: !0,
                cancelExtraDelay: Z,
              }),
              (this.renderingState = ml.FINISHED),
              (s(this, hZ).directDrawing = !1)),
            this.cssTransform({
              target: this.canvas,
              redrawAnnotationLayer: !0,
              redrawAnnotationEditorLayer: !0,
              redrawXfaLayer: !0,
              redrawTextLayer: !n,
              hideTextLayer: n,
            }),
            n)
          )
            return;
          this.eventBus.dispatch('pagerendered', {
            source: this,
            pageNumber: this.id,
            cssTransform: !0,
            timestamp: performance.now(),
            error: s(this, HF),
          });
          return;
        }
        !this.zoomLayer &&
          !this.canvas.hidden &&
          ((this.zoomLayer = this.canvas.parentNode),
          (this.zoomLayer.style.position = 'absolute'));
      }
      this.zoomLayer &&
        this.cssTransform({ target: this.zoomLayer.firstChild }),
        this.reset({
          keepZoomLayer: !0,
          keepAnnotationLayer: !0,
          keepAnnotationEditorLayer: !0,
          keepXfaLayer: !0,
          keepTextLayer: !0,
        });
    }
    cancelRendering({
      keepAnnotationLayer: U = !1,
      keepAnnotationEditorLayer: l = !1,
      keepXfaLayer: d = !1,
      keepTextLayer: Z = !1,
      cancelExtraDelay: t = 0,
    } = {}) {
      var F;
      this.renderTask && (this.renderTask.cancel(t), (this.renderTask = null)),
        (this.resume = null),
        this.textLayer &&
          (!Z || !this.textLayer.div) &&
          (this.textLayer.cancel(), (this.textLayer = null)),
        this.structTreeLayer &&
          !this.textLayer &&
          (this.structTreeLayer = null),
        this.annotationLayer &&
          (!U || !this.annotationLayer.div) &&
          (this.annotationLayer.cancel(),
          (this.annotationLayer = null),
          (this._annotationCanvasMap = null)),
        this.annotationEditorLayer &&
          (!l || !this.annotationEditorLayer.div) &&
          (this.drawLayer && (this.drawLayer.cancel(), (this.drawLayer = null)),
          this.annotationEditorLayer.cancel(),
          (this.annotationEditorLayer = null)),
        this.xfaLayer &&
          (!d || !this.xfaLayer.div) &&
          (this.xfaLayer.cancel(),
          (this.xfaLayer = null),
          (F = this._textHighlighter) == null || F.disable());
    }
    cssTransform({
      target: U,
      redrawAnnotationLayer: l = !1,
      redrawAnnotationEditorLayer: d = !1,
      redrawXfaLayer: Z = !1,
      redrawTextLayer: t = !1,
      hideTextLayer: F = !1,
    }) {
      var n;
      if (!U.hasAttribute('zooming')) {
        U.setAttribute('zooming', !0);
        const { style: V } = U;
        V.width = V.height = '';
      }
      const c = s(this, PF).get(U);
      if (this.viewport !== c) {
        const V = this.viewport.rotation - c.rotation,
          W = Math.abs(V);
        let a = 1,
          i = 1;
        if (W === 90 || W === 270) {
          const { width: h, height: N } = this.viewport;
          (a = N / h), (i = h / N);
        }
        U.style.transform = `rotate(${V}deg) scale(${a}, ${i})`;
      }
      l && this.annotationLayer && b(this, JV, sb).call(this),
        d &&
          this.annotationEditorLayer &&
          (this.drawLayer && b(this, TV, nb).call(this),
          b(this, GV, Qb).call(this)),
        Z && this.xfaLayer && b(this, SV, Vb).call(this),
        this.textLayer &&
          (F
            ? (this.textLayer.hide(),
              (n = this.structTreeLayer) == null || n.hide())
            : t && b(this, XV, Wb).call(this));
    }
    get width() {
      return this.viewport.width;
    }
    get height() {
      return this.viewport.height;
    }
    getPagePoint(U, l) {
      return this.viewport.convertToPdfPoint(U, l);
    }
    async draw() {
      this.renderingState !== ml.INITIAL &&
        (console.error('Must be in new state before drawing'), this.reset());
      const { div: U, l10n: l, pageColors: d, pdfPage: Z, viewport: t } = this;
      if (!Z)
        throw (
          ((this.renderingState = ml.FINISHED),
          new Error('pdfPage is not loaded'))
        );
      this.renderingState = ml.RUNNING;
      const F = document.createElement('div');
      if (
        (F.classList.add('canvasWrapper'),
        b(this, at, ns).call(this, F, 'canvasWrapper'),
        !this.textLayer &&
          s(this, vc) !== Fd.DISABLE &&
          !Z.isPureXfa &&
          (this._accessibilityManager ||
            (this._accessibilityManager = new ON()),
          (this.textLayer = new jW({
            pdfPage: Z,
            highlighter: this._textHighlighter,
            accessibilityManager: this._accessibilityManager,
            enablePermissions: s(this, vc) === Fd.ENABLE_PERMISSIONS,
            onAppend: (S) => {
              this.l10n.pause(),
                b(this, at, ns).call(this, S, 'textLayer'),
                this.l10n.resume();
            },
          }))),
        !this.annotationLayer && s(this, KF) !== kd.DISABLE)
      ) {
        const {
          annotationStorage: S,
          annotationEditorUIManager: p,
          downloadManager: L,
          enableScripting: Y,
          fieldObjectsPromise: o,
          hasJSActionsPromise: y,
          linkService: D,
        } = s(this, nt);
        this._annotationCanvasMap || (this._annotationCanvasMap = new Map()),
          (this.annotationLayer = new ye({
            pdfPage: Z,
            annotationStorage: S,
            imageResourcesPath: this.imageResourcesPath,
            renderForms: s(this, KF) === kd.ENABLE_FORMS,
            linkService: D,
            downloadManager: L,
            enableScripting: Y,
            hasJSActionsPromise: y,
            fieldObjectsPromise: o,
            annotationCanvasMap: this._annotationCanvasMap,
            accessibilityManager: this._accessibilityManager,
            annotationEditorUIManager: p,
            onAppend: (I) => {
              b(this, at, ns).call(this, I, 'annotationLayer');
            },
          }));
      }
      const c = (S) => {
          if (
            (i == null || i(!1),
            this.renderingQueue && !this.renderingQueue.isHighestPriority(this))
          ) {
            (this.renderingState = ml.PAUSED),
              (this.resume = () => {
                (this.renderingState = ml.RUNNING), S();
              });
            return;
          }
          S();
        },
        { width: n, height: V } = t,
        W = document.createElement('canvas');
      W.setAttribute('role', 'presentation'), (W.hidden = !0);
      const a = !!(d != null && d.background && d != null && d.foreground);
      let i = (S) => {
        (!a || S) && ((W.hidden = !1), (i = null));
      };
      F.append(W), (this.canvas = W);
      const h = W.getContext('2d', {
          alpha: !1,
          willReadFrequently: !s(this, mV),
        }),
        N = (this.outputScale = new uG());
      if (this.maxCanvasPixels === 0) {
        const S = 1 / this.scale;
        (N.sx *= S), (N.sy *= S), e(this, vF, !0);
      } else if (this.maxCanvasPixels > 0) {
        const S = n * V,
          p = Math.sqrt(this.maxCanvasPixels / S);
        N.sx > p || N.sy > p
          ? ((N.sx = p), (N.sy = p), e(this, vF, !0))
          : e(this, vF, !1);
      }
      const M = Me(N.sx),
        J = Me(N.sy);
      (W.width = kW(n * N.sx, M[0])), (W.height = kW(V * N.sy, J[0]));
      const { style: m } = W;
      (m.width = kW(n, M[1]) + 'px'),
        (m.height = kW(V, J[1]) + 'px'),
        s(this, PF).set(W, t);
      const G = N.scaled ? [N.sx, 0, 0, N.sy, 0, 0] : null,
        T = {
          canvasContext: h,
          transform: G,
          viewport: t,
          annotationMode: s(this, KF),
          optionalContentConfigPromise: this._optionalContentConfigPromise,
          annotationCanvasMap: this._annotationCanvasMap,
          pageColors: d,
        },
        u = (this.renderTask = Z.render(T));
      u.onContinue = c;
      const X = u.promise.then(
        async () => {
          var p;
          i == null || i(!0),
            await b(this, YV, ab).call(this, u),
            b(this, XV, Wb).call(this),
            this.annotationLayer && (await b(this, JV, sb).call(this));
          const { annotationEditorUIManager: S } = s(this, nt);
          S &&
            (this.drawLayer ||
              (this.drawLayer = new mS({ pageIndex: this.id })),
            await b(this, TV, nb).call(this),
            this.drawLayer.setParent(F),
            this.annotationEditorLayer ||
              (this.annotationEditorLayer = new bS({
                uiManager: S,
                pdfPage: Z,
                l10n: l,
                accessibilityManager: this._accessibilityManager,
                annotationLayer:
                  (p = this.annotationLayer) == null
                    ? void 0
                    : p.annotationLayer,
                textLayer: this.textLayer,
                drawLayer: this.drawLayer.getDrawLayer(),
                onAppend: (L) => {
                  b(this, at, ns).call(this, L, 'annotationEditorLayer');
                },
              })),
            b(this, GV, Qb).call(this));
        },
        (S) => (
          S instanceof DN || i == null || i(!0),
          b(this, YV, ab).call(this, u, S)
        ),
      );
      if (Z.isPureXfa) {
        if (!this.xfaLayer) {
          const { annotationStorage: S, linkService: p } = s(this, nt);
          this.xfaLayer = new lm({
            pdfPage: Z,
            annotationStorage: S,
            linkService: p,
          });
        }
        b(this, SV, Vb).call(this);
      }
      return (
        U.setAttribute('data-loaded', !0),
        this.eventBus.dispatch('pagerender', {
          source: this,
          pageNumber: this.id,
        }),
        X
      );
    }
    setPageLabel(U) {
      (this.pageLabel = typeof U == 'string' ? U : null),
        this.div.setAttribute(
          'data-l10n-args',
          JSON.stringify({ page: this.pageLabel ?? this.id }),
        ),
        this.pageLabel !== null
          ? this.div.setAttribute('data-page-label', this.pageLabel)
          : this.div.removeAttribute('data-page-label');
    }
    get thumbnailCanvas() {
      const {
        directDrawing: U,
        initialOptionalContent: l,
        regularAnnotations: d,
      } = s(this, hZ);
      return U && l && d ? this.canvas : null;
    }
  }
  (KF = new WeakMap()),
    (mV = new WeakMap()),
    (vF = new WeakMap()),
    (nt = new WeakMap()),
    (Vt = new WeakMap()),
    (MV = new WeakMap()),
    (HF = new WeakMap()),
    (Kc = new WeakMap()),
    (vc = new WeakMap()),
    (hZ = new WeakMap()),
    (PF = new WeakMap()),
    (Wt = new WeakMap()),
    (at = new WeakSet()),
    (ns = function (U, l) {
      const d = TS.get(l),
        Z = s(this, Wt)[d];
      if (((s(this, Wt)[d] = U), Z)) {
        Z.replaceWith(U);
        return;
      }
      for (let t = d - 1; t >= 0; t--) {
        const F = s(this, Wt)[t];
        if (F) {
          F.after(U);
          return;
        }
      }
      this.div.prepend(U);
    }),
    (Hc = new WeakSet()),
    (gR = function () {
      const { viewport: U } = this;
      if (this.pdfPage) {
        if (s(this, MV) === U.rotation) return;
        e(this, MV, U.rotation);
      }
      NT(this.div, U, !0, !1);
    }),
    (fF = new WeakSet()),
    (tW = function (U, l) {
      this.eventBus.dispatch(U, {
        source: this,
        pageNumber: this.id,
        error: l,
      });
    }),
    (JV = new WeakSet()),
    (sb = async function () {
      let U = null;
      try {
        await this.annotationLayer.render(this.viewport, 'display');
      } catch (l) {
        console.error(`#renderAnnotationLayer: "${l}".`), (U = l);
      } finally {
        b(this, fF, tW).call(this, 'annotationlayerrendered', U);
      }
    }),
    (GV = new WeakSet()),
    (Qb = async function () {
      let U = null;
      try {
        await this.annotationEditorLayer.render(this.viewport, 'display');
      } catch (l) {
        console.error(`#renderAnnotationEditorLayer: "${l}".`), (U = l);
      } finally {
        b(this, fF, tW).call(this, 'annotationeditorlayerrendered', U);
      }
    }),
    (TV = new WeakSet()),
    (nb = async function () {
      try {
        await this.drawLayer.render('display');
      } catch (U) {
        console.error(`#renderDrawLayer: "${U}".`);
      }
    }),
    (SV = new WeakSet()),
    (Vb = async function () {
      var l;
      let U = null;
      try {
        const d = await this.xfaLayer.render(this.viewport, 'display');
        d != null &&
          d.textDivs &&
          this._textHighlighter &&
          b(this, UR, ZM).call(this, d.textDivs);
      } catch (d) {
        console.error(`#renderXfaLayer: "${d}".`), (U = d);
      } finally {
        (l = this.xfaLayer) != null &&
          l.div &&
          (this.l10n.pause(),
          b(this, at, ns).call(this, this.xfaLayer.div, 'xfaLayer'),
          this.l10n.resume()),
          b(this, fF, tW).call(this, 'xfalayerrendered', U);
      }
    }),
    (XV = new WeakSet()),
    (Wb = async function () {
      if (!this.textLayer) return;
      let U = null;
      try {
        await this.textLayer.render(this.viewport);
      } catch (l) {
        if (l instanceof cT) return;
        console.error(`#renderTextLayer: "${l}".`), (U = l);
      }
      b(this, fF, tW).call(this, 'textlayerrendered', U),
        b(this, lR, dM).call(this);
    }),
    (lR = new WeakSet()),
    (dM = async function () {
      var d, Z, t;
      if (!this.textLayer) return;
      this.structTreeLayer || (this.structTreeLayer = new $e());
      const U = await (this.structTreeLayer.renderingDone
          ? null
          : this.pdfPage.getStructTree()),
        l = (d = this.structTreeLayer) == null ? void 0 : d.render(U);
      l &&
        (this.l10n.pause(),
        (Z = this.canvas) == null || Z.append(l),
        this.l10n.resume()),
        (t = this.structTreeLayer) == null || t.show();
    }),
    (UR = new WeakSet()),
    (ZM = async function (U) {
      const l = await this.pdfPage.getTextContent(),
        d = [];
      for (const Z of l.items) d.push(Z.str);
      this._textHighlighter.setTextMapping(U, d),
        this._textHighlighter.enable();
    }),
    (YV = new WeakSet()),
    (ab = async function (U, l = null) {
      if (
        (U === this.renderTask && (this.renderTask = null), l instanceof DN)
      ) {
        e(this, HF, null);
        return;
      }
      if (
        (e(this, HF, l),
        (this.renderingState = ml.FINISHED),
        this._resetZoomLayer(!0),
        (s(this, hZ).regularAnnotations = !U.separateAnnots),
        this.eventBus.dispatch('pagerendered', {
          source: this,
          pageNumber: this.id,
          cssTransform: !1,
          timestamp: performance.now(),
          error: s(this, HF),
        }),
        l)
      )
        throw l;
    });
  async function SS(Q) {
    const U = '',
      l = U.split('#', 1)[0];
    let {
      info: d,
      metadata: Z,
      contentDispositionFilename: t,
      contentLength: F,
    } = await Q.getMetadata();
    if (!F) {
      const { length: c } = await Q.getDownloadInfo();
      F = c;
    }
    return {
      ...d,
      baseURL: l,
      filesize: F,
      filename: t || aT(U),
      metadata: Z == null ? void 0 : Z.getRaw(),
      authors: Z == null ? void 0 : Z.get('dc:creator'),
      numPages: Q.numPages,
      URL: U,
    };
  }
  class XS {
    constructor(U) {
      this._ready = new Promise((l, d) => {
        import(U)
          .then((t) => {
            l(t.QuickJSSandbox());
          })
          .catch(d);
      });
    }
    async createSandbox(U) {
      (await this._ready).create(U);
    }
    async dispatchEventInSandbox(U) {
      const l = await this._ready;
      setTimeout(() => l.dispatchEvent(U), 0);
    }
    async destroySandbox() {
      (await this._ready).nukeSandbox();
    }
  }
  class YS {
    constructor({
      eventBus: U,
      externalServices: l = null,
      docProperties: d = null,
    }) {
      R(this, dR);
      R(this, fc);
      R(this, oV);
      R(this, ZR);
      R(this, $F);
      R(this, Yd, null);
      R(this, AF, null);
      R(this, uV, null);
      R(this, _F, null);
      R(this, qF, null);
      R(this, pV, null);
      R(this, cU, null);
      R(this, bZ, null);
      R(this, Pc, !1);
      R(this, Il, null);
      R(this, EU, null);
      e(this, qF, U), e(this, pV, l), e(this, uV, d);
    }
    setViewer(U) {
      e(this, bZ, U);
    }
    async setDocument(U) {
      var c;
      if (
        (s(this, cU) && (await b(this, $F, FW).call(this)), e(this, cU, U), !U)
      )
        return;
      const [l, d, Z] = await Promise.all([
        U.getFieldObjects(),
        U.getCalculationOrderIds(),
        U.getJSActions(),
      ]);
      if (!l && !Z) {
        await b(this, $F, FW).call(this);
        return;
      }
      if (U !== s(this, cU)) return;
      try {
        e(this, Il, b(this, ZR, FM).call(this));
      } catch (n) {
        console.error(`setDocument: "${n.message}".`),
          await b(this, $F, FW).call(this);
        return;
      }
      const t = s(this, qF);
      e(this, _F, new AbortController());
      const { signal: F } = s(this, _F);
      t._on(
        'updatefromsandbox',
        (n) => {
          (n == null ? void 0 : n.source) === window &&
            b(this, dR, tM).call(this, n.detail);
        },
        { signal: F },
      ),
        t._on(
          'dispatcheventinsandbox',
          (n) => {
            var V;
            (V = s(this, Il)) == null || V.dispatchEventInSandbox(n.detail);
          },
          { signal: F },
        ),
        t._on(
          'pagechanging',
          ({ pageNumber: n, previous: V }) => {
            n !== V &&
              (b(this, oV, ib).call(this, V), b(this, fc, KR).call(this, n));
          },
          { signal: F },
        ),
        t._on(
          'pagerendered',
          ({ pageNumber: n }) => {
            this._pageOpenPending.has(n) &&
              n === s(this, bZ).currentPageNumber &&
              b(this, fc, KR).call(this, n);
          },
          { signal: F },
        ),
        t._on(
          'pagesdestroy',
          async () => {
            var n, V;
            await b(this, oV, ib).call(this, s(this, bZ).currentPageNumber),
              await ((n = s(this, Il)) == null
                ? void 0
                : n.dispatchEventInSandbox({ id: 'doc', name: 'WillClose' })),
              (V = s(this, Yd)) == null || V.resolve();
          },
          { signal: F },
        );
      try {
        const n = await s(this, uV).call(this, U);
        if (U !== s(this, cU)) return;
        await s(this, Il).createSandbox({
          objects: l,
          calculationOrder: d,
          appInfo: {
            platform: navigator.platform,
            language: navigator.language,
          },
          docInfo: { ...n, actions: Z },
        }),
          t.dispatch('sandboxcreated', { source: this });
      } catch (n) {
        console.error(`setDocument: "${n.message}".`),
          await b(this, $F, FW).call(this);
        return;
      }
      await ((c = s(this, Il)) == null
        ? void 0
        : c.dispatchEventInSandbox({ id: 'doc', name: 'Open' })),
        await b(this, fc, KR).call(this, s(this, bZ).currentPageNumber, !0),
        Promise.resolve().then(() => {
          U === s(this, cU) && e(this, Pc, !0);
        });
    }
    async dispatchWillSave() {
      var U;
      return (U = s(this, Il)) == null
        ? void 0
        : U.dispatchEventInSandbox({ id: 'doc', name: 'WillSave' });
    }
    async dispatchDidSave() {
      var U;
      return (U = s(this, Il)) == null
        ? void 0
        : U.dispatchEventInSandbox({ id: 'doc', name: 'DidSave' });
    }
    async dispatchWillPrint() {
      var U;
      if (s(this, Il)) {
        await ((U = s(this, EU)) == null ? void 0 : U.promise),
          e(this, EU, Promise.withResolvers());
        try {
          await s(this, Il).dispatchEventInSandbox({
            id: 'doc',
            name: 'WillPrint',
          });
        } catch (l) {
          throw (s(this, EU).resolve(), e(this, EU, null), l);
        }
        await s(this, EU).promise;
      }
    }
    async dispatchDidPrint() {
      var U;
      return (U = s(this, Il)) == null
        ? void 0
        : U.dispatchEventInSandbox({ id: 'doc', name: 'DidPrint' });
    }
    get destroyPromise() {
      var U;
      return ((U = s(this, AF)) == null ? void 0 : U.promise) || null;
    }
    get ready() {
      return s(this, Pc);
    }
    get _pageOpenPending() {
      return CW(this, '_pageOpenPending', new Set());
    }
    get _visitedPages() {
      return CW(this, '_visitedPages', new Map());
    }
  }
  (Yd = new WeakMap()),
    (AF = new WeakMap()),
    (uV = new WeakMap()),
    (_F = new WeakMap()),
    (qF = new WeakMap()),
    (pV = new WeakMap()),
    (cU = new WeakMap()),
    (bZ = new WeakMap()),
    (Pc = new WeakMap()),
    (Il = new WeakMap()),
    (EU = new WeakMap()),
    (dR = new WeakSet()),
    (tM = async function (U) {
      var V, W;
      const l = s(this, bZ),
        d = l.isInPresentationMode || l.isChangingPresentationMode,
        { id: Z, siblings: t, command: F, value: c } = U;
      if (!Z) {
        switch (F) {
          case 'clear':
            console.clear();
            break;
          case 'error':
            console.error(c);
            break;
          case 'layout':
            if (!d) {
              const a = IG(c);
              l.spreadMode = a.spreadMode;
            }
            break;
          case 'page-num':
            l.currentPageNumber = c + 1;
            break;
          case 'print':
            await l.pagesPromise,
              s(this, qF).dispatch('print', { source: this });
            break;
          case 'println':
            console.log(c);
            break;
          case 'zoom':
            d || (l.currentScaleValue = c);
            break;
          case 'SaveAs':
            s(this, qF).dispatch('download', { source: this });
            break;
          case 'FirstPage':
            l.currentPageNumber = 1;
            break;
          case 'LastPage':
            l.currentPageNumber = l.pagesCount;
            break;
          case 'NextPage':
            l.nextPage();
            break;
          case 'PrevPage':
            l.previousPage();
            break;
          case 'ZoomViewIn':
            d || l.increaseScale();
            break;
          case 'ZoomViewOut':
            d || l.decreaseScale();
            break;
          case 'WillPrintFinished':
            (V = s(this, EU)) == null || V.resolve(), e(this, EU, null);
            break;
        }
        return;
      }
      if (d && U.focus) return;
      delete U.id, delete U.siblings;
      const n = t ? [Z, ...t] : [Z];
      for (const a of n) {
        const i = document.querySelector(`[data-element-id="${a}"]`);
        i
          ? i.dispatchEvent(new CustomEvent('updatefromsandbox', { detail: U }))
          : (W = s(this, cU)) == null || W.annotationStorage.setValue(a, U);
      }
    }),
    (fc = new WeakSet()),
    (KR = async function (U, l = !1) {
      const d = s(this, cU),
        Z = this._visitedPages;
      if ((l && e(this, Yd, Promise.withResolvers()), !s(this, Yd))) return;
      const t = s(this, bZ).getPageView(U - 1);
      if ((t == null ? void 0 : t.renderingState) !== ml.FINISHED) {
        this._pageOpenPending.add(U);
        return;
      }
      this._pageOpenPending.delete(U);
      const F = (async () => {
        var n, V;
        const c = await (Z.has(U)
          ? null
          : (n = t.pdfPage) == null
            ? void 0
            : n.getJSActions());
        d === s(this, cU) &&
          (await ((V = s(this, Il)) == null
            ? void 0
            : V.dispatchEventInSandbox({
                id: 'page',
                name: 'PageOpen',
                pageNumber: U,
                actions: c,
              })));
      })();
      Z.set(U, F);
    }),
    (oV = new WeakSet()),
    (ib = async function (U) {
      var t;
      const l = s(this, cU),
        d = this._visitedPages;
      if (!s(this, Yd) || this._pageOpenPending.has(U)) return;
      const Z = d.get(U);
      Z &&
        (d.set(U, null),
        await Z,
        l === s(this, cU) &&
          (await ((t = s(this, Il)) == null
            ? void 0
            : t.dispatchEventInSandbox({
                id: 'page',
                name: 'PageClose',
                pageNumber: U,
              }))));
    }),
    (ZR = new WeakSet()),
    (FM = function () {
      if ((e(this, AF, Promise.withResolvers()), s(this, Il)))
        throw new Error('#initScripting: Scripting already exists.');
      return s(this, pV).createScripting();
    }),
    ($F = new WeakSet()),
    (FW = async function () {
      var U, l, d, Z;
      if (!s(this, Il)) {
        e(this, cU, null), (U = s(this, AF)) == null || U.resolve();
        return;
      }
      s(this, Yd) &&
        (await Promise.race([
          s(this, Yd).promise,
          new Promise((t) => {
            setTimeout(t, 1e3);
          }),
        ]).catch(() => {}),
        e(this, Yd, null)),
        e(this, cU, null);
      try {
        await s(this, Il).destroySandbox();
      } catch {}
      (l = s(this, EU)) == null || l.reject(new Error('Scripting destroyed.')),
        e(this, EU, null),
        (d = s(this, _F)) == null || d.abort(),
        e(this, _F, null),
        this._pageOpenPending.clear(),
        this._visitedPages.clear(),
        e(this, Il, null),
        e(this, Pc, !1),
        (Z = s(this, AF)) == null || Z.resolve();
    });
  class uS extends YS {
    constructor(U) {
      U.externalServices ||
        window.addEventListener('updatefromsandbox', (l) => {
          U.eventBus.dispatch('updatefromsandbox', {
            source: window,
            detail: l.detail,
          });
        }),
        U.externalServices ||
          (U.externalServices = {
            createScripting: () => new XS(U.sandboxBundleSrc),
          }),
        U.docProperties || (U.docProperties = (l) => SS(l)),
        super(U);
    }
  }
  const pS = 3e4;
  class oS {
    constructor() {
      (this.pdfViewer = null),
        (this.pdfThumbnailViewer = null),
        (this.onIdle = null),
        (this.highestPriorityPage = null),
        (this.idleTimeout = null),
        (this.printing = !1),
        (this.isThumbnailViewEnabled = !1),
        Object.defineProperty(this, 'hasViewer', {
          value: () => !!this.pdfViewer,
        });
    }
    setViewer(U) {
      this.pdfViewer = U;
    }
    setThumbnailViewer(U) {
      this.pdfThumbnailViewer = U;
    }
    isHighestPriority(U) {
      return this.highestPriorityPage === U.renderingId;
    }
    renderHighestPriority(U) {
      var l;
      this.idleTimeout &&
        (clearTimeout(this.idleTimeout), (this.idleTimeout = null)),
        !this.pdfViewer.forceRendering(U) &&
          ((this.isThumbnailViewEnabled &&
            (l = this.pdfThumbnailViewer) != null &&
            l.forceRendering()) ||
            this.printing ||
            (this.onIdle &&
              (this.idleTimeout = setTimeout(this.onIdle.bind(this), pS))));
    }
    getHighestPriority(U, l, d, Z = !1) {
      const t = U.views,
        F = t.length;
      if (F === 0) return null;
      for (let a = 0; a < F; a++) {
        const i = t[a].view;
        if (!this.isViewFinished(i)) return i;
      }
      const c = U.first.id,
        n = U.last.id;
      if (n - c + 1 > F) {
        const a = U.ids;
        for (let i = 1, h = n - c; i < h; i++) {
          const N = d ? c + i : n - i;
          if (a.has(N)) continue;
          const M = l[N - 1];
          if (!this.isViewFinished(M)) return M;
        }
      }
      let V = d ? n : c - 2,
        W = l[V];
      return (W && !this.isViewFinished(W)) ||
        (Z && ((V += d ? 1 : -1), (W = l[V]), W && !this.isViewFinished(W)))
        ? W
        : null;
    }
    isViewFinished(U) {
      return U.renderingState === ml.FINISHED;
    }
    renderView(U) {
      switch (U.renderingState) {
        case ml.FINISHED:
          return !1;
        case ml.PAUSED:
          (this.highestPriorityPage = U.renderingId), U.resume();
          break;
        case ml.RUNNING:
          this.highestPriorityPage = U.renderingId;
          break;
        case ml.INITIAL:
          (this.highestPriorityPage = U.renderingId),
            U.draw()
              .finally(() => {
                this.renderHighestPriority();
              })
              .catch((l) => {
                l instanceof DN || console.error(`renderView: "${l}"`);
              });
          break;
      }
      return !0;
    }
  }
  const dm = 10,
    OW = {
      FORCE_SCROLL_MODE_PAGE: 1e4,
      FORCE_LAZY_PAGE_INIT: 5e3,
      PAUSE_EAGER_PAGE_INIT: 250,
    };
  function Zm(Q) {
    return Object.values(XZ).includes(Q) && Q !== XZ.DISABLE;
  }
  class BS {
    constructor(U) {
      R(this, BV);
      R(this, eZ, new Set());
      R(this, l0, 0);
      e(this, l0, U);
    }
    push(U) {
      const l = s(this, eZ);
      l.has(U) && l.delete(U),
        l.add(U),
        l.size > s(this, l0) && b(this, BV, Rb).call(this);
    }
    resize(U, l = null) {
      e(this, l0, U);
      const d = s(this, eZ);
      if (l) {
        const Z = d.size;
        let t = 1;
        for (const F of d)
          if ((l.has(F.id) && (d.delete(F), d.add(F)), ++t > Z)) break;
      }
      for (; d.size > s(this, l0); ) b(this, BV, Rb).call(this);
    }
    has(U) {
      return s(this, eZ).has(U);
    }
    [Symbol.iterator]() {
      return s(this, eZ).keys();
    }
  }
  (eZ = new WeakMap()),
    (l0 = new WeakMap()),
    (BV = new WeakSet()),
    (Rb = function () {
      const U = s(this, eZ).keys().next().value;
      U == null || U.destroy(), s(this, eZ).delete(U);
    });
  class tm {
    constructor(U) {
      R(this, tR);
      R(this, FR);
      R(this, cR);
      R(this, t0);
      R(this, ls);
      R(this, sR);
      R(this, rV);
      R(this, QR);
      R(this, ud);
      R(this, wV);
      R(this, nR);
      R(this, VR);
      R(this, xV);
      R(this, WR);
      R(this, it, null);
      R(this, yV, null);
      R(this, LV, null);
      R(this, mZ, XZ.NONE);
      R(this, lU, null);
      R(this, U0, kd.ENABLE_FORMS);
      R(this, zV, null);
      R(this, kV, !1);
      R(this, DV, !1);
      R(this, IV, !1);
      R(this, d0, null);
      R(this, EV, null);
      R(this, Ac, !1);
      R(this, Rt, null);
      R(this, _c, !1);
      R(this, CV, 0);
      R(this, qc, new ResizeObserver(b(this, WR, iM).bind(this)));
      R(this, Z0, null);
      R(this, Nt, null);
      R(this, $c, Fd.ENABLE);
      var Z, t;
      const l = '4.4.168';
      if (Be !== l)
        throw new Error(
          `The API version "${Be}" does not match the Viewer version "${l}".`,
        );
      if (
        ((this.container = U.container),
        (this.viewer = U.viewer || U.container.firstElementChild),
        ((Z = this.container) == null ? void 0 : Z.tagName) !== 'DIV' ||
          ((t = this.viewer) == null ? void 0 : t.tagName) !== 'DIV')
      )
        throw new Error('Invalid `container` and/or `viewer` option.');
      if (
        this.container.offsetParent &&
        getComputedStyle(this.container).position !== 'absolute'
      )
        throw new Error('The `container` must be absolutely positioned.');
      s(this, qc).observe(this.container),
        (this.eventBus = U.eventBus),
        (this.linkService = U.linkService || new kN()),
        (this.downloadManager = U.downloadManager || null),
        (this.findController = U.findController || null),
        e(this, yV, U.altTextManager || null),
        this.findController &&
          (this.findController.onIsPageVisible = (F) =>
            this._getVisiblePages().ids.has(F)),
        (this._scriptingManager = U.scriptingManager || null),
        e(this, $c, U.textLayerMode ?? Fd.ENABLE),
        e(this, U0, U.annotationMode ?? kd.ENABLE_FORMS),
        e(this, mZ, U.annotationEditorMode ?? XZ.NONE),
        e(this, LV, U.annotationEditorHighlightColors || null),
        e(this, DV, U.enableHighlightFloatingButton === !0),
        (this.imageResourcesPath = U.imageResourcesPath || ''),
        (this.enablePrintAutoRotate = U.enablePrintAutoRotate || !1),
        (this.removePageBorders = U.removePageBorders || !1),
        (this.maxCanvasPixels = U.maxCanvasPixels),
        (this.l10n = U.l10n),
        this.l10n || (this.l10n = new a0()),
        e(this, IV, U.enablePermissions || !1),
        (this.pageColors = U.pageColors || null),
        e(this, EV, U.mlManager || null),
        e(this, kV, U.enableHWA || !1),
        (this.defaultRenderingQueue = !U.renderingQueue),
        this.defaultRenderingQueue
          ? ((this.renderingQueue = new oS()),
            this.renderingQueue.setViewer(this))
          : (this.renderingQueue = U.renderingQueue);
      const { abortSignal: d } = U;
      d == null ||
        d.addEventListener(
          'abort',
          () => {
            s(this, qc).disconnect(), e(this, qc, null);
          },
          { once: !0 },
        ),
        (this.scroll = pG(this.container, this._scrollUpdate.bind(this), d)),
        (this.presentationModeState = V0.UNKNOWN),
        this._resetView(),
        this.removePageBorders &&
          this.viewer.classList.add('removePageBorders'),
        b(this, xV, bb).call(this),
        this.eventBus._on(
          'thumbnailrendered',
          ({ pageNumber: F, pdfPage: c }) => {
            const n = this._pages[F - 1];
            s(this, it).has(n) || c == null || c.cleanup();
          },
        ),
        U.l10n || this.l10n.translate(this.container);
    }
    get pagesCount() {
      return this._pages.length;
    }
    getPageView(U) {
      return this._pages[U];
    }
    getCachedPageViews() {
      return new Set(s(this, it));
    }
    get pageViewsReady() {
      return this._pages.every((U) => (U == null ? void 0 : U.pdfPage));
    }
    get renderForms() {
      return s(this, U0) === kd.ENABLE_FORMS;
    }
    get enableScripting() {
      return !!this._scriptingManager;
    }
    get currentPageNumber() {
      return this._currentPageNumber;
    }
    set currentPageNumber(U) {
      if (!Number.isInteger(U)) throw new Error('Invalid page number.');
      this.pdfDocument &&
        (this._setCurrentPageNumber(U, !0) ||
          console.error(`currentPageNumber: "${U}" is not a valid page.`));
    }
    _setCurrentPageNumber(U, l = !1) {
      var Z;
      if (this._currentPageNumber === U)
        return l && b(this, wV, hb).call(this), !0;
      if (!(0 < U && U <= this.pagesCount)) return !1;
      const d = this._currentPageNumber;
      return (
        (this._currentPageNumber = U),
        this.eventBus.dispatch('pagechanging', {
          source: this,
          pageNumber: U,
          pageLabel:
            ((Z = this._pageLabels) == null ? void 0 : Z[U - 1]) ?? null,
          previous: d,
        }),
        l && b(this, wV, hb).call(this),
        !0
      );
    }
    get currentPageLabel() {
      var U;
      return (
        ((U = this._pageLabels) == null
          ? void 0
          : U[this._currentPageNumber - 1]) ?? null
      );
    }
    set currentPageLabel(U) {
      if (!this.pdfDocument) return;
      let l = U | 0;
      if (this._pageLabels) {
        const d = this._pageLabels.indexOf(U);
        d >= 0 && (l = d + 1);
      }
      this._setCurrentPageNumber(l, !0) ||
        console.error(`currentPageLabel: "${U}" is not a valid page.`);
    }
    get currentScale() {
      return this._currentScale !== BN ? this._currentScale : Re;
    }
    set currentScale(U) {
      if (isNaN(U)) throw new Error('Invalid numeric scale.');
      this.pdfDocument && b(this, ud, mt).call(this, U, { noScroll: !1 });
    }
    get currentScaleValue() {
      return this._currentScaleValue;
    }
    set currentScaleValue(U) {
      this.pdfDocument && b(this, ud, mt).call(this, U, { noScroll: !1 });
    }
    get pagesRotation() {
      return this._pagesRotation;
    }
    set pagesRotation(U) {
      if (!Je(U)) throw new Error('Invalid pages rotation angle.');
      if (
        !this.pdfDocument ||
        ((U %= 360), U < 0 && (U += 360), this._pagesRotation === U)
      )
        return;
      this._pagesRotation = U;
      const l = this._currentPageNumber;
      this.refresh(!0, { rotation: U }),
        this._currentScaleValue &&
          b(this, ud, mt).call(this, this._currentScaleValue, { noScroll: !0 }),
        this.eventBus.dispatch('rotationchanging', {
          source: this,
          pagesRotation: U,
          pageNumber: l,
        }),
        this.defaultRenderingQueue && this.update();
    }
    get firstPagePromise() {
      return this.pdfDocument ? this._firstPageCapability.promise : null;
    }
    get onePageRendered() {
      return this.pdfDocument ? this._onePageRenderedCapability.promise : null;
    }
    get pagesPromise() {
      return this.pdfDocument ? this._pagesCapability.promise : null;
    }
    get _layerProperties() {
      const U = this;
      return CW(this, '_layerProperties', {
        get annotationEditorUIManager() {
          return s(U, lU);
        },
        get annotationStorage() {
          var l;
          return (l = U.pdfDocument) == null ? void 0 : l.annotationStorage;
        },
        get downloadManager() {
          return U.downloadManager;
        },
        get enableScripting() {
          return !!U._scriptingManager;
        },
        get fieldObjectsPromise() {
          var l;
          return (l = U.pdfDocument) == null ? void 0 : l.getFieldObjects();
        },
        get findController() {
          return U.findController;
        },
        get hasJSActionsPromise() {
          var l;
          return (l = U.pdfDocument) == null ? void 0 : l.hasJSActions();
        },
        get linkService() {
          return U.linkService;
        },
      });
    }
    async getAllText() {
      const U = [],
        l = [];
      for (let d = 1, Z = this.pdfDocument.numPages; d <= Z; ++d) {
        if (s(this, _c)) return null;
        l.length = 0;
        const t = await this.pdfDocument.getPage(d),
          { items: F } = await t.getTextContent();
        for (const c of F)
          c.str && l.push(c.str),
            c.hasEOL &&
              l.push(`
`);
        U.push(zW(l.join('')));
      }
      return U.join(`
`);
    }
    setDocument(U) {
      var i, h;
      if (
        (this.pdfDocument &&
          (this.eventBus.dispatch('pagesdestroy', { source: this }),
          this._cancelRendering(),
          this._resetView(),
          (i = this.findController) == null || i.setDocument(null),
          (h = this._scriptingManager) == null || h.setDocument(null),
          s(this, lU) && (s(this, lU).destroy(), e(this, lU, null))),
        (this.pdfDocument = U),
        !U)
      )
        return;
      const l = U.numPages,
        d = U.getPage(1),
        Z = U.getOptionalContentConfig({ intent: 'display' }),
        t = s(this, IV) ? U.getPermissions() : Promise.resolve(),
        { eventBus: F, pageColors: c, viewer: n } = this;
      e(this, d0, new AbortController());
      const { signal: V } = s(this, d0);
      if (l > OW.FORCE_SCROLL_MODE_PAGE) {
        console.warn(
          'Forcing PAGE-scrolling for performance reasons, given the length of the document.',
        );
        const N = (this._scrollMode = Ul.PAGE);
        F.dispatch('scrollmodechanged', { source: this, mode: N });
      }
      this._pagesCapability.promise.then(
        () => {
          F.dispatch('pagesloaded', { source: this, pagesCount: l });
        },
        () => {},
      );
      const W = (N) => {
        const M = this._pages[N.pageNumber - 1];
        M && s(this, it).push(M);
      };
      F._on('pagerender', W, { signal: V });
      const a = (N) => {
        N.cssTransform ||
          (this._onePageRenderedCapability.resolve({ timestamp: N.timestamp }),
          F._off('pagerendered', a));
      };
      F._on('pagerendered', a, { signal: V }),
        Promise.all([d, t])
          .then(([N, M]) => {
            var S;
            if (U !== this.pdfDocument) return;
            this._firstPageCapability.resolve(N),
              (this._optionalContentConfigPromise = Z);
            const {
              annotationEditorMode: J,
              annotationMode: m,
              textLayerMode: G,
            } = b(this, tR, cM).call(this, M);
            if (G !== Fd.DISABLE) {
              const p = e(this, Rt, document.createElement('div'));
              (p.id = 'hiddenCopyElement'), n.before(p);
            }
            if (J !== XZ.DISABLE) {
              const p = J;
              U.isPureXfa
                ? console.warn('Warning: XFA-editing is not implemented.')
                : Zm(p)
                  ? (e(
                      this,
                      lU,
                      new QT(
                        this.container,
                        n,
                        s(this, yV),
                        F,
                        U,
                        c,
                        s(this, LV),
                        s(this, DV),
                        s(this, EV),
                      ),
                    ),
                    F.dispatch('annotationeditoruimanager', {
                      source: this,
                      uiManager: s(this, lU),
                    }),
                    p !== XZ.NONE && s(this, lU).updateMode(p))
                  : console.error(`Invalid AnnotationEditor mode: ${p}`);
            }
            const T = this._scrollMode === Ul.PAGE ? null : n,
              u = this.currentScale,
              X = N.getViewport({ scale: u * Dd.PDF_TO_CSS_UNITS });
            n.style.setProperty('--scale-factor', X.scale),
              ((c == null ? void 0 : c.foreground) === 'CanvasText' ||
                (c == null ? void 0 : c.background) === 'Canvas') &&
                (n.style.setProperty(
                  '--hcm-highlight-filter',
                  U.filterFactory.addHighlightHCMFilter(
                    'highlight',
                    'CanvasText',
                    'Canvas',
                    'HighlightText',
                    'Highlight',
                  ),
                ),
                n.style.setProperty(
                  '--hcm-highlight-selected-filter',
                  U.filterFactory.addHighlightHCMFilter(
                    'highlight_selected',
                    'CanvasText',
                    'Canvas',
                    'HighlightText',
                    'ButtonText',
                  ),
                ));
            for (let p = 1; p <= l; ++p) {
              const L = new Um({
                container: T,
                eventBus: F,
                id: p,
                scale: u,
                defaultViewport: X.clone(),
                optionalContentConfigPromise: Z,
                renderingQueue: this.renderingQueue,
                textLayerMode: G,
                annotationMode: m,
                imageResourcesPath: this.imageResourcesPath,
                maxCanvasPixels: this.maxCanvasPixels,
                pageColors: c,
                l10n: this.l10n,
                layerProperties: this._layerProperties,
                enableHWA: s(this, kV),
              });
              this._pages.push(L);
            }
            (S = this._pages[0]) == null || S.setPdfPage(N),
              this._scrollMode === Ul.PAGE
                ? b(this, t0, cW).call(this)
                : this._spreadMode !== _l.NONE && this._updateSpreadMode(),
              b(this, FR, sM)
                .call(this, V)
                .then(async () => {
                  var L, Y;
                  if (U !== this.pdfDocument) return;
                  if (
                    ((L = this.findController) == null || L.setDocument(U),
                    (Y = this._scriptingManager) == null || Y.setDocument(U),
                    s(this, Rt) &&
                      document.addEventListener(
                        'copy',
                        b(this, cR, QM).bind(this, G),
                        { signal: V },
                      ),
                    s(this, lU) &&
                      F.dispatch('annotationeditormodechanged', {
                        source: this,
                        mode: s(this, mZ),
                      }),
                    U.loadingParams.disableAutoFetch ||
                      l > OW.FORCE_LAZY_PAGE_INIT)
                  ) {
                    this._pagesCapability.resolve();
                    return;
                  }
                  let p = l - 1;
                  if (p <= 0) {
                    this._pagesCapability.resolve();
                    return;
                  }
                  for (let o = 2; o <= l; ++o) {
                    const y = U.getPage(o).then(
                      (D) => {
                        const I = this._pages[o - 1];
                        I.pdfPage || I.setPdfPage(D),
                          --p === 0 && this._pagesCapability.resolve();
                      },
                      (D) => {
                        console.error(
                          `Unable to get page ${o} to initialize viewer`,
                          D,
                        ),
                          --p === 0 && this._pagesCapability.resolve();
                      },
                    );
                    o % OW.PAUSE_EAGER_PAGE_INIT === 0 && (await y);
                  }
                }),
              F.dispatch('pagesinit', { source: this }),
              U.getMetadata().then(({ info: p }) => {
                U === this.pdfDocument && p.Language && (n.lang = p.Language);
              }),
              this.defaultRenderingQueue && this.update();
          })
          .catch((N) => {
            console.error('Unable to initialize viewer', N),
              this._pagesCapability.reject(N);
          });
    }
    setPageLabels(U) {
      var l;
      if (this.pdfDocument) {
        U
          ? Array.isArray(U) && this.pdfDocument.numPages === U.length
            ? (this._pageLabels = U)
            : ((this._pageLabels = null),
              console.error('setPageLabels: Invalid page labels.'))
          : (this._pageLabels = null);
        for (let d = 0, Z = this._pages.length; d < Z; d++)
          this._pages[d].setPageLabel(
            ((l = this._pageLabels) == null ? void 0 : l[d]) ?? null,
          );
      }
    }
    _resetView() {
      var U, l;
      (this._pages = []),
        (this._currentPageNumber = 1),
        (this._currentScale = BN),
        (this._currentScaleValue = null),
        (this._pageLabels = null),
        e(this, it, new BS(dm)),
        (this._location = null),
        (this._pagesRotation = 0),
        (this._optionalContentConfigPromise = null),
        (this._firstPageCapability = Promise.withResolvers()),
        (this._onePageRenderedCapability = Promise.withResolvers()),
        (this._pagesCapability = Promise.withResolvers()),
        (this._scrollMode = Ul.VERTICAL),
        (this._previousScrollMode = Ul.UNKNOWN),
        (this._spreadMode = _l.NONE),
        e(this, Z0, { previousPageNumber: 1, scrollDown: !0, pages: [] }),
        (U = s(this, d0)) == null || U.abort(),
        e(this, d0, null),
        (this.viewer.textContent = ''),
        this._updateScrollMode(),
        this.viewer.removeAttribute('lang'),
        (l = s(this, Rt)) == null || l.remove(),
        e(this, Rt, null);
    }
    _scrollUpdate() {
      this.pagesCount !== 0 && this.update();
    }
    pageLabelToPageNumber(U) {
      if (!this._pageLabels) return null;
      const l = this._pageLabels.indexOf(U);
      return l < 0 ? null : l + 1;
    }
    scrollPageIntoView({
      pageNumber: U,
      destArray: l = null,
      allowNegativeOffset: d = !1,
      ignoreDestinationZoom: Z = !1,
    }) {
      if (!this.pdfDocument) return;
      const t = Number.isInteger(U) && this._pages[U - 1];
      if (!t) {
        console.error(
          `scrollPageIntoView: "${U}" is not a valid pageNumber parameter.`,
        );
        return;
      }
      if (this.isInPresentationMode || !l) {
        this._setCurrentPageNumber(U, !0);
        return;
      }
      let F = 0,
        c = 0,
        n = 0,
        V = 0,
        W,
        a;
      const i = t.rotation % 180 !== 0,
        h = (i ? t.height : t.width) / t.scale / Dd.PDF_TO_CSS_UNITS,
        N = (i ? t.width : t.height) / t.scale / Dd.PDF_TO_CSS_UNITS;
      let M = 0;
      switch (l[1].name) {
        case 'XYZ':
          (F = l[2]),
            (c = l[3]),
            (M = l[4]),
            (F = F !== null ? F : 0),
            (c = c !== null ? c : N);
          break;
        case 'Fit':
        case 'FitB':
          M = 'page-fit';
          break;
        case 'FitH':
        case 'FitBH':
          (c = l[2]),
            (M = 'page-width'),
            c === null && this._location
              ? ((F = this._location.left), (c = this._location.top))
              : (typeof c != 'number' || c < 0) && (c = N);
          break;
        case 'FitV':
        case 'FitBV':
          (F = l[2]), (n = h), (V = N), (M = 'page-height');
          break;
        case 'FitR':
          (F = l[2]), (c = l[3]), (n = l[4] - F), (V = l[5] - c);
          let T = he,
            u = be;
          this.removePageBorders && (T = u = 0),
            (W = (this.container.clientWidth - T) / n / Dd.PDF_TO_CSS_UNITS),
            (a = (this.container.clientHeight - u) / V / Dd.PDF_TO_CSS_UNITS),
            (M = Math.min(Math.abs(W), Math.abs(a)));
          break;
        default:
          console.error(
            `scrollPageIntoView: "${l[1].name}" is not a valid destination type.`,
          );
          return;
      }
      if (
        (Z ||
          (M && M !== this._currentScale
            ? (this.currentScaleValue = M)
            : this._currentScale === BN && (this.currentScaleValue = TG)),
        M === 'page-fit' && !l[4])
      ) {
        b(this, ls, vR).call(this, t);
        return;
      }
      const J = [
        t.viewport.convertToViewportPoint(F, c),
        t.viewport.convertToViewportPoint(F + n, c + V),
      ];
      let m = Math.min(J[0][0], J[1][0]),
        G = Math.min(J[0][1], J[1][1]);
      d || ((m = Math.max(m, 0)), (G = Math.max(G, 0))),
        b(this, ls, vR).call(this, t, { left: m, top: G });
    }
    _updateLocation(U) {
      const l = this._currentScale,
        d = this._currentScaleValue,
        Z = parseFloat(d) === l ? Math.round(l * 1e4) / 100 : d,
        t = U.id,
        F = this._pages[t - 1],
        c = this.container,
        n = F.getPagePoint(c.scrollLeft - U.x, c.scrollTop - U.y),
        V = Math.round(n[0]),
        W = Math.round(n[1]);
      let a = `#page=${t}`;
      this.isInPresentationMode || (a += `&zoom=${Z},${V},${W}`),
        (this._location = {
          pageNumber: t,
          scale: Z,
          top: W,
          left: V,
          rotation: this._pagesRotation,
          pdfOpenParams: a,
        });
    }
    update() {
      const U = this._getVisiblePages(),
        l = U.views,
        d = l.length;
      if (d === 0) return;
      const Z = Math.max(dm, 2 * d + 1);
      s(this, it).resize(Z, U.ids),
        this.renderingQueue.renderHighestPriority(U);
      const t =
          this._spreadMode === _l.NONE &&
          (this._scrollMode === Ul.PAGE || this._scrollMode === Ul.VERTICAL),
        F = this._currentPageNumber;
      let c = !1;
      for (const n of l) {
        if (n.percent < 100) break;
        if (n.id === F && t) {
          c = !0;
          break;
        }
      }
      this._setCurrentPageNumber(c ? F : l[0].id),
        this._updateLocation(U.first),
        this.eventBus.dispatch('updateviewarea', {
          source: this,
          location: this._location,
        });
    }
    containsElement(U) {
      return this.container.contains(U);
    }
    focus() {
      this.container.focus();
    }
    get _isContainerRtl() {
      return getComputedStyle(this.container).direction === 'rtl';
    }
    get isInPresentationMode() {
      return this.presentationModeState === V0.FULLSCREEN;
    }
    get isChangingPresentationMode() {
      return this.presentationModeState === V0.CHANGING;
    }
    get isHorizontalScrollbarEnabled() {
      return this.isInPresentationMode
        ? !1
        : this.container.scrollWidth > this.container.clientWidth;
    }
    get isVerticalScrollbarEnabled() {
      return this.isInPresentationMode
        ? !1
        : this.container.scrollHeight > this.container.clientHeight;
    }
    _getVisiblePages() {
      const U = this._scrollMode === Ul.PAGE ? s(this, Z0).pages : this._pages,
        l = this._scrollMode === Ul.HORIZONTAL,
        d = l && this._isContainerRtl;
      return BG({
        scrollEl: this.container,
        views: U,
        sortByVisibility: !0,
        horizontal: l,
        rtl: d,
      });
    }
    cleanup() {
      for (const U of this._pages)
        U.renderingState !== ml.FINISHED && U.reset();
    }
    _cancelRendering() {
      for (const U of this._pages) U.cancelRendering();
    }
    forceRendering(U) {
      const l = U || this._getVisiblePages(),
        d = b(this, VR, aM).call(this, l),
        Z = this._spreadMode !== _l.NONE && this._scrollMode !== Ul.HORIZONTAL,
        t = this.renderingQueue.getHighestPriority(l, this._pages, d, Z);
      return t
        ? (b(this, nR, WM)
            .call(this, t)
            .then(() => {
              this.renderingQueue.renderView(t);
            }),
          !0)
        : !1;
    }
    get hasEqualPageSizes() {
      const U = this._pages[0];
      for (let l = 1, d = this._pages.length; l < d; ++l) {
        const Z = this._pages[l];
        if (Z.width !== U.width || Z.height !== U.height) return !1;
      }
      return !0;
    }
    getPagesOverview() {
      let U;
      return this._pages.map((l) => {
        const d = l.pdfPage.getViewport({ scale: 1 }),
          Z = Ge(d);
        if (U === void 0) U = Z;
        else if (this.enablePrintAutoRotate && Z !== U)
          return {
            width: d.height,
            height: d.width,
            rotation: (d.rotation - 90) % 360,
          };
        return { width: d.width, height: d.height, rotation: d.rotation };
      });
    }
    get optionalContentConfigPromise() {
      return this.pdfDocument
        ? this._optionalContentConfigPromise
          ? this._optionalContentConfigPromise
          : (console.error(
              'optionalContentConfigPromise: Not initialized yet.',
            ),
            this.pdfDocument.getOptionalContentConfig({ intent: 'display' }))
        : Promise.resolve(null);
    }
    set optionalContentConfigPromise(U) {
      if (!(U instanceof Promise))
        throw new Error(`Invalid optionalContentConfigPromise: ${U}`);
      this.pdfDocument &&
        this._optionalContentConfigPromise &&
        ((this._optionalContentConfigPromise = U),
        this.refresh(!1, { optionalContentConfigPromise: U }),
        this.eventBus.dispatch('optionalcontentconfigchanged', {
          source: this,
          promise: U,
        }));
    }
    get scrollMode() {
      return this._scrollMode;
    }
    set scrollMode(U) {
      if (this._scrollMode !== U) {
        if (!yG(U)) throw new Error(`Invalid scroll mode: ${U}`);
        this.pagesCount > OW.FORCE_SCROLL_MODE_PAGE ||
          ((this._previousScrollMode = this._scrollMode),
          (this._scrollMode = U),
          this.eventBus.dispatch('scrollmodechanged', {
            source: this,
            mode: U,
          }),
          this._updateScrollMode(this._currentPageNumber));
      }
    }
    _updateScrollMode(U = null) {
      const l = this._scrollMode,
        d = this.viewer;
      d.classList.toggle('scrollHorizontal', l === Ul.HORIZONTAL),
        d.classList.toggle('scrollWrapped', l === Ul.WRAPPED),
        !(!this.pdfDocument || !U) &&
          (l === Ul.PAGE
            ? b(this, t0, cW).call(this)
            : this._previousScrollMode === Ul.PAGE && this._updateSpreadMode(),
          this._currentScaleValue &&
            isNaN(this._currentScaleValue) &&
            b(this, ud, mt).call(this, this._currentScaleValue, {
              noScroll: !0,
            }),
          this._setCurrentPageNumber(U, !0),
          this.update());
    }
    get spreadMode() {
      return this._spreadMode;
    }
    set spreadMode(U) {
      if (this._spreadMode !== U) {
        if (!LG(U)) throw new Error(`Invalid spread mode: ${U}`);
        (this._spreadMode = U),
          this.eventBus.dispatch('spreadmodechanged', {
            source: this,
            mode: U,
          }),
          this._updateSpreadMode(this._currentPageNumber);
      }
    }
    _updateSpreadMode(U = null) {
      if (!this.pdfDocument) return;
      const l = this.viewer,
        d = this._pages;
      if (this._scrollMode === Ul.PAGE) b(this, t0, cW).call(this);
      else if (((l.textContent = ''), this._spreadMode === _l.NONE))
        for (const Z of this._pages) l.append(Z.div);
      else {
        const Z = this._spreadMode - 1;
        let t = null;
        for (let F = 0, c = d.length; F < c; ++F)
          t === null
            ? ((t = document.createElement('div')),
              (t.className = 'spread'),
              l.append(t))
            : F % 2 === Z && ((t = t.cloneNode(!1)), l.append(t)),
            t.append(d[F].div);
      }
      U &&
        (this._currentScaleValue &&
          isNaN(this._currentScaleValue) &&
          b(this, ud, mt).call(this, this._currentScaleValue, { noScroll: !0 }),
        this._setCurrentPageNumber(U, !0),
        this.update());
    }
    _getPageAdvance(U, l = !1) {
      switch (this._scrollMode) {
        case Ul.WRAPPED: {
          const { views: d } = this._getVisiblePages(),
            Z = new Map();
          for (const { id: t, y: F, percent: c, widthPercent: n } of d) {
            if (c === 0 || n < 100) continue;
            let V = Z.get(F);
            V || Z.set(F, V || (V = [])), V.push(t);
          }
          for (const t of Z.values()) {
            const F = t.indexOf(U);
            if (F === -1) continue;
            const c = t.length;
            if (c === 1) break;
            if (l)
              for (let n = F - 1, V = 0; n >= V; n--) {
                const W = t[n],
                  a = t[n + 1] - 1;
                if (W < a) return U - a;
              }
            else
              for (let n = F + 1, V = c; n < V; n++) {
                const W = t[n],
                  a = t[n - 1] + 1;
                if (W > a) return a - U;
              }
            if (l) {
              const n = t[0];
              if (n < U) return U - n + 1;
            } else {
              const n = t[c - 1];
              if (n > U) return n - U + 1;
            }
            break;
          }
          break;
        }
        case Ul.HORIZONTAL:
          break;
        case Ul.PAGE:
        case Ul.VERTICAL: {
          if (this._spreadMode === _l.NONE) break;
          const d = this._spreadMode - 1;
          if (l && U % 2 !== d) break;
          if (!l && U % 2 === d) break;
          const { views: Z } = this._getVisiblePages(),
            t = l ? U - 1 : U + 1;
          for (const { id: F, percent: c, widthPercent: n } of Z)
            if (F === t) {
              if (c > 0 && n === 100) return 2;
              break;
            }
          break;
        }
      }
      return 1;
    }
    nextPage() {
      const U = this._currentPageNumber,
        l = this.pagesCount;
      if (U >= l) return !1;
      const d = this._getPageAdvance(U, !1) || 1;
      return (this.currentPageNumber = Math.min(U + d, l)), !0;
    }
    previousPage() {
      const U = this._currentPageNumber;
      if (U <= 1) return !1;
      const l = this._getPageAdvance(U, !0) || 1;
      return (this.currentPageNumber = Math.max(U - l, 1)), !0;
    }
    updateScale({
      drawingDelay: U,
      scaleFactor: l = null,
      steps: d = null,
      origin: Z,
    }) {
      if (d === null && l === null)
        throw new Error(
          'Invalid updateScale options: either `steps` or `scaleFactor` must be provided.',
        );
      if (!this.pdfDocument) return;
      let t = this._currentScale;
      if (l > 0 && l !== 1) t = Math.round(t * l * 100) / 100;
      else if (d) {
        const F = d > 0 ? Ne : 1 / Ne,
          c = d > 0 ? Math.ceil : Math.floor;
        d = Math.abs(d);
        do t = c((t * F).toFixed(2) * 10) / 10;
        while (--d > 0);
      }
      (t = Math.max(SG, Math.min(XG, t))),
        b(this, ud, mt).call(this, t, {
          noScroll: !1,
          drawingDelay: U,
          origin: Z,
        });
    }
    increaseScale(U = {}) {
      this.updateScale({ ...U, steps: U.steps ?? 1 });
    }
    decreaseScale(U = {}) {
      this.updateScale({ ...U, steps: -(U.steps ?? 1) });
    }
    get containerTopLeft() {
      return (
        s(this, zV) ||
        e(this, zV, [this.container.offsetTop, this.container.offsetLeft])
      );
    }
    get annotationEditorMode() {
      return s(this, lU) ? s(this, mZ) : XZ.DISABLE;
    }
    set annotationEditorMode({
      mode: U,
      editId: l = null,
      isFromKeyboard: d = !1,
    }) {
      if (!s(this, lU)) throw new Error('The AnnotationEditor is not enabled.');
      if (s(this, mZ) !== U) {
        if (!Zm(U)) throw new Error(`Invalid AnnotationEditor mode: ${U}`);
        this.pdfDocument &&
          (e(this, mZ, U),
          this.eventBus.dispatch('annotationeditormodechanged', {
            source: this,
            mode: U,
          }),
          s(this, lU).updateMode(U, l, d));
      }
    }
    set annotationEditorParams({ type: U, value: l }) {
      if (!s(this, lU)) throw new Error('The AnnotationEditor is not enabled.');
      s(this, lU).updateParams(U, l);
    }
    refresh(U = !1, l = Object.create(null)) {
      if (this.pdfDocument) {
        for (const d of this._pages) d.update(l);
        s(this, Nt) !== null && (clearTimeout(s(this, Nt)), e(this, Nt, null)),
          U || this.update();
      }
    }
  }
  (it = new WeakMap()),
    (yV = new WeakMap()),
    (LV = new WeakMap()),
    (mZ = new WeakMap()),
    (lU = new WeakMap()),
    (U0 = new WeakMap()),
    (zV = new WeakMap()),
    (kV = new WeakMap()),
    (DV = new WeakMap()),
    (IV = new WeakMap()),
    (d0 = new WeakMap()),
    (EV = new WeakMap()),
    (Ac = new WeakMap()),
    (Rt = new WeakMap()),
    (_c = new WeakMap()),
    (CV = new WeakMap()),
    (qc = new WeakMap()),
    (Z0 = new WeakMap()),
    (Nt = new WeakMap()),
    ($c = new WeakMap()),
    (tR = new WeakSet()),
    (cM = function (U) {
      const l = {
        annotationEditorMode: s(this, mZ),
        annotationMode: s(this, U0),
        textLayerMode: s(this, $c),
      };
      return (
        U &&
          (!U.includes(EW.COPY) &&
            s(this, $c) === Fd.ENABLE &&
            (l.textLayerMode = Fd.ENABLE_PERMISSIONS),
          U.includes(EW.MODIFY_CONTENTS) ||
            (l.annotationEditorMode = XZ.DISABLE),
          !U.includes(EW.MODIFY_ANNOTATIONS) &&
            !U.includes(EW.FILL_INTERACTIVE_FORMS) &&
            s(this, U0) === kd.ENABLE_FORMS &&
            (l.annotationMode = kd.ENABLE)),
        l
      );
    }),
    (FR = new WeakSet()),
    (sM = async function (U) {
      if (
        document.visibilityState === 'hidden' ||
        !this.container.offsetParent ||
        this._getVisiblePages().views.length === 0
      )
        return;
      const l = Promise.withResolvers();
      function d() {
        document.visibilityState === 'hidden' && l.resolve();
      }
      document.addEventListener('visibilitychange', d, { signal: U }),
        await Promise.race([
          this._onePageRenderedCapability.promise,
          l.promise,
        ]),
        document.removeEventListener('visibilitychange', d);
    }),
    (cR = new WeakSet()),
    (QM = function (U, l) {
      const d = document.getSelection(),
        { focusNode: Z, anchorNode: t } = d;
      if (t && Z && d.containsNode(s(this, Rt))) {
        if (s(this, Ac) || U === Fd.ENABLE_PERMISSIONS) {
          l.preventDefault(), l.stopPropagation();
          return;
        }
        e(this, Ac, !0);
        const { classList: F } = this.viewer;
        F.add('copyAll');
        const c = new AbortController();
        window.addEventListener(
          'keydown',
          (n) => e(this, _c, n.key === 'Escape'),
          { signal: c.signal },
        ),
          this.getAllText()
            .then(async (n) => {
              n !== null && (await navigator.clipboard.writeText(n));
            })
            .catch((n) => {
              console.warn(
                `Something goes wrong when extracting the text: ${n.message}`,
              );
            })
            .finally(() => {
              e(this, Ac, !1), e(this, _c, !1), c.abort(), F.remove('copyAll');
            }),
          l.preventDefault(),
          l.stopPropagation();
      }
    }),
    (t0 = new WeakSet()),
    (cW = function () {
      if (this._scrollMode !== Ul.PAGE)
        throw new Error('#ensurePageViewVisible: Invalid scrollMode value.');
      const U = this._currentPageNumber,
        l = s(this, Z0),
        d = this.viewer;
      if (
        ((d.textContent = ''),
        (l.pages.length = 0),
        this._spreadMode === _l.NONE && !this.isInPresentationMode)
      ) {
        const Z = this._pages[U - 1];
        d.append(Z.div), l.pages.push(Z);
      } else {
        const Z = new Set(),
          t = this._spreadMode - 1;
        t === -1
          ? Z.add(U - 1)
          : U % 2 !== t
            ? (Z.add(U - 1), Z.add(U))
            : (Z.add(U - 2), Z.add(U - 1));
        const F = document.createElement('div');
        if (((F.className = 'spread'), this.isInPresentationMode)) {
          const c = document.createElement('div');
          (c.className = 'dummyPage'), F.append(c);
        }
        for (const c of Z) {
          const n = this._pages[c];
          n && (F.append(n.div), l.pages.push(n));
        }
        d.append(F);
      }
      (l.scrollDown = U >= l.previousPageNumber), (l.previousPageNumber = U);
    }),
    (ls = new WeakSet()),
    (vR = function (U, l = null) {
      const { div: d, id: Z } = U;
      if (
        (this._currentPageNumber !== Z && this._setCurrentPageNumber(Z),
        this._scrollMode === Ul.PAGE &&
          (b(this, t0, cW).call(this), this.update()),
        !l && !this.isInPresentationMode)
      ) {
        const t = d.offsetLeft + d.clientLeft,
          F = t + d.clientWidth,
          { scrollLeft: c, clientWidth: n } = this.container;
        (this._scrollMode === Ul.HORIZONTAL || t < c || F > c + n) &&
          (l = { left: 0, top: 0 });
      }
      ee(d, l),
        !this._currentScaleValue && this._location && (this._location = null);
    }),
    (sR = new WeakSet()),
    (nM = function (U) {
      return (
        U === this._currentScale || Math.abs(U - this._currentScale) < 1e-15
      );
    }),
    (rV = new WeakSet()),
    (Nb = function (
      U,
      l,
      {
        noScroll: d = !1,
        preset: Z = !1,
        drawingDelay: t = -1,
        origin: F = null,
      },
    ) {
      if (
        ((this._currentScaleValue = l.toString()),
        b(this, sR, nM).call(this, U))
      ) {
        Z &&
          this.eventBus.dispatch('scalechanging', {
            source: this,
            scale: U,
            presetValue: l,
          });
        return;
      }
      this.viewer.style.setProperty('--scale-factor', U * Dd.PDF_TO_CSS_UNITS);
      const c = t >= 0 && t < 1e3;
      this.refresh(!0, { scale: U, drawingDelay: c ? t : -1 }),
        c &&
          e(
            this,
            Nt,
            setTimeout(() => {
              e(this, Nt, null), this.refresh();
            }, t),
          );
      const n = this._currentScale;
      if (((this._currentScale = U), !d)) {
        let V = this._currentPageNumber,
          W;
        if (
          (this._location &&
            !(this.isInPresentationMode || this.isChangingPresentationMode) &&
            ((V = this._location.pageNumber),
            (W = [
              null,
              { name: 'XYZ' },
              this._location.left,
              this._location.top,
              null,
            ])),
          this.scrollPageIntoView({
            pageNumber: V,
            destArray: W,
            allowNegativeOffset: !0,
          }),
          Array.isArray(F))
        ) {
          const a = U / n - 1,
            [i, h] = this.containerTopLeft;
          (this.container.scrollLeft += (F[0] - h) * a),
            (this.container.scrollTop += (F[1] - i) * a);
        }
      }
      this.eventBus.dispatch('scalechanging', {
        source: this,
        scale: U,
        presetValue: Z ? l : void 0,
      }),
        this.defaultRenderingQueue && this.update();
    }),
    (QR = new WeakSet()),
    (VM = function () {
      return this._spreadMode !== _l.NONE && this._scrollMode !== Ul.HORIZONTAL
        ? 2
        : 1;
    }),
    (ud = new WeakSet()),
    (mt = function (U, l) {
      let d = parseFloat(U);
      if (d > 0) (l.preset = !1), b(this, rV, Nb).call(this, d, U, l);
      else {
        const Z = this._pages[this._currentPageNumber - 1];
        if (!Z) return;
        let t = he,
          F = be;
        this.isInPresentationMode
          ? ((t = F = 4), this._spreadMode !== _l.NONE && (t *= 2))
          : this.removePageBorders
            ? (t = F = 0)
            : this._scrollMode === Ul.HORIZONTAL && ([t, F] = [F, t]);
        const c =
            (((this.container.clientWidth - t) / Z.width) * Z.scale) /
            s(this, QR, VM),
          n = ((this.container.clientHeight - F) / Z.height) * Z.scale;
        switch (U) {
          case 'page-actual':
            d = 1;
            break;
          case 'page-width':
            d = c;
            break;
          case 'page-height':
            d = n;
            break;
          case 'page-fit':
            d = Math.min(c, n);
            break;
          case 'auto':
            const V = Ge(Z) ? c : Math.min(n, c);
            d = Math.min(YG, V);
            break;
          default:
            console.error(`#setScale: "${U}" is an unknown zoom value.`);
            return;
        }
        (l.preset = !0), b(this, rV, Nb).call(this, d, U, l);
      }
    }),
    (wV = new WeakSet()),
    (hb = function () {
      const U = this._pages[this._currentPageNumber - 1];
      this.isInPresentationMode &&
        b(this, ud, mt).call(this, this._currentScaleValue, { noScroll: !0 }),
        b(this, ls, vR).call(this, U);
    }),
    (nR = new WeakSet()),
    (WM = async function (U) {
      if (U.pdfPage) return U.pdfPage;
      try {
        const l = await this.pdfDocument.getPage(U.id);
        return U.pdfPage || U.setPdfPage(l), l;
      } catch (l) {
        return console.error('Unable to get page for page view', l), null;
      }
    }),
    (VR = new WeakSet()),
    (aM = function (U) {
      var l, d;
      if (((l = U.first) == null ? void 0 : l.id) === 1) return !0;
      if (((d = U.last) == null ? void 0 : d.id) === this.pagesCount) return !1;
      switch (this._scrollMode) {
        case Ul.PAGE:
          return s(this, Z0).scrollDown;
        case Ul.HORIZONTAL:
          return this.scroll.right;
      }
      return this.scroll.down;
    }),
    (xV = new WeakSet()),
    (bb = function (U = this.container.clientHeight) {
      U !== s(this, CV) &&
        (e(this, CV, U), zG.setProperty('--viewer-container-height', `${U}px`));
    }),
    (WR = new WeakSet()),
    (iM = function (U) {
      for (const l of U)
        if (l.target === this.container) {
          b(this, xV, bb).call(this, Math.floor(l.borderBoxSize[0].blockSize)),
            e(this, zV, null);
          break;
        }
    });
  class yS extends tm {
    _resetView() {
      super._resetView(),
        (this._scrollMode = Ul.PAGE),
        (this._spreadMode = _l.NONE);
    }
    set scrollMode(U) {}
    _updateScrollMode() {}
    set spreadMode(U) {}
    _updateSpreadMode() {}
  }
  bl.AnnotationLayerBuilder,
    bl.DownloadManager,
    bl.EventBus,
    bl.FindState,
    bl.GenericL10n,
    bl.LinkTarget,
    bl.PDFFindController,
    bl.PDFHistory;
  var LS = bl.PDFLinkService;
  bl.PDFPageView,
    bl.PDFScriptingManager,
    bl.PDFSinglePageViewer,
    bl.PDFViewer,
    bl.ProgressBar,
    bl.RenderingStates,
    bl.ScrollMode,
    bl.SimpleLinkService,
    bl.SpreadMode,
    bl.StructTreeLayerBuilder,
    bl.TextLayerBuilder,
    bl.XfaLayerBuilder,
    bl.parseQueryString;
  const zS = ['id'],
    kS = ['id'],
    DS = j.createElementVNode('canvas', null, null, -1),
    IS = { key: 0, class: 'textLayer' },
    ES = { key: 1, class: 'annotationLayer' },
    Fm = j.defineComponent({
      __name: 'VuePdfEmbed',
      props: {
        annotationLayer: { type: Boolean },
        height: {},
        id: {},
        imageResourcesPath: {},
        page: {},
        rotation: { default: 0 },
        scale: { default: 1 },
        source: {},
        textLayer: { type: Boolean },
        width: {},
      },
      emits: [
        'internal-link-clicked',
        'loaded',
        'loading-failed',
        'password-requested',
        'progress',
        'rendered',
        'rendering-failed',
      ],
      setup(Q, { expose: U, emit: l }) {
        const d = Q,
          Z = j.shallowRef([]),
          t = j.ref([]),
          F = j.shallowRef(null);
        let c = null;
        const { doc: n } = oN({
            onError: (m) => {
              (Z.value = []), l('loading-failed', m);
            },
            onPasswordRequest({ callback: m, isWrongPassword: G }) {
              l('password-requested', { callback: m, isWrongPassword: G });
            },
            onProgress: (m) => {
              l('progress', m);
            },
            source: j.toRef(d, 'source'),
          }),
          V = j.computed(() => {
            if (!n.value || !d.annotationLayer) return null;
            const m = new LS();
            return (
              m.setDocument(n.value),
              m.setViewer({
                scrollPageIntoView: ({ pageNumber: G }) => {
                  l('internal-link-clicked', G);
                },
              }),
              m
            );
          }),
          W = async (m) => {
            if (!n.value) return;
            const G = await n.value.getData(),
              T = await n.value.getMetadata(),
              u = m ?? T.contentDispositionFilename ?? '';
            GG(G, u);
          },
          a = (m) => {
            let G, T;
            return (
              d.height && !d.width
                ? ((T = d.height), (G = T / m))
                : ((G = d.width ?? F.value.clientWidth), (T = G * m)),
              [G, T]
            );
          },
          i = async (m = 300, G = '', T = !1) => {
            var Y, o, y;
            if (!n.value) return;
            const u = m / 72,
              X = 96 / 72;
            let S, p, L;
            try {
              (S = window.document.createElement('div')),
                (S.style.display = 'none'),
                window.document.body.appendChild(S),
                (p = await JG(S));
              const D =
                d.page && !T
                  ? [d.page]
                  : [...Array(n.value.numPages + 1).keys()].slice(1);
              await Promise.all(
                D.map(async (I, O) => {
                  const x = await n.value.getPage(I),
                    B = x.getViewport({ scale: 1, rotation: 0 });
                  if (O === 0) {
                    const Wl = (B.width * u) / X,
                      Jl = (B.height * u) / X;
                    MG(p, Wl, Jl);
                  }
                  const C = window.document.createElement('canvas');
                  (C.width = B.width * u),
                    (C.height = B.height * u),
                    S.appendChild(C);
                  const r = C.cloneNode();
                  p.contentWindow.document.body.appendChild(r),
                    await x.render({
                      canvasContext: C.getContext('2d'),
                      intent: 'print',
                      transform: [u, 0, 0, u, 0, 0],
                      viewport: B,
                    }).promise,
                    r.getContext('2d').drawImage(C, 0, 0);
                }),
              ),
                G && ((L = window.document.title), (window.document.title = G)),
                (Y = p.contentWindow) == null || Y.focus(),
                (o = p.contentWindow) == null || o.print();
            } finally {
              L && (window.document.title = L),
                pN(S),
                (y = S.parentNode) == null || y.removeChild(S);
            }
          },
          h = async () => {
            if (!(!n.value || (c != null && c.isAborted)))
              try {
                (Z.value = d.page
                  ? [d.page]
                  : [...Array(n.value.numPages + 1).keys()].slice(1)),
                  (t.value = Array(Z.value.length).fill(1)),
                  await Promise.all(
                    Z.value.map(async (m, G) => {
                      const T = await n.value.getPage(m);
                      if (c != null && c.isAborted) return;
                      const u =
                          ((d.rotation % 90 === 0 ? d.rotation : 0) +
                            T.rotate) %
                          360,
                        [X, S, p] = Array.from(
                          F.value.getElementsByClassName('vue-pdf-embed__page')[
                            G
                          ].children,
                        ),
                        L = !!((u / 90) % 2),
                        Y = T.view[2] - T.view[0],
                        o = T.view[3] - T.view[1],
                        [y, D] = a(L ? Y / o : o / Y),
                        I = `${Math.floor(y)}px`,
                        O = `${Math.floor(D)}px`,
                        B = y / (L ? o : Y),
                        C = T.getViewport({ scale: B, rotation: u });
                      (t.value[G] = B),
                        (X.style.display = 'block'),
                        (X.style.width = I),
                        (X.style.height = O);
                      const r = [
                        N(
                          T,
                          C.clone({
                            scale: C.scale * window.devicePixelRatio * d.scale,
                          }),
                          X,
                        ),
                      ];
                      return (
                        d.textLayer &&
                          r.push(J(T, C.clone({ dontFlip: !0 }), S)),
                        d.annotationLayer &&
                          r.push(M(T, C.clone({ dontFlip: !0 }), p || S)),
                        Promise.all(r)
                      );
                    }),
                  ),
                  (c != null && c.isAborted) || l('rendered');
              } catch (m) {
                (Z.value = []),
                  (t.value = []),
                  (c != null && c.isAborted) || l('rendering-failed', m);
              }
          },
          N = async (m, G, T) => {
            (T.width = G.width),
              (T.height = G.height),
              await m.render({ canvasContext: T.getContext('2d'), viewport: G })
                .promise;
          },
          M = async (m, G, T) => {
            ae(T),
              new NG({
                accessibilityManager: null,
                annotationCanvasMap: null,
                annotationEditorUIManager: null,
                div: T,
                page: m,
                viewport: G,
              }).render({
                annotations: await m.getAnnotations(),
                div: T,
                imageResourcesPath: d.imageResourcesPath,
                linkService: V.value,
                page: m,
                renderForms: !1,
                viewport: G,
              });
          },
          J = async (m, G, T) => {
            ae(T),
              new bG({
                container: T,
                textContentSource: await m.getTextContent(),
                viewport: G,
              }).render();
          };
        return (
          j.watch(
            n,
            (m) => {
              m && l('loaded', m);
            },
            { immediate: !0 },
          ),
          j.watch(
            () => [
              n.value,
              d.annotationLayer,
              d.height,
              d.imageResourcesPath,
              d.page,
              d.rotation,
              d.scale,
              d.textLayer,
              d.width,
            ],
            async ([m]) => {
              m &&
                (c && ((c.isAborted = !0), await c.promise),
                pN(F.value),
                (c = { isAborted: !1, promise: h() }),
                await c.promise,
                (c = null));
            },
            { immediate: !0 },
          ),
          j.onBeforeUnmount(() => {
            pN(F.value);
          }),
          U({ doc: n, download: W, print: i }),
          (m, G) => (
            j.openBlock(),
            j.createElementBlock(
              'div',
              { id: m.id, ref_key: 'root', ref: F, class: 'vue-pdf-embed' },
              [
                (j.openBlock(!0),
                j.createElementBlock(
                  j.Fragment,
                  null,
                  j.renderList(
                    Z.value,
                    (T, u) => (
                      j.openBlock(),
                      j.createElementBlock('div', { key: T }, [
                        j.renderSlot(m.$slots, 'before-page', { page: T }),
                        j.createElementVNode(
                          'div',
                          {
                            id: m.id && `${m.id}-${T}`,
                            class: 'vue-pdf-embed__page',
                            style: j.normalizeStyle({
                              '--scale-factor': t.value[u],
                              position: 'relative',
                            }),
                          },
                          [
                            DS,
                            m.textLayer
                              ? (j.openBlock(), j.createElementBlock('div', IS))
                              : j.createCommentVNode('', !0),
                            m.annotationLayer
                              ? (j.openBlock(), j.createElementBlock('div', ES))
                              : j.createCommentVNode('', !0),
                          ],
                          12,
                          kS,
                        ),
                        j.renderSlot(m.$slots, 'after-page', { page: T }),
                      ])
                    ),
                  ),
                  128,
                )),
              ],
              8,
              zS,
            )
          )
        );
      },
    });
  window != null &&
    window.Vue &&
    ((window.VuePdfEmbed = Fm), (window.useVuePdfEmbed = oN)),
    (yW != null && yW.workerSrc) || (yW.workerSrc = mG);
  const ps = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: {} },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
  var os = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 },
    CS = /([astvzqmhlc])([^astvzqmhlc]*)/gi,
    rS = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
  function wS(Q) {
    const U = Q.match(rS);
    return U ? U.map(Number) : [];
  }
  function cm(Q) {
    const U = [],
      l = String(Q).trim();
    return (
      (l[0] !== 'M' && l[0] !== 'm') ||
        l.replace(CS, (d, Z, t) => {
          const F = wS(t);
          let c = Z.toLowerCase(),
            n = Z;
          if (
            (c === 'm' &&
              F.length > 2 &&
              (U.push([n, ...F.splice(0, 2)]),
              (c = 'l'),
              (n = n === 'm' ? 'l' : 'L')),
            F.length < os[c])
          )
            return '';
          for (
            U.push([n, ...F.splice(0, os[c])]);
            F.length >= os[c] && F.length && os[c];

          )
            U.push([n, ...F.splice(0, os[c])]);
          return '';
        }),
      U
    );
  }
  function sm(Q, U) {
    const l = Q.x * Math.cos(U) - Q.y * Math.sin(U),
      d = Q.y * Math.cos(U) + Q.x * Math.sin(U);
    (Q.x = l), (Q.y = d);
  }
  function xS(Q, U, l) {
    (Q.x += U), (Q.y += l);
  }
  function Qm(Q, U) {
    (Q.x *= U), (Q.y *= U);
  }
  var gW = class eb {
    constructor(U) {
      (this.commands = []),
        U && U instanceof eb
          ? this.commands.push(...U.commands)
          : U && (this.commands = cm(U));
    }
    addPath(U) {
      U && U instanceof eb && this.commands.push(...U.commands);
    }
    moveTo(U, l) {
      this.commands.push(['M', U, l]);
    }
    lineTo(U, l) {
      this.commands.push(['L', U, l]);
    }
    arc(U, l, d, Z, t, F) {
      this.commands.push(['AC', U, l, d, Z, t, !!F]);
    }
    arcTo(U, l, d, Z, t) {
      this.commands.push(['AT', U, l, d, Z, t]);
    }
    ellipse(U, l, d, Z, t, F, c, n) {
      this.commands.push(['E', U, l, d, Z, t, F, c, !!n]);
    }
    closePath() {
      this.commands.push(['Z']);
    }
    bezierCurveTo(U, l, d, Z, t, F) {
      this.commands.push(['C', U, l, d, Z, t, F]);
    }
    quadraticCurveTo(U, l, d, Z) {
      this.commands.push(['Q', U, l, d, Z]);
    }
    rect(U, l, d, Z) {
      this.commands.push(['R', U, l, d, Z]);
    }
    roundRect(U, l, d, Z, t) {
      typeof t > 'u'
        ? this.commands.push(['RR', U, l, d, Z, 0])
        : this.commands.push(['RR', U, l, d, Z, t]);
    }
  };
  function Bs(Q, U) {
    let l = 0,
      d = 0,
      Z,
      t,
      F,
      c,
      n,
      V,
      W,
      a,
      i,
      h,
      N,
      M,
      J,
      m,
      G,
      T,
      u,
      X,
      S,
      p,
      L,
      Y = null,
      o = null,
      y = null,
      D = null,
      I = null,
      O = null;
    Q.beginPath();
    for (let x = 0; x < U.length; ++x) {
      (X = U[x][0]),
        X !== 'S' &&
          X !== 's' &&
          X !== 'C' &&
          X !== 'c' &&
          ((Y = null), (o = null)),
        X !== 'T' &&
          X !== 't' &&
          X !== 'Q' &&
          X !== 'q' &&
          ((y = null), (D = null));
      let B;
      switch (X) {
        case 'm':
        case 'M':
          (B = U[x]),
            X === 'm' ? ((l += B[1]), (d += B[2])) : ((l = B[1]), (d = B[2])),
            (X === 'M' || !I) && (I = { x: l, y: d }),
            Q.moveTo(l, d);
          break;
        case 'l':
          (B = U[x]), (l += B[1]), (d += B[2]), Q.lineTo(l, d);
          break;
        case 'L':
          (B = U[x]), (l = B[1]), (d = B[2]), Q.lineTo(l, d);
          break;
        case 'H':
          (B = U[x]), (l = B[1]), Q.lineTo(l, d);
          break;
        case 'h':
          (B = U[x]), (l += B[1]), Q.lineTo(l, d);
          break;
        case 'V':
          (B = U[x]), (d = B[1]), Q.lineTo(l, d);
          break;
        case 'v':
          (B = U[x]), (d += B[1]), Q.lineTo(l, d);
          break;
        case 'a':
        case 'A':
          if (((B = U[x]), O === null))
            throw new Error('This should never happen');
          X === 'a' ? ((l += B[6]), (d += B[7])) : ((l = B[6]), (d = B[7])),
            (m = B[1]),
            (G = B[2]),
            (W = (B[3] * Math.PI) / 180),
            (F = !!B[4]),
            (c = !!B[5]),
            (n = { x: l, y: d }),
            (V = { x: (O.x - n.x) / 2, y: (O.y - n.y) / 2 }),
            sm(V, -W),
            (a = (V.x * V.x) / (m * m) + (V.y * V.y) / (G * G)),
            a > 1 && ((a = Math.sqrt(a)), (m *= a), (G *= a)),
            (S = { x: (m * V.y) / G, y: -(G * V.x) / m }),
            (i = m * m * G * G),
            (h = m * m * V.y * V.y + G * G * V.x * V.x),
            c !== F
              ? Qm(S, Math.sqrt((i - h) / h) || 0)
              : Qm(S, -Math.sqrt((i - h) / h) || 0),
            (t = Math.atan2((V.y - S.y) / G, (V.x - S.x) / m)),
            (Z = Math.atan2(-(V.y + S.y) / G, -(V.x + S.x) / m)),
            sm(S, W),
            xS(S, (n.x + O.x) / 2, (n.y + O.y) / 2),
            Q.save(),
            Q.translate(S.x, S.y),
            Q.rotate(W),
            Q.scale(m, G),
            Q.arc(0, 0, 1, t, Z, !c),
            Q.restore();
          break;
        case 'C':
          (B = U[x]),
            (Y = B[3]),
            (o = B[4]),
            (l = B[5]),
            (d = B[6]),
            Q.bezierCurveTo(B[1], B[2], Y, o, l, d);
          break;
        case 'c':
          (B = U[x]),
            Q.bezierCurveTo(
              B[1] + l,
              B[2] + d,
              B[3] + l,
              B[4] + d,
              B[5] + l,
              B[6] + d,
            ),
            (Y = B[3] + l),
            (o = B[4] + d),
            (l += B[5]),
            (d += B[6]);
          break;
        case 'S':
          (B = U[x]),
            (Y === null || o === null) && ((Y = l), (o = d)),
            Q.bezierCurveTo(2 * l - Y, 2 * d - o, B[1], B[2], B[3], B[4]),
            (Y = B[1]),
            (o = B[2]),
            (l = B[3]),
            (d = B[4]);
          break;
        case 's':
          (B = U[x]),
            (Y === null || o === null) && ((Y = l), (o = d)),
            Q.bezierCurveTo(
              2 * l - Y,
              2 * d - o,
              B[1] + l,
              B[2] + d,
              B[3] + l,
              B[4] + d,
            ),
            (Y = B[1] + l),
            (o = B[2] + d),
            (l += B[3]),
            (d += B[4]);
          break;
        case 'Q':
          (B = U[x]),
            (y = B[1]),
            (D = B[2]),
            (l = B[3]),
            (d = B[4]),
            Q.quadraticCurveTo(y, D, l, d);
          break;
        case 'q':
          (B = U[x]),
            (y = B[1] + l),
            (D = B[2] + d),
            (l += B[3]),
            (d += B[4]),
            Q.quadraticCurveTo(y, D, l, d);
          break;
        case 'T':
          (B = U[x]),
            (y === null || D === null) && ((y = l), (D = d)),
            (y = 2 * l - y),
            (D = 2 * d - D),
            (l = B[1]),
            (d = B[2]),
            Q.quadraticCurveTo(y, D, l, d);
          break;
        case 't':
          (B = U[x]),
            (y === null || D === null) && ((y = l), (D = d)),
            (y = 2 * l - y),
            (D = 2 * d - D),
            (l += B[1]),
            (d += B[2]),
            Q.quadraticCurveTo(y, D, l, d);
          break;
        case 'z':
        case 'Z':
          I && ((l = I.x), (d = I.y)), (I = null), Q.closePath();
          break;
        case 'AC':
          (B = U[x]),
            (l = B[1]),
            (d = B[2]),
            (J = B[3]),
            (t = B[4]),
            (Z = B[5]),
            (p = B[6]),
            Q.arc(l, d, J, t, Z, p);
          break;
        case 'AT':
          (B = U[x]),
            (N = B[1]),
            (M = B[2]),
            (l = B[3]),
            (d = B[4]),
            (J = B[5]),
            Q.arcTo(N, M, l, d, J);
          break;
        case 'E':
          (B = U[x]),
            (l = B[1]),
            (d = B[2]),
            (m = B[3]),
            (G = B[4]),
            (W = B[5]),
            (t = B[6]),
            (Z = B[7]),
            (p = B[8]),
            Q.save(),
            Q.translate(l, d),
            Q.rotate(W),
            Q.scale(m, G),
            Q.arc(0, 0, 1, t, Z, p),
            Q.restore();
          break;
        case 'R':
          (B = U[x]),
            (l = B[1]),
            (d = B[2]),
            (T = B[3]),
            (u = B[4]),
            (I = { x: l, y: d }),
            Q.rect(l, d, T, u);
          break;
        case 'RR':
          (B = U[x]),
            (l = B[1]),
            (d = B[2]),
            (T = B[3]),
            (u = B[4]),
            (L = B[5]),
            (I = { x: l, y: d }),
            Q.roundRect(l, d, T, u, L);
          break;
        default:
          throw new Error(`Invalid path command: ${X}`);
      }
      O ? ((O.x = l), (O.y = d)) : (O = { x: l, y: d });
    }
  }
  function gN(Q, U, l, d, Z = 0) {
    if ((typeof Z == 'number' && (Z = [Z]), Array.isArray(Z))) {
      if (Z.length === 0 || Z.length > 4)
        throw new RangeError(
          `Failed to execute 'roundRect' on '${this.constructor.name}': ${Z.length} radii provided. Between one and four radii are necessary.`,
        );
      Z.forEach((W) => {
        if (W < 0)
          throw new RangeError(
            `Failed to execute 'roundRect' on '${this.constructor.name}': Radius value ${W} is negative.`,
          );
      });
    } else return;
    if (Z.length === 1 && Z[0] === 0) {
      this.rect(Q, U, l, d);
      return;
    }
    const t = Math.min(l, d) / 2,
      F = Math.min(t, Z[0]);
    let c = F,
      n = F,
      V = F;
    Z.length === 2 && ((c = Math.min(t, Z[1])), (V = c)),
      Z.length === 3 &&
        ((c = Math.min(t, Z[1])), (V = c), (n = Math.min(t, Z[2]))),
      Z.length === 4 &&
        ((c = Math.min(t, Z[1])),
        (n = Math.min(t, Z[2])),
        (V = Math.min(t, Z[3]))),
      this.moveTo(Q, U + d - V),
      this.arcTo(Q, U, Q + F, U, F),
      this.arcTo(Q + l, U, Q + l, U + c, c),
      this.arcTo(Q + l, U + d, Q + l - n, U + d, n),
      this.arcTo(Q, U + d, Q, U + d - V, V),
      this.moveTo(Q, U);
  }
  function jS(Q) {
    if (!Q) return;
    const U = Q.prototype.clip,
      l = Q.prototype.fill,
      d = Q.prototype.stroke,
      Z = Q.prototype.isPointInPath;
    (Q.prototype.clip = function (...F) {
      if (F[0] instanceof gW) {
        const n = F[0],
          V = F[1] || 'nonzero';
        return Bs(this, n.commands), U.apply(this, [V]);
      }
      const c = F[0] || 'nonzero';
      return U.apply(this, [c]);
    }),
      (Q.prototype.fill = function (...F) {
        if (F[0] instanceof gW) {
          const n = F[0],
            V = F[1] || 'nonzero';
          return Bs(this, n.commands), l.apply(this, [V]);
        }
        const c = F[0] || 'nonzero';
        return l.apply(this, [c]);
      }),
      (Q.prototype.stroke = function (F) {
        F && Bs(this, F.commands), d.apply(this);
      }),
      (Q.prototype.isPointInPath = function (...F) {
        if (F[0] instanceof gW) {
          const c = F[0],
            n = F[1],
            V = F[2],
            W = F[3] || 'nonzero';
          return Bs(this, c.commands), Z.apply(this, [n, V, W]);
        }
        return Z.apply(this, F);
      });
  }
  function OS(Q) {
    Q && !Q.prototype.roundRect && (Q.prototype.roundRect = gN);
  }
  function gS(Q) {
    Q && !Q.prototype.roundRect && (Q.prototype.roundRect = gN);
  }
  const KS = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Path2D: gW,
        applyPath2DToCanvasRenderingContext: jS,
        applyRoundRectToCanvasRenderingContext2D: OS,
        applyRoundRectToPath2D: gS,
        buildPath: Bs,
        parsePath: cm,
        roundRect: gN,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
  (dl.default = Fm),
    (dl.useVuePdfEmbed = oN),
    Object.defineProperties(dl, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: 'Module' },
    });
});