import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_BESITZERAttributes {
    REF_BENUTZER?: number;
    DTEDIT?: Date;
    FKSTRID?: string;
    LUSERID?: number;
    DTINSERT?: Date;
    STRID: string;
    LUSERIDINSERT?: number;
}

@Table({
	tableName: "KB_T_B_BESITZER",
	timestamps: false 
})
export class KB_T_B_BESITZER extends Model<KB_T_B_BESITZERAttributes, KB_T_B_BESITZERAttributes> implements KB_T_B_BESITZERAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_BENUTZER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

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

}