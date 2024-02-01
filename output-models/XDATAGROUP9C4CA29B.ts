import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XDATAGROUP9C4CA29BAttributes {
    STRID: string;
    DTINSERT?: Date;
    DTEDIT?: Date;
    LUSERIDINSERT?: number;
    FKSTRID?: string;
    LUSERID?: number;
    REF_CF096AF6?: string;
}

@Table({
	tableName: "XDATAGROUP9C4CA29B",
	timestamps: false 
})
export class XDATAGROUP9C4CA29B extends Model<XDATAGROUP9C4CA29BAttributes, XDATAGROUP9C4CA29BAttributes> implements XDATAGROUP9C4CA29BAttributes {

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

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

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
    	type: DataType.STRING(255) 
    })
    	REF_CF096AF6?: string;

}