import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XFILEDATAGROUP123Attributes {
    LUSERIDINSERT?: number;
    STRFILENAME?: string;
    STRURL?: string;
    STRID: string;
    DTEDIT?: Date;
    STRMETA?: string;
    LUSERID?: number;
    DTINSERT?: Date;
    STRCONTENTTYPE?: string;
    FKSTRID?: string;
    DTLASTMODIFY?: Date;
    LORDER?: number;
}

@Table({
	tableName: "XFILEDATAGROUP123",
	timestamps: false 
})
export class XFILEDATAGROUP123 extends Model<XFILEDATAGROUP123Attributes, XFILEDATAGROUP123Attributes> implements XFILEDATAGROUP123Attributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRFILENAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRURL?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STRMETA?: string;

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
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRCONTENTTYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTLASTMODIFY?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LORDER?: number;

}