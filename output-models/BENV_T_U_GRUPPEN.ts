import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface BENV_T_U_GRUPPENAttributes {
    L_OBJECTID?: number;
    DTINSERT?: Date;
    STR_NAME?: string;
    FKLID?: number;
    STRID: string;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    L_PARENTOBJECTID?: number;
    LUSERID?: number;
}

@Table({
	tableName: "BENV_T_U_GRUPPEN",
	timestamps: false 
})
export class BENV_T_U_GRUPPEN extends Model<BENV_T_U_GRUPPENAttributes, BENV_T_U_GRUPPENAttributes> implements BENV_T_U_GRUPPENAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_OBJECTID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKLID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_PARENTOBJECTID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

}