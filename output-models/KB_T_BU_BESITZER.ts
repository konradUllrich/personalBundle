import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_BU_BESITZERAttributes {
    FKSTRID?: string;
    LUSERIDINSERT?: number;
    REF_BENUTZER?: number;
    LUSERID?: number;
    DTEDIT?: Date;
    STRID: string;
    DTINSERT?: Date;
}

@Table({
	tableName: "KB_T_BU_BESITZER",
	timestamps: false 
})
export class KB_T_BU_BESITZER extends Model<KB_T_BU_BESITZERAttributes, KB_T_BU_BESITZERAttributes> implements KB_T_BU_BESITZERAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_BENUTZER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

}