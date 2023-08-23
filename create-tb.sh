#!/bin/bash

# Example
# npm run create monedas

if [ -z ${1} ];
then
        echo "ERROR - Parameter missing"
        exit 0;
fi

name=${1}
Name=$(tr a-z A-Z <<< ${name:0:1})${name:1}
pathAction=./actions/${name}.ts
pathEntity=./entity/${Name}.ts
pathReducer=./reducers/${name}Reducer.ts
pathRepository=./repository/${name}Repository.ts
pathApi=./pages/api/${name}
pathApp=./app/${name}

# if [ -d ${pathiAction} ];
#then
#        echo "Desea forzar la regenracion y/n  ?"
#        read force
#
#       if [ "$force" != "y" ]; 
#       then
#                echo "ERROR - Directorio existente, se anula el proceso"
#                exit 0;
#        else
#                rm -rf ${path}
#        fi
#fi

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
cp -R ./pages/api/nacionalidad/* ${pathApi}
chmod -R 777 ${pathApi}
sed -i '' "s/nacionalidad/${name}/g" ${pathApi}/[id].ts
sed -i '' "s/nacionalidad/${name}/g" ${pathApi}/index.ts
sed -i '' "s/Nacionalidad/${Name}/g" ${pathApi}/[id].ts
sed -i '' "s/Nacionalidad/${Name}/g" ${pathApi}/index.ts


#APP
cp -R ./app/nacionalidad/* ${pathApp}
chmod -R 777 ${pathApp}
sed -i '' "s/nacionalidad/${name}/g" ${pathApp}/page.tsx
sed -i '' "s/Nacionalidad/${Name}/g" ${pathApp}/page.tsx
sed -i '' "s/nacionalidad/${name}/g" ${pathApp}/form/page.tsx
sed -i '' "s/Nacionalidad/${Name}/g" ${pathApp}/form/page.tsx
sed -i '' "s/nacionalidad/${name}/g" ${pathApp}/table/table.tsx
sed -i '' "s/Nacionalidad/${Name}/g" ${pathApp}/table/table.tsx


#sed -i '' "s/\/\*\*\//${name}: ${name}Reducer,$CR \/**\//g" ./store/store.ts

