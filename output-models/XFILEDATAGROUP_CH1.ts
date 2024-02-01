import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XFILEDATAGROUP_CH1Attributes {
    STRMETA?: string;
    STRCONTENTTYPE?: string;
    LORDER?: number;
    STRID: string;
    STRFILENAME?: string;
    STRURL?: string;
    DTEDIT?: Date;
    DTINSERT?: Date;
    DTLASTMODIFY?: Date;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    FKSTRID?: string;
}

@Table({
	tableName: "XFILEDATAGROUP_CH1",
	timestamps: false 
})
export class XFILEDATAGROUP_CH1 extends Model<XFILEDATAGROUP_CH1Attributes, XFILEDATAGROUP_CH1Attributes> implements XFILEDATAGROUP_CH1Attributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRMETA?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRCONTENTTYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LORDER?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

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
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTLASTMODIFY?: Date;

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
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

}