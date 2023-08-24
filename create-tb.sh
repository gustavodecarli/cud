#!/bin/bash

# Example
# npm run create monedas

if [ -z ${1} ];
then
        echo "ERROR - Parameter 1 missing"
        exit 0;
fi



#Minuscula
name=$(tr A-Z a-z <<< ${1})

#Camel
Name=${1}

#Camel Primera minuscula
nAme=$(tr A-Z a-z <<< ${Name:0:1})${Name:1}

echo ${Name}
echo ${name}
echo ${nAme}

pathAction=./actions/${name}.ts
pathEntity=./entity/${Name}.ts
pathReducer=./reducers/${nAme}Reducer.ts
pathRepository=./repository/${nAme}Repository.ts
pathApi=./pages/api/${name}
pathApp=./app/${name}


# ENTITY
cp ./entity/Nacionalidad.ts ${pathEntity}
chmod -R 777 ${pathEntity}
sed -i '' "s/nacionalidad/${name}/g" ${pathEntity}
sed -i '' "s/Nacionalidad/${Name}/g" ${pathEntity}

# ACTION 
cp ./actions/nacionalidad.ts ${pathAction}
chmod -R 777 ${pathAction}
sed -i '' "s/nacionalidad/${name}/g" ${pathAction}
sed -i '' "s/Nacionalidad/${Name}/g" ${pathAction}
sed -i '' "s/${name}Repository/${nAme}Repository/g" ${pathAction}

#REDUCER
cp ./reducers/nacionalidadReducer.ts ${pathReducer}
chmod -R 777 ${pathReducer}
sed -i '' "s/nacionalidad/${name}/g" ${pathReducer}
sed -i '' "s/Nacionalidad/${Name}/g" ${pathReducer}

#REPOSITORY
cp ./repository/nacionalidadRepository.ts ${pathRepository}
chmod -R 777 ${pathRepository}
sed -i '' "s/nacionalidad/${name}/g" ${pathRepository}
sed -i '' "s/Nacionalidad/${Name}/g" ${pathRepository}

#API
cp -R ./pages/api/nacionalidad/ ${pathApi}
chmod -R 777 ${pathApi}
sed -i '' "s/nacionalidad/${name}/g" ${pathApi}/[id].ts
sed -i '' "s/nacionalidad/${name}/g" ${pathApi}/index.ts
sed -i '' "s/Nacionalidad/${Name}/g" ${pathApi}/[id].ts
sed -i '' "s/Nacionalidad/${Name}/g" ${pathApi}/index.ts

#APP
cp -R ./app/nacionalidad ${pathApp}
chmod -R 777 ${pathApp}
sed -i '' "s/nacionalidad/${name}/g" ${pathApp}/page.tsx
sed -i '' "s/Nacionalidad/${Name}/g" ${pathApp}/page.tsx

sed -i '' "s/nacionalidad/${name}/g" ${pathApp}/form/page.tsx
sed -i '' "s/Nacionalidad/${Name}/g" ${pathApp}/form/page.tsx

sed -i '' "s/nacionalidad/${name}/g" ${pathApp}/table/table.tsx
sed -i '' "s/Nacionalidad/${Name}/g" ${pathApp}/table/table.tsx

sed -i '' "s/${name}Reducer/${nAme}Reducer/g" ${pathApp}/page.tsx
sed -i '' "s/${name}Reducer/${nAme}Reducer/g" ${pathApp}/table/table.tsx



sed -i '' "s/\/\*IMPORTS\*\//import ${nAme}Reducer from '..\/reducers\/${nAme}Reducer';\r \/*IMPORTS*\//g" ./store/store.ts
sed -i '' "s/\/\*REDUCERS\*\//${name}: ${nAme}Reducer,\r    \/*REDUCERS*\//g" ./store/store.ts


sed -i '' "s/\/\*MENUS\*\//, {\r  name: '${Name}',\r  route: '${name}'\r },\r \/*MENUS*\//g" ./app/configurate/page.tsx

sed -i '' "s/\/\*MODELOS\*\//import {${Name}} from '.\/entity\/${Name}';\r \/*MODELOS*\//g" ./ormconfig.ts
sed -i '' "s/entities\: \[/entities\: \[\r    ${Name},/g" ./ormconfig.ts


