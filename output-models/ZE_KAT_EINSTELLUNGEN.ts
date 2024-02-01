import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ZE_KAT_EINSTELLUNGENAttributes {
    L_KAPPUNGSGRENZE?: number;
    DTEDIT?: Date;
    L_MAXIMALESGLEITZEITGUTHABEN?: number;
    STRID: string;
    L_STANDARDBEGINNSTUNDE?: number;
    L_MAXIMALESGLEITZEITDEFIZIT?: number;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    L_STANDARDENDESTUNDE?: number;
    L_MAXIMALETAEGLICHEARBEITSZE?: number;
}

@Table({
	tableName: "ZE_KAT_EINSTELLUNGEN",
	timestamps: false 
})
export class ZE_KAT_EINSTELLUNGEN extends Model<ZE_KAT_EINSTELLUNGENAttributes, ZE_KAT_EINSTELLUNGENAttributes> implements ZE_KAT_EINSTELLUNGENAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_KAPPUNGSGRENZE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_MAXIMALESGLEITZEITGUTHABEN?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_STANDARDBEGINNSTUNDE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_MAXIMALESGLEITZEITDEFIZIT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_STANDARDENDESTUNDE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_MAXIMALETAEGLICHEARBEITSZE?: number;

}