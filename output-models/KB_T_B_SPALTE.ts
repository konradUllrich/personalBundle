import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_SPALTEAttributes {
    STR_SORTIERUNG?: string;
    STRID: string;
    STR_SORTIERUNGSRICHTUNG?: string;
    LUSERID?: number;
    FKSTRID?: string;
    L_INDEX?: number;
    B_ALLEKARTENERLEDIGT?: boolean;
    DTEDIT?: Date;
    STR_SPALTENTITEL?: string;
    L_WIPLIMIT?: number;
    DTINSERT?: Date;
    L_ANZAHLERLEDIGTEKARTEN?: number;
    LUSERIDINSERT?: number;
}

@Table({
	tableName: "KB_T_B_SPALTE",
	timestamps: false 
})
export class KB_T_B_SPALTE extends Model<KB_T_B_SPALTEAttributes, KB_T_B_SPALTEAttributes> implements KB_T_B_SPALTEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNGSRICHTUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_INDEX?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ALLEKARTENERLEDIGT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SPALTENTITEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_WIPLIMIT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLERLEDIGTEKARTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

}