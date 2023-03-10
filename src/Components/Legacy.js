/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: lightwarrior (https://sketchfab.com/user3754564)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/legacy-class-star-destroyer-5b51b11585f3412d86353f4e939a6805
title: Legacy-Class Star Destroyer
*/

// import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'


export default function Legacy(props) {
  const { nodes, materials } = useGLTF('/Legacy.gltf')
  const [internal,api] = useSpring(()=>({
  //  animation: props.Clicked?
    from: {
      rotation: [-Math.PI / 2.1, 0, 0], position:[0,-100,0] },
    to: [
      { rotation:[-Math.PI / 2.1, 0.2, 0.5],position:[0,-50,-100] },
      { rotation:[-Math.PI / 2.1, 0.3, 1],position:[0,-50,-200] },
      { rotation:[-Math.PI / 2.1, 0.4, 2],position:[-100,0,-500] },
      { rotation:[-Math.PI / 2.1, 0.6, 2.5],position:[-200,0,-600] },
      { rotation:[-Math.PI / 2.1, 0.6, 2.8],position:[-300,0,-400] },
      { rotation:[-Math.PI / 2.1,0.6, 3],position:[-300,0,-200] },
      { rotation:[-Math.PI / 2.1,0.5, 4],position:[-300,0,50] },
      { rotation:[-Math.PI / 2.1, 0.5, 5], position:[-200,0,200] },
      { rotation:[-Math.PI / 2.1, 0.3, 6], position:[-100,0,300] },
      { rotation:[-Math.PI / 2.1, 0.2, 6], position:[-50,-30,300] },
      { rotation:[-Math.PI / 2.1, 0.1, 6], position:[-30,-50,300] },
      { rotation:[-Math.PI / 2.1, 0, 6.1], position:[-20,-75,200] },
      { rotation:[-Math.PI / 2.1, 0, 6.3], position:[0,-100,0] },

 
    ] 

    //--------------- animation one 
    // [
      // { rotation:[-Math.PI / 2.1, 1, 2],position:[0,-50,-500] },
      // { rotation:[-Math.PI / 2.1, 0, 3],position:[0,300,-50] },
      
      // { rotation:[-Math.PI / 2.1, 1, 3],position:[0,300,950] },
      
      // { rotation:[-Math.PI / 2.1, 0, 0], position:[0,-100,0] },
      // { rotation:[-Math.PI / 2.1, 0, 0], position:[0,-50,0] },

 
    // ]
    // animation two 
    // { rotation:[-Math.PI / 2.1, 0.1, 1],position:[0,-50,-100] },
    // { rotation:[-Math.PI / 2.1, 0.2, 1.5],position:[0,-50,-200] },
    // { rotation:[-Math.PI / 2.1, 0.4, 2.5],position:[-100,0,-500] },
    // { rotation:[-Math.PI / 2.1, 0.8, 2.8],position:[-200,0,-600] },
    // { rotation:[-Math.PI / 2.1, 0.6, 2.8],position:[-300,0,-400] },
    // { rotation:[-Math.PI / 2.1,0.6, 3],position:[-300,0,-200] },
    // { rotation:[-Math.PI / 2.1,0.5, 4],position:[-300,0,50] },
    // { rotation:[-Math.PI / 2.1, 0.5, 5], position:[-200,0,200] },
    // { rotation:[-Math.PI / 2.1, 0.3, 6], position:[-100,0,300] },
    // { rotation:[-Math.PI / 2.1, 0.2, 6], position:[-50,-30,200] },
    // { rotation:[-Math.PI / 2.1, 0.1, 6], position:[-30,-50,100] },
    // { rotation:[-Math.PI / 2.1, 0, 6], position:[0,-100,0] },
    ,
    loop: true,
    // rotation:props.Clicked?[-Math.PI / 3, 0, 0]:[-Math.PI / 2.1, 0, 0],
    // position: props.Clicked ? [50,-50,-500] : [0,-50,0],
    // color: hovered ? 'hotpink' : 'gray'
    config: { duration:1000 }

}))

  
  return (
    <a.group {...props} dispose={null} scale={0.02} args={[2,2]}
       {...internal}   
        onPointerEnter={()=>{api.pause()}}
       onPointerLeave={()=>{api.resume()}}
       >
      <a.group>
      <spotLight intensity={0.5} position={[0,1,0]} angle={180}/> 

        <a.mesh geometry={nodes.Object_2.geometry} material={materials.d3acbd59_dds}  />
        <a.mesh geometry={nodes.Object_4.geometry} material={materials.f5c93c25_dds} />
        <a.mesh geometry={nodes.Object_3.geometry} material={materials['6201e113_dds']}  />
        <a.mesh geometry={nodes.Object_5.geometry} material={materials.af65dd9e_dds} />
        <a.mesh geometry={nodes.Object_6.geometry} material={materials.af65dd9e_dds} />
        <a.mesh geometry={nodes.Object_7.geometry} material={materials.af65dd9e_dds} />
        <a.mesh geometry={nodes.Object_8.geometry} material={materials['19b57b75_dds']} />
        <a.mesh geometry={nodes.Object_9.geometry} material={materials['4bbb56cc_dds']} />
        <a.mesh geometry={nodes.Object_10.geometry} material={materials['2d0451da_dds']} />
        <a.mesh geometry={nodes.Object_11.geometry} material={materials['8b514df5_dds']} />
        <a.mesh geometry={nodes.Object_12.geometry} material={materials.d9f14312_dds} />
        <a.mesh geometry={nodes.Object_13.geometry} material={materials.efe27007_dds} />
        <a.mesh geometry={nodes.Object_14.geometry} material={materials['7079af06_dds']} />
        <a.mesh geometry={nodes.Object_15.geometry} material={materials['338f7b62_dds']} />
        <a.mesh geometry={nodes.Object_16.geometry} material={materials.f826d270_dds} />
        <a.mesh geometry={nodes.Object_17.geometry} material={materials['87874d15_dds']} />
        <a.mesh geometry={nodes.Object_18.geometry} material={materials.c6920a60_dds} />
        <a.mesh geometry={nodes.Object_19.geometry} material={materials['06e18bcf_dds']} />
        <a.mesh geometry={nodes.Object_20.geometry} material={materials['06e18bcf_dds']} />
        <a.mesh geometry={nodes.Object_21.geometry} material={materials['226550e7_dds']} />
        <a.mesh geometry={nodes.Object_22.geometry} material={materials['226550e7_dds']} />
        <a.mesh geometry={nodes.Object_23.geometry} material={materials['90455aaf_dds']} />
        <a.mesh geometry={nodes.Object_24.geometry} material={materials['90455aaf_dds']} />
        <a.mesh geometry={nodes.Object_25.geometry} material={materials['608b16e7_dds']} />
        <a.mesh geometry={nodes.Object_26.geometry} material={materials['608b16e7_dds']} />
        <a.mesh geometry={nodes.Object_27.geometry} material={materials['7079af06_dds']} />
      </a.group>
    </a.group>
  )
}

useGLTF.preload('/Legacy.gltf')
